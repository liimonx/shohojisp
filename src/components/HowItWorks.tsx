import { Container, SectionIntro, Steps } from '@shohojdhara/atomix';

const steps = [
  {
    number: '🔌',
    text: 'Connect Your Network',
  },
  {
    number: '⚙️',
    text: 'Configure Workflows',
  },
  {
    number: '🤖',
    text: 'Deploy AI Agents',
  },
  {
    number: '📈',
    text: 'Monitor & Scale',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="hiw-title" style={{ padding: '5rem 0' }}>
      <Container>
        <SectionIntro
          alignment="center"
          label="📋 How It Works"
          title="Up and Running in Hours, Not Months"
          text="Our streamlined onboarding process gets your ISP operations fully automated — without complex migrations or downtime."
        />

        <Steps
          items={steps}
          activeIndex={3}
          glass={true}
        />
      </Container>
    </section>
  );
}
