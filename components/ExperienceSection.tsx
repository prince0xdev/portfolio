import React from 'react'
import { Separator } from './ui/separator'
import { BlurFade } from "@/components/magicui/blur-fade";
function ExperienceSection() {
  return (
    <section className="flex flex-col gap-2 justify-center">
        <BlurFade  delay={0.25} inView>
            <h1 className='text-xl'>Work Experience</h1>
        </BlurFade>
      <Separator className='h-2 mb-6'/>
    </section>
  )
}

export default ExperienceSection
