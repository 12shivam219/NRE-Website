import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NRE TechOne Solutions | Software, Mobile Apps & IT Services",
  description:
    "NRE develops custom software, mobile applications and web experiences, and supports businesses with IT staffing, consulting and digital marketing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
