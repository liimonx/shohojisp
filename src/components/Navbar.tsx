import { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem, Button } from '@shohojdhara/atomix';

interface NavbarComponentProps {
  onContactClick: () => void;
}

export default function NavbarComponent({ onContactClick }: NavbarComponentProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brand = (
    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }} aria-label="ShohojISP Home">
      <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--atomix-color-primary-main)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }} aria-hidden="true">S</div>
      <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
        Shohoj<span style={{ color: 'var(--atomix-color-primary-main)' }}>ISP</span>
      </span>
    </a>
  );

  return (
    <Navbar
      brand={brand}
      position="fixed"
      glass={true}
      aria-label="Main navigation"
    >
      <Nav>
        <NavItem href="#solutions">Solutions</NavItem>
        <NavItem href="#ai-agents">AI Agents</NavItem>
        <NavItem href="#how-it-works">How It Works</NavItem>
        <NavItem href="#pricing">Pricing</NavItem>
      </Nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Button
          variant="ghost"
          onClick={onContactClick}
          id="navbar-contact-btn"
        >
          Contact
        </Button>
        <Button
          variant="primary"
          onClick={onContactClick}
          id="navbar-demo-btn"
        >
          Request Demo
        </Button>
      </div>
    </Navbar>
  );
}
