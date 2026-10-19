'use client';

import { Wrap, Title, Slash, Line, Subtitle } from './SectionTitle.styles';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  accentColor?: string;
}

export default function SectionTitle({ title, subtitle, accentColor }: SectionTitleProps) {
  return (
    <Wrap
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Title>
        <Slash $color={accentColor}>/</Slash>
        <span>{title}</span>
        <Line />
      </Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrap>
  );
}
