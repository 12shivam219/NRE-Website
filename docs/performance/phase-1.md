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

Baseline run 2 has Lighthouse's slow-CPU warning. No score has been discarded.

## Step 1 — fonts

- Replaced the Google CSS import with `next/font/google` for DM Sans and Manrope.
- Requested only normal weights 400, 700 and 800, including DM Sans 800.
- Used `display: swap`, Arial/sans-serif fallback and `adjustFontFallback: true`.
- Applied the generated family variables to body, headings and existing font shorthands.
- Production build passes. Built CSS contains no Google font network URLs.
- CLS improved in both runs. LCP has not yet met the 2.5 s target.
- Copy, routes, colors and illustrative captions are unchanged.
