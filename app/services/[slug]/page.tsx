import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { FAQAccordion } from '@/components/faq-accordion'
import { services, findService, type Service } from '@/lib/practices'

export function generateStaticParams() {
  return services.flatMap((s) => [{ slug: s.slug }, ...(s.aliases ?? []).map((a) => ({ slug: a }))])
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = findService(slug)
  if (!s) return { title: 'Service' }
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.title} | Sharp Legal & Co.`, description: s.short, type: 'website' },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = findService(slug)
  if (!service) notFound()

  const related = service.relatedSlugs
    .map((rs) => findService(rs))
    .filter((s): s is Service => Boolean(s))
    .slice(0, 3)

  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
          eyebrow={`SERVICE ${service.number}`}
          title={service.title}
          intro={service.description}
          bgImage={service.image}
        />

        {/* 01: WHAT WE DO */}
        <section className="section">
          <div className="section-label">01 <span>What We Do</span></div>
          <div className="editorial-split" style={{ marginTop: '50px' }}>
            <div className="editorial-text">
              <p className="eyebrow">HOW WE CAN HELP</p>
              <h2>What we handle in <i>{service.title.toLowerCase()}.</i></h2>
              <ul className="service-list">
                {service.whatWeDo.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} className="service-list-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="editorial-media">
              <div className="editorial-image-frame">
                <img src={service.image} alt={service.title} />
                <div className="editorial-caption">
                  <span>{service.title} · Sharp Legal &amp; Co.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02: WHO WE HELP */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">02 <span>Who We Help</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">TYPICAL CLIENTS</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 60px)', margin: '0 0 16px' }}>
              Who comes to us for <i>this.</i>
            </h2>
          </div>
          <div className="who-grid">
            {service.whoWeHelp.map((w, i) => (
              <div className="who-card" key={w}>
                <span className="who-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{w}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 03: FAQ */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">03 <span>Common Questions</span></div>
          <div style={{ maxWidth: '720px', margin: '40px auto 0', textAlign: 'center' }}>
            <p className="eyebrow">FAQ</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 60px)' }}>
              Questions we <i>hear often.</i>
            </h2>
          </div>
          <div className="faq-section" style={{ padding: '20px 0 0' }}>
            <FAQAccordion items={service.faqs} />
          </div>
        </section>

        {/* 04: RELATED */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">04 <span>Related Services</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">YOU MAY ALSO NEED</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 60px)', margin: '0 0 16px' }}>
              Services that often <i>go together.</i>
            </h2>
          </div>
          <div className="related-practices-grid">
            {related.map((r) => (
              <Link href={`/services/${r.slug}`} className="related-practice-card" key={r.slug}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>
                      {r.number}
                    </span>
                    <ArrowUpRight size={16} color="var(--gold)" />
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.short}</p>
                </div>
                <span className="text-link">Learn more <ArrowUpRight size={13} /></span>
              </Link>
            ))}
          </div>
        </section>

        <CTA
          eyebrow="TALK TO US"
          heading={`Need help with ${service.title.toLowerCase()}?`}
          buttonText="Contact Us"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
