import React from 'react'
import { BlurFade } from './magicui/blur-fade'
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils";
import { Marquee } from './magicui/marquee';
import Image from 'next/image';

function SkillsSection() {
  const skills = [
    // 🧠 Frontend
    {
      title: "HTML",
      description: "La base du web, structure de toutes mes pages.",
      logoUrl:"/ekpinse.webp",
      category: "Frontend",
    },
    {
      title: "CSS",
      description: "Styliser mes interfaces avec précision.",
      logoUrl: "/ekpinse.webp",
      category: "Frontend",
    },
    {
      title: "JavaScript",
      description: "Ajouter de l’interactivité dans mes projets.",
      logoUrl: "/ekpinse.webp",
      category: "Frontend",
    },
    {
      title: "React.js",
      description: "Créer des interfaces réactives et modulaires.",
      logoUrl: "/ekpinse.webp",
      category: "Frontend",
    },
    {
      title: "Next.js",
      description: "Développer des apps fullstack et performantes.",
      logoUrl:"/ekpinse.webp",
      category: "Frontend",
    },
    {
      title: "TypeScript",
      description: "Renforcer la robustesse de mon JS avec un typage statique.",
      logoUrl:"/ekpinse.webp",
      category: "Frontend",
    },
    {
      title: "Tailwind CSS",
      description: "Styliser rapidement avec une approche utility-first.",
      logoUrl: "/ekpinse.webp",
      category: "Frontend",
    },
    {
      title: "shadcn/ui",
      description: "Composants React stylés pour gagner du temps.",
      logoUrl: "/ekpinse.webp",
      category: "Frontend",
    },
  
    // 🧩 DevTools / Platforms
    {
      title: "Git",
      description: "Suivre mes changements et collaborer en équipe.",
      logoUrl: "/ekpinse.webp",
      category: "DevTools",
    },
    {
      title: "Netlify",
      description: "Déployer mes projets frontend en quelques clics.",
      logoUrl: "/ekpinse.webp",
      category: "DevTools",
    },
    {
      title: "Firebase",
      description: "Backend rapide : auth, DB, hosting, tout en un.",
      logoUrl: "/ekpinse.webp",
      category: "Backend / BaaS",
    },
    {
      title: "Vercel",
      description: "Déploiement optimisé pour Next.js.",
      logoUrl: "/ekpinse.webp",
      category: "DevTools",
    },
  
    // 📈 Analytics / Business
    {
      title: "Stripe API",
      description: "Accepter des paiements dans mes projets SaaS.",
      logoUrl: "/ekpinse.webp",
      category: "Business / API",
    },
    {
      title: "PostHog",
      description: "Analyser les interactions utilisateurs dans mes apps.",
      logoUrl: "/ekpinse.webp",
      category: "Analytics",
    },
  ];
  
  const firstRow = skills.slice(0, skills.length / 2);
  const secondRow = skills.slice(skills.length / 2);

  const ReviewCard = ({
    title,
    description,
    logoUrl,
  }: {
    title: string;
    description: string;
    logoUrl: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <Image className="rounded-full" width="32" height="32" alt="" src={logoUrl} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {title}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{title}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{description}</blockquote>
      </figure>
    );
  };

  return (
    <section className="flex flex-col gap-2 justify-center">
      <BlurFade  delay={0.25} inView>
        <h1 className='text-xl pb-4'>Skills</h1>
      </BlurFade>
      <Separator className='h-2 mb-4'/>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee repeat={10} pauseOnHover className="[--duration:200s]">
          {firstRow.map((skills) => (
            <ReviewCard key={skills.title} {...skills} />
          ))}
        </Marquee>
        <Marquee repeat={10} reverse pauseOnHover className="[--duration:100s]">
          {secondRow.map((skills) => (
            <ReviewCard key={skills.title} {...skills} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default SkillsSection
