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
      <section className="isp-section isp-pricing" id="pricing" aria-labelledby="pricing-title">
        <div className="container-sm">
          <div className="isp-pricing__header">
            <div className="isp-loader">Loading pricing plans...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="isp-section isp-pricing" id="pricing" aria-labelledby="pricing-title">
      <Container>
        <SectionIntro
          label="💰 Pricing"
          title={<>Transparent Pricing,<br />No Surprises</>}
          text="Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime."
        />

        <Grid className="isp-pricing-plans">
          {pricingTiers.map((tier) => (
            <GridCol key={tier.name} xs={12} md={6} lg={tier.featured ? 6 : 4} className="isp-pricing-plan-col">
              <Card
                glass={tier.featured}
                size={tier.featured ? 'lg' : 'md'}
                className={`isp-pricing-plan ${tier.featured ? 'isp-pricing-plan--featured' : ''}`}
              >
                {tier.badge && (
                  <Badge label={tier.badge} variant="primary" className="isp-pricing-badge">
                    {tier.badge}
                  </Badge>
                )}
                
                <div className="isp-pricing-header">
                  <h3 className="isp-pricing-name">{tier.name}</h3>
                  <p className="isp-pricing-tagline">{tier.tagline}</p>
                  
                  <div className="isp-pricing-price">
                    <span className="isp-pricing-amount">{tier.price}</span>
                    <span className="isp-pricing-period"> {tier.period}</span>
                  </div>
                  
                  <p className="isp-pricing-desc">{tier.description}</p>
                </div>
                
                <Button 
                  variant={tier.featured ? 'primary' : 'secondary'} 
                  size="lg" 
                  className="u-mb-4"
                  onClick={tier.onClick}
                >
                  {tier.cta}
                </Button>
                
                <ul className="isp-pricing-features" role="list" aria-label={`${tier.name} plan features`}>
                  {tier.features.map((feature) => (
                    <li key={feature.id} className="isp-pricing-feature">
                      <span className="isp-pricing-feature-check">✓</span>
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </section>
  );
}