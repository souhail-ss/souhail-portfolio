'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type ChatState = 'closed' | 'minimized' | 'expanded';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatContextType {
  chatState: ChatState;
  isOpen: boolean;
  initialQuestion: string;
  pendingQuestion: string;
  messages: Message[];
  sessionId: string | null;
  isLoading: boolean;
  openChat: () => void;
  openChatWithQuestion: (question: string) => void;
  openExpandedWithQuestion: (question: string) => void;
  closeChat: () => void;
  toggleChat: () => void;
  clearInitialQuestion: () => void;
  clearPendingQuestion: () => void;
  minimizeToBar: () => void;
  minimizeToIcon: () => void;
  expandChat: () => void;
  sendMessage: (text: string) => Promise<void>;
  markMessageComplete: (id: string) => void;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [chatState, setChatState] = useState<ChatState>('closed');
  const [initialQuestion, setInitialQuestion] = useState('');
  const [pendingQuestion, setPendingQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isOpen = chatState === 'expanded';

  const openChat = () => setChatState('minimized');
  const openChatWithQuestion = (question: string) => {
    setPendingQuestion(question);
    setChatState('minimized');
  };
  const openExpandedWithQuestion = (question: string) => {
    setInitialQuestion(question);
    setChatState('expanded');
  };
  const closeChat = () => {
    setChatState('closed');
    setInitialQuestion('');
    setPendingQuestion('');
    setMessages([]);
    setSessionId(null);
  };
  const toggleChat = () => setChatState((prev) => prev === 'expanded' ? 'closed' : 'expanded');
  const clearInitialQuestion = () => setInitialQuestion('');
  const clearPendingQuestion = () => setPendingQuestion('');
  const minimizeToBar = () => setChatState('minimized');
  const minimizeToIcon = () => setChatState('closed');
  const expandChat = () => setChatState('expanded');

  const markMessageComplete = useCallback((messageId: string) => {
    setMessages(prev => prev.map(msg =>
      msg.id === messageId ? { ...msg, isTyping: false } : msg
    ));
  }, []);

  const clearChat = useCallback(() => {
    setMessages([]);
    setSessionId(null);
  }, []);

  const sendMessage = useCallback(async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText, sessionId }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const data = await response.json();

      if (data.sessionId) setSessionId(data.sessionId);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        role: 'assistant',
        timestamp: new Date(),
        isTyping: true,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Une erreur s'est produite. Contactez-moi directement à souhail.ziyadi2022@outlook.com",
        role: 'assistant',
        timestamp: new Date(),
        isTyping: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [sessionId]);

  return (
    <ChatContext.Provider value={{
      chatState, isOpen, initialQuestion, pendingQuestion, messages, sessionId, isLoading,
      openChat, openChatWithQuestion, openExpandedWithQuestion, closeChat, toggleChat, clearInitialQuestion,
      clearPendingQuestion, minimizeToBar, minimizeToIcon, expandChat,
      sendMessage, markMessageComplete, clearChat
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within a ChatProvider');
  return context;
};
