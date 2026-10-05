import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageIntro } from "@/components/SiteFrame";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { coreServices } from "@/lib/site";

export const metadata: Metadata = { title: "Technology & Digital Services", description: "Explore NRE TechOne services in digital marketing, analytics, strategy, websites, apps, startup support, e-commerce and business messaging." };

export default function Services() {
  return <><PageIntro eyebrow="OUR SERVICES" title="Technology, strategy and digital services under one roof." description="Choose the capability you need, or combine several into a solution that fits your business requirements." />
    <ServiceExplorer />
    <section className="section container service-directory"><div className="service-jump" aria-label="Jump to service">{coreServices.map(service => <a href={`#${service.slug}`} key={service.slug}>{service.title}</a>)}</div><div className="detailed-services">{coreServices.map(service => <article id={service.slug} key={service.slug}><div className="service-title"><span>{service.number} / 07</span><h2>{service.title}</h2><p>{service.brief}</p></div><div className="service-detail"><p>{service.detail}</p><h3>What this can include</h3><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><Link href="/contact" className="inline-link">Discuss this service <span aria-hidden="true">↗</span></Link></div></article>)}</div></section>
    <section className="service-feature"><div className="container service-feature-inner"><div><p className="eyebrow">BUSINESS COMMUNICATION</p><h2>WhatsApp Business, API and automation.</h2><p>Connect customer conversations to useful actions: enquiries, appointments, updates, support and follow-ups. The right flow depends on your systems and your customers.</p></div><Link href="/whatsapp-solutions" className="button button-light">Explore messaging solutions <span aria-hidden="true">↗</span></Link></div></section>
    <ContactBand title="Need a custom solution?" body="Tell us what you are trying to achieve. We can explore a combination of services around the requirement." />
  </>;
}
