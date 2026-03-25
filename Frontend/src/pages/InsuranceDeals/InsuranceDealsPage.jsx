import { Link } from 'react-router-dom'
import { COMPARISON_ROWS, LIAISON_FAMILY_OFFICE, INSURANCE_DEALS_WELLNESS_OVERVIEW } from '../../constants'
import PageHero from '../../components/shared/PageHero'
import CtaSection from '../../components/shared/CtaSection'
import './InsuranceDealsPage.css'

const ELIGIBILITY_LIST = [
  'Individual athletes and sports professionals',
  'Parents and guardians seeking family-based support',
  'Sports teams, academies, and institutional programs',
]

const REQUIRED_STEPS = [
  'Choose a package aligned with your needs',
  'Submit key details for quick evaluation',
  'Receive guidance and complete enrollment',
]

export default function InsuranceDealsPage() {
  return (
    <section className="insurance-deals-page">
      <PageHero
        kicker="Learn Wellness Deals"
        title="Available Wellness Options"
        description="Explore our available wellness deals with clarity. This page helps you understand what each package includes, who it suits best, and how to get started."
        className="insurance-deals-hero"
      />

      <section className="insurance-deals-framework" aria-label="How wellness packages work">
        <h2 className="insurance-deals-framework-title">How our packages work</h2>
        <div className="insurance-deals-framework-grid">
          {INSURANCE_DEALS_WELLNESS_OVERVIEW.map((block) => (
            <article key={block.title} className="insurance-deals-framework-card">
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="insurance-compare-section" id="compare-packages">
        <h2>Compare Packages at a Glance</h2>
        <p className="insurance-compare-intro">See how our wellness packages stack up. All amounts in KES.</p>
        <div className="insurance-compare-table-wrap">
          <table className="insurance-compare-table">
            <thead>
              <tr>
                <th scope="col">Cover & Benefits</th>
                <th scope="col">Suswa</th>
                <th scope="col">Longonot</th>
                <th scope="col">Elgon</th>
                <th scope="col">Kenya</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.label}
                  className={`${row.isSubtotal ? 'insurance-compare-row--subtotal' : ''} ${row.isCashBack ? 'insurance-compare-row--cashback' : ''}`}
                >
                  <th scope="row">{row.label}</th>
                  <td>{row.suswa}</td>
                  <td>{row.longonot}</td>
                  <td>{row.elgon}</td>
                  <td>{row.kenya}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="insurance-compare-cta">
          <Link to="/apply-now" className="insurance-compare-apply-btn">Join the Club</Link>
        </div>
      </section>

      <section className="insurance-deals-liaison-row">
        <h2 className="insurance-deals-liaison-title">{LIAISON_FAMILY_OFFICE.title}</h2>
        <p className="insurance-deals-liaison-intro">{LIAISON_FAMILY_OFFICE.clientIntro}</p>
        <div className="insurance-deals-liaison-content">
          {LIAISON_FAMILY_OFFICE.services.map((service) => (
            <div key={service.name} className="insurance-deals-liaison-service">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="insurance-deals-liaison-disclaimer">{LIAISON_FAMILY_OFFICE.disclaimer}</p>
        <div className="insurance-deals-liaison-actions">
          <Link to="/contact-us" className="insurance-deals-liaison-advisor">
            Talk to Our Team
          </Link>
        </div>
      </section>

      <section className="insurance-deals-info-grid">
        <article>
          <h2>Who Can Apply</h2>
          <ul>
            {ELIGIBILITY_LIST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>How to Get Started</h2>
          <ol>
            {REQUIRED_STEPS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>
      </section>

      <CtaSection
        title="Need Guidance Before You Choose?"
        description="Our team can help you compare packages and select the right wellness solution."
        primaryLink={{ label: 'View Wellness Packages', href: '/product' }}
        secondaryLink={{ label: 'Contact Support Team', href: '/contact-us' }}
        className="insurance-deals-cta"
      />
    </section>
  )
}
