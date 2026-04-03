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
    <section className="isp-section" id="how-it-works" aria-labelledby="hiw-title">
      <Container>
        <SectionIntro
          alignment="center"
          label="📋 How It Works"
          title={<>Up and Running in Hours,<br />Not Months</>}
          text="Our streamlined onboarding process gets your ISP operations fully automated — without complex migrations or downtime."
          className="u-mb-8"
        />

        <Steps
          items={steps}
          activeIndex={3}
          glass={true}
          className="u-justify-center"
        />
      </Container>
    </section>
  );
}
