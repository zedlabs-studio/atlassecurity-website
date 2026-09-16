import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/components/JsonLd'
import AlarmMonitoringClient from './AlarmMonitoringClient'

export const metadata: Metadata = constructMetadata({
  title: 'Security Alarm Monitoring NZ | 24/7 Monitoring & Guard Dispatch',
  description:
    '24/7 commercial security alarm monitoring & rapid guard dispatch in NZ. Central monitoring station integration for intruder alarms & CCTV verification.',
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
      {
        '@type': 'Question',
        name: 'What happens when a false alarm triggers at my property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Monitoring station operators perform swift signal verification and optional video inspection before dispatching officers. If a false alarm is verified via authorized keyholder contact or video feed, dispatch is cancelled immediately to minimize unnecessary callout fees.',
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