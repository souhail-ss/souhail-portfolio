import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div``;

export const TabBar = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  background-color: var(--bg-elev);
  border-radius: 0.75rem;
  border: 3px solid var(--text-primary);
  box-shadow: 4px 4px 0 var(--text-primary);
  margin-bottom: 2rem;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  position: relative;
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: color 0.2s;
  cursor: pointer;
  color: ${props => props.$active ? 'var(--text-primary)' : 'var(--text-dim)'};
  background: none;
  border: none;

  &:hover {
    color: ${props => props.$active ? 'var(--text-primary)' : 'var(--text-muted)'};
  }
`;

export const ActiveTabBackground = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: var(--accent);
  border: 2px solid var(--text-primary);
  border-radius: 0.5rem;
`;

export const TabLabel = styled.span`
  position: relative;
  z-index: 10;
`;

export const ContentContainer = styled.div`
  background-color: var(--bg-elev);
  border: 3px solid var(--text-primary);
  border-radius: 1rem;
  box-shadow: 5px 5px 0 var(--text-primary);
  padding: 2rem;
`;

export const ContentHeader = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderLine = styled.span`
  width: 1rem;
  height: 1px;
  background-color: var(--accent);
`;

export const DescriptionText = styled.p`
  color: var(--text-muted);
  line-height: 1.625;
  font-size: 0.9375rem;
`;

export const MissionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MissionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: var(--text-muted);
  line-height: 1.625;
`;

export const MissionBullet = styled.span`
  margin-top: 0.5rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 9999px;
  background-color: var(--accent);
  flex-shrink: 0;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

export const SkillPill = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  background-color: var(--bg-elev);
  border: 2px solid var(--text-primary);
  box-shadow: 2px 2px 0 var(--text-primary);
  color: var(--text-primary);
  font-weight: 600;
  transition: all 0.15s;

  &:hover {
    background-color: var(--accent-a15);
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0 var(--text-primary);
  }
`;

export const SkillIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
