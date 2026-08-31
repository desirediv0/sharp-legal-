import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowUpRight,
  ShieldCheck,
  Scale,
  Compass,
  CheckCircle2,
  Zap,
  Building2,
  Landmark,
  Briefcase
} from 'lucide-react'
import { SiteShell, CTA } from '@/components/site-shell'
import { practices, firmInsights } from '@/lib/practices'

export const metadata: Metadata = {
  title: 'Sharp Legal & Co. | Advocates · Solicitors · Techno-Legal Consultants',
  description:
    'Sharp Legal & Co. is an elite techno-legal law firm advising corporations, energy developers, infrastructure conglomerates, and institutions across India. Specialized in electricity law, regulatory litigation, commercial arbitration, and corporate advisory.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sharp Legal & Co. | Precision in Law. Decisive in Outcome.',
    description:
      'Chambers of techno-legal advocates and consultants specializing in energy regulation, high-stakes commercial disputes, appellate litigation, and corporate advisory across India.',
    type: 'website',
  },
}

export default function Home() {
  const featuredPractices = practices.slice(0, 4)

  return (
    <SiteShell>
      <main>
        {/* HERO SECTION */}
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="eyebrow">ADVOCATES · SOLICITORS · TECHNO-LEGAL CONSULTANTS</p>
              <h1>
                Clarity in complexity.<br />
                <i>Decisive in outcome.</i>
              </h1>
              <p className="hero-copy">
                Sharp Legal &amp; Co. is a specialized techno-legal law firm. We advise corporations, infrastructure developers, energy utilities, and financial institutions navigating high-stakes regulatory, commercial, and judicial challenges across India.
              </p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/contact">
                  <span>Schedule a Consultation</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link className="button button-outline" href="/practice-areas">
                  <span>Explore Practice Areas</span>
                </Link>
              </div>

              <div className="hero-badges">
                <div className="hero-badge-item">
                  <span className="badge-dot" />
                  <span>Power &amp; Renewable Energy Specialists</span>
                </div>
                <div className="hero-badge-item">
                  <span className="badge-dot" />
                  <span>Supreme Court &amp; Appellate Advocates</span>
                </div>
                <div className="hero-badge-item">
                  <span className="badge-dot" />
                  <span>Commercial Arbitration &amp; Advisory</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85"
                  alt="Supreme Court and High Court Legal Advocacy - Sharp Legal & Co."
                  className="hero-main-img"
                />
                <div className="hero-image-overlay" />
                <div className="hero-image-badge">
                  <Scale size={16} color="var(--gold)" />
                  <div>
                    <strong>Chambers of Advocacy &amp; Advisory</strong>
                    <span>Gurugram (Delhi NCR) · Pan-India Jurisdictions</span>
                  </div>
                </div>
                <div className="hero-aside-card">
                  <span>EST.</span>
                  <strong>2012</strong>
                  <span>RIGOR · INTEGRITY · MASTERY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="trust-strip">
          <span>Techno-Legal Precision</span>
          <span>Senior-Led Strategy</span>
          <span>Apex Forum Mastery</span>
          <span>Uncompromising Ethics</span>
          <span>Commercially Anchored</span>
        </div>

        {/* SECTION 01: INSTITUTIONAL LINEAGE */}
        <section className="section intro-section">
          <div className="section-label">01 <span>Institutional Lineage</span></div>
          <div className="intro-grid">
            <div className="intro-text-col">
              <h2>
                Where legal acumen meets<br />
                <i>sectoral reality.</i>
              </h2>
              <div className="intro-body">
                <p>
                  In capital-intensive and heavily regulated sectors, legal counsel cannot afford to operate in an abstract vacuum. Effective representation requires an intricate understanding of grid physics, tariff formulas, project financing covenants, and statutory frameworks working in unison.
                </p>
                <p>
                  Founded in 2012, Sharp Legal &amp; Co. has established a formidable reputation as India&apos;s leading techno-legal chambers. We represent clients across the full regulatory and judicial hierarchy—from State and Central Electricity Regulatory Commissions (SERCs/CERC) and the Appellate Tribunal for Electricity (APTEL) to the National Company Law Tribunal (NCLT), High Courts across India, and the Supreme Court of India.
                </p>
                <div className="intro-highlights">
                  <div className="intro-highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>Techno-Legal Mastery across Energy, Transmission, and Renewable Tariffs</span>
                  </div>
                  <div className="intro-highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>Senior-Advocate Led Strategy from Initial Petition to Apex Appellate Review</span>
                  </div>
                  <div className="intro-highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>Pan-India Presence before Constitutional Courts &amp; Specialized Regulatory Benches</span>
                  </div>
                  <div className="intro-highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>Bespoke Corporate Advisory &amp; Proactive Dispute Avoidance Architecture</span>
                  </div>
                </div>
                <Link className="text-link" href="/about">
                  <span>Explore our chambers profile</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="intro-media-col">
              <div className="editorial-frame">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85"
                  alt="Sharp Legal & Co. Law Firm Chambers & Library"
                  className="editorial-img"
                />
                <div className="editorial-badge">
                  <ShieldCheck size={18} color="var(--gold)" />
                  <span>12+ Years of Trusted Chambers Practice</span>
                </div>
                <div className="editorial-caption">
                  <span>Techno-Legal Excellence · Senior Advocates &amp; Solicitors · Delhi NCR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: CORE PRACTICE DISCIPLINES */}
        <section className="practice-section">
          <div className="section practice-inner">
            <div className="section-label light">02 <span>Areas of Specialization</span></div>
            <div className="practice-heading">
              <div>
                <h2>
                  Focused depth for<br />
                  <i>consequential mandates.</i>
                </h2>
                <p className="practice-subtext">
                  Strategic representation across 7 integrated disciplines where regulatory volatility, financial scale, and statutory complexity converge.
                </p>
              </div>
              <Link className="button button-gold-outline" href="/practice-areas">
                <span>Explore all 7 practices</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Featured Practice Cards with Imagery */}
            <div className="practice-cards-grid">
              {featuredPractices.map((p) => (
                <Link href={`/practice-areas/${p.slug}`} key={p.slug} className="practice-card">
                  <div className="practice-card-img-wrap">
                    <img src={p.image} alt={p.title} className="practice-card-img" />
                    <div className="practice-card-overlay" />
                    <span className="practice-card-num">{p.number}</span>
                  </div>
                  <div className="practice-card-body">
                    <h3>{p.title}</h3>
                    <p>{p.short}</p>
                    <span className="practice-card-link">
                      <span>Explore Discipline</span>
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Complete Practice Roster List */}
            <div className="practice-list">
              {practices.map((p, i) => (
                <Link className="practice-item" href={`/practice-areas/${p.slug}`} key={p.slug}>
                  <span className="practice-number">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <h3>{p.title}</h3>
                    <p>{p.short}</p>
                  </span>
                  <ArrowUpRight className="practice-arrow" size={24} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 03: SECTORAL COVERAGE */}
        <section className="section sectors-section">
          <div className="section-label">03 <span>Sectoral Footprint</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">INDUSTRY IMMERSION</p>
            <h2 style={{ fontSize: 'clamp(42px, 5.5vw, 76px)', margin: '0 0 16px' }}>
              Industry fluency across<br />
              <i>critical infrastructure.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '620px', fontSize: '16px', lineHeight: '1.65' }}>
              Our practice is anchored in sectors vital to national economic expansion. We translate commercial objectives into durable statutory protection.
            </p>
          </div>

          <div className="sector-cards-grid">
            <div className="sector-card">
              <div className="sector-card-icon">
                <Zap size={20} />
              </div>
              <h3>Power &amp; Renewable Energy</h3>
              <p>
                Advising conventional generators, solar and wind IPPs, transmission utilities, distribution licensees, and green hydrogen developers on tariff structures, Change in Law compensations, and grid connectivity.
              </p>
              <div className="sector-card-tags">
                <span>PPAs &amp; Tariffs</span>
                <span>CERC &amp; APTEL</span>
                <span>Green Open Access</span>
                <span>Grid Code</span>
              </div>
            </div>

            <div className="sector-card">
              <div className="sector-card-icon">
                <Building2 size={20} />
              </div>
              <h3>Heavy Infrastructure &amp; EPC</h3>
              <p>
                Counseling concessionaires, EPC contractors, and project developers in highways, metros, ports, and urban transit systems on contract administration, delay prolongation claims, and FIDIC disputes.
              </p>
              <div className="sector-card-tags">
                <span>EPC Contracts</span>
                <span>Delay Claims</span>
                <span>Arbitration</span>
                <span>Concessions</span>
              </div>
            </div>

            <div className="sector-card">
              <div className="sector-card-icon">
                <Landmark size={20} />
              </div>
              <h3>Banking &amp; Financial Institutions</h3>
              <p>
                Representing commercial lenders, NBFCs, asset reconstruction companies, and corporate borrowers across debt restructuring, resolution processes under IBC, and SARFAESI proceedings.
              </p>
              <div className="sector-card-tags">
                <span>IBC / NCLT</span>
                <span>Debt Restructure</span>
                <span>SARFAESI</span>
                <span>Enforcement</span>
              </div>
            </div>

            <div className="sector-card">
              <div className="sector-card-icon">
                <Briefcase size={20} />
              </div>
              <h3>Conglomerates &amp; Enterprises</h3>
              <p>
                Providing board-level strategic counsel to diversified corporate groups on joint ventures, cross-border commercial transactions, shareholder governance, and proactive dispute mitigation.
              </p>
              <div className="sector-card-tags">
                <span>Joint Ventures</span>
                <span>Commercial Suits</span>
                <span>Regulatory Defense</span>
                <span>RERA</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: CHAMBERS METHODOLOGY */}
        <section className="section approach-section">
          <div className="section-label">04 <span>Chambers Methodology</span></div>
          <div className="approach-grid">
            <div className="approach-media-col">
              <div className="editorial-frame">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85"
                  alt="Sharp Legal Strategic Deliberation and Chambers Counsel"
                  className="editorial-img"
                />
                <div className="editorial-badge">
                  <Compass size={18} color="var(--gold)" />
                  <span>Exacting Problem-Solving</span>
                </div>
                <div className="editorial-caption">
                  <span>Executive Boardroom Advisory &amp; Strategic Trial Advocacy</span>
                </div>
              </div>
            </div>

            <div className="approach-copy">
              <h2>
                Calm deliberation.<br />
                <i>Unyielding advocacy.</i>
              </h2>
              <p>
                Our counsel is neither reactive nor formulaic. We approach every matter through an exacting four-phase strategic blueprint designed to insulate clients from procedural vulnerabilities while maximizing tactical leverage.
              </p>
              <div className="principles">
                <div>
                  <div>
                    <b>Techno-Legal Deconstruction</b>
                    <p className="principle-sub">
                      We dissect generation metrics, grid parameters, and cash flow models alongside statutory codes to unearth pivotal factual leverage.
                    </p>
                  </div>
                  <span>01</span>
                </div>
                <div>
                  <div>
                    <b>Regulatory &amp; Jurisprudential Mapping</b>
                    <p className="principle-sub">
                      We benchmark dispute facts against evolving regulatory orders, tribunal precedents, and judicial doctrines to forecast counter-moves.
                    </p>
                  </div>
                  <span>02</span>
                </div>
                <div>
                  <div>
                    <b>Pre-Litigation Tactical Positioning</b>
                    <p className="principle-sub">
                      We structure statutory notices, letters of dispute, and negotiation posture to preserve critical rights and establish decisive courtroom leverage.
                    </p>
                  </div>
                  <span>03</span>
                </div>
                <div>
                  <div>
                    <b>Apex Courtroom &amp; Arbitral Representation</b>
                    <p className="principle-sub">
                      We present oral arguments and written pleadings with exceptional clarity and authority, commanding respect across judicial benches.
                    </p>
                  </div>
                  <span>04</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: EMPIRICAL BENCHMARKS */}
        <section className="credibility">
          <div className="section credibility-inner">
            <div>
              <p className="eyebrow">EMPIRICAL DISTINCTION &amp; REACH</p>
              <h2>
                Institutional trust,<br />
                <i>measured in results.</i>
              </h2>
            </div>
            <div className="metrics">
              <div>
                <strong>12+</strong>
                <span>years of continuous practice</span>
              </div>
              <div>
                <strong>7</strong>
                <span>core practice verticals</span>
              </div>
              <div>
                <strong>₹1,500+ Cr</strong>
                <span>commercial &amp; regulatory stakes</span>
              </div>
              <div>
                <strong>Pan-India</strong>
                <span>Apex Courts &amp; Tribunals</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06: JURISPRUDENTIAL INSIGHTS */}
        <section className="section insights-section">
          <div className="section-label">06 <span>Jurisprudential Insights</span></div>
          <div className="insights-heading">
            <div>
              <h2>
                Dispatches from the<br />
                <i>regulatory vanguard.</i>
              </h2>
              <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
                Authoritative legal analysis and strategic commentary on landmark rulings, policy updates, and market transformations.
              </p>
            </div>
            <Link className="text-link" href="/insights">
              <span>View all publications &amp; briefs</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="insight-list">
            {firmInsights.slice(0, 3).map((i) => (
              <Link className="insight-card" href={`/insights/${i.slug}`} key={i.slug}>
                <div className="insight-card-thumb-wrap">
                  <img src={i.image} alt={i.title} className="insight-card-thumb" />
                  <span className="insight-card-tag">{i.category}</span>
                </div>
                <div className="insight-card-content">
                  <span className="insight-meta-time">{i.readTime}</span>
                  <h3>{i.title}</h3>
                  <p className="insight-card-excerpt">{i.excerpt}</p>
                  <span className="insight-date">
                    <span>{i.date}</span>
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* EXECUTIVE CTA */}
        <CTA
          eyebrow="CONFIDENTIAL LEGAL ENGAGEMENT"
          heading="When strategic decisions carry significant consequence, counsel makes the difference."
          buttonText="Initiate a Consultation"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
