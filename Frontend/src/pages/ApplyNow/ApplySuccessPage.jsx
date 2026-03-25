import { Link, useLocation, Navigate } from 'react-router-dom'
import { INSURANCE_PACKAGES } from '../../constants'
import PageHero from '../../components/shared/PageHero'
import './ApplySuccessPage.css'

export default function ApplySuccessPage() {
  const location = useLocation()
  const packageId = location.state?.packageId
  const packageName = packageId
    ? (INSURANCE_PACKAGES.find((p) => p.id === packageId)?.name || (packageId === 'liaison-family-office' ? 'Build your wealth' : packageId))
    : 'your wellness'

  if (!location.state?.fromSubmit) {
    return <Navigate to="/apply-now" replace />
  }

  return (
    <section className="apply-success-page">
      <PageHero
        kicker="Success"
        title="Purchase Complete"
        description="Your wellness membership has been confirmed."
        className="apply-success-hero"
      />

      <div className="apply-success-card">
        <div className="apply-success-icon">✓</div>
        <h1 className="apply-success-title">You have successfully bought the {packageName} package</h1>
        <p className="apply-success-message">
          To confirm your purchase for this cover, an email will be sent with payment confirmation.
        </p>
        <p className="apply-success-note">
          If you do not receive a payment confirmation within 3 days, kindly reach out immediately.
        </p>
        <p className="apply-success-thankyou">
          Thank you for choosing the Athlete Wellness Club.
        </p>
        <div className="apply-success-actions">
          <Link to="/" className="apply-success-btn apply-success-btn-primary">
            Back to Home
          </Link>
          <Link to="/apply-now" state={{}} className="apply-success-btn apply-success-btn-secondary">
            Submit Another Application
          </Link>
        </div>
      </div>
    </section>
  )
}
