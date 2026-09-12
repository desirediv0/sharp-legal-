import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { services } from '@/lib/practices'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Legal services from Sharp Legal & Co.: electricity matters, corporate and commercial, dispute resolution, employment and labour, civil service matters, arbitration, real estate, NBFC services, industrial subsidies, and insurance matters.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Sharp Legal & Co.',
    description: 'Ten areas of law we help businesses and individuals with, explained simply.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Services' }]}
          eyebrow="SERVICES WE OFFER"
          title="What we can"
          italic="help you with."
          intro="Ten areas of law, explained in plain language. Energy, electricity and regulatory law is our core practice; the rest support the businesses and individuals we work with."
          bgImage="/images/services-hero.jpg"
        />

        <section className="section">
          <div className="section-label">01 <span>All Services</span></div>

          <div className="practice-overview-list" style={{ marginTop: '50px' }}>
            {services.map((s) => (
              <div className="practice-overview-row" key={s.slug} id={s.slug}>
                <span className="practice-overview-num">{s.number}</span>
                <div className="practice-overview-content">
                  <h2>{s.title}</h2>
                  <p>{s.description}</p>

                  <div className="practice-capabilities-tags">
                    {s.whatWeDo.slice(0, 3).map((item) => (
                      <span className="practice-tag" key={item}>{item.split(':')[0]}</span>
                    ))}
                  </div>

                  <Link href={`/services/${s.slug}`} className="button button-gold">
                    <span>Learn more</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

                <div className="practice-overview-media">
                  <img src={s.image} alt={s.title} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTA
          eyebrow="NOT SURE WHICH ONE FITS?"
          heading="Tell us your problem and we will point you to the right service."
          buttonText="Contact Us"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
