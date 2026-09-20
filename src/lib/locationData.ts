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
      'Protecting Auckland CBD commercial properties, North Shore retail locations, South Auckland industrial sites, West Auckland commercial precincts, and regional construction sites with COA-certified security personnel.',
    overview:
      'As New Zealand’s largest metropolitan region, Auckland demands proactive, highly responsive security. Atlas Security provides dedicated static guarding, scheduled mobile vehicle patrols, and rapid alarm response throughout Auckland CBD commercial properties, North Shore retail locations, South Auckland industrial yards in Manukau and East Tamaki, West Auckland commercial sites in Henderson and Rosebank, and after-hours security across major civil developments.',
    keySuburbs: ['CBD Commercial Properties (Auckland CBD)', 'North Shore Retail & Commercial (Takapuna & Albany)', 'South Auckland Industrial & Commercial (Manukau & East Tamaki)', 'West Auckland Commercial Sites (Henderson & Rosebank)', 'Penrose & Mt Wellington Industrial Sector'],
    servicesProvided: [
      {
        title: 'Static Security Guarding',
        description: 'On-site COA-certified guards for Auckland CBD commercial properties, North Shore retail locations, South Auckland industrial yards, and civil construction sites.',
        link: '/services/static-guard',
      },
      {
        title: 'Mobile Patrols & Lock-Ups',
        description: 'GPS-tracked mobile patrol units conducting randomized inspections, after-hours security, and night-time lock-up/unlock services across Greater Auckland.',
        link: '/services/mobile-patrolling',
      },
      {
        title: '24/7 Alarm Monitoring & Dispatch',
        description: 'Instant alarm signal verification and fast security guard dispatch to Auckland commercial and industrial properties day or night.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'What security services does Atlas Security offer in Auckland?',
        answer: 'Atlas Security offers licensed static guards, mobile patrol units, lock-up and unlock services, 24/7 alarm monitoring, after-hours security, and rapid emergency response across Auckland CBD, North Shore, South Auckland, and West Auckland.',
      },
      {
        question: 'What information should Auckland businesses prepare for a security assessment?',
        answer: 'Specify your property location (e.g., Auckland CBD commercial property, Penrose industrial site, North Shore retail location, or West Auckland construction site), operating hours, perimeter access points, and specific site risks.',
      },
      {
        question: 'How do you secure different site types across Auckland suburbs?',
        answer: 'We deploy concierge static guards for Auckland CBD office towers, customer-focused retail guards for North Shore stores, mobile patrol sweeps for South Auckland industrial yards, and gatehouse security for West Auckland civil sites.',
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
      'Headquartered in Hamilton, Atlas Security delivers premier static guarding, industrial patrols, construction site protection, and round-the-clock alarm monitoring across Hamilton commercial properties, Te Rapa, Frankton, and Waikato.',
    overview:
      'Hamilton serves as the operational headquarters for Atlas Security. We provide extensive security coverage for Hamilton commercial properties in the CBD, Te Rapa industrial and distribution environments, Frankton commercial hubs, construction sites, retail precincts, and after-hours site security across Cambridge, Te Awamutu, and the wider Waikato region.',
    keySuburbs: ['Hamilton Commercial Properties (CBD)', 'Te Rapa Industrial & Distribution Environments', 'Frankton Commercial & Logistics Hubs', 'Construction Sites & Retail Precincts', 'Cambridge, Te Awamutu & Morrinsville Corridors'],
    servicesProvided: [
      {
        title: 'Static Security Guarding',
        description: 'Dedicated guards protecting Hamilton commercial properties, Te Rapa industrial & distribution environments, Frankton logistics parks, and construction sites.',
        link: '/services/static-guard',
      },
      {
        title: 'Waikato Mobile Patrols',
        description: 'Frequent after-hours site security, night-time vehicle patrols, welfare checks, and perimeter lock-ups across Hamilton & surrounding Waikato towns.',
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
        answer: 'Atlas Security operates its primary operational headquarters in Hamilton, providing centralized coordination for all Waikato security guard and mobile patrol deployments.',
      },
      {
        question: 'What security services do you provide for Te Rapa and Frankton industrial sites?',
        answer: 'We provide specialized static gatehouse guards, material storage security, and frequent mobile patrol sweeps for Te Rapa industrial and distribution environments and Frankton logistics parks.',
      },
      {
        question: 'What details should Hamilton business operators prepare for a security assessment?',
        answer: 'Specify your site layout (e.g., Te Rapa distribution yard, Frankton warehouse, Hamilton CBD commercial property, or local construction site), operating hours, perimeter access points, and specific asset risks.',
      },
      {
        question: 'Can I get a custom security assessment for my Hamilton business?',
        answer: 'Absolutely. We offer free on-site security assessments for Hamilton businesses to evaluate risk factors and tailor a static guard or after-hours patrol schedule.',
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
      'Reliable static security guards, corporate concierge, mobile patrols, and alarm monitoring services across Wellington CBD commercial buildings, multi-tenant properties, Hutt Valley, Porirua, and Kapiti Coast.',
    overview:
      'In the capital city, security demands high professionalism, compliance, and discretion. Atlas Security delivers tailored security guarding, corporate concierge, after-hours coverage, and mobile patrol solutions across Wellington CBD commercial buildings, multi-tenant properties, Hutt Valley industrial areas in Lower Hutt and Petone, Porirua retail hubs, Kapiti Coast, and civil construction sites.',
    keySuburbs: ['Wellington CBD Commercial Buildings', 'Multi-Tenant Properties & Parliamentary Precinct', 'Hutt Valley Industrial & Commercial (Lower Hutt & Petone)', 'Porirua Commercial & Retail Hubs', 'Kapiti Coast & Upper Hutt'],
    servicesProvided: [
      {
        title: 'Static Guarding & Concierge',
        description: 'Professional guards for Wellington CBD commercial buildings, multi-tenant properties, retail precincts, construction sites, and corporate offices.',
        link: '/services/static-guard',
      },
      {
        title: 'Mobile Patrols & After-Hours Coverage',
        description: 'Regular night-time mobile patrols, after-hours coverage, and emergency response units covering Wellington metro, Hutt Valley, Porirua, and Kapiti Coast.',
        link: '/services/mobile-patrolling',
      },
      {
        title: 'Alarm Systems & Surveillance',
        description: '24/7 surveillance monitoring and rapid dispatch security services for Wellington commercial and multi-tenant properties.',
        link: '/services/alarm-monitoring',
      },
    ],
    faqs: [
      {
        question: 'What areas of Greater Wellington does Atlas Security cover?',
        answer: 'We provide comprehensive security coverage across Wellington CBD commercial buildings, multi-tenant properties, Lower Hutt, Upper Hutt, Porirua, Petone, and the Kapiti Coast.',
      },
      {
        question: 'What security services do you offer for Wellington CBD commercial buildings and multi-tenant properties?',
        answer: 'We offer corporate lobby concierges, tenant access control, after-hours lock-up procedures, vacant floor inspections, and after-hours coverage for multi-tenant properties.',
      },
      {
        question: 'What details should Wellington property managers prepare for a security assessment?',
        answer: 'Specify your property location (e.g., Wellington CBD commercial building, Hutt Valley industrial park, or Porirua retail store), operating hours, entry points, and lock-up times.',
      },
      {
        question: 'How do I arrange security services for a Wellington property?',
        answer: 'You can call us directly on +64 22 199 3486 or fill out our online contact form to speak with a security consultant.',
      },
    ],
  },
}
