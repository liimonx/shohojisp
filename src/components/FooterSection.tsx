import { Footer, FooterSection, FooterLink } from '@shohojdhara/atomix';

export default function FooterSectionComponent() {
  return (
    <Footer
      layout="columns"
      brand={
        <a href="#" className="u-flex u-items-center u-gap-2" aria-label="ShohojISP Home">
          <div className="isp-navbar__logo-icon">S</div>
          <span className="u-fs-lg u-font-bold">
            Shohoj<span className="u-text-primary">ISP</span>
          </span>
        </a>
      }
      brandDescription="Revolutionizing ISP operations with cloud infrastructure and AI intelligence. Futuristic solutions for modern providers."
      copyright={
        <>
          <div>© {new Date().getFullYear()} ShohojISP. All rights reserved.</div>
          <div className="isp-footer__sla">99.9% Uptime Guaranteed (SLA)</div>
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
