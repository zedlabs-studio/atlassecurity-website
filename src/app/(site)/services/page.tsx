import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Commercial Security Services NZ | Guarding, Patrols & Monitoring',
  description:
    'Explore commercial security services in New Zealand. Static security guards, mobile vehicle patrols, 24/7 alarm monitoring & industry solutions.',
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