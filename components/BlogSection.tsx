import React from 'react'
import { BlurFade } from './magicui/blur-fade'
import { InteractiveHoverButton } from './magicui/interactive-hover-button'
import { Separator } from './ui/separator'
import BlogCard from './BlogCard'
import Link from 'next/link'

function BlogSection() {
  return (
    <section className="flex flex-col gap-2 justify-center">
      <BlurFade  delay={0.25} inView>
        <h1 className='text-xl pb-4'>My lastest articles</h1>
        <Link href="/blog"><InteractiveHoverButton>Load more</InteractiveHoverButton></Link>
      </BlurFade>
      <Separator className='h-2 mb-4'/>
      <div>
          <BlogCard/>
      </div>
    </section>
  )
}

export default BlogSection