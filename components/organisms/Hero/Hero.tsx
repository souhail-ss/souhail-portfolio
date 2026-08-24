'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import ShimmeringText from '@/components/atoms/ShimmeringText/ShimmeringText';
import { useChat } from '@/context/ChatContext';
import {
  HeroSection,
  ContentContainer,
  TitleName,
  Highlight,
  Subtitle,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  ScrollIndicator,
  ScrollText,
  AITeaserWrapper,
  AIInputBorder,
  AIInputRow,
  AIInput,
  AISubmitButton,
} from './Hero.styles';

const WELCOME       = 'Full-Stack Developer • Paris, France';
const STAGGER_MS    = 55;
const SPAWN_DUR_MS  = 750;
const SPAWN_TOTAL   = (WELCOME.length - 1) * STAGGER_MS + SPAWN_DUR_MS;
const SHIMMER_MS    = 1400;
const SHRINK_DUR_MS = 1300;
const COMPLETE_DELAY = SPAWN_TOTAL + SHIMMER_MS + SHRINK_DUR_MS + 400;

interface HeroProps {
  onComplete?: () => void;
  skipAnimation?: boolean;
}

export default function Hero({ onComplete, skipAnimation = false }: HeroProps) {
  const [phase, setPhase] = useState<'intro' | 'settling' | 'done'>(skipAnimation ? 'done' : 'intro');
  const [heroInput, setHeroInput] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const { openExpandedWithQuestion } = useChat();

  const handleComplete = useCallback(() => {
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (skipAnimation) {
      setPhase('done');
      return;
    }
    const t1 = setTimeout(() => setPhase('settling'), SPAWN_TOTAL + SHIMMER_MS);
    const t2 = setTimeout(() => setPhase('done'),     SPAWN_TOTAL + SHIMMER_MS + SHRINK_DUR_MS * 0.6);
    const t3 = setTimeout(handleComplete, COMPLETE_DELAY);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [handleComplete, skipAnimation]);

  const settled = phase !== 'intro';
  const done    = phase === 'done';

  const handleHeroInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && heroInput.trim()) {
      openExpandedWithQuestion(heroInput.trim());
      setHeroInput('');
    }
  };

  return (
    <HeroSection>
      <ContentContainer>

        <motion.div
          initial={{ scale: skipAnimation ? 1 : 2.8 }}
          animate={{ scale: settled ? 1 : 2.8 }}
          transition={{ duration: skipAnimation ? 0 : 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'center center' }}
        >
          <ShimmeringText
            text={WELCOME}
            color="var(--text-muted)"
            shimmeringColor="var(--text-primary)"
            duration={1.6}
            className="text-base md:text-xl font-semibold tracking-[0.22em] uppercase"
          />
        </motion.div>

        <TitleName
          initial={{ opacity: skipAnimation ? 1 : 0, y: skipAnimation ? 0 : 32 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 32 }}
          transition={{ duration: skipAnimation ? 0 : 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          Souhail{' '}
          <Highlight>Ziyadi</Highlight>
        </TitleName>

        <Subtitle
          initial={{ opacity: skipAnimation ? 1 : 0, y: skipAnimation ? 0 : 20 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 20 }}
          transition={{ duration: skipAnimation ? 0 : 0.75, delay: done && !skipAnimation ? 0.2 : 0 }}
        >
          Développeur Full Stack
        </Subtitle>

        <ButtonContainer
          initial={{ opacity: skipAnimation ? 1 : 0, y: skipAnimation ? 0 : 20 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 20 }}
          transition={{ duration: skipAnimation ? 0 : 0.7, delay: done && !skipAnimation ? 0.4 : 0 }}
        >
          <PrimaryButton href="#about">
            À propos de moi
          </PrimaryButton>
          <SecondaryButton href="#projects">
            Voir mes projets
          </SecondaryButton>
        </ButtonContainer>

        <AITeaserWrapper
          initial={{ opacity: skipAnimation ? 1 : 0, y: skipAnimation ? 0 : 16 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 16 }}
          transition={{ duration: skipAnimation ? 0 : 0.7, delay: done && !skipAnimation ? 0.6 : 0 }}
        >
          <AIInputBorder $focused={inputFocused}>
            <AIInputRow>
              <AIInput
                value={heroInput}
                onChange={(e) => setHeroInput(e.target.value)}
                onKeyDown={handleHeroInputKeyDown}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="mon IA répond pour moi , Posez vos questions! "
              />
              <AISubmitButton
                disabled={!heroInput.trim()}
                onClick={() => {
                  if (heroInput.trim()) {
                    openExpandedWithQuestion(heroInput.trim());
                    setHeroInput('');
                  }
                }}
              >
                <Send />
              </AISubmitButton>
            </AIInputRow>
          </AIInputBorder>
        </AITeaserWrapper>
      </ContentContainer>

      <ScrollIndicator
        href="#about"
        initial={{ opacity: skipAnimation ? 1 : 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ delay: done && !skipAnimation ? 0.9 : 0, duration: skipAnimation ? 0 : 0.8 }}
      >
        <ScrollText>Scroll</ScrollText>
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </motion.svg>
      </ScrollIndicator>
    </HeroSection>
  );
}
