import Link from "next/link";
import { contact, nav } from "@/lib/site";
import { BrandMark } from "@/components/BrandMark";

function Logo({ animated = false }: { animated?: boolean }) {
  return <Link href="/" className="brand" aria-label="NRE TechOne home"><BrandMark animated={animated} priority={animated} /><span className="brand-name"><strong>NRE TechOne</strong></span></Link>;
}

export function SiteHeader() {
  return <header className="site-header"><div className="container header-inner"><Logo animated /><nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><Link href="/contact" className="header-contact">Let&apos;s connect <span aria-hidden="true">↗</span></Link><details className="mobile-nav"><summary aria-label="Open navigation">Menu <span aria-hidden="true">☰</span></summary><nav aria-label="Mobile navigation"><Link href="/">Home</Link>{nav.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link href="/contact">Contact</Link></nav></details></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-main"><div><Logo /><p>Technology | Commerce | Innovation</p><p>One Platform. Multiple Solutions.</p></div><div><h2>Explore</h2><div className="footer-links"><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/whatsapp-solutions">WhatsApp solutions</Link><Link href="/brands">Our brands</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></div></div><div><h2>Get in touch</h2><address>{contact.locations.map(({ flag, entity, location }) => <span key={entity}>{flag} {entity} — {location}<br /></span>)}<a href={`mailto:${contact.email}`}>{contact.email}</a></address></div></div><div className="container footer-bottom"><span>© 2026 NRE TechOne LLC. All Rights Reserved.</span><span>NRE Infusion Technology · NR Enterprises · NRE TechOne Solutions</span></div></footer>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{description}</p></div></section>;
}

export function ContactBand({ title = "Have a project in mind?", body = "Tell us about your idea, business challenge or digital requirement. We'll explore the right next step with you." }: { title?: string; body?: string }) {
  return <section className="contact-band"><div className="container contact-band-inner"><div><p className="eyebrow">START A CONVERSATION</p><h2>{title}</h2><p>{body}</p></div><Link href="/contact" className="button button-light">Talk to NRE <span aria-hidden="true">↗</span></Link></div></section>;
}
