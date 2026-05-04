import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  font-size: 2.25rem;
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

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ProjectCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(99, 102, 241, 0.4);
    background-color: rgba(255, 255, 255, 0.07);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
`;

export const IconButton = styled.a`
  color: inherit;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  transition: color 0.3s;

  ${ProjectCard}:hover & {
    color: #6366f1;
  }
`;

export const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  line-height: 1.625;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.25rem;
`;

export const TechPill = styled.span`
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  background-color: rgba(67, 56, 202, 0.2);
  color: #6366f1;
  border: 1px solid rgba(67, 56, 202, 0.3);
  font-weight: 500;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.25rem;
`;

export const ActionButtonSecondary = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    color: white;
  }
`;

export const ActionButtonPrimary = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  background-color: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #6366f1;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(99, 102, 241, 0.25);
  }
`;
