'use client';

import React, { useState } from 'react';
import { Send, ArrowRight, Check } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import { ctaHref, ctaIsExternal, site } from '@/data/site';
import {
  HeroSection,
  HeroGrid,
  ContentColumn,
  AvailabilityBadge,
  StatusDot,
  Headline,
  Highlight,
  Lead,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  StackRow,
  StackChip,
  BriefColumn,
  BriefCard,
  BriefTopBar,
  BriefBody,
  BriefLabel,
  BriefHeading,
  BriefSteps,
  BriefStep,
  StepIcon,
  BriefFooter,
  AITeaserWrapper,
  AIInputBorder,
  AIInputRow,
  AIInput,
  AISubmitButton,
  ScrollIndicator,
  ScrollText,
} from './Hero.styles';

const STACK = ['Next.js', 'React', 'NestJS', 'TypeScript', 'PostgreSQL', 'React Native'];

const BRIEF_STEPS: { label: string; state: 'done' | 'active' | 'todo' }[] = [
  { label: 'Cadrage & devis sous 48h', state: 'done' },
  { label: 'Maquettes & choix techniques', state: 'done' },
  { label: 'Développement par itérations', state: 'active' },
  { label: 'Mise en production & suivi', state: 'todo' },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  const [heroInput, setHeroInput] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const { openExpandedWithQuestion } = useChat();

  const submit = () => {
    const q = heroInput.trim();
    if (!q) return;
    openExpandedWithQuestion(q);
    setHeroInput('');
  };

  return (
    <HeroSection>
      <HeroGrid>
        <ContentColumn>
          <AvailabilityBadge {...rise(0)}>
            <StatusDot />
            Disponible pour de nouveaux projets
          </AvailabilityBadge>

          <Headline {...rise(0.08)}>
            Je conçois et livre votre produit web, <Highlight>du MVP à la production.</Highlight>
          </Headline>

          <Lead {...rise(0.16)}>
            <strong>{site.name}</strong>, développeur Full Stack freelance à Paris. Applications web et
            mobiles sur mesure, livrées par itérations que vous pouvez tester, avec un code propre et
            maintenable.
          </Lead>

          <ButtonContainer {...rise(0.24)}>
            <PrimaryButton
              href={ctaHref}
              target={ctaIsExternal ? '_blank' : undefined}
              rel={ctaIsExternal ? 'noopener noreferrer' : undefined}
            >
              Discuter de mon projet
              <ArrowRight size={16} />
            </PrimaryButton>
            <SecondaryButton href="#projects">Voir mes réalisations</SecondaryButton>
          </ButtonContainer>

          <StackRow {...rise(0.32)}>
            {STACK.map((tech) => (
              <StackChip key={tech}>{tech}</StackChip>
            ))}
          </StackRow>

          <AITeaserWrapper {...rise(0.4)}>
            <AIInputBorder $focused={inputFocused}>
              <AIInputRow>
                <AIInput
                  value={heroInput}
                  onChange={(e) => setHeroInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  placeholder="Décrivez votre projet à mon assistant IA…"
                  aria-label="Poser une question à l'assistant IA"
                />
                <AISubmitButton disabled={!heroInput.trim()} onClick={submit} aria-label="Envoyer">
                  <Send />
                </AISubmitButton>
              </AIInputRow>
            </AIInputBorder>
          </AITeaserWrapper>
        </ContentColumn>

        <BriefColumn {...rise(0.3)}>
          <BriefCard>
            <BriefTopBar>
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="title">projet / brief.md</span>
            </BriefTopBar>
            <BriefBody>
              <div>
                <BriefLabel>Comment on travaille</BriefLabel>
                <BriefHeading>De l&apos;idée à la mise en ligne</BriefHeading>
              </div>
              <BriefSteps>
                {BRIEF_STEPS.map((step) => (
                  <BriefStep key={step.label} $state={step.state}>
                    <StepIcon $state={step.state}>
                      {step.state === 'done' && <Check size={12} strokeWidth={3} />}
                    </StepIcon>
                    {step.label}
                  </BriefStep>
                ))}
              </BriefSteps>
              <BriefFooter>
                <span>Un seul interlocuteur</span>
                <strong>Devis gratuit</strong>
              </BriefFooter>
            </BriefBody>
          </BriefCard>
        </BriefColumn>
      </HeroGrid>

      <ScrollIndicator href="#services" {...rise(0.6)} aria-label="Voir mes services">
        <ScrollText>Services</ScrollText>
      </ScrollIndicator>
    </HeroSection>
  );
}
