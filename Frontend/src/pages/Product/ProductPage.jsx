import { Link } from 'react-router-dom'
import { INSURANCE_PACKAGES, LIAISON_FAMILY_OFFICE } from '../../constants'
import { getAssetUrl } from '../../utils/assets'
import PageHero from '../../components/shared/PageHero'
import InsuranceCard from '../../components/shared/InsuranceCard'
import CtaSection from '../../components/shared/CtaSection'
import './ProductPage.css'

export default function ProductPage() {
  const productImage = getAssetUrl('all_sports.jpeg')

  return (
    <section className="product-page">
      <PageHero
        kicker="Wellness Packages"
        title="Choose the Right Wellness Package for Your Sporting Journey"
        description="Compare practical wellness packages built for athletes, families, and teams. Every option is designed to provide clear value, dependable support, and easy enrollment."
        className="insurance-hero"
      />

      <section className="insurance-cards-section">
        <div className="insurance-cards">
          {INSURANCE_PACKAGES.map((plan) => (
            <InsuranceCard
              key={plan.id}
              plan={plan}
              imageUrl={productImage}
              ctaText="Apply Now"
              ctaHref="/apply-now"
              ctaState={{ planId: plan.id }}
            />
          ))}
        </div>
      </section>

      <section className="product-liaison-section">
        <h2 className="product-liaison-kicker">Additional Exclusive Benefit</h2>
        <h3 className="product-liaison-title">{LIAISON_FAMILY_OFFICE.title}</h3>
        <p className="product-liaison-intro">{LIAISON_FAMILY_OFFICE.clientIntro}</p>
        <div className="product-liaison-services">
          {LIAISON_FAMILY_OFFICE.services.map((service) => (
            <article key={service.name} className="product-liaison-service">
              <h4>{service.name}</h4>
              <p className="product-liaison-service-desc">{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="product-liaison-disclaimer">{LIAISON_FAMILY_OFFICE.disclaimer}</p>
        <Link to="/apply-now" state={{ planId: 'liaison-family-office' }} className="product-liaison-apply">
          Apply for Family Office Services
        </Link>
      </section>

      <section className="insurance-process-section">
        <h2>How Enrollment Works</h2>
        <div className="insurance-process-grid">
          <article>
            <h3>1. Compare Plans</h3>
            <p>Review package scope, pricing, and support levels to find your best fit.</p>
          </article>
          <article>
            <h3>2. Submit Details</h3>
            <p>Share basic personal or team information through our guided application process.</p>
          </article>
          <article>
            <h3>3. Activate Cover</h3>
            <p>Receive onboarding confirmation and start using your benefits immediately.</p>
          </article>
        </div>
      </section>

      <CtaSection
        title="Need Help Choosing a Package?"
        description="Speak with our team for guidance tailored to your sporting and wellness needs."
        secondaryLink={{ label: 'Talk to an Advisor', href: '/contact-us' }}
        className="insurance-final-cta"
      />
    </section>
  )
}
