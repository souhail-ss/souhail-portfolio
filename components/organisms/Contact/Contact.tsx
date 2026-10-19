'use client';

import { Mail, Download, Phone, MapPin } from 'lucide-react';
import { site } from '@/data/site';
import { LinkedinIcon, GithubIcon } from '@/components/atoms/SocialIcons/SocialIcons';
import {
  ContactSection,
  Panel,
  Heading,
  Accent,
  Text,
  Actions,
  PrimaryButton,
  SecondaryButton,
  Details,
  DetailLink,
  DetailStatic,
} from './Contact.styles';

const details = [
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: site.phone, href: site.phoneHref },
  { icon: LinkedinIcon, label: 'LinkedIn', href: site.linkedin },
  { icon: GithubIcon, label: 'GitHub', href: site.github },
];

export default function Contact() {
  return (
    <ContactSection id="contact">
      <Panel
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <Heading>
            Un poste à pourvoir ? <Accent>Discutons-en.</Accent>
          </Heading>
          <Text>
            Ouvert aux postes en CDI. Écrivez-moi : je réponds sous 48h.
          </Text>
          <Actions>
            <PrimaryButton href={`mailto:${site.email}`}>
              <Mail size={16} />
              M&apos;écrire
            </PrimaryButton>
            <SecondaryButton href={site.cv} download>
              <Download size={16} />
              Télécharger mon CV
            </SecondaryButton>
          </Actions>
        </div>

        <Details>
          {details.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <DetailLink
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Icon size={18} />
                {label}
              </DetailLink>
            </li>
          ))}
          <li>
            <DetailStatic>
              <MapPin size={18} />
              {site.city} · sur site, hybride ou remote
            </DetailStatic>
          </li>
        </Details>
      </Panel>
    </ContactSection>
  );
}
