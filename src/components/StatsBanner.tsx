import { Container } from '@shohojdhara/atomix';

const stats = [
  { id: 's1', value: '99.9%', label: 'Uptime' },
  { id: 's2', value: '500+', label: 'ISPs Served' },
  { id: 's3', value: '24/7', label: 'Support' },
  { id: 's4', value: '10x', label: 'ROI Increase' },
];

export default function StatsBanner() {
  return (
    <section className="isp-stats" aria-label="Business statistics">
      <Container>
        <ul className="isp-stats-list">
          {stats.map((stat) => (
            <li key={stat.id} className="isp-stat-item">
              <span className="isp-stat-value">{stat.value}</span>
              <span className="isp-stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
