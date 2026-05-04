'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Container,
  TabBar,
  TabButton,
  ActiveTabBackground,
  TabLabel,
  ContentContainer,
  ContentHeader,
  HeaderLine,
  DescriptionText,
  MissionsList,
  MissionItem,
  MissionBullet,
  SkillsContainer,
  SkillPill,
  SkillIcon
} from './ExperienceTabs.styles';

interface ExperienceTabsProps {
  description: string;
  missions: string[];
  skills: string[];
}

const getIconUrl = (skill: string) => {
  const slugMap: Record<string, string> = {
    'TypeScript': 'typescript',
    'NestJS': 'nestjs',
    'Next.js': 'nextdotjs',
    'React': 'react',
    'styled-components': 'styledcomponents',
    'TypeORM': 'typeorm',
    'PostgreSQL': 'postgresql',
    'Jest': 'jest',
    'React DnD': 'react',
    'Python': 'python',
    'Django': 'django',
    'Docker': 'docker',
    'NX Monorepo': 'nx',
    'Flutter': 'flutter',
    'Dart': 'dart',
    'Firebase': 'firebase',
    'HTML5': 'html5',
    'CSS3': 'css3',
    'JavaScript': 'javascript',
  };
  const slug = slugMap[skill] || skill.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `https://cdn.simpleicons.org/${slug}/white`;
};

const TABS = [
  { id: 'description', label: 'Description' },
  { id: 'missions',    label: 'Missions' },
  { id: 'skills',      label: 'Compétences' },
] as const;

type TabId = (typeof TABS)[number]['id'];

export default function ExperienceTabs({ description, missions, skills }: ExperienceTabsProps) {
  const [active, setActive] = useState<TabId>('description');

  return (
    <Container>
      {/* Tab Bar */}
      <TabBar>
        {TABS.map((tab) => (
          <TabButton
            key={tab.id}
            onClick={() => setActive(tab.id)}
            $active={active === tab.id}
          >
            {active === tab.id && (
              <ActiveTabBackground
                layoutId="activeTab"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <TabLabel>{tab.label}</TabLabel>
          </TabButton>
        ))}
      </TabBar>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {active === 'description' && (
            <ContentContainer>
              <ContentHeader>
                <HeaderLine />
                Description du poste
              </ContentHeader>
              <DescriptionText>
                {description}
              </DescriptionText>
            </ContentContainer>
          )}

          {active === 'missions' && (
            <ContentContainer>
              <ContentHeader>
                <HeaderLine />
                Missions &amp; Réalisations
              </ContentHeader>
              <MissionsList>
                {missions.map((bullet, i) => (
                  <MissionItem key={i}>
                    <MissionBullet />
                    {bullet}
                  </MissionItem>
                ))}
              </MissionsList>
            </ContentContainer>
          )}

          {active === 'skills' && (
            <ContentContainer>
              <ContentHeader>
                <HeaderLine />
                Technologies utilisées
              </ContentHeader>
              <SkillsContainer>
                {skills.map((skill) => (
                  <SkillPill key={skill}>
                    <SkillIcon 
                      src={getIconUrl(skill)} 
                      alt="" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {skill}
                  </SkillPill>
                ))}
              </SkillsContainer>
            </ContentContainer>
          )}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}
