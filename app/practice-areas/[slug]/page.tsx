import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { FAQAccordion } from '@/components/faq-accordion'
import { practices, type Practice } from '@/lib/practices'

function findPractice(slug: string): Practice | undefined {
  return practices.find(p => p.slug === slug || p.aliases?.includes(slug))
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = []
  practices.forEach(p => {
    slugs.push({ slug: p.slug })
    if (p.aliases) {
      p.aliases.forEach(alias => slugs.push({ slug: alias }))
    }
  })
  return slugs
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = findPractice(slug)
  return {
    title: p ? `${p.title} | Sharp Legal & Co.` : 'Practice Area | Sharp Legal & Co.',
    description: p?.description || 'Sharp Legal & Co. practice area overview.'
  }
}

export default async function PracticeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const practice = findPractice(slug)

  if (!practice) {
    notFound()
  }

  // Find related practices
  const relatedPractices = practice.relatedSlugs
    .map(relSlug => findPractice(relSlug))
    .filter((p): p is Practice => Boolean(p))
    .slice(0, 3)

  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[
            { label: 'Practices', href: '/practice-areas' },
            { label: practice.title }
          ]}
          eyebrow="AREAS OF PRACTICE"
          title={practice.title}
          intro={practice.description}
          bgImage={practice.image}
        />

        {/* Introduction Section */}
        <section className="section">
          <div className="section-label">01 <span>Practice Profile</span></div>
          <div className="editorial-split" style={{ marginTop: '50px' }}>
            <div className="editorial-text">
              <p className="eyebrow">Strategic Perspective</p>
              <h2>Advocacy anchored in <i>sector depth.</i></h2>
              <div className="editorial-paragraphs">
                {practice.longIntro.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
            <div className="editorial-media">
              <div className="editorial-image-frame">
                <img src={practice.secondaryImage || practice.image} alt={practice.title} />
                <div className="editorial-caption">
                  <span>{practice.title} · Sharp Legal &amp; Co.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Advise On */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">02 <span>Capabilities</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">Scope of Counsel</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 64px)', margin: '0 0 16px' }}>
              What We <i>Advise On.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px' }}>
              Our {practice.title.toLowerCase()} practice provides comprehensive counsel across key transactional, operational, and contentious matters.
            </p>
          </div>

          <div className="advise-grid">
            {practice.whatWeAdviseOn.map((item, idx) => (
              <div className="advise-card" key={idx}>
                <p className="eyebrow" style={{ fontSize: '10px', marginBottom: '12px' }}>
                  AREA {String(idx + 1).padStart(2, '0')}
                </p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="dark-section">
          <div className="dark-inner">
            <div className="section-label light">03 <span style={{ color: 'var(--muted-light)' }}>Procedural Rigor</span></div>
            <div style={{ marginTop: '30px' }}>
              <p className="eyebrow" style={{ color: 'var(--gold)' }}>Our Method</p>
              <h2>A Disciplined <i>Process.</i></h2>
            </div>

            <div className="defines-grid">
              {practice.approach.map((step) => (
                <div className="defines-card" key={step.number}>
                  <span className="defines-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="why-matters-box">
            <div className="section-label" style={{ marginBottom: '20px' }}>
              04 <span>Commercial Context</span>
            </div>
            <p className="eyebrow">Industry Reality</p>
            <h2>Why This <i>Matters.</i></h2>
            <div className="why-matters-paragraphs">
              {practice.whyThisMatters.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Related Practice Areas */}
        <section className="section">
          <div className="section-label">05 <span>Interconnected Disciplines</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">Related Practices</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 64px)', margin: '0 0 16px' }}>
              You may also be <i>interested in.</i>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '17px' }}>
              Our clients frequently combine our {practice.title.toLowerCase()} counsel with adjacent legal practices.
            </p>
          </div>

          <div className="related-practices-grid">
            {relatedPractices.map((rel) => (
              <Link href={`/practice-areas/${rel.slug}`} className="related-practice-card" key={rel.slug}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>
                      {rel.number}
                    </span>
                    <ArrowUpRight size={16} color="var(--gold)" />
                  </div>
                  <h3>{rel.title}</h3>
                  <p>{rel.short}</p>
                </div>
                <span className="text-link">Explore Area <ArrowUpRight size={13} /></span>
              </Link>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-label">06 <span>FAQ</span></div>
          <div style={{ marginTop: '40px', textAlign: 'center', maxWidth: '720px', margin: '40px auto 0' }}>
            <p className="eyebrow">Practical Guidance</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 60px)' }}>
              Frequently Asked <i>Questions.</i>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px' }}>
              Key questions regarding regulatory procedures, tribunal representation, and our engagement terms.
            </p>
          </div>

          <div className="faq-section" style={{ padding: '20px 0 0' }}>
            <FAQAccordion items={practice.faqs} />
          </div>
        </section>

        <CTA
          heading={`Have a matter in ${practice.title}?`}
          buttonText="Discuss Your Matter"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
