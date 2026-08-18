import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { LegalDisclaimer } from '@/components/legal/LegalDisclaimer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sharplegal.in'),
  title: { default: 'Sharp Legal & Co. | Clarity when it matters', template: '%s | Sharp Legal & Co.' },
  description: 'Sharp Legal & Co. is an independent law firm for organisations navigating complexity, change and opportunity.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Sharp Legal & Co. | Clarity when it matters', description: 'Independent counsel for consequential decisions.', type: 'website', siteName: 'Sharp Legal & Co.' },
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
