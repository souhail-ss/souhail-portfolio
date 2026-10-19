import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Slash = styled.span`
  color: var(--purple);
`;

export const Line = styled.div`
  flex: 1;
  height: 8px;
  border-radius: 999px;
  background: var(--accent-grad-soft);
  box-shadow: var(--clay-xs);
  margin-left: 0.5rem;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 4rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const TextColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Description = styled.p`
  color: var(--text-muted);
  font-size: 1.125rem;
  line-height: 1.625;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: baseline;
  font-size: 0.875rem;
`;

export const InfoLabel = styled.span`
  color: var(--accent);
  font-weight: 600;
  width: 7rem;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
`;

export const InfoValueText = styled.span`
  color: var(--text-muted);
`;
