'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ctaHref, ctaIsExternal } from '@/data/site';
import {
  NavContainer,
  NavWrapper,
  TopAccentLine,
  NavInner,
  Logo,
  LogoDot,
  DesktopMenu,
  DesktopNavLink,
  NavLinkUnderline,
  CVPillItem,
  CVPill,
  CVEyeButton,
  ThemeToggleButton,
  MobileMenuButton,
  HamburgerLine1,
  HamburgerLine2,
  HamburgerLine3,
  MobileDrawer,
  MobileMenuList,
  MobileNavLink,
  MobileCVPillItem,
  MobileCVPill
} from './Navigation.styles';

const navLinks = [
  { label: 'Services',    href: '#services' },
  { label: 'Projets',     href: '#projects' },
  { label: 'Références',  href: '#experiences' },
  { label: 'Méthode',     href: '#process' },
  { label: 'À propos',    href: '#about' },
];

interface NavigationProps {
  visible: boolean;
}

export default function Navigation({ visible }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch {}
  };

  return (
    <NavContainer
      initial={{ y: -90, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -90, opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <NavWrapper $scrolled={scrolled}>
        <TopAccentLine />

        <NavInner>
          <Logo
            href="#"
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span>SZ</span>
            <LogoDot>.</LogoDot>
          </Logo>

          <DesktopMenu>
            {navLinks.map((link) => (
              <li key={link.href}>
                <DesktopNavLink href={link.href}>
                  {link.label}
                  <NavLinkUnderline />
                </DesktopNavLink>
              </li>
            ))}

            <li style={{ color: 'var(--accent)', fontWeight: 300, fontSize: '1.1rem', padding: '0 0.25rem' }}>|</li>
            <CVPillItem>
              <CVPill href={ctaHref} target={ctaIsExternal ? '_blank' : undefined} rel={ctaIsExternal ? 'noopener noreferrer' : undefined}>
                Me contacter
              </CVPill>
              <CVEyeButton href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Consulter le CV">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </CVEyeButton>
              <ThemeToggleButton onClick={toggleTheme} aria-label="Changer de thème">
                {theme === 'dark' ? <Sun /> : <Moon />}
              </ThemeToggleButton>
            </CVPillItem>
          </DesktopMenu>

          <MobileMenuButton
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <HamburgerLine1 $open={menuOpen} />
            <HamburgerLine2 $open={menuOpen} />
            <HamburgerLine3 $open={menuOpen} />
          </MobileMenuButton>
        </NavInner>

        <AnimatePresence>
          {menuOpen && (
            <MobileDrawer
              key="drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <MobileMenuList>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <MobileNavLink
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </MobileNavLink>
                  </li>
                ))}
                <MobileCVPillItem>
                  <MobileCVPill href={ctaHref} onClick={() => setMenuOpen(false)} target={ctaIsExternal ? '_blank' : undefined} rel={ctaIsExternal ? 'noopener noreferrer' : undefined}>
                    Me contacter
                  </MobileCVPill>
                  <CVEyeButton href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Consulter le CV">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </CVEyeButton>
                  <ThemeToggleButton onClick={toggleTheme} aria-label="Changer de thème">
                    {theme === 'dark' ? <Sun /> : <Moon />}
                  </ThemeToggleButton>
                </MobileCVPillItem>
              </MobileMenuList>
            </MobileDrawer>
          )}
        </AnimatePresence>
      </NavWrapper>
    </NavContainer>
  );
}
