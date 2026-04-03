import { Button, Badge, Grid, GridCol, Hero, Container } from '@shohojdhara/atomix';

const metrics = [
  { id: 'm1', value: '60%', label: 'Reduction in operational costs' },
  { id: 'm2', value: '4x', label: 'Faster issue resolution' },
  { id: 'm3', value: '99.9%', label: 'Uptime guarantee' },
];

export default function HeroSection({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <Hero
      id="hero"
      aria-label="Hero section"
      fullViewportHeight
      title="Automate Your ISP Operations with AI-Powered Intelligence"
    >
      <Container>
        <Grid alignItems="center">
          <GridCol xs={12} lg={7}>
            <Hero.Content>
              <Badge 
                label="🚀 ISP Management Revolution" 
                variant="primary" 
              />
              
              <Hero.Title>
                Automate Your ISP Operations with AI-Powered Intelligence
              </Hero.Title>
              
              <Hero.Text>
                ShohojISP transforms how you manage your Internet Service Provider business. 
                With our advanced automation and AI agents, reduce operational overhead by 60% 
                and delight your customers with unprecedented service quality.
              </Hero.Text>

              <Hero.Actions>
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={onDemoClick}
                >
                  Request Demo
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  onClick={() => {
                    alert('Documentation would open here');
                  }}
                >
                  View Docs
                </Button>
              </Hero.Actions>

              <div role="list" aria-label="Business metrics" style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                {metrics.map((metric) => (
                  <div key={metric.id} style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{metric.value}</span>
                    <span style={{ fontSize: '0.875rem' }}>{metric.label}</span>
                  </div>
                ))}
              </div>
            </Hero.Content>
          </GridCol>

          <GridCol xs={12} lg={5}>
            <Hero.Image
              src="/hero.png"
              alt="ShohojISP dashboard showing analytics and management tools"
              loading="eager"
            />
          </GridCol>
        </Grid>
      </Container>
    </Hero>
  );
}
