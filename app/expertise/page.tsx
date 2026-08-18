import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'

export const metadata = {
  title: 'Expertise & Sectors | Sharp Legal & Co.',
  description: 'Where law meets industry, regulation and business. Sharp Legal & Co. delivers focused legal expertise across energy, disputes, regulatory litigation and corporate advisory.'
}

const matrixData = [
  {
    discipline: 'Litigation',
    energy: 'Tariff disputes, PPA breaches, and recovery suits before Commercial Courts.',
    corporate: 'Shareholder disputes, oppression & mismanagement petitions before NCLT.',
    realEstate: 'Title litigation, specific performance suits, and contractor claims.',
    commercial: 'Breach of contract, urgent injunctions, and recovery proceedings.'
  },
  {
    discipline: 'Arbitration',
    energy: 'High-value EPC arbitrations, transmission claims, and tariff revision arbitrations.',
    corporate: 'Joint venture buyouts, SHA deadlock arbitrations, and post-M&A warranty claims.',
    realEstate: 'Developer-contractor disputes, delay prolongation claims, and JDA arbitrations.',
    commercial: 'Domestic & international commercial arbitrations under SIAC, LCIA, and DIAC.'
  },
  {
    discipline: 'Advisory',
    energy: 'PPA drafting, captive structure compliance (Rule 3), and green open access audits.',
    corporate: 'Corporate governance, board compliance, M&A structuring, and employment covenants.',
    realEstate: '30-year title due diligence, RERA compliance audits, and JDA structuring.',
    commercial: 'Master services agreements, procurement contracts, and commercial risk reviews.'
  },
  {
    discipline: 'Regulatory',
    energy: 'Multi-year tariff petitions, change in law claims before CERC, SERCs, and APTEL.',
    corporate: 'FEMA, RBI, and MCA regulatory defense, internal inquiries, and compliance filings.',
    realEstate: 'Project registrations, extension petitions, and defense before RERA Authorities.',
    commercial: 'Writ petitions challenging arbitrary state tenders, license cancellations, and sanctions.'
  }
]

export default function ExpertisePage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Expertise' }]}
          eyebrow="EXPERTISE"
          title="Where law meets industry,"
          italic="regulation and business."
          intro="Our expertise is shaped by the intersection of legal complexity, sector regulation and commercial realities."
          bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=85"
        />

        {/* Intro Section */}
        <section className="section">
          <div className="section-label">01 <span>Sector Focus</span></div>
          <div className="editorial-split" style={{ marginTop: '50px' }}>
            <div className="editorial-text">
              <p className="eyebrow">Integrated Disciplines</p>
              <h2>Focused expertise. <i>Practical perspective.</i></h2>
              <div className="editorial-paragraphs">
                <p>
                  Modern corporate and regulatory challenges rarely fit into neat doctrinal silos. A power tariff dispute involves administrative law, financial modeling, and specialized statutory codes. A shareholder standoff requires urgent trial agility paired with corporate restructuring strategy.
                </p>
                <p>
                  Sharp Legal &amp; Co. works across legal areas where disputes, regulation, and commercial interests intersect. Our lawyers bring deep sector literacy, enabling us to engage with complex technical and financial records with genuine comprehension.
                </p>
              </div>
            </div>
            <div className="editorial-media">
              <div className="editorial-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85"
                  alt="Sharp Legal Corporate Boardroom Advisory"
                />
                <div className="editorial-caption">
                  <span>Advocacy · Strategic Advisory · Regulatory Mastery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Areas - Large Editorial Sections */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">02 <span>Core Practice Areas</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">In-Depth Disciplines</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              Strategic Disciplines &amp; <i>Capabilities.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px' }}>
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
                <p className="eyebrow">SECTOR FOCUS 01</p>
                <h2>Energy &amp; <i>Electricity Law.</i></h2>
                <p>
                  We advise renewable developers, independent power producers, transmission utilities, and distribution licensees on the full spectrum of energy law. From multi-year tariff determination and Open Access compliance to Change in Law petitions and grid curtailment disputes.
                </p>
                <ul className="expertise-topics-list">
                  <li>Electricity Regulation &amp; Statutory Tariff Filings</li>
                  <li>Power Purchase Agreement (PPA) Negotiations &amp; Disputes</li>
                  <li>CERC, SERC &amp; APTEL Regulatory Proceedings</li>
                  <li>Green Energy Open Access &amp; Rule 3 Captive Structuring</li>
                  <li>Transmission Service Agreements &amp; ISTS Connectivity</li>
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
                <p className="eyebrow">SECTOR FOCUS 02</p>
                <h2>Regulatory <i>Litigation.</i></h2>
                <p>
                  When public administrative decisions create commercial headwinds, our regulatory litigation team defends corporate participants before statutory commissions, appellate tribunals, and constitutional courts. We challenge arbitrary regulations, unfair tender disqualifications, and statutory penalties.
                </p>
                <ul className="expertise-topics-list">
                  <li>High Court &amp; Supreme Court Writ Petitions (Articles 226 &amp; 32)</li>
                  <li>Appellate Advocacy before APTEL, TDSAT, NCLAT &amp; SAT</li>
                  <li>Defense against Administrative Show-Cause Notices &amp; Fines</li>
                  <li>Public Procurement, Tender &amp; Concession Challenges</li>
                  <li>Sectoral Commission Dispute Petitions</li>
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
                <p className="eyebrow">SECTOR FOCUS 03</p>
                <h2>Arbitration &amp; <i>Disputes.</i></h2>
                <p>
                  Our arbitration practice represents domestic and multinational enterprises in high-stakes ad-hoc and institutional proceedings under SIAC, LCIA, ICC, DIAC, and MCIA. We manage the entire arbitration lifecycle from pre-dispute positioning and Section 9 interim relief to trial cross-examination and award enforcement.
                </p>
                <ul className="expertise-topics-list">
                  <li>Commercial &amp; Joint Venture Dispute Arbitrations</li>
                  <li>Infrastructure, EPC &amp; Delay Prolongation Claims</li>
                  <li>Section 9 Urgent Protective Relief &amp; Section 17 Applications</li>
                  <li>Section 11 Arbitrator Appointments before High Courts</li>
                  <li>Section 34 Award Set-Aside &amp; Section 36 Execution</li>
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
                <p className="eyebrow">SECTOR FOCUS 04</p>
                <h2>Corporate <i>Advisory.</i></h2>
                <p>
                  We advise boards of directors, institutional investors, and leadership teams on high-consequence corporate transactions, governance frameworks, and operational contracts. Our focus is ensuring commercial momentum while eliminating latent legal risks.
                </p>
                <ul className="expertise-topics-list">
                  <li>Commercial Contracts, Master Agreements &amp; Licensing</li>
                  <li>Corporate Governance, Director Liabilities &amp; Board Advisory</li>
                  <li>M&amp;A Structuring, Legal Due Diligence &amp; Shareholder Pacts</li>
                  <li>Insolvency &amp; Restructuring under IBC before NCLT</li>
                  <li>Employment, Executive Agreements &amp; Compliance Audits</li>
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
                <p className="eyebrow">SECTOR FOCUS 05</p>
                <h2>Civil &amp; Commercial <i>Litigation.</i></h2>
                <p>
                  From Commercial Courts to the Supreme Court of India, our trial advocates handle high-value contractual claims, urgent ex-parte injunctions, shareholder deadlocks, and decree enforcement with rigorous trial preparation and decisive courtroom presence.
                </p>
                <ul className="expertise-topics-list">
                  <li>High-Value Commercial Suits &amp; Contract Enforcement</li>
                  <li>Ex-Parte Interim Injunctions &amp; Asset Protection Orders</li>
                  <li>Shareholder &amp; Joint Venture Oppression/Mismanagement Suits</li>
                  <li>Appellate Litigation before High Courts &amp; Supreme Court</li>
                  <li>Enforcement of Domestic &amp; Foreign Court Judgments</li>
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
                <p className="eyebrow">SECTOR FOCUS 06</p>
                <h2>RERA &amp; Real <i>Estate.</i></h2>
                <p>
                  Our real estate lawyers advise developers, institutional funds, and land aggregators across the development lifecycle. We conduct forensic 30-year title searches, structure Joint Development Agreements, and represent clients before State RERA Authorities and Appellate Tribunals.
                </p>
                <ul className="expertise-topics-list">
                  <li>RERA Project Registration, Filings &amp; Escrow Compliances</li>
                  <li>RERA Authority &amp; REAT Dispute Resolution Proceedings</li>
                  <li>30-Year Title Search Reports &amp; Acquisition Diligence</li>
                  <li>Joint Development Agreements (JDA) &amp; Revenue-Share Pacts</li>
                  <li>Commercial Leasing, Conveyance &amp; Asset Restructuring</li>
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

        {/* 2D Matrix Section */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">03 <span>Analytical Matrix</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">Interdisciplinary Matrix</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              The Intersection of <i>Law and Industry.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px' }}>
              How our core legal disciplines intersect with primary industry sectors to provide targeted, multi-dimensional solutions.
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

        <CTA
          heading="Complex matters require focused counsel."
          buttonText="Discuss Your Matter"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
