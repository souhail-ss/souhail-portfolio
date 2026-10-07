'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import { ctaHref, ctaIsExternal, site } from '@/data/site';
import {
  AboutSection,
  Title,
  Slash,
  Line,
  ContentGrid,
  TextColumn,
  Description,
  StatGrid,
  StatTile,
  StatValue,
  StatLabel,
  InfoList,
  InfoRow,
  InfoLabel,
  InfoValueText,
  CVButtonRow,
  DownloadButton,
  ReviewButton,
  ImageColumn,
  ImageContainerWrapper,
  ImageWrapper,
} from './About.styles';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const stats = [
  { value: '3', label: 'projets livrés : SaaS, web et mobile' },
  { value: '5', label: 'personnes dans l’équipe Weneeds, en Agile' },
  { value: '1', label: 'interlocuteur unique, du cadrage à la mise en ligne' },
  { value: '48h', label: 'pour recevoir un devis clair' },
];

const parcours = [
  { label: 'Master', value: 'Manager de projet informatique — ÉSTIAM, Paris (2022–2024)' },
  { label: 'Licence', value: 'Développement logiciel — Mundiapolis, Casablanca (2019–2022)' },
  { label: 'Langues', value: 'Français (C1) · Anglais (B2) · Arabe (natif)' },
];

export default function About() {
  return (
    <AboutSection id="about">
      <Title {...fadeUp()}>
        <Slash>/</Slash>
        <span>À propos</span>
        <Line />
      </Title>

      <ContentGrid>
        <TextColumn {...fadeUp(0.1)}>
          <Description>
            Je suis {site.name}, développeur Full Stack freelance{site.companyName ? ` et fondateur de ${site.companyName}` : ''}.
            J&apos;accompagne startups, PME et agences pour transformer une idée en produit fiable :
            cadrage, interface, API, base de données et mise en production.
          </Description>
          <Description>
            Chez Weneeds, j&apos;ai construit avec une équipe de 5 une plateforme SaaS de recrutement en
            microservices (NX, NestJS, Next.js), avec matching par IA et moteur de recherche avancé.
            Cette expérience, je la mets aujourd&apos;hui au service de vos projets.
          </Description>

          <StatGrid>
            {stats.map((stat) => (
              <StatTile key={stat.value}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatTile>
            ))}
          </StatGrid>

          <InfoList>
            {parcours.map((item) => (
              <InfoRow key={item.label}>
                <InfoLabel>{item.label}</InfoLabel>
                <InfoValueText>{item.value}</InfoValueText>
              </InfoRow>
            ))}
          </InfoList>

          <CVButtonRow>
            <DownloadButton
              href={ctaHref}
              target={ctaIsExternal ? '_blank' : undefined}
              rel={ctaIsExternal ? 'noopener noreferrer' : undefined}
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ x: 1, y: 1 }}
            >
              <ArrowRight size={16} />
              Discuter de mon projet
            </DownloadButton>
            <ReviewButton
              href={site.cv}
              download
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ x: 1, y: 1 }}
            >
              <Download size={16} />
              Mon CV
            </ReviewButton>
          </CVButtonRow>
        </TextColumn>

        <ImageColumn {...fadeUp(0.25)}>
          <ImageContainerWrapper>
            <ImageWrapper>
              <Image src="/profpic.png" alt={site.name} fill style={{ objectFit: 'cover' }} priority />
            </ImageWrapper>
          </ImageContainerWrapper>
        </ImageColumn>
      </ContentGrid>
    </AboutSection>
  );
}
