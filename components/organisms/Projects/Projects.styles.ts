import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
  color: var(--accent);
`;

export const Line = styled.div`
  flex: 1;
  height: 2px;
  background-color: var(--text-primary);
  margin-left: 0.5rem;
`;

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 0.75rem 0 1rem;
  cursor: default;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }
`;

export const ProjectItem = styled(motion.div)`
  flex-shrink: 0;
  scroll-snap-align: start;
  width: calc((100% - 2 * 1.25rem) / 3);

  @media (max-width: 768px) {
    width: clamp(260px, 80vw, 320px);
  }
`;

export const ProjectLink = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
`;

export const ProjectCard = styled.div`
  background-color: var(--bg-elev);
  border: 3px solid var(--text-primary);
  border-radius: 1rem;
  box-shadow: 5px 5px 0 var(--text-primary);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: transform 0.15s, box-shadow 0.15s;
  height: 100%;

  ${ProjectLink}:hover & {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 var(--text-primary);
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

  ${ProjectLink}:hover & {
    color: var(--accent);
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
  background-color: var(--accent-a20);
  color: var(--text-primary);
  border: 2px solid var(--text-primary);
  font-weight: 700;
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
  background-color: var(--bg-elev);
  border: 2px solid var(--text-primary);
  box-shadow: 2px 2px 0 var(--text-primary);
  color: var(--text-primary);
  font-size: 0.75rem;
  font-weight: 700;
  transition: all 0.15s;

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0 var(--text-primary);
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
  background-color: var(--accent);
  border: 2px solid var(--text-primary);
  box-shadow: 2px 2px 0 var(--text-primary);
  color: var(--on-accent);
  font-size: 0.75rem;
  font-weight: 700;
  transition: all 0.15s;

  &:hover {
    background-color: var(--accent-dk);
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0 var(--text-primary);
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
  cursor: default;
`;

export const ScrollThumb = styled(motion.div)`
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 9999px;
  background: var(--accent);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;
