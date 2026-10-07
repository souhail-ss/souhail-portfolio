import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.div)`
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

export const NavWrapper = styled.nav<{ $scrolled: boolean }>`
  position: relative;
  width: 100%;
  max-width: 50rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 3px solid var(--text-primary);
  transition: all 0.3s;
  backdrop-filter: blur(40px);

  ${props => props.$scrolled
    ? css`
        background-color: var(--bg-nav-scrolled);
        box-shadow: 5px 5px 0 var(--text-primary);
      `
    : css`
        background-color: var(--bg-nav);
        box-shadow: 3px 3px 0 var(--text-primary);
      `}
`;

export const TopAccentLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent);
`;

export const NavInner = styled.div`
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: var(--text-primary);
  font-weight: 900;
  font-size: 1.125rem;
  letter-spacing: -0.025em;
  user-select: none;
`;

export const LogoDot = styled.span`
  color: var(--accent);
`;

export const DesktopMenu = styled.ul`
  display: none;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const DesktopNavLink = styled.a`
  position: relative;
  padding: 0.375rem 0.875rem;
  border-radius: 0.75rem;
  color: var(--nav-text);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  display: block;

  &:hover {
    color: var(--nav-text-hover);
    background-color: var(--nav-bg-hover);
  }
`;

export const NavLinkUnderline = styled.span`
  position: absolute;
  bottom: 0.25rem;
  left: 0.875rem;
  right: 0.875rem;
  height: 1px;
  background-color: var(--accent);
  transform: scaleX(0);
  transition: transform 0.3s;
  transform-origin: left;

  ${DesktopNavLink}:hover & {
    transform: scaleX(1);
  }
`;

export const CVPillItem = styled.li`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

export const CVPill = styled.a`
  padding: 0.375rem 1rem;
  border-radius: 0.75rem;
  background-color: var(--accent);
  border: 2px solid var(--text-primary);
  box-shadow: 2px 2px 0 var(--text-primary);
  color: var(--on-accent);
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  &:hover {
    background-color: var(--accent-dk);
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0 var(--text-primary);
  }
`;

export const CVEyeButton = styled.a`
  padding: 0.375rem 0.5rem;
  border-radius: 0.75rem;
  background-color: var(--bg-elev);
  border: 2px solid var(--text-primary);
  box-shadow: 2px 2px 0 var(--text-primary);
  color: var(--text-primary);
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--accent);
    color: var(--on-accent);
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0 var(--text-primary);
  }
`;

export const ThemeToggleButton = styled.button`
  padding: 0.375rem;
  width: 2rem;
  height: 2rem;
  border-radius: 0.75rem;
  background-color: var(--bg-elev);
  border: 2px solid var(--text-primary);
  box-shadow: 2px 2px 0 var(--text-primary);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg { width: 14px; height: 14px; }

  &:hover {
    background-color: var(--accent-a15);
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0 var(--text-primary);
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerLine1 = styled.span<{ $open: boolean }>`
  display: block;
  height: 1.5px;
  background-color: var(--text-primary);
  border-radius: 9999px;
  transition: all 0.3s;
  width: 1.5rem;
  transform: ${props => props.$open ? 'rotate(45deg) translateY(6.5px)' : 'none'};
`;

export const HamburgerLine2 = styled.span<{ $open: boolean }>`
  display: block;
  height: 1.5px;
  background-color: var(--text-primary);
  border-radius: 9999px;
  transition: all 0.2s;
  width: ${props => props.$open ? '0' : '1rem'};
  opacity: ${props => props.$open ? '0' : '1'};
`;

export const HamburgerLine3 = styled.span<{ $open: boolean }>`
  display: block;
  height: 1.5px;
  background-color: var(--text-primary);
  border-radius: 9999px;
  transition: all 0.3s;
  width: ${props => props.$open ? '1.5rem' : '1.25rem'};
  transform: ${props => props.$open ? 'rotate(-45deg) translateY(-6.5px)' : 'none'};
`;

export const MobileDrawer = styled(motion.div)`
  overflow: hidden;
  border-top: 1px solid var(--border);
  padding: 0.5rem 1.25rem 1rem 1.25rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const MobileNavLink = styled.a`
  display: block;
  padding: 0.625rem 0.75rem;
  border-radius: 0.75rem;
  color: var(--nav-text);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    color: var(--nav-text-hover);
    background-color: var(--nav-bg-hover);
  }
`;

export const MobileCVPillItem = styled.li`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MobileCVPill = styled.a`
  display: block;
  padding: 0.625rem 0.75rem;
  border-radius: 0.75rem;
  border: 2px solid var(--text-primary);
  color: var(--on-accent);
  background-color: var(--accent);
  box-shadow: 2px 2px 0 var(--text-primary);
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
`;
