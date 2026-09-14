import type { Metadata } from 'next'
import { constructMetadata, siteConfig } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import ServiceAreaPageClient from './ServiceAreaPageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Service Areas | Security Guards in Auckland, Hamilton & North Island',
  description:
    'Atlas Security NZ provides static guard, mobile patrol & alarm monitoring services across 16+ cities including Auckland, Hamilton, Tauranga & Wellington.',
  path: '/service-area',
})

export default function ServiceAreaPage() {
  const serviceAreaSchema = {
    '@context': 'https://schema.org',
    '@type': 'SecurityService',
    name: siteConfig.name,
    url: `${siteConfig.url}/service-area`,
    telephone: siteConfig.phone,
    areaServed: [
      'Auckland',
      'Hamilton',
      'Wellington',
      'Tauranga',
      'Rotorua',
      'Napier',
      'Hastings',
      'New Plymouth',
      'Whanganui',
      'Palmerston North',
      'Whangarei',
      'Cambridge',
      'Te Awamutu',
      'Huntly',
      'Ngaruawahia',
      'Morrinsville',
    ],
    description:
      'Atlas Security provides static security guards, mobile patrol security, CCTV surveillance, alarm monitoring and access control services across the North Island of New Zealand.',
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Service Area', item: '/service-area' },
  ])

  return (
    <>
      <JsonLd data={[serviceAreaSchema, breadcrumbSchema]} />
      <ServiceAreaPageClient />
    </>
  )
}
