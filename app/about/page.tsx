import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, ShieldCheck, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { practices, address, phone, email } from '@/lib/practices'

export const metadata: Metadata = {
  title: 'The Firm & Institutional Lineage | Sharp Legal & Co.',
  description:
    'Founded in 2012, Sharp Legal & Co. is a premier techno-legal law firm advising corporations, energy conglomerates, and financial institutions across India. Headquartered in Gurugram (Delhi NCR) with Pan-India practice.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'The Firm | Sharp Legal & Co. Advocates · Solicitors · Consultants',
    description:
      'Chambers profile of Sharp Legal & Co. — Combining deep sector literacy with senior-advocate led courtroom advocacy across regulatory commissions, High Courts, and the Supreme Court of India.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        {/* PAGE HERO */}
        <PageHero
          breadcrumbs={[{ label: 'The Firm' }]}
          eyebrow="CHAMBERS PROFILE & INSTITUTIONAL LINEAGE"
          title="Where statutory precision meets"
          italic="sectoral reality."
          intro="Sharp Legal & Co. was founded on a singular conviction: that in capital-intensive and heavily regulated industries, commercial leadership requires counsel possessing equal mastery in statutory jurisprudence and sectoral mechanics."
          bgImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85"
        />

        {/* SECTION 01: INSTITUTIONAL LINEAGE */}
        <section className="section">
          <div className="section-label">01 <span>Institutional Lineage</span></div>
          <div className="editorial-split" style={{ marginTop: '50px' }}>
            <div className="editorial-text">
              <p className="eyebrow">A DECADE OF TECHNO-LEGAL ADVOCACY</p>
              <h2>Built for the complex mandates of <i>modern India.</i></h2>
              <div className="editorial-paragraphs">
                <p>
                  Sharp Legal &amp; Co. was established in 2012 to address an acute structural disconnect in legal advisory: the gap between abstract doctrinal law and the complex technical realities of regulated industry. In capital-intensive sectors—such as electricity generation, interstate power transmission, renewable open access, and infrastructure concessioning—generalist legal counsel routinely falters on technical subtleties.
                </p>
                <p>
                  Headquartered at Gurugram (Delhi NCR) with active advocacy across apex tribunals and High Courts nationwide, our chambers combine senior courtroom gravitas with engineering, tariff, and commercial literacy. We represent clients across the complete regulatory spectrum—from State and Central Electricity Regulatory Commissions (SERCs/CERC) and the Appellate Tribunal for Electricity (APTEL) to the National Company Law Tribunal (NCLT), High Courts, and the Supreme Court of India.
                </p>
                <p>
                  Unlike factory-style law firms where briefs are routinely delegated down to inexperienced associates, Sharp Legal &amp; Co. insists on senior practitioner-led strategy from initial drafting to apex courtroom argument. We build rigorous legal roadmaps that enable organizations to navigate uncertainty with quiet confidence.
                </p>
              </div>

              <div className="intro-highlights" style={{ marginTop: '28px' }}>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Techno-Legal Mastery across Energy, Infrastructure &amp; Tariffs</span>
                </div>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Senior-Advocate Led Strategy from Initial Pleading to Apex Appeal</span>
                </div>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Pan-India Footprint before Regulatory Commissions, High Courts &amp; Supreme Court</span>
                </div>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Uncompromising Professional Ethics &amp; Bar Council of India Compliance</span>
                </div>
              </div>
            </div>

            <div className="editorial-media">
              <div className="editorial-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85"
                  alt="Sharp Legal & Co. Chambers Architecture and Institutional Lineage"
                />
                <div className="editorial-badge">
                  <ShieldCheck size={18} color="var(--gold)" />
                  <span>EST. 2012 · SENIOR ADVOCATES &amp; SOLICITORS</span>
                </div>
                <div className="editorial-caption">
                  <span>Chambers of Advocacy · Satya The Hive, Sector-102, Gurugram · Delhi NCR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: CHAMBERS PHILOSOPHY */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">02 <span>Guiding Principles</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">FOUNDATIONAL DOCTRINE</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              The three immutable standards of our <i>practice.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px', lineHeight: '1.65' }}>
              Every brief entrusted to our chambers is anchored in three non-negotiable operational principles.
            </p>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-card">
              <h3>Clarity over Obfuscation</h3>
              <p>
                We distill complex statutory contradictions, technical grid regulations, and commercial conflicts into decisive, unhedged counsel. In high-stakes matters, our advice provides corporate boards and leadership teams with actionable strategic direction rather than equivocal caveats.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Strategic Commercial Alignment</h3>
              <p>
                Litigation is not an end in itself; it is a precision instrument to protect balance sheets and corporate continuity. Every petition, contractual covenant, and dispute roadmap is constructed to advance our clients&apos; broader commercial objectives and statutory viability.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Authoritative Apex Advocacy</h3>
              <p>
                Our advocates command the respect of specialized commissions, arbitral tribunals, High Courts, and the Supreme Court of India. Through forensic evidentiary preparation, deep precedent mastery, and commanding courtroom poise, we ensure our clients prevail under the closest judicial scrutiny.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 03: WHAT DEFINES US (DARK SECTION) */}
        <section className="dark-section">
          <div className="dark-inner">
            <div className="section-label light">03 <span style={{ color: 'var(--muted-light)' }}>Institutional Distinction</span></div>
            <div style={{ marginTop: '30px' }}>
              <p className="eyebrow" style={{ color: 'var(--gold)' }}>DISTINCTIVE BENCHMARKS</p>
              <h2>What Defines <i>Sharp Legal &amp; Co.</i></h2>
            </div>

            <div className="defines-grid">
              <div className="defines-card">
                <span className="defines-number">01</span>
                <h3>Sector Fluency &amp; Techno-Legal Rigor</h3>
                <p>
                  Deep engineering, economic, and operational literacy across power systems, transmission wheeling, PPA tariff true-ups, and renewable open access regimes.
                </p>
              </div>

              <div className="defines-card">
                <span className="defines-number">02</span>
                <h3>Multi-Jurisdictional Courtroom Agility</h3>
                <p>
                  Command across specialized tribunals (CERC, APTEL, NCLT), High Courts, and the Supreme Court of India, handling apex constitutional and appellate briefs.
                </p>
              </div>

              <div className="defines-card">
                <span className="defines-number">03</span>
                <h3>Pre-Emptive Dispute Risk Mitigation</h3>
                <p>
                  Structuring concession agreements, joint ventures, and reservation-of-rights notices that preempt dispute escalation before litigation becomes inevitable.
                </p>
              </div>

              <div className="defines-card">
                <span className="defines-number">04</span>
                <h3>Senior-Partner Led Direct Counsel</h3>
                <p>
                  Direct personal engagement of seasoned practitioners at every stage of legal deliberation, guaranteeing undivided strategic attention and accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: LEGAL CAPABILITIES & PRACTICE DISCIPLINES */}
        <section className="section">
          <div className="section-label">04 <span>Practice Disciplines</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">COMPREHENSIVE CAPABILITIES</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              Command across <i>seven legal frontiers.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px', lineHeight: '1.65' }}>
              Specialized practice groups designed to handle high-stakes regulatory proceedings, commercial trials, and strategic corporate transactions.
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
                <span className="text-link">Explore Practice Area <ArrowUpRight size={14} /></span>
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION 05: CHAMBERS WORKFLOW & PRACTICE METHODOLOGY */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">05 <span>Chambers Methodology</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">A STRUCTURED FOUR-STAGE PROTOCOL</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              The four phases of <i>chambers execution.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px', lineHeight: '1.65' }}>
              From initial statutory fact-finding to decisive courtroom enforcement, our matters follow a disciplined, time-tested framework.
            </p>
          </div>

          <div className="timeline-grid">
            <div className="timeline-card">
              <span className="timeline-step">01</span>
              <h3>Forensic Audit</h3>
              <p>
                We dissect the contractual matrix, operational records, and engineering metrics alongside governing statutory enactments to establish an airtight evidentiary baseline.
              </p>
            </div>

            <div className="timeline-card">
              <span className="timeline-step">02</span>
              <h3>Regulatory Mapping</h3>
              <p>
                We benchmark dispute parameters against recent tribunal precedents, commission rulings, and constitutional doctrines to anticipate adversary stratagems.
              </p>
            </div>

            <div className="timeline-card">
              <span className="timeline-step">03</span>
              <h3>Tactical Positioning</h3>
              <p>
                We structure formal legal notices, reservation of rights, and settlement frameworks that insulate clients from procedural liabilities while securing pivotal leverage.
              </p>
            </div>

            <div className="timeline-card">
              <span className="timeline-step">04</span>
              <h3>Apex Advocacy</h3>
              <p>
                We present oral arguments and written submissions with commanding clarity before regulatory commissions and courts, followed by prompt decree execution.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 06: CHAMBERS FOOTPRINT & STRATEGIC REACH */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">06 <span>Institutional Footprint</span></div>
          <div className="chambers-reach-block">
            <div className="chambers-reach-info">
              <p className="eyebrow" style={{ margin: '0 0 12px' }}>NATIONAL ADVOCACY FOOTPRINT</p>
              <h3>Strategic proximity to India&apos;s apex judicial corridor.</h3>
              <p>
                Located in Gurugram (Delhi NCR), our chambers provide immediate accessibility to the Supreme Court of India, Delhi High Court, Central Electricity Regulatory Commission (CERC), and specialized national tribunals.
              </p>
              <div className="chambers-reach-points">
                <div className="chambers-reach-point">
                  <CheckCircle2 size={16} />
                  <span>Apex Court &amp; Appellate Tribunals: Supreme Court, Delhi High Court, APTEL, NCLAT</span>
                </div>
                <div className="chambers-reach-point">
                  <CheckCircle2 size={16} />
                  <span>Sectoral Commissions: Central &amp; State Electricity Regulatory Commissions nationwide</span>
                </div>
                <div className="chambers-reach-point">
                  <CheckCircle2 size={16} />
                  <span>Pan-India Commercial Arbitration: Institutional &amp; ad-hoc proceedings across India</span>
                </div>
              </div>
            </div>

            <div className="chambers-coords-box">
              <h4>CHAMBERS SECRETARIAT</h4>
              <div className="chambers-coords-address">
                <MapPin size={15} style={{ display: 'inline', marginRight: '6px', color: 'var(--gold)' }} />
                <span>{address}</span>
              </div>
              <div className="chambers-coords-contacts">
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="chambers-coords-link">
                  <Phone size={13} style={{ color: 'var(--gold)' }} />
                  <span>{phone}</span>
                </a>
                <a href={`mailto:${email}`} className="chambers-coords-link">
                  <Mail size={13} style={{ color: 'var(--gold)' }} />
                  <span>{email}</span>
                </a>
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
