import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { firmInsights, address, type FirmInsight } from '@/lib/practices'

export function generateStaticParams() {
  return firmInsights.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const insight = firmInsights.find((x) => x.slug === slug)
  return {
    title: insight ? `${insight.title} | Sharp Legal & Co.` : 'Legal Insight | Sharp Legal & Co.',
    description: insight?.excerpt || 'Sharp Legal & Co. legal perspectives and publications.'
  }
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const insight = firmInsights.find((x) => x.slug === slug)

  if (!insight) {
    notFound()
  }

  const relatedInsights = firmInsights
    .filter((x) => x.slug !== insight.slug)
    .slice(0, 3)

  return (
    <SiteShell>
      <main>
        <article className="article-detail-layout">
          <div className="article-header">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-segment">
                <span className="breadcrumb-sep">/</span>
                <Link href="/insights">Insights</Link>
              </span>
              <span className="breadcrumb-segment">
                <span className="breadcrumb-sep">/</span>
                <span className="breadcrumb-current">{insight.category}</span>
              </span>
            </nav>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', margin: '20px 0 10px' }}>
              <span className="eyebrow" style={{ margin: 0 }}>{insight.category}</span>
              <span style={{ color: 'var(--muted)', fontSize: '11px' }}>· {insight.date} · {insight.readTime}</span>
            </div>

            <h1>{insight.title}</h1>
          </div>

          <div className="article-lead">
            {insight.lead}
          </div>

          <div className="article-featured-img">
            <img src={insight.image} alt={insight.title} />
          </div>

          <div className="article-body-content">
            {insight.sections.map((section, idx) => (
              <div key={idx}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            ))}

            {insight.pullQuote && (
              <blockquote className="article-pullquote">
                <p>&ldquo;{insight.pullQuote.quote}&rdquo;</p>
                <cite>— {insight.pullQuote.author}</cite>
              </blockquote>
            )}

            {insight.takeaways && insight.takeaways.length > 0 && (
              <div className="article-takeaways">
                <p className="eyebrow" style={{ color: 'var(--navy)' }}>Key Executive Takeaways</p>
                <h3>Strategic Summary</h3>
                <ul>
                  {insight.takeaways.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="article-footer-meta">
            <span>Published by Sharp Legal &amp; Co. Editorial Group</span>
            <span>{address}</span>
          </div>
        </article>

        {/* Related Insights */}
        <section className="section" style={{ borderTop: '1px solid var(--line)', background: '#ffffff' }}>
          <div className="section-label">01 <span>Related Thinking</span></div>
          <div style={{ marginTop: '30px' }}>
            <p className="eyebrow">Continue Reading</p>
            <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', margin: '0 0 40px' }}>
              More from the <i>firm.</i>
            </h2>
          </div>

          <div className="insight-grid-v2">
            {relatedInsights.map((item) => (
              <article className="insight-card-v2" key={item.slug}>
                <div className="insight-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="insight-card-body">
                  <div className="insight-card-meta">
                    <span className="insight-cat">{item.category}</span>
                    <span className="insight-readtime">{item.readTime}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="insight-card-footer">
                    <span>{item.date}</span>
                    <Link href={`/insights/${item.slug}`} className="text-link">
                      <span>Read Article</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CTA
          heading="Discuss how these developments affect your organization."
          buttonText="Start a Conversation"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
