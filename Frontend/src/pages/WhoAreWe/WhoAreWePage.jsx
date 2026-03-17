import { Link } from 'react-router-dom'
import { WHO_ARE_WE } from '../../constants'
import { getAssetUrl } from '../../utils/assets'
import './WhoAreWePage.css'

export default function WhoAreWePage() {
  const { title, tagline, intro, partners, partnership } = WHO_ARE_WE

  return (
    <section className="who-are-we-page">
      <header className="who-are-we-hero">
        <div className="who-are-we-hero-bg" aria-hidden="true" />
        <div className="who-are-we-hero-content">
          <p className="who-are-we-kicker">{tagline}</p>
          <h1>{title}</h1>
          <p className="who-are-we-intro">{intro}</p>
        </div>
      </header>

      <div className="who-are-we-partners">
        {partners.map((partner, index) => (
          <article
            key={partner.name}
            className={`who-are-we-partner-card who-are-we-partner-card--${index === 0 ? 'left' : 'right'}`}
          >
            <div className="who-are-we-partner-header">
              <img
                src={getAssetUrl(partner.logoFile)}
                alt={partner.name}
                className="who-are-we-partner-logo"
              />
              <div>
                <span className="who-are-we-partner-role">{partner.role}</span>
                <h2>{partner.name}</h2>
              </div>
            </div>
            <p className="who-are-we-partner-desc">{partner.description}</p>
            <ul className="who-are-we-partner-highlights">
              {partner.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="who-are-we-bridge">
        <div className="who-are-we-bridge-line" aria-hidden="true" />
        <span className="who-are-we-bridge-icon" aria-hidden>+</span>
      </div>

      <section className="who-are-we-partnership">
        <h2>{partnership.title}</h2>
        <p className="who-are-we-partnership-desc">{partnership.description}</p>
        <ul className="who-are-we-benefits">
          {partnership.benefits.map((benefit) => (
            <li key={benefit}>
              <span className="who-are-we-benefit-icon" aria-hidden>✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      <section className="who-are-we-cta">
        <p>Ready to join the club?</p>
        <Link to="/apply-now" className="who-are-we-cta-button">
          Apply Now
        </Link>
      </section>
    </section>
  )
}
