import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageIntro } from "@/components/SiteFrame";

export const metadata: Metadata = { title: "Business & Technology Solutions", description: "NRE TechOne Solutions combines technology, strategy, data, marketing and commerce around your business requirement." };

const solutions = [
  { n: "01", title: "Digital transformation", body: "Identify where connected digital workflows can improve operations, customer experiences and decisions." },
  { n: "02", title: "Business technology", body: "Plan and develop tools that support the way your business works." },
  { n: "03", title: "Digital growth", body: "Connect website development, digital marketing, analytics and strategy to strengthen your online presence." },
  { n: "04", title: "Data-led decisions", body: "Organize performance information into reports and dashboards that help you see what is happening." },
  { n: "05", title: "Startup technology", body: "Shape an early idea into a roadmap, MVP or digital product that can be tested and improved." },
  { n: "06", title: "E-commerce", body: "Build an online storefront and connect it with the customer journey and business processes." },
];

export default function Solutions() {
  return <><PageIntro eyebrow="OUR SOLUTIONS" title="Solutions shaped around the requirement." description="Every business has different goals, customers and constraints. We combine capabilities around the work that needs to get done." />
    <section className="section container"><div className="solution-grid">{solutions.map(solution => <article key={solution.n}><span>{solution.n}</span><h2>{solution.title}</h2><p>{solution.body}</p><Link href="/contact" aria-label={`Discuss ${solution.title}`}>Explore a project <span aria-hidden="true">↗</span></Link></article>)}</div></section>
    <section className="mindset-section"><div className="container mindset-grid"><div><p className="eyebrow">OUR TECHNOLOGY MINDSET</p><h2>Useful first. Ready to evolve.</h2><p>The best solution makes sense to the people who use it and the business it serves.</p></div><div className="mindset-list"><div><b>Useful</b><span>Solves a real business requirement.</span></div><div><b>Accessible</b><span>Works for the people using it.</span></div><div><b>Scalable</b><span>Can evolve as needs change.</span></div><div><b>Informed</b><span>Uses meaningful data and feedback.</span></div></div></div></section>
    <ContactBand title="Your requirement may cross categories." body="Share the challenge. We'll explore the right mix of strategy, technology, data, marketing and commerce." />
  </>;
}
