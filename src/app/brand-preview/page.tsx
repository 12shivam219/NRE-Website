import type { Metadata } from "next";
import { PageIntro } from "@/components/SiteFrame";
import { LogoShowcase } from "@/components/LogoShowcase";

export const metadata: Metadata = { title: "Logo Concepts", robots: { index: false, follow: false } };

export default function BrandPreview() {
  return <><PageIntro eyebrow="NRE · CLIENT REVIEW" title="A recognizable identity, with a fresh expression." description="Preview motion on the current emblem and compare three new logo directions." /><LogoShowcase /></>;
}
