import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Our Security Services | Static Guard, Mobile Patrol & Alarm Monitoring',
  description:
    'Explore professional security guard services by Atlas Security NZ: licensed static guards, 24/7 mobile patrolling, and rapid alarm monitoring & response.',
  path: '/services',
})

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ServicesPageClient />
    </>
  )
}