import { Link } from 'react-router-dom'
import { LEARN_WELLNESS_DEALS_PATH } from '../../constants'
import './InsuranceCard.css'

export default function InsuranceCard({
  plan,
  imageUrl,
  ctaText = 'Join the Club',
  ctaHref = '/contact-us',
  ctaState,
  variant = 'full',
  onApplyClick,
  wellnessStory,
  packageBreakdownTo = LEARN_WELLNESS_DEALS_PATH,
}) {
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
        {wellnessStory?.intro && <p className="insurance-card-intro">{wellnessStory.intro}</p>}
        {wellnessStory && (
          <>
            <h3 className="insurance-card-subheading">Within play</h3>
            <p className="insurance-card-story">
              {wellnessStory.withinPlay.beforeLink}
              {wellnessStory.withinPlay.showPackageBreakdownLink && (
                <Link className="insurance-card-inline-link" to={packageBreakdownTo}>
                  See package breakdown
                </Link>
              )}
              {wellnessStory.withinPlay.afterLink}
            </p>
            <h3 className="insurance-card-subheading">Post play</h3>
            <p className="insurance-card-story insurance-card-story--tail">{wellnessStory.postPlay}</p>
          </>
        )}
        {ctaContent}
      </div>
    </article>
  )
}
