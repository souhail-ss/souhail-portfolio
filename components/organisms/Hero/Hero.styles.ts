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
  background: var(--bg-elev);
  color: var(--text-primary);
  font-size: 0.8125rem;
  font-weight: 600;
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-grad);
  animation: ${pulse} 2s infinite;
`;

export const Headline = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.08;
  letter-spacing: -0.03em;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const Highlight = styled.span`
  background: var(--accent-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
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
  border-radius: 1.25rem;
  background: var(--accent-grad);
  color: var(--on-accent);
  font-size: 0.9375rem;
  font-weight: 600;
  box-shadow: var(--clay-sm);
  transition: background-color 0.15s, transform 0.15s, box-shadow 0.15s;

  svg {
    transition: transform 0.15s;
  }

  &:hover {
    filter: brightness(1.06);
    box-shadow: var(--clay-md);

    svg {
      transform: translateX(3px);
    }
  }

  &:active {
    box-shadow: var(--clay-inset);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
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

export const StackRow = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
`;

export const StackChip = styled.li`
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  background: var(--bg-elev);
  color: var(--text-primary);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: var(--clay-xs);
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;

  &:hover {
    color: var(--accent);
    box-shadow: var(--clay-sm);
  }
`;

/* ─── Profile card (visual asset) ─────────────────────────────── */

export const ProfileColumn = styled(motion.div)`
  width: 100%;
  max-width: 26rem;
  justify-self: center;
`;

export const ProfileCard = styled.div`
  position: relative;
  border-radius: 2.25rem;
  background: var(--bg-elev);
  box-shadow: var(--clay-lg);
  overflow: hidden;
  padding: 2rem 1.75rem 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

export const Avatar = styled.div`
  position: relative;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  padding: 4px;
  background: var(--accent-grad);
  box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.35);

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background: var(--bg-page);
  }
`;

export const ProfileName = styled.div`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
`;

export const ProfileRole = styled.div`
  margin-top: -0.6rem;
  font-size: 0.875rem;
  color: var(--accent);
  font-weight: 600;
`;

export const ProfileMeta = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8125rem;
  color: var(--text-muted);
`;

export const ProfileStats = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.625rem;
  margin-top: 0.5rem;
`;

export const ProfileStat = styled.div`
  padding: 0.875rem 0.5rem;
  border-radius: 1rem;
  background: var(--bg-elev-2);
  box-shadow: var(--clay-xs);

  strong {
    display: block;
    font-family: var(--font-display);
    font-size: 1.375rem;
    font-weight: 800;
    background: var(--accent-grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  span {
    font-size: 0.6875rem;
    color: var(--text-dim);
    letter-spacing: 0.04em;
  }
`;

export const ProfileCompanies = styled.div`
  width: 100%;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  font-size: 0.75rem;
  color: var(--text-dim);

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-elev);
  color: var(--text-primary);
  box-shadow: var(--clay-sm);
  transition: color 0.15s, box-shadow 0.15s;

  &:hover {
    color: var(--accent);
    box-shadow: var(--clay-md);
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
  background: var(--bg-elev);
  box-shadow: ${({ $focused }) => ($focused ? 'var(--clay-inset)' : 'var(--clay-sm)')};
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
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: background 0.15s, color 0.15s, transform 0.15s;

  svg { width: 17px; height: 17px; }

  &:hover:not(:disabled) {
    background: var(--accent-grad);
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
