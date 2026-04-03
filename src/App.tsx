import { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Solutions from './components/Solutions';
import AIAgents from './components/AIAgents';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import StatsBanner from './components/StatsBanner';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onContactClick={scrollToContact} />
      <main>
        <HeroSection onDemoClick={scrollToContact} />
        <StatsBanner />
        <Solutions />
        <AIAgents />
        <HowItWorks />
        <Pricing onCtaClick={scrollToContact} />
        <CTASection onDemoClick={scrollToContact} />
        <ContactSection sectionRef={contactRef} />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
