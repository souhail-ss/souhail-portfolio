import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const display = Nunito({
  subsets: ['latin'],
  variable: '--font-display-face',
  weight: ['600', '700', '800'],
});

const title = 'Souhail Ziyadi — Développeur Full Stack (React, Next.js, NestJS) · Paris';
const description =
  "Développeur Full Stack JavaScript/TypeScript basé à Paris : React, Next.js, NestJS. Expériences chez Weneeds et Stellantis. Ouvert aux postes en CDI.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'développeur full stack',
    'développeur React',
    'développeur Next.js',
    'NestJS',
    'TypeScript',
    'CDI',
    'Paris',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'fr_FR',
  },
};

import StyledComponentsRegistry from '@/lib/registry';
import { ChatProvider } from '@/context/ChatContext';
import ChatModal from '@/components/organisms/Chat/ChatModal';
import { chatEnabled } from '@/data/site';
import PageTracker from '@/app/components/organisms/PageTracker';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${display.variable} font-sans antialiased`}>
        <StyledComponentsRegistry>
          <ChatProvider>
            <PageTracker />
            {children}
            {chatEnabled && <ChatModal />}
          </ChatProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
