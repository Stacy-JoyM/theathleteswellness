import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { INSURANCE_PACKAGES, LIAISON_FAMILY_OFFICE } from '../../constants'
import { getAssetUrl } from '../../utils/assets'
import { buildApplicationPayload } from '../../utils/applicationPayload'
import PageHero from '../../components/shared/PageHero'
import InsuranceCard from '../../components/shared/InsuranceCard'
import ApplyForm, { initialFormData } from '../../components/shared/ApplyForm'
import './ApplyNowPage.css'

const STORAGE_KEY = 'tawc_apply_form_draft'

function loadDraft() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return { ...initialFormData, ...parsed }
    }
  } catch (_) {}
  return initialFormData
}

export default function ApplyNowPage() {
  const cardImage = getAssetUrl('all_sports.jpeg')
  const location = useLocation()
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [scrollToForm, setScrollToForm] = useState(false)
  const [formData, setFormData] = useState(loadDraft)
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [submitError, setSubmitError] = useState(null)
  const isSubmitting = submitStatus === 'submitting'

  useEffect(() => {
    const planId = location.state?.planId
    if (planId) {
      setFormData((prev) => ({ ...prev, selectedPlanId: planId }))
      setSelectedPlan(INSURANCE_PACKAGES.find((p) => p.id === planId) || null)
      setScrollToForm(true)
    }
  }, [location.state?.planId])

  useEffect(() => {
    if (submitStatus !== 'success') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
      } catch (_) {}
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [formData, submitStatus])

  const handleApplyClick = (plan) => {
    setSelectedPlan(plan)
    setFormData((prev) => ({ ...prev, selectedPlanId: plan.id }))
    setScrollToForm(true)
  }

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(null)
    const payload = buildApplicationPayload(formData)
    if (!payload) {
      alert('Please select a wellness package (Suswa, Longonot, Elgon, or Kenya) to submit.')
      return
    }
    setSubmitStatus('submitting')
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 60000)
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success) {
        setSubmitStatus('success')
        return
      }
      let msg = data.message || 'Application submission failed. Please try again.'
      if (msg.toLowerCase().includes('no response from user')) {
        msg = 'The M-Pesa prompt timed out. Please try again and enter your PIN on your phone when prompted.'
      } else if (msg.toLowerCase().includes('transaction canceled')) {
        msg = 'The M-Pesa transaction was canceled. Please try again when ready to complete the payment.'
      }
      setSubmitError(msg)
      setSubmitStatus('error')
    } catch (err) {
      clearTimeout(timeoutId)
      const msg = err.name === 'AbortError' ? 'Request timed out. Please try again.' : (err.message || 'Failed to submit. Please try again.')
      setSubmitError(msg)
      setSubmitStatus('error')
    }
  }

  const handleSubmitAnother = () => {
    setSubmitStatus('idle')
    setSubmitError(null)
    setFormData(initialFormData)
    setSelectedPlan(null)
  }

  return (
    <section className="apply-now-page">
      <PageHero
        kicker="Apply Now"
        title="Wellness Membership Application"
        description="Select a package and complete the application form below. For full package details, view the Wellness Packages page."
        className="apply-now-hero"
      />

      <section className="apply-now-packages">
        {INSURANCE_PACKAGES.map((plan) => (
          <InsuranceCard
            key={plan.id}
            plan={plan}
            imageUrl={cardImage}
            ctaText="Apply Now"
            onApplyClick={handleApplyClick}
          />
        ))}
      </section>

      <section className="apply-now-liaison">
        <h3>{LIAISON_FAMILY_OFFICE.title}</h3>
        <p>{LIAISON_FAMILY_OFFICE.clientIntro}</p>
        {LIAISON_FAMILY_OFFICE.services.map((service) => (
          <div key={service.name} className="apply-now-liaison-service">
            <h4>{service.name}</h4>
            <p>{service.description}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <p className="apply-now-liaison-disclaimer">{LIAISON_FAMILY_OFFICE.disclaimer}</p>
        <div className="apply-now-liaison-actions">
          <Link to="/contact-us" className="apply-now-liaison-advisor">
            Talk to Advisor
          </Link>
        </div>
      </section>

      {submitStatus === 'success' ? (
        <div className="apply-now-success">
          <div className="apply-now-success-icon">✓</div>
          <h2 className="apply-now-success-title">Application Submitted Successfully</h2>
          <p className="apply-now-success-message">
            Thank you for your application. We will reach out to you soon.
          </p>
          <p className="apply-now-success-note">
            If you received an M-Pesa prompt on your phone, please enter your PIN to complete the payment.
          </p>
          <div className="apply-now-success-actions">
            <Link to="/" className="apply-now-success-btn apply-now-success-btn-primary">Back to Home</Link>
            <button type="button" className="apply-now-success-btn apply-now-success-btn-secondary" onClick={handleSubmitAnother}>
              Submit Another Application
            </button>
          </div>
        </div>
      ) : (
        <>
          {submitStatus === 'error' && submitError && (
            <div className="apply-now-error-banner">
              <p>{submitError}</p>
              <p className="apply-now-error-hint">Your information has been saved. Please correct any issues and try again.</p>
            </div>
          )}
          <ApplyForm
            selectedPlan={selectedPlan}
            formData={formData}
            onFormChange={handleFormChange}
            onSubmit={handleSubmit}
            scrollIntoView={scrollToForm}
            onScrolled={() => setScrollToForm(false)}
            isSubmitting={isSubmitting}
          />
        </>
      )}
    </section>
  )
}
