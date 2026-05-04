'use client';

import { motion } from 'framer-motion';
import {
  HobbiesSection,
  Title,
  Slash,
  Line,
  HobbiesGrid,
  HobbyCard,
  HobbyIcon,
  HobbyTitle,
  HobbyDescription
} from './Hobbies.styles';

const hobbies = [
  { icon: '🎮', title: 'Gaming',     description: 'Passionné par les jeux vidéo, les univers immersifs et la culture gaming.' },
  { icon: '🎤', title: 'Beatboxing', description: 'Créer de la musique avec uniquement la voix — rythmes, basses et sons percussifs.' },
  { icon: '🏋️', title: 'Sport',      description: "La discipline sportive comme source de motivation et d'énergie au quotidien." },
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
            <HobbyIcon whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}>
              {hobby.icon}
            </HobbyIcon>
            <HobbyTitle>
              {hobby.title}
            </HobbyTitle>
            <HobbyDescription>{hobby.description}</HobbyDescription>
          </HobbyCard>
        ))}
      </HobbiesGrid>
    </HobbiesSection>
  );
}
