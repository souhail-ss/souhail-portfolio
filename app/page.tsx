'use client';

import { useState, useCallback, useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Hobbies from '@/components/Hobbies';
import { motion } from 'framer-motion';
import ChatWidget from '@/components/ChatWidget/ChatWidget';

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

  // Lock scroll until hero animation finishes
  useEffect(() => {
    if (!mounted) return;
    if (!heroComplete && !skipAnimation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [heroComplete, skipAnimation, mounted]);

  if (!mounted) return <main className="min-h-screen bg-[#0a0a0a]" />;

  return (
    <main className="relative">
      <AnimatedBackground />

      {/* Dark veil between blobs and content */}
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
        <footer className="py-10 text-center border-t border-white/[0.06]">
          <p className="text-white/20 text-sm">
            © 2026 Souhail Ziyadi — Développeur Full Stack
          </p>
        </footer>
      </motion.div>
      <ChatWidget />
    </main>
  );
}
