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
  applyNow: { label: 'Join the Club', href: '/apply-now' },
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
      role: 'Sports marketing organisation',
      description: 'A leading sports marketing organisation. Momentum Sports Africa understands the unique challenges athletes face, from training and competition to career transitions. We connect athletes with opportunities, resources, and a community that champions their success both on and off the field.',
      logoFile: 'momentum_icon.png',
      highlights: ['Athlete focused', 'Regional reach', 'Community & opportunity'],
    },
    {
      name: 'Liaison Group',
      role: 'Insurance & Wellness Provider',
      description: 'Liaison Group provides the insurance and wellness solutions that power our membership packages. With expertise in risk management, health cover, and financial wellness, Liaison ensures athletes have access to comprehensive protection, including personal accident, healthcare, and family office services, all tailored to the demands of an active lifestyle.',
      logoFile: 'liaison_icon.png',
      highlights: ['Insurance expertise', 'Wellness solutions', 'Family office services'],
    },
  ],
  partnership: {
    title: 'A Partnership for Athletes',
    description: 'Together, this partnership is designed to serve the best interests of athletes, delivering comprehensive health cover, financial wellness, and peace of mind so you can focus on what matters most: your performance and your future.',
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
    { label: 'Join the Club', href: '/apply-now' },
    { label: 'Who We Are', href: '/who-are-we' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms and Conditions', href: '/terms-and-conditions' },
    { label: 'FAQ Section', href: '/faq' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
}

export const CORE_PILLARS = [
  'Comprehensive Healthcare Package (medical, last expense & personal accident)',
  'Sporting equipment cover',
  'Individual Pension Plan (IPP)',
  'Build your wealth (Family Trusts & Wealth Structuring)',
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
      'Inpatient: KES 250,000',
      'Outpatient: KES 50,000',
      'Maternity: KES 40,000',
      'Dental: KES 10,000',
      'Optical: KES 10,000',
      'Last Expense Cover: KES 100,000',
      'Personal Accident Cover: KES 100,000',
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
      'Inpatient: KES 300,000',
      'Outpatient: KES 50,000',
      'Maternity: KES 40,000',
      'Dental: KES 10,000',
      'Optical: KES 10,000',
      'Last Expense Cover: KES 150,000',
      'Personal Accident Cover: KES 200,000',
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
      'Inpatient: KES 500,000',
      'Outpatient: KES 75,000',
      'Maternity: KES 50,000',
      'Dental: KES 15,000',
      'Optical: KES 15,000',
      'Last Expense Cover: KES 200,000',
      'Personal Accident Cover: KES 300,000',
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
      'Inpatient: KES 500,000',
      'Outpatient: KES 75,000',
      'Maternity: KES 50,000',
      'Dental: KES 15,000',
      'Optical: KES 15,000',
      'Last Expense Cover: KES 300,000',
      'Personal Accident Cover: KES 400,000',
      'Sporting Equipment: KES 125,000',
      'Annual Cash Back: KES 120,000',
    ],
  },
]

/** Liaison card for Apply Now page (matches InsuranceCard shape) */
export const LIAISON_APPLY_CARD = {
  id: 'liaison-family-office',
  name: 'Build your wealth',
  tagline: 'Wealth structuring, preservation, and growth',
  monthlyRange: 'Contact for quote',
  bestFor: 'Athletes and families seeking wealth management',
  features: [
    'Trust Incorporation & Investment Advisory',
    'Investment Advisory Services',
  ],
}

/** Package options for the application form (wellness packages + Build your wealth) */
export const FORM_PACKAGE_OPTIONS = [
  ...INSURANCE_PACKAGES.map((p) => ({ id: p.id, name: p.name, label: `${p.name} — ${p.monthlyRange}` })),
  { id: 'liaison-family-office', name: 'Build your wealth', label: 'Build your wealth' },
]

export const COMPARISON_ROWS = [
  { label: 'Annual Subscription', suswa: 'KES 37,100', longonot: 'KES 70,050', elgon: 'KES 103,150', kenya: 'KES 164,950', isSubtotal: true },
  { label: 'Inpatient Cover', suswa: 'KES 250,000', longonot: 'KES 300,000', elgon: 'KES 500,000', kenya: 'KES 500,000' },
  { label: 'Outpatient', suswa: 'KES 50,000', longonot: 'KES 50,000', elgon: 'KES 75,000', kenya: 'KES 75,000' },
  { label: 'Maternity', suswa: 'KES 40,000', longonot: 'KES 40,000', elgon: 'KES 50,000', kenya: 'KES 50,000' },
  { label: 'Dental', suswa: 'KES 10,000', longonot: 'KES 10,000', elgon: 'KES 15,000', kenya: 'KES 15,000' },
  { label: 'Optical', suswa: 'KES 10,000', longonot: 'KES 10,000', elgon: 'KES 15,000', kenya: 'KES 15,000' },
  { label: 'Last Expense', suswa: 'KES 100,000', longonot: 'KES 150,000', elgon: 'KES 200,000', kenya: 'KES 300,000' },
  { label: 'Personal Accident', suswa: 'KES 100,000', longonot: 'KES 200,000', elgon: 'KES 300,000', kenya: 'KES 400,000' },
  { label: 'Sporting Equipment', suswa: 'KES 50,000', longonot: 'KES 75,000', elgon: 'KES 100,000', kenya: 'KES 125,000' },
  { label: 'Annual Cash Back', suswa: 'KES 12,000', longonot: 'KES 36,000', elgon: 'KES 60,000', kenya: 'KES 120,000', isCashBack: true },
]

export const LIAISON_FAMILY_OFFICE = {
  title: 'Build your wealth',
  intro: "Take your membership beyond wellness into wealth structuring, preservation, and growth with access to Liaison Group's premium Family Office solutions.",
  clientIntro: "As an Athlete Wellness Club member, you access professional wealth advisory services. Whether you want to protect assets for your family, structure investments through a trust, or get expert guidance on growing your wealth, The Athlete Wellness Club (TAWC) provides tailored solutions designed for athletes and their families. You are at the right place.",
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

export const AOB_TAGLINE = 'Holistic support for your game, your body, and your future.'

export const SITE_NAME = 'Athlete Wellness Club'

/** Wellness package comparison & breakdown (Product page) */
export const WELLNESS_PACKAGES_PATH = '/product'

/** Learn Wellness Deals — how packages work, comparison table, and related info */
export const LEARN_WELLNESS_DEALS_PATH = '/insurance-deals'

/** Shown on Learn Wellness Deals above package cards — how during play, post play, and wealth fit together */
export const INSURANCE_DEALS_WELLNESS_OVERVIEW = [
  {
    title: 'While you compete — cover in motion',
    body: 'During play is everything that backs you while you train and compete: health cover (inpatient, outpatient, maternity, dental, optical, last expense, personal accident) and sporting equipment insurance. Each tier turns those dials up; the story is the same—stay on the field, not sidelined by bills or broken gear.',
  },
  {
    title: 'What comes back — one cashback rhythm',
    body: 'Post play is the same annual cashback benefit on every Suswa–Kenya package: once each membership year in good standing, a fixed amount is credited to you. Only the figure changes with the tier you choose. It runs next to your claims; withdraw when it is due or let balances build. Think of it as one club-wide pulse—your package sets the size of the beat.',
  },
  {
    title: 'What you build — wealth on top',
    body: 'Wealth management is the third beat: optional Build your wealth through Liaison Wealth so money from sport—and cashback you keep or reinvest—can be structured, invested, and protected for what comes after the whistle.',
  },
]

export const ABOUT_PAGE = {
  welcome: 'Welcome to the ATHLETES WELLNESS CLUB, an exclusive membership experience created for sportsmen and women who think beyond the game. In strategic partnership with Momentum Sports Africa, the Club delivers a holistic solution that protects, grows, and sustains your lifestyle long after the final.',
  packages: [
    {
      id: 'suswa',
      name: 'Suswa',
      intro: 'Suswa is designed for entry level athletes.',
      withinPlay: {
        beforeLink:
          'This wellness package contains health cover (inpatient, outpatient, maternity, dental, optical, last expense, personal accident) and sporting equipment cover for when you compete, at Suswa entry limits—',
        showPackageBreakdownLink: true,
        afterLink: ' for amounts.',
      },
      postPlay:
        'KES 12,000 cashback each membership year in good standing; withdraw when it is due or let it build. Step up a tier when you need bigger limits. Optional Liaison Wealth for trusts and money advice.',
    },
    {
      id: 'longonot',
      name: 'Longonot',
      intro: 'Longonot is designed for athletes who are stepping up training and competition.',
      withinPlay: {
        beforeLink:
          'This wellness package contains health cover (inpatient, outpatient, maternity, dental, optical, last expense, personal accident) and sporting equipment cover for when you compete, at a middle level—',
        showPackageBreakdownLink: true,
        afterLink: '.',
      },
      postPlay:
        'KES 36,000 cashback every year in good standing; take it or let it build. Add Liaison Wealth when you want your money working past this season.',
    },
    {
      id: 'elgon',
      name: 'Elgon',
      intro: 'Elgon is designed for high-performance athletes.',
      withinPlay: {
        beforeLink:
          'This wellness package contains health cover (inpatient, outpatient, maternity, dental, optical, last expense, personal accident) and sporting equipment cover for when you compete, at limits suited to serious training and valuable equipment—',
        showPackageBreakdownLink: true,
        afterLink: '.',
      },
      postPlay:
        'KES 60,000 cashback yearly in good standing; cash out or grow the balance. Liaison Wealth when you are ready for trusts and investments beyond the field.',
    },
    {
      id: 'kenya',
      name: 'Kenya',
      intro: 'Kenya is designed for elite athletes and teams who want maximum cover.',
      withinPlay: {
        beforeLink:
          'This wellness package contains health cover (inpatient, outpatient, maternity, dental, optical, last expense, personal accident) and sporting equipment cover for when you compete, at our top limits—',
        showPackageBreakdownLink: true,
        afterLink: '.',
      },
      postPlay:
        'KES 120,000 cashback each year in good standing on top of that protection—take it or save it. Add Liaison Wealth for trusts and investing at your level.',
    },
    {
      id: 'liaison',
      name: 'Build your wealth',
      intro:
        'Build your wealth helps you grow and structure what you earn through Liaison Wealth—it is not a substitute for wellness insurance.',
      withinPlay: {
        beforeLink:
          'This product does not include that cover. For when you compete you still need Suswa, Longonot, Elgon, or Kenya—those wellness packages contain health (inpatient, outpatient, maternity, dental, optical, last expense, personal accident) and sporting equipment cover. Build your wealth does not replace those benefits.',
        showPackageBreakdownLink: false,
        afterLink: '',
      },
      postPlay:
        'If you hold a wellness package, your cashback stays on that package—the amount follows the tier—withdraw or build. We help you turn income and saved cashback into trusts, capital, and a plan that lasts.',
    },
  ],
}

/** Plain-text within-play line (link phrase substituted for previews). */
export function withinPlayPlainText(withinPlay) {
  if (!withinPlay) return ''
  const mid = withinPlay.showPackageBreakdownLink ? 'see package breakdown' : ''
  return `${withinPlay.beforeLink}${mid}${withinPlay.afterLink}`
}

/** Plain-text summary for cards or previews (matches homepage story order). */
export function wellnessPackagePlainSummary(pkg) {
  if (!pkg?.intro) return ''
  return `${pkg.intro} Within play: ${withinPlayPlainText(pkg.withinPlay)} Post play: ${pkg.postPlay}`
}

/** Insurance Deals "Available Deals" cards — descriptions match homepage (ABOUT_PAGE.packages) */
export const INSURANCE_DEAL_CARDS = INSURANCE_PACKAGES.map((pkg) => {
  const about = ABOUT_PAGE.packages.find((p) => p.id === pkg.id)
  return {
    title: pkg.name,
    summary: about ? wellnessPackagePlainSummary(about) : pkg.tagline,
    details: pkg.features,
  }
})

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

export const FAQ_ITEMS = [
  {
    question: 'Why do athletes need a wellness package?',
    answer: 'Athletes place great demand on their bodies. A wellness package helps facilitate treatment, recovery, protection, and long-term wellbeing so they can stay focused on performance.',
  },
  {
    question: 'How is The Athletes Wellness Club different from ordinary medical cover?',
    answer: 'The Athletes Wellness Club goes beyond medical care alone. It combines medical care (including last expense and personal accident), sporting equipment cover, pension planning, and wealth preservation in one membership.',
  },
  {
    question: 'Who can join The Athletes Wellness Club?',
    answer: 'The Club is open to all athletes; from students and rising talents to professionals and retired athletes.',
  },
  {
    question: 'Do I need to belong to a club or federation?',
    answer: 'No. Any athlete can join, whether attached to a club or competing independently.',
  },
  {
    question: 'Does the package support injuries during training and competition?',
    answer: 'Yes. Members receive support for accidental injuries that happen during training, competition, and active sports participation.',
  },
  {
    question: 'Does it include rehabilitation and physiotherapy?',
    answer: 'Yes. Recovery support such as physiotherapy may be accessed where medically required within package limits.',
  },
  {
    question: 'Are scans such as MRI and X-rays included?',
    answer: 'Yes. Diagnostic tests prescribed by a doctor are included within the limits of the selected package.',
  },
  {
    question: 'If surgery is needed after an injury, is it supported?',
    answer: 'Yes. Medically necessary surgery is included within inpatient care limits.',
  },
  {
    question: 'Does the package support mental wellness?',
    answer: 'Yes. Athlete wellbeing includes emotional and mental wellness, which forms part of the overall care approach.',
  },
  {
    question: 'Can someone else pay for a membership?',
    answer: 'Yes. Sponsors, clubs, employers, parents, or family members can support an athlete\'s membership.',
  },
  {
    question: 'Can payment be made in installments?',
    answer: 'Yes. Membership can be paid in installments, subject to agreed terms. Installment payments attract interest.',
  },
  {
    question: 'Is sporting equipment protected?',
    answer: 'Yes. Sporting equipment is covered up to the limits under the selected membership package.',
  },
  {
    question: 'Are there benefits after retirement from sport?',
    answer: 'Yes. The Club supports life after sport through pension planning, wealth preservation, and family financial protection.',
  },
  {
    question: 'Can a package be chosen based on need?',
    answer: 'Yes. Members can choose from different package levels depending on their needs and goals.',
  },
  {
    question: 'What does the membership focus on most?',
    answer: 'The focus is total athlete wellness; protecting health today while building financial confidence for tomorrow.',
  },
  {
    question: 'Are there any exclusions I should know about?',
    answer: `COVER EXCLUSIONS INCLUDE:

1. Cosmetic surgery unless caused by accident
2. Weight management treatments and drugs
3. Participation in hazardous sports (e.g. bungee jumping, paragliding)
4. Infertility related treatment
5. Treatment other than by registered medical practitioner
6. Self-referred or self-prescribed treatment
7. Self-prescribed scaling, crowns, bridges, orthodontics, and dentures
8. Nutritional supplements unless prescribed as part of medical treatment
9. Alternative treatment (acupuncturist, herbalist)
10. Intentional self-injury, attempted suicide
11. War and kindred risks (whether war be declared or not)
12. Participation in riot, strike and civil commotion
13. Naval, military or air force operations
14. Beauty treatment in nature cures clinics or health hydros
15. Diagnostic equipment (e.g. glucometers, BP machines etc.) and hearing aids
16. Experimental treatment`,
  },
  {
    question: 'How quickly does membership become active?',
    answer: 'Membership becomes active immediately after registration is completed and payment terms are confirmed.',
  },
  {
    question: 'What happens in case of an emergency during travel or competition?',
    answer: 'Members can access treatment according to their package benefits on a reimbursement basis.',
  },
  {
    question: 'Can teams or sports academies enroll as a group?',
    answer: 'Yes. Teams, academies, and sports organizations can arrange group membership for their athletes.',
  },
  {
    question: 'Who is covered under the memberships?',
    answer: 'The memberships cover adults aged 18 to 70 years. Children can be covered from birth (term baby of 37 weeks) up to 25 years, provided they are dependents living with their parents and enrolled full-time in a recognized post-secondary institution.',
  },
  {
    question: 'Are family members included under Last Expense support?',
    answer: 'Yes. Last Expense extends to: up to 4 children, 2 parents, and 2 parents-in-law, subject to the applicable benefit limits under the selected package.',
  },
]
