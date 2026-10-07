import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProcessSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
`;

export const Steps = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const Step = styled(motion.li)`
  position: relative;
  padding: 1.5rem;
  border-radius: 1.25rem;
  border: 3px solid var(--text-primary);
  background: var(--bg-elev);
  box-shadow: 5px 5px 0 var(--text-primary);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 7px 7px 0 var(--text-primary);
  }
`;

export const StepNumber = styled.span`
  display: block;
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const StepTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

export const StepText = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
`;
