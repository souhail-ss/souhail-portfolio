import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1.5rem;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
`;

export const TitleName = styled(motion.h1)`
  font-size: 3.75rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.025em;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const Highlight = styled.span`
  color: #6366f1;
`;

export const Subtitle = styled(motion.p)`
  color: var(--text-dim);
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: 0.15em;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 0.5rem;
`;

export const PrimaryButton = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #6366f1;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4338ca;
  }
`;

export const SecondaryButton = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-strong);
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    border-color: var(--text-muted);
    color: var(--text-primary);
  }
`;

export const ScrollIndicator = styled(motion.a)`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dim);
  transition: color 0.3s;

  &:hover {
    color: #6366f1;
  }
`;

export const ScrollText = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;
