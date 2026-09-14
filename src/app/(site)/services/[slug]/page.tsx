import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { VERTICAL_DATA } from '@/lib/verticalData'
import { constructMetadata, siteConfig } from '@/lib/siteConfig'
import { JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/components/JsonLd'
import VerticalServicePageClient from './VerticalServicePageClient'

export function generateStaticParams() {
  return [
    { slug: 'construction-site-security' },
    { slug: 'retail-security' },
    { slug: 'commercial-security' },
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const vertical = VERTICAL_DATA[slug.toLowerCase()]

  if (!vertical) {
    return constructMetadata({
      title: 'Service Not Found | Atlas Security NZ',
      description: 'The requested security service could not be found.',
      path: '/services',
    })
  }

  return constructMetadata({
    title: vertical.metaTitle,
    description: vertical.metaDescription,
    path: `/services/${vertical.slug}`,
  })
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const vertical = VERTICAL_DATA[slug.toLowerCase()]

  if (!vertical) {
    notFound()
  }

  const serviceSchema = getServiceSchema({
    name: vertical.name,
    description: vertical.metaDescription,
    serviceType: vertical.name,
    path: `/services/${vertical.slug}`,
  })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: vertical.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: vertical.name, item: `/services/${vertical.slug}` },
  ])

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <VerticalServicePageClient vertical={vertical} />
    </>
  )
}
