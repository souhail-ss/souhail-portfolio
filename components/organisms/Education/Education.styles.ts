import styled from 'styled-components';
import { motion } from 'framer-motion';

export const EducationSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 80rem;
  margin: 0 auto;
`;

export const Timeline = styled.ol`
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0.45rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    border-radius: 2px;
    background: var(--accent-grad);
    opacity: 0.5;
  }
`;

export const Item = styled(motion.li)`
  position: relative;
`;

export const Dot = styled.span`
  position: absolute;
  left: calc(-2rem + 0.1rem);
  top: 1.75rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent-grad);
  box-shadow: 0 0 0 4px var(--bg-page), 0 0 14px rgba(var(--accent-rgb), 0.6);
`;

export const Card = styled.div`
  padding: 1.5rem 1.75rem;
  border-radius: 1.5rem;
  background: var(--bg-elev);
  box-shadow: var(--clay-sm);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: var(--clay-md);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem 1.5rem;
`;

export const Degree = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
`;

export const School = styled.a`
  display: inline-block;
  margin-top: 0.25rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--accent);

  &:hover { text-decoration: underline; }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
  font-size: 0.8125rem;
  color: var(--text-dim);

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  @media (max-width: 640px) {
    align-items: flex-start;
  }
`;

export const Description = styled.p`
  margin-top: 0.875rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--text-muted);
`;

export const Courses = styled.ul`
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    background: var(--bg-elev-2);
    box-shadow: var(--clay-xs);
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-primary);
  }
`;
