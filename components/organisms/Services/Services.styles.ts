import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Card = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem;
  border-radius: 1.25rem;
  border: 3px solid var(--text-primary);
  background: var(--bg-elev);
  box-shadow: 6px 6px 0 var(--text-primary);
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 8px 8px 0 var(--text-primary);
  }
`;

export const IconTile = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--on-accent);
  background: var(--accent);
  border: 2px solid var(--text-primary);
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`;

export const CardText = styled.p`
  color: var(--text-muted);
  font-size: 0.9375rem;
  line-height: 1.6;
`;

export const Points = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 2px solid var(--text-primary);
`;

export const Point = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  color: var(--text-muted);
  font-size: 0.875rem;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: var(--accent);
  }
`;
