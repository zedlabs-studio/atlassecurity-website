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

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <StaticGuardClient />
    </>
  )
}