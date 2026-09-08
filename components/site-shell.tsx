'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X, ArrowRight, Mail, Phone, Clock, MapPin } from 'lucide-react'
import { services, phone, email, address, hours, mapsUrl } from '@/lib/practices'

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
  const [servicesOpen, setServicesOpen] = useState(false)
  // Hover-to-open only on devices that actually hover; on touch the button toggles.
  const [canHover, setCanHover] = useState(false)
  const closeAll = () => { setOpen(false); setServicesOpen(false) }

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Lock page scroll while the mobile menu is open; the menu scrolls on its own.
  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className="site-header">
      <Link href="/" className="header-logo-link" onClick={closeAll}>
        <Image
          src="/logo.png"
          alt="Sharp Legal & Co. Advocates Solicitors Consultants"
          width={240}
          height={50}
          className="header-logo"
          priority
        />
      </Link>

      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        <Link href="/" onClick={closeAll}>Home</Link>
        <Link href="/about" onClick={closeAll}>About Us</Link>

        <div
          className="nav-dropdown"
          onMouseEnter={canHover ? () => setServicesOpen(true) : undefined}
          onMouseLeave={canHover ? () => setServicesOpen(false) : undefined}
        >
          <button
            type="button"
            className="dropdown-trigger"
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
          >
            <span>Services</span>
            <ChevronDown size={14} className={servicesOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
          </button>

          <div className={`dropdown-menu ${servicesOpen ? 'is-visible' : ''}`}>
            <div className="dropdown-header">
              <span className="eyebrow-small">WHAT WE HELP WITH</span>
            </div>
            <div className="dropdown-items">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="dropdown-item"
                  onClick={closeAll}
                >
                  <span className="dropdown-num">{s.number}</span>
                  <div className="dropdown-text">
                    <span className="dropdown-title">{s.title}</span>
                    <span className="dropdown-desc">{s.short}</span>
                  </div>
                  <ArrowUpRight className="dropdown-arrow" size={14} />
                </Link>
              ))}
            </div>
            <div className="dropdown-footer">
              <Link href="/services" className="dropdown-all-link" onClick={closeAll}>
                <span>See all {services.length} services</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        <Link href="/clients" onClick={closeAll}>Clients</Link>
        <Link href="/careers" onClick={closeAll}>Careers</Link>
        <Link className="nav-contact" href="/contact" onClick={closeAll}>
          <span>Contact Us</span>
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
              height={50}
              className="footer-logo"
            />
          </Link>
          <p className="footer-bio">
            Sharp Legal &amp; Co. is a law firm in Gurugram that helps people and businesses fight cases against electricity companies. We also handle corporate, real estate, employment, insurance, and dispute work across India.
          </p>
          <div className="footer-trust-tag">
            <span>Gurugram, Delhi NCR · Practising across India</span>
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-col-title">Quick Links</p>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-col-title">Services</p>
          <ul className="footer-links">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column contact-column">
          <p className="footer-col-title">Get in Touch</p>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <span className="label">Phone</span>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="value">{phone}</a>
            </div>
            <div className="footer-contact-item">
              <span className="label">Email</span>
              <a href={`mailto:${email}`} className="value">{email}</a>
            </div>
            <div className="footer-contact-item">
              <span className="label">Office Hours</span>
              <span className="value">{hours}</span>
            </div>
            <div className="footer-contact-item">
              <span className="label">Address</span>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="value">{address}</a>
            </div>
          </div>
        </div>
      </div>

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
          <span className="ribbon-contact-item">
            <Clock size={13} className="ribbon-icon" />
            <span>Mon to Sat, 9 AM to 8 PM</span>
          </span>
        </div>
      </div>

      <div className="footer-disclaimer-note">
        <strong>Note:</strong> As per Bar Council of India rules, we do not advertise or solicit work. This website only gives general information about our firm and the areas we work in. It is not legal advice.
      </div>

      <div className="footer-bottom">
        <span className="copyright">© 2026 Sharp Legal &amp; Co. Advocates · Solicitors · Consultants. All rights reserved.</span>
        <div className="legal-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/disclaimer">Disclaimer</Link>
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
  eyebrow = "TALK TO US",
  heading = "Have a legal question? Let's discuss it.",
  buttonText = "Contact Us",
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

/** Compact address / phone / hours block reused on About, Contact and Careers. */
export function OfficeDetails({ dark = false }: { dark?: boolean }) {
  return (
    <div className={dark ? 'office-details office-details-dark' : 'office-details'}>
      <div className="office-detail-row">
        <MapPin size={16} className="office-detail-icon" />
        <div>
          <span className="office-detail-label">Office</span>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">{address}</a>
        </div>
      </div>
      <div className="office-detail-row">
        <Phone size={16} className="office-detail-icon" />
        <div>
          <span className="office-detail-label">Phone</span>
          <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
        </div>
      </div>
      <div className="office-detail-row">
        <Mail size={16} className="office-detail-icon" />
        <div>
          <span className="office-detail-label">Email</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className="office-detail-row">
        <Clock size={16} className="office-detail-icon" />
        <div>
          <span className="office-detail-label">Hours</span>
          <span>{hours}</span>
        </div>
      </div>
    </div>
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
