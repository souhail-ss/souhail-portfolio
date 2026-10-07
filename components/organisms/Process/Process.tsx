'use client';

import SectionTitle from '@/components/atoms/SectionTitle/SectionTitle';
import { processSteps } from '@/data/site';
import { ProcessSection, Steps, Step, StepNumber, StepTitle, StepText } from './Process.styles';

export default function Process() {
  return (
    <ProcessSection id="process">
      <SectionTitle
        title="Méthode"
        subtitle="Un déroulement simple et transparent : vous savez toujours où en est votre projet."
      />

      <Steps>
        {processSteps.map((step, index) => (
          <Step
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <StepNumber>{step.step}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepText>{step.description}</StepText>
          </Step>
        ))}
      </Steps>
    </ProcessSection>
  );
}
