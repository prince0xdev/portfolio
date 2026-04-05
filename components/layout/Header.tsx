import Image from "next/image";
import { DATA } from "@/data/resume";

export default function Header() {
  const education = DATA.education[0];

  return (
    <header className="flex items-center justify-between mb-16">

      {/* Identité */}
      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <Image
            src="/ekpinse.webp"
            alt="Prince Ekpinse"
            width={56}
            height={56}
            className="rounded-full object-cover w-14 h-14"
          />
          {/* Anneau amber */}
          <span className="absolute inset-0 rounded-full ring-2 ring-amber-500/60 ring-offset-2 ring-offset-background" />
        </div>

        <div>
          <div className="flex items-baseline gap-2">
            <h1 className="text-xl font-medium tracking-tight">
              {DATA.name}
            </h1>
            <span className="text-xs text-muted-foreground">
              {DATA.age} ans
            </span>
          </div>
          <p className="text-sm text-amber-500 font-medium mt-0.5">
            {DATA.title}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5 tracking-tight">
            {DATA.location}
          </p>
        </div>
      </div>

      {/* École — desktop uniquement */}
      <div className="hidden md:flex items-start gap-4 border-l border-border pl-6">
        <Image
          src="/logo-hecm.webp"
          alt="HECM"
          width={40}
          height={40}
          className="rounded-lg mt-0.5 object-contain"
        />
        <div>
          <p className="text-sm font-medium">{education.school}</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {education.degree}
          </p>
          <p className="text-xs text-muted-foreground">
            {education.start} — {education.end}
          </p>
        </div>
      </div>

    </header>
  );
}