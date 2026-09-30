# Phase 1 performance work

## Measurement protocol

Baseline source: `1d8b8dad322a790c1ac2a67c8838620c4d970202`.
Two sequential cold-browser Lighthouse mobile runs per stage, Lighthouse 12.8.2,
Chrome 131, default simulated mobile throttling (4x CPU), production `next build`
and `next start`. The URL is `http://127.0.0.1:3101`. Server image generation is
warmed before measurements. Exact settings, every result and warnings are in
`phase-1-results.json`. Baseline external Google font requests use the environment's
network proxy; later stages self-host fonts. CPU/network variance is material.

The earlier **live Netlify** baseline was 93/93, LCP 2.74/2.62 s,
TBT 104/113 ms, CLS 0.002824/0.002824, transfer 347357/347283 bytes.
Do not compare local timings with those live timings as equivalent environments.
Deployment and CDN cache behavior require a production check after merge.

| Stage (two runs) | Performance | LCP (s) | TBT (ms) | CLS | Transfer (bytes) |
| --- | --- | --- | --- | --- | --- |
| Local baseline | 87 / 79 | 2.37 / 2.69 | 43 / 227 | .02047 / .10392 | 337948 / 337945 |
| Step 1: fonts | 95 / 97 | 2.83 / 2.68 | 66 / 57 | 0 / 0 | 337971 / 337971 |
| Step 2: images | 96 / 96 | 2.76 / 2.73 | 89 / 55 | 0 / 0 | 309883 / 309883 |
| Step 3: loading/caching | 97 / 97 | 2.68 / 2.68 | 30.5 / 31.5 | 0 / 0 | 309962 / 309962 |

Baseline run 2 has Lighthouse's slow-CPU warning. No score has been discarded.

## Step 1 — fonts

- Replaced the Google CSS import with `next/font/google` for DM Sans and Manrope.
- Requested only normal weights 400, 700 and 800, including DM Sans 800.
- Used `display: swap`, Arial/sans-serif fallback and `adjustFontFallback: true`.
- Applied the generated family variables to body, headings and existing font shorthands.
- Production build passes. Built CSS contains no Google font network URLs.
- CLS improved in both runs. LCP has not yet met the 2.5 s target.
- Copy, routes, colors and illustrative captions are unchanged.

## Step 2 — images

- Hero sizes now switch to one column at 900px and cap at 627.2px desktop; added
  a tiny WebP blur placeholder and explicit high fetch priority.
- New centered square logo is 128x128 WebP, 3026 bytes, with a content hash in
  the filename. Header alone uses priority; footer and review logo are lazy.
- Corrected card, about, explorer and preview-logo sizes. Portrait app photos
  use a narrower size hint; contain framing preserves the full phone, and the
  mobile workflow card sits below the photo so it does not obscure the subject.
- Image candidates top out at 1600px; no 3840px candidate is emitted.
- Verified production build, desktop/mobile image framing and hero selection at
  390px, 850px and 1440px viewports (DPR 2). The browser selected 750, 1600 and
  1200px respectively. Existing Tailwind container caps can make tablet boxes
  slightly narrower than their conservative size hint.
- Transfer fell by 28088 bytes from Step 1 in both final runs. LCP remains above
  target; no timing improvement is claimed for this step.

## Step 3 — loading and caching

- Service headings, photo panels, workflow copy and captions now render on the
  server. The small tab controller loads through `next/dynamic` when the explorer
  approaches the viewport, or receives pointer/focus interaction. Its initial
  server-rendered panel remains visible while the chunk loads. Without JavaScript,
  the seven service links still lead to the detailed service sections.
- At 412x823 the explorer begins at y=752.5, so the visible controller loads
  immediately. At 412x500 it stays deferred until scrolling. Deferral is conditional,
  not an assertion that this component is below the fold on every screen.
- Added 31-day `minimumCacheTTL`; versioned source assets receive one-year immutable
  cache headers in `public/_headers` and `next.config.ts`. Local optimized responses
  inherit the larger upstream one-year lifetime, with `must-revalidate`.
- Every asset under `/assets/` now has a content hash in its filename. When replacing
  an image, calculate a new hash/name and update its reference; never overwrite a
  cached URL. Existing photos and colors are unchanged.
- Removed unused `nre-logo.jpeg` and `concepts-preview.png` (559534 source bytes).
- Kept `/brand-preview`, its existing noindex/nofollow metadata and added the same
  HTTP directive. There is no sitemap in the repository and therefore no review-page
  entry to remove. No new page routes were added.
- Build, TypeScript, lint and diff checks pass. Browser checks passed for all eight
  routes, seven service tabs, Home/End keyboard focus, no-JavaScript fallback links,
  deferred loading, image decoding, absent 3840px candidates and no client errors.
- Verified local raw image headers: `public, max-age=31536000, immutable`;
  optimized image headers: `public, max-age=31536000, must-revalidate`;
  preview response: `X-Robots-Tag: noindex, nofollow`.
- Two final runs: 97/97, LCP 2.675/2.676s, TBT 30.5/31.5ms, CLS 0/0.
  The performance and CLS targets pass locally. **LCP remains about 0.18s above
  the 2.5s target.** No live after-deployment result is claimed.
- These final measurements were made after resuming the workspace the following
  day, using the same Chrome/Lighthouse versions and emulation settings; host
  contention still limits fine-grained timing comparisons.

## Reproduce the audit

Build with `npm run build`. Install Lighthouse 12.8.2 outside the app and use
Chrome 131. Then run:

```sh
CHROME_PATH=/path/to/chrome-headless-shell \
LIGHTHOUSE_CLI=/path/to/lighthouse/cli/index.js \
node scripts/audit-performance.mjs loading /tmp/nre-audit
```

The script starts and stops its own production server and writes two full reports.
Use the same command on each commit; the prior stage is the next stage's before
measurement. Report browser-cache and network context when comparing results.

## Stop point

Phase 1 changes are committed for review. Phase 2 motion and Phase 3 layout work
have not started. Recheck Netlify's deployed headers and run live Lighthouse after
merge; local data does not prove production LCP.
