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
  color: #6366f1;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: var(--border);
  margin-left: 0.5rem;
`;

export const ContentGrid = styled.div`
  display: grid;
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
  color: #6366f1;
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
  background-color: #6366f1;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4338ca;
  }
`;

export const ReviewButton = styled(motion.a)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0.875rem 1.5rem;
  background-color: transparent;
  color: var(--text-primary);
  font-weight: 600;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  border: 1px solid var(--border-strong);
  transition: all 0.2s;

  &:hover {
    border-color: #6366f1;
    color: #6366f1;
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
`;

export const ImageGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, rgba(99,102,241,0.2), rgba(67,56,202,0.1), transparent);
  filter: blur(24px);
  transform: scale(1.1);
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const DecoratorBottomRight = styled.div`
  position: absolute;
  bottom: -0.75rem;
  right: -0.75rem;
  width: 4rem;
  height: 4rem;
  border-bottom: 2px solid rgba(99, 102, 241, 0.5);
  border-right: 2px solid rgba(99, 102, 241, 0.5);
  border-bottom-right-radius: 0.75rem;
`;

export const DecoratorTopLeft = styled.div`
  position: absolute;
  top: -0.75rem;
  left: -0.75rem;
  width: 4rem;
  height: 4rem;
  border-top: 2px solid rgba(99, 102, 241, 0.3);
  border-left: 2px solid rgba(99, 102, 241, 0.3);
  border-top-left-radius: 0.75rem;
`;
