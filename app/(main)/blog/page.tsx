import { BlurFade } from '@/components/magicui/blur-fade'
import { getBlogPosts } from './utils'
import BlogList from '@/components/post'
import { Separator } from '@/components/ui/separator'

export const metadata = {
  title: 'Welcome on my personal Blog',
  description: 'Read my blog.',
}

export default function Page() {
  
  const allBlogs = getBlogPosts()
  console.log(allBlogs)
  return (
    <section>
      <BlurFade>
        <h1 className='text-xl pb-4'>My Blog</h1>
      </BlurFade>
      <Separator className='h-2 mb-4'/>
      <BlogList posts={allBlogs} />
    </section>
  )
}