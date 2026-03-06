import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { INSURANCE_PACKAGES, FORM_PACKAGE_OPTIONS, LIAISON_APPLY_CARD } from '../../constants'
import { getAssetUrl } from '../../utils/assets'
import PageHero from '../../components/shared/PageHero'
import InsuranceCard from '../../components/shared/InsuranceCard'
import ApplyForm, { initialFormData } from '../../components/shared/ApplyForm'
import './ApplyNowPage.css'

export default function ApplyNowPage() {
  const cardImage = getAssetUrl('all_sports.jpeg')
  const location = useLocation()
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [scrollToForm, setScrollToForm] = useState(false)
  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    const planId = location.state?.planId
    if (planId) {
      setFormData((prev) => ({ ...prev, selectedPlanId: planId }))
      setSelectedPlan(INSURANCE_PACKAGES.find((p) => p.id === planId) || null)
      setScrollToForm(true)
    }
  }, [location.state?.planId])

  const handleApplyClick = (plan) => {
    setSelectedPlan(plan)
    setFormData((prev) => ({ ...prev, selectedPlanId: plan.id }))
    setScrollToForm(true)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedOption = FORM_PACKAGE_OPTIONS.find((p) => p.id === formData.selectedPlanId)
    console.log('Form submitted:', { plan: selectedOption?.name, ...formData })
    alert('Application submitted successfully! We will contact you shortly.')
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
        <InsuranceCard
          key={LIAISON_APPLY_CARD.id}
          plan={LIAISON_APPLY_CARD}
          imageUrl={cardImage}
          ctaText="Apply Now"
          onApplyClick={handleApplyClick}
        />
      </section>

      <ApplyForm
        selectedPlan={selectedPlan}
        formData={formData}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
        scrollIntoView={scrollToForm}
        onScrolled={() => setScrollToForm(false)}
      />
    </section>
  )
}
