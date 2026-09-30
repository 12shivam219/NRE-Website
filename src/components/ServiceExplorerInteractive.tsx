"use client";

import { useEffect, useState, type KeyboardEvent, type ReactNode } from "react";

export type ExplorerProps = {
  tabs: { slug: string; number: string; title: string }[];
  panels: ReactNode[];
};

export default function ServiceExplorerInteractive({ tabs, panels, initialSelected = 0, restoreFocus = false }: ExplorerProps & { initialSelected?: number; restoreFocus?: boolean }) {
  const [selected, setSelected] = useState(initialSelected);

  useEffect(() => {
    if (restoreFocus) document.getElementById(`service-tab-${initialSelected}`)?.focus({ preventScroll: true });
  }, [initialSelected, restoreFocus]);

  function handleKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    document.getElementById(`service-tab-${next}`)?.focus();
  }

  return <div className="service-explorer">
    <div className="service-explorer-tabs" role="tablist" aria-label="Explore services">
      {tabs.map((item, index) => <button key={item.slug} type="button" id={`service-tab-${index}`} role="tab" aria-selected={selected === index} aria-controls="service-explorer-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => handleKeys(event, index)}><span>{item.number}</span><strong>{item.title}</strong><b aria-hidden="true">↗</b></button>)}
    </div>
    <div id="service-explorer-panel" className="service-explorer-panel" role="tabpanel" aria-labelledby={`service-tab-${selected}`} tabIndex={0}>
      {panels[selected]}
    </div>
  </div>;
}
