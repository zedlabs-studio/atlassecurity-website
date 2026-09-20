export interface VerticalInfo {
  slug: string
  name: string
  tagline: string
  metaTitle: string
  metaDescription: string
  heroDescription: string
  industryChallenges: string[]
  solutionOverview: string
  coreSolutions: {
    title: string
    description: string
    link: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const VERTICAL_DATA: Record<string, VerticalInfo> = {
  'construction-site-security': {
    slug: 'construction-site-security',
    name: 'Construction Site Security',
    tagline: 'Licensed On-Site Guards, Mobile Patrols & Perimeter Protection for NZ Construction Sites',
    metaTitle: 'Construction Site Security Services NZ | Atlas Security NZ',
    metaDescription:
      'Protect your building & civil construction sites from material theft, tool loss, vandalism & trespassing. COA-certified guards & GPS patrols in Auckland, Hamilton & Wellington.',
    heroDescription:
      'Prevent high-value tool theft, plant vandalism, and unauthorized site entry with COA-certified security personnel, perimeter checks, material storage security, and night-time mobile patrols.',
    industryChallenges: [
      'Theft of high-value power tools, copper wiring, uninstalled building materials, and heavy plant equipment',
      'Unauthorized entry, trespassing, and liability risks outside active work hours and during site shutdown periods',
      'Vandalism, arson, and property damage resulting in costly project delays and insurance excesses',
      'Complex site layouts requiring contractor access control, visitor logging, material storage security, and safety inductions',
    ],
    solutionOverview:
      'Construction sites are primary targets for opportunistic theft and vandalism across every development stage — before work starts, during active construction, material storage, after-hours, and final site shutdown. Atlas Security delivers tailored construction site security plans combining stationed static security guards during after-hours shifts, randomized mobile vehicle patrols, perimeter checks, and rapid alarm response to ensure your site remains secure from ground-breaking to handover.',
    coreSolutions: [
      {
        title: 'Construction Site Security Guards',
        description: 'Stationed COA-certified guards managing contractor sign-ins, gate access control, material storage security, and perimeter security throughout evening and weekend shifts.',
        link: '/services/static-guard',
      },
      {
        title: 'GPS-Tracked Construction Site Patrols',
        description: 'Randomized vehicle inspections checking site perimeter security, hoists, storage containers, copper laydown yards, and heavy plant machinery.',
        link: '/services/mobile-patrolling',
      },
      {
        title: '24/7 Alarm Response & Site Surveillance',
        description: 'Immediate mobile patrol dispatch when temporary site alarm sensors or remote CCTV units detect after-hours movement.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'Why is static security guarding essential for construction sites in NZ?',
        answer: 'Construction sites contain exposed, high-value materials and tools. Uniformed static security guards provide an active physical deterrent, stopping theft and material loss before it occurs.',
      },
      {
        question: 'What site details are needed to arrange construction site security?',
        answer: 'When requesting site security, provide boundary dimensions, site perimeter security gate locations, contractor access rules, after-hours delivery schedules, material storage security laydown areas, and sign-in requirements.',
      },
      {
        question: 'What security measures should be taken before work starts and during active construction?',
        answer: 'Before work starts, establish perimeter fencing and gate locks. During active construction, implement contractor access control, secure tool vaults, and schedule after-hours construction security patrols.',
      },
      {
        question: 'Can you provide security for temporary or short-term building projects?',
        answer: 'Yes, we provide flexible security contracts for short-term civil builds, temporary site shutdowns, and multi-year commercial developments.',
      },
      {
        question: 'What regions do you service for construction security?',
        answer: 'We provide construction site security guards and mobile patrols across Auckland, Hamilton, Wellington, and major North Island regional centers.',
      },
    ],
  },
  'retail-security': {
    slug: 'retail-security',
    name: 'Retail Security Services',
    tagline: 'Customer-Focused Static Guards & Loss Prevention Solutions for NZ Retailers',
    metaTitle: 'Retail Security Guards & Loss Prevention NZ | Atlas Security NZ',
    metaDescription:
      'Professional retail security guards & loss prevention services in New Zealand. Protect staff, reduce shoplifting & ensure a safe shopping environment.',
    heroDescription:
      'Protect retail staff, deter shoplifting, manage high-value merchandise, and control customer access with professional, uniformed retail security guards and concierge personnel.',
    industryChallenges: [
      'Increasing shoplifting, stock shrinkage, and aggressive anti-social behavior during trading hours',
      'Risks to staff safety and retail employees during peak trading, opening, and closing hours',
      'Protecting high-value merchandise areas and preventing theft of high-shrink inventory',
      'Managing emergency evacuations, retail access control, incident escalation, and shop security documentation',
    ],
    solutionOverview:
      'Retail security requires a dual focus across opening, trading hours, high-risk periods, and closing: strong visible shop security deterrence to prevent theft, combined with excellent interpersonal skills to maintain a safe, welcoming customer environment. Atlas Security provides trained, COA-certified retail security guards, store security officers, and loss prevention specialists who integrate seamlessly into your store operations.',
    coreSolutions: [
      {
        title: 'On-Site Retail Security Guards',
        description: 'Uniformed store security guards stationed at entrance points to manage retail access control, welcome shoppers, protect staff, and deter retail loss.',
        link: '/services/static-guard',
      },
      {
        title: 'Closing Escorts & After-Hours Retail Security',
        description: 'Mobile patrol officers conducting staff closing escorts, register lock-ups, cash-in-transit support, and after-hours retail security checks.',
        link: '/services/mobile-patrolling',
      },
      {
        title: 'Retail Alarm & Surveillance Integration',
        description: 'Integration with store security intruder alarms and CCTV monitoring for 24/7 remote protection when stores are closed.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'How do retail security guards balance theft deterrence with customer service?',
        answer: 'Our retail security officers are trained in customer engagement and professional etiquette, welcoming shoppers while providing a firm deterrent to shoplifters across high-risk periods.',
      },
      {
        question: 'What details are required when requesting retail loss prevention guarding?',
        answer: 'Specify your store operating hours, opening and closing procedures, high-value merchandise areas, entrance layout, and whether staff closing escorts or register lock-up support are needed.',
      },
      {
        question: 'What procedures cover retail opening, closing, and after-hours security?',
        answer: 'Opening procedures verify site entry safety; closing procedures include register clearing and staff escorts; after-hours security relies on alarm monitoring and patrol checks.',
      },
      {
        question: 'Can you provide short-term security for retail sales events or peak seasons?',
        answer: 'Yes, we provide flexible store security guard deployments for holiday trading periods, Black Friday events, store grand openings, and high-traffic promotional sales across New Zealand.',
      },
      {
        question: 'What compliance licenses do your retail guards hold?',
        answer: 'Every Atlas Security officer holds an active Ministry of Justice Certificate of Approval (COA) under the Private Security Personnel and Private Investigators Act 2010.',
      },
    ],
  },
  'commercial-security': {
    slug: 'commercial-security',
    name: 'Commercial Security Services',
    tagline: 'Corporate Building Security, Concierge, Mobile Patrols & Alarm Response NZ',
    metaTitle: 'Commercial & Corporate Building Security NZ | Atlas Security NZ',
    metaDescription:
      'Comprehensive commercial security services for NZ office towers, industrial parks, warehouses & business precincts. Concierge, static guards & 24/7 patrols.',
    heroDescription:
      'Protect commercial buildings, office towers, multi-tenant properties, corporate lobbies, loading docks, and vacant areas with tailored static guarding, concierge, and mobile patrol units.',
    industryChallenges: [
      'Managing tenant access and visitor access across multi-tenant properties and restricted corporate floors',
      'Securing loading docks, vacant areas, and after-hours access points in commercial properties',
      'Vulnerability of commercial property security, industrial warehouses, and logistics parks during off-hours',
      'Managing building security procedures, keycard tenant access control, and 24/7 alarm escalation for property manager requirements',
    ],
    solutionOverview:
      'Commercial building security requires comprehensive coverage for office buildings, multi-tenant properties, lobbies, loading docks, and vacant areas. Property managers rely on Atlas Security for tailored commercial security programs combining corporate lobby concierge, commercial security guards, after-hours building security lock-up procedures, alarm escalation, and 24/7 alarm monitoring.',
    coreSolutions: [
      {
        title: 'Commercial Security Guards & Concierge',
        description: 'Professional front-of-house concierge and commercial building security guards managing tenant access control, visitor access, and lobby safety.',
        link: '/services/static-guard',
      },
      {
        title: 'After-Hours Building Security & Patrols',
        description: 'Scheduled and randomized patrol sweeps of commercial properties, office buildings, loading docks, vacant areas, and basement car parks.',
        link: '/services/mobile-patrolling',
      },
      {
        title: 'Commercial Building Alarm Systems',
        description: '24/7 central monitoring integration and fast alarm escalation response for commercial property security across NZ.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'What static guard duties do you provide for commercial office buildings?',
        answer: 'Our concierge security guards handle front-desk reception, tenant access control, visitor access badge issuance, loading dock oversight, and lobby surveillance.',
      },
      {
        question: 'What details should property managers prepare for a commercial security proposal?',
        answer: 'Provide building square meterage, tenant count, number of exterior access doors, underground car park setup, loading dock hours, vacant floor details, and lock-up procedures.',
      },
      {
        question: 'How do you secure multi-tenant properties and vacant areas after hours?',
        answer: 'We perform floor-by-floor inspections, secure loading docks, verify tenant access permissions, lock vacant suites, and conduct night-time mobile patrol checks.',
      },
      {
        question: 'Can mobile patrols handle after-hours lock-up procedures for commercial buildings?',
        answer: 'Yes, our mobile patrol officers perform evening lock-up checks, arm master alarm panels, lock exterior doors, inspect loading docks, and verify plant rooms.',
      },
    ],
  },
}
