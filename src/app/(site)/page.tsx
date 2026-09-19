import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getOrganizationSchema, getWebSiteSchema } from '@/components/JsonLd'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Licensed Security Company and Patrol Services in Auckland, New Zealand | Atlas Security',
  description:
    'Atlas Security is a licensed NZ security company providing static guards, mobile patrols and 24/7 alarm monitoring across Auckland, Waikato and Wellington.',
  keywords:
    'Licensed Security Company New Zealand, security services New Zealand, security guards New Zealand, licensed security guards New Zealand, professional security company New Zealand, security company Auckland, Wellington, security services Wellington, mobile security patrol Wellington, security company Waikato, security guards Waikato, security services Waikato, mobile security patrol New Zealand, static security guards New Zealand, 24/7 alarm monitoring New Zealand',
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