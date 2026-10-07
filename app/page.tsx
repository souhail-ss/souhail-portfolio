import AnimatedBackground from '@/components/organisms/AnimatedBackground/AnimatedBackground';
import Navigation from '@/components/organisms/Navigation/Navigation';
import Hero from '@/components/organisms/Hero/Hero';
import Services from '@/components/organisms/Services/Services';
import Projects from '@/components/organisms/Projects/Projects';
import Experiences from '@/components/organisms/Experiences/Experiences';
import Process from '@/components/organisms/Process/Process';
import About from '@/components/organisms/About/About';
import Skills from '@/components/organisms/Skills/Skills';
import Contact from '@/components/organisms/Contact/Contact';
import ChatWidget from '@/components/organisms/Chat/ChatWidget';
import { site } from '@/data/site';

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <AnimatedBackground />

      <Navigation visible />
      <Hero />
      <Services />
      <Projects />
      <Experiences />
      <Process />
      <About />
      <Skills />
      <Contact />

      <footer className="py-10 text-center" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} {site.companyName || site.name}
          {site.companyLegalForm ? ` (${site.companyLegalForm})` : ''} — {site.role}
        </p>
      </footer>

      <ChatWidget />
    </main>
  );
}
