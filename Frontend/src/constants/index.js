/**
 * Centralized constants for TAWC website
 */

export const CONTACT = {
  email: 'theathleteswellnessclub@gmail.com',
  phonePrimary: '+254 745 331 439',
  phoneSecondary: '+254 745 331 439',
  phoneDisplay: '+254 745 331 439',
}

export const PARTNERS = [
  { name: 'Liaison Group', logoFile: 'liaison_icon.png', address: 'Liaison House, State House Avenue', phones: '(254)703 071 000 | (254)730 488 100', email: 'info@liaisongroup.net' },
  { name: 'Momentum Sports Africa', logoFile: 'momentum_icon.png', address: 'Mogotio 3, Mogotio Road, Westlands', phones: '+254745 331 439', email: 'info@msa.co.ke' },
]

export const NAV_LINKS = {
  home: { label: 'Home', href: '/' },
  applyNow: { label: 'Apply Now', href: '/apply-now' },
  insurance: [
    { label: 'Wellness Packages', href: '/product' },
    { label: 'Learn Wellness Deals', href: '/insurance-deals' },
  ],
  main: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'FAQ Section', href: '/faq' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
}

export const FOOTER_LINKS = {
  insurance: NAV_LINKS.insurance,
  main: [
    { label: 'Apply Now', href: '/apply-now' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'FAQ Section', href: '/faq' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
}

export const CORE_PILLARS = [
  'Personal Accident & Last Expense Cover',
  'Comprehensive Healthcare Package',
  'Individual Pension Plan (IPP)',
  'Multi-Family Office Services (Family Trusts & Wealth Structuring)',
]

export const INSURANCE_PACKAGES = [
  {
    id: 'suswa',
    name: 'Suswa',
    tagline: 'Entry-level wellness with essential cover',
    annualSubscription: 37100,
    annualCashBack: 12000,
    monthlyRange: 'KES 37,100 / year',
    bestFor: 'Individuals and first-time members',
    benefits: {
      personalAccident: 100000,
      lastExpense: 100000,
      inpatient: 250000,
      outpatient: 50000,
      maternity: 40000,
      dental: 10000,
      optical: 10000,
      sportingEquipment: 50000,
    },
    features: [
      'Personal Accident Cover: KES 100,000',
      'Last Expense Cover: KES 100,000',
      'Inpatient: KES 250,000',
      'Outpatient: KES 50,000',
      'Annual Cash Back: KES 12,000',
    ],
  },
  {
    id: 'longonot',
    name: 'Longonot',
    tagline: 'Enhanced protection for active lifestyles',
    annualSubscription: 70050,
    annualCashBack: 36000,
    monthlyRange: 'KES 70,050 / year',
    bestFor: 'Competitive athletes and growing families',
    benefits: {
      personalAccident: 200000,
      lastExpense: 150000,
      inpatient: 300000,
      outpatient: 50000,
      maternity: 40000,
      dental: 10000,
      optical: 10000,
      sportingEquipment: 75000,
    },
    features: [
      'Personal Accident Cover: KES 200,000',
      'Last Expense Cover: KES 150,000',
      'Inpatient: KES 300,000',
      'Sporting Equipment: KES 75,000',
      'Annual Cash Back: KES 36,000',
    ],
  },
  {
    id: 'elgon',
    name: 'Elgon',
    tagline: 'Comprehensive cover for serious athletes',
    annualSubscription: 103150,
    annualCashBack: 60000,
    monthlyRange: 'KES 103,150 / year',
    bestFor: 'Professional athletes and high-performance programs',
    benefits: {
      personalAccident: 300000,
      lastExpense: 200000,
      inpatient: 500000,
      outpatient: 75000,
      maternity: 50000,
      dental: 15000,
      optical: 15000,
      sportingEquipment: 100000,
    },
    features: [
      'Personal Accident Cover: KES 300,000',
      'Last Expense Cover: KES 200,000',
      'Inpatient: KES 500,000',
      'Sporting Equipment: KES 100,000',
      'Annual Cash Back: KES 60,000',
    ],
  },
  {
    id: 'kenya',
    name: 'Kenya',
    tagline: 'Premium coverage for elite athletes',
    annualSubscription: 164950,
    annualCashBack: 120000,
    monthlyRange: 'KES 164,950 / year',
    bestFor: 'Elite athletes and teams',
    benefits: {
      personalAccident: 400000,
      lastExpense: 300000,
      inpatient: 500000,
      outpatient: 75000,
      maternity: 50000,
      dental: 15000,
      optical: 15000,
      sportingEquipment: 125000,
    },
    features: [
      'Personal Accident Cover: KES 400,000',
      'Last Expense Cover: KES 300,000',
      'Sporting Equipment: KES 125,000',
      'Maximum inpatient cover',
      'Annual Cash Back: KES 120,000',
    ],
  },
]

/** Liaison card for Apply Now page (matches InsuranceCard shape) */
export const LIAISON_APPLY_CARD = {
  id: 'liaison-family-office',
  name: 'Liaison Multi-Family Office Services',
  tagline: 'Wealth structuring, preservation, and growth',
  monthlyRange: 'Contact for quote',
  bestFor: 'Athletes and families seeking wealth management',
  features: [
    'Trust Incorporation & Investment Advisory',
    'Investment Advisory Services',
  ],
}

/** Package options for the application form (wellness packages + Liaison Family Office) */
export const FORM_PACKAGE_OPTIONS = [
  ...INSURANCE_PACKAGES.map((p) => ({ id: p.id, name: p.name, label: `${p.name} — ${p.monthlyRange}` })),
  { id: 'liaison-family-office', name: 'Liaison Multi-Family Office Services', label: 'Liaison Multi-Family Office Services' },
]

/** Derived from INSURANCE_PACKAGES to keep all insurance cards in sync */
export const INSURANCE_DEAL_CARDS = INSURANCE_PACKAGES.map((pkg) => ({
  title: pkg.name,
  summary: pkg.tagline,
  details: [...pkg.features, `Ideal for ${pkg.bestFor.toLowerCase()}`],
}))

export const COMPARISON_ROWS = [
  { label: 'Personal Accident Cover', suswa: '100,000', longonot: '200,000', elgon: '300,000', kenya: '400,000' },
  { label: 'Last Expense Cover', suswa: '100,000', longonot: '150,000', elgon: '200,000', kenya: '300,000' },
  { label: 'Inpatient', suswa: '250,000', longonot: '300,000', elgon: '500,000', kenya: '500,000' },
  { label: 'Outpatient', suswa: '50,000', longonot: '50,000', elgon: '75,000', kenya: '75,000' },
  { label: 'Maternity', suswa: '40,000', longonot: '40,000', elgon: '50,000', kenya: '50,000' },
  { label: 'Dental', suswa: '10,000', longonot: '10,000', elgon: '15,000', kenya: '15,000' },
  { label: 'Optical', suswa: '10,000', longonot: '10,000', elgon: '15,000', kenya: '15,000' },
  { label: 'Sporting Equipment', suswa: '50,000', longonot: '75,000', elgon: '100,000', kenya: '125,000' },
  { label: 'Annual Subscription', suswa: '37,100', longonot: '70,050', elgon: '103,150', kenya: '164,950', isSubtotal: true },
  { label: 'Annual Cash Back', suswa: '12,000', longonot: '36,000', elgon: '60,000', kenya: '120,000', isCashBack: true },
]

export const LIAISON_FAMILY_OFFICE = {
  title: 'Liaison Multi-Family Office Services',
  intro: "Take your membership beyond wellness into wealth structuring, preservation, and growth with access to Liaison Group's premium Family Office solutions.",
  clientIntro: "As an Athlete Wellness Club member, you can access professional wealth management and family office services. Whether you want to protect assets for your family, structure investments through a trust, or get expert guidance on growing your wealth, Liaison Group provides tailored solutions designed for athletes and their families.",
  services: [
    {
      name: 'Trust Incorporation & Investment Advisory',
      description: 'Set up a formal trust structure to hold and manage your assets. A trust helps protect your wealth, plan for future generations, and ensure your family is taken care of according to your wishes. Our advisors guide you through the setup and ongoing investment strategy.',
      items: [
        'One-off onboarding fee: KES 100,000',
        'Minimum investment: KES 500,000',
      ],
    },
    {
      name: 'Investment Advisory Services',
      description: 'Receive personalised investment advice without setting up a trust. Ideal if you want expert guidance on where and how to invest your savings, with a dedicated advisor helping you build and manage a portfolio aligned with your goals and risk tolerance.',
      items: [
        'One-off onboarding fee: KES 35,000',
        'Minimum investment: KES 500,000',
      ],
    },
  ],
  disclaimer: '*Annual Management Fee is 2.45% of the productive assets',
}

export const AOB_TAGLINE = 'Insurance built for athletes — Start your journey today'

export const SITE_NAME = 'Athlete Wellness Club'

export const ABOUT_PAGE = {
  welcome: 'Welcome to the ATHLETES WELLNESS CLUB, an exclusive membership experience created for sportsmen and women who think beyond the game. In strategic partnership with Momentum Sports Africa, the Club delivers a holistic solution that protects, grows, and sustains your lifestyle long after the final.',
  packages: [
    {
      id: 'suswa',
      name: 'Suswa',
      description: 'Our entry-level wellness package offers essential cover for individuals and first-time members. Suswa provides personal accident and last expense cover, comprehensive inpatient and outpatient healthcare, maternity support, dental and optical benefits, and sporting equipment cover. Perfect for athletes who want dependable protection without the complexity of higher tiers. Enjoy guaranteed annual cash back as part of your membership, making wellness both accessible and rewarding.',
    },
    {
      id: 'longonot',
      name: 'Longonot',
      description: 'Designed for competitive athletes and growing families, Longonot delivers enhanced protection for active lifestyles. Build on your base with higher personal accident and last expense cover, expanded inpatient benefits, and increased sporting equipment coverage. This tier supports athletes who train regularly and compete, while offering the same comprehensive healthcare, maternity, dental, and optical benefits. Ideal for those ready to step up their wellness investment with a stronger safety net.',
    },
    {
      id: 'elgon',
      name: 'Elgon',
      description: 'Comprehensive cover for serious athletes and high-performance programs. Elgon delivers robust personal accident and last expense protection, substantial inpatient and outpatient coverage, and enhanced maternity, dental, and optical benefits. Sporting equipment cover is tailored for athletes who invest heavily in their gear. Perfect for professional athletes and those in demanding training environments who need reliable, comprehensive support both on and off the field.',
    },
    {
      id: 'kenya',
      name: 'Kenya',
      description: 'Our premium tier for elite athletes and teams. Kenya offers maximum personal accident and last expense cover, top-tier inpatient and outpatient benefits, and the highest sporting equipment coverage. Designed for athletes who expect the best, this package delivers comprehensive healthcare, maternity, dental, and optical benefits at the highest levels. The ultimate wellness solution for those who compete at the highest level and want complete peace of mind.',
    },
    {
      id: 'liaison',
      name: 'Liaison Multi-Family Office Services',
      description: 'Take your membership beyond wellness into wealth structuring, preservation, and growth. In partnership with Liaison Wealth, the Club offers access to premium Family Office solutions. Choose from Trust Incorporation & Investment Advisory—setting up a family trust to protect and manage your assets for future generations—or Investment Advisory Services for personalised guidance on building and managing your investment portfolio. Ideal for athletes who want to secure their financial future alongside their physical and health wellness.',
    },
  ],
}

export const CONTACT_PAGE = {
  name: 'Athlete Wellness Club',
  logoFile: 'tawc_logo.png',
  email: 'theathleteswellnessclub@gmail.com',
  phones: '+254 745 331 439',
}

export const SOCIAL_LINKS = {
  instagram: { handle: 'theathleteswellnessclub', url: 'https://instagram.com/theathleteswellnessclub' },
  tiktok: { handle: 'theathleteswellnessclub', url: 'https://tiktok.com/@theathleteswellnessclub' },
}
