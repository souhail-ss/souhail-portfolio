import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 7rem 1.5rem;
  max-width: 80rem;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Slash = styled.span`
  color: var(--accent);
`;

export const Line = styled.div`
  flex: 1;
  height: 8px;
  border-radius: 999px;
  background: var(--accent-grad-soft);
  box-shadow: var(--clay-xs);
`;

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-bottom: 2.5rem;
`;

export const FilterTab = styled.button<{ $active: boolean; $color: string; $hoverTint: string }>`
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  background: var(--bg-elev);
  color: ${({ $active, $color }) => $active ? $color : 'var(--text-muted)'};
  box-shadow: ${({ $active }) => $active ? 'var(--clay-inset)' : 'var(--clay-xs)'};

  &:hover {
    color: ${({ $color }) => $color};
    box-shadow: ${({ $active }) => $active ? 'var(--clay-inset)' : 'var(--clay-sm)'};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.75rem;
  }
`;

export const Card = styled(motion.div)`
  &:nth-child(5n+1) { background: var(--pastel-blue); }
  &:nth-child(5n+2) { background: var(--pastel-pink); }
  &:nth-child(5n+3) { background: var(--pastel-mint); }
  &:nth-child(5n+4) { background: var(--pastel-purple); }
  &:nth-child(5n+5) { background: var(--pastel-yellow); }
  background: var(--bg-elev);
  border-radius: 2rem;
  box-shadow: var(--clay-sm);
  padding: 1.5rem 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  cursor: default;
  transition: box-shadow 0.15s ease;

  &:hover {
    box-shadow: var(--clay-md);
  }
`;

export const CardIcon = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
  margin-bottom: 0.875rem;
`;

export const CardName = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  line-height: 1.3;
  margin-bottom: 0.625rem;
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Dot = styled.span<{ $filled: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $filled }) => $filled ? 'var(--accent-grad)' : 'var(--border-strong)'};
  transition: background 0.2s;
`;
