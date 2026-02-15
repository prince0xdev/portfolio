import React from 'react'
import { BlurFade } from './magicui/blur-fade'
import { InteractiveHoverButton } from './magicui/interactive-hover-button'
import { Separator } from './ui/separator'
import Link from 'next/link'
import BlogList from './post'
import { getBlogPosts } from '@/app/(main)/blog/utils'

function BlogSection() {
  const allBlogs = getBlogPosts() 
  return (
    <section className="flex flex-col gap-2 justify-center">
      <BlurFade  delay={0.25} inView>
        <h1 className='text-xl pb-4'>My lastest articles</h1>
        <Link href="/blog"><InteractiveHoverButton>Load more</InteractiveHoverButton></Link>
      </BlurFade>
      <Separator className='h-2 mb-4'/>
      <BlogList posts={allBlogs} />
    </section>
  )
}

export default BlogSection