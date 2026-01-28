import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageTransition from "@/components/motion/PageTransition";
import CustomCursor from "@/components/motion/CustomCursor";
import InitialLoader from "@/components/motion/InitialLoader";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Top Tier Services | Modern Contractor Studio",
  description:
    "Supplementary general contractor services from the makers of precision countertops. Renovations, construction, and design.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} font-sans`}>
        <InitialLoader />
        <CustomCursor />
        <div className="relative min-h-screen noise">
          <SiteHeader />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
