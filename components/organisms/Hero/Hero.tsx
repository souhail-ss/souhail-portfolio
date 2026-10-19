'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Send, ArrowRight, Download, MapPin } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import { site, chatEnabled } from '@/data/site';
import { profile } from '@/data/portfolio.data';
import { experiences } from '@/lib/experiences';
import { projects } from '@/lib/projects';
import { LinkedinIcon, GithubIcon } from '@/components/atoms/SocialIcons/SocialIcons';
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
  SocialLinks,
  SocialLink,
  StackRow,
  StackChip,
  ProfileColumn,
  ProfileCard,
  Avatar,
  ProfileName,
  ProfileRole,
  ProfileMeta,
  ProfileStats,
  ProfileStat,
  ProfileCompanies,
  AITeaserWrapper,
  AIInputBorder,
  AIInputRow,
  AIInput,
  AISubmitButton,
  ScrollIndicator,
  ScrollText,
} from './Hero.styles';

const STACK = ['Next.js', 'React', 'NestJS', 'TypeScript', 'PostgreSQL'];

const companies = experiences.map((e) => e.company);

const stats = [
  { value: experiences.length, label: 'expériences' },
  { value: projects.length, label: 'projets' },
  { value: 'Bac+5', label: 'Master' },
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
            Ouvert aux postes en CDI
          </AvailabilityBadge>

          <Headline {...rise(0.08)}>
            Développeur Full Stack <Highlight>React, Next.js &amp; NestJS.</Highlight>
          </Headline>

          <Lead {...rise(0.16)}>
            Je suis <strong>{site.name}</strong>, basé à {site.city.split(',')[0]}. J&apos;ai construit une
            plateforme SaaS de recrutement en microservices chez <strong>Weneeds</strong> et développé
            des applications web et mobiles, notamment pour <strong>Stellantis</strong>.
          </Lead>

          <ButtonContainer {...rise(0.24)}>
            <PrimaryButton href="#experiences">
              Voir mon expérience
              <ArrowRight size={16} />
            </PrimaryButton>
            <SecondaryButton href={site.cv} download>
              <Download size={16} style={{ marginRight: '0.5rem' }} />
              Télécharger mon CV
            </SecondaryButton>
            <SocialLinks>
              <SocialLink href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </SocialLink>
              <SocialLink href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon size={18} />
              </SocialLink>
            </SocialLinks>
          </ButtonContainer>

          <StackRow {...rise(0.32)}>
            {STACK.map((tech) => (
              <StackChip key={tech}>{tech}</StackChip>
            ))}
          </StackRow>

          {chatEnabled && (
            <AITeaserWrapper {...rise(0.4)}>
              <AIInputBorder $focused={inputFocused}>
                <AIInputRow>
                  <AIInput
                    value={heroInput}
                    onChange={(e) => setHeroInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && submit()}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    placeholder="Posez une question à mon assistant IA…"
                    aria-label="Poser une question à l'assistant IA"
                  />
                  <AISubmitButton disabled={!heroInput.trim()} onClick={submit} aria-label="Envoyer">
                    <Send />
                  </AISubmitButton>
                </AIInputRow>
              </AIInputBorder>
            </AITeaserWrapper>
          )}
        </ContentColumn>

        <ProfileColumn {...rise(0.3)}>
          <ProfileCard>
            <Avatar>
              <span>
                <Image src={profile.profileImage} alt={site.name} fill sizes="132px" style={{ objectFit: 'cover' }} priority />
              </span>
            </Avatar>
            <ProfileName>{site.name}</ProfileName>
            <ProfileRole>{site.role}</ProfileRole>
            <ProfileMeta>
              <MapPin size={14} />
              {site.city}
            </ProfileMeta>
            <ProfileStats>
              {stats.map((s) => (
                <ProfileStat key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </ProfileStat>
              ))}
            </ProfileStats>
            <ProfileCompanies>
              Expériences chez <strong>{companies.join(' · ')}</strong>
            </ProfileCompanies>
          </ProfileCard>
        </ProfileColumn>
      </HeroGrid>

      <ScrollIndicator href="#experiences" {...rise(0.6)} aria-label="Voir mon expérience">
        <ScrollText>Expérience</ScrollText>
      </ScrollIndicator>
    </HeroSection>
  );
}
