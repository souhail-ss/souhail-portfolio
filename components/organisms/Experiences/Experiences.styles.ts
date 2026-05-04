import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExperiencesSection = styled.section`
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
  left: 1.25rem;
  top: 1.5rem;
  bottom: 1.5rem;
  width: 1px;
  background: linear-gradient(to bottom, rgba(99,102,241,0.8), rgba(67,56,202,0.4), transparent);
`;

export const ExperiencesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ExperienceItem = styled(motion.div)``;

export const ItemContent = styled.div`
  position: relative;
  padding-left: 4rem;

  &:hover .timeline-dot {
    background-color: #6366f1;
    transform: scale(1.25);
  }

  &:hover .experience-card {
    border-color: rgba(99, 102, 241, 0.4);
    background-color: var(--bg-card-hover);
  }

  &:hover .company-name {
    color: #6366f1;
  }

  &:hover .view-details {
    color: var(--text-muted);
  }
`;

export const TimelineDot = styled.div.attrs({ className: 'timeline-dot' })`
  position: absolute;
  left: 0.75rem;
  top: 1.75rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background-color: var(--bg-page);
  border: 2px solid #6366f1;
  transition: all 0.3s;
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
`;

export const ExperienceCard = styled.div.attrs({ className: 'experience-card' })`
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.75rem;
  transition: all 0.3s;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const CompanyInfo = styled.div``;

export const CompanyName = styled.h3.attrs({ className: 'company-name' })`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  transition: color 0.3s;
`;

export const RoleName = styled.p`
  color: #6366f1;
  font-weight: 500;
  margin-top: 0.125rem;
`;

export const EmploymentType = styled.p`
  color: var(--text-dim);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const MetaInfo = styled.div`
  text-align: right;
  flex-shrink: 0;
`;

export const Period = styled.span`
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Location = styled.p`
  color: var(--text-dim);
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: flex-end;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SkillPill = styled.span`
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  background-color: rgba(67, 56, 202, 0.2);
  color: #6366f1;
  border: 1px solid rgba(67, 56, 202, 0.3);
  font-weight: 500;
`;

export const ViewDetails = styled.p.attrs({ className: 'view-details' })`
  color: var(--text-dim);
  font-size: 0.75rem;
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: color 0.3s;
`;
