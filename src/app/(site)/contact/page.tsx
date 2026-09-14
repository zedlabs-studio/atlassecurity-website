import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema, getOrganizationSchema } from '@/components/JsonLd'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us | Free Security Quote & Site Assessment NZ',
  description:
    'Contact Atlas Security NZ for a free security consultation. Call +64 800 285 277 or email info@atlassecurity.co.nz for static guards, mobile patrols & alarm monitoring.',
  path: '/contact',
})

export default function ContactPage() {
  const orgSchema = getOrganizationSchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Contact', item: '/contact' },
  ])

  return (
    <>
      <JsonLd data={[orgSchema, breadcrumbSchema]} />
      <ContactPageClient />
    </>
  )
}