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

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <MobilePatrollingClient />
    </>
  )
}