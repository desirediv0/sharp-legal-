import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, Zap, CheckCircle2, Scale, Users, Clock, Building2 } from 'lucide-react'
import { SiteShell, CTA } from '@/components/site-shell'
import { services, clients, founder } from '@/lib/practices'

export const metadata: Metadata = {
  title: 'Sharp Legal & Co. | Energy, Electricity & Regulatory Law Firm, Gurugram',
  description:
    'Sharp Legal & Co. is a Gurugram law firm specialising in energy, electricity, infrastructure, and regulatory law, appearing before Regulatory Commissions, APTEL, and High Courts. We also handle corporate, real estate, employment, insurance, arbitration, and dispute work across India.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sharp Legal & Co. | Energy & Regulatory Law, Gurugram',
    description:
      'Specialist lawyers for electricity, infrastructure, and regulatory disputes, and a broader practice for businesses and individuals across India.',
    type: 'website',
  },
}

const reasons = [
  {
    icon: Zap,
    title: 'Electricity and regulatory law is our specialty',
    text: 'We understand the regulations, the industry, the technical issues, and the commercial arrangement behind each dispute, not just the statute.',
  },
  {
    icon: Users,
    title: 'You deal with the founder directly',
    text: 'Akshay Gupta personally handles every major matter. You will not be passed down to a junior.',
  },
  {
    icon: Scale,
    title: 'We appear at every level',
    text: 'Electricity Regulatory Commissions, APTEL, the Electricity Ombudsman, consumer forums, tribunals, High Courts, and the Supreme Court of India.',
  },
  {
    icon: Clock,
    title: 'Prepared long before the hearing',
    text: 'A complex dispute usually turns on one or two issues. We find them early, build the case around them, and explain it to you in plain words.',
  },
]

export default function Home() {
  const electricity = services[0]
  const otherServices = services.slice(1)

  return (
    <SiteShell>
      <main>
        {/* HERO */}
        <section className="hero-v2" id="top">
          <img
            src="/images/hero-main.webp"
            alt=""
            aria-hidden="true"
            className="hero-v2-bg hero-img-kenburns"
          />
          <div className="hero-v2-overlay" aria-hidden="true" />

          <div className="hero-v2-inner">
            <div className="hero-v2-content">
              <p className="eyebrow hero-anim hero-anim-1">ADVOCATES · SOLICITORS · CONSULTANTS · EST. 2021</p>
              <h1 className="hero-anim hero-anim-2">
                A renowned law firm<br />
                <i>in the energy sector, Pan‑India.</i>
              </h1>
              <p className="hero-copy hero-anim hero-anim-3">
                Sharp Legal &amp; Co. is a specialist practice in energy, electricity, infrastructure, and regulatory law, and has advised businesses, housing societies, and families across India since 2021. Clear thinking, thorough preparation, and effective advocacy on every matter we take.
              </p>
              <div className="hero-actions hero-anim hero-anim-4">
                <Link className="button button-gold" href="/contact">
                  <span>Book a Consultation</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link className="button button-outline" href="/services">
                  <span>Our Services</span>
                </Link>
              </div>
            </div>

            <aside className="hero-v2-card hero-anim hero-anim-visual">
              <span className="hero-v2-card-label">WHY CLIENTS CHOOSE US</span>
              <ul>
                <li>
                  <Users size={18} />
                  <span>Dedicated techno-legal team of qualified engineers and lawyers</span>
                </li>
                <li>
                  <Scale size={18} />
                  <span>Appear before Electricity Regulatory Commissions, APTEL, and High Courts</span>
                </li>
                <li>
                  <Zap size={18} />
                  <span>Specialists in electricity, infrastructure, and regulatory disputes</span>
                </li>
                <li>
                  <Building2 size={18} />
                  <span>Trusted by consumers, power generators, energy distributors, and more</span>
                </li>
              </ul>
            </aside>
          </div>

          <div className="hero-v2-stats hero-anim hero-anim-5">
            <div className="hero-v2-stat">
              <strong>5+</strong>
              <span>Years in practice</span>
            </div>
            <div className="hero-v2-stat">
              <strong>{services.length}</strong>
              <span>Areas of law</span>
            </div>
            <div className="hero-v2-stat">
              <strong>1000+</strong>
              <span>Business clients</span>
            </div>
            <div className="hero-v2-stat">
              <strong>Pan-India</strong>
              <span>Courts &amp; tribunals</span>
            </div>
          </div>
        </section>

        {/* 01: ELECTRICITY FOCUS */}
        <section className="section intro-section">
          <div className="section-label">01 <span>Our Focus</span></div>
          <div className="intro-grid">
            <div className="intro-text-col">
              <h2>
                Electricity disputes are<br />
                <i>what we do best.</i>
              </h2>
              <div className="intro-body">
                <p>
                  Electricity law has its own regulators, tribunals, and technical vocabulary. Whether the dispute is about a tariff order, an open access application, a power purchase agreement, or a bill that makes no sense, the statute is only the starting point.
                </p>
                <p>
                  We understand the regulations, the industry, and the commercial arrangements behind each matter. Since 2021 we have acted for generators, industries, housing societies, and consumers before Electricity Regulatory Commissions, APTEL, High Courts, and the Supreme Court.
                </p>
                <div className="intro-highlights">
                  {electricity.whatWeDo.slice(0, 4).map((item) => (
                    <div className="intro-highlight-item" key={item}>
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link className="text-link" href={`/services/${electricity.slug}`}>
                  <span>More about our electricity practice</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="intro-media-col">
              <div className="editorial-frame">
                <img
                  src="/images/electricity.jpg"
                  alt="High-voltage transmission towers at sunset"
                  className="editorial-img"
                />
                <div className="editorial-badge">
                  <Zap size={18} color="var(--gold)" />
                  <span>Generators · Industries · Societies · Consumers</span>
                </div>
                <div className="editorial-caption">
                  <span>Regulatory, commercial, and supply disputes across the power sector</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02: SERVICES */}
        <section className="practice-section">
          <div className="section practice-inner">
            <div className="section-label light">02 <span>Services We Offer</span></div>
            <div className="practice-heading">
              <div>
                <h2>
                  Our <i>Services.</i>
                </h2>
                <p className="practice-subtext">
                  Ten areas of law, explained simply. Click any card to see what we do and who we do it for.
                </p>
              </div>
              <Link className="button button-gold-outline" href="/services">
                <span>All Services</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="practice-cards-grid practice-cards-grid-all">
              {services.map((s) => (
                <Link href={`/services/${s.slug}`} key={s.slug} className="practice-card">
                  <div className="practice-card-img-wrap">
                    <img src={s.image} alt={s.title} className="practice-card-img" loading="lazy" />
                    <div className="practice-card-overlay" />
                    <span className="practice-card-num">{s.number}</span>
                  </div>
                  <div className="practice-card-body">
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="practice-card-link">
                      <span>Learn more</span>
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 03: WHY US */}
        <section className="section sectors-section">
          <div className="section-label">03 <span>Why Clients Choose Us</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">SIMPLE, DIRECT, EXPERIENCED</p>
            <h2 style={{ fontSize: 'clamp(42px, 5.5vw, 76px)', margin: '0 0 16px' }}>
              Why work<br />
              <i>with us.</i>
            </h2>
          </div>

          <div className="sector-cards-grid">
            {reasons.map((r) => (
              <div className="sector-card" key={r.title}>
                <div className="sector-card-icon">
                  <r.icon size={20} />
                </div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04: FOUNDER */}
        <section className="section approach-section">
          <div className="section-label">04 <span>Meet the Founder</span></div>
          <div className="approach-grid">
            <div className="approach-media-col">
              <FounderPortrait />
            </div>

            <div className="approach-copy">
              <p className="eyebrow">FOUNDER &amp; MANAGING PARTNER · {founder.qualifications.toUpperCase()}</p>
              <h2>
                {founder.name.split(' ')[0]}<br />
                <i>{founder.name.split(' ').slice(1).join(' ')}</i>
              </h2>
              <p>{founder.bio[0]}</p>
              <p>{founder.bio[1]}</p>
              <div className="principles">
                {founder.highlights.map((h, i) => (
                  <div key={h}>
                    <div>
                      <b>{h}</b>
                    </div>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
              <Link className="text-link" href="/about" style={{ marginTop: '24px', display: 'inline-flex' }}>
                <span>Read more about the firm</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 05: CLIENTS */}
        <section className="section insights-section">
          <div className="section-label">05 <span>Clients</span></div>
          <div className="insights-heading">
            <div>
              <h2>
                Businesses that<br />
                <i>trust us.</i>
              </h2>
              <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
                Real estate developers, steel and paper manufacturers, industry associations, and more.
              </p>
            </div>
            <Link className="text-link" href="/clients">
              <span>See all clients</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="client-strip">
            {clients.map((c) => (
              <div className="client-chip" key={c.name}>
                {c.logo ? (
                  <img src={c.logo} alt={`${c.name} logo`} className="client-chip-logo" loading="lazy" />
                ) : (
                  <>
                    <Building2 size={14} />
                    <span>{c.name}</span>
                  </>
                )}
              </div>
            ))}
            <Link href="/clients" className="client-chip client-chip-more">
              <span>&amp; many more</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        <CTA
          eyebrow="TALK TO US"
          heading="Have an electricity, business, or property matter? Let's discuss it."
          buttonText="Contact Us"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}

/** Shows the founder photo when one is available, otherwise a clearly-marked placeholder frame. */
function FounderPortrait() {
  const initials = founder.name.split(' ').map((n) => n[0]).join('')
  return (
    <div className="editorial-frame founder-frame">
      {founder.hasPhoto ? (
        <img src={founder.photo} alt={`${founder.name}, ${founder.role}`} className="editorial-img" />
      ) : (
        <div className="founder-placeholder" role="img" aria-label={`Photo placeholder for ${founder.name}`}>
          <span className="founder-placeholder-initials">{initials}</span>
          <span className="founder-placeholder-note">Photograph of {founder.name}</span>
        </div>
      )}
      <div className="editorial-caption">
        <span>{founder.name} · {founder.role}</span>
      </div>
    </div>
  )
}
