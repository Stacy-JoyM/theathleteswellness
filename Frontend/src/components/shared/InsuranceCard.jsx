import { Link } from 'react-router-dom'
import './InsuranceCard.css'

export default function InsuranceCard({ plan, imageUrl, ctaText = 'Apply Now', ctaHref = '/contact-us', ctaState, variant = 'full', onApplyClick }) {
  const ctaContent = onApplyClick ? (
    <button type="button" className="insurance-card-cta" onClick={() => onApplyClick(plan)}>
      {ctaText}
    </button>
  ) : (
    <Link className="insurance-card-cta" to={ctaHref} state={ctaState}>
      {ctaText}
    </Link>
  )

  return (
    <article className={`insurance-card insurance-card--${variant}`}>
      {imageUrl && (
        <img src={imageUrl} alt={plan.name} />
      )}
      <div className="insurance-card-body">
        <p className="insurance-card-tagline">{plan.tagline}</p>
        <h2>{plan.name}</h2>
        <p className="insurance-card-price">{plan.monthlyRange}</p>
        <ul className="insurance-card-features">
          {plan.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {ctaContent}
      </div>
    </article>
  )
}
