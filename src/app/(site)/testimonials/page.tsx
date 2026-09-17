import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema, getOrganizationSchema } from '@/components/JsonLd'
import TestimonialsPageClient from './TestimonialsPageClient'

export const metadata = constructMetadata({
  title: 'Client Testimonials & Reviews | Trusted Security Company NZ',
  description:
    'Read client reviews & testimonials for Atlas Security NZ. Trusted by business owners across Auckland, Hamilton & Wellington for security guarding.',
  path: '/testimonials',
})

export default function TestimonialsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Testimonials', item: '/testimonials' },
  ])

  return (
    <>
      <JsonLd data={[getOrganizationSchema(), breadcrumbSchema]} />
      <TestimonialsPageClient />
    </>
  )
}
