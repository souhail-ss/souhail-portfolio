import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HobbiesSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Slash = styled.span`
  color: #6366f1;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: var(--border);
  margin-left: 0.5rem;
`;

export const HobbiesGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const HobbyCard = styled(motion.div)`
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  transition: all 0.3s;
  cursor: default;

  &:hover {
    border-color: rgba(99, 102, 241, 0.4);
    background-color: var(--bg-card-hover);
  }
`;

export const HobbyIcon = styled(motion.span)`
  font-size: 3rem;
`;

export const HobbyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  transition: color 0.3s;

  ${HobbyCard}:hover & {
    color: #6366f1;
  }
`;

export const HobbyDescription = styled.p`
  color: var(--text-muted);
  font-size: 0.875rem;
  line-height: 1.625;
`;
