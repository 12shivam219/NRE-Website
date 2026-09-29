import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageIntro } from "@/components/SiteFrame";
import { contact } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us", description: "Contact NRE TechOne Solutions in Wyoming, USA about websites, applications, digital marketing, data analytics, strategy, e-commerce or WhatsApp Business solutions." };

export default function Contact() {
  return <><PageIntro eyebrow="LET'S CONNECT" title="Have an idea? Let's discuss it." description="Planning a digital product, improving your online presence or exploring a business solution? Tell us what you need." />
    <section className="section container contact-layout"><div className="contact-info"><p className="eyebrow">GET IN TOUCH</p><h2>Start a conversation.</h2><p>Share your business goal and the stage you&apos;re at. We can explore a practical next step together.</p><div className="contact-details"><div><span>LOCATION</span><p>{contact.location}</p></div><div><span>EMAIL</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div></div></div><div className="form-panel"><h2>Tell us about your project</h2><p>The more context you share, the easier it is to understand your requirement.</p><InquiryForm /></div></section>
    <section className="contact-bottom"><div className="container"><p className="eyebrow">TECHNOLOGY | COMMERCE | INNOVATION</p><h2>One Platform. Multiple Solutions.</h2><p>Innovating the Future...</p></div></section>
  </>;
}
