import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { LegalDisclaimer } from '@/components/legal/LegalDisclaimer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sharplegal.in'),
  title: { default: 'Sharp Legal & Co. | Advocates · Solicitors · Consultants', template: '%s | Sharp Legal & Co.' },
  description: 'Sharp Legal & Co. is a Gurugram law firm that helps people and businesses fight cases against electricity companies, and handles corporate, real estate, employment, insurance, and dispute work across India.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Sharp Legal & Co. | Clarity when it matters', description: 'Lawyers who take on electricity companies for homeowners, societies, shops, and factories across India.', type: 'website', siteName: 'Sharp Legal & Co.' },
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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <LegalDisclaimer />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
