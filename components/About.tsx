import { DATA } from '@/data/resume'
import { Separator } from "@/components/ui/separator"
import { BlurFade } from './magicui/blur-fade';
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function AboutSection() {
  // pargarphs of about section
  const paragraphs = DATA.about;
  return (
    <section className="flex flex-col gap-2 justify-center">
      <BlurFade  delay={0.25} inView>
        <h1 className='text-xl'>About</h1>
      </BlurFade>
      <Separator className='h-2 mb-6'/>
      {paragraphs.map((paragraph, index)=> <TypingAnimation className='text-md text-muted-foreground  tracking-tight font-light' key={index}>{paragraph}</TypingAnimation> )}
    </section>
  );
}
