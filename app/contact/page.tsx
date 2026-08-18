'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Phone, Mail, Globe, MapPin, CheckCircle } from 'lucide-react'
import { SiteShell, PageHero } from '@/components/site-shell'
import { practices, phone, email, website, address } from '@/lib/practices'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    practiceArea: 'Electricity & Energy Law',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Contact' }]}
          eyebrow="START A CONVERSATION"
          title="Tell us about the legal matter"
          italic="you are navigating."
          intro="We advise corporations, institutions, and individuals on complex legal, regulatory, and dispute matters across India."
          bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85"
        />

        <section className="section">
          <div className="contact-grid-v2">
            {/* Left Column: Direct Contact Info */}
            <div className="contact-info-panel">
              <div className="section-label">01 <span>Direct Engagement</span></div>
              <h2 style={{ marginTop: '20px' }}>
                Independent counsel. <i>Committed to your outcome.</i>
              </h2>
              <p className="contact-intro-text">
                Whether you are facing imminent regulatory proceedings, preparing for high-value commercial arbitration, or structuring complex transactions, our partners are ready to assist.
              </p>

              <div className="contact-direct-cards">
                <div className="contact-direct-card">
                  <span className="contact-direct-label">Direct Telephone</span>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-direct-val">
                    {phone}
                  </a>
                </div>

                <div className="contact-direct-card">
                  <span className="contact-direct-label">Electronic Mail</span>
                  <a href={`mailto:${email}`} className="contact-direct-val">
                    {email}
                  </a>
                </div>

                <div className="contact-direct-card">
                  <span className="contact-direct-label">Official Portal</span>
                  <a href="https://www.sharplegal.in" target="_blank" rel="noopener noreferrer" className="contact-direct-val">
                    {website}
                  </a>
                </div>

                <div className="contact-direct-card">
                  <span className="contact-direct-label">Chambers &amp; Office</span>
                  <span className="contact-direct-val" style={{ fontSize: '16px' }}>
                    {address}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form */}
            <div className="contact-form-panel">
              <div className="contact-form-header">
                <p className="eyebrow" style={{ margin: 0, marginBottom: '6px' }}>CONFIDENTIAL ENQUIRY</p>
                <h3>Initiate a Consultation</h3>
                <p>Please provide the preliminary parameters of your inquiry.</p>
              </div>

              {sent ? (
                <div className="form-success-box">
                  <CheckCircle size={44} color="var(--gold)" style={{ margin: '0 auto 16px' }} />
                  <span>Enquiry Received.</span>
                  <p>
                    Thank you for reaching out to Sharp Legal &amp; Co. Our designated practice lead will review your submission and connect with you shortly.
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
                      <label htmlFor="name">Full Name *</label>
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
                      <label htmlFor="email">Work Email *</label>
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
                      <label htmlFor="phone">Phone Number *</label>
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
                      <label htmlFor="organization">Organization / Entity</label>
                      <input
                        id="organization"
                        type="text"
                        placeholder="e.g. CleanPower Ltd."
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="practiceArea">Relevant Practice Area</label>
                    <select
                      id="practiceArea"
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    >
                      {practices.map((p) => (
                        <option key={p.slug} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject / Brief Summary *</label>
                    <input
                      id="subject"
                      required
                      type="text"
                      placeholder="e.g. CERC Tariff True-Up Petition representation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Matter Details &amp; Context *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Please outline the nature of the matter, forum, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="form-disclaimer">
                    <strong>Notice:</strong> Please do not include confidential or legally privileged information in this initial enquiry form. Formal representation begins only upon execution of an engagement mandate.
                  </div>

                  <button className="button button-gold" style={{ width: '100%', justifyContent: 'center' }} type="submit">
                    <span>Send Confidential Enquiry</span>
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Practice Areas Directory Grid */}
        <section className="section" style={{ borderTop: '1px solid var(--line)', background: '#ffffff' }}>
          <div className="section-label">02 <span>Practice Directory</span></div>
          <div style={{ marginTop: '30px' }}>
            <p className="eyebrow">Explore Our Disciplines</p>
            <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', margin: '0 0 40px' }}>
              Direct access to our <i>legal capabilities.</i>
            </h2>
          </div>

          <div className="capabilities-grid">
            {practices.map((p) => (
              <Link href={`/practice-areas/${p.slug}`} className="capability-card" key={p.slug}>
                <div>
                  <div className="capability-top">
                    <span className="capability-number">{p.number}</span>
                    <ArrowUpRight size={18} color="var(--gold)" />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.short}</p>
                </div>
                <span className="text-link">View Practice Page <ArrowUpRight size={14} /></span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
