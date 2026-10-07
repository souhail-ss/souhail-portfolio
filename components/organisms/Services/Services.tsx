'use client';

import { LayoutDashboard, Rocket, Smartphone, Server, Check, type LucideIcon } from 'lucide-react';
import SectionTitle from '@/components/atoms/SectionTitle/SectionTitle';
import { services } from '@/data/site';
import {
  ServicesSection,
  Grid,
  Card,
  IconTile,
  CardTitle,
  CardText,
  Points,
  Point,
} from './Services.styles';

const ICONS: Record<string, LucideIcon> = {
  layout: LayoutDashboard,
  rocket: Rocket,
  smartphone: Smartphone,
  server: Server,
};

export default function Services() {
  return (
    <ServicesSection id="services">
      <SectionTitle
        title="Services"
        subtitle="Ce que je peux construire pour vous, de la première maquette à la mise en production."
      />

      <Grid>
        {services.map((service, index) => {
          const Icon = ICONS[service.icon] ?? LayoutDashboard;
          return (
            <Card
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <IconTile>
                <Icon size={22} strokeWidth={1.75} />
              </IconTile>
              <CardTitle>{service.title}</CardTitle>
              <CardText>{service.description}</CardText>
              <Points>
                {service.points.map((point) => (
                  <Point key={point}>
                    <Check size={14} strokeWidth={3} />
                    {point}
                  </Point>
                ))}
              </Points>
            </Card>
          );
        })}
      </Grid>
    </ServicesSection>
  );
}
