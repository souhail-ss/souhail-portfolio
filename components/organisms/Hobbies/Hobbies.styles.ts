import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HobbiesSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 80rem;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
`;

export const Card = styled(motion.div)<{ $color: string; $rgb: string }>`
  padding: 1.75rem;
  border-radius: 1.5rem;
  background: var(--bg-elev);
  box-shadow: var(--clay-sm);
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--clay-md), 0 0 40px rgba(${({ $rgb }) => $rgb}, 0.18);
  }

  .icon {
    width: 56px;
    height: 56px;
    border-radius: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ $color }) => $color};
    background: rgba(${({ $rgb }) => $rgb}, 0.14);
    box-shadow: inset 0 0 0 1px rgba(${({ $rgb }) => $rgb}, 0.3);
    margin-bottom: 1.25rem;
  }
`;

export const HobbyTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
`;

export const HobbyDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
`;
