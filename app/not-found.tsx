import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell } from '@/components/site-shell'

export default function NotFound() {
  return (
    <SiteShell>
      <main>
        <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow">404</p>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', margin: '20px 0' }}>
              Page not<br /><i>found.</i>
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px' }}>
              The page you are looking for does not exist or has been moved.
            </p>
            <Link className="button button-gold" href="/">
              <span>Return Home</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
