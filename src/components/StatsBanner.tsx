import { Container, Grid, GridCol } from '@shohojdhara/atomix';

const stats = [
  { id: 's1', value: '99.9%', label: 'Uptime' },
  { id: 's2', value: '500+', label: 'ISPs Served' },
  { id: 's3', value: '24/7', label: 'Support' },
  { id: 's4', value: '10x', label: 'ROI Increase' },
];

export default function StatsBanner() {
  return (
    <section aria-label="Business statistics" style={{ padding: '3rem 0', backgroundColor: 'var(--atomix-color-surface-card)' }}>
      <Container>
        <Grid>
          {stats.map((stat) => (
            <GridCol key={stat.id} xs={6} md={3}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--atomix-color-primary-main)' }}>{stat.value}</div>
                <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
