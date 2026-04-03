import { Container, SectionIntro, Card, Grid, GridCol, Block } from '@shohojdhara/atomix';

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
    <Block id="solutions" aria-labelledby="solutions-title" style={{ padding: '5rem 0' }}>
      <Container>
        <SectionIntro
          label="⚙️ Solutions"
          title="Complete ISP Management Suite"
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
                icon={<span style={{ fontSize: '1.5rem' }}>{solution.icon}</span>}
                title={solution.title}
                text={solution.desc}
              />
            </GridCol>
          ))}
        </Grid>
      </Container>
    </Block>
  );
}
