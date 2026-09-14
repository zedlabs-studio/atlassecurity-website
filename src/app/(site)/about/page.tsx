import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = constructMetadata({
  title: 'About Us | NZ Owned & Licensed Security Specialists',
  description:
    'Learn about Atlas Security NZ. Founded by Hemant Tagra, we provide licensed, high-grade security guard, mobile patrol, and alarm monitoring services across New Zealand.',
  path: '/about',
})

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'About Us', item: '/about' },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <AboutPageClient />
    </>
  )
}