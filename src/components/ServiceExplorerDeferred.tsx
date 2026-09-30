"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import type { ExplorerProps } from "./ServiceExplorerInteractive";

// Conditional rendering avoids fetching the controller until the explorer is nearby.
const InteractiveExplorer = dynamic(() => import("./ServiceExplorerInteractive"));

export function ServiceExplorerDeferred({ fallback, ...props }: ExplorerProps & { fallback: ReactNode }) {
  const target = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [initialSelected, setInitialSelected] = useState(0);
  const [restoreFocus, setRestoreFocus] = useState(false);

  useEffect(() => {
    if (enabled) return;
    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setEnabled(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEnabled(true);
        observer.disconnect();
      }
    }, { rootMargin: "100px" });
    if (target.current) observer.observe(target.current);
    return () => observer.disconnect();
  }, [enabled]);

  return <div ref={target} onPointerEnter={() => setEnabled(true)} onFocusCapture={event => {
    const link = (event.target as HTMLElement).closest<HTMLElement>("[data-service-index]");
    if (link) {
      setInitialSelected(Number(link.dataset.serviceIndex));
      setRestoreFocus(true);
      setEnabled(true);
    }
  }} onClickCapture={event => {
    const link = (event.target as HTMLElement).closest<HTMLElement>("[data-service-index]");
    if (link && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      setInitialSelected(Number(link.dataset.serviceIndex));
      setRestoreFocus(true);
      setEnabled(true);
    }
  }}>
    <Suspense fallback={fallback}>
      {enabled ? <InteractiveExplorer {...props} initialSelected={initialSelected} restoreFocus={restoreFocus} /> : fallback}
    </Suspense>
  </div>;
}
