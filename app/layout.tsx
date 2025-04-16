import type { Metadata } from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Particles } from "@/components/magicui/particles";
import { ThemeProvider } from 'next-themes'
import {
  TooltipProvider
} from "@/components/ui/tooltip"
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})
export const metadata: Metadata = {
  title: "Portfolio | Prince Ekpinse",
  description: "Portfolio of Prince Ekpinse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body
        className={`${outfit.className} antialiased dark:bg-neutral-800 relative bg-gray-100 flex-1 pt-6 pb-28 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto w-full text-sm sm:text-base`}
      >
        {/* Particles background */}
        <Particles 
          className="fixed inset-0 -z-10" 
          quantity={250}
          color="#8b5cf6"
          ease={20}
          size={0.6}
          staticity={30}
          refresh={true}
        /> 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <Header/>
            {children}
            <Footer/>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
