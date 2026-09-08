'use client'

import { useState } from 'react'
import { ArrowUpRight, CheckCircle, MapPin } from 'lucide-react'
import { SiteShell, PageHero, OfficeDetails } from '@/components/site-shell'
import { services, email, mapsUrl } from '@/lib/practices'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: services[0].title,
    message: '',
  })

  // Opens the visitor's email client with the form pre-filled; no server needed.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry: ${formData.service} - ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.organization || '-'}\nService: ${formData.service}\n\n${formData.message}`
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Contact Us' }]}
          eyebrow="CONTACT US"
          title="Let's talk about"
          italic="your matter."
          intro="Call, email, or fill in the form. We usually reply within one working day."
          bgImage="/images/contact-hero.jpg"
        />

        <section className="section">
          <div className="contact-grid-v2">
            <div className="contact-info-panel">
              <div className="section-label">01 <span>Reach Us</span></div>
              <h2 style={{ marginTop: '20px', fontSize: 'clamp(36px, 4vw, 56px)' }}>
                Call, email, <i>or visit.</i>
              </h2>
              <p className="contact-intro-text">
                Our office is in Sector 102, Gurugram. We are open Monday to Saturday, 9 AM to 8 PM. If you would like to meet in person, please call first so we can keep the time free for you.
              </p>

              <OfficeDetails />

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-outline"
                style={{ marginTop: '24px' }}
              >
                <MapPin size={16} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="contact-form-panel">
              <div className="contact-form-header">
                <p className="eyebrow" style={{ margin: 0, marginBottom: '6px' }}>SEND A MESSAGE</p>
                <h3>Tell us about your matter</h3>
                <p>Fill in the form and it will open an email to us with your details.</p>
              </div>

              {sent ? (
                <div className="form-success-box">
                  <CheckCircle size={44} color="var(--gold)" style={{ margin: '0 auto 16px' }} />
                  <span>Your email is ready to send.</span>
                  <p>
                    Your email app should have opened with the message filled in. Press send and we will get back to you within one working day. If nothing opened, write to us directly at {email}.
                  </p>
                  <button
                    type="button"
                    className="button button-gold"
                    style={{ marginTop: '24px' }}
                    onClick={() => setSent(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="organization">Company (optional)</label>
                      <input
                        id="organization"
                        type="text"
                        placeholder="e.g. ABC Industries Pvt. Ltd."
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">What is it about?</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Something else">Something else</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your message *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us briefly what happened and what you need help with. If there is a deadline, please mention it."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="form-disclaimer">
                    <strong>Please note:</strong> Sending this message does not make us your lawyers yet. That happens only after we agree to take up your matter. Please do not share confidential details until then.
                  </div>

                  <button className="button button-gold" style={{ width: '100%', justifyContent: 'center' }} type="submit">
                    <span>Send Message</span>
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
