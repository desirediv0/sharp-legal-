export type FAQItem = {
  question: string
  answer: string
}

export type Service = {
  slug: string
  /** Old URLs that should still resolve to this service. */
  aliases?: string[]
  number: string
  title: string
  /** One line, shown in cards and the nav dropdown. */
  short: string
  /** Two or three plain sentences, shown at the top of the detail page. */
  description: string
  image: string
  /** Plain-English list of what the firm actually helps with. */
  whatWeDo: string[]
  whoWeHelp: string[]
  faqs: FAQItem[]
  relatedSlugs: string[]
}

export const services: Service[] = [
  {
    slug: 'electricity-matters',
    aliases: ['energy-electricity-law', 'electricity-energy-law', 'regulatory-litigation'],
    number: '01',
    title: 'Electricity Matters',
    short: 'Regulatory, commercial, and supply disputes in the electricity sector, before Commissions, APTEL, and High Courts.',
    description:
      'Energy, electricity, and regulatory law is our core practice. We advise and represent generators, renewable energy developers, industries, housing societies, and consumers in disputes with distribution companies and regulators: tariff and open access matters, power purchase agreements, billing and supply disputes, theft and unauthorised-use notices, and connection issues. We appear before State Electricity Regulatory Commissions, the Appellate Tribunal for Electricity (APTEL), the Electricity Ombudsman, consumer forums, and High Courts.',
    image: '/images/svc-electricity.jpg',
    whatWeDo: [
      'Tariff, open access, and regulatory petitions before State Electricity Commissions and APTEL',
      'Power Purchase Agreements, renewable energy, and captive or distributed generation matters',
      'Wrong or inflated bills: challenging arrears, average billing, and wrong tariff categories',
      'Disconnection: getting supply restored quickly and stopping illegal disconnections',
      'Theft and unauthorised-use notices under Sections 126 and 135 of the Electricity Act',
      'Meter disputes, new connections, and load enhancement',
      'Compensation claims for electrocution, fires, and damage caused by the distribution company',
    ],
    whoWeHelp: [
      'Power generators and renewable energy developers',
      'Industries and open access consumers',
      'Builders and developers with bulk connections',
      'Housing societies and RWAs',
      'Homeowners, shops, and commercial buildings',
    ],
    faqs: [
      {
        question: 'Where do I complain against my electricity company?',
        answer:
          'Usually first to the Consumer Grievance Redressal Forum (CGRF) of the DISCOM, then to the Electricity Ombudsman. Depending on the matter, we may go to the State Electricity Regulatory Commission, a consumer commission, or the High Court. We pick the fastest route for your case.',
      },
      {
        question: 'I have received a theft notice under Section 135. What should I do?',
        answer:
          'Do not sign anything or pay under pressure. Send us the notice and the inspection report right away. Theft notices have strict timelines, and a proper reply at this stage can decide the whole case.',
      },
      {
        question: 'My supply has been disconnected over a disputed bill. Can you get it restored?',
        answer:
          'Yes. We move quickly for urgent interim relief so supply is restored while the bill dispute is decided separately. Call us as soon as the disconnection happens; timelines are short.',
      },
    ],
    relatedSlugs: ['dispute-resolution', 'arbitration', 'industrial-subsidies'],
  },
  {
    slug: 'corporate-and-commercial',
    aliases: ['corporate-advisory'],
    number: '02',
    title: 'Corporate & Commercial',
    short: 'Day-to-day legal support for running and growing a business.',
    description:
      'We help businesses with the legal side of their everyday work: contracts, company matters, partnerships, and compliance. Our advice is practical and written in plain language so decisions can be made quickly.',
    image: '/images/svc-corporate.jpg',
    whatWeDo: [
      'Drafting and reviewing business contracts, vendor agreements, and service agreements',
      'Shareholder agreements, joint ventures, and partnership deeds',
      'Company incorporation, registration, and start-up structuring',
      'Company law compliance and board matters',
      'Mergers, acquisitions, and business restructuring',
      'Franchise, licensing, and e-commerce agreements',
      'Legal due diligence before a deal or investment',
      'Insolvency, winding up, and recovery before NCLT, NCLAT, and DRT',
    ],
    whoWeHelp: [
      'Private companies and family businesses',
      'Real estate and infrastructure groups',
      'Manufacturing and industrial companies',
      'Start-ups and growing businesses',
    ],
    faqs: [
      {
        question: 'Can you act as our regular outside legal counsel?',
        answer:
          'Yes. Many clients retain us on an ongoing basis so they have a lawyer to call whenever a legal question comes up, without hiring an in-house team.',
      },
      {
        question: 'Do you help with contract negotiations?',
        answer:
          'Yes. We review the other side\'s draft, explain the risks in plain terms, and negotiate changes to protect your interests.',
      },
      {
        question: 'How quickly can you review a contract?',
        answer:
          'Simple agreements are usually turned around within two to three working days. We will tell you the timeline upfront.',
      },
    ],
    relatedSlugs: ['dispute-resolution', 'real-estate', 'nbfc-services'],
  },
  {
    slug: 'dispute-resolution',
    aliases: ['civil-litigation', 'criminal-law'],
    number: '03',
    title: 'Dispute Resolution',
    short: 'Representing you in court when a dispute cannot be settled.',
    description:
      'When a disagreement turns into a legal dispute, we represent you in court and tribunals. We first look for a practical settlement, and if that is not possible, we fight the case with full preparation.',
    image: '/images/svc-dispute.jpg',
    whatWeDo: [
      'Civil suits for recovery of money, breach of contract, and injunctions',
      'Writ petitions and appeals before High Courts and the Supreme Court',
      'Commercial disputes under the Commercial Courts Act',
      'Consumer complaints before District, State, and National Commissions: deficiency in service, defective goods, unfair trade practices',
      'Defending businesses against consumer complaints and advising on consumer-law compliance',
      'Cheque bounce (Section 138) and money recovery cases',
      'Insolvency matters before NCLT and NCLAT',
      'Pre-litigation notices, replies, mediation, and settlement negotiations',
    ],
    whoWeHelp: [
      'Companies in a contract or payment dispute',
      'Businesses facing a claim from a customer, vendor, or partner',
      'Consumers with a complaint against a seller or service provider',
      'Individuals with property or money recovery matters',
      'Creditors and debtors in insolvency proceedings',
    ],
    faqs: [
      {
        question: 'How long does a civil case take in India?',
        answer:
          'It depends on the court and the complexity of the case. Commercial Courts and tribunals tend to move faster. We will give you an honest estimate after reviewing your matter.',
      },
      {
        question: 'Will you try to settle before going to court?',
        answer:
          'Yes, wherever it makes sense. A good settlement often saves time and money. But if the other side is not reasonable, we are ready to litigate.',
      },
      {
        question: 'Which courts do you appear in?',
        answer:
          'District Courts, Commercial Courts, the Delhi High Court and other High Courts, NCLT and NCLAT, and the Supreme Court of India.',
      },
    ],
    relatedSlugs: ['arbitration', 'corporate-and-commercial', 'real-estate'],
  },
  {
    slug: 'employment-and-labour',
    number: '04',
    title: 'Employment & Labour',
    short: 'Employment contracts, workplace policies, and labour disputes.',
    description:
      'We advise employers on hiring, managing, and separating from employees the right way. We also represent companies in labour courts and before labour authorities.',
    image: '/images/svc-employment.jpg',
    whatWeDo: [
      'Employment contracts, offer letters, and non-compete clauses',
      'HR policies, POSH (sexual harassment) compliance, and internal committees',
      'Termination, retrenchment, and settlement agreements',
      'Labour law compliance: PF, ESI, gratuity, bonus, and shops and establishments',
      'Representation before Labour Courts and Industrial Tribunals',
      'Handling employee complaints and disciplinary inquiries',
    ],
    whoWeHelp: [
      'Factories and manufacturing units',
      'Real estate developers and contractors',
      'Corporate offices and service companies',
      'HR teams that need a legal sounding board',
    ],
    faqs: [
      {
        question: 'Do we need a POSH committee?',
        answer:
          'Every workplace with ten or more employees must have an Internal Committee under the POSH Act. We help you set it up and train the members.',
      },
      {
        question: 'Can you help us let an employee go safely?',
        answer:
          'Yes. We review the contract and the facts, advise on notice, dues, and documentation, and draft a settlement agreement if needed to avoid a later claim.',
      },
      {
        question: 'Do you handle labour inspections and notices?',
        answer:
          'Yes. We reply to notices from labour authorities and represent you in any follow-up proceedings.',
      },
    ],
    relatedSlugs: ['corporate-and-commercial', 'civil-service-matters', 'dispute-resolution'],
  },
  {
    slug: 'civil-service-matters',
    number: '05',
    title: 'Civil Service Matters',
    short: 'Service law for government employees and public sector staff.',
    description:
      'We represent government and public sector employees in matters about their jobs: promotions, transfers, disciplinary action, pension, and retirement benefits. We appear before the Central Administrative Tribunal (CAT), High Courts, and the Supreme Court.',
    image: '/images/svc-civil-service.jpg',
    whatWeDo: [
      'Challenges to transfers, postings, and denial of promotion',
      'Disciplinary proceedings, charge sheets, and departmental inquiries',
      'Pension, gratuity, and retirement benefit claims',
      'Seniority disputes and pay fixation matters',
      'Compulsory retirement, suspension, and dismissal cases',
      'Petitions before CAT, State Administrative Tribunals, and High Courts',
    ],
    whoWeHelp: [
      'Central and State government employees',
      'Public sector undertaking (PSU) staff',
      'Bank and insurance company employees',
      'Retired employees with pending dues',
    ],
    faqs: [
      {
        question: 'Where do service matters get filed?',
        answer:
          'Central government employees usually approach the Central Administrative Tribunal (CAT). State employees go to the State tribunal or the High Court. We advise on the right forum for your case.',
      },
      {
        question: 'I have received a charge sheet. What should I do first?',
        answer:
          'Do not reply in a hurry. Send us the charge sheet and the supporting documents. A well-drafted reply at this stage can decide the outcome of the whole inquiry.',
      },
      {
        question: 'Can you help with a delayed pension?',
        answer:
          'Yes. We send a legal notice to the department and, if needed, file a petition to get the pension released with interest.',
      },
    ],
    relatedSlugs: ['employment-and-labour', 'dispute-resolution', 'insurance-matters'],
  },
  {
    slug: 'arbitration',
    number: '06',
    title: 'Arbitration',
    short: 'Settling business disputes outside court through arbitration.',
    description:
      'Arbitration is a faster, private way to resolve business disputes without going to court. We act for clients in domestic and international arbitrations and in court proceedings connected to them.',
    image: '/images/svc-arbitration.jpg',
    whatWeDo: [
      'Drafting arbitration clauses that actually work when a dispute arises',
      'Contractual and statutory arbitration, ad-hoc and institutional (DIAC, MCIA, SIAC, ICC)',
      'Statements of claim and defence, evidence, and hearings before the tribunal',
      'Appointment of arbitrators (Section 11) and interim relief (Section 9)',
      'Challenging or enforcing arbitral awards (Sections 34 and 36) and appeals under Section 37',
      'Conciliation and mediation as an alternative to a full arbitration',
      'Construction, EPC, infrastructure, and power supply agreement disputes',
    ],
    whoWeHelp: [
      'Contractors, EPC companies, and project developers',
      'Power producers and their counterparties',
      'Companies with a dispute under a commercial contract',
      'Foreign parties with an Indian counterparty',
    ],
    faqs: [
      {
        question: 'Is arbitration faster than court?',
        answer:
          'Usually, yes. The Arbitration Act sets a 12-month timeline for the award (extendable by 6 months). Court litigation can take much longer.',
      },
      {
        question: 'Can I get urgent relief while arbitration is pending?',
        answer:
          'Yes. Section 9 of the Arbitration Act lets you ask a court for interim protection, such as stopping a bank guarantee encashment or preserving assets.',
      },
      {
        question: 'Can an arbitration award be challenged?',
        answer:
          'Only on limited grounds under Section 34, and within a strict time limit. We advise on whether a challenge is realistic before you spend money on it.',
      },
    ],
    relatedSlugs: ['dispute-resolution', 'electricity-matters', 'corporate-and-commercial'],
  },
  {
    slug: 'real-estate',
    aliases: ['rera'],
    number: '07',
    title: 'Real Estate',
    short: 'Property law for developers, buyers, and landowners, including RERA.',
    description:
      'We advise on buying, selling, developing, and leasing property. We also represent developers and buyers before RERA authorities and appellate tribunals.',
    image: '/images/svc-real-estate.jpg',
    whatWeDo: [
      'Title checks and property due diligence',
      'Sale deeds, agreements to sell, leases, and development agreements',
      'RERA registration, compliance, and complaints',
      'Builder-buyer disputes before RERA, the Real Estate Appellate Tribunal, and consumer forums',
      'Joint development, collaboration, and property maintenance agreements',
      'Land acquisition: compensation, enhancement claims, and possession disputes under the 2013 LARR Act and the National Highways Act',
    ],
    whoWeHelp: [
      'Real estate developers and builders',
      'Home buyers and investors',
      'Landowners entering development deals',
      'Companies leasing offices, warehouses, or factories',
    ],
    faqs: [
      {
        question: 'Should I get a title check before buying property?',
        answer:
          'Always. A title check confirms the seller actually owns the property and that it is free from loans, disputes, or claims. It is the single most important step before paying.',
      },
      {
        question: 'My builder has delayed possession. Can I claim compensation?',
        answer:
          'Yes. Under RERA you can claim interest for the delay or a refund with interest. We file and argue the complaint for you.',
      },
      {
        question: 'Do you help developers with RERA compliance?',
        answer:
          'Yes. We handle project registration, quarterly updates, and replies to RERA notices so you stay compliant.',
      },
    ],
    relatedSlugs: ['corporate-and-commercial', 'dispute-resolution', 'nbfc-services'],
  },
  {
    slug: 'nbfc-services',
    number: '08',
    title: 'NBFC Services',
    short: 'Legal support for non-banking finance companies and lenders.',
    description:
      'We help NBFCs and other lenders with RBI compliance, loan documentation, and recovery. We also act for borrowers dealing with lenders.',
    image: '/images/svc-nbfc.jpg',
    whatWeDo: [
      'NBFC registration with RBI and ongoing compliance',
      'Loan agreements, security documents, and guarantees',
      'Recovery under SARFAESI and through Debt Recovery Tribunals',
      'Insolvency proceedings under the IBC before NCLT',
      'Replies to RBI notices and inspections',
      'Fintech and digital lending advisory',
    ],
    whoWeHelp: [
      'NBFCs and housing finance companies',
      'Fintech lenders and loan platforms',
      'Banks and asset reconstruction companies',
      'Borrowers facing recovery action',
    ],
    faqs: [
      {
        question: 'How do we register a new NBFC?',
        answer:
          'You need a company with minimum net owned funds and an application to the RBI with a business plan and fit-and-proper documents. We prepare and file the whole application.',
      },
      {
        question: 'Can an NBFC use SARFAESI to recover loans?',
        answer:
          'Notified NBFCs can, for secured loans above the threshold set by the government. We check whether your NBFC qualifies and run the process.',
      },
      {
        question: 'A borrower has filed for insolvency. What are our options?',
        answer:
          'You must file your claim with the resolution professional within the deadline. We file the claim and represent you in the committee of creditors.',
      },
    ],
    relatedSlugs: ['corporate-and-commercial', 'dispute-resolution', 'real-estate'],
  },
  {
    slug: 'industrial-subsidies',
    number: '09',
    title: 'Industrial Subsidies',
    short: 'Claiming government incentives and subsidies for industry.',
    description:
      'Central and State governments offer many incentives to industry: capital subsidies, interest subsidies, power tariff concessions, and tax benefits. We help you find what you are eligible for, apply, and follow up until you receive it.',
    image: '/images/svc-industrial.jpg',
    whatWeDo: [
      'Eligibility check under Central and State industrial policies',
      'Preparing and filing subsidy and incentive applications',
      'Power tariff subsidies and electricity duty exemptions',
      'Capital investment and interest subsidies for new and expanding units',
      'Follow-up with departments and appeals against rejection',
      'Recovery of delayed or withheld subsidy payments through legal action',
    ],
    whoWeHelp: [
      'Manufacturing units setting up or expanding',
      'Solar and renewable energy projects',
      'Paper, steel, forging, and chemical industries',
      'MSMEs applying under State industrial policies',
    ],
    faqs: [
      {
        question: 'How do I know which subsidies my factory qualifies for?',
        answer:
          'It depends on your State, industry, location, and investment size. Send us your project details and we will list the schemes you can apply for.',
      },
      {
        question: 'Our subsidy was approved but has not been paid. Can you help?',
        answer:
          'Yes. We send a legal notice to the department and, if needed, file a writ petition in the High Court to get the money released.',
      },
      {
        question: 'Do you help with electricity duty exemption?',
        answer:
          'Yes. Many States exempt new industrial units from electricity duty for a fixed period. We apply for the exemption and handle any dispute with the DISCOM.',
      },
    ],
    relatedSlugs: ['electricity-matters', 'corporate-and-commercial', 'dispute-resolution'],
  },
  {
    slug: 'insurance-matters',
    number: '10',
    title: 'Insurance Matters',
    short: 'Getting insurance claims paid and resolving disputes with insurers.',
    description:
      'When an insurance company delays or rejects a claim, we step in. We represent policyholders and businesses before the Insurance Ombudsman, consumer forums, and courts.',
    image: '/images/svc-insurance.jpg',
    whatWeDo: [
      'Rejected or delayed claims: fire, engineering, property, and business interruption insurance',
      'Marine insurance: cargo, hull, freight, and liability claims',
      'Motor accident claims (MACT) and third-party liability matters',
      'Life and health insurance claim disputes',
      'Complaints before the Insurance Ombudsman, consumer commissions, and courts',
      'For insurers: policy drafting and vetting, IRDAI regulatory matters, subrogation, and recovery',
    ],
    whoWeHelp: [
      'Factories and industrial units with a large claim',
      'Real estate and construction companies',
      'Transport and logistics businesses',
      'Individuals and families with life, health, or motor claims',
      'Insurance companies and third-party administrators',
    ],
    faqs: [
      {
        question: 'My claim was rejected. Is there any point in fighting it?',
        answer:
          'Often, yes. Many rejections are based on technical grounds that do not hold up. We review the policy and the rejection letter and give you a clear view of your chances.',
      },
      {
        question: 'Where do insurance disputes get filed?',
        answer:
          'Smaller claims go to the Insurance Ombudsman or a District Consumer Commission. Larger claims go to the State or National Commission, or to civil courts. We choose the fastest route.',
      },
      {
        question: 'How long do I have to file a complaint?',
        answer:
          'Generally two years from the date of rejection under consumer law, and one year for the Ombudsman. Do not wait; deadlines are strict.',
      },
    ],
    relatedSlugs: ['dispute-resolution', 'industrial-subsidies', 'corporate-and-commercial'],
  },
]

export function findService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug || s.aliases?.includes(slug))
}

/* -------------------------------------------------------------------------
   Founder
   ------------------------------------------------------------------------- */

export const founder = {
  name: 'Akshay Gupta',
  role: 'Founder & Managing Partner',
  qualifications: 'B.Tech, LL.B.',
  enrolment: 'Advocate, High Court',
  /** Drop a photo at public/images/akshay-gupta.jpg and set this to true. */
  hasPhoto: true,
  photo: '/images/akshay-gupta.jpg',
  bio: [
    'Akshay Gupta founded Sharp Legal & Co. in 2021. He is drawn to matters where the law is not just about reading a provision, but about understanding the larger system in which that provision operates.',
    'His practice centres on regulatory, electricity, infrastructure, and commercial disputes: areas where legal questions meet technology, economics, policy, and the realities of running a business. He has appeared before Electricity Regulatory Commissions, the Appellate Tribunal for Electricity (APTEL), High Courts, and other judicial and quasi-judicial forums.',
    'Akshay personally leads every major matter at the firm. Clients speak to him directly, not to a junior who then relays the message.',
  ],
  highlights: [
    'B.Tech, LL.B.',
    'Advocate, High Court',
    'Electricity, infrastructure, and regulatory disputes',
    'Appears before Regulatory Commissions, APTEL, and High Courts',
    'Based in Gurugram, Delhi NCR',
  ],
  /** First-person statement, shown on the About page. Adapted from the founder's own text. */
  statement: [
    'I have always been drawn to matters where the law is not simply about interpreting a provision, but about understanding the larger system in which that provision operates. My work has gradually led me towards regulatory, electricity, infrastructure, and commercial disputes: areas where legal questions meet technology, economics, policy, and the realities of doing business.',
    'What attracted me to this field was its complexity. In regulatory litigation, understanding the statute is only the beginning. You must also understand the regulations, the industry, the technical issues, the commercial arrangement and, most importantly, the consequences of the decision being sought. That way of thinking shapes how I approach every matter.',
    'Over the years I have found that I enjoy solving difficult problems more than simply arguing cases. A complex dispute usually turns on one or two issues. Finding them takes patience, preparation, and a willingness to go deep into the record. So my approach is simple: understand the problem completely, identify what truly matters, and build the legal strategy around it.',
    'I believe effective advocacy begins well before the hearing. A good brief is not a pile of judgments and legal propositions. It should tell the decision-maker, clearly and logically, what the real dispute is, what the law provides, what the record establishes, and why our position should be accepted. Clarity is one of the most powerful tools in litigation.',
    'My aim is not to build the biggest practice. It is to build one that clients associate with trust, technical understanding, rigorous preparation, and strategic advocacy. As the energy and infrastructure landscape evolves, with renewable energy, open access, distributed generation, and changing regulatory frameworks, the need for lawyers who understand both the law and the sector will only grow. I want to be part of that.',
  ],
  /** The four questions a good brief must answer, from the founder's statement. */
  beliefs: [
    'What is the real dispute?',
    'What does the law provide?',
    'What does the record establish?',
    'Why should the court or regulator accept our position?',
  ],
}

/* -------------------------------------------------------------------------
   Clients
   ------------------------------------------------------------------------- */

export type Client = {
  name: string
  sector: string
  /** Optional logo file under public/clients/. When set, the card shows it instead of the name. */
  logo?: string
}

/**
 * To add a logo: save it as public/clients/<file>.png (or .svg) and set `logo`
 * to that path. Cards fall back to the name when `logo` is not set.
 */
export const clients: Client[] = [
  { name: 'Suncity Projects', sector: 'Real Estate', logo: '/clients/suncity-projects.png' },
  { name: 'Satya Developers', sector: 'Real Estate', logo: '/clients/satya-developers.png' },
  { name: 'Mapsco', sector: 'Real Estate', logo: '/clients/mapsco.png' },
  { name: 'Avtar Steels', sector: 'Steel & Manufacturing', logo: '/clients/avtar-steels.png' },
  { name: 'Singla Forging', sector: 'Forging & Engineering', logo: '/clients/singla-forging.jpg' },
  { name: 'CREDAI Group', sector: 'Real Estate Association', logo: '/clients/credai.png' },
  { name: 'TDI', sector: 'Infrastructure & Real Estate', logo: '/clients/tdi.jpg' },
  { name: 'BILT Papers', sector: 'Paper & Pulp', logo: '/clients/bilt-papers.webp' },
  { name: 'Sainson Papers', sector: 'Paper Manufacturing', logo: '/clients/sainson-papers.jpg' },
]

/* -------------------------------------------------------------------------
   Careers
   ------------------------------------------------------------------------- */

export type JobOpening = {
  slug: string
  title: string
  type: string
  location: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export const jobOpenings: JobOpening[] = [
  {
    slug: 'legal-intern',
    title: 'Legal Intern',
    type: 'Internship · 4 to 12 weeks',
    location: 'Gurugram (in office)',
    summary:
      'Work directly with our lawyers on live electricity, corporate, and litigation matters. You will research, draft, and attend hearings.',
    responsibilities: [
      'Legal research on electricity law, contracts, and court precedents',
      'Help draft petitions, notices, replies, and agreements',
      'Attend hearings before Electricity Regulatory Commissions, APTEL, and the Delhi High Court',
      'Maintain case files and track filing deadlines',
    ],
    requirements: [
      'Currently enrolled in a 3-year or 5-year law course',
      'Good written English and attention to detail',
      'Interest in energy, regulatory, or commercial law is a plus',
      'Available for at least 4 weeks',
    ],
  },
  {
    slug: 'senior-executive',
    title: 'Senior Executive',
    type: 'Full time',
    location: 'Gurugram (in office)',
    summary:
      'Manage the firm\'s day-to-day operations, client coordination, and court filings. You will be the link between our lawyers, clients, and court registries.',
    responsibilities: [
      'Coordinate with clients on documents, timelines, and hearing updates',
      'Manage court and tribunal filings, including e-filing',
      'Track case dates and keep the firm\'s calendar accurate',
      'Handle billing, vendor coordination, and office administration',
      'Support the partners with scheduling and correspondence',
    ],
    requirements: [
      'Graduate in any discipline; a law or commerce background is a plus',
      '3 or more years of experience in a law firm, company secretary office, or similar',
      'Comfortable with MS Office, e-filing portals, and email',
      'Organised, reliable, and clear in communication',
    ],
  },
]

/* -------------------------------------------------------------------------
   Firm contact details
   ------------------------------------------------------------------------- */

export const logoUrl = '/logo.png'
export const phone = '+91 78271 78024'
export const email = 'info@sharplegal.in'
export const website = 'www.sharplegal.in'
export const address = '658, 659, 6th Floor, Satya The Hive, Sector 102, Gurugram, Haryana - 122505'
export const hours = 'Monday to Saturday, 9:00 AM to 8:00 PM'
export const siteUrl = 'https://sharplegal.in'
export const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Satya The Hive, Sector 102, Gurugram, Haryana 122505')
