import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, Scale, ShieldCheck, Building2, Landmark } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { practices } from '@/lib/practices'

export const metadata: Metadata = {
  title: 'Practice Disciplines & Specialized Chambers | Sharp Legal & Co.',
  description:
    'Explore the full spectrum of specialized legal disciplines at Sharp Legal & Co. From Electricity & Energy Law to Commercial Litigation, Corporate Advisory, Arbitration, and Regulatory Advocacy.',
  alternates: { canonical: '/practice-areas' },
  openGraph: {
    title: 'Practice Disciplines | Sharp Legal & Co. Advocates · Solicitors',
    description:
      'Seven specialized chambers practices designed for high-stakes regulatory proceedings, commercial trials, and strategic corporate transactions across India.',
    type: 'website',
  },
}

export default function PracticeAreasPage() {
  return (
    <SiteShell>
      <main>
        {/* PAGE HERO */}
        <PageHero
          breadcrumbs={[{ label: 'Practice Areas' }]}
          eyebrow="CHAMBERS DISCIPLINES & AREAS OF PRACTICE"
          title="Focused legal depth for"
          italic="high-stakes mandates."
          intro="Sharp Legal & Co. delivers specialized counsel and authoritative advocacy across seven core legal disciplines where regulatory volatility, financial scale, and statutory complexity converge."
          bgImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80"
        />

        {/* SECTION 01: INSTITUTIONAL PRACTICE ARCHITECTURE */}
        <section className="section">
          <div className="section-label">01 <span>Practice Architecture</span></div>
          <div style={{ marginTop: '40px', maxWidth: '840px' }}>
            <p className="eyebrow">DISCIPLINED ADVOCACY &amp; STRATEGY</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 64px)', margin: '0 0 20px' }}>
              Structured for <i>clarity, depth, and decisive action.</i>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7' }}>
              Our practice groups are organized around specific statutory frameworks, industrial economics, and regulatory authorities. Each vertical is led directly by senior practitioners who integrate acute academic rigor with veteran courtroom presence across trial, appellate, and arbitral forums nationwide.
            </p>
          </div>

          {/* Practice Overview List */}
          <div className="practice-overview-list" style={{ marginTop: '60px' }}>
            {practices.map((p) => (
              <div className="practice-overview-row" key={p.slug}>
                <span className="practice-overview-num">{p.number}</span>
                <div className="practice-overview-content">
                  <p className="eyebrow" style={{ marginBottom: '8px' }}>PRACTICE VERTICAL {p.number}</p>
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>
                  
                  <div className="practice-capabilities-tags">
                    {p.bullets.slice(0, 3).map((b, idx) => (
                      <span className="practice-tag" key={idx}>{b}</span>
                    ))}
                  </div>

                  <Link href={`/practice-areas/${p.slug}`} className="button button-gold">
                    <span>Explore Practice Area</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

                <div className="practice-overview-media">
                  <img src={p.image} alt={p.title} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 02: FORUM REPRESENTATION MATRIX */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">02 <span>Judicial &amp; Regulatory Footprint</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">PAN-INDIA TRIBUNALS &amp; BENCHES</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 60px)', margin: '0 0 16px' }}>
              Active representation across <i>apex forums.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '16px', lineHeight: '1.65' }}>
              Our advocates appear before specialized statutory commissions, appellate tribunals, and constitutional courts across India.
            </p>
          </div>

          <div className="sector-cards-grid" style={{ marginTop: '45px' }}>
            <div className="sector-card">
              <div className="sector-card-icon">
                <Scale size={20} />
              </div>
              <h3>Constitutional Courts</h3>
              <p>
                Original and appellate advocacy in Writ Petitions, Special Leave Petitions (SLP), and Statutory Appeals.
              </p>
              <div className="sector-card-tags">
                <span>Supreme Court of India</span>
                <span>Delhi High Court</span>
                <span>Bombay High Court</span>
                <span>State High Courts</span>
              </div>
            </div>

            <div className="sector-card">
              <div className="sector-card-icon">
                <Landmark size={20} />
              </div>
              <h3>Sectoral Commissions</h3>
              <p>
                Comprehensive representation in tariff petitions, regulatory disputes, licensing conditions, and compliance hearings.
              </p>
              <div className="sector-card-tags">
                <span>CERC</span>
                <span>State Commissions (SERCs)</span>
                <span>PNGRB</span>
                <span>CCI / TRAI</span>
              </div>
            </div>

            <div className="sector-card">
              <div className="sector-card-icon">
                <Building2 size={20} />
              </div>
              <h3>Specialized Tribunals</h3>
              <p>
                Statutory appellate defense challenging regulatory orders, penalty determinations, and insolvency proceedings.
              </p>
              <div className="sector-card-tags">
                <span>APTEL (Electricity)</span>
                <span>NCLAT / NCLT (IBC)</span>
                <span>TDSAT (Telecom/Media)</span>
                <span>REAT (RERA Appeals)</span>
              </div>
            </div>

            <div className="sector-card">
              <div className="sector-card-icon">
                <ShieldCheck size={20} />
              </div>
              <h3>Arbitration Seats</h3>
              <p>
                Advocating in high-value commercial and infrastructure arbitrations under premier institutional and ad-hoc frameworks.
              </p>
              <div className="sector-card-tags">
                <span>SIAC (Singapore)</span>
                <span>LCIA (London)</span>
                <span>DIAC (Delhi)</span>
                <span>MCIA (Mumbai)</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXECUTIVE CTA */}
        <CTA
          eyebrow="CONFIDENTIAL DELIBERATION"
          heading="Have a matter that requires careful legal thinking?"
          buttonText="Initiate Deliberation"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
