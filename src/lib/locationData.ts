export interface LocationInfo {
  slug: string
  name: string
  region: string
  tagline: string
  metaTitle: string
  metaDescription: string
  heroDescription: string
  overview: string
  keySuburbs: string[]
  servicesProvided: {
    title: string
    description: string
    link: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const LOCATION_DATA: Record<string, LocationInfo> = {
  auckland: {
    slug: 'auckland',
    name: 'Auckland',
    region: 'Greater Auckland Region',
    tagline: 'Professional Static Guard, Mobile Patrols & 24/7 Alarm Monitoring in Auckland',
    metaTitle: 'Security Company Auckland | Guards & Mobile Patrols | Atlas Security',
    metaDescription:
      'Licensed security company in Auckland. COA security guards, mobile patrols & 24/7 alarm monitoring across Auckland CBD, North Shore, South Auckland & West Auckland.',
    heroDescription:
      'Protecting Auckland commercial buildings, retail centres, industrial sites, and construction zones with COA-certified security personnel.',
    overview:
      'As New Zealand’s largest metropolitan region, Auckland demands proactive, highly responsive security. Atlas Security provides dedicated static guarding, scheduled mobile vehicle patrols, and rapid alarm response throughout Auckland CBD, Manukau, Takapuna, Henderson, and surrounding business hubs.',
    keySuburbs: ['Auckland CBD', 'North Shore (Takapuna & Albany)', 'South Auckland (Manukau & East Tamaki)', 'West Auckland (Henderson & Rosebank)', 'Penrose & Mt Wellington Industrial Sector'],
    servicesProvided: [
      {
        title: 'Static Security Guarding',
        description: 'On-site COA-certified guards for Auckland commercial towers, retail centers, construction sites, and corporate premises.',
        link: '/services/static-guard',
      },
      {
        title: 'Mobile Patrols & Lock-Ups',
        description: 'GPS-tracked mobile patrol units conducting randomized inspections and night-time lock-up/unlock services across Auckland.',
        link: '/services/mobile-patrolling',
      },
      {
        title: '24/7 Alarm Monitoring & Dispatch',
        description: 'Instant alarm signal verification and fast security guard dispatch to Auckland properties day or night.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'What security services does Atlas Security offer in Auckland?',
        answer: 'Atlas Security offers licensed static guards, mobile patrol units, lock-up and unlock services, 24/7 alarm monitoring, and rapid emergency response across the Greater Auckland area.',
      },
      {
        question: 'What information should Auckland businesses prepare for a security assessment?',
        answer: 'Specify your property location (e.g., Auckland CBD tower, Penrose industrial park, or North Shore retail complex), operating hours, perimeter access points, and specific site risks.',
      },
      {
        question: 'Are Atlas Security guards licensed to work in Auckland?',
        answer: 'Yes, all Atlas Security officers hold current Certificates of Approval (COA) issued under the Private Security Personnel and Private Investigators Act 2010.',
      },
      {
        question: 'How fast can a mobile patrol respond to an alarm in Auckland?',
        answer: 'Our GPS-tracked patrol vehicles are strategically positioned across Auckland to ensure rapid alarm response dispatch upon receiving a monitoring signal.',
      },
    ],
  },
  hamilton: {
    slug: 'hamilton',
    name: 'Hamilton',
    region: 'Waikato Region',
    tagline: 'Headquarters Security Guarding, Mobile Patrols & Monitoring in Hamilton & Waikato',
    metaTitle: 'Security Services Hamilton | Security Guards & Patrols Waikato | Atlas Security',
    metaDescription:
      'Atlas Security Head Office in Hamilton provides trusted static guarding, mobile patrols, and 24/7 alarm response across Hamilton CBD, Te Rapa, Frankton & Waikato.',
    heroDescription:
      'Headquartered in Hamilton, Atlas Security delivers premier static guarding, industrial patrols, and round-the-clock alarm monitoring across Waikato.',
    overview:
      'Hamilton serves as the operational headquarters for Atlas Security. We provide extensive security coverage for Hamilton Central, Te Rapa industrial zone, Frankton logistics parks, Cambridge, Te Awamutu, and the wider Waikato agricultural and commercial sectors.',
    keySuburbs: ['Hamilton CBD', 'Te Rapa Industrial Park', 'Frankton & Dinsdale Commercial Hubs', 'Cambridge & Te Awamutu', 'Morrinsville & Huntly Corridors'],
    servicesProvided: [
      {
        title: 'Static Security Guarding',
        description: 'Dedicated guards protecting Hamilton commercial offices, warehouses, distribution centers, and event venues.',
        link: '/services/static-guard',
      },
      {
        title: 'Waikato Mobile Patrols',
        description: 'Frequent night-time vehicle patrols, welfare checks, and perimeter lock-ups across Hamilton & surrounding Waikato towns.',
        link: '/services/mobile-patrolling',
      },
      {
        title: 'Alarm Systems & Monitoring',
        description: '24/7 centralized alarm monitoring with immediate patrol dispatch from our Hamilton operational center.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'Where is the Atlas Security head office located in Hamilton?',
        answer: 'Atlas Security operates its primary operational headquarters in Hamilton, providing centralized coordination for all Waikato security deployments.',
      },
      {
        question: 'Do you cover industrial areas in Te Rapa and Frankton?',
        answer: 'Yes, we provide specialized static security guards and frequent mobile patrols tailored for industrial parks, manufacturing plants, and logistics hubs in Te Rapa and Frankton.',
      },
      {
        question: 'Can I get a custom security assessment for my Hamilton business?',
        answer: 'Absolutely. We offer free on-site security assessments for Hamilton businesses to evaluate risk factors and tailor a static guard or patrol schedule.',
      },
    ],
  },
  wellington: {
    slug: 'wellington',
    name: 'Wellington',
    region: 'Wellington Capital Region',
    tagline: 'Government, Corporate & Commercial Security Services in Wellington',
    metaTitle: 'Security Guards Wellington | Corporate Concierge & Patrols | Atlas Security',
    metaDescription:
      'Professional security guard services, corporate concierge, mobile patrols & 24/7 alarm monitoring in Wellington CBD, Lower Hutt, Porirua & Kapiti Coast.',
    heroDescription:
      'Reliable static security guards, corporate concierge, mobile patrols, and alarm monitoring services across Wellington and the Hutt Valley.',
    overview:
      'In the capital city, security demands high professionalism, compliance, and discretion. Atlas Security delivers tailored security guarding, corporate concierge, and mobile patrol solutions across Wellington CBD, Lower Hutt, Upper Hutt, Porirua, and the Kapiti Coast.',
    keySuburbs: ['Wellington CBD & Parliamentary Quarter', 'Lower Hutt Industrial & Commercial', 'Porirua Commercial Hub', 'Petone & Seaview Logistics Precinct', 'Upper Hutt & Kapiti Coast'],
    servicesProvided: [
      {
        title: 'Static Guarding & Concierge',
        description: 'Professional guards for Wellington corporate headquarters, government institutions, retail precincts, and events.',
        link: '/services/static-guard',
      },
      {
        title: 'Mobile Patrols & Alarm Response',
        description: 'Regular night-time mobile patrols and emergency response units covering the Wellington metro and Hutt Valley areas.',
        link: '/services/mobile-patrolling',
      },
      {
        title: 'Alarm Systems & Surveillance',
        description: '24/7 surveillance monitoring and rapid dispatch security services for Wellington properties.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'What areas of Wellington does Atlas Security cover?',
        answer: 'We provide comprehensive security coverage across Wellington CBD, Lower Hutt, Upper Hutt, Porirua, Petone, and the Kapiti Coast.',
      },
      {
        question: 'Do you provide corporate concierge security in Wellington CBD?',
        answer: 'Yes, our static guards are trained in professional concierge duties, front-desk access control, and customer service tailored for Wellington office buildings.',
      },
      {
        question: 'How do I arrange security services for a Wellington property?',
        answer: 'You can call us directly on +64 22 199 3486 or fill out our online contact form to speak with a security consultant.',
      },
    ],
  },
}
