'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X, ArrowRight, Mail, Phone, Globe } from 'lucide-react'
import { practices, phone, email, website, address } from '@/lib/practices'

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item, idx) => (
        <span key={idx} className="breadcrumb-segment">
          <span className="breadcrumb-sep">/</span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="breadcrumb-current" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [practiceOpen, setPracticeOpen] = useState(false)

  return (
    <header className="site-header">
      <Link href="/" className="header-logo-link" onClick={() => { setOpen(false); setPracticeOpen(false); }}>
        <Image
          src="/logo.png"
          alt="Sharp Legal & Co. Advocates Solicitors Consultants"
          width={240}
          height={58}
          className="header-logo"
          priority
        />
      </Link>

      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        <Link href="/about" onClick={() => setOpen(false)}>The Firm</Link>

        <div
          className="nav-dropdown"
          onMouseEnter={() => setPracticeOpen(true)}
          onMouseLeave={() => setPracticeOpen(false)}
        >
          <button
            type="button"
            className="dropdown-trigger"
            onClick={() => setPracticeOpen(!practiceOpen)}
            aria-expanded={practiceOpen}
          >
            <span>Practices &amp; Sectors</span>
            <ChevronDown size={14} className={practiceOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
          </button>

          <div className={`dropdown-menu ${practiceOpen ? 'is-visible' : ''}`}>
            <div className="dropdown-header">
              <span className="eyebrow-small">AREAS OF SPECIALIZATION · TECHNO-LEGAL COUNSEL</span>
            </div>
            <div className="dropdown-items">
              {practices.map((p) => (
                <Link
                  key={p.slug}
                  href={`/practice-areas/${p.slug}`}
                  className="dropdown-item"
                  onClick={() => { setOpen(false); setPracticeOpen(false); }}
                >
                  <span className="dropdown-num">{p.number}</span>
                  <div className="dropdown-text">
                    <span className="dropdown-title">{p.title}</span>
                    <span className="dropdown-desc">{p.short}</span>
                  </div>
                  <ArrowUpRight className="dropdown-arrow" size={14} />
                </Link>
              ))}
            </div>
            <div className="dropdown-footer">
              <Link
                href="/practice-areas"
                className="dropdown-all-link"
                onClick={() => { setOpen(false); setPracticeOpen(false); }}
              >
                <span>Explore all 7 practice areas</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        <Link href="/expertise" onClick={() => setOpen(false)}>Expertise</Link>
        <Link href="/insights" onClick={() => setOpen(false)}>Insights</Link>
        <Link className="nav-contact" href="/contact" onClick={() => setOpen(false)}>
          <span>Initiate Deliberation</span>
          <ArrowUpRight size={15} />
        </Link>
      </nav>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer-v2">
      <div className="footer-top">
        <div className="footer-column brand-column">
          <Link href="/" className="footer-logo-link">
            <Image
              src="/logo.png"
              alt="Sharp Legal & Co. Advocates Solicitors Consultants"
              width={240}
              height={58}
              className="footer-logo"
            />
          </Link>
          <p className="footer-bio">
            Sharp Legal &amp; Co. is an elite techno-legal law firm advising corporations, energy developers, and institutional enterprises across India. Combining deep sector fluency with courtroom mastery, we provide senior-led counsel across energy regulation, complex commercial litigation, domestic and international arbitration, and strategic corporate transactions.
          </p>
          <div className="footer-trust-tag">
            <span>Gurugram (Delhi NCR) · Pan-India Judicial &amp; Regulatory Practice</span>
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-col-title">The Firm</p>
          <ul className="footer-links">
            <li><Link href="/about">Chambers Profile</Link></li>
            <li><Link href="/expertise">Sectoral Expertise</Link></li>
            <li><Link href="/practice-areas">Practice Disciplines</Link></li>
            <li><Link href="/insights">Jurisprudential Insights</Link></li>
            <li><Link href="/contact">Initiate Deliberation</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-col-title">Practice Disciplines</p>
          <ul className="footer-links">
            {practices.map((p) => (
              <li key={p.slug}>
                <Link href={`/practice-areas/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column contact-column">
          <p className="footer-col-title">Chambers Secretariat</p>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <span className="label">Direct Line</span>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="value">{phone}</a>
            </div>
            <div className="footer-contact-item">
              <span className="label">Confidential Inquiries</span>
              <a href={`mailto:${email}`} className="value">{email}</a>
            </div>
            <div className="footer-contact-item">
              <span className="label">Official Portal</span>
              <a href="https://www.sharplegal.in" target="_blank" rel="noopener noreferrer" className="value">{website}</a>
            </div>
            <div className="footer-contact-item">
              <span className="label">Chambers Coordinates</span>
              <span className="value">{address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Official Address Ribbon */}
      <div className="footer-address-ribbon">
        <div className="footer-ribbon-line">
          <span className="ribbon-line" />
          <span className="ribbon-diamond">◆</span>
          <span className="ribbon-line" />
        </div>
        <p className="footer-ribbon-address">{address}</p>
        <div className="footer-ribbon-contacts">
          <a href={`mailto:${email}`} className="ribbon-contact-item">
            <Mail size={13} className="ribbon-icon" />
            <span>{email}</span>
          </a>
          <span className="ribbon-sep">|</span>
          <a href={`tel:${phone.replace(/\s+/g, '')}`} className="ribbon-contact-item">
            <Phone size={13} className="ribbon-icon" />
            <span>{phone}</span>
          </a>
          <span className="ribbon-sep">|</span>
          <a href="https://www.sharplegal.in" target="_blank" rel="noopener noreferrer" className="ribbon-contact-item">
            <Globe size={13} className="ribbon-icon" />
            <span>{website}</span>
          </a>
        </div>
      </div>

      {/* Bar Council of India Advisory Note */}
      <div className="footer-disclaimer-note">
        <strong>Regulatory Notice:</strong> Under the rules of the Bar Council of India, Sharp Legal &amp; Co. does not solicit work or advertise legal services. The contents of this portal are intended solely for general institutional and informational purposes regarding our practice disciplines and techno-legal capabilities.
      </div>

      <div className="footer-bottom">
        <span className="copyright">© 2026 Sharp Legal &amp; Co. Advocates · Solicitors · Consultants. All rights reserved.</span>
        <div className="legal-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/disclaimer">Bar Council Disclaimer</Link>
        </div>
      </div>
    </footer>
  )
}

export function PageHero({
  eyebrow,
  title,
  italic,
  intro,
  breadcrumbs,
  bgImage
}: {
  eyebrow: string
  title: string
  italic?: string
  intro?: string
  breadcrumbs?: { label: string; href?: string }[]
  bgImage?: string
}) {
  const style = bgImage
    ? {
      backgroundImage: `linear-gradient(115deg, rgba(248,247,243,0.96) 0%, rgba(248,247,243,0.85) 55%, rgba(248,247,243,0.65) 100%), url('${bgImage}')`
    }
    : undefined

  return (
    <section className="page-hero" style={style}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <div className="page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title} {italic && <i>{italic}</i>}
        </h1>
        {intro && <p className="hero-copy">{intro}</p>}
      </div>
    </section>
  )
}

export function CTA({
  eyebrow = "CONFIDENTIAL DELIBERATION",
  heading = "When strategic decisions carry significant legal consequence.",
  buttonText = "Initiate a Consultation",
  href = "/contact"
}: {
  eyebrow?: string
  heading?: string
  buttonText?: string
  href?: string
}) {
  return (
    <section className="cta-band">
      <div className="cta-content">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
      </div>
      <Link className="button button-gold" href={href}>
        <span>{buttonText}</span>
        <ArrowUpRight size={16} />
      </Link>
    </section>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
