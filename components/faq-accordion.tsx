'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '@/lib/practices'

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="faq-list">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={idx} className={`faq-item ${isOpen ? 'is-active' : ''}`}>
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown className={`faq-icon ${isOpen ? 'rotate-180' : ''}`} size={18} />
            </button>
            <div className={`faq-answer ${isOpen ? 'is-open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
