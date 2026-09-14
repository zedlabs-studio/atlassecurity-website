import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/components/JsonLd'
import AlarmMonitoringClient from './AlarmMonitoringClient'

export const metadata: Metadata = constructMetadata({
  title: '24/7 Alarm Systems & CCTV Monitoring Services NZ',
  description:
    'Advanced alarm system installation, 24/7 CCTV surveillance & rapid alarm response dispatch in New Zealand. Protect your property with Atlas Security.',
  path: '/services/alarm-monitoring',
})

export default function AlarmMonitoringPage() {
  const serviceSchema = getServiceSchema({
    name: 'Alarm & Monitoring Services',
    description:
      '24/7 intruder alarm installation, CCTV surveillance monitoring, and rapid alarm response dispatch across New Zealand.',
    serviceType: 'Alarm Systems and CCTV Monitoring',
    path: '/services/alarm-monitoring',
  })

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Alarm & Monitoring', item: '/services/alarm-monitoring' },
  ])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need to switch my alarm monitoring provider to use Atlas Security?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, Atlas Security works independently with all major monitoring centers across New Zealand to provide rapid mobile alarm response dispatch regardless of your current monitoring provider.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does 24/7 CCTV surveillance monitoring work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our centralized monitoring hub receives real-time CCTV motion alerts, verifies security breaches remotely, and immediately dispatches mobile patrol officers or contacts emergency services.',
        },
      },
    ],
  }

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <AlarmMonitoringClient />
    </>
  )
}