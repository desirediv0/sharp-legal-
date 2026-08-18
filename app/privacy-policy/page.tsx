import Link from 'next/link'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'

export const metadata = {
  title: 'Privacy Policy | Sharp Legal & Co.',
  description: 'Privacy Policy and data protection standards governing the use of the Sharp Legal & Co. website.'
}

export default function PrivacyPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Privacy Policy' }]}
          eyebrow="LEGAL NOTICES"
          title="Privacy"
          italic="Policy."
          intro="Sharp Legal & Co. is dedicated to maintaining the confidentiality and integrity of all personal and professional information entrusted to us."
        />

        <article className="legal-page-body">
          <div className="section-label">01 <span>Data Protection</span></div>
          <h2>1. Introduction &amp; Scope</h2>
          <p>
            This Privacy Policy outlines how Sharp Legal &amp; Co. (&ldquo;the Firm&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, protects, and handles information provided by visitors, clients, and prospective clients interacting through our website (www.sharplegal.in) or electronic communications.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal and organizational details when you voluntarily submit queries through our contact forms or engage in preliminary discussions, including:
          </p>
          <ul>
            <li>Full Name, professional designation, and corporate entity name</li>
            <li>Contact details such as official email address and telephone numbers</li>
            <li>Information regarding the broad nature of the legal subject or sector of inquiry</li>
            <li>Technical data such as IP address and browser telemetry collected solely for security and performance optimization</li>
          </ul>

          <h2>3. Purpose and Legal Basis of Processing</h2>
          <p>
            The Firm processes your information strictly for the following legitimate professional purposes:
          </p>
          <ul>
            <li>To assess and respond to your direct inquiries or requests for preliminary consultations</li>
            <li>To ensure compliance with the Bar Council of India standards and conflict-of-interest checks</li>
            <li>To provide legal updates, client publications, and regulatory newsletters when requested</li>
            <li>To safeguard our digital infrastructure against security breaches and unauthorized access</li>
          </ul>

          <h2>4. Confidentiality &amp; Information Security</h2>
          <p>
            As a legal practice, we maintain stringent security protocols, physical access restrictions, and encrypted communication channels. Information submitted to the firm is treated with the highest standard of professional care. We never sell, lease, or commercially exploit personal information.
          </p>

          <h2>5. Third-Party Disclosures</h2>
          <p>
            We do not disclose personal information to external third parties except where required by law, pursuant to court orders or regulatory mandates, or with your explicit professional consent.
          </p>

          <h2>6. Contact Regarding Privacy</h2>
          <p>
            For any queries regarding this Privacy Policy or your personal information, please write to our designated office at <a href="mailto:info@sharplegal.in" style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline' }}>info@sharplegal.in</a>.
          </p>
        </article>

        <CTA
          heading="Have questions regarding legal representation?"
          buttonText="Contact Chambers"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
