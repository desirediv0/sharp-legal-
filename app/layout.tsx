import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { LegalDisclaimer } from '@/components/legal/LegalDisclaimer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sharplegal.in'),
  title: { default: 'Sharp Legal & Co. | Advocates · Solicitors · Consultants', template: '%s | Sharp Legal & Co.' },
  description: 'Sharp Legal & Co. is a specialized techno-legal law firm advising on electricity and energy law, regulatory litigation, commercial disputes, and corporate advisory across India.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Sharp Legal & Co. | Clarity when it matters', description: 'Sharp Legal & Co. is a strong techno-legal team of professionals specializing in energy law, regulatory litigation, commercial disputes, and corporate advisory.', type: 'website', siteName: 'Sharp Legal & Co.' },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f7f3',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <LegalDisclaimer />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
