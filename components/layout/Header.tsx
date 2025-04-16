import Image from 'next/image'
import React from 'react'
import { DATA } from '@/data/resume'

function Header() {
  const education = DATA.education[0];

  return (
    <header className="flex items-center justify-between mb-[50px]">
      {/* Left section contains my profile picture and name */}
      <div className="flex items-center gap-3 ">
        <div className=''>
          <Image src="/ekpinse.webp" alt="Prince Ekpinse" width={120} height={60} className='rounded-full' />
        </div>

        <div>
          <h1>{DATA.name}, <span className='text-sm text-muted-foreground tracking-tight'>{DATA.age} years old</span> </h1>
          <p className="text-sm text-muted-foreground tracking-tight gap-2">{DATA.title} </p>
          <p className="text-sm text-muted-foreground tracking-tight gap-2">{DATA.location}</p>
        </div>
      </div>
      
      {/* Right section contains my recent university details */}
      <div className='hidden md:block'>
        <div className='flex items-center gap-2 '>
          <Image src="/logo-hecm.webp" alt="HECM logo" width={60} height={60} className='rounded-full border-1 border-red(' />
          <h3 className='text-sm'>{education.school}</h3>
        </div>
        <div>
          <p className='text-muted-foreground tracking-tight text-sm'>{education.degree}</p>
          <p className='text-muted-foreground tracking-tight text-sm'>{education.start} - {education.end}</p>
        </div>
      </div>

    </header>
  )
}

export default Header
