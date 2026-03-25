/** Surcharge applied when paying in installments (5% on top of base premium). */
export const INSTALLMENT_SURCHARGE_RATE = 0.05

/**
 * @param {number} basePremiumKes - Annual subscription (full-pay amount)
 * @returns {{
 *   basePremium: number,
 *   installmentTotal: number,
 *   month1: number,
 *   month2: number,
 *   month3: number,
 *   surchargePercent: number
 * }}
 */
export function computeInstallmentSchedule(basePremiumKes) {
  const base = Math.max(0, Math.round(Number(basePremiumKes) || 0))
  const installmentTotal = Math.round(base * (1 + INSTALLMENT_SURCHARGE_RATE))
  const month1 = Math.round(installmentTotal * 0.5)
  const month2 = Math.round(installmentTotal * 0.25)
  const month3 = installmentTotal - month1 - month2
  return {
    basePremium: base,
    installmentTotal,
    month1,
    month2,
    month3,
    surchargePercent: Math.round(INSTALLMENT_SURCHARGE_RATE * 100),
  }
}

export function formatKes(amount) {
  return new Intl.NumberFormat('en-KE', { maximumFractionDigits: 0 }).format(amount)
}
