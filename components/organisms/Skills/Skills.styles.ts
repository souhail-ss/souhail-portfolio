import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 7rem 1.5rem;
  max-width: 80rem;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2.5rem;
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
  background: var(--border);
`;

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-bottom: 2.5rem;
`;

export const FilterTab = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({ $active }) => $active ? 'transparent' : 'var(--border-strong)'};
  background: ${({ $active }) => $active ? 'var(--text-primary)' : 'transparent'};
  color: ${({ $active }) => $active ? 'var(--bg-page)' : 'var(--text-muted)'};

  &:hover {
    background: ${({ $active }) => $active ? 'var(--text-primary)' : 'var(--bg-card-hover)'};
    color: ${({ $active }) => $active ? 'var(--bg-page)' : 'var(--text-primary)'};
    border-color: ${({ $active }) => $active ? 'transparent' : 'var(--border-strong)'};
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
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  cursor: default;
  transition: border-color 0.2s ease, background 0.2s ease;
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
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $filled }) => $filled ? 'var(--text-primary)' : 'var(--border-strong)'};
  opacity: ${({ $filled }) => $filled ? '0.85' : '1'};
  transition: background 0.2s;
`;
