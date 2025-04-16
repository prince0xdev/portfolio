import AboutSection from '@/components/About';
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-6 justify-center">
     <AboutSection/>
     <ExperienceSection/>
    </div>
  );
}
