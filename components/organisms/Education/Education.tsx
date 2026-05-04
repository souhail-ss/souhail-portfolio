'use client';

import { motion } from 'framer-motion';
import {
  EducationSection,
  Title,
  Slash,
  Line,
  TimelineContainer,
  TimelineLine,
  EducationList,
  EducationItem,
  TimelineDot,
  EducationCard,
  CardHeader,
  SchoolInfo,
  SchoolName,
  Degree,
  MetaInfo,
  Period,
  Location,
  DescriptionText
} from './Education.styles';

const education = [
  {
    school: 'ÉSTIAM',
    degree: 'Master Manager de Projet Informatique',
    period: 'Oct 2022 – Sep 2024',
    location: 'Paris, France',
    description: "Formation en gestion de projet informatique, architecture logicielle et management des systèmes d'information.",
  },
  {
    school: 'Université Mundiapolis',
    degree: 'Licence Développement Logiciel',
    period: 'Sep 2019 – Jun 2022',
    location: 'Casablanca, Maroc',
    description: "Formation en développement logiciel, algorithmique, bases de données et programmation orientée objet.",
  },
];

export default function Education() {
  return (
    <EducationSection id="education">
      <Title
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Slash>/</Slash>
        <span>Formation</span>
        <Line />
      </Title>

      <TimelineContainer>
        <TimelineLine />

        <EducationList>
          {education.map((edu, index) => (
            <EducationItem
              key={edu.school}
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <TimelineDot />

              <EducationCard>
                <CardHeader>
                  <SchoolInfo>
                    <SchoolName>{edu.school}</SchoolName>
                    <Degree>{edu.degree}</Degree>
                  </SchoolInfo>
                  <MetaInfo>
                    <Period>{edu.period}</Period>
                    <Location>{edu.location}</Location>
                  </MetaInfo>
                </CardHeader>
                <DescriptionText>{edu.description}</DescriptionText>
              </EducationCard>
            </EducationItem>
          ))}
        </EducationList>
      </TimelineContainer>
    </EducationSection>
  );
}
