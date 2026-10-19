import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
`;

export const Panel = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 3rem;
  padding: 2rem;
  border-radius: 2.25rem;
  box-shadow: var(--clay-lg);
  background: var(--bg-elev);
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 3.5rem;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    align-items: center;
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--text-primary);

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`;

export const Accent = styled.span`
  color: var(--accent-2);
`;

export const Text = styled.p`
  margin-top: 1.25rem;
  color: var(--text-muted);
  font-size: 1.0625rem;
  line-height: 1.65;
  max-width: 32rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  margin-top: 2rem;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 1.25rem;
  background: var(--accent-grad);
  color: var(--on-accent);
  font-size: 0.9375rem;
  font-weight: 600;
  box-shadow: var(--clay-sm);
  transition: filter 0.15s, transform 0.15s, box-shadow 0.15s;

  &:hover {
    filter: brightness(1.06);
    box-shadow: var(--clay-md);
  }

  &:active {
    box-shadow: var(--clay-inset);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 1.25rem;
  background: var(--bg-elev);
  color: var(--text-primary);
  font-size: 0.9375rem;
  font-weight: 600;
  box-shadow: var(--clay-sm);
  transition: all 0.15s;

  &:hover {
    color: var(--accent);
    box-shadow: var(--clay-md);
  }

  &:active {
    box-shadow: var(--clay-inset);
  }
`;

export const Details = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DetailLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.85rem 0.5rem;
  border-radius: 1rem;
  color: var(--text-muted);
  font-size: 0.875rem;
  overflow-wrap: anywhere;

  @media (min-width: 768px) {
    padding: 0.85rem 1rem;
    font-size: 0.9375rem;
  }
  transition: box-shadow 0.2s, color 0.2s;

  svg {
    flex-shrink: 0;
    color: var(--accent-2);
  }

  &:hover {
    box-shadow: var(--clay-inset);
    color: var(--text-primary);
  }
`;

export const DetailStatic = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.85rem 1rem;
  color: var(--text-muted);
  font-size: 0.9375rem;

  svg {
    flex-shrink: 0;
    color: var(--accent-2);
  }
`;
