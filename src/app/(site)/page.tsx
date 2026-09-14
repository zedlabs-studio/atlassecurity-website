import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getOrganizationSchema, getWebSiteSchema } from '@/components/JsonLd'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Atlas Security NZ | Static Guard, Mobile Patrols & Security Services',
  description:
    'Atlas Security NZ provides licensed static security guard services, mobile patrols, and 24/7 alarm monitoring across Auckland, Waikato, and New Zealand.',
  path: '/',
})

export default function HomePage() {
  const orgSchema = getOrganizationSchema()
  const websiteSchema = getWebSiteSchema()

  return (
    <>
      <JsonLd data={[orgSchema, websiteSchema]} />
      <HomePageClient />
    </>
  )
}