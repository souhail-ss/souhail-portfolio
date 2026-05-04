'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '@/components/organisms/AnimatedBackground/AnimatedBackground';
import Navigation from '@/components/organisms/Navigation/Navigation';
import Hero from '@/components/organisms/Hero/Hero';
import About from '@/components/organisms/About/About';
import Experiences from '@/components/organisms/Experiences/Experiences';
import Projects from '@/components/organisms/Projects/Projects';
import Skills from '@/components/organisms/Skills/Skills';
import Education from '@/components/organisms/Education/Education';
import Hobbies from '@/components/organisms/Hobbies/Hobbies';
import ChatWidget from '@/components/organisms/Chat/ChatWidget';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [heroComplete, setHeroComplete] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem('hasVisited') === 'true') {
      setSkipAnimation(true);
      setHeroComplete(true);
    }
  }, []);

  const handleHeroComplete = useCallback(() => {
    setHeroComplete(true);
    sessionStorage.setItem('hasVisited', 'true');
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!heroComplete && !skipAnimation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [heroComplete, skipAnimation, mounted]);

  if (!mounted) return <main className="min-h-screen" style={{ backgroundColor: 'var(--bg-page)' }} />;

  return (
    <main className="relative">
      <AnimatedBackground />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -9, background: 'rgba(0,0,0,0.25)' }}
      />

      <Navigation visible={heroComplete} />
      <Hero onComplete={handleHeroComplete} skipAnimation={skipAnimation} />

      <motion.div
        initial={{ opacity: skipAnimation ? 1 : 0 }}
        animate={{ opacity: heroComplete ? 1 : 0 }}
        transition={{ duration: skipAnimation ? 0 : 0.9, ease: 'easeOut' }}
      >
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
        <footer className="py-10 text-center" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
            © 2026 Souhail Ziyadi — Développeur Full Stack
          </p>
        </footer>
      </motion.div>
      <ChatWidget />
    </main>
  );
}
