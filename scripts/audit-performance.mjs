import { spawn } from "node:child_process";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";

// Install audit tools separately; they are not application dependencies.
// CHROME_PATH=... LIGHTHOUSE_CLI=... node scripts/audit-performance.mjs loading /tmp/nre-audit
const [stage = "current", output = "/tmp/nre-audit"] = process.argv.slice(2);
const chrome = process.env.CHROME_PATH;
const cli = process.env.LIGHTHOUSE_CLI;
if (!chrome || !cli) throw new Error("Set CHROME_PATH and LIGHTHOUSE_CLI to the audit executables.");
const flags = ["--headless", "--no-sandbox", "--ignore-certificate-errors"];
if (process.env.HTTPS_PROXY) flags.push(`--proxy-server=${process.env.HTTPS_PROXY}`);
const url = "http://127.0.0.1:3101";
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3101"], { stdio: ["ignore", "ignore", "inherit"] });

try {
  await mkdir(output, { recursive: true });
  let html;
  for (let i = 0; i < 100; i++) {
    try { const response = await fetch(url); if (response.ok) { html = await response.text(); break; } } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  if (!html) throw new Error("Production server did not become ready.");
  // Match the baseline warm-up while keeping each Lighthouse browser cache cold.
  for (const [name, width] of [["team-collaboration", 750], ["nre-logo", 256]]) {
    const image = [...html.matchAll(/src="([^\"]*\/_next\/image[^\"]*)"/g)].find(match => match[1].includes(name));
    if (image) {
      const src = new URL(image[1].replaceAll("&amp;", "&"), url);
      src.searchParams.set("w", String(width));
      await fetch(src);
    }
  }
  for (let run = 1; run <= 2; run++) {
    const report = path.resolve(output, `${stage}-${run}.json`);
    await new Promise((resolve, reject) => {
      const child = spawn(process.execPath, [cli, url, "--only-categories=performance", `--chrome-flags=${flags.join(" ")}`, "--output=json", `--output-path=${report}`, "--quiet"], { stdio: "inherit", env: { ...process.env, CHROME_PATH: chrome } });
      child.on("error", reject);
      child.on("exit", code => code === 0 ? resolve() : reject(new Error(`Lighthouse exited ${code}`)));
    });
    const result = JSON.parse(await readFile(report, "utf8"));
    const value = id => result.audits[id].numericValue;
    console.log(JSON.stringify({ stage, run, performance: result.categories.performance.score * 100, lcpMs: value("largest-contentful-paint"), tbtMs: value("total-blocking-time"), cls: value("cumulative-layout-shift"), transferBytes: value("total-byte-weight"), warnings: result.runWarnings }));
  }
} finally {
  server.kill();
}
