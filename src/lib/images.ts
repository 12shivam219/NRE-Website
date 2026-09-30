// Layout widths mirror the container and grid breakpoints in globals.css.
export const images = {
  hero: "/assets/team-collaboration.f31a502e.webp",
  about: "/assets/mobile-design-session.5fa983f6.webp",
  logo: "/assets/nre-client-original.d935ad5c.jpeg",
  logoPreview: "/assets/nre-client-original.d935ad5c.jpeg",
} as const;

export const imageSizes = {
  hero: "(max-width: 650px) calc(100vw - 36px), (max-width: 900px) calc(100vw - 48px), (max-width: 1100px) calc(49vw - 23.52px), (max-width: 1360px) calc(49vw - 39.2px), 627.2px",
  about: "(max-width: 650px) calc(100vw - 36px), (max-width: 900px) calc(100vw - 48px), (max-width: 1100px) calc(45vw - 21.6px), (max-width: 1360px) calc(45vw - 36px), 576px",
  serviceCard: "(max-width: 650px) calc(100vw - 36px), (max-width: 1100px) calc((100vw - 78px) / 3), (max-width: 1360px) calc((100vw - 110px) / 3), 416.67px",
  serviceExplorer: "(max-width: 650px) calc(100vw - 38px), (max-width: 900px) calc(100vw - 50px), (max-width: 1100px) calc(100vw - 300px), (max-width: 1360px) calc(72vw - 59.04px), 920.16px",
  appCard: "(max-width: 650px) 186.6px, (max-width: 900px) 146.6px, 166.6px",
  appExplorer: "(max-width: 900px) 286.6px, 303.2px",
  logo: "(max-width: 650px) 78px, 96px",
  logoPreview: "(max-width: 900px) 225px, 270px",
} as const;

export const heroBlurDataURL = "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoQAAsABABoJZACdADSCPVWkjwAAP7YSHwqYJD2NhJgDn8XYylYdwbi+uzDeO5yD8IhDBfgm90I19srPWRJzkWJAmJ8MGCxhEPw0I1lYRSjDWLTwgKAAA==";
