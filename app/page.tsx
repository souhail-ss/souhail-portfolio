import AnimatedBackground from '@/components/organisms/AnimatedBackground/AnimatedBackground';
import Navigation from '@/components/organisms/Navigation/Navigation';
import Hero from '@/components/organisms/Hero/Hero';
import Projects from '@/components/organisms/Projects/Projects';
import Experiences from '@/components/organisms/Experiences/Experiences';
import About from '@/components/organisms/About/About';
import Skills from '@/components/organisms/Skills/Skills';
import Contact from '@/components/organisms/Contact/Contact';
import Education from '@/components/organisms/Education/Education';
import Hobbies from '@/components/organisms/Hobbies/Hobbies';
import ChatWidget from '@/components/organisms/Chat/ChatWidget';
import { site, chatEnabled } from '@/data/site';

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <AnimatedBackground />

      <Navigation visible />
      <Hero />
      <Experiences />
      <Projects />
      <Skills />
      <Education />
      <About />
      <Hobbies />
      <Contact />

      <footer className="py-10 text-center" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} {site.name} — {site.role}
        </p>
      </footer>

      {chatEnabled && <ChatWidget />}
    </main>
  );
}
