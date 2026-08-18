import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { practices } from '@/lib/practices'

export const metadata = {
  title: 'Practice Areas | Sharp Legal & Co.',
  description: 'Explore the full spectrum of legal disciplines at Sharp Legal & Co., from Electricity & Energy Law to Commercial Litigation, Corporate Advisory, and Regulatory Advocacy.'
}

export default function PracticeAreasPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Practice Areas' }]}
          eyebrow="PRACTICE AREAS"
          title="Focused legal expertise for"
          italic="complex matters."
          intro="Sharp Legal & Co. delivers specialized legal counsel and authoritative representation across seven core disciplines."
          bgImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80"
        />

        {/* Intro */}
        <section className="section">
          <div className="section-label">01 <span>Practice Overview</span></div>
          <div style={{ marginTop: '40px', maxWidth: '820px' }}>
            <p className="eyebrow">Disciplined Advocacy</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 64px)', margin: '0 0 20px' }}>
              Built for <i>clarity, depth, and decisive action.</i>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: '1.7' }}>
              Our practice groups are organized around specific industry dynamics and regulatory regimes. Each practice is led by lawyers who combine deep statutory knowledge with direct trial and advisory experience.
            </p>
          </div>

          <div className="practice-overview-list">
            {practices.map((p) => (
              <div className="practice-overview-row" key={p.slug}>
                <span className="practice-overview-num">{p.number}</span>
                <div className="practice-overview-content">
                  <p className="eyebrow" style={{ marginBottom: '8px' }}>CORE DISCIPLINE</p>
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>
                  
                  <div className="practice-capabilities-tags">
                    {p.bullets.slice(0, 3).map((b, idx) => (
                      <span className="practice-tag" key={idx}>{b}</span>
                    ))}
                  </div>

                  <Link href={`/practice-areas/${p.slug}`} className="button button-gold">
                    <span>Explore Practice</span>
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

        <CTA
          heading="Have a matter that requires careful legal thinking?"
          buttonText="Start a Conversation"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
