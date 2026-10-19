import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExperiencesSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
  position: relative;
`;

export const BgBlob = styled.div<{ $top: string; $left: string; $size: number; $color: string; $delay: string }>`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: ${({ $color }) => $color};
  animation: floatBlob 18s ease-in-out infinite alternate;
  animation-delay: ${({ $delay }) => $delay};

  @keyframes floatBlob {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(40px, -30px) scale(1.1); }
  }
`;

export const Title = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Slash = styled.span`
  color: var(--green);
`;

export const Line = styled.div`
  flex: 1;
  height: 8px;
  border-radius: 999px;
  background: var(--accent-grad-soft);
  box-shadow: var(--clay-xs);
  margin-left: 0.5rem;
`;

export const SectionContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const TimelineContainer = styled.div`
  position: relative;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: calc(1.375rem - 4px);
  top: 1.5rem;
  bottom: 1.5rem;
  width: 8px;
  border-radius: 999px;
  background: var(--accent-grad-soft);
  box-shadow: var(--clay-xs);
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
    background: var(--accent-grad);
    transform: scale(1.25);
  }

  &:hover .experience-card {
    box-shadow: var(--clay-md);
  }

  &:hover .company-name {
    color: var(--accent);
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
  background-color: var(--bg-elev);
  transition: all 0.2s;
  box-shadow: var(--clay-xs);
`;

export const ExperienceCard = styled.div.attrs({ className: 'experience-card' })`
  background-color: var(--bg-elev);
  border-radius: 2rem;
  box-shadow: var(--clay-md);
  padding: 1.75rem;
  transition: all 0.2s;
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
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s;
`;

export const RoleName = styled.p`
  color: var(--accent);
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
  background: var(--bg-elev);
  color: var(--text-muted);
  box-shadow: var(--clay-inset);
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
