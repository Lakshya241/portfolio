import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
// import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { BackToTop } from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <main>
        <Hero id="hero" />
        <About id="about" />
        <Projects id="projects" />
        {/* <Experience id="experience" /> */}
        <Skills id="skills" />
        <Contact id="contact" />
        <BackToTop />
      </main>
    </>
  );
}
