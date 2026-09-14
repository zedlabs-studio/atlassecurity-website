import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/components/JsonLd'
import StaticGuardClient from './StaticGuardClient'

export const metadata: Metadata = constructMetadata({
  title: 'Static Guard Services | Licensed On-Site Security Personnel NZ',
  description:
    'Professional static security guard services in NZ. Trained & NZ COA certified security guards for retail, commercial buildings, industrial & construction sites.',
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