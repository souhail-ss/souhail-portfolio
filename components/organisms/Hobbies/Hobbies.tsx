'use client';

import { Gamepad2, Mic2, Zap } from 'lucide-react';
import SectionTitle from '@/components/atoms/SectionTitle/SectionTitle';
import { HobbiesSection, Grid, Card, HobbyTitle, HobbyDescription } from './Hobbies.styles';

const hobbies = [
  {
    icon: Gamepad2,
    color: 'var(--accent)',
    rgb: 'var(--accent-rgb)',
    title: 'Gaming',
    description: 'Passionné par les jeux vidéo, les univers immersifs et la culture gaming.',
  },
  {
    icon: Mic2,
    color: 'var(--teal)',
    rgb: 'var(--teal-rgb)',
    title: 'Beatboxing',
    description: 'Créer de la musique avec uniquement la voix — rythmes, basses et sons percussifs.',
  },
  {
    icon: Zap,
    color: 'var(--yellow)',
    rgb: 'var(--yellow-rgb)',
    title: 'Sport',
    description: "La discipline sportive comme source de motivation et d'énergie au quotidien.",
  },
];

export default function Hobbies() {
  return (
    <HobbiesSection id="hobbies">
      <SectionTitle title="Loisirs" />

      <Grid>
        {hobbies.map(({ icon: Icon, color, rgb, title, description }, i) => (
          <Card
            key={title}
            $color={color}
            $rgb={rgb}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="icon"><Icon size={28} strokeWidth={1.75} /></div>
            <HobbyTitle>{title}</HobbyTitle>
            <HobbyDescription>{description}</HobbyDescription>
          </Card>
        ))}
      </Grid>
    </HobbiesSection>
  );
}
