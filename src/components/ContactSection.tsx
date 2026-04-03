import { useState, useRef } from 'react';
import { Container, SectionIntro, Card, Button, Input, Select, Textarea, FormGroup, Grid, GridCol, Block } from '@shohojdhara/atomix';

interface ContactSectionProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
}

export default function ContactSection({ sectionRef }: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subscribers: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    if (formRef.current) {
      formRef.current.reset();
    }
    setFormData({
      name: '',
      email: '',
      company: '',
      subscribers: '',
      message: '',
    });
  };

  return (
    <Block
      id="contact"
      aria-labelledby="contact-title"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      style={{ padding: '5rem 0' }}
    >
      <Container>
        <Grid>
          <GridCol xs={12} lg={5}>
            <div style={{ position: 'sticky', top: '100px', marginBottom: '3rem' }}>
              <SectionIntro
                label="✉️ Get In Touch"
                title="Ready to Scale Your ISP?"
                text="Our team of ISP specialists is ready to give you a personalized demo and help you migrate your existing operations seamlessly."
              />

              <Card glass={true} flat style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ fontSize: '1.25rem' }} aria-hidden="true">⚡</div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Live Demo in 30 Minutes</strong>
                    <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                      We'll set up a live demo of the platform tailored to your network size and requirements.
                    </span>
                  </div>
                </div>
              </Card>

              <Card glass={true} flat style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ fontSize: '1.25rem' }} aria-hidden="true">🔒</div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Free 30-Day Trial</strong>
                    <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                      No credit card required. Full platform access for 30 days with your own data.
                    </span>
                  </div>
                </div>
              </Card>

              <Card glass={true} flat style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ fontSize: '1.25rem' }} aria-hidden="true">🛟</div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Migration Support Included</strong>
                    <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                      Our engineering team handles your data migration from any existing billing or RADIUS system.
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </GridCol>

          <GridCol xs={12} lg={7}>
            <Card glass={true} style={{ padding: '2rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Message Received!</h3>
                  <p style={{ opacity: 0.8 }}>
                    Thank you for reaching out. One of our ISP experts will contact you within the next 24 hours.
                  </p>
                  <Button variant="outline-primary" style={{ marginTop: '2rem' }} onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} ref={formRef}>
                  <Grid>
                    <GridCol xs={12} md={6}>
                      <FormGroup label="Full Name" required>
                        <Input
                          placeholder="John Doe"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </GridCol>
                    <GridCol xs={12} md={6}>
                      <FormGroup label="Email Address" required>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </GridCol>
                    <GridCol xs={12} md={6}>
                      <FormGroup label="Company Name" required>
                        <Input
                          placeholder="Shohoj ISP"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </GridCol>
                    <GridCol xs={12} md={6}>
                      <FormGroup label="Estimated Subscribers" required>
                        <Select
                          name="subscribers"
                          value={formData.subscribers}
                          onChange={handleChange}
                          required
                          options={[
                            { value: '', label: 'Select range' },
                            { value: '0-500', label: '0 - 500' },
                            { value: '500-2000', label: '500 - 2,000' },
                            { value: '2000-10000', label: '2,000 - 10,000' },
                            { value: '10000+', label: '10,000+' },
                          ]}
                        />
                      </FormGroup>
                    </GridCol>
                    <GridCol xs={12}>
                      <FormGroup label="How can we help you?">
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                        />
                      </FormGroup>
                    </GridCol>
                    <GridCol xs={12}>
                      <Button variant="primary" size="lg" fullWidth type="submit">
                        Send Message
                      </Button>
                    </GridCol>
                  </Grid>
                </form>
              )}
            </Card>
          </GridCol>
        </Grid>
      </Container>
    </Block>
  );
}
