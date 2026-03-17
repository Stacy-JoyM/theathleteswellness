import { Link } from 'react-router-dom'
import PageHero from '../../components/shared/PageHero'
import './TermsAndConditionsPage.css'

const TERMS_SECTIONS = [
  { id: 1, title: 'Binding' },
  { id: 2, title: 'Electronic Communication' },
  { id: 3, title: 'Intellectual Property' },
  { id: 4, title: 'Newsletter' },
  { id: 5, title: 'Third-Party Property' },
  { id: 6, title: 'Responsible Use' },
  { id: 7, title: 'Registration' },
  { id: 8, title: 'Refund and Return Policy' },
  { id: 9, title: 'Termination of Use' },
  { id: 10, title: 'Warranties and Liability' },
  { id: 11, title: 'Privacy' },
  { id: 12, title: 'Accessibility' },
  { id: 13, title: 'Assignment' },
  { id: 14, title: 'Breach' },
  { id: 15, title: 'Force Majeure' },
  { id: 16, title: 'Indemnification' },
  { id: 17, title: 'Waiver' },
  { id: 18, title: 'Language' },
  { id: 19, title: 'Entire Agreement' },
  { id: 20, title: 'Updating of These Terms and Conditions' },
  { id: 21, title: 'Governing Law' },
  { id: 22, title: 'Dispute Resolution' },
  { id: 23, title: 'Contact Information' },
]

export default function TermsAndConditionsPage() {
  return (
    <section className="terms-page">
      <PageHero
        kicker="Terms and Conditions"
        title="Athletes Wellness Terms and Conditions"
        description="Last updated: February 25, 2026. These Terms and Conditions apply to this website and to transactions related to The Athletes Wellness Club products and services."
        className="terms-hero"
      />

      <div className="terms-intro">
        <p>
          These Terms and Conditions apply to this website and to the transactions related to The Athletes Wellness Club Products and Services. You shall be bound by additional contracts related to your relationship with us and any products or services that you receive from us. If any provisions of the additional contracts conflict with any provisions of these Terms, the provisions of those additional contracts shall control and prevail.
        </p>
      </div>

      <div className="terms-layout">
        <nav className="terms-toc" aria-label="Table of contents">
          <h3>Contents</h3>
          <ol>
            {TERMS_SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#terms-section-${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="terms-sections">
          <article id="terms-section-1" className="terms-section">
            <h2><span className="terms-section-num">1.</span> Binding</h2>
            <p>By registering with, accessing, or otherwise using this website, you hereby agree to be bound by the Terms and Conditions set forth below. The mere use of this website implies the knowledge and acceptance of these Terms and Conditions. In some particular cases, we can also ask you to explicitly agree.</p>
          </article>

          <article id="terms-section-2" className="terms-section">
            <h2><span className="terms-section-num">2.</span> Electronic Communication</h2>
            <p>By using this website or communicating with us by electronic means, you agree and acknowledge that we may communicate with you electronically on our website or by sending an email to you, and you agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement, including but not limited to the requirement that such communications should be in writing.</p>
          </article>

          <article id="terms-section-3" className="terms-section">
            <h2><span className="terms-section-num">3.</span> Intellectual Property</h2>
            <p>We or our licensors own and control all of the copyright and other intellectual property rights in the website and the data, information, and other resources displayed by or accessible within the website.</p>
            <h4>3.1 Reservation of our Intellectual Property Rights</h4>
            <p>Unless specific content dictates otherwise, you are not granted a license or any other right under Copyright, Trademark, Patent, or other Intellectual Property Rights. This means that you shall not use, copy, reproduce, perform, display, distribute, embed into any electronic medium, alter, reverse engineer, decompile, transfer, download, transmit, monetize, sell, market, or commercialize any resources on this website in any form, without our prior written permission through an executed Agreement governing the same.</p>
          </article>

          <article id="terms-section-4" className="terms-section">
            <h2><span className="terms-section-num">4.</span> Newsletter</h2>
            <p>Notwithstanding the foregoing, you may forward our newsletter in the electronic form to others who may be interested in visiting our website.</p>
          </article>

          <article id="terms-section-5" className="terms-section">
            <h2><span className="terms-section-num">5.</span> Third-Party Property</h2>
            <p>This website may include hyperlinks or other references to other party&apos;s websites. We do not monitor or review the content of other party&apos;s websites which are linked to from this website. Products or services offered by other websites shall be subject to the applicable Terms and Conditions of those third party websites. Opinions expressed or material appearing on those websites are not necessarily shared or endorsed by us.</p>
            <p>We will not be responsible for any privacy practices or content of those sites. You bear all risks associated with the use of those websites and any related third-party services. We shall not accept any responsibility for any loss or damage in whatever manner, however caused, resulting from your disclosure to third parties of personal information.</p>
          </article>

          <article id="terms-section-6" className="terms-section">
            <h2><span className="terms-section-num">6.</span> Responsible Use</h2>
            <p>By visiting our website, you agree to use it only for the purposes intended and as permitted by these Terms, any additional contracts with us, and applicable laws, regulations, and generally accepted online practices and industry guidelines. You must not use our website or services to use, publish or distribute any material which consists of (or is linked to) malicious computer software; use data collected from our website for any direct marketing activity, or conduct any systematic or automated data collection activities on or in relation to our website.</p>
            <p>Engaging in any activity that causes, or may cause, damage to the website or that interferes with the performance, availability, or accessibility of the website is strictly prohibited.</p>
          </article>

          <article id="terms-section-7" className="terms-section">
            <h2><span className="terms-section-num">7.</span> Registration</h2>
            <p>You may register for an account with our website. During this process, you may be required to choose a password. You are responsible for maintaining the confidentiality of your passwords and account information and agree not to share your passwords, account information, or secured access to our website or services with any other person. You must not allow any other person to use your account to access the website because you are responsible for all activities that occur through the use of your passwords or accounts. You must notify us immediately if you become aware of any disclosure of your password.</p>
            <p>After account termination, you will not attempt to register a new account without our permission.</p>
          </article>

          <article id="terms-section-8" className="terms-section">
            <h2><span className="terms-section-num">8.</span> Refund and Return Policy</h2>
            <h4>8.1 Right of withdrawal</h4>
            <p>You have the right to withdraw from this contract within thirty (30) days without giving any reason. The withdrawal period shall expire after thirty (30) days from the day of the conclusion of the contract.</p>
            <p>To exercise the right of withdrawal, you must inform us of your decision to withdraw from this contract by an unequivocal statement (for example a letter sent by post, hand delivery or email). Our contact details can be found below. You may use the attached model withdrawal form, but it is not obligatory. You can also electronically fill in and submit the model withdrawal form or any other unequivocal statement on our website.</p>
            <p>If you use this option, we will communicate to you an acknowledgement of receipt of such a withdrawal on a durable medium (for example by email) without delay. To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.</p>
          </article>

          <article id="terms-section-9" className="terms-section">
            <h2><span className="terms-section-num">9.</span> Termination of Use</h2>
            <p>We may, in our sole discretion, at any time modify or discontinue access to, temporarily or permanently, the website or any Service thereon. You agree that we shall not be liable to you or any third party for any such modification, suspension or discontinuance of your access to, or use of, the website or any content that you may have shared on the website. You will not be entitled to any compensation or other payment, even if certain features, settings, and/or any Content you have contributed or have come to rely on, are permanently lost. You must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on our website.</p>
          </article>

          <article id="terms-section-10" className="terms-section">
            <h2><span className="terms-section-num">10.</span> Warranties and Liability</h2>
            <p>Nothing in this section will limit or exclude any warranty implied by law that it would be unlawful to limit or to exclude. This website and all content on the website are provided on an &quot;as is&quot; and &quot;as available&quot; basis and may include inaccuracies or typographical errors. We expressly disclaim all warranties of any kind, whether express or implied, as to the availability, accuracy, or completeness of the Content. We make no warranty that:</p>
            <ul>
              <li>this website or our content will meet your requirements;</li>
              <li>this website will be available on an uninterrupted, timely, secure, or error-free basis.</li>
            </ul>
            <p>The following provisions of this section will apply to the maximum extent permitted by applicable law and will not limit or exclude our liability in respect of any matter which it would be unlawful or illegal for us to limit or to exclude our liability. In no event will we be liable for any direct or indirect damages (including any damages for loss of profits or revenue, loss or corruption of data, software or database, or loss of or harm to property or data) incurred by you or any third party, arising from your access to, or use of, our website.</p>
            <p>Except to the extent any additional contract expressly states otherwise, our maximum liability to you for all damages arising out of or related to the website or any products and services marketed or sold through the website, regardless of the form of legal action that imposes liability (whether in contract, equity, negligence, intended conduct, tort or otherwise) will be limited to the total price that you paid to us to purchase such products or services or use the website. Such limit will apply in the aggregate to all of your claims, actions and causes of action of every kind and nature.</p>
          </article>

          <article id="terms-section-11" className="terms-section">
            <h2><span className="terms-section-num">11.</span> Privacy</h2>
            <p>To access our website and/or services, you may be required to provide certain information about yourself as part of the registration process. You agree that any information you provide will be accurate, correct, and up to date. We have developed a <Link to="/privacy-policy">Privacy Policy</Link> to address any privacy concerns you may have.</p>
          </article>

          <article id="terms-section-12" className="terms-section">
            <h2><span className="terms-section-num">12.</span> Accessibility</h2>
            <p>We are committed to making the content we provide accessible to individuals with disabilities. If you have a disability and are unable to access any portion of our website due to your disability, we ask you to give us a notice including a detailed description of the issue you encountered. If the issue is readily identifiable and resolvable in accordance with industry-standard information technology tools and techniques, we will promptly resolve it.</p>
          </article>

          <article id="terms-section-13" className="terms-section">
            <h2><span className="terms-section-num">13.</span> Assignment</h2>
            <p>You may not assign, transfer or sub-contract any of your rights and/or obligations under these Terms and conditions, in whole or in part, to any third party without our prior written consent. Any purported assignment in violation of this Section will be null and void.</p>
          </article>

          <article id="terms-section-14" className="terms-section">
            <h2><span className="terms-section-num">14.</span> Breach</h2>
            <p>Without prejudice to our other rights under these Terms and Conditions, if you breach these Terms and Conditions in any way, we may take such action as we deem appropriate to deal with the breach, including temporarily or permanently suspending your access to the website, contacting your internet service provider to request that they block your access to the website, and/or commence legal action against you.</p>
          </article>

          <article id="terms-section-15" className="terms-section">
            <h2><span className="terms-section-num">15.</span> Force Majeure</h2>
            <p>Except for obligations to pay money hereunder, no delay, failure or omission by either party to carry out or observe any of its obligations hereunder will be deemed to be a breach of these Terms and conditions if and for as long as such delay, failure or omission arises from any cause beyond the reasonable control of that party.</p>
          </article>

          <article id="terms-section-16" className="terms-section">
            <h2><span className="terms-section-num">16.</span> Indemnification</h2>
            <p>You agree to indemnify, defend and hold us harmless, from and against any and all claims, liabilities, damages, losses and expenses, relating to your violation of these Terms and conditions, and applicable laws, including intellectual property rights and privacy rights. You will promptly reimburse us for our damages, losses, costs and expenses relating to or arising out of such claims.</p>
          </article>

          <article id="terms-section-17" className="terms-section">
            <h2><span className="terms-section-num">17.</span> Waiver</h2>
            <p>Failure to enforce any of the provisions set out in these Terms and Conditions and any Agreement, or failure to exercise any option to terminate, shall not be construed as waiver of such provisions and shall not affect the validity of these Terms and Conditions or of any Agreement or any part thereof, or the right thereafter to enforce each and every provision.</p>
          </article>

          <article id="terms-section-18" className="terms-section">
            <h2><span className="terms-section-num">18.</span> Language</h2>
            <p>These Terms and Conditions will be interpreted and construed exclusively in English. All notices and correspondence will be written exclusively in that language.</p>
          </article>

          <article id="terms-section-19" className="terms-section">
            <h2><span className="terms-section-num">19.</span> Entire Agreement</h2>
            <p>These Terms and Conditions, together with our <Link to="/privacy-policy">Privacy Policy</Link> constitute the entire agreement between you and Liaison Group in relation to your use of this website.</p>
          </article>

          <article id="terms-section-20" className="terms-section">
            <h2><span className="terms-section-num">20.</span> Updating of These Terms and Conditions</h2>
            <p>We may update these Terms and Conditions from time to time. It is your obligation to periodically check these Terms and Conditions for changes or updates. The date provided at the beginning of these Terms and Conditions is the latest revision date. Changes to these Terms and Conditions will become effective upon such changes being posted to this website. Your continued use of this website following the posting of changes or updates will be considered notice of your acceptance to abide by and be bound by these Terms and Conditions.</p>
          </article>

          <article id="terms-section-21" className="terms-section">
            <h2><span className="terms-section-num">21.</span> Governing Law</h2>
            <p>These Terms and Conditions shall be governed by the laws of Kenya.</p>
          </article>

          <article id="terms-section-22" className="terms-section">
            <h2><span className="terms-section-num">22.</span> Dispute Resolution</h2>
            <ul>
              <li>22.1. In the event of a dispute arising between the Parties in respect of any matter contained herein, the aggrieved party shall notify the other in writing about the existence and nature of the dispute within fourteen (14) days of the dispute arising.</li>
              <li>22.2. The parties agree to submit exclusively to alternative dispute resolution mechanisms in the preference of Negotiation, Mediation and binding Arbitration. In this regard, the parties shall negotiate in good faith to settle the dispute in question as expeditiously as possible through the parties&apos; representatives but in any event within a period of fourteen (14) days of the matter being referred to them.</li>
              <li>22.3. Should the parties&apos; representatives fail to resolve the dispute within the aforesaid period or such longer period as the parties may mutually agree in writing, the dispute shall be referred to Arbitration by either party by a single arbitrator to be appointed by agreement between the parties or in default of such agreement upon application of either party to the Chairman for the time being of the Kenyan Chapter of Chartered Institute of Arbitrators.</li>
              <li>22.4. The determination of the Arbitrator shall be final and binding upon the parties to the extent permissible by the applicable law.</li>
              <li>22.5. The Arbitration shall be conducted in Nairobi and in accordance with the provisions of the Kenyan Arbitration Act 1995 as modified and amended from time to time.</li>
              <li>22.6. Notwithstanding any provision to the contrary, either party shall reserve the right to seek injunctive relief from a court of competent jurisdiction.</li>
            </ul>
          </article>

          <article id="terms-section-23" className="terms-section">
            <h2><span className="terms-section-num">23.</span> Contact Information</h2>
            <p>This website is owned and operated by Liaison Group and Momentum Sports Africa. Any inquiries or complaints should be emailed to <a href="mailto:info@tawc.co.ke">info@tawc.co.ke</a></p>
          </article>
        </div>
      </div>
    </section>
  )
}
