import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PARTNERS, CORE_PILLARS, ABOUT_PAGE } from '../../constants'
import { getAssetUrl } from '../../utils/assets'
import './HomePage.css'

const homeHighlights = [
  { title: 'Tiered protection that grows with you' },
  { title: 'Affordable and comprehensive healthcare benefits' },
  { title: 'Guaranteed annual cash back rewards' },
  { title: 'Access to elite family office and investment advisory service' },
]

const homeSteps = [
  {
    step: '01',
    title: 'Review Plan Options',
    description: 'Compare available covers and select the package aligned to your needs.',
  },
  {
    step: '02',
    title: 'Complete Enrollment',
    description: 'Submit your details and finalize enrollment with guided support.',
  },
  {
    step: '03',
    title: 'Activate Your Benefits',
    description: 'Start accessing care pathways, partner services, and member resources.',
  },
]

function HomePage() {
  const heroBackgrounds = [getAssetUrl('kenyan_sport_win.png'), getAssetUrl('kenya_sport_win2.jpg')]
  const [activeHeroIndex, setActiveHeroIndex] = useState(0)

  useEffect(() => {
    const slideInterval = window.setInterval(() => {
      setActiveHeroIndex((currentIndex) => (currentIndex + 1) % heroBackgrounds.length)
    }, 7000)

    return () => window.clearInterval(slideInterval)
  }, [heroBackgrounds.length])

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-frame" aria-hidden="true">
          {heroBackgrounds.map((imagePath, index) => (
            <div
              className={`home-hero-bg ${index === activeHeroIndex ? 'is-active' : ''}`}
              key={imagePath}
              style={{ backgroundImage: `url(${imagePath})` }}
            />
          ))}
        </div>
        <div className="home-hero-overlay">
          <p className="home-kicker">Your Safety Net For Every Season</p>
          <h1 className="home-title">Wellness Club Built for Athletes</h1>
          <p className="home-subtitle">
            Trusted health and financial wellness club to ensure athlete overall well-being.
          </p>
          <div className="home-cta-group">
            <Link className="home-cta" to="/product">
              Get Started Today
            </Link>
            <Link className="home-cta home-cta-secondary" to="/insurance-deals">
              Learn More on Wellness
            </Link>
          </div>
        </div>
        <section className="partners-section">
          <div className="partners-grid">
            {PARTNERS.map((partner) => (
              <article className="partner-card" key={partner.name}>
                <img
                  src={getAssetUrl(partner.logoFile)}
                  alt={partner.name}
                />
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="home-packages-section">
        <h2>Our Wellness Packages</h2>
        <p className="home-packages-intro">
          The Athletes Wellness Club is built around four core pillars designed to support your
          health, security, and long-term prosperity:
        </p>
        <ul className="home-packages-pillars">
          {CORE_PILLARS.map((pillar) => (
            <li key={pillar}>{pillar}</li>
          ))}
        </ul>
        <div className="home-packages-list">
          {ABOUT_PAGE.packages.map((pkg, index) => (
            <article key={pkg.id} className="home-package-card">
              <span className="home-package-num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="home-package-name">{pkg.name}</h3>
              <p className="home-package-desc">{pkg.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-journey-cta-section">
        <Link className="home-journey-cta-button" to="/product">
          Start Your Journey Today
        </Link>
      </section>

      <section className="home-process-section">
        <h2>How It Works</h2>
        <p className="home-section-intro">
          A simple three-step process designed for speed, clarity, and confidence.
        </p>
        <div className="home-process-grid">
          {homeSteps.map((step) => (
            <article className="home-process-card" key={step.step}>
              <p className="home-process-step">{step.step}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-gallery-section" aria-label="Landing images gallery">
        <div className="home-gallery-track">
          {[...heroBackgrounds, ...heroBackgrounds].map((imagePath, index) => (
            <article className="home-gallery-item" key={`${imagePath}-${index}`}>
              <img src={imagePath} alt="Athlete coverage visual" />
            </article>
          ))}
        </div>
      </section>

      <section className="home-final-cta-section">
        <h2>Ready to Secure Your Cover?</h2>
        <p>Compare packages and get personalized guidance from our support team.</p>
        <div className="home-cta-group">
          <Link className="home-cta" to="/apply-now">
            Apply Now
          </Link>
          <Link className="home-cta home-cta-secondary" to="/contact-us">
            Speak to an Advisor
          </Link>
        </div>
      </section>

      <section className="home-why-join-section">
        <div className="home-why-join-inner">
          <p className="home-why-join-kicker">Membership Benefits</p>
          <h2 className="home-why-join-title">Why Join the Athlete Wellness Club</h2>
          <p className="home-why-join-subtitle">Four compelling reasons to become a member</p>
          <div className="home-why-join-grid">
            {homeHighlights.map((item) => (
              <article className="home-why-join-card" key={item.title}>
                <span className="home-why-join-icon" aria-hidden>✓</span>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage
