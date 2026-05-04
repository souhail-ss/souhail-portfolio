import styled from 'styled-components';
import { motion } from 'framer-motion';

export const EducationSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
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
  background-color: var(--border);
  margin-left: 0.5rem;
`;

export const TimelineContainer = styled.div`
  position: relative;
`;

export const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1rem;
  width: 1px;
  background-color: var(--border);

  @media (min-width: 768px) {
    left: 2rem;
  }
`;

export const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const EducationItem = styled(motion.div)`
  position: relative;
  padding-left: 3.5rem;

  @media (min-width: 768px) {
    padding-left: 5rem;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.6875rem;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 9999px;
  background-color: #6366f1;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.6);

  @media (min-width: 768px) {
    left: 1.6875rem;
  }
`;

export const EducationCard = styled.div`
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.75rem;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(99, 102, 241, 0.3);
    background-color: var(--bg-card-hover);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const SchoolInfo = styled.div``;

export const SchoolName = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
`;

export const Degree = styled.p`
  color: #6366f1;
  font-weight: 600;
  font-size: 0.875rem;
  margin-top: 0.125rem;
`;

export const MetaInfo = styled.div`
  text-align: right;
  flex-shrink: 0;
`;

export const Period = styled.span`
  color: var(--text-dim);
  font-size: 0.75rem;
  font-weight: 500;
`;

export const Location = styled.p`
  color: var(--text-dim);
  font-size: 0.75rem;
  margin-top: 0.125rem;
`;

export const DescriptionText = styled.p`
  color: var(--text-muted);
  font-size: 0.875rem;
  line-height: 1.625;
`;
