import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const typing = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(4, 3, 16, 0.60);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
  background: var(--bg-overlay);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  box-shadow: var(--clay-lg);

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
  background: transparent;
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
  background: var(--bg-elev);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all 0.15s ease;

  &:hover {
    background: var(--bg-card-hover);
    color: ${({ $variant }) => $variant === 'close' ? '#ff5f57' : 'var(--text-primary)'};
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
    background: var(--border-strong);
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
  color: var(--text-primary);
  margin: 0 0 12px;
  letter-spacing: -0.02em;
`;

export const EmptyText = styled.p`
  font-size: 16px;
  color: var(--text-muted);
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
  background: var(--bg-elev);
  border-radius: 100px;
  box-shadow: var(--clay-sm);
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    color: var(--accent);
    box-shadow: var(--clay-inset);
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
  background: var(--bg-card);
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
          background: var(--accent-grad);
          color: var(--on-accent);
          border-bottom-right-radius: 6px;
        `
      : `
          background: var(--bg-elev);
          color: var(--text-primary);
          box-shadow: var(--clay-xs);
          border-bottom-left-radius: 6px;
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
  background: var(--text-dim);
  animation: ${typing} 1s ease-in-out infinite;
`;

export const InputSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  padding: 20px 40px 30px;
  background: transparent;
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    padding: 16px 20px 24px;
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  background: var(--bg-field);
  box-shadow: var(--clay-inset);
  border-radius: 16px;
  padding: 16px 20px;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 15px;
  line-height: 1.5;
  resize: none;
  min-height: 56px;
  max-height: 140px;
  transition: all 0.15s ease;

  &::placeholder { color: var(--text-dim); }

  &:focus {
    outline: none;
    background: var(--bg-card-hover);
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

export const SendButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 24px;
  background: var(--accent-grad);
  box-shadow: var(--clay-sm);
  border-radius: 16px;
  color: var(--on-accent);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  &:hover:not(:disabled) {
    filter: brightness(1.06);
    box-shadow: var(--clay-sm);
  }

  &:disabled { opacity: 0.5; cursor: not-allowed; }

  svg { flex-shrink: 0; }

  @media (max-width: 640px) {
    padding: 16px;
    span { display: none; }
  }
`;
