import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "NRE TechOne Solutions | Technology, Commerce & Innovation", template: "%s | NRE TechOne Solutions" },
  description: "NRE TechOne Solutions provides website and app development, digital marketing, data analytics, business strategy, startup support and e-commerce solutions from Bhopal, India.",
  openGraph: { title: "NRE TechOne Solutions", description: "One Platform. Multiple Solutions.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
