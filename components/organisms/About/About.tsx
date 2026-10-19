'use client';

import { site } from '@/data/site';
import { database } from '@/data/portfolio.data';
import {
  AboutSection,
  Title,
  Slash,
  Line,
  ContentGrid,
  TextColumn,
  Description,
  InfoList,
  InfoRow,
  InfoLabel,
  InfoValueText,
} from './About.styles';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const languages = database.languages.map((l) => `${l.name} (${l.level})`).join(' · ');

const infos = [
  { label: 'Recherche', value: 'CDI — Développeur Full Stack JavaScript/TypeScript' },
  { label: 'Lieu', value: `${site.city} · sur site, hybride ou remote` },
  { label: 'Langues', value: languages },
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
            Développeur Full Stack JavaScript/TypeScript, j&apos;aime prendre un produit de bout en bout :
            interface, API, base de données et mise en production.
          </Description>
          <Description>
            Chez Weneeds, j&apos;ai travaillé dans une équipe Agile de 5 sur une plateforme SaaS de
            recrutement en microservices (NX, NestJS, Next.js), avec matching par IA et moteur de
            recherche avancé. Je cherche aujourd&apos;hui une équipe ou un projet où continuer à livrer
            du code propre et utile.
          </Description>
        </TextColumn>

        <TextColumn {...fadeUp(0.2)}>
          <InfoList>
            {infos.map((item) => (
              <InfoRow key={item.label}>
                <InfoLabel>{item.label}</InfoLabel>
                <InfoValueText>{item.value}</InfoValueText>
              </InfoRow>
            ))}
          </InfoList>
        </TextColumn>
      </ContentGrid>
    </AboutSection>
  );
}
