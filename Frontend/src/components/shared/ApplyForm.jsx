import { useRef, useEffect } from 'react'
import { FORM_PACKAGE_OPTIONS, INSURANCE_PACKAGES, LIAISON_PENSION, SITE_NAME } from '../../constants'
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
    { parentName: '', idNumber: '', dob: '', gender: '' },
    { parentName: '', idNumber: '', dob: '', gender: '' },
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

function formatKes(n) {
  return new Intl.NumberFormat('en-KE', { style: 'decimal' }).format(n)
}

export default function ApplyForm({ selectedPlan, formData, onFormChange, onSubmit, scrollIntoView, onScrolled, isSubmitting }) {
  const formRef = useRef(null)
  const selectedPackage = INSURANCE_PACKAGES.find((p) => p.id === formData.selectedPlanId)
  const totalPrice = selectedPackage?.annualSubscription ?? null
  const isInstallments = (formData.paymentMethod || 'full') === 'installments'

  const installmentBreakdown = totalPrice
    ? (() => {
        const month1 = Math.round(totalPrice * 0.5)
        const month2 = Math.round(totalPrice * 0.25)
        const month3 = totalPrice - month1 - month2
        return { month1, month2, month3 }
      })()
    : null

  useEffect(() => {
    if (scrollIntoView && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      onScrolled?.()
    }
  }, [scrollIntoView])

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
                <label htmlFor="apply-kraPin">KRA PIN Number</label>
                <input
                  type="text"
                  id="apply-kraPin"
                  name="kraPin"
                  value={formData.kraPin}
                  onChange={onFormChange}
                  placeholder="e.g. A001234567X"
                />
              </div>
              <div className="apply-form-row">
                <label htmlFor="apply-principalPhone">
                  Contact Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="apply-principalPhone"
                  name="principalPhone"
                  value={formData.principalPhone}
                  onChange={onFormChange}
                  required
                  placeholder="+254 700 000 000"
                />
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
            <p className="apply-form-hint">Provide details for up to two parents.</p>
            {(formData.lastExpenseCover || [
              { parentName: '', idNumber: '', dob: '', gender: '' },
              { parentName: '', idNumber: '', dob: '', gender: '' },
            ]).map((parent, index) => (
              <div key={index} className="apply-form-last-expense-card">
                <p className="apply-form-last-expense-title">Parent {index + 1}</p>
                <div className="apply-form-grid">
                  <div className="apply-form-row">
                    <label htmlFor={`apply-lastExpense-${index}-parentName`}>Parent Name</label>
                    <input
                      type="text"
                      id={`apply-lastExpense-${index}-parentName`}
                      value={parent.parentName}
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
                      value={parent.idNumber}
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
                      value={parent.gender ?? ''}
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
                    value={parent.dob}
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
            <div className="apply-form-row">
              <label htmlFor="apply-paymentMpesaNumber">
                M-Pesa Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="apply-paymentMpesaNumber"
                name="paymentMpesaNumber"
                value={formData.paymentMpesaNumber}
                onChange={onFormChange}
                required
                placeholder="07XX XXX XXX"
              />
              <span className="apply-form-hint-inline">The number you would like to transfer payment from</span>
            </div>
            <div className="apply-form-row">
              <p className="apply-form-payment-label">Payment Option <span className="required">*</span></p>
              <div className="apply-form-payment-options">
                <label className={`apply-form-payment-option ${(formData.paymentMethod || 'full') === 'full' ? 'is-selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="full"
                    checked={(formData.paymentMethod || 'full') === 'full'}
                    onChange={onFormChange}
                  />
                  <span className="apply-form-payment-option-title">Pay all at once</span>
                  <span className="apply-form-payment-option-desc">Full payment in one transaction</span>
                </label>
                <label className={`apply-form-payment-option ${(formData.paymentMethod || 'full') === 'installments' ? 'is-selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="installments"
                    checked={(formData.paymentMethod || 'full') === 'installments'}
                    onChange={onFormChange}
                  />
                  <span className="apply-form-payment-option-title">Pay in installments</span>
                  <span className="apply-form-payment-option-desc">50% in month 1, 25% in month 2, 25% in month 3</span>
                </label>
              </div>
            </div>
            {isInstallments && (
              <div className="apply-form-installment-breakdown">
                <p className="apply-form-installment-title">Installment breakdown</p>
                {installmentBreakdown ? (
                  <div className="apply-form-installment-grid">
                    <div className="apply-form-installment-row">
                      <span>Total</span>
                      <strong>KES {formatKes(totalPrice)}</strong>
                    </div>
                    <div className="apply-form-installment-row">
                      <span>Month 1 (50%)</span>
                      <strong>KES {formatKes(installmentBreakdown.month1)}</strong>
                    </div>
                    <div className="apply-form-installment-row">
                      <span>Month 2 (25%)</span>
                      <strong>KES {formatKes(installmentBreakdown.month2)}</strong>
                    </div>
                    <div className="apply-form-installment-row">
                      <span>Month 3 (25%)</span>
                      <strong>KES {formatKes(installmentBreakdown.month3)}</strong>
                    </div>
                  </div>
                ) : (
                  <p className="apply-form-installment-no-price">Select a wellness package above to see installment amounts. Liaison Family Office pricing is available on request.</p>
                )}
              </div>
            )}
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
