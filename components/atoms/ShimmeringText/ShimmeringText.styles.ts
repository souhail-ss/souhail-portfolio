import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Placeholder = styled.span`
  position: relative;
  display: inline-block;
  opacity: 0;
  pointer-events: none;
`;

export const Container = styled(motion.span)`
  position: relative;
  display: inline-block;
  perspective: 500px;
`;

export const Letter = styled(motion.span)`
  display: inline-block;
  white-space: pre;
  transform-style: preserve-3d;
`;
