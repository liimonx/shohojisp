import { Container, SectionIntro, Card, Grid, GridCol } from '@shohojdhara/atomix';

const solutions = [
  {
    icon: '📊',
    title: 'Usage Analytics',
    desc: 'Real-time insights into bandwidth consumption, user behavior, and revenue trends.',
  },
  {
    icon: '💳',
    title: 'Billing Automation',
    desc: 'Streamlined billing with recurring payments, late fees, and dunning management.',
  },
  {
    icon: '🎛️',
    title: 'Connection Management',
    desc: 'Instant activation, suspension, and modification of customer connections.',
  },
  {
    icon: '📞',
    title: 'Customer Portal',
    desc: 'Self-service portal for payments, connection changes, and support tickets.',
  },
  {
    icon: '🌐',
    title: 'Network Monitoring',
    desc: 'Proactive monitoring of all network infrastructure with instant alerts.',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    desc: 'Advanced security measures and compliance with industry regulations.',
  },
];

export default function Solutions() {
  return (
    <section className="isp-section isp-solutions" id="solutions" aria-labelledby="solutions-title">
      <Container>
        <SectionIntro
          label="⚙️ Solutions"
          title={<>Complete ISP<br />Management Suite</>}
          text="Everything you need to run your ISP business efficiently. All in one place."
        />

        <Grid role="list" aria-label="Business solutions">
          {solutions.map((solution) => (
            <GridCol key={solution.title} xs={12} md={6} lg={4}>
              <Card
                glass={true}
                row
                flat
                size="sm"
                icon={<span className="u-fs-xl">{solution.icon}</span>}
                title={solution.title}
                text={solution.desc}
              />
            </GridCol>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
