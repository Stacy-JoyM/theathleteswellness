import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PARTNERS, ABOUT_PAGE } from '../../constants'
import { getAssetUrl } from '../../utils/assets'
import './HomePage.css'

const WELLNESS_TABS = [
  { id: 'suswa', name: 'Suswa', color: '#1e40af' },
  { id: 'longonot', name: 'Longonot', color: '#0d9488' },
  { id: 'elgon', name: 'Elgon', color: '#7c3aed' },
  { id: 'kenya', name: 'Kenya', color: '#16a34a' },
  { id: 'liaison', name: 'Family Office', color: '#374151' },
]

const WellnessNavIcon = ({ id }) => (
  <span className="wellness-nav-icon" aria-hidden>
    {id === 'suswa' && (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )}
    {id === 'longonot' && (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )}
    {id === 'elgon' && (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )}
    {id === 'kenya' && (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 15V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 15V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )}
    {id === 'liaison' && (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 12l10 10 10-10L12 2z" />
      </svg>
    )}
  </span>
)

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
  const [activeWellnessTab, setActiveWellnessTab] = useState('suswa')

  const activePackage = ABOUT_PAGE.packages.find((p) => p.id === activeWellnessTab) ?? ABOUT_PAGE.packages[0]

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

      <section className="home-wellness-showcase">
        <div className="home-wellness-inner">
          <h2 className="home-wellness-title">Our Wellness Packages</h2>
          <div className="home-wellness-nav-wrap">
            <div className="home-wellness-nav-content">
              <nav className="home-wellness-nav" aria-label="Wellness package categories">
                {WELLNESS_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`home-wellness-nav-btn ${activeWellnessTab === tab.id ? 'is-active' : ''}`}
                    style={{ '--tab-color': tab.color }}
                    onClick={() => setActiveWellnessTab(tab.id)}
                  >
                    <WellnessNavIcon id={tab.id} />
                    <span className="home-wellness-nav-label">{tab.name}</span>
                  </button>
                ))}
              </nav>
              <div className="home-wellness-content">
                <div
                  key={activeWellnessTab}
                  className="home-wellness-panel"
                  style={{ '--panel-color': WELLNESS_TABS.find((t) => t.id === activeWellnessTab)?.color ?? '#1e40af' }}
                >
                  <p className="home-wellness-kicker">About {activePackage.name}</p>
                  <p className="home-wellness-desc">{activePackage.description}</p>
                  <Link className="home-wellness-learn-more" to="/insurance-deals">
                    Learn More
                  </Link>
                </div>
                <div className="home-wellness-image">
                  <img src={heroBackgrounds[0]} alt="Athlete wellness" />
                </div>
              </div>
            </div>
          </div>
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
