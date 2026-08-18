import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { practices } from '@/lib/practices'

export const metadata = {
  title: 'The Firm | Sharp Legal & Co.',
  description: 'Sharp Legal & Co. brings together legal expertise, sector understanding and a practical approach to complex disputes, regulation and corporate matters.'
}

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'The Firm' }]}
          eyebrow="THE FIRM"
          title="Legal thinking shaped around"
          italic="complexity."
          intro="Sharp Legal & Co. brings together legal expertise, sector understanding and a practical approach to complex disputes, regulation and corporate matters."
          bgImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85"
        />

        {/* Intro Section */}
        <section className="section">
          <div className="section-label">01 <span>The Firm Profile</span></div>
          <div className="editorial-split" style={{ marginTop: '50px' }}>
            <div className="editorial-text">
              <p className="eyebrow">A Considered Approach</p>
              <h2>A techno-legal team with a <i>practical perspective.</i></h2>
              <div className="editorial-paragraphs">
                <p>
                  Sharp Legal &amp; Co. is a strong techno-legal team of professionals specializing in electricity and energy law, regulatory litigation, commercial disputes, and corporate advisory.
                </p>
                <p>
                  The firm combines deep sectoral expertise with a practical, solution-oriented approach to deliver effective representation before regulatory commissions, courts, and tribunals across India.
                </p>
                <p>
                  Our work is built on the principle that the most effective legal counsel occurs at the intersection of regulatory depth, procedural mastery, and acute commercial awareness. We do not offer abstract legal theories; we build rigorous legal roadmaps that enable organizations to act with quiet confidence.
                </p>
              </div>
            </div>
            <div className="editorial-media">
              <div className="editorial-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85"
                  alt="Sharp Legal & Co. Architectural Perspective"
                />
                <div className="editorial-caption">
                  <span>Advocates · Solicitors · Consultants</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">02 <span>Guiding Principles</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">Core Standards</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              Our <i>Philosophy.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px' }}>
              Three fundamental commitments anchor our advice, trial preparation, and client relationships across every practice area.
            </p>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-card">
              <h3>Clarity</h3>
              <p>
                We simplify complex legal and regulatory issues into clear strategic directions. In matters where statutory rules and market realities intertwine, our advice distills intricate technical questions into actionable decisions.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Strategy</h3>
              <p>
                Every matter is approached with attention to its legal, commercial and practical dimensions. We structure pleadings, contractual covenants, and dispute roadmaps that preserve our clients’ core business objectives.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Representation</h3>
              <p>
                Our focus remains on effective advocacy and practical legal solutions. Whether appearing before statutory commissions, appellate tribunals, or constitutional courts, we deliver authoritative representation.
              </p>
            </div>
          </div>
        </section>

        {/* What Defines Us - Dark Section */}
        <section className="dark-section">
          <div className="dark-inner">
            <div className="section-label light">03 <span style={{ color: 'var(--muted-light)' }}>Institutional Character</span></div>
            <div style={{ marginTop: '30px' }}>
              <p className="eyebrow" style={{ color: 'var(--gold)' }}>Distinctive Benchmarks</p>
              <h2>What Defines <i>Sharp Legal &amp; Co.</i></h2>
            </div>

            <div className="defines-grid">
              <div className="defines-card">
                <span className="defines-number">01</span>
                <h3>Sector Understanding</h3>
                <p>
                  Particular focus on energy, electricity, and regulated sectors, combining engineering fluency with statutory mastery.
                </p>
              </div>

              <div className="defines-card">
                <span className="defines-number">02</span>
                <h3>Commercial Perspective</h3>
                <p>
                  Understanding the business implications behind legal decisions, ensuring that legal remedies serve long-term enterprise value.
                </p>
              </div>

              <div className="defines-card">
                <span className="defines-number">03</span>
                <h3>Strategic Representation</h3>
                <p>
                  Focused, persuasive advocacy before regulatory commissions, arbitral tribunals, High Courts, and the Supreme Court.
                </p>
              </div>

              <div className="defines-card">
                <span className="defines-number">04</span>
                <h3>Practical Counsel</h3>
                <p>
                  Direct, unhedged advice designed to help leadership teams make informed, decisive moves with procedural certainty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Legal Capabilities */}
        <section className="section">
          <div className="section-label">04 <span>Practice Disciplines</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">Comprehensive Counsel</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              Our Legal <i>Capabilities.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px' }}>
              Specialized legal practices designed to handle high-stakes regulatory proceedings, commercial trials, and strategic corporate matters.
            </p>
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
                <span className="text-link">Explore Practice <ArrowUpRight size={14} /></span>
              </Link>
            ))}
          </div>
        </section>

        {/* Our Approach Timeline */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">05 <span>Methodology</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">A Structured Process</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              Our <i>Approach.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px' }}>
              From initial assessment to decisive courtroom advocacy, we execute a disciplined 4-stage workflow.
            </p>
          </div>

          <div className="timeline-grid">
            <div className="timeline-card">
              <span className="timeline-step">01</span>
              <h3>Understand</h3>
              <p>
                Understand the facts, objectives, commercial context, and legal environment with meticulous document review.
              </p>
            </div>

            <div className="timeline-card">
              <span className="timeline-step">02</span>
              <h3>Assess</h3>
              <p>
                Identify risks, opportunities, and the relevant regulatory or legal framework to map potential outcomes.
              </p>
            </div>

            <div className="timeline-card">
              <span className="timeline-step">03</span>
              <h3>Strategize</h3>
              <p>
                Develop a focused and practical legal strategy that aligns evidentiary proof with clear commercial aims.
              </p>
            </div>

            <div className="timeline-card">
              <span className="timeline-step">04</span>
              <h3>Represent</h3>
              <p>
                Provide representation and counsel throughout the matter with authoritative courtroom advocacy and negotiation.
              </p>
            </div>
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
