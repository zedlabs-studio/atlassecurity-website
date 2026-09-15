import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema, getOrganizationSchema } from '@/components/JsonLd'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Contact Security Company NZ | Request a Free Security Quote',
  description:
    'Get in touch with Atlas Security NZ. Request a free security quote or call 0800 285 277 for static guards, mobile patrols & alarm monitoring.',
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