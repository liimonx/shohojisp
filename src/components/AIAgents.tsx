import { Container, SectionIntro, Card, Grid, GridCol } from '@shohojdhara/atomix';

const capabilities = [
  {
    icon: '🚫',
    title: 'Auto Suspension & Reactivation',
    desc: 'Automatically suspend overdue accounts and reactivate instantly upon payment — zero manual effort.',
  },
  {
    icon: '🔍',
    title: 'Fraud & Anomaly Detection',
    desc: 'AI flags suspicious usage patterns, bandwidth theft, and unusual login activity in real-time.',
  },
  {
    icon: '🔎',
    title: 'Network Root-Cause Analysis',
    desc: 'Identify the exact source of outages or degradation before your customers even notice.',
  },
  {
    icon: '🎫',
    title: 'Automated Ticket Resolution',
    desc: 'AI agents handle 60% of common support queries — resetting connections, password resets, and more.',
  },
  {
    icon: '💬',
    title: 'Payment Follow-up & Reminders',
    desc: 'Intelligent, multi-channel reminders that reduce churn and improve collection rates by 25%.',
  },
  {
    icon: '📶',
    title: 'Bandwidth Optimization',
    desc: 'AI suggests and applies QoS policies dynamically to maximize network efficiency and user experience.',
  },
];

export default function AIAgents() {
  return (
    <section id="ai-agents" aria-labelledby="ai-title" style={{ padding: '5rem 0', backgroundColor: 'var(--atomix-color-surface-main)' }}>
      <Container>
        <Grid alignItems="center">
          <GridCol xs={12} lg={6}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
              <img
                src="/ai-agents.png"
                alt="AI-powered ISP network monitoring and automation dashboard"
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </GridCol>

          <GridCol xs={12} lg={6}>
            <SectionIntro
              label="🤖 AI Agents"
              title="The Future of Autonomous ISP Operations"
              text="Our AI agents don't just alert — they act. From network healing to customer support, let intelligent automation handle the routine so your team focuses on what matters."
            />

            <Grid role="list" aria-label="AI capabilities">
              {capabilities.map((cap) => (
                <GridCol key={cap.title} xs={12}>
                  <Card
                    glass={true}
                    row
                    flat
                    size="sm"
                    icon={<span style={{ fontSize: '1.25rem' }}>{cap.icon}</span>}
                    title={cap.title}
                    text={cap.desc}
                  />
                </GridCol>
              ))}
            </Grid>
          </GridCol>
        </Grid>
      </Container>
    </section>
  );
}
