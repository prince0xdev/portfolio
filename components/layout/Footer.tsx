"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Dock, DockIcon } from "../magicui/dock";
import { ModeToggle } from "../ToogleTheme";

export default function Footer() {
  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-24 flex items-end justify-center pb-4">
      {/* Fade blur bas de page */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <Dock className="pointer-events-auto relative z-10 flex items-center px-2 h-12 rounded-full border border-border/60 bg-background/80 backdrop-blur-md shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.4)]">

        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-amber-500 hover:bg-amber-500/10 transition-colors"
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-5 mx-1" />

        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-amber-500 hover:bg-amber-500/10 transition-colors"
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-5 mx-1" />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-amber-500 hover:bg-amber-500/10 transition-colors">
                <ModeToggle />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Thème</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

      </Dock>
    </footer>
  );
}