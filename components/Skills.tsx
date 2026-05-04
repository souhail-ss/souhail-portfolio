'use client';

import { motion } from 'framer-motion';
import {
  Section,
  Title,
  Slash,
  Line,
  GroupsContainer,
  CategoryTitle,
  CategoryLine,
  SkillsContainer,
  SkillPill,
  SkillIcon
} from './Skills.styles';

const skillGroups = [
  { category: 'Langages',         skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java'] },
  { category: 'Frontend',         skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Styled Components', 'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Redux', 'jQuery'] },
  { category: 'Mobile',           skills: ['React Native', 'Flutter', 'Dart'] },
  { category: 'Backend',          skills: ['Node.js', 'NestJS', 'REST API', 'GraphQL'] },
  { category: 'Bases de données', skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'] },
  { category: 'Outils & DevOps',  skills: ['Git', 'GitHub', 'Docker', 'Jest', 'Figma', 'Postman', 'Jira', 'AWS'] },
];

const getIconUrl = (skill: string) => {
  const slugMap: Record<string, string> = {
    'TypeScript': 'typescript',
    'JavaScript': 'javascript',
    'Python': 'python',
    'PHP': 'php',
    'Java': 'java',
    'React.js': 'react',
    'Next.js': 'nextdotjs',
    'HTML5': 'html5',
    'CSS3': 'css3',
    'Styled Components': 'styledcomponents',
    'Tailwind CSS': 'tailwindcss',
    'Bootstrap': 'bootstrap',
    'Material-UI': 'mui',
    'Redux': 'redux',
    'jQuery': 'jquery',
    'React Native': 'react',
    'Flutter': 'flutter',
    'Dart': 'dart',
    'Node.js': 'nodedotjs',
    'NestJS': 'nestjs',
    'GraphQL': 'graphql',
    'PostgreSQL': 'postgresql',
    'MongoDB': 'mongodb',
    'SQLite': 'sqlite',
    'Firebase': 'firebase',
    'Git': 'git',
    'GitHub': 'github',
    'Docker': 'docker',
    'Jest': 'jest',
    'Figma': 'figma',
    'Postman': 'postman',
    'Jira': 'jira',
    'AWS': 'amazonaws'
  };
  const slug = slugMap[skill] || skill.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `https://cdn.simpleicons.org/${slug}/white`;
};

export default function Skills() {
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

      <GroupsContainer>
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
          >
            <CategoryTitle>
              <CategoryLine />
              {group.category}
            </CategoryTitle>
            
            <SkillsContainer>
              {group.skills.map((skill, skillIndex) => (
                <SkillPill
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: groupIndex * 0.08 + skillIndex * 0.04 }}
                  whileHover={{ scale: 1.08, borderColor: 'rgba(99,102,241,0.6)' }}
                >
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
          </motion.div>
        ))}
      </GroupsContainer>
    </Section>
  );
}
