import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
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

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 4rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const TextColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Description = styled.p`
  color: var(--text-muted);
  font-size: 1.125rem;
  line-height: 1.625;
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
`;

export const StatTile = styled.div`
  padding: 1rem 1.125rem;
  border-radius: 0.875rem;
  border: 3px solid var(--text-primary);
  background: var(--bg-elev);
  box-shadow: 4px 4px 0 var(--text-primary);
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--text-primary);
  }
`;

export const StatValue = styled.div`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1.1;
`;

export const StatLabel = styled.div`
  margin-top: 0.35rem;
  font-size: 0.8125rem;
  color: var(--text-muted);
  line-height: 1.4;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: baseline;
  font-size: 0.875rem;
`;

export const InfoLabel = styled.span`
  color: var(--accent);
  font-weight: 600;
  width: 7rem;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
`;

export const InfoValueLink = styled.a`
  color: var(--text-muted);
  transition: color 0.2s;
  word-break: break-all;

  &:hover {
    color: var(--text-primary);
  }
`;

export const InfoValueText = styled.span`
  color: var(--text-muted);
`;

export const CVButtonRow = styled.div`
  display: flex;
  gap: 0.875rem;
  width: 100%;
`;

export const DownloadButton = styled(motion.a)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0.875rem 1.5rem;
  border: 3px solid var(--text-primary);
  background-color: var(--accent);
  color: var(--on-accent);
  font-weight: 700;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  box-shadow: 4px 4px 0 var(--text-primary);
  transition: background-color 0.15s, box-shadow 0.15s;

  &:hover {
    background-color: var(--accent-dk);
    box-shadow: 6px 6px 0 var(--text-primary);
  }

  &:active {
    box-shadow: 1px 1px 0 var(--text-primary);
  }
`;

export const ReviewButton = styled(motion.a)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0.875rem 1.5rem;
  background-color: var(--bg-elev);
  color: var(--text-primary);
  font-weight: 700;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  border: 3px solid var(--text-primary);
  box-shadow: 4px 4px 0 var(--text-primary);
  transition: background-color 0.15s, box-shadow 0.15s;

  &:hover {
    background-color: var(--accent-a10);
    box-shadow: 6px 6px 0 var(--text-primary);
  }

  &:active {
    box-shadow: 1px 1px 0 var(--text-primary);
  }
`;

export const ImageColumn = styled(motion.div)`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const ImageContainerWrapper = styled.div`
  position: relative;
  margin: 0 0.75rem 0.75rem 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 4px solid var(--text-primary);
  box-shadow: 10px 10px 0 var(--text-primary);

  @media (min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`;
