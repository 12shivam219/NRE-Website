import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NRE TechOne Solutions — People. Strategy. Digital growth.",
  description:
    "NRE connects businesses with talent, consulting, digital marketing and technology solutions in India and worldwide.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
