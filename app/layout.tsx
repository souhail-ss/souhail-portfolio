import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Souhail Ziyadi — Développeur Full Stack',
  description:
    'Portfolio de Souhail Ziyadi, Développeur Full Stack basé à Paris. Expert React, Node.js, NestJS et architectures microservices.',
  keywords: ['développeur', 'full stack', 'React', 'Node.js', 'Paris', 'portfolio'],
};

import StyledComponentsRegistry from '@/lib/registry';
import { ChatProvider } from '@/context/ChatContext';
import ChatModal from '@/components/organisms/Chat/ChatModal';
import PageTracker from '@/app/components/organisms/PageTracker';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <StyledComponentsRegistry>
          <ChatProvider>
            <PageTracker />
            {children}
            <ChatModal />
          </ChatProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
