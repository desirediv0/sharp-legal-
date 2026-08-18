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
        <PageHero
          breadcrumbs={[{ label: 'Insights' }]}
          eyebrow="INSIGHTS"
          title="Perspectives on law,"
          italic="regulation and business."
          intro="A considered view of legal developments, regulatory questions and issues affecting businesses and regulated sectors."
          bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=85"
        />

        <section className="section">
          <div className="section-label">01 <span>Featured Analysis</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">Spotlight</p>
          </div>

          {/* Featured Article */}
          <div className="featured-insight-card">
            <div className="featured-insight-media">
              <img src={featured.image} alt={featured.title} />
            </div>
            <div className="featured-insight-content">
              <div className="featured-insight-meta">
                <span className="eyebrow" style={{ margin: 0 }}>{featured.category}</span>
                <span style={{ color: 'var(--muted)', fontSize: '11px' }}>{featured.readTime}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div>
                <Link href={`/insights/${featured.slug}`} className="button button-gold">
                  <span>Read Insight</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="section-label" style={{ marginTop: '80px', marginBottom: '30px' }}>
            02 <span>Publications &amp; Articles</span>
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
                      <span>Read Article</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CTA
          heading="Have questions regarding recent legal or regulatory developments?"
          buttonText="Start a Conversation"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
