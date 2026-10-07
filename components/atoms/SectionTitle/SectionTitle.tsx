'use client';

import { Wrap, Title, Slash, Line, Subtitle } from './SectionTitle.styles';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Wrap
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Title>
        <Slash>/</Slash>
        <span>{title}</span>
        <Line />
      </Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrap>
  );
}
