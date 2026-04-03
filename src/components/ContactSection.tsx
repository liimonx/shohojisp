import { useState, useRef } from 'react';
import { Container, SectionIntro, Card, Button, Input, Select, Textarea, FormGroup, Grid, GridCol } from '@shohojdhara/atomix';

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
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
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
    <section
      className="isp-section"
      id="contact"
      aria-labelledby="contact-title"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <Container>
        <Grid className="isp-contact-layout">
          <GridCol xs={12} lg={5}>
            <div className="isp-contact-info">
              <SectionIntro
                label="✉️ Get In Touch"
                title="Ready to Scale Your ISP?"
                text="Our team of ISP specialists is ready to give you a personalized demo and help you migrate your existing operations seamlessly."
                className="u-mb-6"
              />

              <Card glass={true} flat className="u-mb-3">
                <div className="u-flex u-gap-3 u-items-start">
                  <div className="u-fs-xl" aria-hidden="true">⚡</div>
                  <div>
                    <strong className="u-block u-mb-1">Live Demo in 30 Minutes</strong>
                    <span className="u-text-secondary u-fs-sm">
                      We'll set up a live demo of the platform tailored to your network size and requirements.
                    </span>
                  </div>
                </div>
              </Card>

              <Card glass={true} flat className="u-mb-3">
                <div className="u-flex u-gap-3 u-items-start">
                  <div className="u-fs-xl" aria-hidden="true">🔒</div>
                  <div>
                    <strong className="u-block u-mb-1">Free 30-Day Trial</strong>
                    <span className="u-text-secondary u-fs-sm">
                      No credit card required. Full platform access for 30 days with your own data.
                    </span>
                  </div>
                </div>
              </Card>

              <Card glass={true} flat className="u-mb-3">
                <div className="u-flex u-gap-3 u-items-start">
                  <div className="u-fs-xl" aria-hidden="true">🛟</div>
                  <div>
                    <strong className="u-block u-mb-1">Migration Support Included</strong>
                    <span className="u-text-secondary u-fs-sm">
                      Our engineering team handles your data migration from any existing billing or RADIUS system.
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </GridCol>

          <GridCol xs={12} lg={7}>
            <Card glass={true} className="isp-contact-form">
              {submitted ? (
                <div className="u-text-center u-py-8 u-px-4">
                  <div className="u-fs-2xl u-mb-3">✅</div>
                  <h3 className="u-text-primary u-mb-2 u-fs-lg u-font-bold">
                    Request Received!
                  </h3>
                  <p className="u-text-secondary u-fs-sm">
                    Our team will reach out within 24 hours to schedule your personalized demo.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <Grid>
                    <GridCol xs={12} sm={6}>
                      <FormGroup label="Full Name" htmlFor="contact-name">
                        <Input
                          id="contact-name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                        />
                      </FormGroup>
                    </GridCol>
                    <GridCol xs={12} sm={6}>
                      <FormGroup label="Work Email" htmlFor="contact-email">
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="john@isp.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                        />
                      </FormGroup>
                    </GridCol>
                  </Grid>

                  <Grid className="u-mt-4">
                    <GridCol xs={12} sm={6}>
                      <FormGroup label="Company / ISP Name" htmlFor="contact-company">
                        <Input
                          id="contact-company"
                          name="company"
                          type="text"
                          placeholder="Acme Internet"
                          value={formData.company}
                          onChange={handleChange}
                          autoComplete="organization"
                        />
                      </FormGroup>
                    </GridCol>
                    <GridCol xs={12} sm={6}>
                      <FormGroup label="Subscriber Count" htmlFor="contact-subscribers">
                        <Select
                          id="contact-subscribers"
                          name="subscribers"
                          value={formData.subscribers}
                          onChange={handleChange}
                          options={[
                            { label: 'Select range…', value: '' },
                            { label: 'Under 1,000', value: 'under-1k' },
                            { label: '1,000 – 10,000', value: '1k-10k' },
                            { label: '10,000 – 100,000', value: '10k-100k' },
                            { label: '100,000+', value: '100k-plus' },
                          ]}
                        />
                      </FormGroup>
                    </GridCol>
                  </Grid>

                  <div className="u-mt-4">
                    <FormGroup label="Message (Optional)" htmlFor="contact-message">
                      <Textarea
                        id="contact-message"
                        name="message"
                        placeholder="Tell us about your current setup and challenges…"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="u-mt-4"
                    id="contact-submit-btn"
                  >
                    🚀 Request My Demo
                  </Button>

                  <p className="u-fs-xs u-text-secondary u-text-center u-mt-3">
                    No credit card required. Your data is protected and never shared.
                  </p>
                </form>
              )}
            </Card>
          </GridCol>
        </Grid>
      </Container>
    </section>
  );
}
