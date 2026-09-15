import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/components/JsonLd'
import StaticGuardClient from './StaticGuardClient'

export const metadata: Metadata = constructMetadata({
  title: 'Static Security Guards NZ | On-Site Guard Services | Atlas Security',
  description:
    'Licensed static security guards & on-site security guard services in NZ. COA-certified security personnel for retail stores, commercial office towers & industrial sites.',
  path: '/services/static-guard',
})

export default function StaticGuardPage() {
  const serviceSchema = getServiceSchema({
    name: 'Static Guard Services',
    description:
      'Professional on-site static security guard services for commercial, industrial, construction, and retail premises across New Zealand.',
    serviceType: 'Static Security Guarding',
    path: '/services/static-guard',
  })

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Static Guard Services', item: '/services/static-guard' },
  ])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What industries do your static security guards protect?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We deploy static security guards across commercial office buildings, industrial facilities, construction sites, retail shopping centres, and private events throughout New Zealand.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are all Atlas Security guards licensed in New Zealand?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% of our static security guards hold current Certificates of Approval (COA) issued under the Private Security Personnel and Private Investigators Act 2010.',
        },
      },
    ],
  }

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <StaticGuardClient />
    </>
  )
}