import { useRef, useEffect } from 'react'
import { FORM_PACKAGE_OPTIONS, SITE_NAME } from '../../constants'
import './ApplyForm.css'

const initialFormData = {
  selectedPlanId: '',
  name: '',
  dob: '',
  idNumber: '',
  kraPin: '',
  spouseName: '',
  spouseDob: '',
  kidsNamesAndDob: '',
  parentsLastExpense: '',
  parentsInLawLastExpense: '',
  sportsEquipmentDescription: '',
  equipmentValue: '',
  principalPhone: '',
  confirmationChecked: false,
}

export { initialFormData }

export default function ApplyForm({ selectedPlan, formData, onFormChange, onSubmit, scrollIntoView, onScrolled }) {
  const formRef = useRef(null)

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
          </section>

          <section className="apply-form-block">
            <h3 className="apply-form-block-title"><span className="apply-form-block-num">3</span> Dependants (if applicable)</h3>
            <div className="apply-form-grid">
              <div className="apply-form-row">
                <label htmlFor="apply-spouseName">Spouse / Partner Name</label>
                <input
                  type="text"
                  id="apply-spouseName"
                  name="spouseName"
                  value={formData.spouseName}
                  onChange={onFormChange}
                  placeholder="Full name"
                />
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
            <div className="apply-form-row">
              <label htmlFor="apply-kidsNamesAndDob">Children: Names and Dates of Birth</label>
              <textarea
                id="apply-kidsNamesAndDob"
                name="kidsNamesAndDob"
                value={formData.kidsNamesAndDob}
                onChange={onFormChange}
                rows={3}
                placeholder="e.g. John Doe, 15/03/2010; Jane Doe, 22/07/2015"
              />
            </div>
          </section>

          <section className="apply-form-block">
            <h3 className="apply-form-block-title"><span className="apply-form-block-num">4</span> Last Expense Cover</h3>
            <p className="apply-form-hint">For parents and parents-in-law. Provide full names and any relevant details.</p>
            <div className="apply-form-row">
              <label htmlFor="apply-parentsLastExpense">Parents</label>
              <textarea
                id="apply-parentsLastExpense"
                name="parentsLastExpense"
                value={formData.parentsLastExpense}
                onChange={onFormChange}
                rows={2}
                placeholder="Names and details for last expense cover"
              />
            </div>
            <div className="apply-form-row">
              <label htmlFor="apply-parentsInLawLastExpense">Parents-in-Law</label>
              <textarea
                id="apply-parentsInLawLastExpense"
                name="parentsInLawLastExpense"
                value={formData.parentsInLawLastExpense}
                onChange={onFormChange}
                rows={2}
                placeholder="Names and details for last expense cover"
              />
            </div>
          </section>

          <section className="apply-form-block">
            <h3 className="apply-form-block-title"><span className="apply-form-block-num">5</span> Sports Equipment (if applicable)</h3>
            <div className="apply-form-row">
              <label htmlFor="apply-sportsEquipmentDescription">Description of Equipment</label>
              <textarea
                id="apply-sportsEquipmentDescription"
                name="sportsEquipmentDescription"
                value={formData.sportsEquipmentDescription}
                onChange={onFormChange}
                rows={3}
                placeholder="e.g. Racing bicycle, tennis racket, running shoes — include make/model where relevant"
              />
            </div>
            <div className="apply-form-row apply-form-row-narrow">
              <label htmlFor="apply-equipmentValue">Declared Value (KES)</label>
              <input
                type="text"
                id="apply-equipmentValue"
                name="equipmentValue"
                value={formData.equipmentValue}
                onChange={onFormChange}
                placeholder="e.g. 50,000"
              />
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
            <button type="submit" className="apply-form-submit">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
