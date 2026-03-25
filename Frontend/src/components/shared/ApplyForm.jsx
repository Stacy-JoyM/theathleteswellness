import { useRef, useEffect, useMemo } from 'react'
import { FORM_PACKAGE_OPTIONS, INSURANCE_PACKAGES, LIAISON_PENSION, SITE_NAME } from '../../constants'
import { computeInstallmentSchedule, formatKes } from '../../utils/paymentSchedule'
import './ApplyForm.css'

const initialDependant = () => ({
  fullName: '',
  dob: '',
  gender: '',
  birthCertificateNumber: '',
})

const initialEquipmentItem = () => ({
  name: '',
  makeName: '',
  model: '',
  quantity: 1,
  price: '',
})

const initialFormData = {
  selectedPlanId: '',
  name: '',
  dob: '',
  gender: '',
  idNumber: '',
  kraPin: '',
  spouseFullName: '',
  spouseGender: '',
  spouseDob: '',
  dependants: [initialDependant()],
  lastExpenseCover: [
    { relationship: 'parent', parentName: '', idNumber: '', dob: '', gender: '' },
    { relationship: 'parent', parentName: '', idNumber: '', dob: '', gender: '' },
  ],
  sportsEquipment: [initialEquipmentItem()],
  principalPhone: '',
  principalEmail: '',
  paymentMpesaNumber: '',
  paymentMethod: 'full',
  liaisonPensionContact: false,
  confirmationChecked: false,
}

export { initialFormData }

const PHONE_PREFIX = '254'

function normalizePhoneInput(val) {
  const digits = String(val || '').replace(/\D/g, '')
  if (digits.startsWith('254') && digits.length >= 12) return digits.slice(0, 12)
  if (digits.startsWith('254')) return PHONE_PREFIX + digits.slice(3, 12)
  if (digits.startsWith('07') && digits.length >= 10) return PHONE_PREFIX + digits.slice(2, 11)
  if (digits.startsWith('7') && digits.length === 9) return PHONE_PREFIX + digits
  if (digits.length > 0) return PHONE_PREFIX + digits.slice(0, 9)
  return ''
}

export default function ApplyForm({ selectedPlan, formData, onFormChange, onSubmit, scrollIntoView, onScrolled, isSubmitting }) {
  const formRef = useRef(null)
  const selectedPackage = INSURANCE_PACKAGES.find((p) => p.id === formData.selectedPlanId)

  const handlePhoneChange = (name, rawValue) => {
    const normalized = normalizePhoneInput(rawValue)
    onFormChange({ target: { name, value: normalized } })
  }

  const handlePhonePaste = (e, name) => {
    e.preventDefault()
    const pasted = (e.clipboardData?.getData('text') || '').replace(/\D/g, '')
    let digits = ''
    if (pasted.startsWith('254') && pasted.length >= 12) digits = pasted.slice(3, 12)
    else if (pasted.startsWith('254')) digits = pasted.slice(3)
    else if (pasted.startsWith('07') && pasted.length >= 10) digits = pasted.slice(2, 11)
    else if (pasted.startsWith('7') && pasted.length === 9) digits = pasted
    else if (pasted.length >= 9) digits = pasted.slice(0, 9)
    else digits = pasted
    const full = PHONE_PREFIX + digits.slice(0, 9)
    onFormChange({ target: { name, value: full } })
  }

  useEffect(() => {
    if (scrollIntoView && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      onScrolled?.()
    }
  }, [scrollIntoView])

  useEffect(() => {
    if (selectedPackage?.annualSubscription == null && formData.paymentMethod === 'installments') {
      onFormChange({ target: { name: 'paymentMethod', value: 'full' } })
    }
  }, [selectedPackage?.annualSubscription, formData.paymentMethod, onFormChange])

  const installmentSchedule = useMemo(() => {
    const sub = selectedPackage?.annualSubscription
    if (sub == null || formData.paymentMethod !== 'installments') return null
    return computeInstallmentSchedule(sub)
  }, [selectedPackage, formData.paymentMethod])

  return (
    <section className="apply-form" ref={formRef}>
      <div className="apply-form-document">
        <header className="apply-form-header">
          <div className="apply-form-brand">
            <h1>{SITE_NAME}</h1>
            <p className="apply-form-doc-type">Wellness Membership Application</p>
          </div>
          <div className="apply-form-meta">
            <p>Please complete all sections. Fields marked with <span className="required">*</span> are mandatory.</p>
          </div>
        </header>

        <form className="apply-form-body" onSubmit={onSubmit}>
          <section className="apply-form-block">
            <h3 className="apply-form-block-title"><span className="apply-form-block-num">1</span> Package Selection</h3>
            <div className="apply-form-row">
              <label htmlFor="apply-plan">
                Selected Wellness Package <span className="required">*</span>
              </label>
              <select
                id="apply-plan"
                name="selectedPlanId"
                value={formData.selectedPlanId || selectedPlan?.id || ''}
                onChange={onFormChange}
                required
              >
                <option value="">— Select package or service —</option>
                {FORM_PACKAGE_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section className="apply-form-block">
            <h3 className="apply-form-block-title"><span className="apply-form-block-num">2</span> Principal Applicant Details</h3>
            <div className="apply-form-grid">
              <div className="apply-form-row">
                <label htmlFor="apply-name">
                  Full Legal Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="apply-name"
                  name="name"
                  value={formData.name}
                  onChange={onFormChange}
                  required
                  placeholder="As per ID document"
                />
              </div>
              <div className="apply-form-row">
                <label htmlFor="apply-dob">
                  Date of Birth <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="apply-dob"
                  name="dob"
                  value={formData.dob}
                  onChange={onFormChange}
                  required
                />
              </div>
            </div>
            <div className="apply-form-grid">
              <div className="apply-form-row">
                <label htmlFor="apply-gender">
                  Gender <span className="required">*</span>
                </label>
                <select
                  id="apply-gender"
                  name="gender"
                  value={formData.gender}
                  onChange={onFormChange}
                  required
                >
                  <option value="">— Select —</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="apply-form-row">
                <label htmlFor="apply-idNumber">
                  National ID Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="apply-idNumber"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={onFormChange}
                  required
                  placeholder="e.g. 12345678"
                />
              </div>
            </div>
            <div className="apply-form-grid">
              <div className="apply-form-row">
                <label htmlFor="apply-kraPin">KRA PIN Number <span className="required">*</span></label>
                <input
                  type="text"
                  id="apply-kraPin"
                  name="kraPin"
                  value={formData.kraPin}
                  onChange={onFormChange}
                  required
                  placeholder="e.g. A001234567X"
                />
              </div>
              <div className="apply-form-row">
                <label htmlFor="apply-principalPhone">
                  Contact Phone Number <span className="required">*</span>
                </label>
                <div className="apply-form-phone-input">
                  <span className="apply-form-phone-prefix">254</span>
                  <input
                    type="tel"
                    id="apply-principalPhone"
                    name="principalPhone"
                    value={(normalizePhoneInput(formData.principalPhone) || '').replace(/^254/, '')}
                    onChange={(e) => handlePhoneChange('principalPhone', '254' + e.target.value.replace(/\D/g, '').slice(0, 9))}
                    onPaste={(e) => handlePhonePaste(e, 'principalPhone')}
                    required
                    placeholder="712345678"
                    maxLength={9}
                    pattern="[0-9]{9}"
                    title="Enter 9 digits (e.g. 712345678)"
                  />
                </div>
              </div>
            </div>
            <div className="apply-form-row">
              <label htmlFor="apply-principalEmail">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="apply-principalEmail"
                name="principalEmail"
                value={formData.principalEmail}
                onChange={onFormChange}
                required
                placeholder="email@example.com"
              />
            </div>
          </section>

          <section className="apply-form-block">
            <h3 className="apply-form-block-title"><span className="apply-form-block-num">3</span> Dependants (if applicable)</h3>
            <p className="apply-form-hint">One spouse/partner only. Add dependants/children as needed.</p>
            <div className="apply-form-row">
              <label htmlFor="apply-spouseFullName">Spouse / Partner Full Name</label>
              <input
                type="text"
                id="apply-spouseFullName"
                name="spouseFullName"
                value={formData.spouseFullName ?? [formData.spouseFirstName, formData.spouseLastName].filter(Boolean).join(' ') ?? ''}
                onChange={onFormChange}
                placeholder="Full name"
              />
            </div>
            <div className="apply-form-grid">
              <div className="apply-form-row">
                <label htmlFor="apply-spouseGender">Spouse / Partner Gender</label>
                <select
                  id="apply-spouseGender"
                  name="spouseGender"
                  value={formData.spouseGender}
                  onChange={onFormChange}
                >
                  <option value="">— Select —</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="apply-form-row">
                <label htmlFor="apply-spouseDob">Spouse / Partner Date of Birth</label>
                <input
                  type="date"
                  id="apply-spouseDob"
                  name="spouseDob"
                  value={formData.spouseDob}
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="apply-form-dependants">
              <p className="apply-form-dependants-label">Dependants / Children</p>
              {(formData.dependants || [initialDependant()]).map((dep, index) => (
                <div key={index} className="apply-form-dependant-card">
                  <p className="apply-form-dependant-title">Dependant {index + 1}</p>
                  <div className="apply-form-row">
                    <label htmlFor={`apply-dep-${index}-fullName`}>Full Name</label>
                    <input
                      type="text"
                      id={`apply-dep-${index}-fullName`}
                      value={dep.fullName ?? [dep.firstName, dep.lastName].filter(Boolean).join(' ') ?? ''}
                      onChange={(e) => {
                        const updated = [...(formData.dependants || [])]
                        updated[index] = { ...updated[index], fullName: e.target.value }
                        onFormChange({ target: { name: 'dependants', value: updated } })
                      }}
                      placeholder="Full name"
                    />
                  </div>
                  <div className="apply-form-grid">
                    <div className="apply-form-row">
                      <label htmlFor={`apply-dep-${index}-dob`}>Date of Birth</label>
                      <input
                        type="date"
                        id={`apply-dep-${index}-dob`}
                        value={dep.dob}
                        onChange={(e) => {
                          const updated = [...(formData.dependants || [])]
                          updated[index] = { ...updated[index], dob: e.target.value }
                          onFormChange({ target: { name: 'dependants', value: updated } })
                        }}
                      />
                    </div>
                    <div className="apply-form-row">
                      <label htmlFor={`apply-dep-${index}-gender`}>Gender</label>
                      <select
                        id={`apply-dep-${index}-gender`}
                        value={dep.gender}
                        onChange={(e) => {
                          const updated = [...(formData.dependants || [])]
                          updated[index] = { ...updated[index], gender: e.target.value }
                          onFormChange({ target: { name: 'dependants', value: updated } })
                        }}
                      >
                        <option value="">— Select —</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="apply-form-row">
                    <label htmlFor={`apply-dep-${index}-birthCertificateNumber`}>Birth Certificate No</label>
                    <input
                      type="text"
                      id={`apply-dep-${index}-birthCertificateNumber`}
                      value={dep.birthCertificateNumber || ''}
                      onChange={(e) => {
                        const updated = [...(formData.dependants || [])]
                        updated[index] = { ...updated[index], birthCertificateNumber: e.target.value }
                        onFormChange({ target: { name: 'dependants', value: updated } })
                      }}
                      placeholder="123456"
                    />
                  </div>
                  {(formData.dependants?.length > 1) && (
                    <button
                      type="button"
                      className="apply-form-dependant-remove"
                      onClick={() => {
                        const updated = (formData.dependants || []).filter((_, i) => i !== index)
                        onFormChange({ target: { name: 'dependants', value: updated } })
                      }}
                    >
                      Remove dependant
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="apply-form-dependant-add"
                onClick={() => {
                  const current = formData.dependants || []
                  onFormChange({ target: { name: 'dependants', value: [...current, initialDependant()] } })
                }}
              >
                {(formData.dependants?.length ?? 0) > 0 ? '+ Add another dependant / child' : '+ Add dependant / child'}
              </button>
            </div>
          </section>

          <section className="apply-form-block">
            <h3 className="apply-form-block-title"><span className="apply-form-block-num">4</span> Last Expense Cover</h3>
            <p className="apply-form-hint">Provide details for up to two parents or parents-in-law.</p>
            {(formData.lastExpenseCover || [
              { relationship: 'parent', parentName: '', idNumber: '', dob: '', gender: '' },
              { relationship: 'parent', parentName: '', idNumber: '', dob: '', gender: '' },
            ]).map((entry, index) => (
              <div key={index} className="apply-form-last-expense-card">
                <div className="apply-form-row apply-form-last-expense-relationship">
                  <label htmlFor={`apply-lastExpense-${index}-relationship`}>Relationship</label>
                  <select
                    id={`apply-lastExpense-${index}-relationship`}
                    value={entry.relationship ?? 'parent'}
                    onChange={(e) => {
                      const updated = [...(formData.lastExpenseCover || [])]
                      updated[index] = { ...updated[index], relationship: e.target.value }
                      onFormChange({ target: { name: 'lastExpenseCover', value: updated } })
                    }}
                  >
                    <option value="parent">Parent</option>
                    <option value="parent-in-law">Parent-in-law</option>
                  </select>
                </div>
                <p className="apply-form-last-expense-title">
                  {entry.relationship === 'parent-in-law' ? 'Parent-in-law' : 'Parent'} {index + 1}
                </p>
                <div className="apply-form-grid">
                  <div className="apply-form-row">
                    <label htmlFor={`apply-lastExpense-${index}-parentName`}>Name</label>
                    <input
                      type="text"
                      id={`apply-lastExpense-${index}-parentName`}
                      value={entry.parentName}
                      onChange={(e) => {
                        const updated = [...(formData.lastExpenseCover || [])]
                        updated[index] = { ...updated[index], parentName: e.target.value }
                        onFormChange({ target: { name: 'lastExpenseCover', value: updated } })
                      }}
                      placeholder="Full name"
                    />
                  </div>
                  <div className="apply-form-row">
                    <label htmlFor={`apply-lastExpense-${index}-idNumber`}>ID Number</label>
                    <input
                      type="text"
                      id={`apply-lastExpense-${index}-idNumber`}
                      value={entry.idNumber}
                      onChange={(e) => {
                        const updated = [...(formData.lastExpenseCover || [])]
                        updated[index] = { ...updated[index], idNumber: e.target.value }
                        onFormChange({ target: { name: 'lastExpenseCover', value: updated } })
                      }}
                      placeholder="12345678"
                    />
                  </div>
                  <div className="apply-form-row">
                    <label htmlFor={`apply-lastExpense-${index}-gender`}>Gender</label>
                    <select
                      id={`apply-lastExpense-${index}-gender`}
                      value={entry.gender ?? ''}
                      onChange={(e) => {
                        const updated = [...(formData.lastExpenseCover || [])]
                        updated[index] = { ...updated[index], gender: e.target.value }
                        onFormChange({ target: { name: 'lastExpenseCover', value: updated } })
                      }}
                    >
                      <option value="">— Select —</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="apply-form-row">
                  <label htmlFor={`apply-lastExpense-${index}-dob`}>Date of Birth</label>
                  <input
                    type="date"
                    id={`apply-lastExpense-${index}-dob`}
                    value={entry.dob}
                    onChange={(e) => {
                      const updated = [...(formData.lastExpenseCover || [])]
                      updated[index] = { ...updated[index], dob: e.target.value }
                      onFormChange({ target: { name: 'lastExpenseCover', value: updated } })
                    }}
                  />
                </div>
              </div>
            ))}
          </section>

          <section className="apply-form-block">
            <h3 className="apply-form-block-title"><span className="apply-form-block-num">5</span> Sports Equipment (if applicable)</h3>
            <div className="apply-form-equipment">
              <div className="apply-form-equipment-header">
                <span className="apply-form-equipment-col">Name</span>
                <span className="apply-form-equipment-col">Make name</span>
                <span className="apply-form-equipment-col">Model</span>
                <span className="apply-form-equipment-col apply-form-equipment-col-qty">Qty</span>
                <span className="apply-form-equipment-col">Price (KES)</span>
                <span className="apply-form-equipment-col" aria-hidden="true" />
              </div>
              {(formData.sportsEquipment || [initialEquipmentItem()]).map((item, index) => (
                <div key={index} className="apply-form-equipment-row">
                  <div className="apply-form-equipment-col">
                    <input
                      type="text"
                      id={`apply-equip-${index}-name`}
                      value={item.name ?? item.itemName ?? ''}
                      onChange={(e) => {
                        const updated = [...(formData.sportsEquipment || [])]
                        updated[index] = { ...updated[index], name: e.target.value }
                        onFormChange({ target: { name: 'sportsEquipment', value: updated } })
                      }}
                      placeholder="e.g. Golf Stick"
                    />
                  </div>
                  <div className="apply-form-equipment-col">
                    <input
                      type="text"
                      id={`apply-equip-${index}-makeName`}
                      value={item.makeName ?? item.makeModel ?? ''}
                      onChange={(e) => {
                        const updated = [...(formData.sportsEquipment || [])]
                        updated[index] = { ...updated[index], makeName: e.target.value }
                        onFormChange({ target: { name: 'sportsEquipment', value: updated } })
                      }}
                      placeholder="e.g. Puma"
                    />
                  </div>
                  <div className="apply-form-equipment-col">
                    <input
                      type="text"
                      id={`apply-equip-${index}-model`}
                      value={item.model ?? ''}
                      onChange={(e) => {
                        const updated = [...(formData.sportsEquipment || [])]
                        updated[index] = { ...updated[index], model: e.target.value }
                        onFormChange({ target: { name: 'sportsEquipment', value: updated } })
                      }}
                      placeholder="e.g. P900"
                    />
                  </div>
                  <div className="apply-form-equipment-col apply-form-equipment-col-qty">
                    <div className="apply-form-quantity">
                      <button
                        type="button"
                        className="apply-form-quantity-btn"
                        aria-label="Decrease quantity"
                        onClick={() => {
                          const qty = Math.max(1, (item.quantity ?? 1) - 1)
                          const updated = [...(formData.sportsEquipment || [])]
                          updated[index] = { ...updated[index], quantity: qty }
                          onFormChange({ target: { name: 'sportsEquipment', value: updated } })
                        }}
                      >
                        −
                      </button>
                      <input
                        type="number"
                        id={`apply-equip-${index}-quantity`}
                        min={1}
                        value={item.quantity ?? 1}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10)
                          const qty = isNaN(val) || val < 1 ? 1 : val
                          const updated = [...(formData.sportsEquipment || [])]
                          updated[index] = { ...updated[index], quantity: qty }
                          onFormChange({ target: { name: 'sportsEquipment', value: updated } })
                        }}
                        className="apply-form-quantity-input"
                      />
                      <button
                        type="button"
                        className="apply-form-quantity-btn"
                        aria-label="Increase quantity"
                        onClick={() => {
                          const qty = (item.quantity ?? 1) + 1
                          const updated = [...(formData.sportsEquipment || [])]
                          updated[index] = { ...updated[index], quantity: qty }
                          onFormChange({ target: { name: 'sportsEquipment', value: updated } })
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="apply-form-equipment-col">
                    <input
                      type="text"
                      id={`apply-equip-${index}-price`}
                      value={item.price}
                      onChange={(e) => {
                        const updated = [...(formData.sportsEquipment || [])]
                        updated[index] = { ...updated[index], price: e.target.value }
                        onFormChange({ target: { name: 'sportsEquipment', value: updated } })
                      }}
                      placeholder="e.g. 3,000"
                    />
                  </div>
                  {(formData.sportsEquipment?.length > 1) && (
                    <button
                      type="button"
                      className="apply-form-equipment-remove"
                      onClick={() => {
                        const updated = (formData.sportsEquipment || []).filter((_, i) => i !== index)
                        onFormChange({ target: { name: 'sportsEquipment', value: updated } })
                      }}
                      aria-label="Remove row"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="apply-form-equipment-add"
                onClick={() => {
                  const current = formData.sportsEquipment || []
                  onFormChange({ target: { name: 'sportsEquipment', value: current.length ? [...current, initialEquipmentItem()] : [initialEquipmentItem()] } })
                }}
              >
                {(formData.sportsEquipment?.length ?? 0) > 0 ? '+ Add another item' : '+ Add item'}
              </button>
            </div>
          </section>

          <section className="apply-form-block apply-form-liaison-pension">
            <h3 className="apply-form-block-title"><span className="apply-form-block-num">6</span> {LIAISON_PENSION.title}</h3>
            <p className="apply-form-liaison-highlight">{LIAISON_PENSION.highlight}</p>
            <ul className="apply-form-liaison-details">
              {LIAISON_PENSION.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <label className="apply-form-liaison-checkbox">
              <input
                type="checkbox"
                name="liaisonPensionContact"
                checked={formData.liaisonPensionContact || false}
                onChange={(e) => onFormChange({ target: { name: 'liaisonPensionContact', value: e.target.checked } })}
              />
              <span>{LIAISON_PENSION.checkboxLabel}</span>
            </label>
          </section>

          <section className="apply-form-block apply-form-payment">
            <h3 className="apply-form-block-title"><span className="apply-form-block-num">7</span> Payment</h3>
            {selectedPackage?.annualSubscription != null && (
              <>
                <p className="apply-form-payment-label">How would you like to pay?</p>
                <div className="apply-form-payment-options" role="radiogroup" aria-label="Payment method">
                  <label
                    className={`apply-form-payment-option ${formData.paymentMethod === 'full' ? 'is-selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="full"
                      checked={formData.paymentMethod !== 'installments'}
                      onChange={onFormChange}
                    />
                    <span className="apply-form-payment-option-title">Pay in full</span>
                    <span className="apply-form-payment-option-desc">
                      KES {formatKes(selectedPackage.annualSubscription)} — annual subscription, no surcharge
                    </span>
                  </label>
                  <label
                    className={`apply-form-payment-option ${formData.paymentMethod === 'installments' ? 'is-selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="installments"
                      checked={formData.paymentMethod === 'installments'}
                      onChange={onFormChange}
                    />
                    <span className="apply-form-payment-option-title">Pay in 3 installments</span>
                    <span className="apply-form-payment-option-desc">
                      Installment amounts are inclusive of a 5% premium charge, split 50% (month 1), 25% (month 2), 25% (month 3)
                    </span>
                  </label>
                </div>
                {installmentSchedule && (
                  <div className="apply-form-installment-breakdown">
                    <p className="apply-form-installment-title">Installment breakdown (KES)</p>
                    <div className="apply-form-installment-grid">
                      <div className="apply-form-installment-row">
                        <span>Full-pay reference</span>
                        <strong>{formatKes(installmentSchedule.basePremium)}</strong>
                      </div>
                      <div className="apply-form-installment-row">
                        <span>Total payable (inclusive of 5% premium charge)</span>
                        <strong>{formatKes(installmentSchedule.installmentTotal)}</strong>
                      </div>
                      <div className="apply-form-installment-row">
                        <span>Month 1 (50%)</span>
                        <strong>{formatKes(installmentSchedule.month1)}</strong>
                      </div>
                      <div className="apply-form-installment-row">
                        <span>Month 2 (25%)</span>
                        <strong>{formatKes(installmentSchedule.month2)}</strong>
                      </div>
                      <div className="apply-form-installment-row">
                        <span>Month 3 (25%)</span>
                        <strong>{formatKes(installmentSchedule.month3)}</strong>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            <div className="apply-form-row">
              <label htmlFor="apply-paymentMpesaNumber">
                M-Pesa Number <span className="required">*</span>
              </label>
              <div className="apply-form-phone-input">
                <span className="apply-form-phone-prefix">254</span>
                <input
                  type="tel"
                  id="apply-paymentMpesaNumber"
                  name="paymentMpesaNumber"
                  value={(normalizePhoneInput(formData.paymentMpesaNumber) || '').replace(/^254/, '')}
                  onChange={(e) => handlePhoneChange('paymentMpesaNumber', '254' + e.target.value.replace(/\D/g, '').slice(0, 9))}
                  onPaste={(e) => handlePhonePaste(e, 'paymentMpesaNumber')}
                  required
                  placeholder="712345678"
                  maxLength={9}
                  pattern="[0-9]{9}"
                  title="Enter 9 digits (e.g. 712345678)"
                />
              </div>
              <span className="apply-form-hint-inline">The number you would like to transfer payment from</span>
            </div>
          </section>

          <section className="apply-form-block apply-form-declaration">
            <label className="apply-form-declaration-label">
              <input
                type="checkbox"
                name="confirmationChecked"
                checked={formData.confirmationChecked || false}
                onChange={(e) => onFormChange({ target: { name: 'confirmationChecked', value: e.target.checked } })}
                required
              />
              <span className="apply-form-declaration-text">
                I confirm that the information provided in this application is true and accurate to the best of my knowledge. 
                I understand that {SITE_NAME} may use this information to process my application and provide wellness services.
              </span>
            </label>
          </section>

          <div className="apply-form-actions">
            <button type="submit" className="apply-form-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
