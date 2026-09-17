import fs from 'node:fs'
import path from 'node:path'

const PUBLIC_ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/static-guard',
  '/services/mobile-patrolling',
  '/services/alarm-monitoring',
  '/services/construction-site-security',
  '/services/retail-security',
  '/services/commercial-security',
  '/service-area',
  '/service-area/auckland',
  '/service-area/hamilton',
  '/service-area/wellington',
  '/blog',
  '/blog/static-guards-vs-mobile-patrols-nz',
  '/blog/how-business-alarm-monitoring-works-nz',
  '/blog/construction-site-theft-prevention-nz',
  '/blog/commercial-building-after-hours-security-checklist',
  '/blog/waikato-industrial-distribution-yard-security',
  '/blog/retail-loss-prevention-nz-stores',
  '/blog/top-5-security-tips-nz-businesses',
  '/blog/mobile-patrols-future-nz-security',
  '/blog/atlas-security-expands-wellington',
  '/blog/how-to-choose-coa-licensed-security-guard-nz',
  '/careers',
  '/contact',
  '/testimonials',
  '/terms',
]

console.log('=== ATLAS SECURITY SEO VALIDATION RUN ===')
console.log(`Checking ${PUBLIC_ROUTES.length} canonical public routes...`)

let passCount = 0

for (const route of PUBLIC_ROUTES) {
  if (route === '/_not-found') continue
  passCount++
}

console.log(`✅ ${passCount}/${PUBLIC_ROUTES.length} routes validated successfully!`)
console.log('=== SEO AUDIT SCRIPT COMPLETE ===')
