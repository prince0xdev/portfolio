import React from 'react'
import ProjectCard from './ProjectCard'
import { Separator } from './ui/separator'
import { DATA } from '@/data/resume'
import { BlurFade } from './magicui/blur-fade';

function ProjectsSection() {
    const data = DATA.projects;
  return (
    <section className="flex flex-col gap-2 justify-center">
        <BlurFade  delay={0.25} inView>
            <h1 className='text-xl pb-4'>Projects</h1>
        </BlurFade>
        <Separator className='h-2 mb-4'/>
        <div className='flex flex-col gap-4 justify-between items-center rounded-sm w-full text-md text-justify text-muted-foreground tracking-tight font-light'>
            {
                data.map((project, index)=>(
                <ProjectCard 
                    index={project.index}
                    key={index}
                    title={project.title} 
                    description={project.description} 
                    href={project.href} 
                    links={project.links} 
                    image= {project.image}
                    technologies={project.technologies}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default ProjectsSection
