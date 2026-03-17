/**
 * Centralized constants for TAWC website
 */

export const CONTACT = {
  email: 'info@tawc.co.ke',
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
    { label: 'FAQ Section', href: '/faq' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
}

export const WHO_ARE_WE = {
  title: 'Who We Are',
  tagline: 'Two leaders. One mission. Your wellness.',
  intro: 'The Athletes Wellness Club is a strategic partnership built to serve athletes at every stage of their journey.',
  partners: [
    {
      name: 'Momentum Sports Africa',
      role: 'Sporting Company',
      description: 'A leading sporting company dedicated to supporting athletes across the region. Momentum Sports Africa understands the unique challenges athletes face—from training and competition to career transitions. We connect athletes with opportunities, resources, and a community that champions their success both on and off the field.',
      logoFile: 'momentum_icon.png',
      highlights: ['Athlete-focused', 'Regional reach', 'Community & opportunity'],
    },
    {
      name: 'Liaison Group',
      role: 'Insurance & Wellness Provider',
      description: 'Liaison Group provides the insurance and wellness solutions that power our membership packages. With expertise in risk management, health cover, and financial wellness, Liaison ensures athletes have access to comprehensive protection—personal accident, healthcare, family office services—all tailored to the demands of an active lifestyle.',
      logoFile: 'liaison_icon.png',
      highlights: ['Insurance expertise', 'Wellness solutions', 'Family office services'],
    },
  ],
  partnership: {
    title: 'A Partnership for Athletes',
    description: 'Together, this partnership is designed to serve the best interests of athletes—delivering comprehensive health cover, financial wellness, and peace of mind so you can focus on what matters most: your performance and your future.',
    benefits: [
      'Health cover that grows with you',
      'Financial wellness beyond the game',
      'Peace of mind for you and your family',
    ],
  },
}

export const FOOTER_LINKS = {
  insurance: NAV_LINKS.insurance,
  main: [
    { label: 'Apply Now', href: '/apply-now' },
    { label: 'Who We Are', href: '/who-are-we' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms and Conditions', href: '/terms-and-conditions' },
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
      'Maternity: KES 40,000',
      'Dental: KES 10,000',
      'Optical: KES 10,000',
      'Sporting Equipment: KES 50,000',
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
      'Outpatient: KES 50,000',
      'Maternity: KES 40,000',
      'Dental: KES 10,000',
      'Optical: KES 10,000',
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
      'Outpatient: KES 75,000',
      'Maternity: KES 50,000',
      'Dental: KES 15,000',
      'Optical: KES 15,000',
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
      'Inpatient: KES 500,000',
      'Outpatient: KES 75,000',
      'Maternity: KES 50,000',
      'Dental: KES 15,000',
      'Optical: KES 15,000',
      'Sporting Equipment: KES 125,000',
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
  details: pkg.features,
}))

export const COMPARISON_ROWS = [
  { label: 'Personal Accident', suswa: 'KES 100,000', longonot: 'KES 200,000', elgon: 'KES 300,000', kenya: 'KES 400,000' },
  { label: 'Last Expense', suswa: 'KES 100,000', longonot: 'KES 150,000', elgon: 'KES 200,000', kenya: 'KES 300,000' },
  { label: 'Inpatient Cover', suswa: 'KES 250,000', longonot: 'KES 300,000', elgon: 'KES 500,000', kenya: 'KES 500,000' },
  { label: 'Outpatient', suswa: 'KES 50,000', longonot: 'KES 50,000', elgon: 'KES 75,000', kenya: 'KES 75,000' },
  { label: 'Maternity', suswa: 'KES 40,000', longonot: 'KES 40,000', elgon: 'KES 50,000', kenya: 'KES 50,000' },
  { label: 'Dental', suswa: 'KES 10,000', longonot: 'KES 10,000', elgon: 'KES 15,000', kenya: 'KES 15,000' },
  { label: 'Optical', suswa: 'KES 10,000', longonot: 'KES 10,000', elgon: 'KES 15,000', kenya: 'KES 15,000' },
  { label: 'Sporting Equipment', suswa: 'KES 50,000', longonot: 'KES 75,000', elgon: 'KES 100,000', kenya: 'KES 125,000' },
  { label: 'Annual Subscription', suswa: 'KES 37,100', longonot: 'KES 70,050', elgon: 'KES 103,150', kenya: 'KES 164,950', isSubtotal: true },
  { label: 'Annual Cash Back', suswa: 'KES 12,000', longonot: 'KES 36,000', elgon: 'KES 60,000', kenya: 'KES 120,000', isCashBack: true },
]

export const LIAISON_FAMILY_OFFICE = {
  title: 'Liaison Multi-Family Office Services',
  intro: "Take your membership beyond wellness into wealth structuring, preservation, and growth with access to Liaison Group's premium Family Office solutions.",
  clientIntro: "As an Athlete Wellness Club member, you can access professional wealth management and family office services. Whether you want to protect assets for your family, structure investments through a trust, or get expert guidance on growing your wealth, Liaison Group provides tailored solutions designed for athletes and their families.",
  services: [
    {
      name: 'Trust Incorporation & Investment Advisory',
      description: 'Set up a Family Trust to invest your wealth and protect your assets. A Trust helps you manage your assets to cater for your family\'s and future generations\' needs as you wish. Our private wealth advisors guide you through the on-boarding process and investment strategy.',
      items: [
        'One-off on-boarding fees: KES 100,000',
        'Minimum investment fund: KES 500,000',
        'Annual management fees: 2.45%/p.a.',
      ],
    },
    {
      name: 'Investment Advisory Services',
      description: 'Receive personalized investment advice without setting up a Trust. Our investment analysts shall give you expert guidance on portfolio allocations that align with your risk tolerance profile and investment objectives.',
      items: [
        'One-off on-boarding fees: KES 100,000',
        'Minimum investment fund: KES 500,000',
        'Annual management fees: 2.45%/p.a.',
      ],
    },
  ],
  disclaimer: '*Annual Management Fee is 2.45% of the productive assets',
}

/** Liaison Pension section for application form */
export const LIAISON_PENSION = {
  title: 'Liaison Pension',
  highlight: '4% guaranteed annual return',
  details: [
    'Individual Pension Plan (IPP) with tax-efficient savings for your retirement.',
    'Access to Trust Incorporation & Investment Advisory for wealth structuring.',
    'Minimum investment fund: KES 500,000. Annual management fees: 2.45%/p.a.',
    'Professional wealth management and family office services tailored for athletes.',
  ],
  checkboxLabel: 'Add me on the contact list for this investment/saving wellness plan',
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
  email: 'info@tawc.co.ke',
  phones: '+254 745 331 439',
}

export const SOCIAL_LINKS = {
  instagram: { handle: 'theathleteswellnessclub', url: 'https://instagram.com/theathleteswellnessclub' },
  tiktok: { handle: 'theathleteswellnessclub', url: 'https://tiktok.com/@theathleteswellnessclub' },
}
