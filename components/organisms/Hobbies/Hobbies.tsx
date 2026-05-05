'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Mic2, Zap } from 'lucide-react';
import {
  HobbiesSection,
  Title,
  Slash,
  Line,
  HobbiesGrid,
  HobbyCard,
  HobbyTitle,
  HobbyDescription
} from './Hobbies.styles';

const hobbies = [
  {
    icon: <Gamepad2 size={36} strokeWidth={1.5} />,
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.25)',
    title: 'Gaming',
    description: 'Passionné par les jeux vidéo, les univers immersifs et la culture gaming.',
  },
  {
    icon: <Mic2 size={36} strokeWidth={1.5} />,
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.25)',
    title: 'Beatboxing',
    description: 'Créer de la musique avec uniquement la voix — rythmes, basses et sons percussifs.',
  },
  {
    icon: <Zap size={36} strokeWidth={1.5} />,
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.25)',
    title: 'Sport',
    description: "La discipline sportive comme source de motivation et d'énergie au quotidien.",
  },
];

export default function Hobbies() {
  return (
    <HobbiesSection id="hobbies">
      <Title
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <Slash>/</Slash>
        <span>Hobbies</span>
        <Line />
      </Title>

      <HobbiesGrid>
        {hobbies.map((hobby, index) => (
          <HobbyCard
            key={hobby.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.13 }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              style={{
                width: 80,
                height: 80,
                borderRadius: '1.25rem',
                background: hobby.glow,
                border: `1px solid ${hobby.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: hobby.color,
              }}
              whileHover={{ scale: 1.12, boxShadow: `0 0 24px ${hobby.glow}` }}
              transition={{ duration: 0.25 }}
            >
              {hobby.icon}
            </motion.div>
            <HobbyTitle>{hobby.title}</HobbyTitle>
            <HobbyDescription>{hobby.description}</HobbyDescription>
          </HobbyCard>
        ))}
      </HobbiesGrid>
    </HobbiesSection>
  );
}
