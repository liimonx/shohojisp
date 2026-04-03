import { Container, SectionIntro, Card, Grid, GridCol, Block } from '@shohojdhara/atomix';
import { Robot, ShieldCheck, MagnifyingGlass, Ticket, BellRinging, ChartLineUp } from '@phosphor-icons/react';

const capabilities = [
  {
    icon: <Robot size={24} weight="duotone" />,
    title: 'Auto Suspension & Reactivation',
    desc: 'Automatically suspend overdue accounts and reactivate instantly upon payment — zero manual effort.',
  },
  {
    icon: <ShieldCheck size={24} weight="duotone" />,
    title: 'Fraud & Anomaly Detection',
    desc: 'AI flags suspicious usage patterns, bandwidth theft, and unusual login activity in real-time.',
  },
  {
    icon: <MagnifyingGlass size={24} weight="duotone" />,
    title: 'Network Root-Cause Analysis',
    desc: 'Identify the exact source of outages or degradation before your customers even notice.',
  },
  {
    icon: <Ticket size={24} weight="duotone" />,
    title: 'Automated Ticket Resolution',
    desc: 'AI agents handle 60% of common support queries — resetting connections, password resets, and more.',
  },
  {
    icon: <BellRinging size={24} weight="duotone" />,
    title: 'Payment Follow-up & Reminders',
    desc: 'Intelligent, multi-channel reminders that reduce churn and improve collection rates by 25%.',
  },
  {
    icon: <ChartLineUp size={24} weight="duotone" />,
    title: 'Bandwidth Optimization',
    desc: 'AI suggests and applies QoS policies dynamically to maximize network efficiency and user experience.',
  },
];

export default function AIAgents() {
  return (
    <Block id="ai-agents" aria-labelledby="ai-title" style={{ padding: '7rem 0', backgroundColor: 'var(--atomix-color-surface-main)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background element */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      
      <Container>
        <Grid alignItems="center">
          <GridCol xs={12} lg={6}>
            <div style={{ 
              borderRadius: '20px', 
              overflow: 'hidden', 
              boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 20px rgba(0, 242, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              background: 'var(--atomix-color-surface-card)'
            }}>
              <img
                src="/ai-agents.png"
                alt="AI-powered ISP network monitoring and automation dashboard"
                loading="lazy"
                style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </GridCol>

          <GridCol xs={12} lg={6}>
            <SectionIntro
              label="🤖 AI Agents"
              title="The Future of Autonomous ISP Operations"
              text="Our AI agents don't just alert — they act. From network healing to customer support, let intelligent automation handle the routine so your team focuses on what matters."
              style={{ marginBottom: '3rem' }}
            />

            <Grid role="list" aria-label="AI capabilities">
              {capabilities.map((cap) => (
                <GridCol key={cap.title} xs={12} md={6}>
                  <Card
                    glass={true}
                    hoverable
                    flat
                    size="sm"
                    icon={<span style={{ color: 'var(--atomix-color-primary-main)' }}>{cap.icon}</span>}
                    title={cap.title}
                    text={cap.desc}
                    style={{ height: '100%' }}
                  />
                </GridCol>
              ))}
            </Grid>
          </GridCol>
        </Grid>
      </Container>
    </Block>
  );
}
