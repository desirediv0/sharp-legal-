'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle, ShieldCheck, MapPin } from 'lucide-react'
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
        {/* PAGE HERO */}
        <PageHero
          breadcrumbs={[{ label: 'Contact' }]}
          eyebrow="CONFIDENTIAL CHAMBERS ENGAGEMENT"
          title="Initiate a strategic deliberation with"
          italic="our counsel."
          intro="Whether facing imminent regulatory deadlines, preparing for high-stakes commercial arbitration, or structuring complex corporate transactions, our partners provide prompt, confidential counsel."
          bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85"
        />

        <section className="section">
          <div className="contact-grid-v2">
            {/* Left Column: Direct Contact Info */}
            <div className="contact-info-panel">
              <div className="section-label">01 <span>Direct Engagement</span></div>
              <h2 style={{ marginTop: '20px', fontSize: 'clamp(36px, 4vw, 56px)' }}>
                Independent counsel. <i>Committed to your enterprise.</i>
              </h2>
              <p className="contact-intro-text">
                Sharp Legal &amp; Co. represents corporations, energy developers, infrastructure conglomerates, and institutional investors before regulatory commissions, arbitral tribunals, High Courts, and the Supreme Court of India. Our chambers secretariat ensures every inquiry is directed immediately to the relevant practice partner.
              </p>

              <div className="contact-direct-cards">
                <div className="contact-direct-card">
                  <span className="contact-direct-label">Chambers Telephone</span>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-direct-val">
                    {phone}
                  </a>
                </div>

                <div className="contact-direct-card">
                  <span className="contact-direct-label">Confidential Inquiries</span>
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
                  <span className="contact-direct-label">Chambers Coordinates</span>
                  <span className="contact-direct-val" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                    {address}
                  </span>
                </div>
              </div>

              {/* Proximity Stamp */}
              <div style={{
                marginTop: '32px',
                padding: '18px 20px',
                background: '#ffffff',
                border: '1px solid var(--line)',
                borderLeft: '3px solid var(--gold)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <ShieldCheck size={20} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '12.5px', color: 'var(--muted)', lineHeight: '1.55' }}>
                  <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '11px' }}>
                    National Judicial Corridor Proximity
                  </strong>
                  Immediate access to Supreme Court of India, Delhi High Court, CERC, APTEL, and NCLAT from our Gurugram (Delhi NCR) chambers.
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form */}
            <div className="contact-form-panel">
              <div className="contact-form-header">
                <p className="eyebrow" style={{ margin: 0, marginBottom: '6px' }}>CONFIDENTIAL BRIEFING</p>
                <h3>Initiate a Consultation</h3>
                <p>Please provide the preliminary parameters of your inquiry for partner review.</p>
              </div>

              {sent ? (
                <div className="form-success-box">
                  <CheckCircle size={44} color="var(--gold)" style={{ margin: '0 auto 16px' }} />
                  <span>Brief Received &amp; Logged.</span>
                  <p>
                    Thank you for contacting Sharp Legal &amp; Co. Our designated practice lead will review the parameters of your inquiry and connect with you under strict confidentiality.
                  </p>
                  <button
                    type="button"
                    className="button button-gold"
                    style={{ marginTop: '24px' }}
                    onClick={() => setSent(false)}
                  >
                    Submit Another Inquiry
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
                      <label htmlFor="email">Corporate Email *</label>
                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="e.g. r.sharma@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Contact Number *</label>
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
                      <label htmlFor="organization">Entity / Enterprise Name</label>
                      <input
                        id="organization"
                        type="text"
                        placeholder="e.g. Bharat Energy Infrastructure Ltd."
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="practiceArea">Relevant Practice Discipline</label>
                    <select
                      id="practiceArea"
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    >
                      {practices.map((p) => (
                        <option key={p.slug} value={p.title}>
                          {p.number} — {p.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject / Judicial Forum *</label>
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
                    <label htmlFor="message">Matter Parameters &amp; Timelines *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Please outline the nature of the brief, key dispute or advisory questions, and critical procedural deadlines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="form-disclaimer">
                    <strong>Regulatory Note:</strong> Under the rules of the Bar Council of India, this preliminary communication does not create an attorney-client relationship. Formal advocate-client privilege attaches upon the execution of a professional engagement mandate.
                  </div>

                  <button className="button button-gold" style={{ width: '100%', justifyContent: 'center' }} type="submit">
                    <span>Submit Confidential Brief</span>
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 02: PRACTICE DIRECTORY */}
        <section className="section" style={{ borderTop: '1px solid var(--line)', background: '#ffffff' }}>
          <div className="section-label">02 <span>Chambers Directory</span></div>
          <div style={{ marginTop: '30px' }}>
            <p className="eyebrow">CHAMBERS VERTICALS</p>
            <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', margin: '0 0 36px' }}>
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
                <span className="text-link">Explore Practice Area <ArrowUpRight size={14} /></span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
