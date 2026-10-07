'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useChat } from '@/context/ChatContext';
import { profile } from '@/data/portfolio.data';
import { MiniChat } from './MiniChat';
import * as S from './ChatWidget.styles';

const TEASER_DELAY_MS = 8000;
const TEASER_SESSION_KEY = 'chatTeaserShown';
const TEASER_TEXT = '👋 Psst, viens papoter avec mon IA !';

export const ChatWidget: React.FC = () => {
  const { chatState, openChat } = useChat();
  const [showTeaser, setShowTeaser] = useState(false);
  const [wave, setWave] = useState(false);

  useEffect(() => {
    if (chatState !== 'closed') return;
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(TEASER_SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setShowTeaser(true);
      setWave(true);
      sessionStorage.setItem(TEASER_SESSION_KEY, '1');
    }, TEASER_DELAY_MS);

    return () => clearTimeout(timer);
  }, [chatState]);

  const dismissTeaser = () => setShowTeaser(false);

  const handleOpen = () => {
    dismissTeaser();
    openChat();
  };

  if (chatState === 'expanded') return null;

  return (
    <AnimatePresence mode="wait">
      {chatState === 'closed' && (
        <React.Fragment key="floating-button">
          <AnimatePresence>
            {showTeaser && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
              >
                <S.TeaserBubble onClick={handleOpen}>{TEASER_TEXT}</S.TeaserBubble>
              </motion.div>
            )}
          </AnimatePresence>

          <S.FloatingButton
            onClick={handleOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <S.Pulse />
            <S.AvatarFace $wave={wave} onAnimationEnd={() => setWave(false)}>
              <img src={profile.profileImage} alt={profile.fullName} />
            </S.AvatarFace>
          </S.FloatingButton>
        </React.Fragment>
      )}

      {chatState === 'minimized' && (
        <MiniChat key="mini-chat" />
      )}
    </AnimatePresence>
  );
};

export default ChatWidget;
