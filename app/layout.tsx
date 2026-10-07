import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display-face',
  weight: ['500', '600', '700'],
});

const title = 'Souhail Ziyadi — Développeur Full Stack freelance à Paris';
const description =
  "Je conçois et livre des applications web et mobiles sur mesure, du MVP à la production. Développeur Full Stack freelance (React, Next.js, NestJS) basé à Paris — disponible pour de nouveaux projets.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'développeur freelance',
    'développeur full stack',
    'création application web',
    'MVP',
    'Next.js',
    'NestJS',
    'React',
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
import PageTracker from '@/app/components/organisms/PageTracker';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${display.variable} font-sans antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light');}catch(e){}})();`,
          }}
        />
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
