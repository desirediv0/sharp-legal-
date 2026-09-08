import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, CheckCircle2, Zap } from 'lucide-react'
import { SiteShell, PageHero, CTA, OfficeDetails } from '@/components/site-shell'
import { services, founder } from '@/lib/practices'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Sharp Legal & Co. is a full-service law firm in Gurugram, founded in 2021 by Akshay Gupta. We handle corporate, real estate, employment, insurance, arbitration, and dispute work across India, with a particular strength in electricity matters.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Sharp Legal & Co.',
    description: 'A founder-led, full-service law firm in Gurugram with a particular strength in electricity disputes.',
    type: 'website',
  },
}

const values = [
  {
    title: 'Clear advice',
    text: 'We explain the law in simple words. You should always understand what we are recommending and why.',
  },
  {
    title: 'Practical solutions',
    text: 'Litigation is a tool, not a goal. We look for the outcome that is best for your business, whether that is a settlement or a fight.',
  },
  {
    title: 'Direct access',
    text: 'You speak to the lawyer handling your matter. No layers, no runaround.',
  },
]

const steps = [
  { title: 'Understand', text: 'We listen to the problem and read every document before giving an opinion.' },
  { title: 'Advise', text: 'We tell you the options, the risks, and what we recommend, in plain language.' },
  { title: 'Act', text: 'We draft, file, negotiate, or argue, depending on what the matter needs.' },
  { title: 'Follow through', text: 'We stay with the matter until the order is passed and complied with.' },
]

export default function AboutPage() {
  const initials = founder.name.split(' ').map((n) => n[0]).join('')

  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'About Us' }]}
          eyebrow="ABOUT SHARP LEGAL & CO."
          title="A law firm for"
          italic="people and businesses."
          intro="Since 2021, Sharp Legal & Co. has helped families, housing societies, and companies across India with their legal problems: property, business, employment, insurance, and court disputes. Electricity cases are a particular strength."
          bgImage="/images/about-hero.jpg"
        />

        {/* 01: WHO WE ARE */}
        <section className="section">
          <div className="section-label">01 <span>Who We Are</span></div>
          <div className="editorial-split" style={{ marginTop: '50px' }}>
            <div className="editorial-text">
              <p className="eyebrow">SINCE 2021</p>
              <h2>Practical lawyers for <i>real-world problems.</i></h2>
              <div className="editorial-paragraphs">
                <p>
                  Sharp Legal &amp; Co. is a full-service law firm based in Gurugram, Delhi NCR. We work with homeowners, housing societies, start-ups, family businesses, real estate developers, manufacturers, and industry groups across India.
                </p>
                <p>
                  Our work covers ten areas of law: corporate and commercial matters, dispute resolution, arbitration, real estate, employment and labour, civil service matters, NBFC and finance, industrial subsidies, insurance, and electricity. We appear before District Courts, consumer commissions, tribunals, regulatory commissions, High Courts, and the Supreme Court of India.
                </p>
                <p>
                  One area where we stand out is electricity. Few firms handle disputes with electricity companies week in, week out; we do, and clients come to us from across the country for it. But whatever your matter, you get the same approach: clear advice, a practical plan, and a lawyer who stays with the case until it is done.
                </p>
              </div>

              <div className="intro-highlights" style={{ marginTop: '28px' }}>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Ten areas of law under one roof</span>
                </div>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Founder handles every major matter personally</span>
                </div>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Appear before courts, tribunals, and regulators across India</span>
                </div>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Recognised strength in electricity disputes</span>
                </div>
              </div>
            </div>

            <div className="editorial-media">
              <div className="editorial-image-frame">
                <img src="/images/about-office.jpg" alt="Sharp Legal & Co. office" />
                <div className="editorial-badge">
                  <Zap size={18} color="var(--gold)" />
                  <span>FULL-SERVICE · GURUGRAM · SINCE 2021</span>
                </div>
                <div className="editorial-caption">
                  <span>Satya The Hive, Sector 102, Gurugram</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02: FOUNDER */}
        <section className="dark-section">
          <div className="dark-inner">
            <div className="section-label light">02 <span style={{ color: 'var(--muted-light)' }}>Founder</span></div>
            <div className="founder-grid">
              <div className="founder-photo-col">
                <div className="founder-photo-frame">
                  {founder.hasPhoto ? (
                    <img src={founder.photo} alt={`${founder.name}, ${founder.role}`} />
                  ) : (
                    <div className="founder-placeholder founder-placeholder-dark" role="img" aria-label={`Photo placeholder for ${founder.name}`}>
                      <span className="founder-placeholder-initials">{initials}</span>
                      <span className="founder-placeholder-note">Photograph of {founder.name}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="founder-text-col">
                <p className="eyebrow" style={{ color: 'var(--gold)' }}>{founder.role.toUpperCase()}</p>
                <h2>{founder.name}</h2>
                <p className="founder-creds">{founder.qualifications} · {founder.enrolment}</p>
                {founder.bio.map((p) => (
                  <p key={p} className="founder-bio-para">{p}</p>
                ))}
                <ul className="founder-highlights">
                  {founder.highlights.map((h) => (
                    <li key={h}>
                      <CheckCircle2 size={15} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 03: HOW WE WORK */}
        <section className="section">
          <div className="section-label">03 <span>How We Work</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">WHAT YOU CAN EXPECT</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              Three things we <i>always do.</i>
            </h2>
          </div>

          <div className="philosophy-grid">
            {values.map((v) => (
              <div className="philosophy-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04: PROCESS */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">04 <span>Our Process</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">FROM FIRST CALL TO FINAL ORDER</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              How a matter <i>moves with us.</i>
            </h2>
          </div>

          <div className="timeline-grid">
            {steps.map((s, i) => (
              <div className="timeline-card" key={s.title}>
                <span className="timeline-step">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05: SERVICES */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">05 <span>Services</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">WHAT WE HELP WITH</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 68px)', margin: '0 0 16px' }}>
              {services.length} areas <i>of law.</i>
            </h2>
          </div>

          <div className="capabilities-grid">
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} className="capability-card" key={s.slug}>
                <div>
                  <div className="capability-top">
                    <span className="capability-number">{s.number}</span>
                    <ArrowUpRight size={18} color="var(--gold)" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                </div>
                <span className="text-link">Learn more <ArrowUpRight size={14} /></span>
              </Link>
            ))}
          </div>
        </section>

        {/* 06: OFFICE */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">06 <span>Our Office</span></div>
          <div className="chambers-reach-block">
            <div className="chambers-reach-info">
              <p className="eyebrow" style={{ margin: '0 0 12px' }}>GURUGRAM, DELHI NCR</p>
              <h3>Close to the courts that matter.</h3>
              <p>
                Our office in Sector 102, Gurugram is a short drive from the Supreme Court and the Delhi High Court. We also appear before District Courts, consumer commissions, tribunals, and High Courts across the country.
              </p>
            </div>
            <div className="chambers-coords-box">
              <h4>VISIT OR CALL US</h4>
              <OfficeDetails />
            </div>
          </div>
        </section>

        <CTA
          eyebrow="TALK TO US"
          heading="Want to know if we can help with your matter?"
          buttonText="Contact Us"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
