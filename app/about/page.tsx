import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, CheckCircle2, Zap } from 'lucide-react'
import { SiteShell, PageHero, CTA, OfficeDetails } from '@/components/site-shell'
import { services, founder } from '@/lib/practices'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Sharp Legal & Co. is a specialist legal practice in energy, electricity, infrastructure, and regulatory law, founded in Gurugram in 2021 by Akshay Gupta. We also advise on corporate, real estate, employment, insurance, and dispute matters across India.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Sharp Legal & Co.',
    description: 'A specialist practice in energy and regulatory law, built on clarity of thought, quality of preparation, and effective advocacy.',
    type: 'website',
  },
}

const values = [
  {
    title: 'Deep sector understanding',
    text: 'We understand the regulations, the industry, the technical issues, and the commercial arrangement behind a dispute, not just the statute.',
  },
  {
    title: 'Rigorous preparation',
    text: 'A complex dispute usually turns on one or two issues. We find them by going deep into the record, well before the hearing.',
  },
  {
    title: 'Strategic advocacy',
    text: 'A good brief tells the decision-maker what the real dispute is, what the law provides, what the record establishes, and why our position should be accepted.',
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
          title="A specialist practice in"
          italic="energy and regulatory law."
          intro="Sharp Legal & Co. advises and represents clients in complex regulatory and commercial disputes, before Regulatory Commissions, APTEL, High Courts, and other forums. Around that core, we help businesses and individuals with corporate, property, employment, insurance, and dispute matters."
          bgImage="/images/about-hero.jpg"
        />

        {/* 01: WHO WE ARE */}
        <section className="section">
          <div className="section-label">01 <span>Who We Are</span></div>
          <div className="editorial-split" style={{ marginTop: '50px' }}>
            <div className="editorial-text">
              <p className="eyebrow">SINCE 2021</p>
              <h2>Deep sector understanding, <i>rigorous preparation.</i></h2>
              <div className="editorial-paragraphs">
                <p>
                  Sharp Legal &amp; Co. is a specialist legal practice focused on energy, electricity, infrastructure, and regulatory law. We advise and represent clients in complex regulatory and commercial disputes, appearing before Regulatory Commissions, the Appellate Tribunal for Electricity, High Courts, and other judicial and quasi-judicial forums.
                </p>
                <p>
                  Our approach combines deep sector understanding, rigorous legal research, and strategic litigation. We look beyond the immediate dispute to understand the regulatory, technical, and commercial issues that shape it.
                </p>
                <p>
                  Alongside this core, we work with businesses, housing societies, and families across ten areas of law: corporate and commercial, dispute resolution, arbitration, real estate, employment, civil service matters, NBFC and finance, industrial subsidies, and insurance. Our vision is simple: a practice known for clarity of thought, quality of preparation, and effective advocacy, and the trusted partner clients turn to when the matter truly matters.
                </p>
              </div>

              <div className="intro-highlights" style={{ marginTop: '28px' }}>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Energy, electricity, infrastructure, and regulatory law</span>
                </div>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Appear before Regulatory Commissions, APTEL, and High Courts</span>
                </div>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Founder handles every major matter personally</span>
                </div>
                <div className="intro-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Ten areas of law under one roof</span>
                </div>
              </div>
            </div>

            <div className="editorial-media">
              <div className="editorial-image-frame">
                <img src="/images/about-office.jpg" alt="Sharp Legal & Co. office" />
                <div className="editorial-badge">
                  <Zap size={18} color="var(--gold)" />
                  <span>ENERGY · REGULATORY · GURUGRAM · SINCE 2021</span>
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

        {/* 03: IN HIS OWN WORDS */}
        <section className="section founder-statement">
          <div className="section-label">03 <span>In His Own Words</span></div>
          <div className="statement-grid">
            <div className="statement-aside">
              <p className="eyebrow">FROM THE FOUNDER</p>
              <h2>The lawyer behind <i>the practice.</i></h2>
              <div className="statement-beliefs">
                <span className="statement-beliefs-label">A good brief answers four questions</span>
                <ol>
                  {founder.beliefs.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="statement-body">
              {founder.statement.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="statement-sign">— {founder.name}</p>
            </div>
          </div>
        </section>

        {/* 04: HOW WE WORK */}
        <section className="section">
          <div className="section-label">04 <span>How We Work</span></div>
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

        {/* 05: PROCESS */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">05 <span>Our Process</span></div>
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

        {/* 06: SERVICES */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">06 <span>Services</span></div>
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

        {/* 07: OFFICE */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">07 <span>Our Office</span></div>
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
