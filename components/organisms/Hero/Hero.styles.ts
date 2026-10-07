import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 1.5rem 5rem;
`;

export const HeroGrid = styled.div`
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
`;

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.55); }
  70%  { box-shadow: 0 0 0 8px rgba(var(--accent-rgb), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0); }
`;

export const AvailabilityBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 2px solid var(--text-primary);
  background: var(--bg-elev);
  color: var(--text-primary);
  font-size: 0.8125rem;
  font-weight: 600;
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  animation: ${pulse} 2s infinite;
`;

export const Headline = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.08;
  letter-spacing: -0.03em;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const Highlight = styled.span`
  color: var(--accent);
`;

export const Lead = styled(motion.p)`
  color: var(--text-muted);
  font-size: 1.0625rem;
  line-height: 1.65;
  max-width: 36rem;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 1.1875rem;
  }
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 0.625rem;
  border: 3px solid var(--text-primary);
  background-color: var(--accent);
  color: var(--on-accent);
  font-size: 0.9375rem;
  font-weight: 700;
  box-shadow: 4px 4px 0 var(--text-primary);
  transition: background-color 0.15s, transform 0.15s, box-shadow 0.15s;

  svg {
    transition: transform 0.15s;
  }

  &:hover {
    background-color: var(--accent-dk);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--text-primary);

    svg {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 var(--text-primary);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
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

export const StackRow = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
`;

export const StackChip = styled.li`
  padding: 0.25rem 0.7rem;
  border-radius: 6px;
  border: 2px solid var(--text-primary);
  background: var(--bg-elev);
  color: var(--text-primary);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 2px 2px 0 var(--text-primary);
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;

  &:hover {
    background: var(--accent-a15);
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0 var(--text-primary);
  }
`;

/* ─── Project brief card (visual asset) ───────────────────────── */

export const BriefColumn = styled(motion.div)`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const BriefCard = styled.div`
  position: relative;
  border-radius: 1.25rem;
  border: 3px solid var(--text-primary);
  background: var(--bg-elev);
  box-shadow: 8px 8px 0 var(--text-primary);
  overflow: hidden;
`;

export const BriefTopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1rem;
  border-bottom: 3px solid var(--text-primary);
  background: var(--bg-elev-2);

  span.dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1.5px solid var(--text-primary);
    background: var(--bg-elev);
  }

  span.title {
    margin-left: 0.5rem;
    font-size: 0.75rem;
    color: var(--text-dim);
    letter-spacing: 0.04em;
  }
`;

export const BriefBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const BriefLabel = styled.div`
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--accent);
  font-weight: 600;
`;

export const BriefHeading = styled.div`
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 0.35rem;
`;

export const BriefSteps = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BriefStep = styled.li<{ $state: 'done' | 'active' | 'todo' }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 0.9rem;
  border-radius: 0.75rem;
  border: 2px solid var(--text-primary);
  background: ${({ $state }) => ($state === 'active' ? 'var(--accent-a15)' : 'var(--bg-elev)')};
  color: ${({ $state }) => ($state === 'todo' ? 'var(--text-dim)' : 'var(--text-primary)')};
  font-size: 0.875rem;
`;

export const StepIcon = styled.span<{ $state: 'done' | 'active' | 'todo' }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ $state }) => ($state === 'done' ? 'var(--accent)' : 'var(--bg-elev)')};
  border: 2px solid var(--text-primary);
  color: var(--on-accent);

  &::after {
    content: '';
    display: ${({ $state }) => ($state === 'active' ? 'block' : 'none')};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
  }
`;

export const BriefFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  font-size: 0.75rem;
  color: var(--text-dim);

  strong {
    color: var(--accent-2);
    font-weight: 600;
  }
`;

/* ─── AI teaser input ─────────────────────────────────────────── */

export const AITeaserWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const AIInputBorder = styled.div<{ $focused: boolean }>`
  padding: 0;
  border-radius: 999px;
  border: 3px solid var(--text-primary);
  background: var(--bg-elev);
  box-shadow: ${({ $focused }) => ($focused ? '5px 5px 0 var(--text-primary)' : '3px 3px 0 var(--text-primary)')};
  transition: box-shadow 0.2s;
  width: 520px;
  max-width: 100%;
`;

export const AIInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-field);
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
    color: var(--text-dim);
  }
`;

export const AISubmitButton = styled.button`
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--bg-elev);
  border: 2px solid var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: background 0.15s, color 0.15s, transform 0.15s;

  svg { width: 17px; height: 17px; }

  &:hover:not(:disabled) {
    background: var(--accent);
    color: var(--on-accent);
    transform: scale(1.08);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const ScrollIndicator = styled(motion.a)`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  margin-inline: auto;
  width: max-content;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dim);
  transition: color 0.3s;

  &:hover {
    color: var(--accent);
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ScrollText = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;
