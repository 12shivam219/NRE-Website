import { coreServices } from "@/lib/site";
import { ServiceExplorerDeferred } from "@/components/ServiceExplorerDeferred";
import { ServiceExplorerPanel } from "@/components/ServiceExplorerPanel";

export function ServiceExplorer() {
  const tabs = coreServices.map(({ slug, number, title }) => ({ slug, number, title }));
  const panels = tabs.map((tab, index) => <ServiceExplorerPanel key={tab.slug} index={index} />);
  const fallback = <div className="service-explorer">
    <nav className="service-explorer-tabs" aria-label="Explore services">
      {tabs.map((item, index) => <a key={item.slug} href={`#${item.slug}`} data-service-index={index} data-selected={index === 0}><span>{item.number}</span><strong>{item.title}</strong><b aria-hidden="true">↗</b></a>)}
    </nav>
    <div className="service-explorer-panel">{panels[0]}</div>
  </div>;
  return <section className="service-experience" aria-labelledby="service-experience-title">
    <div className="container">
      <div className="service-experience-heading"><div><p className="eyebrow">SEE THE POSSIBILITIES</p><h2 id="service-experience-title">Services in motion.</h2></div><p>Choose a capability to see the people and a sample workflow behind that kind of work.</p></div>
      <ServiceExplorerDeferred tabs={tabs} panels={panels} fallback={fallback} />
      <p className="service-photo-disclaimer">Photographs are licensed editorial illustrations. The people pictured are not presented as NRE team members or clients. Workflow panels show example processes, not completed projects.</p>
    </div>
  </section>;
}
