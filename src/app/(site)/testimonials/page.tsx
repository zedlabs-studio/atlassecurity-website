import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import TestimonialsPageClient from './TestimonialsPageClient'

export const metadata = constructMetadata({
  title: 'Client Testimonials & Reviews | Atlas Security NZ',
  description:
    'Read genuine feedback and client testimonials from New Zealand businesses and property owners who trust Atlas Security for static guards, mobile patrols, and alarm monitoring.',
  path: '/testimonials',
})

export default function TestimonialsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Testimonials', item: '/testimonials' },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <TestimonialsPageClient />
    </>
  )
}