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

export const CarouselWrapper = styled.div`
  position: relative;
  margin: 0 -1.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: calc(100% - 2.5rem);
    background: linear-gradient(to left, var(--bg-page), transparent);
    pointer-events: none;
    z-index: 2;
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 0.25rem 1.5rem 1rem;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }
`;

export const ProjectCard = styled(motion.div)`
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: all 0.3s;
  flex-shrink: 0;
  scroll-snap-align: start;

  /* ~3 cards visible on desktop */
  width: clamp(270px, calc(33.333% - 0.85rem), 360px);

  @media (max-width: 768px) {
    width: clamp(260px, 80vw, 320px);
  }

  &:hover {
    border-color: rgba(99, 102, 241, 0.4);
    background-color: var(--bg-card-hover);
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
  color: var(--text-dim);
`;

export const IconButton = styled.a`
  color: inherit;
  transition: color 0.2s;

  &:hover {
    color: var(--text-primary);
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
  color: var(--text-primary);
  transition: color 0.3s;

  ${ProjectCard}:hover & {
    color: #6366f1;
  }
`;

export const ProjectDescription = styled.p`
  color: var(--text-muted);
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
  border: 1px solid var(--border-strong);
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    border-color: var(--text-muted);
    color: var(--text-primary);
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

export const ScrollIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  padding: 0 1.5rem;
`;

export const ScrollTrack = styled.div`
  width: 120px;
  height: 4px;
  background: var(--border);
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
`;

export const ScrollThumb = styled(motion.div)`
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 9999px;
  background: #6366f1;
`;
