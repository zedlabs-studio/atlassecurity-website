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
      'Prevent high-value tool theft, plant vandalism, and unauthorized site entry with COA-certified security personnel, perimeter checks, and night-time mobile patrols.',
    industryChallenges: [
      'Theft of high-value tools, copper wiring, building materials, and heavy plant equipment',
      'Unauthorized entry, trespassing, and liability risks outside active work hours',
      'Vandalism, arson, and property damage resulting in costly project delays',
      'Complex site layouts requiring rigorous visitor logging, contractor access, and safety inductions',
    ],
    solutionOverview:
      'Construction sites are primary targets for opportunistic theft and vandalism. Atlas Security delivers tailored construction site security plans combining stationed static guards during after-hours shifts, randomized mobile vehicle patrols, and rapid alarm response to ensure your site remains secure from ground-breaking to handover.',
    coreSolutions: [
      {
        title: 'Static Security Guarding',
        description: 'Stationed COA-certified guards managing contractor sign-ins, gate access, and perimeter security throughout evening and weekend shifts.',
        link: '/services/static-guard',
      },
      {
        title: 'GPS-Tracked Mobile Patrols',
        description: 'Randomized vehicle inspections checking perimeter fencing, site hoists, storage containers, and plant machinery.',
        link: '/services/mobile-patrolling',
      },
      {
        title: '24/7 Alarm Response & Surveillance',
        description: 'Immediate mobile patrol dispatch when temporary site alarm sensors or remote CCTV units detect movement.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'Why is static security guarding essential for construction sites in NZ?',
        answer: 'Construction sites contain exposed, high-value materials and tools. Uniformed static guards provide an active physical deterrent, stopping theft before it occurs.',
      },
      {
        question: 'What site details are needed to arrange construction security?',
        answer: 'When requesting site security, provide boundary dimensions, key perimeter gate locations, after-hours delivery schedules, high-value material laydown areas, and contractor sign-in requirements.',
      },
      {
        question: 'Can you provide security for temporary or short-term building projects?',
        answer: 'Yes, we provide flexible security contracts for short-term civil builds, temporary site setups, and multi-year commercial developments.',
      },
      {
        question: 'What regions do you service for construction security?',
        answer: 'We provide construction security guards and mobile patrols across Auckland, Hamilton, Wellington, and major North Island regional centers.',
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
      'Protect retail staff, deter shoplifting, and manage customer access with professional, uniformed security guards and concierge personnel.',
    industryChallenges: [
      'Increasing shoplifting, stock shrinkage, and aggressive anti-social behavior in retail spaces',
      'Risks to staff safety and retail employees during peak trading and closing hours',
      'Balancing strong physical deterrence with a welcoming, customer-friendly environment',
      'Managing emergency evacuations, crowd control, and incident documentation',
    ],
    solutionOverview:
      'Retail security requires a dual focus: strong visible deterrence to prevent theft, combined with excellent interpersonal skills to maintain a safe, welcoming shopping atmosphere. Atlas Security provides trained, COA-certified retail security guards and loss prevention officers who integrate seamlessly into your store operations.',
    coreSolutions: [
      {
        title: 'On-Site Retail Security Guards',
        description: 'Uniformed guards stationed at entrance points to deter loss, welcome shoppers, and reassure store staff.',
        link: '/services/static-guard',
      },
      {
        title: 'Closing Escorts & Lock-Ups',
        description: 'Mobile patrol officers conducting staff closing escorts, cash-in-transit support, and nightly store lock-ups.',
        link: '/services/mobile-patrolling',
      },
      {
        title: 'Retail Alarm & Surveillance',
        description: 'Integration with store intruder alarms and CCTV monitoring for 24/7 remote protection when stores are closed.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'How do retail security guards balance deterrence with customer service?',
        answer: 'Our retail security officers are trained in customer engagement, de-escalation techniques, and professional etiquette, serving as both a deterrent to shoplifters and a welcoming presence for genuine shoppers.',
      },
      {
        question: 'Do your guards assist with staff safety during closing hours?',
        answer: 'Yes, our guards provide closing staff escorts to vehicles and conduct thorough end-of-day register and store lock-up inspections.',
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
      'Protect corporate offices, commercial towers, warehouses, and industrial parks with tailored static guarding, concierge, and mobile patrol units.',
    industryChallenges: [
      'Unauthorised access to multi-tenant commercial office towers and restricted corporate floors',
      'Vulnerability of industrial warehouses, logistics parks, and distribution yards during off-hours',
      'Managing visitor sign-ins, contractor passes, and keycard access control',
      'Maintaining 24/7 emergency readiness for fire alarms, break-ins, and property damage',
    ],
    solutionOverview:
      'Commercial properties face diverse risks ranging from unauthorized entry in office lobbies to large-scale theft at industrial distribution centers. Atlas Security designs commercial security programs combining corporate front-desk concierge, static guarding, night-time mobile patrols, and 24/7 alarm monitoring.',
    coreSolutions: [
      {
        title: 'Commercial Static Guards & Concierge',
        description: 'Professional front-of-house concierge and security guards managing tenant access, visitor passes, and building safety.',
        link: '/services/static-guard',
      },
      {
        title: 'Industrial Mobile Patrols',
        description: 'Scheduled and randomized patrol sweeps of warehouse perimeters, loading docks, and commercial car parks.',
        link: '/services/mobile-patrolling',
      },
      {
        title: 'Commercial Alarm Systems',
        description: '24/7 central monitoring integration and fast dispatch guard response for commercial alarms across NZ.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'What types of commercial properties does Atlas Security protect?',
        answer: 'We protect commercial office towers, business parks, manufacturing plants, logistics warehouses, and corporate facilities across Auckland, Hamilton, Wellington, and major regional centers.',
      },
      {
        question: 'Can static guards manage building access control systems?',
        answer: 'Yes, our officers are experienced in operating electronic access control, visitor badge issuance, contractor sign-ins, and key management systems.',
      },
    ],
  },
}
