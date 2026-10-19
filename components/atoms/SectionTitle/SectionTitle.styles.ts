import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrap = styled(motion.div)`
  margin-bottom: 3.5rem;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 1rem;
  letter-spacing: -0.02em;
`;

export const Slash = styled.span<{ $color?: string }>`
  color: ${({ $color }) => $color || 'var(--accent)'};
`;

export const Line = styled.div`
  flex: 1;
  height: 8px;
  border-radius: 999px;
  background: var(--accent-grad-soft);
  box-shadow: var(--clay-xs);
  margin-left: 0.5rem;
`;

export const Subtitle = styled.p`
  margin-top: 1rem;
  max-width: 40rem;
  color: var(--text-muted);
  font-size: 1.0625rem;
  line-height: 1.6;
`;
