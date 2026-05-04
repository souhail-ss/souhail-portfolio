'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { experiences } from '@/lib/experiences';
import {
  ExperiencesSection,
  BgBlob,
  SectionContent,
  Title,
  Slash,
  Line,
  TimelineContainer,
  TimelineLine,
  ExperiencesList,
  ExperienceItem,
  ItemContent,
  TimelineDot,
  ExperienceCard,
  CardHeader,
  CompanyInfo,
  CompanyName,
  RoleName,
  EmploymentType,
  MetaInfo,
  Period,
  Location,
  SkillsList,
  SkillPill,
  ViewDetails
} from './Experiences.styles';

export default function Experiences() {
  return (
    <ExperiencesSection id="experiences">
      <BgBlob $top="-10%"  $left="60%"  $size={500} $color="radial-gradient(circle, rgba(99,102,241,0.30) 0%, transparent 70%)"  $delay="0s" />
      <BgBlob $top="40%"  $left="-10%" $size={420} $color="radial-gradient(circle, rgba(67,56,202,0.25) 0%, transparent 70%)"   $delay="-6s" />
      <BgBlob $top="70%"  $left="55%"  $size={380} $color="radial-gradient(circle, rgba(79,70,229,0.20) 0%, transparent 70%)"   $delay="-12s" />

      <SectionContent>
        <Title
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <Slash>/</Slash>
          <span>Expériences</span>
          <Line />
        </Title>

        <TimelineContainer>
          <TimelineLine />

          <ExperiencesList>
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={exp.slug}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <Link href={`/experiences/${exp.slug}`} style={{ display: 'block' }}>
                  <ItemContent>
                    <TimelineDot />

                    <ExperienceCard>
                      <CardHeader>
                        <CompanyInfo>
                          <CompanyName>{exp.company}</CompanyName>
                          <RoleName>{exp.role}</RoleName>
                          <EmploymentType>{exp.type}</EmploymentType>
                        </CompanyInfo>
                        <MetaInfo>
                          <Period>{exp.period}</Period>
                          {exp.location && (
                            <Location>
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                              {exp.location}
                            </Location>
                          )}
                        </MetaInfo>
                      </CardHeader>

                      <SkillsList>
                        {exp.skills.map((skill) => (
                          <SkillPill key={skill}>{skill}</SkillPill>
                        ))}
                      </SkillsList>

                      <ViewDetails>
                        Voir les détails
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </ViewDetails>
                    </ExperienceCard>
                  </ItemContent>
                </Link>
              </ExperienceItem>
            ))}
          </ExperiencesList>
        </TimelineContainer>
      </SectionContent>
    </ExperiencesSection>
  );
}
