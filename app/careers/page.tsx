import type { Metadata } from 'next'
import { ArrowUpRight, MapPin, Briefcase, Mail, CheckCircle2 } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { jobOpenings, email } from '@/lib/practices'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Sharp Legal & Co. in Gurugram. Current openings: Legal Intern and Senior Executive. Apply by email to info@sharplegal.in.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers | Sharp Legal & Co.',
    description: 'Openings for a Legal Intern and a Senior Executive at our Gurugram office.',
    type: 'website',
  },
}

function applyLink(title: string) {
  const subject = encodeURIComponent(`Application for ${title} - Sharp Legal & Co.`)
  const body = encodeURIComponent(
    `Hello,\n\nI would like to apply for the ${title} position.\n\nName:\nPhone:\nCurrent college / employer:\nAvailable from:\n\nMy CV is attached.\n\nThank you.`
  )
  return `mailto:${email}?subject=${subject}&body=${body}`
}

const perks = [
  'Real work on live matters from the first week',
  'Direct mentoring by the founder',
  'Hearings before Electricity Regulatory Commissions, APTEL, and the Delhi High Court',
  'A small team where your work is noticed',
]

export default function CareersPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Careers' }]}
          eyebrow="CAREERS"
          title="Work with us in"
          italic="Gurugram."
          intro="We are a small, focused team. If you want to learn electricity and commercial law by doing real work, we would like to hear from you."
          bgImage="/images/careers-hero.jpg"
        />

        {/* 01: OPENINGS */}
        <section className="section">
          <div className="section-label">01 <span>Current Openings</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">{jobOpenings.length} POSITIONS OPEN</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 60px)', margin: '0 0 16px' }}>
              Open <i>positions.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px', lineHeight: '1.65' }}>
              Click &ldquo;Apply by Email&rdquo; on any role. It opens a ready-made email to {email}; just attach your CV and send.
            </p>
          </div>

          <div className="job-list">
            {jobOpenings.map((job) => (
              <article className="job-card" key={job.slug} id={job.slug}>
                <div className="job-card-head">
                  <div>
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span><Briefcase size={14} /> {job.type}</span>
                      <span><MapPin size={14} /> {job.location}</span>
                    </div>
                  </div>
                  <a className="button button-gold" href={applyLink(job.title)}>
                    <span>Apply by Email</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <p className="job-summary">{job.summary}</p>

                <div className="job-columns">
                  <div>
                    <h4>What you will do</h4>
                    <ul className="service-list service-list-compact">
                      {job.responsibilities.map((r) => (
                        <li key={r}>
                          <CheckCircle2 size={16} className="service-list-icon" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>What we are looking for</h4>
                    <ul className="service-list service-list-compact">
                      {job.requirements.map((r) => (
                        <li key={r}>
                          <CheckCircle2 size={16} className="service-list-icon" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 02: WHY JOIN */}
        <section className="dark-section">
          <div className="dark-inner">
            <div className="section-label light">02 <span style={{ color: 'var(--muted-light)' }}>Why Join Us</span></div>
            <div style={{ marginTop: '30px' }}>
              <p className="eyebrow" style={{ color: 'var(--gold)' }}>WHAT YOU GET</p>
              <h2>Learn by <i>doing.</i></h2>
            </div>
            <div className="defines-grid">
              {perks.map((p, i) => (
                <div className="defines-card" key={p}>
                  <span className="defines-number">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03: HOW TO APPLY */}
        <section className="section">
          <div className="section-label">03 <span>How to Apply</span></div>
          <div className="apply-box">
            <Mail size={28} color="var(--gold)" />
            <div>
              <h3>Send your CV to <a href={`mailto:${email}`}>{email}</a></h3>
              <p>
                Put the role name in the subject line. Tell us in a few lines why you want to work here and when you can start. We reply to every application within two weeks.
              </p>
            </div>
          </div>
        </section>

        <CTA
          eyebrow="NO OPENING THAT FITS?"
          heading="Send us your CV anyway. We keep good applications on file."
          buttonText="Email Us"
          href={`mailto:${email}?subject=${encodeURIComponent('General application - Sharp Legal & Co.')}`}
        />
      </main>
    </SiteShell>
  )
}
