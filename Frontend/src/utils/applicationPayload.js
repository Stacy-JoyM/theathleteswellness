/**
 * Builds the API payload from form data for wellness membership applications.
 * Maps form fields to the backend API structure.
 */

import { INSURANCE_PACKAGES } from '../constants'
import { computeInstallmentSchedule } from './paymentSchedule'

/** Legacy constant — API now expects package name in productType. */
export const MSA_PRODUCT_TYPE = 'msa'

/** API productType: wellness tier names (not a generic code). */
const PRODUCT_TYPE_BY_PACKAGE_ID = {
  suswa: 'Suswa',
  longonot: 'Longonot',
  elgon: 'Elgon',
  kenya: 'Kenya',
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
  if (digits.startsWith('254')) return digits.slice(0, 12)
  if (digits.startsWith('0')) return ('254' + digits.slice(1)).slice(0, 12)
  if (digits.startsWith('7') && digits.length === 9) return '254' + digits
  if (digits.length >= 9) return ('254' + digits.slice(-9)).slice(0, 12)
  return digits
}

/**
 * Valid Safaricom (M-Pesa) prefixes in Kenya.
 * Excludes Airtel (73x), Telkom (77x), and other non-Safaricom prefixes.
 * @see https://www.journeybytes.com/kenya/safaricom-mobile-number-prefixes/
 */
const SAFARICOM_PREFIXES = new Set([
  '701', '702', '703', '704', '705', '706', '707', '708', '709',
  '710', '711', '712', '713', '714', '715', '716', '717', '718', '719',
  '720', '721', '722', '723', '724', '725', '726', '727', '728', '729',
  '740', '741', '742', '743', '745', '746', '748',
  '757', '758', '759',
  '768', '769',
  '790', '791', '792', '793', '794', '795', '796', '797', '798', '799',
  '110', '111', '112', '113', '114', '115',
])

/**
 * Validates a Kenyan M-Pesa number before sending the prompt.
 * Format: 254 + 9 digits, using a valid Safaricom prefix (M-Pesa is Safaricom only).
 * @param {string} val - Raw phone value (e.g. "254712345678" or "712345678")
 * @returns {{ valid: boolean, message?: string }}
 */
export function validateMpesaNumber(val) {
  const normalized = normalizeMpesaPhone(val)
  if (!normalized || normalized.length < 12) {
    return { valid: false, message: 'Enter a complete M-Pesa number (9 digits after 254, e.g. 712345678).' }
  }
  if (normalized.length > 12) {
    return { valid: false, message: 'Number is too long. Use 9 digits only (e.g. 712345678).' }
  }
  if (!/^254\d{9}$/.test(normalized)) {
    return { valid: false, message: 'Invalid format. Use a Kenyan number (e.g. 712345678).' }
  }
  const prefix = normalized.slice(3, 6)
  if (!SAFARICOM_PREFIXES.has(prefix)) {
    return {
      valid: false,
      message: 'M-Pesa works only with Safaricom numbers. Airtel (073) and Telkom (077) numbers are not supported.',
    }
  }
  return { valid: true }
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

  const lastExpenseEntries = (formData.lastExpenseCover || []).filter((p) => (p.parentName || '').trim())
  const mapEntry = (p) => ({
    name: (p.parentName || '').trim(),
    nationalId: (p.idNumber || '').trim(),
    gender: capitalizeGender(p.gender),
    dob: p.dob || '',
  })
  const parent = lastExpenseEntries.filter((p) => (p.relationship || 'parent') === 'parent').map(mapEntry)
  const parentInLaw = lastExpenseEntries.filter((p) => p.relationship === 'parent-in-law').map(mapEntry)

  const equipment = (formData.sportsEquipment || [])
    .filter((e) => (e.name ?? e.itemName ?? '').trim())
    .map((e) => ({
      name: (e.name ?? e.itemName ?? '').trim(),
      makeName: (e.makeName ?? e.makeModel ?? '').trim(),
      model: (e.model || '').trim(),
      quantity: Math.max(1, parseInt(e.quantity, 10) || 1),
      equipmentValue: parsePrice(e.price),
    }))

  const basePremium = pkg.annualSubscription ?? 0
  const useInstallments = formData.paymentMethod === 'installments'
  const schedule = useInstallments ? computeInstallmentSchedule(basePremium) : null

  const payload = {
    productType: PRODUCT_TYPE_BY_PACKAGE_ID[packageId] || 'Suswa',
    orderNumber: '',
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
    /** Base annual premium (same as package list); instalments flag + fee describe payment plan. */
    premiumAmount: basePremium,
    instalments: useInstallments ? 'yes' : 'no',
    instalmentsPercFee: useInstallments && schedule ? schedule.surchargePercent : 0,
    mpesaNumber: normalizeMpesaPhone(formData.paymentMpesaNumber),
    principal,
    spouse,
    children,
    parent,
    parentInLaw,
    equipment,
  }

  return payload
}
