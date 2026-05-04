'use client';

import { type HTMLMotionProps, motion, type Transition } from 'framer-motion';
import type * as React from 'react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Placeholder, Container, Letter } from './ShimmeringText.styles';

type ShimmeringTextProps = {
  text: string;
  duration?: number;
  transition?: Transition;
  wave?: boolean;
  color?: string;
  shimmeringColor?: string;
} & Omit<HTMLMotionProps<'span'>, 'children'>;

const SPAWN_DURATION = 0.75; // seconds each letter takes to arrive
const STAGGER       = 0.055; // seconds between each letter's start

function ShimmeringText({
  text,
  duration = 1.4,
  transition,
  wave = false,
  className,
  color = 'rgba(255,255,255,0.55)',
  shimmeringColor = 'rgba(255,255,255,1)',
  ...props
}: ShimmeringTextProps) {
  // Random origins are generated client-side only to avoid SSR hydration mismatch
  const [origins, setOrigins] = useState<Array<{ x: number; y: number; rotate: number }> | null>(null);

  useEffect(() => {
    setOrigins(
      text.split('').map(() => ({
        x:      (Math.random() - 0.5) * 900,
        y:      (Math.random() - 0.5) * 700,
        rotate: (Math.random() - 0.5) * 720,
      }))
    );
  }, [text]);

  // Total time before the last letter lands
  const totalSpawn = (text.length - 1) * STAGGER + SPAWN_DURATION;

  // Before client mount: invisible placeholder so layout space is reserved
  if (!origins) {
    return (
      <Placeholder className={className}>
        {text}
      </Placeholder>
    );
  }

  return (
    <Container
      className={className}
      style={
        {
          '--shimmering-color': shimmeringColor,
          '--color': color,
          color: 'var(--color)',
        } as React.CSSProperties
      }
      {...(props as any)}
    >
      {text.split('').map((char, i) => (
        <Letter
          key={i}
          initial={{
            x:      origins[i].x,
            y:      origins[i].y,
            rotate: origins[i].rotate,
            opacity: 0,
            scale:  0.15,
            color:  'var(--color)',
          }}
          animate={{
            x: 0, y: 0, rotate: 0, opacity: 1, scale: 1,
            ...(wave ? { rotateY: [0, 15, 0] } : {}),
            // shimmer starts only after every letter has landed
            color: ['var(--color)', 'var(--shimmering-color)', 'var(--color)'],
          }}
          transition={{
            // ── spawn properties ──────────────────────────────────────
            x:      { delay: i * STAGGER, duration: SPAWN_DURATION, ease: [0.16, 1, 0.3, 1] },
            y:      { delay: i * STAGGER, duration: SPAWN_DURATION, ease: [0.16, 1, 0.3, 1] },
            rotate: { delay: i * STAGGER, duration: SPAWN_DURATION, ease: [0.16, 1, 0.3, 1] },
            scale:  { delay: i * STAGGER, duration: SPAWN_DURATION, ease: [0.16, 1, 0.3, 1] },
            opacity:{ delay: i * STAGGER, duration: SPAWN_DURATION * 0.45 },
            // ── shimmer loop (starts after spawn fully done) ──────────
            color: {
              delay:       totalSpawn + 0.3 + (i * duration) / text.length,
              duration,
              repeat:      Infinity,
              repeatType:  'loop',
              repeatDelay: text.length * 0.04,
              ease:        'easeInOut',
              ...transition,
            },
            ...(wave
              ? { rotateY: { delay: totalSpawn, duration, repeat: Infinity, repeatType: 'loop' } }
              : {}),
          }}
        >
          {char}
        </Letter>
      ))}
    </Container>
  );
}

export { ShimmeringText, type ShimmeringTextProps };
export default ShimmeringText;
