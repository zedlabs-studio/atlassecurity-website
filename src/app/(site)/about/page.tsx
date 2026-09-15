import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Licensed Security Company NZ | About Atlas Security',
  description:
    'Atlas Security is a COA-licensed security company in New Zealand. Learn about our Ministry of Justice compliance, trained guards & operational standards.',
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