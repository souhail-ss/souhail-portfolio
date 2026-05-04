import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 7rem 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Slash = styled.span`
  color: #6366f1;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-left: 0.5rem;
`;

export const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const CategoryTitle = styled.h3`
  color: #6366f1;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const CategoryLine = styled.span`
  width: 1rem;
  height: 1px;
  background-color: #6366f1;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const SkillPill = styled(motion.span)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: default;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.09);
    color: white;
  }
`;

export const SkillIcon = styled.img`
  width: 1rem;
  height: 1rem;
  opacity: 0.8;
`;
