import Link from 'next/link'
import { SiteShell, PageHero, CTA } from '@/components/site-shell'

export const metadata = {
  title: 'Disclaimer | Sharp Legal & Co.',
  description: 'Bar Council of India compliance disclaimer and terms of access for Sharp Legal & Co.'
}

export default function DisclaimerPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          breadcrumbs={[{ label: 'Disclaimer' }]}
          eyebrow="REGULATORY COMPLIANCE"
          title="Important"
          italic="Disclaimer."
          intro="Mandatory compliance declaration in accordance with the rules of the Bar Council of India."
        />

        <article className="legal-page-body">
          <div className="section-label">01 <span>Bar Council Notice</span></div>
          <h2>1. Bar Council of India Compliance</h2>
          <p>
            Under the rules established by the Bar Council of India, advocates and law firms are prohibited from soliciting work or advertising their professional capabilities. By accessing this website (www.sharplegal.in), you expressly acknowledge and confirm that:
          </p>
          <ul>
            <li>You are seeking information relating to Sharp Legal &amp; Co. of your own accord, and that there has been no form of solicitation, advertisement, or inducement by the Firm or its members.</li>
            <li>The contents of this website are intended solely to provide general information about the Firm’s areas of practice and legal publications.</li>
            <li>No material on this website constitutes legal advice, an offer to provide legal representation, or a solicitation of business.</li>
            <li>Sharp Legal &amp; Co. assumes no liability for the interpretation or use of the information contained on this website.</li>
          </ul>

          <h2>2. No Privilege on Initial Inquiries</h2>
          <p>
            Please note that unsolicited communication through electronic mail or contact webforms does not enjoy statutory advocate-client privilege until a formal mandate has been executed. Visitors are cautioned not to transmit proprietary or sensitive case documents through unverified web channels.
          </p>

          <h2>3. Past Outcomes &amp; Legal Discretion</h2>
          <p>
            Any reference to past proceedings, reported judgments, or statutory precedents is provided purely for legal analysis and educational review. Past results do not guarantee similar outcomes in subsequent disputes, as every matter turns on its distinct facts and evidentiary record.
          </p>
        </article>

        <CTA
          heading="Have a matter that requires careful legal thinking?"
          buttonText="Start a Conversation"
          href="/contact"
        />
      </main>
    </SiteShell>
  )
}
