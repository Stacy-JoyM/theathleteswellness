/**
 * Builds the API payload from form data for wellness membership applications.
 * Maps form fields to the backend API structure.
 */

import { INSURANCE_PACKAGES } from '../constants'

const ORDER_NUMBER_BY_PACKAGE = {
  suswa: '1',
  longonot: '2',
  elgon: '3',
  kenya: '4',
}

function capitalizeGender(val) {
  if (!val) return ''
  const v = String(val).toLowerCase()
  if (v === 'male') return 'Male'
  if (v === 'female') return 'Female'
  return val
}

function normalizeMpesaPhone(val) {
  if (!val) return ''
  const digits = String(val).replace(/\D/g, '')
  if (digits.startsWith('254')) return digits
  if (digits.startsWith('0')) return '254' + digits.slice(1)
  if (digits.startsWith('7') && digits.length === 9) return '254' + digits
  return digits || val
}

function parsePrice(val) {
  if (val == null || val === '') return 0
  const num = parseFloat(String(val).replace(/,/g, ''))
  return isNaN(num) ? 0 : num
}

/**
 * @param {Object} formData - Form state from ApplyForm
 * @returns {Object|null} API payload or null if package is not a wellness package
 */
export function buildApplicationPayload(formData) {
  const packageId = formData.selectedPlanId
  const pkg = INSURANCE_PACKAGES.find((p) => p.id === packageId)

  if (!pkg || !pkg.benefits) {
    return null
  }

  const benefits = pkg.benefits
  const joiningDate = new Date().toISOString().slice(0, 10)

  const principal = [
    {
      name: (formData.name || '').trim(),
      dob: formData.dob || '',
      nationalId: (formData.idNumber || '').trim(),
      kraPinNo: (formData.kraPin || '').trim(),
      phoneNumber: normalizeMpesaPhone(formData.principalPhone),
      emailAddress: (formData.principalEmail || '').trim(),
      gender: capitalizeGender(formData.gender),
    },
  ]

  const spouseName = (formData.spouseFullName ?? [formData.spouseFirstName, formData.spouseLastName].filter(Boolean).join(' ')).trim()
  const spouse = spouseName
    ? [
        {
          name: spouseName,
          dob: formData.spouseDob || '',
          gender: capitalizeGender(formData.spouseGender),
        },
      ]
    : []

  const children = (formData.dependants || [])
    .filter((d) => (d.fullName ?? [d.firstName, d.lastName].filter(Boolean).join(' ')).trim())
    .map((d) => ({
      name: (d.fullName ?? [d.firstName, d.lastName].filter(Boolean).join(' ')).trim(),
      birthCertNo: (d.birthCertificateNumber || '').trim(),
      gender: capitalizeGender(d.gender),
      dob: d.dob || '',
    }))

  const parent = (formData.lastExpenseCover || [])
    .filter((p) => (p.parentName || '').trim())
    .map((p) => ({
      name: (p.parentName || '').trim(),
      nationalId: (p.idNumber || '').trim(),
      gender: capitalizeGender(p.gender),
      dob: p.dob || '',
    }))

  const parentInLaw = []

  const equipment = (formData.sportsEquipment || [])
    .filter((e) => (e.name ?? e.itemName ?? '').trim())
    .map((e) => ({
      name: (e.name ?? e.itemName ?? '').trim(),
      makeName: (e.makeName ?? e.makeModel ?? '').trim(),
      model: (e.model || '').trim(),
      quantity: Math.max(1, parseInt(e.quantity, 10) || 1),
      equipmentValue: parsePrice(e.price),
    }))

  return {
    productType: 'msa',
    orderNumber: ORDER_NUMBER_BY_PACKAGE[packageId] || '1',
    joiningDate,
    policyDuration: '12',
    personalAccidentAmount: benefits.personalAccident ?? 0,
    lastExpenseAmount: benefits.lastExpense ?? 0,
    inpatientAmount: benefits.inpatient ?? 0,
    outpatientAmount: benefits.outpatient ?? 0,
    maternityAmount: benefits.maternity ?? 0,
    dentalAmount: benefits.dental ?? 0,
    opticalAmount: benefits.optical ?? 0,
    annualCashBack: pkg.annualCashBack ?? 0,
    sportingEquipment: benefits.sportingEquipment ?? 0,
    premiumAmount: pkg.annualSubscription ?? 0,
    mpesaNumber: normalizeMpesaPhone(formData.paymentMpesaNumber),
    principal,
    spouse,
    children,
    parent,
    parentInLaw,
    equipment,
  }
}
