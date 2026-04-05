import AboutSection from '@/components/About';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-6 justify-center">
     <AboutSection/>
     <ExperienceSection/>
     <SkillsSection/>
     <EducationSection/>
     <ProjectsSection/>
     <BlogSection/>
     <ContactSection/>
    </div>
  );
}
