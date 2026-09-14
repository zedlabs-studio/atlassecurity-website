import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import TermsPageClient from './TermsPageClient'

export const metadata = constructMetadata({
  title: 'Terms & Conditions | Atlas Security NZ',
  description:
    'Review the official terms and conditions for Atlas Security services, including static guarding, mobile patrols, alarm monitoring, and security agreements in New Zealand.',
  path: '/terms',
})

export default function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Terms & Conditions', item: '/terms' },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <TermsPageClient />
    </>
  )
}