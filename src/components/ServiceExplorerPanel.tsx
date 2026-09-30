import Image from "next/image";
import Link from "next/link";
import { imageSizes } from "@/lib/images";
import { coreServices } from "@/lib/site";
import { serviceVisuals } from "@/lib/serviceVisuals";

// Server-rendered slots keep imagery, credits and workflow copy out of the tab controller.
export function ServiceExplorerPanel({ index }: { index: number }) {
  const service = coreServices[index];
  const visual = serviceVisuals[index];
  return <>
          <div className={`service-explorer-scene${visual.slug === "app-development" ? " app-scene" : ""}`} key={visual.slug}>
            <Image src={visual.image} alt={visual.alt} fill sizes={visual.slug === "app-development" ? imageSizes.appExplorer : imageSizes.serviceExplorer} className={visual.slug === "app-development" ? "app-photo" : undefined} />
            <div className="service-photo-credit">Illustrative photo · <a href={visual.source} target="_blank" rel="noopener noreferrer">{visual.credit} / Unsplash ↗</a></div>
            <div className="example-workflow"><div className="example-workflow-top"><span className="workflow-status" aria-hidden="true" /> EXAMPLE WORKFLOW</div><strong>{service.title}</strong><ol>{visual.steps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol><div className="example-progress" aria-hidden="true"><span /></div></div>
          </div>
          <div className="service-explorer-description"><div><span className="service-explorer-count">{service.number} / 07</span><h3>{visual.scene}</h3><p>{service.brief}</p></div><Link href={`#${service.slug}`} className="inline-link">Explore this service <span aria-hidden="true">↗</span></Link></div>
  </>;
}
