import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const typing = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const wave = keyframes`
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(-12deg); }
  40% { transform: rotate(10deg); }
  60% { transform: rotate(-8deg); }
  80% { transform: rotate(6deg); }
`;

export const Container = styled(motion.div)`
  position: fixed;
  bottom: 0;
  right: 2rem;
  width: 350px;
  height: 450px;
  background: var(--bg-elev-2);
  border-radius: 12px 12px 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: -4px -4px 0 var(--text-primary);
  z-index: 1000;
  border: 3px solid var(--text-primary);
  border-bottom: none;

  @media (max-width: 768px) {
    right: 0;
    left: 0;
    width: 100%;
    height: 60vh;
    border-radius: 16px 16px 0 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 12px 16px;
  background: var(--bg-page);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover { opacity: 0.9; }
`;

export const Avatar = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 2px solid var(--text-primary);
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-origin: 70% 70%;
    animation: ${wave} 0.6s ease-in-out 0.3s;
  }
`;

export const OnlineDot = styled.span`
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  border: 2px solid var(--bg-page);
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.span`
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
`;

export const HeaderStatus = styled.span`
  color: var(--text-muted);
  font-size: 12px;
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ControlButton = styled.button<{ $variant?: 'close' }>`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: transparent;
  border: none;
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

  svg { width: 16px; height: 16px; }
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--border-strong);
    border-radius: 2px;
  }
`;

export const EmptyState = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

export const EmptyTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 8px;
`;

export const EmptyText = styled.p`
  font-size: 13px;
  color: var(--text-muted);
  margin: 0 0 16px;
  line-height: 1.4;
`;

export const SuggestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const SuggestionButton = styled(motion.button)`
  padding: 10px 14px;
  background: var(--bg-elev);
  border: 2px solid var(--text-primary);
  border-radius: 8px;
  box-shadow: 3px 3px 0 var(--text-primary);
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: var(--accent-a15);
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px 0 var(--text-primary);
  }
`;

export const MessageGroup = styled.div<{ $role: 'user' | 'assistant' }>`
  display: flex;
  gap: 8px;
  justify-content: ${({ $role }) => $role === 'user' ? 'flex-end' : 'flex-start'};
`;

export const MessageAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 2px solid var(--text-primary);
  overflow: hidden;
  flex-shrink: 0;
  align-self: flex-end;

  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const MessageBubble = styled.div<{ $role: 'user' | 'assistant' }>`
  max-width: 75%;
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;

  ${({ $role }) =>
    $role === 'user'
      ? `
          background: var(--accent);
          color: var(--on-accent);
          border: 2px solid var(--text-primary);
          border-bottom-right-radius: 4px;
        `
      : `
          background: var(--bg-elev);
          color: var(--text-primary);
          border: 2px solid var(--text-primary);
          border-bottom-left-radius: 4px;
        `}
`;

export const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 0;
`;

export const TypingDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-dim);
  animation: ${typing} 1s ease-in-out infinite;
`;

export const InputSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: var(--bg-page);
  border-top: 1px solid var(--border);
  flex-shrink: 0;
`;

export const TextInput = styled.input`
  flex: 1;
  background: var(--bg-input);
  border: 2px solid var(--text-primary);
  border-radius: 20px;
  padding: 10px 16px;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 13px;
  transition: all 0.15s ease;

  &::placeholder { color: var(--text-dim); }

  &:focus {
    outline: none;
    background: var(--bg-card-hover);
  }

  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export const SendButton = styled(motion.button)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--text-primary);
  box-shadow: 2px 2px 0 var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--on-accent);
  flex-shrink: 0;
  transition: box-shadow 0.15s;

  &:hover:not(:disabled) {
    background: var(--accent-dk);
    box-shadow: 3px 3px 0 var(--text-primary);
  }

  &:disabled { opacity: 0.5; cursor: not-allowed; }

  svg { width: 18px; height: 18px; }
`;
