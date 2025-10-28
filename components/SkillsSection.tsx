import React from "react";
import { BlurFade } from "./magicui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

function SkillsSection() {
  const skills = [
  {
    title: "HTML",
    description:
      "Builds the solid structure behind every modern web page.",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
  },
  {
    title: "CSS",
    description:
      "Designs clean, responsive, and visually appealing layouts.",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
  },
  {
    title: "JavaScript",
    description:
      "Brings interactivity and smooth logic to web experiences.",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },
  {
    title: "React.js",
    description:
      "Builds stunning UIs with reusable, dynamic components.",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    title: "Next.js",
    description:
      "Creates lightning-fast full-stack apps with React and SSR.",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    title: "TypeScript",
    description:
      "Keeps code clean, predictable, and scalable with static typing.",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Frontend",
  },
  {
    title: "Tailwind CSS",
    description:
      "Crafts beautiful interfaces quickly with utility-first design.",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
  },
  {
    title: "Git",
    description:
      "Manages versions and simplifies team collaboration with ease.",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "DevTools",
  },
  {
    title: "Netlify",
    description:
      "Deploys projects in seconds with built-in CI/CD automation.",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    category: "DevTools",
  },
  {
    title: "Firebase",
    description:
      "Provides backend power — auth, database, and hosting made simple.",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "Backend / BaaS",
  },
  {
    title: "Vercel",
    description:
      "Delivers top-tier performance and seamless deployment for Next.js apps.",
    logoUrl: "https://www.svgrepo.com/show/354513/vercel-icon.svg",
    category: "DevTools",
  },
  {
    title: "PostHog",
    description:
      "Tracks user actions and insights to make data-driven product decisions.",
    logoUrl:
      "https://avatars.githubusercontent.com/u/60330232?s=200&v=4",
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
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={logoUrl}
          />
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
      <BlurFade delay={0.25} inView>
        <h1 className="text-xl pb-4">Skills</h1>
      </BlurFade>
      <Separator className="h-2 mb-4" />
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
  );
}

export default SkillsSection;
