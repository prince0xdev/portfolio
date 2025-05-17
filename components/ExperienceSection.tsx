'use client'
import React from 'react'
import { Separator } from './ui/separator'
import { BlurFade } from "@/components/magicui/blur-fade";
import {DATA} from '@/data/resume'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import * as motion from "motion/react-client"
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

function ExperienceSection() {
    const data = DATA.work;
    console.log(data)
  return (
    <section className="flex flex-col gap-2 justify-center">
        <BlurFade  delay={0.25} inView>
            <h1 className='text-xl pb-4'>Work Experience</h1>
        </BlurFade>
      <Separator className='h-2 mb-4'/>
      <div className='w-full text-md text-justify text-muted-foreground tracking-tight font-light'>
        {
          data.map((jobs, index)=> <div className='flex flex-col gap-3 mb-3 shadow-2xl rounded-sm p-2 border border-neutral-300 dark:border-neutral-700' key={index}>
            <Collapsible>
              <CollapsibleTrigger className='cursor-pointer w-full text-left'>
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },}} className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                          <div className='rounded-full'><Image className='rounded-full' src={jobs.logoUrl} width={50} height={0} alt={jobs.company}/></div>
                          <div>
                              <div className=' flex items-center gap-6'>
                                <h3 className='dark:text-gray-200 text-neutral-900  tracking-tight'>{jobs.company}</h3>
                                <ChevronRight className='w-4 text-neutral-500 dark:text-neutral-300'/>
                              </div>
                              <h4 className='text-sm text-muted-foreground tracking-tighter'>{jobs.title}</h4>
                          </div>
                      </div>
                      <div className='hidden md:block'>
                          <h3 className='text-sm text-muted-foreground tracking-tighter'>{jobs.start} - {jobs.end}</h3>
                      </div>
                  </motion.div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='text-sm text-muted-foreground tracking-tighter py-3'>
                  <p className='mb-3'>{jobs.description}</p>
                  <ul className="flex flex-col gap-2">
                  {jobs.highlights.map((highlight, index)=><div  key={index}>
                    <li><span className='rounded-full w-5 bg-gray-300'></span>{highlight}</li>
                  </div>)}
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div> )
        }
      </div>
    </section>
  )
}

export default ExperienceSection
