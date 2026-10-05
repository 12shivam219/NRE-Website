import type { Metadata } from "next";
import { ContactBand, PageIntro } from "@/components/SiteFrame";
import { brands } from "@/lib/site";

export const metadata: Metadata = { title: "Our Brands", description: "Meet NRE Infusion Technology, NR Enterprises and NRE TechOne Solutions, the technology, commerce and innovation initiatives under NRE TechOne." };

export default function Brands() {
  return <><PageIntro eyebrow="OUR BRANDS" title="One vision. Multiple initiatives." description="NRE TechOne brings technology, commerce and innovation initiatives together under one umbrella." />
    <section className="section container"><div className="brand-directory">{brands.map(brand => <article key={brand.name}><div className="brand-number">{brand.number} / 03</div><div><p className="eyebrow">{brand.focus}</p><h2>{brand.name}</h2><p>{brand.description}</p><strong>{brand.line}</strong></div><span className="brand-symbol" aria-hidden="true">✳</span></article>)}</div></section>
    <section className="brands-together"><div className="container"><p className="eyebrow">TOGETHER UNDER ONE ROOF</p><h2>Technology | Commerce | Innovation</h2><p>Each initiative has its own focus. Together, they support a broader approach to digital solutions and business opportunity.</p></div></section>
    <ContactBand title="Explore what's possible with NRE." />
  </>;
}
