import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ABOUT_PAGE, CONTACT, INSURANCE_PACKAGES, LIAISON_FAMILY_OFFICE, LEARN_WELLNESS_DEALS_PATH } from '../../constants'
import { getPackageCardImageUrl } from '../../utils/packageCardImages'
import { buildApplicationPayload, validateMpesaNumber } from '../../utils/applicationPayload'
import { applicationsUrl } from '../../utils/api'
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
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [scrollToForm, setScrollToForm] = useState(false)
  const [formData, setFormData] = useState(loadDraft)
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState(null)
  const [mpesaPromptSent, setMpesaPromptSent] = useState(false)
  const submitControllerRef = useRef(null)
  const submitTimeoutRef = useRef(null)
  const isSubmitting = submitStatus === 'submitting'

  const handleCancelPrompt = useCallback((scrollToMpesa = false) => {
    if (submitControllerRef.current) {
      submitControllerRef.current.abort()
      submitControllerRef.current = null
    }
    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current)
      submitTimeoutRef.current = null
    }
    setSubmitStatus('idle')
    setSubmitError(null)
    if (scrollToMpesa) {
      setScrollToForm(true)
      setTimeout(() => {
        const input = document.getElementById('apply-paymentMpesaNumber')
        if (input) {
          input.focus()
          input.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }, [])

  useEffect(() => {
    if (submitStatus !== 'submitting') {
      setMpesaPromptSent(false)
      return
    }
    const timer = setTimeout(() => setMpesaPromptSent(true), 4000)
    return () => clearTimeout(timer)
  }, [submitStatus])

  useEffect(() => {
    const planId = location.state?.planId
    if (planId) {
      setFormData((prev) => ({ ...prev, selectedPlanId: planId }))
      setSelectedPlan(INSURANCE_PACKAGES.find((p) => p.id === planId) || null)
      setScrollToForm(true)
    }
  }, [location.state?.planId])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    } catch (_) {}
  }, [formData])

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
    const form = e.target
    if (!form.checkValidity()) {
      form.reportValidity()
      const firstInvalid = form.querySelector(':invalid')
      if (firstInvalid) {
        firstInvalid.focus()
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }
    setSubmitError(null)

    const mpesaValidation = validateMpesaNumber(formData.paymentMpesaNumber)
    if (!mpesaValidation.valid) {
      alert('Invalid M-Pesa number. ' + mpesaValidation.message)
      setSubmitError(mpesaValidation.message)
      setSubmitStatus('error')
      const mpesaInput = form.querySelector('#apply-paymentMpesaNumber')
      if (mpesaInput) {
        mpesaInput.focus()
        mpesaInput.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    const payload = buildApplicationPayload(formData)
    if (!payload) {
      alert('Please select a wellness package (Suswa, Longonot, Elgon, or Kenya) to submit.')
      return
    }
    setSubmitStatus('submitting')
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 90000)
    try {
      const res = await fetch(applicationsUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
      const data = await res.json().catch(() => {
        console.error('[Apply] Non-JSON response:', res.status, res.statusText)
        return {}
      })
      if (res.ok && data.success) {
        const planId = formData.selectedPlanId
        const successMsg = data.message || 'Payment successful. Thank you for your payment.'
        setSubmitSuccessMessage(successMsg)
        setSubmitStatus('success')
        try { localStorage.removeItem(STORAGE_KEY) } catch (_) {}
        const doRedirect = () => navigate('/apply-now/success', { state: { packageId: planId, fromSubmit: true } })
        setTimeout(doRedirect, 3000)
        return
      }
      let msg = data.message || (res.status === 404 ? 'API not found. Ensure the server is running on port 5000.' : 'Application submission failed. Please try again.')
      if (msg.toLowerCase().includes('no response from user')) {
        msg = 'The M-Pesa prompt timed out. Please try again and enter your PIN on your phone when prompted.'
      } else if (msg.toLowerCase().includes('request cancelled') || msg.toLowerCase().includes('transaction canceled')) {
        msg = 'The M-Pesa transaction was canceled. Please try again when ready to complete the payment.'
      } else if (msg.toLowerCase().includes('timed out')) {
        msg = 'The request took too long. Please check your connection and try again.'
      } else if (msg.toLowerCase().includes('an error has occurred')) {
        msg = 'payment_may_have_succeeded'
      } else if (msg.toLowerCase().includes('insufficient') || msg.toLowerCase().includes('balance')) {
        msg = 'Insufficient M-Pesa balance. Please ensure you have enough funds and try again.'
      } else if (msg.toLowerCase().includes('invalid') && msg.toLowerCase().includes('number')) {
        msg = 'Invalid M-Pesa number. Please check the number and try again.'
      } else if (msg.toLowerCase().includes('debitparty') || msg.toLowerCase().includes('invalid state')) {
        msg = 'The M-Pesa number may not be registered or active. Please use a different M-Pesa number or ensure your M-Pesa account is active.'
      }
      setSubmitError(msg)
      setSubmitStatus('error')
    } catch (err) {
      console.error('[Apply] Submit error:', err)
      const msg = err.name === 'AbortError' ? 'Request timed out. Please try again.' : (err.message || 'Failed to submit. Please try again.')
      setSubmitError(msg)
      setSubmitStatus('error')
    } finally {
      clearTimeout(timeoutId)
      submitControllerRef.current = null
      submitTimeoutRef.current = null
    }
  }

  return (
    <section className="apply-now-page">
      <PageHero
        kicker="Join the Club"
        title="Wellness Membership Application"
        description="Select a package and complete the application form below. For full package details, view the Wellness Packages page."
        className="apply-now-hero"
      />

      <section className="apply-now-packages">
        {INSURANCE_PACKAGES.map((plan) => {
          const wellnessStory = ABOUT_PAGE.packages.find((p) => p.id === plan.id)
          return (
            <InsuranceCard
              key={plan.id}
              plan={plan}
              imageUrl={getPackageCardImageUrl(plan.id)}
              wellnessStory={wellnessStory}
              packageBreakdownTo={LEARN_WELLNESS_DEALS_PATH}
              ctaText="Join the Club"
              onApplyClick={handleApplyClick}
            />
          )
        })}
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
            Talk to Our Team
          </Link>
        </div>
      </section>

      <>
          {submitStatus === 'success' && submitSuccessMessage && (
            <div className="apply-now-mpesa-overlay" role="dialog" aria-modal="true" aria-labelledby="payment-success-title">
              <div className="apply-now-mpesa-popup apply-now-success-popup">
                <div className="apply-now-mpesa-popup-icon">✓</div>
                <h2 id="payment-success-title" className="apply-now-mpesa-popup-title">Payment successful</h2>
                <p className="apply-now-mpesa-popup-message">{submitSuccessMessage}</p>
                <p className="apply-now-mpesa-popup-hint">Redirecting you to the confirmation page…</p>
                <div className="apply-now-mpesa-popup-actions">
                  <button
                    type="button"
                    className="apply-now-mpesa-popup-btn"
                    onClick={() => navigate('/apply-now/success', { state: { packageId: formData.selectedPlanId, fromSubmit: true } })}
                  >
                    Continue now
                  </button>
                </div>
              </div>
            </div>
          )}
          {submitStatus === 'submitting' && (
            <div className="apply-now-mpesa-overlay" role="dialog" aria-modal="true" aria-labelledby="mpesa-prompt-title">
              <div className="apply-now-mpesa-popup">
                <button
                  type="button"
                  className="apply-now-mpesa-popup-close"
                  onClick={() => handleCancelPrompt(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="apply-now-mpesa-popup-icon">📱</div>
                {mpesaPromptSent ? (
                  <>
                    <h2 id="mpesa-prompt-title" className="apply-now-mpesa-popup-title">A prompt has been sent to your M-Pesa number</h2>
                    <p className="apply-now-mpesa-popup-message">Please enter your PIN on your phone to complete the payment.</p>
                    <p className="apply-now-mpesa-popup-hint">This popup will only close once you enter your PIN and the payment is confirmed. Do not close this page.</p>
                    <div className="apply-now-mpesa-popup-actions">
                      <button
                        type="button"
                        className="apply-now-mpesa-popup-link-btn"
                        onClick={() => handleCancelPrompt(true)}
                      >
                        Input phone number again
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 id="mpesa-prompt-title" className="apply-now-mpesa-popup-title">Sending M-Pesa prompt…</h2>
                    <p className="apply-now-mpesa-popup-message">Please wait while we send the payment request to your phone.</p>
                    <p className="apply-now-mpesa-popup-hint">Do not close this page.</p>
                    <div className="apply-now-mpesa-popup-actions">
                      <button
                        type="button"
                        className="apply-now-mpesa-popup-link-btn"
                        onClick={() => handleCancelPrompt(true)}
                      >
                        Input phone number again
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          {submitStatus === 'error' && submitError === 'payment_may_have_succeeded' && (
            <div className="apply-now-mpesa-overlay" role="dialog" aria-modal="true" aria-labelledby="payment-maybe-title">
              <div className="apply-now-mpesa-popup">
                <div className="apply-now-mpesa-popup-icon">✓</div>
                <h2 id="payment-maybe-title" className="apply-now-mpesa-popup-title">Your payment may have been processed</h2>
                <p className="apply-now-mpesa-popup-message">If you received an M-Pesa confirmation on your phone, your application was successful.</p>
                <p className="apply-now-mpesa-popup-hint">We will contact you shortly. If you did not receive a confirmation, please try again.</p>
                <div className="apply-now-mpesa-popup-actions">
                  <button
                    type="button"
                    className="apply-now-mpesa-popup-btn"
                    onClick={() => {
                      try { localStorage.removeItem(STORAGE_KEY) } catch (_) {}
                      navigate('/apply-now/success', { state: { packageId: formData.selectedPlanId, fromSubmit: true } })
                    }}
                  >
                    I received my M-Pesa confirmation
                  </button>
                  <a href={`mailto:${CONTACT.email}?subject=Application%20-%20M-Pesa%20Payment%20Query`} className="apply-now-mpesa-popup-link">
                    Contact us at {CONTACT.email}
                  </a>
                </div>
              </div>
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
          {submitStatus === 'error' && submitError && submitError !== 'payment_may_have_succeeded' && (
            <div className="apply-now-error-banner">
              <p className="apply-now-error-banner-title">Payment did not complete</p>
              <p>{submitError}</p>
              <p className="apply-now-error-hint">Your information has been saved. Please correct any issues and try again.</p>
              <a href={`mailto:${CONTACT.email}?subject=Application%20Error%20-%20M-Pesa%20Payment`} className="apply-now-error-link">
                Contact us at {CONTACT.email}
              </a>
            </div>
          )}
      </>
    </section>
  )
}
