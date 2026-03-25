import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { ABOUT_PAGE, INSURANCE_PACKAGES, LIAISON_FAMILY_OFFICE, LEARN_WELLNESS_DEALS_PATH } from '../../constants'
import { getPackageCardImageUrl } from '../../utils/packageCardImages'
import PageHero from '../../components/shared/PageHero'
import InsuranceCard from '../../components/shared/InsuranceCard'
import CtaSection from '../../components/shared/CtaSection'
import './ProductPage.css'

export default function ProductPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

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
          {INSURANCE_PACKAGES.map((plan) => {
            const wellnessStory = ABOUT_PAGE.packages.find((p) => p.id === plan.id)
            return (
              <InsuranceCard
                key={plan.id}
                plan={plan}
                imageUrl={getPackageCardImageUrl(plan.id)}
                wellnessStory={wellnessStory}
                packageBreakdownTo={LEARN_WELLNESS_DEALS_PATH}
                ctaText="Join the Club"
                ctaHref="/apply-now"
                ctaState={{ planId: plan.id }}
              />
            )
          })}
        </div>
      </section>

      <section className="product-liaison-section">
        <h2 className="product-liaison-kicker">Additional Exclusive Benefit</h2>
        <h3 className="product-liaison-title">{LIAISON_FAMILY_OFFICE.title}</h3>
        <p className="product-liaison-intro">{LIAISON_FAMILY_OFFICE.clientIntro}</p>
        <div className="product-liaison-content">
          {LIAISON_FAMILY_OFFICE.services.map((service) => (
            <div key={service.name} className="product-liaison-service">
              <h4>{service.name}</h4>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="product-liaison-disclaimer">{LIAISON_FAMILY_OFFICE.disclaimer}</p>
        <div className="product-liaison-actions">
          <Link to="/contact-us" className="product-liaison-advisor">
            Talk to Our Team
          </Link>
        </div>
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
        secondaryLink={{ label: 'Talk to Our Team', href: '/contact-us' }}
        className="insurance-final-cta"
      />
    </section>
  )
}
