import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema, getOrganizationSchema } from '@/components/JsonLd'
import CareersPageClient from './CareersPageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Security Guard Jobs NZ | Careers at Atlas Security',
  description:
    'Join the Atlas Security team. We are hiring COA-licensed static security guards & mobile patrol officers in Auckland, Hamilton & Wellington.',
  path: '/careers',
})

export default function CareersPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Careers', item: '/careers' },
  ])

  return (
    <>
      <JsonLd data={[getOrganizationSchema(), breadcrumbSchema]} />
      <CareersPageClient />
    </>
  )
}