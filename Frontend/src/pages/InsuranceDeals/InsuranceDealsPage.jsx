import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { INSURANCE_DEAL_CARDS, COMPARISON_ROWS, LIAISON_FAMILY_OFFICE } from '../../constants'
import PageHero from '../../components/shared/PageHero'
import InsuranceDealCard from '../../components/shared/InsuranceDealCard'
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

      <section className="insurance-deals-grid-section">
        <h2>Available Deals</h2>
        <div className="insurance-deals-grid">
          {INSURANCE_DEAL_CARDS.map((deal) => (
            <InsuranceDealCard key={deal.title} deal={deal} />
          ))}
        </div>
      </section>

      <section className="insurance-deals-liaison-row">
        <h2 className="insurance-deals-liaison-title">{LIAISON_FAMILY_OFFICE.title}</h2>
        <p className="insurance-deals-liaison-intro">{LIAISON_FAMILY_OFFICE.clientIntro}</p>
        <div className="insurance-deals-liaison-services">
          {LIAISON_FAMILY_OFFICE.services.map((service) => (
            <article key={service.name} className="insurance-deals-liaison-service">
              <h3>{service.name}</h3>
              <p className="insurance-deals-liaison-service-desc">{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="insurance-deals-liaison-disclaimer">{LIAISON_FAMILY_OFFICE.disclaimer}</p>
        <Link to="/apply-now" state={{ planId: 'liaison-family-office' }} className="insurance-deals-liaison-apply">
          Apply for Family Office Services
        </Link>
      </section>

      <section className="insurance-compare-section">
        <h2>Quick Comparison</h2>
        <div className="insurance-compare-grid insurance-compare-grid--5col">
          <div className="insurance-compare-head">Membership Category</div>
          <div className="insurance-compare-head">Suswa</div>
          <div className="insurance-compare-head">Longonot</div>
          <div className="insurance-compare-head">Elgon</div>
          <div className="insurance-compare-head">Kenya</div>

          {COMPARISON_ROWS.map((row) => (
            <Fragment key={row.label}>
              <div className={`insurance-compare-label ${row.isSubtotal ? 'insurance-compare-cell--subtotal' : ''} ${row.isCashBack ? 'insurance-compare-cell--cashback' : ''}`}>{row.label}</div>
              <div className={`insurance-compare-cell ${row.isSubtotal ? 'insurance-compare-cell--subtotal' : ''} ${row.isCashBack ? 'insurance-compare-cell--cashback' : ''}`}>{row.suswa}</div>
              <div className={`insurance-compare-cell ${row.isSubtotal ? 'insurance-compare-cell--subtotal' : ''} ${row.isCashBack ? 'insurance-compare-cell--cashback' : ''}`}>{row.longonot}</div>
              <div className={`insurance-compare-cell ${row.isSubtotal ? 'insurance-compare-cell--subtotal' : ''} ${row.isCashBack ? 'insurance-compare-cell--cashback' : ''}`}>{row.elgon}</div>
              <div className={`insurance-compare-cell ${row.isSubtotal ? 'insurance-compare-cell--subtotal' : ''} ${row.isCashBack ? 'insurance-compare-cell--cashback' : ''}`}>{row.kenya}</div>
            </Fragment>
          ))}
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
