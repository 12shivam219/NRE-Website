import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageIntro } from "@/components/SiteFrame";

export const metadata: Metadata = { title: "WhatsApp Business & Automation", description: "Explore WhatsApp Business messaging, API integration, chatbots, automation, customer engagement and industry workflows with NRE TechOne." };

const capabilities = [
  { n: "01", title: "Business messaging", body: "Plan campaigns, announcements and updates for customers who have chosen to hear from your business." },
  { n: "02", title: "WhatsApp API integration", body: "Connect conversations with a CRM, website, HIMS or other business system so teams can act on the enquiry." },
  { n: "03", title: "Chatbot support", body: "Handle common questions, lead capture and appointment requests with a guided first response." },
  { n: "04", title: "Workflow automation", body: "Trigger reminders, status updates, alerts and follow-ups from relevant business events." },
  { n: "05", title: "Customer engagement", body: "Design timely conversations that help people get an answer or complete a task." },
  { n: "06", title: "More messaging channels", body: "Explore SMS and RCS where a different channel better fits the message and audience." },
  { n: "07", title: "Business presence", body: "Plan a professional WhatsApp Business presence and explore available verification steps where applicable." },
  { n: "08", title: "Multi-device workflows", body: "Explore ways for the right team members to handle customer conversations across devices and workflows." },
];
const industries = [
  { title: "Healthcare", items: ["Appointment reminders", "Booking enquiries", "Follow-up messages", "HIMS-connected notifications"] },
  { title: "Real estate", items: ["Property enquiries", "Site visit scheduling", "Launch updates", "Customer follow-ups"] },
  { title: "Startups", items: ["Lead capture", "Customer onboarding", "Product updates", "Support and feedback"] },
];
const flow = ["Customer", "WhatsApp", "API", "Business system", "Automation or team", "Outcome"];

export default function WhatsAppSolutions() {
  return <><PageIntro eyebrow="WHATSAPP BUSINESS & DIGITAL COMMUNICATION" title="Make customer conversations more useful." description="Connect WhatsApp Business messaging, API integrations and automation with the systems your team already uses." />
    <section className="section container"><div className="section-top"><div><p className="eyebrow">WHAT WE CAN BUILD</p><h2>From an enquiry to the next action.</h2></div><p>Start with a specific customer need, then choose the messaging and workflow capabilities that fit it.</p></div><div className="capability-grid">{capabilities.map(item => <article key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
    <section className="workflow-section"><div className="container"><p className="eyebrow">HOW AN INTEGRATION WORKS</p><h2>A conversation connected to your workflow.</h2><p className="workflow-intro">This example illustrates a possible flow. The actual integration depends on your business systems and requirements.</p><ol className="workflow-steps">{flow.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol><p className="workflow-result">For example: a lead, booking, order update or support action.</p></div></section>
    <section className="section container"><div className="section-top"><div><p className="eyebrow">USE CASES</p><h2>Communication shaped by the industry.</h2></div><p>These are examples of the types of journeys we can discuss and tailor to your needs.</p></div><div className="industry-grid">{industries.map(industry => <article key={industry.title}><h3>{industry.title}</h3><ul>{industry.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div><div className="whatsapp-extra"><div><p className="eyebrow">HEALTHCARE COMMUNICATION</p><h3>HIMS + WhatsApp</h3><p>Connect appointments, registration and operational notifications to a patient communication flow. We would define the information shared and integration details with your team.</p></div><div><p className="eyebrow">DIGITAL PRESENCE</p><h3>Beyond messaging</h3><p>Pair WhatsApp with a professional website, Google Business Profile and digital marketing to make it easier for customers to find and contact you.</p></div></div></section>
    <section className="dark-section"><div className="container two-column"><div><p className="eyebrow">OTHER OPTIONS</p><h2>SMS and RCS</h2><p>For customer alerts, campaigns and richer interactive messages, we can explore SMS or RCS alongside WhatsApp.</p></div><div><p className="eyebrow">GET STARTED</p><h2>Start with one use case.</h2><p>Tell us what messages you send today and what you want customers or staff to do next.</p><Link href="/contact" className="inline-link light-link">Discuss a messaging workflow <span aria-hidden="true">↗</span></Link></div></div></section>
    <ContactBand title="Let's design a useful conversation." body="Share the customer journey, systems and outcomes you have in mind." />
  </>;
}
