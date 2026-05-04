'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Section,
  Title,
  Slash,
  Line,
  FilterRow,
  FilterTab,
  Grid,
  Card,
  CardIcon,
  CardName,
  Dots,
  Dot,
} from './Skills.styles';

type Category = 'Toutes' | 'Frontend' | 'Backend' | 'Database' | 'DevOps & Cloud' | 'Tools & Others';

const FILTERS: Category[] = ['Toutes', 'Frontend', 'Backend', 'Database', 'DevOps & Cloud', 'Tools & Others'];

const skills: { name: string; icon: string; level: number; category: Exclude<Category, 'Toutes'>; colorOverride?: string }[] = [
  // Frontend
  { name: 'React.js',          icon: 'react',            level: 5, category: 'Frontend' },
  { name: 'Next.js',           icon: 'nextdotjs',        level: 5, category: 'Frontend' },
  { name: 'TypeScript',        icon: 'typescript',       level: 5, category: 'Frontend' },
  { name: 'JavaScript',        icon: 'javascript',       level: 5, category: 'Frontend' },
  { name: 'HTML5',             icon: 'html5',            level: 5, category: 'Frontend' },
  { name: 'CSS3',              icon: 'css3',             level: 5, category: 'Frontend' },
  { name: 'Sass/SCSS',         icon: 'sass',             level: 4, category: 'Frontend' },
  { name: 'Styled Components', icon: 'styledcomponents', level: 5, category: 'Frontend' },
  { name: 'Material UI',       icon: 'mui',              level: 4, category: 'Frontend' },
  { name: 'Tailwind CSS',      icon: 'tailwindcss',      level: 4, category: 'Frontend' },
  { name: 'Bootstrap',         icon: 'bootstrap',        level: 4, category: 'Frontend' },
  { name: 'Redux',             icon: 'redux',            level: 4, category: 'Frontend' },
  { name: 'jQuery',            icon: 'jquery',           level: 3, category: 'Frontend' },
  // Backend
  { name: 'Node.js',           icon: 'nodedotjs',        level: 5, category: 'Backend' },
  { name: 'NestJS',            icon: 'nestjs',           level: 5, category: 'Backend' },
  { name: 'Express.js',        icon: 'express',          level: 4, category: 'Backend', colorOverride: 'white' },
  { name: 'GraphQL',           icon: 'graphql',          level: 4, category: 'Backend' },
  { name: 'Python',            icon: 'python',           level: 3, category: 'Backend' },
  { name: 'PHP',               icon: 'php',              level: 3, category: 'Backend' },
  { name: 'Django',            icon: 'django',           level: 2, category: 'Backend', colorOverride: 'white' },
  // Database
  { name: 'PostgreSQL',        icon: 'postgresql',       level: 5, category: 'Database' },
  { name: 'MongoDB',           icon: 'mongodb',          level: 5, category: 'Database' },
  { name: 'Firebase',          icon: 'firebase',         level: 4, category: 'Database' },
  { name: 'SQLite',            icon: 'sqlite',           level: 4, category: 'Database' },
  // DevOps & Cloud
  { name: 'Git',               icon: 'git',              level: 5, category: 'DevOps & Cloud' },
  { name: 'GitHub',            icon: 'github',           level: 5, category: 'DevOps & Cloud', colorOverride: 'white' },
  { name: 'Docker',            icon: 'docker',           level: 4, category: 'DevOps & Cloud' },
  { name: 'AWS',               icon: 'amazonaws',        level: 3, category: 'DevOps & Cloud', colorOverride: 'white' },
  { name: 'GitHub Actions',    icon: 'githubactions',    level: 3, category: 'DevOps & Cloud' },
  // Tools & Others
  { name: 'Figma',             icon: 'figma',            level: 4, category: 'Tools & Others' },
  { name: 'Jest',              icon: 'jest',             level: 4, category: 'Tools & Others' },
  { name: 'Postman',           icon: 'postman',          level: 5, category: 'Tools & Others' },
  { name: 'Jira',              icon: 'jira',             level: 4, category: 'Tools & Others' },
  { name: 'Flutter',           icon: 'flutter',          level: 3, category: 'Tools & Others' },
  { name: 'React Native',      icon: 'react',            level: 4, category: 'Tools & Others' },
  { name: 'Dart',              icon: 'dart',             level: 3, category: 'Tools & Others' },
];

export default function Skills() {
  const [active, setActive] = useState<Category>('Toutes');

  const filtered = active === 'Toutes' ? skills : skills.filter(s => s.category === active);

  return (
    <Section id="skills">
      <Title
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <Slash>/</Slash>
        <span>Compétences</span>
        <Line />
      </Title>

      <FilterRow>
        {FILTERS.map(f => (
          <FilterTab key={f} $active={f === active} onClick={() => setActive(f)}>
            {f}
          </FilterTab>
        ))}
      </FilterRow>

      <Grid>
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <Card
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.5)' }}
            >
              <CardIcon
                src={`https://cdn.simpleicons.org/${skill.icon}${skill.colorOverride ? `/${skill.colorOverride}` : ''}`}
                alt={skill.name}
                onError={(e) => { e.currentTarget.style.opacity = '0'; }}
              />
              <CardName>{skill.name}</CardName>
              <Dots>
                {Array.from({ length: 5 }).map((_, d) => (
                  <Dot key={d} $filled={d < skill.level} />
                ))}
              </Dots>
            </Card>
          ))}
        </AnimatePresence>
      </Grid>
    </Section>
  );
}
