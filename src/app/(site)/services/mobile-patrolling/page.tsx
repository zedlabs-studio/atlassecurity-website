import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/components/JsonLd'
import MobilePatrollingClient from './MobilePatrollingClient'

export const metadata: Metadata = constructMetadata({
  title: 'Mobile Patrolling Services | 24/7 Patrol Vehicles & Alarm Response NZ',
  description:
    'Proactive mobile security patrols & fast alarm response across New Zealand. GPS-tracked patrol vehicles, random inspections, and lock/unlock services.',
  path: '/services/mobile-patrolling',
})

export default function MobilePatrollingPage() {
  const serviceSchema = getServiceSchema({
    name: 'Mobile Patrolling Services',
    description:
      'Proactive GPS-tracked mobile patrol security services, lock/unlock services, and 24/7 alarm response across New Zealand.',
    serviceType: 'Mobile Patrol Security',
    path: '/services/mobile-patrolling',
  })

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Mobile Patrolling Services', item: '/services/mobile-patrolling' },
  ])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do GPS-tracked mobile patrols verify property visits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mobile security patrol vehicles are equipped with real-time GPS tracking and electronic checkpoint verification, providing clients with logged timestamps and digital incident reports.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens during a mobile security lock-up service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mobile patrol officer arrives at your designated closing time, verifies all windows and doors are secured, arming alarm systems, and clearing unauthorized personnel from the premises.',
        },
      },
    ],
  }

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <MobilePatrollingClient />
    </>
  )
}