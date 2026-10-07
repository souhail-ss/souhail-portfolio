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
  border-radius: 1.75rem;
  border: 4px solid var(--text-primary);
  box-shadow: 8px 8px 0 var(--text-primary);
  background:
    radial-gradient(ellipse 60% 80% at 0% 0%, var(--accent-a15), transparent 70%),
    var(--bg-elev);
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 3.5rem;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    align-items: center;
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--text-primary);

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`;

export const Accent = styled.span`
  color: var(--accent);
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
  border-radius: 0.625rem;
  border: 3px solid var(--text-primary);
  background: var(--accent);
  color: var(--on-accent);
  font-size: 0.9375rem;
  font-weight: 700;
  box-shadow: 4px 4px 0 var(--text-primary);
  transition: background-color 0.15s, transform 0.15s, box-shadow 0.15s;

  &:hover {
    background: var(--accent-dk);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--text-primary);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 var(--text-primary);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 0.625rem;
  border: 3px solid var(--text-primary);
  background: var(--bg-elev);
  color: var(--text-primary);
  font-size: 0.9375rem;
  font-weight: 700;
  box-shadow: 4px 4px 0 var(--text-primary);
  transition: all 0.15s;

  &:hover {
    background: var(--accent-a10);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--text-primary);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 var(--text-primary);
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
  border-radius: 0.75rem;
  color: var(--text-muted);
  font-size: 0.875rem;
  overflow-wrap: anywhere;

  @media (min-width: 768px) {
    padding: 0.85rem 1rem;
    font-size: 0.9375rem;
  }
  transition: background 0.2s, color 0.2s;

  svg {
    flex-shrink: 0;
    color: var(--accent);
  }

  &:hover {
    background: var(--bg-card-hover);
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
    color: var(--accent);
  }
`;
