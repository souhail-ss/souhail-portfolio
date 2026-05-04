import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div``;

export const TabBar = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
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
  color: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.4)'};
  background: none;
  border: none;

  &:hover {
    color: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.6)'};
  }
`;

export const ActiveTabBackground = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.4);
  border-radius: 0.5rem;
`;

export const TabLabel = styled.span`
  position: relative;
  z-index: 10;
`;

export const ContentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 2rem;
`;

export const ContentHeader = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #6366f1;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderLine = styled.span`
  width: 1rem;
  height: 1px;
  background-color: #6366f1;
`;

export const DescriptionText = styled.p`
  color: rgba(255, 255, 255, 0.65);
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
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.625;
`;

export const MissionBullet = styled.span`
  margin-top: 0.5rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 9999px;
  background-color: #6366f1;
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
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SkillIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
