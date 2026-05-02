import { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem, Button, ColorModeToggle} from '@shohojdhara/atomix';

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
      <div style={{ 
        width: '32px', 
        height: '32px', 
        backgroundColor: 'var(--atomix-color-primary-main)', 
        boxShadow: '0 0 10px rgba(0, 242, 255, 0.4)',
        borderRadius: '6px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: 'var(--atomix-color-secondary-main)', 
        fontWeight: 'bold' 
      }} aria-hidden="true">S</div>
      <span style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '-0.02em' }}>
        Shohoj<span style={{ color: 'var(--atomix-color-primary-main)' }}>ISP</span>
      </span>
    </a>
  );

  return (
    <Navbar
      brand={brand}
      position="fixed"
      glass={true}
      style={{
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
      aria-label="Main navigation"
    >
      <Nav alignment="center">
        <NavItem href="#solutions">Solutions</NavItem>
        <NavItem href="#ai-agents">AI Agents</NavItem>
        <NavItem href="#how-it-works">How It Works</NavItem>
        <NavItem href="#pricing">Pricing</NavItem>
      </Nav>

      <Nav alignment='end'>
        <NavItem>
          <Button
          size="sm"
          onClick={onContactClick}
          
        >
          Contact
        </Button>
        </NavItem>
          <Button
          size="sm"
          onClick={onContactClick}
          
        >
          Login
        </Button>
        <ColorModeToggle defaultValue='dark'/>
      </Nav>
    </Navbar>
  );
}
