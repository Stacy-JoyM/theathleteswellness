import { Link } from 'react-router-dom'
import { CONTACT_PAGE, FOOTER_LINKS, SOCIAL_LINKS, SITE_NAME } from '../constants'
import { getAssetUrl } from '../utils/assets'
import { InstagramIcon, MailIcon, PhoneIcon, TikTokIcon } from './shared/SocialIcons'
import './Footer.css'

function Footer() {
  const { logoFile, email, phones } = CONTACT_PAGE

  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="site-footer-brand">
          <img className="site-footer-logo" src={getAssetUrl(logoFile)} alt={SITE_NAME} />
          <div className="site-footer-brand-text">
            <h3>{SITE_NAME}</h3>
            <p>Trusted health and financial wellness for athletes.</p>
          </div>
        </div>

        <div className="site-footer-contact">
          <a href={`mailto:${email}`} className="site-footer-contact-item">
            <MailIcon className="site-footer-icon" />
            <span>{email}</span>
          </a>
          <p className="site-footer-contact-item">
            <PhoneIcon className="site-footer-icon" />
            <span>{phones}</span>
          </p>
        </div>

        <div className="site-footer-social">
          <a
            href={SOCIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-social-link"
            aria-label="Instagram @theathleteswellnessclub"
          >
            <InstagramIcon className="site-footer-social-icon" />
          </a>
          <a
            href={SOCIAL_LINKS.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-social-link"
            aria-label="TikTok @theathleteswellnessclub"
          >
            <TikTokIcon className="site-footer-social-icon" />
          </a>
        </div>
      </div>

      <nav className="site-footer-nav" aria-label="Footer navigation">
        <Link to="/">Home</Link>
        <div className="site-footer-dropdown">
          <span className="site-footer-dropdown-trigger">Wellness</span>
          <div className="site-footer-dropdown-menu">
            {FOOTER_LINKS.insurance.map((link) => (
              <Link key={link.label} to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {FOOTER_LINKS.main.map((link) => (
          <Link key={link.label} to={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <p className="site-footer-copyright">© 2026 {SITE_NAME}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
