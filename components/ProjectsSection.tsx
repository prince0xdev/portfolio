import React from 'react'
import { BlurFade } from './magicui/blur-fade'
import ProjectCard from './ProjectCard'
import { Separator } from './ui/separator'
import { DATA } from '@/data/resume'

function ProjectsSection() {
    const data = DATA.projects;
  return (
    <section className="flex flex-col gap-2 justify-center">
        <BlurFade  delay={0.25} inView>
            <h1 className='text-xl pb-4'>Projects</h1>
        </BlurFade>
        <Separator className='h-2 mb-4'/>
        <div className='border grid md:grid-cols-2 gap-4 justify-between items-center shadow-2xl rounded-sm w-full p-4 text-md text-justify text-muted-foreground tracking-tight font-light'>
            {
                data.map((project, index)=>(
                <ProjectCard 
                    key={index}
                    title={project.title} 
                    description={project.description} 
                    dates={project.dates} 
                    href={project.href} 
                    links={project.links} 
                    image= {project.image}
                    isActive={project.active}
                    technologies={project.technologies}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default ProjectsSection
