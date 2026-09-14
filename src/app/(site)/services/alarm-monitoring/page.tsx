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

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <AlarmMonitoringClient />
    </>
  )
}