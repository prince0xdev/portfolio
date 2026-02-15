import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import './global.css';
import Header from "@/components/layout/Header";
import { Particles } from "@/components/magicui/particles";
import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from "@/components/ui/tooltip"
import Footer from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Analytics } from '@vercel/analytics/next';
import LayoutClientWrapper from "@/components/layout/LayoutClientWrapper";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prince Ekpinse's Portfolio | Junior Frontend Developer",
  description: "Découvre Parcours, la plateforme qui révolutionne le suivi scolaire et universitaire.",
  keywords: ["Parcours", "éducation", "suivi scolaire", "Bénin", "université"],
  authors: [{ name: "Prince Ekpinse", url: "https://linkedin.com/in/prince-ekpinse" }],
  openGraph: {
    title: "Prince Ekpinse | Student (SWE) and Junior Frontend Developer",
    description: "I'm junior frontend developer aspiring being a Software Engineer (SWE) already ready for collaborations",
    url: "https://prince0xdev.vercel.app",
    siteName: "Prince Ekpinse | Junior Front-end Developer",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Prince Ekpinse's Portfolio | Student in SWE and Junior frontend Developer",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Ekpinse's Portfolio | Junior Frontend Developer",
    description: "I'm junior frontend developer aspiring being a Software Engineer (SWE) ready for collaborations",
    images: ["/opengraph.png"],
    creator: "@princeekpinse",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className}`}>
        {children}  
        <Analytics />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="e777f946-1d10-41ab-90ba-f3cf0c120971"></script>
      </body>
    </html>
  );
}
