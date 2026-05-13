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

export const AITeaserWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
`;

export const AIInputBorder = styled.div<{ $focused: boolean }>`
  padding: 1.5px;
  border-radius: 999px;
  background: ${({ $focused }) =>
    $focused
      ? 'linear-gradient(90deg, #e040fb, #6366f1)'
      : 'linear-gradient(90deg, rgba(224,64,251,0.45), rgba(99,102,241,0.45))'};
  transition: background 0.25s;
  width: 520px;
  max-width: 88vw;
`;

export const AIInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #0e0e12;
  border-radius: 999px;
  padding: 0.75rem 0.75rem 0.75rem 1.5rem;
`;

export const AIInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 0.9375rem;
  font-family: inherit;
  min-width: 0;

  &::placeholder {
    color: rgba(255, 255, 255, 0.28);
  }
`;

export const AISubmitButton = styled.button`
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.55);
  transition: background 0.15s, color 0.15s;

  svg { width: 17px; height: 17px; }

  &:hover:not(:disabled) {
    background: #6366f1;
    color: #fff;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
