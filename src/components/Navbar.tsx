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
    <a href="#" className="u-flex u-items-center u-gap-2" aria-label="ShohojISP Home">
      <div className="isp-navbar__logo-icon" aria-hidden="true">S</div>
      <span className="u-fs-lg u-font-bold">
        Shohoj<span className="u-text-primary">ISP</span>
      </span>
    </a>
  );

  return (
    <Navbar
      brand={brand}
      position="fixed"
      glass={true}
      className={scrolled ? 'is-scrolled' : ''}
      aria-label="Main navigation"
    >
      <Nav className="u-mx-auto">
        <NavItem href="#solutions">Solutions</NavItem>
        <NavItem href="#ai-agents">AI Agents</NavItem>
        <NavItem href="#how-it-works">How It Works</NavItem>
        <NavItem href="#pricing">Pricing</NavItem>
      </Nav>

      <div className="u-flex u-items-center u-gap-3">
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
