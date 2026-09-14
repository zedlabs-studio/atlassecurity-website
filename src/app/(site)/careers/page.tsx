import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import CareersPageClient from './CareersPageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Careers & Job Openings | Security Guard Jobs NZ',
  description:
    'Join Atlas Security NZ. Explore static guard, mobile patrol & security officer career opportunities in Auckland, Waikato & across New Zealand.',
  path: '/careers',
})

export default function CareersPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Careers', item: '/careers' },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <CareersPageClient />
    </>
  )
}