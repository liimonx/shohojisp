import { Button, Badge, Container, Grid, GridCol } from '@shohojdhara/atomix';

const metrics = [
  { id: 'm1', value: '60%', label: 'Reduction in operational costs' },
  { id: 'm2', value: '4x', label: 'Faster issue resolution' },
  { id: 'm3', value: '99.9%', label: 'Uptime guarantee' },
];

export default function HeroSection({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="isp-hero" id="hero" aria-label="Hero section">
      <div className="isp-shape-divider">
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0Z" />
        </svg>
      </div>

      <Container>
        <Grid alignItems="center" className="isp-hero__layout">
          <GridCol xs={12} lg={7}>
            <div className="isp-hero__content">
              <Badge label="🚀 ISP Management Revolution" className="u-mb-2" />
              <h1 className="isp-hero__title">
                Automate Your ISP Operations with{' '}
                <strong className="isp-accent">AI-Powered</strong> Intelligence
              </h1>
              <p className="isp-hero__desc">
                ShohojISP transforms how you manage your Internet Service Provider business. 
                With our advanced automation and AI agents, reduce operational overhead by 60% 
                and delight your customers with unprecedented service quality.
              </p>

              <div className="isp-hero__actions">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="u-mr-2"
                  onClick={onDemoClick}
                >
                  Request Demo
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => {
                    // In a real app, this would navigate to documentation
                    alert('Documentation would open here');
                  }}
                >
                  View Docs
                </Button>
              </div>

              <div className="isp-hero__metrics" role="list" aria-label="Business metrics">
                {metrics.map((metric) => (
                  <div key={metric.id} className="isp-hero__metric">
                    <span className="isp-hero__metric-value">{metric.value}</span>
                    <span className="isp-hero__metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </GridCol>

          <GridCol xs={12} lg={5}>
            <div className="isp-hero__visual">
              <img
                src="/hero-dashboard.png"
                alt="ShohojISP dashboard showing analytics and management tools"
                loading="eager"
                className="isp-dashboard-img"
              />
            </div>
          </GridCol>
        </Grid>
      </Container>
    </section>
  );
}
