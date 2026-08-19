import Link from 'next/link'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'

export const metadata = {
  title: 'Terms of Use | Sharp Legal & Co.',
  description: 'Terms governing the access, navigation, and informational use of the Sharp Legal & Co. website.'
}

export default function TermsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Terms of Use' }]}
          eyebrow="LEGAL NOTICES"
          title="Terms of"
          italic="Use."
          intro="Please review the operational terms governing your access to and interaction with this website."
        />

        <article className="legal-page-body">
          <div className="section-label">01 <span>Terms of Access</span></div>
          <h2>1. Informational Purpose Only</h2>
          <p>
            The material provided on this website is for general informational and educational purposes only. It is not intended to constitute, and should not be relied upon as, formal legal advice on any specific factual or regulatory scenario.
          </p>

          <h2>2. No Lawyer-Client Relationship</h2>
          <p>
            Accessing this website, viewing its publications, or submitting an electronic inquiry through our forms does not create an advocate-client or solicitor-client relationship between you and Sharp Legal &amp; Co. An advocate-client relationship is formally established only upon the mutual execution of an Engagement Letter and completion of conflict checks.
          </p>

          <h2>3. Intellectual Property &amp; Copyright</h2>
          <p>
            All text, editorial insights, articles, architectural imagery, design motifs, and branding displayed on this website are the proprietary intellectual property of Sharp Legal &amp; Co. Reproduction, distribution, or unauthorized adaptation of any website material without prior written authorization is strictly prohibited.
          </p>

          <h2>4. Accuracy &amp; Regulatory Evolution</h2>
          <p>
            While Sharp Legal &amp; Co. endeavors to maintain the accuracy of published insights, Indian statutory frameworks, regulatory tariff orders, and judicial precedents evolve continuously. The firm disclaims any liability for actions taken or omitted based upon the general contents of this website.
          </p>

          <h2>5. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Gurugram / New Delhi, India.
          </p>
        </article>

        <CTA
          heading="Ready to discuss your legal requirements?"
          buttonText="Start a Conversation"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
