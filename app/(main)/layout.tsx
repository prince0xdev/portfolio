import "../global.css";
import Header from "@/components/layout/Header";
import { Particles } from "@/components/magicui/particles";
import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from "@/components/ui/tooltip"
import Footer from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import LayoutClientWrapper from "@/components/layout/LayoutClientWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased dark:bg-neutral-800 relative bg-gray-100">
        <Particles className="fixed inset-0 -z-10" quantity={250} color="#8b5cf6" ease={20} size={0.6} staticity={30} refresh={true} />
        <ScrollProgress className="h-1" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <main className="w-full max-w-4xl mx-auto flex-1 pt-6 pb-28 px-4 sm:px-6 md:px-8">
              <Header />
              <LayoutClientWrapper>{children}</LayoutClientWrapper>
            </main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </div>
  );
}
