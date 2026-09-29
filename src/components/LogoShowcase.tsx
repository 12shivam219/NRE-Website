"use client";

import { useState } from "react";
import Image from "next/image";
import { BrandMark } from "@/components/BrandMark";

const concepts = [
  { file: "refined-emblem", name: "01 / Refined emblem", text: "A clean gold ring and custom NRE lettering. Closest to the existing identity, with simpler shapes for small screens." },
  { file: "modern-monogram", name: "02 / Modern monogram", text: "A geometric frame and connected lettering. A compact technology identity that also works as an app icon." },
  { file: "connected-pillars", name: "03 / Connected pillars", text: "Three connected arcs represent Technology, Commerce and Innovation around the NRE core." },
];

export function LogoShowcase() {
  const [replay, setReplay] = useState(0);
  return <>
    <section className="logo-motion-review container"><div><p className="eyebrow">CURRENT IDENTITY · ANIMATED</p><h2>A little motion.<br />A familiar mark.</h2><p>The gold ring draws in, the emblem appears, then a single light sweep adds a metallic finish. Hover or focus the mark for a gentle lift.</p><button type="button" className="button button-dark" onClick={() => setReplay(value => value + 1)}>Replay entrance <span aria-hidden="true">↻</span></button></div><div className="logo-review-stage"><div key={replay} className="logo-review-mark" tabIndex={0} aria-label="Animated NRE emblem preview"><BrandMark animated size={240} /></div><span>Technology | Commerce | Innovation</span></div></section>
    <section className="container logo-concepts"><div className="section-top"><div><p className="eyebrow">THREE DIRECTIONS</p><h2>Choose the next expression.</h2></div><p>These are review concepts. The current emblem remains the website identity.</p></div><div className="logo-concept-grid">{concepts.map(concept => <article key={concept.file}><div className="logo-concept-art"><Image src={`/assets/logo-concepts/${concept.file}.svg`} alt={`${concept.name.slice(5)} NRE logo concept`} width={240} height={240} /></div><h3>{concept.name}</h3><p>{concept.text}</p><a href={`/assets/logo-concepts/${concept.file}.svg`} download className="inline-link">Download SVG <span aria-hidden="true">↓</span></a></article>)}</div></section>
  </>;
}
