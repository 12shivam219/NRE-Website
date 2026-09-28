# NRE TechOne Solutions website

A responsive Next.js landing page for NRE's staffing, consulting, and digital services.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run build` and `npm run lint` before release.

## Before publishing

The contact panel deliberately does not display an invented email address or submit to an unconfigured endpoint. Replace the note in `src/app/page.tsx` with NRE's verified contact details or wire a form to an approved destination before using the page to collect inquiries.

The logo asset is in `public/assets/nre-logo.jpeg`. The page uses the company's existing service descriptions as its content basis. The decorative hero artwork is made with CSS and contains no external image dependency.
