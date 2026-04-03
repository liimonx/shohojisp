import { Container, Button } from '@shohojdhara/atomix';

interface CTASectionProps {
  onDemoClick: () => void;
}

export default function CTASection({ onDemoClick }: CTASectionProps) {
  return (
    <section style={{ padding: '7rem 0', textAlign: 'center', backgroundColor: 'var(--atomix-color-surface-main)' }}>
      <Container>
        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Ready to Modernize Your ISP?</h2>
          <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2.5rem', opacity: 0.8 }}>
            Join 500+ ISPs worldwide who are scaling faster and smarter with ShohojISP.
            Start your free 30-day trial today — no credit card required.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={onDemoClick}
              id="cta-demo-btn"
            >
              🚀 Get Started Now
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => window.location.href = '#solutions'}
              id="cta-explore-btn"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
