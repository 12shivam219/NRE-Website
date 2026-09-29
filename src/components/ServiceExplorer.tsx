"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { coreServices } from "@/lib/site";
import { serviceVisuals } from "@/lib/serviceVisuals";

export function ServiceExplorer() {
  const [selected, setSelected] = useState(0);
  const service = coreServices[selected];
  const visual = serviceVisuals[selected];

  function handleKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % coreServices.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + coreServices.length) % coreServices.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = coreServices.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    document.getElementById(`service-tab-${next}`)?.focus();
  }

  return <section className="service-experience" aria-labelledby="service-experience-title">
    <div className="container">
      <div className="service-experience-heading"><div><p className="eyebrow">SEE THE POSSIBILITIES</p><h2 id="service-experience-title">Services in motion.</h2></div><p>Choose a capability to see the people and a sample workflow behind that kind of work.</p></div>
      <div className="service-explorer">
        <div className="service-explorer-tabs" role="tablist" aria-label="Explore services">
          {coreServices.map((item, index) => <button key={item.slug} type="button" id={`service-tab-${index}`} role="tab" aria-selected={selected === index} aria-controls="service-explorer-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => handleKeys(event, index)}><span>{item.number}</span><strong>{item.title}</strong><b aria-hidden="true">↗</b></button>)}
        </div>
        <div id="service-explorer-panel" className="service-explorer-panel" role="tabpanel" aria-labelledby={`service-tab-${selected}`} tabIndex={0}>
          <div className="service-explorer-scene" key={visual.slug}>
            <Image src={visual.image} alt={visual.alt} fill sizes="(max-width: 900px) 100vw, 65vw" />
            <div className="service-photo-credit">Illustrative photo · <a href={visual.source} target="_blank" rel="noopener noreferrer">{visual.credit} / Unsplash ↗</a></div>
            <div className="example-workflow"><div className="example-workflow-top"><span className="workflow-status" aria-hidden="true" /> EXAMPLE WORKFLOW</div><strong>{service.title}</strong><ol>{visual.steps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol><div className="example-progress" aria-hidden="true"><span /></div></div>
          </div>
          <div className="service-explorer-description"><div><span className="service-explorer-count">{service.number} / 07</span><h3>{visual.scene}</h3><p>{service.brief}</p></div><Link href={`#${service.slug}`} className="inline-link">Explore this service <span aria-hidden="true">↗</span></Link></div>
        </div>
      </div>
      <p className="service-photo-disclaimer">Photographs are licensed editorial illustrations. The people pictured are not presented as NRE team members or clients. Workflow panels show example processes, not completed projects.</p>
    </div>
  </section>;
}
