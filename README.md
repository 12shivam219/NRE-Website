# NRE TechOne website

A Next.js website built from the client-provided **WebPage Content-NRETechOne.pdf** and **NRE_TechOne_WhatsApp_Digital_Solutions.pptx**. The site has Home, About, Services, Solutions, Our Brands, Contact, and WhatsApp Solutions pages.

## Run locally

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>. Run `npm run build` and `npm run lint` before publishing.

## Contact and inquiry behavior

The current contact email is `info@nretechone.com`. Public locations are New Jersey, NJ, USA (NRE TechOne LLC) and Bhopal, Madhya Pradesh, India (NRE TechOne Solutions). No business contact number is published. The inquiry form opens a draft in the visitor's email application; there is no server-side submission or storage.

The two editorial photos in `public/assets` are illustrative generated imagery, not photos of NRE staff or client projects. Motion respects reduced-motion preferences.

The seven photographs in `public/assets/services` are optimized copies of free Unsplash photos. Their photographer names and source pages are recorded in `src/lib/serviceVisuals.ts` and credited in the Services explorer. They illustrate each service; the pictured people and screens are not NRE staff, clients, or delivered projects. Replace them with approved company and project photography when available. The interactive example workflows are illustrative and respect reduced-motion preferences.

## Logo motion and client review

The header animates the existing client emblem with a gold ring draw, a short reveal, and one light sweep. Header and footer marks respond to hover/focus. Reduced-motion preferences disable motion. The original emblem file is unchanged.

`/brand-preview` is a client review page (noindex, not linked in the public navigation) with an animation replay control and three downloadable SVG concepts: refined emblem, modern monogram, and connected pillars. These are alternatives for review; the current emblem remains the website identity.
