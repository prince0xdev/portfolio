import Image from 'next/image'
import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

interface Links {
   readonly type: string,
    readonly href: string,
    readonly icon: React.ReactNode
}
 
interface ProjectCardProps {
    title: string,
    description: string,
    href: string,
    dates: string,
    isActive: boolean,
    technologies: readonly string[],
    image: string,
    links: readonly Links[]
}
const ProjectCard: React.FC<ProjectCardProps> = ({title, href, dates, description, isActive, technologies, image, links})=> {
  return (
    <div className='rounded-md relative dark:border-[1px] border-gray-700 shadow-sm shadow-gray-300'>
        {isActive ? <span className='bg-green-700 absolute z-30 top-2 right-1 animate-bounce text-white text-sm rounded-full w-[55px] p-1 flex items-center justify-center'>Active</span> : <span className='bg-red-700 text-white text-sm rounded-full absolute top-2 right-1 w-[55px] p-1 flex items-center justify-center z-30'>Inactive</span>}
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <Image src={image} className='rounded-md rounded-b-none w-full hover:scale-95 duration-200 transition-all' width={400} height={400} alt={`image ${title}`} />
        </Link>
        <div className="p-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h3 className='text-neutral-900 dark:text-neutral-100 tracking-tighter'>{title}</h3>
                <Link href={href} target="_blank" rel="noopener noreferrer"><SquareArrowOutUpRight className='w-[20px]' /></Link>
            </div>
            <h3 className="text-muted-foreground tracking-tight text-sm">{dates}</h3>
            <p className="text-muted-foreground tracking-tight text-sm">{description}</p>
            <div className='flex items-center gap-2 flex-wrap'>
                {technologies.map((technologie, index)=><span key={index} className='rounded-3xl flex-wrap tracking-tighter dark:bg-gray-900 dark:opacity-45 dark:text-gray-100 border-gray-600 border-[1px] flex w-auto items-center p-1 justify-center text-sm'>{technologie}</span> )}
            </div>
            <div className="flex gap-2">
                {links.map((link, index) => (
                    <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-500 hover:scale-95 transition-all duration-200 rounded-full justify-center w-[100px] border border-neutral-600"
                    >
                    {link.icon}
                    {link.type}
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard