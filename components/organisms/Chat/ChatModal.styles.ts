import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const typing = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
`;

export const ModalContainer = styled(motion.div)`
  width: 900px;
  height: 620px;
  max-width: 100%;
  max-height: 90vh;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 80px -20px rgba(0, 0, 0, 0.6);

  @media (max-width: 960px) {
    width: 100%;
    height: 90vh;
    border-radius: 20px;
  }

  @media (max-width: 640px) {
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`;

export const ModalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 16px;
  z-index: 10;
  background: linear-gradient(to bottom, rgba(17, 17, 17, 0.98), rgba(17, 17, 17, 0));
`;

export const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ControlButton = styled.button<{ $variant?: 'close' }>`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    color: ${({ $variant }) => $variant === 'close' ? '#ff5f57' : '#fff'};
  }

  svg { width: 18px; height: 18px; }
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 60px 40px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 640px) {
    padding: 60px 20px 20px;
  }

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
  }
`;

export const EmptyState = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
`;

export const EmptyTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
`;

export const EmptyText = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 32px;
  max-width: 400px;
  line-height: 1.5;
`;

export const SuggestionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  max-width: 500px;
`;

export const SuggestionButton = styled(motion.button)`
  padding: 12px 20px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.5);
  }
`;

export const MessageGroup = styled.div<{ $role: 'user' | 'assistant' }>`
  display: flex;
  gap: 14px;
  justify-content: ${({ $role }) => $role === 'user' ? 'flex-end' : 'flex-start'};
`;

export const MessageAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #222;
  overflow: hidden;
  flex-shrink: 0;
  align-self: flex-end;

  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const MessageBubble = styled.div<{ $role: 'user' | 'assistant' }>`
  max-width: 70%;
  padding: 16px 20px;
  border-radius: 20px;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;

  ${({ $role }) =>
    $role === 'user'
      ? `
          background: #6366f1;
          color: #fff;
          border-bottom-right-radius: 6px;
        `
      : `
          background: rgba(255, 255, 255, 0.07);
          color: #fff;
          border-bottom-left-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        `}
`;

export const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 0;
`;

export const TypingDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  animation: ${typing} 1s ease-in-out infinite;
`;

export const InputSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  padding: 20px 40px 30px;
  background: #0a0a0a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 640px) {
    padding: 16px 20px 24px;
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px 20px;
  color: #fff;
  font-family: inherit;
  font-size: 15px;
  line-height: 1.5;
  resize: none;
  min-height: 56px;
  max-height: 140px;
  transition: all 0.15s ease;

  &::placeholder { color: rgba(255, 255, 255, 0.35); }

  &:focus {
    outline: none;
    border-color: #6366f1;
    background: rgba(255, 255, 255, 0.08);
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

export const SendButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 24px;
  background: #6366f1;
  border: none;
  border-radius: 16px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  &:hover:not(:disabled) { background: #4f46e5; }

  &:disabled { opacity: 0.5; cursor: not-allowed; }

  svg { flex-shrink: 0; }

  @media (max-width: 640px) {
    padding: 16px;
    span { display: none; }
  }
`;
