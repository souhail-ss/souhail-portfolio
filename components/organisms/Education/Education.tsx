'use client';

import { Calendar, MapPin } from 'lucide-react';
import SectionTitle from '@/components/atoms/SectionTitle/SectionTitle';
import { database } from '@/data/portfolio.data';
import {
  EducationSection,
  Timeline,
  Item,
  Dot,
  Card,
  CardHeader,
  Degree,
  School,
  Meta,
  Description,
  Courses,
} from './Education.styles';

const MONTHS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];

/** "2022-10" → "Oct 2022" */
const fmtMonth = (ym: string) => {
  const [y, m] = ym.split('-');
  return `${MONTHS[Number(m) - 1] ?? ''} ${y}`.trim();
};

export default function Education() {
  return (
    <EducationSection id="education">
      <SectionTitle title="Formation" />

      <Timeline>
        {database.education.map((edu, i) => (
          <Item
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Dot />
            <Card>
              <CardHeader>
                <div>
                  <Degree>{edu.degree}</Degree>
                  <School href={edu.institutionUrl} target="_blank" rel="noopener noreferrer">
                    {edu.institution}
                  </School>
                </div>
                <Meta>
                  <span><Calendar size={14} />{fmtMonth(edu.startDate)} – {fmtMonth(edu.endDate)}</span>
                  <span><MapPin size={14} />{edu.location.city}, {edu.location.country}</span>
                </Meta>
              </CardHeader>
              <Description>{edu.description}</Description>
              <Courses>
                {edu.courses.map((c) => <li key={c}>{c}</li>)}
              </Courses>
            </Card>
          </Item>
        ))}
      </Timeline>
    </EducationSection>
  );
}
