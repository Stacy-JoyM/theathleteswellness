import { SITE_NAME } from '../../constants'
import PageHero from '../../components/shared/PageHero'
import './PrivacyPolicyPage.css'

export default function PrivacyPolicyPage() {
  return (
    <section className="privacy-page">
      <PageHero
        kicker="Privacy Policy"
        title="How We Collect, Use, and Protect Your Information"
        description={`Last updated: February 25, 2026. ${SITE_NAME} is committed to handling personal information responsibly, transparently, and in line with applicable privacy requirements.`}
        className="privacy-hero"
      />

      <section className="privacy-highlights">
        <article className="privacy-highlight-card">
          <h2>Information We Collect</h2>
          <p>
            We collect details necessary to provide insurance support, process requests, and
            improve service quality. This may include contact details and service usage data.
          </p>
        </article>
        <article className="privacy-highlight-card">
          <h2>How We Use Information</h2>
          <p>
            Information is used to manage applications, provide member support, communicate service
            updates, and improve platform experience and service delivery.
          </p>
        </article>
        <article className="privacy-highlight-card">
          <h2>Data Protection Measures</h2>
          <p>
            We apply appropriate organizational and technical safeguards to protect personal data
            against unauthorized access, misuse, or loss.
          </p>
        </article>
      </section>

      <section className="privacy-detail-section">
        <article className="privacy-detail-card">
          <h2>Data Sharing and Third Parties</h2>
          <p>
            We only share data with trusted service providers and partners where necessary to
            deliver our services, process coverage support, or meet legal obligations.
          </p>
        </article>
        <article className="privacy-detail-card">
          <h2>Data Retention</h2>
          <p>
            Personal information is retained only as long as required for service delivery,
            compliance, dispute management, and legitimate operational purposes.
          </p>
        </article>
        <article className="privacy-detail-card">
          <h2>Your Privacy Rights</h2>
          <p>
            You may request access, correction, or deletion of your data, and inquire how your
            information is processed by contacting our support team.
          </p>
        </article>
        <article className="privacy-detail-card">
          <h2>Policy Updates</h2>
          <p>
            We may update this policy periodically. Material changes are reflected on this page
            with the latest revision date for clarity and transparency.
          </p>
        </article>
      </section>

      <section className="privacy-contact-strip">
        <h2>Questions About Your Data?</h2>
        <p>
          For privacy requests or questions, please contact the {SITE_NAME} support team through the Contact Us page.
        </p>
      </section>
    </section>
  )
}
