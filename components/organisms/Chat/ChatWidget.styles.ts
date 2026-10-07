import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.5); opacity: 0; }
`;

const wave = keyframes`
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(-12deg); }
  40% { transform: rotate(10deg); }
  60% { transform: rotate(-8deg); }
  80% { transform: rotate(6deg); }
`;

const popIn = keyframes`
  from { opacity: 0; transform: translateY(6px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const FloatingButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 0 var(--text-primary);
  z-index: 1000;
  color: var(--on-accent);
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 6px 6px 0 var(--text-primary);
  }

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 56px;
    height: 56px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Pulse = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(var(--accent-rgb),  0.4);
  animation: ${pulse} 2s ease-out infinite;
`;

export const AvatarFace = styled.span<{ $wave?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: block;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-origin: 70% 70%;
    animation: ${({ $wave }) => ($wave ? wave : 'none')} 0.6s ease-in-out;
  }
`;

export const TeaserBubble = styled.div`
  position: fixed;
  bottom: calc(2rem + 60px + 0.75rem);
  right: 2rem;
  width: max-content;
  max-width: 220px;
  padding: 0.625rem 0.875rem;
  border-radius: 0.75rem;
  border: 3px solid var(--text-primary);
  background: var(--bg-elev);
  color: var(--text-primary);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.4;
  box-shadow: 4px 4px 0 var(--text-primary);
  animation: ${popIn} 0.25s ease-out;
  cursor: pointer;
  z-index: 1000;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 1.25rem;
    width: 10px;
    height: 10px;
    background: var(--bg-elev);
    border-right: 3px solid var(--text-primary);
    border-bottom: 3px solid var(--text-primary);
    transform: translateY(-50%) rotate(45deg);
  }

  @media (max-width: 768px) {
    bottom: calc(1.5rem + 56px + 0.75rem);
    right: 1.5rem;
  }
`;
