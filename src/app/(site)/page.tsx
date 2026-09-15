import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getOrganizationSchema, getWebSiteSchema } from '@/components/JsonLd'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Atlas Security NZ | Licensed Security Company & Patrol Services',
  description:
    'Atlas Security is a leading licensed security company in NZ. We provide static security guards, mobile vehicle patrols, and 24/7 alarm monitoring across Auckland, Waikato & Wellington.',
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