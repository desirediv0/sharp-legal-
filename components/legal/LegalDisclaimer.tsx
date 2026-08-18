'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, Scale, ShieldCheck } from 'lucide-react'
import { legalDisclaimerData } from '@/lib/legalDisclaimer'

export function LegalDisclaimer() {
  const [mounted, setMounted] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
    try {
      const accepted = sessionStorage.getItem('sharp-legal-disclaimer-accepted')
      if (!accepted) {
        setShowDisclaimer(true)
      }
    } catch {
      setShowDisclaimer(true)
    }
  }, [])

  useEffect(() => {
    if (!mounted || !showDisclaimer) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    if (buttonRef.current) {
      buttonRef.current.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mounted, showDisclaimer])

  const handleProceed = () => {
    try {
      sessionStorage.setItem('sharp-legal-disclaimer-accepted', 'true')
    } catch (err) {
      console.warn('Unable to write to sessionStorage', err)
    }
    setShowDisclaimer(false)
  }

  if (!mounted || !showDisclaimer) {
    return null
  }

  return (
    <div
      className="disclaimer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-modal-title"
      aria-describedby="disclaimer-modal-desc"
    >
      <div className="disclaimer-modal">
        {/* Header */}
        <div className="disclaimer-header">
          <div className="disclaimer-brand">
            <div className="disclaimer-logo-wrap">
              <Image
                src="/logo.png"
                alt="Sharp Legal & Co."
                width={200}
                height={50}
                className="disclaimer-logo"
              />
            </div>
            <div className="disclaimer-badge-icon" aria-hidden="true">
              <Scale size={20} color="var(--gold)" />
            </div>
          </div>

          <div className="disclaimer-heading-block">
            <p className="disclaimer-eyebrow">{legalDisclaimerData.eyebrow}</p>
            <h2 id="disclaimer-modal-title">{legalDisclaimerData.title}</h2>
            <p className="disclaimer-subtitle">{legalDisclaimerData.subtitle}</p>
          </div>
          <div className="disclaimer-gold-line" />
        </div>

        {/* Scrollable Content */}
        <div className="disclaimer-body" id="disclaimer-modal-desc">
          <p className="disclaimer-intro">{legalDisclaimerData.intro}</p>

          <ul className="disclaimer-points-list">
            {legalDisclaimerData.points.map((point, index) => (
              <li key={index} className="disclaimer-point-item">
                <span className="disclaimer-bullet-diamond" aria-hidden="true">◆</span>
                <span className="disclaimer-point-text">{point}</span>
              </li>
            ))}
          </ul>

          {/* Highlighted Notice Box */}
          <div className="disclaimer-highlight-box">
            <div className="disclaimer-highlight-header">
              <ShieldCheck size={16} color="var(--gold)" />
              <span>{legalDisclaimerData.importantNotice.badge}</span>
            </div>
            <p>{legalDisclaimerData.importantNotice.text}</p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="disclaimer-footer">
          <p className="disclaimer-confirm-note">
            By clicking “Proceed to Website”, you confirm that you have read and understood this disclaimer.
          </p>
          <button
            type="button"
            ref={buttonRef}
            className="disclaimer-btn-proceed"
            onClick={handleProceed}
          >
            <span>{legalDisclaimerData.buttonText}</span>
            <ArrowRight size={16} className="disclaimer-btn-arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}
