'use client';

import { motion } from 'framer-motion';
import {
  ProjectsSection,
  Title,
  Slash,
  Line,
  ProjectsGrid,
  ProjectCard,
  CardHeader,
  IconWrapper,
  IconButton,
  ContentWrapper,
  ProjectTitle,
  ProjectDescription,
  TechList,
  TechPill,
  ActionButtonsContainer,
  ActionButtonSecondary,
  ActionButtonPrimary
} from './Projects.styles';

const projects = [
  {
    title: 'Weneeds — Plateforme de Recrutement IA',
    description: "Plateforme full-stack de recrutement boostée par l'IA. Architecture microservices avec NX monorepo, NestJS backend, Next.js frontend. Système de widgets draggables, moteur de recherche avancé avec filtres dynamiques, et matching IA entre candidats et offres.",
    tech: ['NestJS', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Django', 'Docker', 'NX Monorepo'],
    github: '',
    live: '',
  },
  {
    title: 'Notes App',
    description: "Application full-stack de gestion de notes personnelles. Backend NestJS avec API REST, frontend React moderne. PostgreSQL en production, SQLite pour le développement local.",
    tech: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'SQLite'],
    github: 'https://github.com/souhail-ss',
    live: '',
  },
  {
    title: 'Application Mobile Stellantis',
    description: "Application mobile multiplateforme (iOS/Android) de gestion des réservations internes pour les employés de Stellantis. Interface moderne et ergonomique avec une expérience utilisateur fluide.",
    tech: ['Flutter', 'Dart', 'Firebase'],
    github: '',
    live: '',
  },
];

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <Title
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <Slash>/</Slash>
        <span>Projets</span>
        <Line />
      </Title>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.13 }}
            whileHover={{ y: -6 }}
          >
            <CardHeader>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <IconWrapper>
                {project.github && (
                  <IconButton href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GithubIcon />
                  </IconButton>
                )}
                {project.live && (
                  <IconButton href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live">
                    <ExternalLinkIcon />
                  </IconButton>
                )}
              </IconWrapper>
            </CardHeader>

            <ContentWrapper>
              <ProjectTitle>
                {project.title}
              </ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ContentWrapper>

            <TechList>
              {project.tech.map((tech) => (
                <TechPill key={tech}>
                  {tech}
                </TechPill>
              ))}
            </TechList>

            {(project.github || project.live) && (
              <ActionButtonsContainer>
                {project.github && (
                  <ActionButtonSecondary href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon /> GitHub
                  </ActionButtonSecondary>
                )}
                {project.live && (
                  <ActionButtonPrimary href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon /> Live
                  </ActionButtonPrimary>
                )}
              </ActionButtonsContainer>
            )}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}
