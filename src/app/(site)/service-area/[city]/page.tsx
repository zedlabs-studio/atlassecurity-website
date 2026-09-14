import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCATION_DATA } from '@/lib/locationData'
import { constructMetadata, siteConfig } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import CityServiceAreaClient from './CityServiceAreaClient'

export function generateStaticParams() {
  return [
    { city: 'auckland' },
    { city: 'hamilton' },
    { city: 'wellington' },
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const location = LOCATION_DATA[city.toLowerCase()]

  if (!location) {
    return constructMetadata({
      title: 'Location Not Found | Atlas Security NZ',
      description: 'The requested service location could not be found.',
      path: '/service-area',
    })
  }

  return constructMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/service-area/${location.slug}`,
  })
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const location = LOCATION_DATA[city.toLowerCase()]

  if (!location) {
    notFound()
  }

  // Generate LocalBusiness / SecurityService schema for city
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'SecurityService',
    name: `${siteConfig.name} - ${location.name}`,
    description: location.metaDescription,
    url: `${siteConfig.url}/service-area/${location.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: location.name,
    },
    serviceType: [
      'Static Security Guarding',
      'Mobile Patrol Security',
      '24/7 Alarm Monitoring',
      'Access Control',
    ],
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
  }

  // Generate FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  // Generate Breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Service Areas', item: '/service-area' },
    { name: location.name, item: `/service-area/${location.slug}` },
  ])

  return (
    <>
      <JsonLd data={[localSchema, faqSchema, breadcrumbSchema]} />
      <CityServiceAreaClient location={location} />
    </>
  )
}
