'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  { label: 'À propos',     href: '#about' },
  { label: 'Expériences',  href: '#experiences' },
  { label: 'Projets',      href: '#projects' },
  { label: 'Compétences',  href: '#skills' },
  { label: 'Formation',    href: '#education' },
  { label: 'Hobbies',      href: '#hobbies' },
];

interface NavigationProps {
  visible: boolean;
}

export default function Navigation({ visible }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

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

            <li style={{ color: '#6366f1', fontWeight: 300, fontSize: '1.1rem', padding: '0 0.25rem' }}>|</li>
            <CVPillItem>
              <CVPill href="/cv.pdf" download>
                CV ↓
              </CVPill>
              <CVEyeButton href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Consulter le CV">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </CVEyeButton>
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
                  <MobileCVPill href="/cv.pdf" download>
                    Télécharger CV ↓
                  </MobileCVPill>
                  <CVEyeButton href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Consulter le CV">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </CVEyeButton>
                </MobileCVPillItem>
              </MobileMenuList>
            </MobileDrawer>
          )}
        </AnimatePresence>
      </NavWrapper>
    </NavContainer>
  );
}
