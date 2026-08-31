'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { firmInsights } from '@/lib/practices'

const categories = ['All', 'Energy', 'Regulatory', 'Arbitration', 'Corporate', 'Litigation', 'RERA']

export default function InsightsPage() {
  const [selectedCat, setSelectedCat] = useState('All')

  const featured = firmInsights[0]

  const filteredInsights = firmInsights.filter(insight => {
    if (selectedCat === 'All') return true
    return insight.category.toLowerCase().includes(selectedCat.toLowerCase())
  })

  return (
    <SiteShell>
      <main>
        {/* PAGE HERO */}
        <PageHero
          breadcrumbs={[{ label: 'Insights' }]}
          eyebrow="JURISPRUDENTIAL PERSPECTIVES & REGULATORY COMMENTARY"
          title="Authoritative dispatches from the"
          italic="regulatory vanguard."
          intro="Rigorous legal analysis, strategic commentary on landmark rulings, and dispatches on statutory shifts shaping India's energy, infrastructure, and corporate landscape."
          bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=85"
        />

        <section className="section">
          {/* SECTION 01: SPOTLIGHT BRIEFING */}
          <div className="section-label">01 <span>Chambers Editorial</span></div>
          <div style={{ marginTop: '30px', marginBottom: '36px' }}>
            <p className="eyebrow">SPOTLIGHT ANALYSIS</p>
            <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', margin: 0 }}>
              Lead Jurisprudential <i>Briefing.</i>
            </h2>
          </div>

          {/* Featured Article Card */}
          <div className="featured-insight-card">
            <div className="featured-insight-media">
              <img src={featured.image} alt={featured.title} />
            </div>
            <div className="featured-insight-content">
              <div className="featured-insight-meta">
                <span className="eyebrow" style={{ margin: 0 }}>{featured.category}</span>
                <span style={{ color: 'var(--muted)', fontSize: '11px', letterSpacing: '0.08em' }}>{featured.readTime}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div>
                <Link href={`/insights/${featured.slug}`} className="button button-gold">
                  <span>Read Full Brief</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* SECTION 02: FILTERABLE PUBLICATIONS */}
          <div className="section-label" style={{ marginTop: '90px', marginBottom: '30px' }}>
            02 <span>Publications &amp; Legal Commentaries</span>
          </div>

          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={`filter-btn ${selectedCat === cat ? 'is-active' : ''}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="insight-grid-v2">
            {filteredInsights.map((item) => (
              <article className="insight-card-v2" key={item.slug}>
                <div className="insight-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="insight-card-body">
                  <div className="insight-card-meta">
                    <span className="insight-cat">{item.category}</span>
                    <span className="insight-readtime">{item.readTime}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="insight-card-footer">
                    <span>{item.date}</span>
                    <Link href={`/insights/${item.slug}`} className="text-link">
                      <span>Read Brief</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXECUTIVE CTA */}
        <CTA
          eyebrow="CONFIDENTIAL DELIBERATION"
          heading="Need strategic clarity on recent regulatory or statutory changes?"
          buttonText="Initiate Deliberation"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
