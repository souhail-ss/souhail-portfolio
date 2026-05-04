'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
  InfoValueLink,
  InfoValueText,
  DownloadButton,
  ImageColumn,
  ImageContainerWrapper,
  ImageGlow,
  ImageWrapper,
  DecoratorBottomRight,
  DecoratorTopLeft
} from './About.styles';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const contactInfo = [
  { label: 'Email',       value: 'souhail.ziyadi2022@outlook.com', href: 'mailto:souhail.ziyadi2022@outlook.com' },
  { label: 'LinkedIn',    value: 'linkedin.com/in/souhail-ziyadi', href: 'https://www.linkedin.com/in/souhail-ziyadi-2811a5258/' },
  { label: 'GitHub',      value: 'github.com/souhail-ss',          href: 'https://github.com/souhail-ss' },
  { label: 'Localisation',value: 'Paris, France',                  href: null },
  { label: 'Téléphone',   value: '+33 7 66 58 63 30',              href: 'tel:+33766586330' },
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
            Développeur Full Stack JavaScript/TypeScript avec plus d&apos;un an d&apos;expérience dans la
            conception et le développement d&apos;applications web et mobiles modernes. Expertise en React,
            Next.js, NestJS, et architectures microservices. Maîtrise de TypeScript, REST APIs, et bases
            de données (MongoDB/PostgreSQL). Passionné par la création d&apos;interfaces utilisateur
            réactives et l&apos;architecture backend scalable.
          </Description>

          <InfoList>
            {contactInfo.map((item) => (
              <InfoRow key={item.label}>
                <InfoLabel>
                  {item.label}
                </InfoLabel>
                {item.href ? (
                  <InfoValueLink
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.value}
                  </InfoValueLink>
                ) : (
                  <InfoValueText>{item.value}</InfoValueText>
                )}
              </InfoRow>
            ))}
          </InfoList>

          <DownloadButton
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Télécharger CV
          </DownloadButton>
        </TextColumn>

        <ImageColumn {...fadeUp(0.25)}>
          <ImageContainerWrapper>
            <ImageGlow />
            <ImageWrapper>
              <Image src="/profile.jpeg" alt="Souhail Ziyadi" fill style={{ objectFit: 'cover' }} priority />
            </ImageWrapper>
            <DecoratorBottomRight />
            <DecoratorTopLeft />
          </ImageContainerWrapper>
        </ImageColumn>
      </ContentGrid>
    </AboutSection>
  );
}
