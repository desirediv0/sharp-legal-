import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell, CTA } from '@/components/site-shell'
import { practices, firmInsights } from '@/lib/practices'

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero" id="top">
          <div className="hero-rule" />
          <div className="hero-content">
            <p className="eyebrow">Advocates · Solicitors · Consultants</p>
            <h1>Clarity when<br /><i>it matters.</i></h1>
            <p className="hero-copy">Sharp Legal &amp; Co. is a full-service law firm for organisations navigating complexity, change and opportunity.</p>
            <Link className="button button-gold" href="/contact">
              Meet your next counsel <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="hero-aside">
            <span>EST.</span>
            <strong>2012</strong>
            <span>NEW DELHI · MUMBAI</span>
          </div>
        </section>

        <div className="trust-strip">
          <span>Independent counsel</span>
          <span>Sector fluency</span>
          <span>Decisive when needed</span>
          <span>Built for the long term</span>
        </div>

        <section className="section intro-section">
          <div className="section-label">01 <span>The firm</span></div>
          <div className="intro-grid">
            <h2>Good law is<br /><i>good judgment.</i></h2>
            <div className="intro-body">
              <p>We advise businesses, institutions and individuals where the law intersects with a decision that matters.</p>
              <p>Our lawyers combine technical depth with commercial perspective, making complexity easier to navigate and action easier to take.</p>
              <Link className="text-link" href="/about">Learn about the firm <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="practice-section">
          <div className="section practice-inner">
            <div className="section-label light">02 <span>Areas of practice</span></div>
            <div className="practice-heading">
              <h2>Depth where<br /><i>it counts.</i></h2>
              <p>Focused expertise for the questions that keep leaders awake.</p>
            </div>
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

        <section className="section approach-section">
          <div className="section-label">03 <span>Our approach</span></div>
          <div className="approach-grid">
            <h2>Quiet confidence.<br /><i>Serious momentum.</i></h2>
            <div className="approach-copy">
              <p>Our role is not simply to know the law. It is to understand the landscape around it—and help you move through it with confidence.</p>
              <div className="principles">
                <div><b>Listen closely</b><span>We start with the real question.</span></div>
                <div><b>Think around corners</b><span>We see risk before it becomes a problem.</span></div>
                <div><b>Move with purpose</b><span>Advice is useful when it moves things forward.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="credibility">
          <div className="section credibility-inner">
            <div>
              <p className="eyebrow">A considered point of view</p>
              <h2>Independent by design.<br /><i>Invested in your outcome.</i></h2>
            </div>
            <div className="metrics">
              <div><strong>12+</strong><span>years of practice</span></div>
              <div><strong>7</strong><span>core disciplines</span></div>
              <div><strong>2</strong><span>cities, one standard</span></div>
            </div>
          </div>
        </section>

        <section className="section insights-section">
          <div className="section-label">04 <span>Latest thinking</span></div>
          <div className="insights-heading">
            <h2>From the<br /><i>firm.</i></h2>
            <Link className="text-link" href="/insights">View all insights <ArrowUpRight size={16} /></Link>
          </div>
          <div className="insight-list">
            {firmInsights.slice(0, 3).map((i) => (
              <Link className="insight-card" href={`/insights/${i.slug}`} key={i.slug}>
                <span className="insight-category">{i.category}</span>
                <h3>{i.title}</h3>
                <span className="insight-date">{i.date}<ArrowUpRight size={15} /></span>
              </Link>
            ))}
          </div>
        </section>

        <CTA />
      </main>
    </SiteShell>
  )
}
