import { Link } from 'react-router-dom'
import './CtaSection.css'

export default function CtaSection({ title, description, primaryLink, secondaryLink, className = '' }) {
  return (
    <section className={`cta-section ${className}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div className="cta-section-actions">
        {primaryLink && (
          <Link className="cta-section-primary" to={primaryLink.href}>
            {primaryLink.label}
          </Link>
        )}
        {secondaryLink && (
          <Link className="cta-section-secondary" to={secondaryLink.href}>
            {secondaryLink.label}
          </Link>
        )}
      </div>
    </section>
  )
}
