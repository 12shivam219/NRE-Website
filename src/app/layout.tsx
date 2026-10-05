import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
  variable: "--font-dm-sans",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: { default: "NRE TechOne | Technology | Commerce | Innovation", template: "%s | NRE TechOne" },
  description: "NRE TechOne is a global technology and business solutions brand serving clients across the United States, India, and international markets.",
  openGraph: { title: "NRE TechOne", description: "NRE TechOne is a global technology and business solutions brand serving clients across the United States, India, and international markets.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
