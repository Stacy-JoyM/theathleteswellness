import { SITE_NAME } from '../../constants'
import PageHero from '../../components/shared/PageHero'
import './PrivacyPolicyPage.css'

const PRIVACY_SECTIONS = [
  {
    id: 1,
    title: 'Collection and Use of Personal Information',
    content: (
      <>
        <h4>1.1 The Personal data collected upon registration shall include:</h4>
        <ul>
          <li>1.1.1. The names and contact details with supporting scanned copies of National Identification documents.</li>
          <li>1.1.2. Geographical or physical addresses.</li>
          <li>1.1.3. Financial details such as credit or debit card information with supporting bank statements or phone numbers with relevant statements.</li>
          <li>1.1.4. Proof of residential address.</li>
        </ul>
        <h4>1.2 Every user shall receive prior notification before the collection of their personal information and such notification will include:</h4>
        <ul>
          <li>1.2.1. Names, contact details and financial details provided by the user voluntarily.</li>
          <li>1.2.2. The information being collected; the source from which it is being collected, if its collected from third parties;</li>
          <li>1.2.3. The purpose for collection and any consequence for not providing the information voluntarily and accurately;</li>
          <li>1.2.4. Any law requiring the collection of the information;</li>
          <li>1.2.5. The right to object on the collection of the information and also to lodge a complaint.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: 'Purpose of Collection',
    content: (
      <>
        <h4>2.1 All personal information collected is necessary for the purposes of:</h4>
        <ul>
          <li>2.1.1. Verifying the identity of the user;</li>
          <li>2.1.2. Executing the payment of the transactions;</li>
          <li>2.1.3. Delivering the purchased goods and services;</li>
          <li>2.1.4. Resolving disputes as and when they arise;</li>
        </ul>
        <h4>2.2 All personal information shall be collected directly from the user directly and/or indirectly where:</h4>
        <ul>
          <li>2.2.1. The data is in the public domain;</li>
          <li>2.2.2. The user has deliberately made the data public;</li>
          <li>2.2.3. The user has consented to the collection from another source;</li>
          <li>2.2.4. The user is incapacitated and their guardian has consented to such collection;</li>
          <li>2.2.5. The collection from such other source shall not prejudice the interest of the user.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: 'Data Processing',
    content: (
      <>
        <p>All personal information collected and processed shall be:</p>
        <ul>
          <li>3.1 Treated with strict confidence and only shared to the extent that is necessary to complete the members' proposed transaction or delivery of the services;</li>
          <li>3.2 Relevant, adequate and limited to the scope of service requested by the member;</li>
          <li>3.3 Accurate and kept up to date to the furthest extent feasible and inaccurate data shall be rectified or deleted without unreasonable delay upon the receipt of a member's request;</li>
          <li>3.4 Stored only for as long as the data remains legally and relevant for the purposes which it was initially collected;</li>
          <li>3.5 Not transferred outside Kenya, unless the receiving jurisdiction has adequate data protection safeguards or upon receipt of consent from the member.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: 'Rights of Members',
    content: (
      <>
        <p>Users have the right to:</p>
        <ul>
          <li>4.1 Not to be subject of a decision based solely on automated processing, including but not limited to profiling unless where such a decision is necessary in the performance of a contractual obligation or extent authorized by law.</li>
          <li>4.2 Access their personal data stored by either Momentum Sports Africa or Liaison Group.</li>
          <li>4.3 To object to the processing of all or part of their data.</li>
          <li>4.4 To the correction of false or misleading data about them.</li>
          <li>4.5 To the deletion of false or misleading data about them.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: 'Obligation of Users',
    content: (
      <>
        <p>Users shall:</p>
        <ul>
          <li>5.1. At the earliest opportunity feasible, inform Momentum Sports Africa or Liaison Group on any data that is inaccurate, false or misleading.</li>
          <li>5.2. Disclose their age and or any legal capacity impairment and any person who acts on their behalf thereof.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: 'Disclosure of Personal Information',
    content: (
      <>
        <p>Members' personal information shall however be availed in the following circumstances:</p>
        <ul>
          <li>6.1. Upon request by an authority, in the terms of the Data Protection Act No 24 of 2019.</li>
          <li>6.2. The information is necessary and appropriate to enforce the Terms of this site.</li>
          <li>6.3. To the extent necessary in furtherance or completion of a necessary transaction envisaged in the services provided by Momentum Sports Africa or Liaison Group.</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: 'Opting Out',
    content: (
      <>
        <ul>
          <li>7.1. Users may opt-out from any further collection of information or tracking by the site by emailing Momentum Sports Africa or Liaison Group. If a member wishes to opt out, such a request shall be addressed to our Data Protection Officer through the email info@tawc.co.ke</li>
          <li>7.2. Liaison Group shall only send out automated marketing material upon your express consent being solicited and secured.</li>
          <li>7.3. All data collected, relating to minors, from other sources, shall be collected after securing the minor's consent.</li>
          <li>7.4. Users accounts shall only be accessible upon two-step verification and authentication process whereby users shall be required to insert their user name, 8-digit alpha-numeric password and a code that shall be sent via SMS to their registered phone number at each point of login onto the site.</li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    title: 'Limitation of Liability',
    content: (
      <>
        <ul>
          <li>8.1. Momentum Sports Africa and Liaison Group shall not be responsible for any wilful or negligent use of a user's login credentials arising from either the fault of the user or a third party.</li>
          <li>8.2. The payment gateway page shall only be accessible upon entering the user's correct user name and password and will time-out after 50 seconds of inactivity for security reasons.</li>
        </ul>
      </>
    ),
  },
  {
    id: 9,
    title: 'Data Breach',
    content: <p>In the event of a breach, a member shall be notified at the earliest feasible time without unreasonable delay.</p>,
  },
  {
    id: 10,
    title: 'Compliance',
    content: <p>This Policy complies and adopts any provisions not expressly provided herein but guaranteed in the Data Protection Act, 2019 and its subsequent Regulations.</p>,
  },
  {
    id: 11,
    title: 'Change in Privacy Policy',
    content: <p>In the event of any change in this privacy policy, any such change shall be disclosed on our home page or newsletters effected to your registered email.</p>,
  },
  {
    id: 12,
    title: 'Dispute Resolution',
    content: (
      <>
        <ul>
          <li>12.1. In the event of a dispute arising between the Parties in respect of any matter contained herein, the aggrieved party shall notify the other in writing about the existence and nature of the dispute within fourteen (14) days of the dispute arising.</li>
          <li>12.2. The parties agree to submit exclusively to alternative dispute resolution mechanisms in the preference of Negotiation, Mediation and binding Arbitration. In this regard, the parties shall negotiate in good faith to settle the dispute in question as expeditiously as possible through the parties' representatives but in any event within a period of fourteen (14) days of the matter being referred to them.</li>
          <li>12.3. Should the parties' representatives fail to resolve the dispute within the aforesaid period or such longer period as the parties may mutually agree in writing, the dispute shall be referred to Arbitration by either party by a single arbitrator to be appointed by agreement between the parties or in default of such agreement upon application of either party to the Chairman for the time being of the Kenyan Chapter of Chartered Institute of Arbitrators.</li>
          <li>12.4. The determination of the Arbitrator shall be final and binding upon the parties to the extent permissible by the applicable law.</li>
          <li>12.5. The Arbitration shall be conducted in Nairobi and in accordance with the provisions of the Kenyan Arbitration Act 1995 as modified and amended from time to time.</li>
          <li>12.6. Notwithstanding any provision to the contrary, either party shall reserve the right to seek injunctive relief from a court of competent jurisdiction.</li>
        </ul>
      </>
    ),
  },
  {
    id: 13,
    title: 'General Provisions',
    content: (
      <>
        <ul>
          <li>13.1. This Policy represents the parties' entire understanding relating to the use of the Service and Data/Information and supersedes any prior communications. No text or information set forth in pre-printed form or document shall add to or vary its terms.</li>
          <li>13.2. If any provision of this Policy is held by a court of competent jurisdiction to be invalid or unenforceable, then such provision(s) shall be construed, as nearly as possible, to reflect the intentions of the invalid or unenforceable provision(s), with all other provisions remaining in full force and effect.</li>
          <li>13.3. The failure of either party to enforce any right or provision herein shall not constitute a waiver of such right or provision.</li>
        </ul>
      </>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <section className="privacy-page">
      <PageHero
        kicker="Privacy Policy"
        title="How We Collect, Use, and Protect Your Information"
        description="Last updated: February 25, 2026. This Privacy Policy applies to this website and all associated sites linked to it and its offline product support services."
        className="privacy-hero"
      />

      <div className="privacy-intro">
        <p>
          This Privacy Policy (hereinafter referred to as the &quot;Policy&quot;) applies to this website and all associated sites linked to it and its offline product support services (collectively referred to as the &quot;Site&quot;). It does not apply to sites, services and products that do not display or link to this statement or that have their own Privacy Policy. It covers how we collect, use, disclose, transfer, and store your information. If you are disagreeable to the terms of this Policy, kindly do not use the Site.
        </p>
      </div>

      <div className="privacy-layout">
        <nav className="privacy-toc" aria-label="Table of contents">
          <h3>Contents</h3>
          <ol>
            {PRIVACY_SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#privacy-section-${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="privacy-sections">
        {PRIVACY_SECTIONS.map((section) => (
          <article
            key={section.id}
            id={`privacy-section-${section.id}`}
            className="privacy-section"
          >
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">{section.id}.</span>
              {section.title}
            </h2>
            <div className="privacy-section-body">{section.content}</div>
          </article>
        ))}
        </div>
      </div>

      <section className="privacy-contact-strip">
        <h2>Questions About Your Data?</h2>
        <p>
          Any questions by a member should be addressed to our corporate email{' '}
          <a href="mailto:info@tawc.co.ke">info@tawc.co.ke</a>
        </p>
      </section>
    </section>
  )
}
