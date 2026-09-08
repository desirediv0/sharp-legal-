import type { Metadata } from 'next'
import { Building2 } from 'lucide-react'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'
import { clients } from '@/lib/practices'

export const metadata: Metadata = {
  title: 'Clients',
  description:
    'Businesses Sharp Legal & Co. works with, including Suncity Projects, Satya Developers, Mapsco, Avtar Steels, Singla Forging, CREDAI, TDI, BILT Papers, Sainson Papers, and many more.',
  alternates: { canonical: '/clients' },
  openGraph: {
    title: 'Clients | Sharp Legal & Co.',
    description: 'Real estate developers, manufacturers, and industry groups that trust us.',
    type: 'website',
  },
}

export default function ClientsPage() {
  const sectors = Array.from(new Set(clients.map((c) => c.sector.split(' ')[0])))

  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Clients' }]}
          eyebrow="OUR CLIENTS"
          title="Businesses that"
          italic="trust us."
          intro="We work with real estate developers, steel and paper manufacturers, and industry associations. Here are some of them."
          bgImage="/images/clients-hero.jpg"
        />

        <section className="section">
          <div className="section-label">01 <span>Who We Work With</span></div>
          <div style={{ marginTop: '40px' }}>
            <p className="eyebrow">{clients.length}+ BUSINESSES ACROSS {sectors.length} SECTORS</p>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 60px)', margin: '0 0 16px' }}>
              Our <i>clients.</i>
            </h2>
          </div>

          <div className="client-grid">
            {clients.map((c) => (
              <div className="client-card" key={c.name}>
                {c.logo ? (
                  <img src={c.logo} alt={`${c.name} logo`} className="client-logo" />
                ) : (
                  <div className="client-wordmark">
                    <Building2 size={22} className="client-wordmark-icon" />
                    <span className="client-name">{c.name}</span>
                  </div>
                )}
                <span className="client-caption">{c.name}</span>
              </div>
            ))}
            <div className="client-card client-card-more">
              <span className="client-more-amp">&amp;</span>
              <span className="client-more-text">many more</span>
              <span className="client-sector">Across India</span>
            </div>
          </div>

          <p className="client-note">
            Client names are shown with their permission. Logos are the property of their respective owners.
          </p>
        </section>

        <CTA
          eyebrow="JOIN THEM"
          heading="Want a law firm that understands your industry?"
          buttonText="Contact Us"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
