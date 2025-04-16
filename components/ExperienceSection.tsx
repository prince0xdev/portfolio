'use client'
import React from 'react'
import { Separator } from './ui/separator'
import { BlurFade } from "@/components/magicui/blur-fade";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import Image from 'next/image';

function ExperienceSection() {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <section className="flex flex-col gap-2 justify-center">
        <BlurFade  delay={0.25} inView>
            <h1 className='text-xl pb-4'>Work Experience</h1>
        </BlurFade>
      <Separator className='h-2 mb-4'/>
      <div className='border shadow-2xl  rounded-sm w-full p-4 text-md text-justify text-muted-foreground  tracking-tight font-light'>
        <Collapsible>
            <CollapsibleTrigger className='cursor-pointer w-full text-left'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full'><Image className='rounded-full' src="/ekpinse.webp" width={50} height={0} alt='Company'/></div>
                        <div>
                            <h3 className='font-semibold dark:text-white text-neutral-900  tracking-tight'>Company</h3>
                            <h4 className='text-sm text-muted-foreground tracking-tighter'>Front-end Developer</h4>
                        </div>
                    </div>
                    <div>
                        <h3>September 2024 - Present</h3>
                    </div>
                </div>
            </CollapsibleTrigger>
            <Separator className='h-2 mt-2'/>
            <CollapsibleContent>Worked on securing the Cyera Infrastructure and Application using various open-source tools and technologies. Key accomplishments:

Built and containerized a security bot on GCR to automate security tasks and detections, significantly reducing routine manual work for engineers and saving money
Designed and implemented an AWS RDS PostgreSQL database with encryption at rest and in transit to protect sensitive data, ensuring compliance with best data protection standards
Developed and maintained tools, scripts, and platforms for enhanced security observability and control
Proactively fortified container security by systematically updating Docker images to the latest stable versions and remediating critical/high/moderate CVEs in alignment with CIS Benchmarks and OWASP best practices
Strengthened application security posture and ensured compliance with stringent security frameworks across repositories and infrastructure
Developed secure authentication patterns using TypeScript, TailwindCSS and ShishCN
Implemented least-privilege principle for security automation using GitHub Actions
            </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  )
}

export default ExperienceSection
