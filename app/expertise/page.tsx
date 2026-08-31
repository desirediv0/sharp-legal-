import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'

export const metadata: Metadata = {
  title: 'Expertise & Sectoral Specialization | Sharp Legal & Co.',
  description:
    'Where law meets industry, regulation, and business. Sharp Legal & Co. delivers specialized techno-legal expertise across electricity, regulatory litigation, commercial arbitration, and corporate transactions.',
  alternates: { canonical: '/expertise' },
  openGraph: {
    title: 'Expertise & Sectoral Specialization | Sharp Legal & Co.',
    description:
      'Integrated techno-legal capabilities across energy regulation, complex commercial litigation, domestic and international arbitration, and corporate advisory.',
    type: 'website',
  },
}

const matrixData = [
  {
    discipline: 'Litigation',
    energy: 'Multi-year tariff true-ups, Change in Law claims, PPA breaches, and recovery suits before Commercial Courts.',
    corporate: 'Shareholder deadlocks, oppression & mismanagement petitions, and director liability suits before NCLT/NCLAT.',
    realEstate: 'Specific performance suits, title partition actions, builder-allottee disputes, and RERA appellate claims.',
    commercial: 'Breach of contract suits, urgent ex-parte asset freezing injunctions, and decree execution proceedings.'
  },
  {
    discipline: 'Arbitration',
    energy: 'High-value EPC arbitrations, transmission service claims, tariff adjustment arbitrations, and fuel supply disputes.',
    corporate: 'Joint venture buyout disputes, SHA deadlock arbitrations, post-acquisition indemnity claims, and warranty breaches.',
    realEstate: 'Developer-contractor disputes, delay prolongation claims, JDA profit-sharing arbitrations, and FIDIC disputes.',
    commercial: 'Domestic & cross-border commercial arbitrations under SIAC, LCIA, ICC, DIAC, and MCIA institutional rules.'
  },
  {
    discipline: 'Advisory',
    energy: 'PPA architecture, captive generation compliance (Rule 3), Green Open Access audits, and carbon credit contracts.',
    corporate: 'Board governance advisory, cross-border M&A structuring, compliance audits, and executive employment covenants.',
    realEstate: '30-year forensic title due diligence, RERA compliance architecture, and revenue-sharing JDA structuring.',
    commercial: 'Master supply agreements, concession contracts, licensing frameworks, and commercial risk mitigation audits.'
  },
  {
    discipline: 'Regulatory',
    energy: 'Statutory tariff filings, grid connectivity approvals, Deviation Settlement Mechanism (DSM) disputes before CERC & SERCs.',
    corporate: 'FEMA, RBI, and MCA regulatory defense, internal compliance inquiries, and competition commission investigations.',
    realEstate: 'State RERA project registrations, quarterly compliances, extension petitions, and defense before RERA Authorities.',
    commercial: 'Constitutional writ petitions challenging arbitrary public tenders, license revocations, and statutory sanctions.'
  }
]

export default function ExpertisePage() {
  return (
    <SiteShell>
      <main>
        {/* PAGE HERO */}
        <PageHero
          breadcrumbs={[{ label: 'Expertise' }]}
          eyebrow="SECTORAL MASTERY & LEGAL ARCHITECTURE"
          title="Where statutory jurisprudence meets"
          italic="industrial reality."
          intro="Modern corporate and regulatory challenges rarely conform to doctrinal silos. We integrate deep sectoral literacy with forensic litigation strategy across India's most capital-intensive industries."
          bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=85"
        />

        {/* SECTION 01: INTRO SECTION */}
        <section className="section">
          <div className="section-label">01 <span>Cross-Disciplinary Architecture</span></div>
          <div className="editorial-split" style={{ marginTop: '50px' }}>
            <div className="editorial-text">
              <p className="eyebrow">INTEGRATED PRACTICE MODEL</p>
              <h2>Focused expertise. <i>Practical commercial perspective.</i></h2>
              <div className="editorial-paragraphs">
                <p>
                  In capital-intensive sectors, statutory provisions cannot be understood in isolation from engineering records, dispatch protocols, or project financing balance sheets. A power tariff dispute involves constitutional administrative law, multi-year economic modeling, and specialized statutory grid codes. A joint venture deadlock demands trial agility paired with corporate restructuring acumen.
                </p>
                <p>
                  Sharp Legal &amp; Co. operates where disputes, sectoral regulation, and commercial enterprise intersect. Our advocates bring profound technical and financial fluency, enabling us to engage with voluminous engineering records, dispatch schedules, and financial models with authentic comprehension.
                </p>
              </div>
            </div>
            <div className="editorial-media">
              <div className="editorial-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85"
                  alt="Sharp Legal Corporate Boardroom Advisory and Strategic Counsel"
                />
                <div className="editorial-caption">
                  <span>Advocacy · Strategic Advisory · Regulatory Mastery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: CORE AREAS - LARGE EDITORIAL SECTIONS */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">02 <span>Specialized Practice Disciplines</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">SECTORAL FOCUS AREAS</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              Strategic Disciplines &amp; <i>Capabilities.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px', lineHeight: '1.65' }}>
              Detailed overview of our specialized sectors and legal practice groups.
            </p>
          </div>

          <div className="expertise-core-list">
            {/* 1. Energy & Electricity */}
            <div className="expertise-core-item">
              <div className="editorial-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=85"
                  alt="Electricity grid and power transmission infrastructure"
                />
              </div>
              <div className="expertise-core-content">
                <p className="eyebrow">PRACTICE VERTICAL 01</p>
                <h2>Energy &amp; <i>Electricity Law.</i></h2>
                <p>
                  We advise renewable developers, independent power producers, transmission utilities, and distribution licensees on the full spectrum of energy law. From multi-year tariff determination and Open Access compliance to Change in Law petitions and grid curtailment disputes before CERC, SERCs, and APTEL.
                </p>
                <ul className="expertise-topics-list">
                  <li>Electricity Regulation &amp; Statutory Tariff Filings (CERC / SERCs)</li>
                  <li>Power Purchase Agreement (PPA) Negotiations &amp; Change in Law Petitions</li>
                  <li>Appellate Tribunal for Electricity (APTEL) &amp; Supreme Court Appeals</li>
                  <li>Green Energy Open Access &amp; Rule 3 Captive Power Structuring</li>
                  <li>Transmission Service Agreements (TSA) &amp; ISTS Grid Connectivity</li>
                </ul>
                <Link href="/practice-areas/energy-electricity-law" className="button button-gold">
                  <span>Explore Energy Practice</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            {/* 2. Regulatory Litigation */}
            <div className="expertise-core-item is-reversed">
              <div className="expertise-core-content">
                <p className="eyebrow">PRACTICE VERTICAL 02</p>
                <h2>Regulatory <i>Litigation.</i></h2>
                <p>
                  When public administrative decisions create commercial headwinds, our regulatory litigation team defends corporate participants before statutory commissions, appellate tribunals, and constitutional courts. We challenge arbitrary regulations, unfair tender disqualifications, and statutory penalties.
                </p>
                <ul className="expertise-topics-list">
                  <li>High Court &amp; Supreme Court Writ Petitions (Articles 226 &amp; 32)</li>
                  <li>Appellate Advocacy before APTEL, TDSAT, NCLAT &amp; SAT</li>
                  <li>Defense against Administrative Show-Cause Notices &amp; Penalties</li>
                  <li>Public Procurement, Tender Conditions &amp; Concession Challenges</li>
                  <li>Judicial Review of Arbitrary Statutory Circulars &amp; Guidelines</li>
                </ul>
                <Link href="/practice-areas/regulatory-litigation" className="button button-gold">
                  <span>Explore Regulatory Litigation</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
              <div className="editorial-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1800&q=85"
                  alt="Institutional regulatory court architecture"
                />
              </div>
            </div>

            {/* 3. Arbitration & Disputes */}
            <div className="expertise-core-item">
              <div className="editorial-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=85"
                  alt="Courtroom and legal documents dispute resolution"
                />
              </div>
              <div className="expertise-core-content">
                <p className="eyebrow">PRACTICE VERTICAL 03</p>
                <h2>Arbitration &amp; <i>Dispute Resolution.</i></h2>
                <p>
                  Our arbitration practice represents domestic and multinational enterprises in high-stakes ad-hoc and institutional proceedings under SIAC, LCIA, ICC, DIAC, and MCIA. We manage the entire arbitration lifecycle from pre-dispute positioning and Section 9 interim relief to trial cross-examination and award enforcement.
                </p>
                <ul className="expertise-topics-list">
                  <li>Complex Commercial &amp; Joint Venture Dispute Arbitrations</li>
                  <li>Infrastructure, EPC &amp; Delay Prolongation Claims (FIDIC)</li>
                  <li>Section 9 Urgent Protective Relief &amp; Section 17 Applications</li>
                  <li>Section 11 Arbitrator Appointments before High Courts &amp; Supreme Court</li>
                  <li>Section 34 Award Set-Aside Challenges &amp; Section 36 Enforcement</li>
                </ul>
                <Link href="/practice-areas/arbitration" className="button button-gold">
                  <span>Explore Arbitration Practice</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            {/* 4. Corporate Advisory */}
            <div className="expertise-core-item is-reversed">
              <div className="expertise-core-content">
                <p className="eyebrow">PRACTICE VERTICAL 04</p>
                <h2>Corporate <i>Advisory.</i></h2>
                <p>
                  We advise boards of directors, institutional investors, and leadership teams on high-consequence corporate transactions, governance frameworks, and operational contracts. Our focus is ensuring commercial momentum while eliminating latent legal risks.
                </p>
                <ul className="expertise-topics-list">
                  <li>Commercial Contracts, Master Agreements &amp; Strategic Procurement</li>
                  <li>Corporate Governance, Director Liabilities &amp; Board Advisory</li>
                  <li>Joint Ventures, M&amp;A Due Diligence &amp; Shareholder Pacts (SHA/SPA)</li>
                  <li>Insolvency &amp; Corporate Restructuring under IBC before NCLT</li>
                  <li>Statutory Compliance under Companies Act, FEMA &amp; Sectoral Rules</li>
                </ul>
                <Link href="/practice-areas/corporate-advisory" className="button button-gold">
                  <span>Explore Corporate Advisory</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
              <div className="editorial-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=85"
                  alt="Corporate boardroom negotiation and contract advisory"
                />
              </div>
            </div>

            {/* 5. Civil & Commercial Litigation */}
            <div className="expertise-core-item">
              <div className="editorial-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85"
                  alt="High Court civil litigation and advocacy"
                />
              </div>
              <div className="expertise-core-content">
                <p className="eyebrow">PRACTICE VERTICAL 05</p>
                <h2>Civil &amp; Commercial <i>Litigation.</i></h2>
                <p>
                  From designated Commercial Courts to the Supreme Court of India, our trial advocates handle high-value contractual claims, urgent ex-parte injunctions, shareholder deadlocks, and decree enforcement with rigorous trial preparation and decisive courtroom presence.
                </p>
                <ul className="expertise-topics-list">
                  <li>High-Value Commercial Suits under the Commercial Courts Act</li>
                  <li>Ex-Parte Interim Injunctions &amp; Asset Protection Orders</li>
                  <li>Shareholder &amp; Joint Venture Oppression/Mismanagement Suits</li>
                  <li>Commercial Appeals before High Courts &amp; Special Leave Petitions (SLP)</li>
                  <li>Execution &amp; Enforcement of Domestic &amp; Foreign Court Judgments</li>
                </ul>
                <Link href="/practice-areas/civil-litigation" className="button button-gold">
                  <span>Explore Civil Litigation</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            {/* 6. RERA & Real Estate */}
            <div className="expertise-core-item is-reversed">
              <div className="expertise-core-content">
                <p className="eyebrow">PRACTICE VERTICAL 06</p>
                <h2>RERA &amp; Real <i>Estate.</i></h2>
                <p>
                  Our real estate practice advises developers, institutional funds, and land aggregators across the property development lifecycle. We conduct forensic 30-year title searches, structure Joint Development Agreements (JDA), and represent clients before State RERA Authorities and Appellate Tribunals.
                </p>
                <ul className="expertise-topics-list">
                  <li>RERA Project Registration, Filings &amp; Escrow Account Compliances</li>
                  <li>RERA Authority &amp; REAT Dispute Resolution Proceedings</li>
                  <li>30-Year Forensic Title Search Reports &amp; Acquisition Diligence</li>
                  <li>Joint Development Agreements (JDA) &amp; Revenue-Sharing Pacts</li>
                  <li>Commercial Leasing, Conveyancing &amp; Stalled Project Insolvency</li>
                </ul>
                <Link href="/practice-areas/rera" className="button button-gold">
                  <span>Explore Real Estate Practice</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
              <div className="editorial-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=85"
                  alt="Modern commercial and residential real estate architecture"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: 2D MATRIX SECTION */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">03 <span>Analytical Matrix</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">INTERDISCIPLINARY MATRIX</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              The Intersection of <i>Law and Industry.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px', lineHeight: '1.65' }}>
              How our core legal competencies intersect with primary industry sectors to provide targeted, multi-dimensional counsel.
            </p>
          </div>

          <div className="matrix-wrapper">
            <div className="matrix-grid">
              <div className="matrix-corner">DISCIPLINE \ SECTOR</div>
              <div className="matrix-header">Energy &amp; Power</div>
              <div className="matrix-header">Corporate &amp; M&amp;A</div>
              <div className="matrix-header">Real Estate &amp; RERA</div>
              <div className="matrix-header">Commercial &amp; Trade</div>

              {matrixData.map((row) => (
                <div key={row.discipline} style={{ display: 'contents' }}>
                  <div className="matrix-row-label">{row.discipline}</div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-title">Sector Scope</span>
                    <span className="matrix-cell-desc">{row.energy}</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-title">Sector Scope</span>
                    <span className="matrix-cell-desc">{row.corporate}</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-title">Sector Scope</span>
                    <span className="matrix-cell-desc">{row.realEstate}</span>
                  </div>
                  <div className="matrix-cell">
                    <span className="matrix-cell-title">Sector Scope</span>
                    <span className="matrix-cell-desc">{row.commercial}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXECUTIVE CTA */}
        <CTA
          eyebrow="CONFIDENTIAL DELIBERATION"
          heading="Complex regulatory and commercial matters demand focused counsel."
          buttonText="Discuss Your Matter"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
