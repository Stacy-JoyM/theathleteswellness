import { CONTACT_PAGE, SOCIAL_LINKS } from '../../constants'
import { getAssetUrl } from '../../utils/assets'
import { InstagramIcon, MailIcon, TikTokIcon } from '../../components/shared/SocialIcons'
import './ContactUsPage.css'

export default function ContactUsPage() {
  const stripImage = getAssetUrl('linear_all_sports1.jpg')
  const { name, logoFile, email, phones } = CONTACT_PAGE

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div
          className="contact-hero-bg"
          style={{ backgroundImage: `url(${stripImage})` }}
          aria-hidden="true"
        />
        <div className="contact-hero-overlay">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">We're here to support your wellness journey.</p>
        </div>
      </div>

      <div className="contact-columns">
        <article className="contact-column">
          <img className="contact-brand-logo" src={getAssetUrl(logoFile)} alt={name} />
          <p className="contact-row">{phones}</p>
          <a
            href={SOCIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row contact-row-with-icon"
            aria-label="Instagram @theathleteswellnessclub"
          >
            <InstagramIcon className="contact-icon" />
            <span>@{SOCIAL_LINKS.instagram.handle}</span>
          </a>
          <a
            href={SOCIAL_LINKS.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row contact-row-with-icon"
            aria-label="TikTok @theathleteswellnessclub"
          >
            <TikTokIcon className="contact-icon" />
            <span>@{SOCIAL_LINKS.tiktok.handle}</span>
          </a>
          <p className="contact-row contact-row-strong contact-row-with-icon">
            <MailIcon className="contact-icon" />
            <a href={`mailto:${email}`} className="contact-email-link">{email}</a>
          </p>
        </article>
      </div>
    </section>
  )
}
