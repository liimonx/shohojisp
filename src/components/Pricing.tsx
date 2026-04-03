import { useState, useEffect } from 'react';
import { Button, Container, SectionIntro, Card, Grid, GridCol, Badge } from '@shohojdhara/atomix';

interface Feature {
  id: string;
  name: string;
  basic: boolean;
  plus: boolean;
  pro: boolean;
  enterprise: boolean;
}

export default function Pricing({ onCtaClick }: { onCtaClick: () => void }) {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching feature data
    setTimeout(() => {
      setFeatures([
        { id: 'f1', name: 'Unlimited Connections', basic: true, plus: true, pro: true, enterprise: true },
        { id: 'f2', name: '24/7 Support', basic: false, plus: true, pro: true, enterprise: true },
        { id: 'f3', name: 'Advanced Analytics', basic: false, plus: false, pro: true, enterprise: true },
        { id: 'f4', name: 'Custom Integrations', basic: false, plus: false, pro: false, enterprise: true },
        { id: 'f5', name: 'Dedicated Account Manager', basic: false, plus: false, pro: false, enterprise: true },
        { id: 'f6', name: 'SLA Guarantee', basic: false, plus: false, pro: false, enterprise: true },
        { id: 'f7', name: 'API Access', basic: true, plus: true, pro: true, enterprise: true },
        { id: 'f8', name: 'Bandwidth Optimization', basic: true, plus: true, pro: true, enterprise: true },
        { id: 'f9', name: 'Fraud Detection', basic: false, plus: true, pro: true, enterprise: true },
        { id: 'f10', name: 'Network Monitoring', basic: true, plus: true, pro: true, enterprise: true },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const pricingTiers = [
    {
      name: 'Basic',
      tagline: 'For Small ISPs',
      price: '$49',
      period: 'per month',
      description: 'Essential tools to manage your growing network',
      featured: false,
      cta: 'Get Started',
      features: features.filter(f => f.basic),
      onClick: onCtaClick,
    },
    {
      name: 'Plus',
      tagline: 'Best Value',
      badge: 'Popular',
      price: '$99',
      period: 'per month',
      description: 'Perfect balance of features and affordability',
      featured: true,
      cta: 'Start Free Trial',
      features: features.filter(f => f.plus),
      onClick: onCtaClick,
    },
    {
      name: 'Pro',
      tagline: 'For Growing Businesses',
      price: '$199',
      period: 'per month',
      description: 'Advanced tools for scaling operations',
      featured: false,
      cta: 'Start Free Trial',
      features: features.filter(f => f.pro),
      onClick: onCtaClick,
    },
    {
      name: 'Enterprise',
      tagline: 'For Large Networks',
      price: 'Custom',
      period: 'per month',
      description: 'Fully customized solution for your business',
      featured: false,
      cta: 'Contact Sales',
      features: features.filter(f => f.enterprise),
      onClick: onCtaClick,
    },
  ];

  if (loading) {
    return (
      <section id="pricing" aria-labelledby="pricing-title" style={{ padding: '5rem 0' }}>
        <Container>
          <div style={{ textAlign: 'center' }}>Loading pricing plans...</div>
        </Container>
      </section>
    );
  }

  return (
    <section id="pricing" aria-labelledby="pricing-title" style={{ padding: '5rem 0' }}>
      <Container>
        <SectionIntro
          label="💰 Pricing"
          title="Plans for Every Stage"
          text="Scale your ISP operations with flexible pricing that grows with you."
          alignment="center"
        />

        <Grid>
          {pricingTiers.map((tier) => (
            <GridCol key={tier.name} xs={12} md={6} lg={3}>
              <Card
                glass={tier.featured}
                hoverable
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ padding: '1.5rem', flex: 1 }}>
                  {tier.badge && (
                    <Badge label={tier.badge} variant="primary" style={{ marginBottom: '1rem' }} />
                  )}
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tier.name}</h3>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {tier.price}<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/{tier.period}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>{tier.description}</p>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {tier.features.map(f => (
                      <li key={f.id} style={{ marginBottom: '0.5rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--atomix-color-primary-main)' }}>✓</span> {f.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <Button
                    variant={tier.featured ? 'primary' : 'outline-primary'}
                    fullWidth
                    onClick={tier.onClick}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
