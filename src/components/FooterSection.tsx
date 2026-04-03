import { Footer, FooterSection, FooterLink } from '@shohojdhara/atomix';

export default function FooterSectionComponent() {
  const brand = (
    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }} aria-label="ShohojISP Home">
      <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--atomix-color-primary-main)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }} aria-hidden="true">S</div>
      <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
        Shohoj<span style={{ color: 'var(--atomix-color-primary-main)' }}>ISP</span>
      </span>
    </a>
  );

  return (
    <Footer
      layout="columns"
      brand={brand}
      brandDescription="Revolutionizing ISP operations with cloud infrastructure and AI intelligence. Futuristic solutions for modern providers."
      copyright={
        <>
          <div>© {new Date().getFullYear()} ShohojISP. All rights reserved.</div>
          <div style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.5rem', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(0, 242, 255, 0.1)', border: '1px solid rgba(0, 242, 255, 0.2)', borderRadius: '4px', display: 'inline-block' }}>
            99.9% Uptime Guaranteed (SLA)
          </div>
        </>
      }
      socialLinks={[
        { platform: 'linkedin', url: '#' },
        { platform: 'twitter', url: '#' },
        { platform: 'github', url: '#' }
      ]}
    >
      <FooterSection title="Platform">
        <FooterLink href="#solutions">Solutions</FooterLink>
        <FooterLink href="#ai-agents">AI Agents</FooterLink>
        <FooterLink href="#pricing">Pricing</FooterLink>
        <FooterLink href="#">API Docs</FooterLink>
      </FooterSection>

      <FooterSection title="Company">
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Careers</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
        <FooterLink href="#">Status</FooterLink>
      </FooterSection>

      <FooterSection title="Legal">
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
        <FooterLink href="#">GDPR</FooterLink>
        <FooterLink href="#">Security</FooterLink>
      </FooterSection>
    </Footer>
  );
}
