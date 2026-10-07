import { database } from './portfolio.data';

const { profile, services, process: processSteps } = database;

/**
 * Single source of truth for client-facing content and contact/CTA links.
 * Fill `bookingUrl` (Calendly / Cal.com) to switch the main CTA from email to a booking page.
 */
export const site = {
  name: profile.fullName,
  role: profile.title,
  companyName: profile.company.name,
  companyLegalForm: profile.company.legalForm,
  city: `${profile.location.city}, ${profile.location.country}`,
  email: profile.email,
  phone: profile.phone,
  phoneHref: `tel:${profile.phone.replace(/\s/g, '')}`,
  linkedin: profile.socialLinks.linkedin,
  github: profile.socialLinks.github,
  cv: profile.resume.url,
  bookingUrl: '' as string,
};

const subject = encodeURIComponent('Projet — prise de contact depuis votre portfolio');

/** Main call-to-action target: booking page if configured, otherwise a pre-filled email. */
export const ctaHref = site.bookingUrl || `mailto:${site.email}?subject=${subject}`;
export const ctaIsExternal = Boolean(site.bookingUrl);

export { services, processSteps };
