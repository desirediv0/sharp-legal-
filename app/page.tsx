import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, Scale, Compass, CheckCircle2 } from 'lucide-react'
import { SiteShell, CTA } from '@/components/site-shell'
import { practices, firmInsights } from '@/lib/practices'

export default function Home() {
  const featuredPractices = practices.slice(0, 4)

  return (
    <SiteShell>
      <main>
        {/* HERO SECTION */}
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="eyebrow">Advocates · Solicitors · Consultants</p>
              <h1>Clarity when<br /><i>it matters.</i></h1>
              <p className="hero-copy">
                Sharp Legal &amp; Co. is a full-service law firm for organisations navigating complexity, change and opportunity across India.
              </p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/contact">
                  <span>Meet your next counsel</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link className="button button-outline" href="/practice-areas">
                  <span>Explore Practices</span>
                </Link>
              </div>

              <div className="hero-badges">
                <div className="hero-badge-item">
                  <span className="badge-dot" />
                  <span>Energy &amp; Regulatory Specialists</span>
                </div>
                <div className="hero-badge-item">
                  <span className="badge-dot" />
                  <span>Supreme Court &amp; Tribunal Advocates</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85"
                  alt="Supreme Court & High Court Legal Advocacy - Sharp Legal & Co."
                  className="hero-main-img"
                />
                <div className="hero-image-overlay" />
                <div className="hero-image-badge">
                  <Scale size={16} color="var(--gold)" />
                  <div>
                    <strong>High Court &amp; Appellate Advocacy</strong>
                    <span>Gurugram (Delhi NCR) · Pan-India</span>
                  </div>
                </div>
                <div className="hero-aside-card">
                  <span>EST.</span>
                  <strong>2012</strong>
                  <span>FOUNDED ON EXCELLENCE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="trust-strip">
          <span>Independent counsel</span>
          <span>Sector fluency</span>
          <span>Decisive when needed</span>
          <span>Built for the long term</span>
        </div>

        {/* SECTION 01: THE FIRM */}
        <section className="section intro-section">
          <div className="section-label">01 <span>The firm</span></div>
          <div className="intro-grid">
            <div className="intro-text-col">
              <h2>Good law is<br /><i>good judgment.</i></h2>
              <div className="intro-body">
                <p>
                  Sharp Legal &amp; Co. is a strong techno-legal team of professionals specializing in electricity and energy law, regulatory litigation, commercial disputes, and corporate advisory.
                </p>
                <p>
                  The firm combines deep sectoral expertise with a practical, solution-oriented approach to deliver effective representation before regulatory commissions, courts, and tribunals across India.
                </p>
                <div className="intro-highlights">
                  <div className="intro-highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>Specialized Techno-Legal Capability</span>
                  </div>
                  <div className="intro-highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>Senior-led Case Strategy from Day One</span>
                  </div>
                  <div className="intro-highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>Pan-India Advocacy across Tribunals &amp; Courts</span>
                  </div>
                </div>
                <Link className="text-link" href="/about">
                  <span>Learn about the firm</span>
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
                  <span>12+ Years of Trusted Legal Practice</span>
                </div>
                <div className="editorial-caption">
                  <span>Techno-Legal Mastery · Senior Advocate Chambers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: AREAS OF PRACTICE */}
        <section className="practice-section">
          <div className="section practice-inner">
            <div className="section-label light">02 <span>Areas of practice</span></div>
            <div className="practice-heading">
              <div>
                <h2>Depth where<br /><i>it counts.</i></h2>
                <p className="practice-subtext">Focused expertise for the legal and regulatory questions that matter most.</p>
              </div>
              <Link className="button button-gold-outline" href="/practice-areas">
                <span>View all 7 practices</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Featured Practice Cards with Images */}
            <div className="practice-cards-grid">
              {practices.map((p) => (
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

            {/* Full Practice List */}
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

        {/* SECTION 03: OUR APPROACH */}
        <section className="section approach-section">
          <div className="section-label">03 <span>Our approach</span></div>
          <div className="approach-grid">
            <div className="approach-media-col">
              <div className="editorial-frame">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85"
                  alt="Sharp Legal Strategy and Deliberation Counsel"
                  className="editorial-img"
                />
                <div className="editorial-badge">
                  <Compass size={18} color="var(--gold)" />
                  <span>Rigorous Problem Solving</span>
                </div>
                <div className="editorial-caption">
                  <span>Executive Boardroom &amp; Strategic Litigation Advisory</span>
                </div>
              </div>
            </div>

            <div className="approach-copy">
              <h2>Quiet confidence.<br /><i>Serious momentum.</i></h2>
              <p>
                Our role is not simply to know the law. It is to understand the landscape around it—and help you move through it with confidence.
              </p>
              <div className="principles">
                <div>
                  <div>
                    <b>Listen closely</b>
                    <p className="principle-sub">We start with the real commercial and statutory question.</p>
                  </div>
                  <span>01</span>
                </div>
                <div>
                  <div>
                    <b>Think around corners</b>
                    <p className="principle-sub">We anticipate regulatory risk and procedural traps early.</p>
                  </div>
                  <span>02</span>
                </div>
                <div>
                  <div>
                    <b>Move with purpose</b>
                    <p className="principle-sub">Legal counsel is effective when it delivers clear business outcomes.</p>
                  </div>
                  <span>03</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: CREDIBILITY */}
        <section className="credibility">
          <div className="section credibility-inner">
            <div>
              <p className="eyebrow">A considered point of view</p>
              <h2>Independent by design.<br /><i>Invested in your outcome.</i></h2>
            </div>
            <div className="metrics">
              <div><strong>12+</strong><span>years of practice</span></div>
              <div><strong>7</strong><span>core disciplines</span></div>
              <div><strong>Pan-India</strong><span>Tribunals &amp; Courts</span></div>
            </div>
          </div>
        </section>

        {/* SECTION 05: LATEST THINKING */}
        <section className="section insights-section">
          <div className="section-label">04 <span>Latest thinking</span></div>
          <div className="insights-heading">
            <h2>From the<br /><i>firm.</i></h2>
            <Link className="text-link" href="/insights">
              <span>View all insights</span>
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

        <CTA />
      </main>
    </SiteShell>
  )
}

