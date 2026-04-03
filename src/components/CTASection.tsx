import { Container, Button } from '@shohojdhara/atomix';

interface CTASectionProps {
  onDemoClick: () => void;
}

export default function CTASection({ onDemoClick }: CTASectionProps) {
  return (
    <section className="isp-cta">
      <div className="isp-cta__bg" />
      <Container>
        <div className="isp-cta__content u-text-center">
          <h2 className="isp-cta__title">Ready to Modernize Your ISP?</h2>
          <p className="isp-cta__subtitle">
            Join 500+ ISPs worldwide who are scaling faster and smarter with ShohojISP.
            Start your free 30-day trial today — no credit card required.
          </p>
          <div className="u-flex u-justify-center u-gap-3 u-flex-wrap">
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
              href="#solutions"
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
