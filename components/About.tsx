import { DATA } from '@/data/resume'
import { Separator } from "@/components/ui/separator"
import { BlurFade } from './magicui/blur-fade';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Link from 'next/link';

export default function AboutSection() {
  // pargarphs of about section
  const paragraphs = DATA.about;
  return (
    <section className="flex flex-col gap-2 justify-center"  data-aos="fade-in">
      <BlurFade inView>
        <h1 className='text-xl pb-4'>About</h1>
        <Link href="/prince-ekpinse.pdf" className='shadow-sm border border-neutral-300 dark:border-neutral-700 hover:scale-90 duration-200 transition-all shadow-neutral-400  dark:shadow-gray-200 rounded-full p-3 flex items-center justify-center w-[200px]'>
          <button>
            My Resume
          </button>
        </Link>
      </BlurFade>
      <Separator className='h-2 mb-4'/>
      {paragraphs.map((paragraph, index)=> <TypingAnimation className='text-md text-justify text-muted-foreground  tracking-tight font-light' key={index}>{paragraph}</TypingAnimation> )}
    </section>
  );
}
