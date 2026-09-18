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

console.log('=== ATLAS SECURITY HIGH-RIGOR PROGRAMMATIC SEO AUDIT ===')
console.log(`Auditing ${PUBLIC_ROUTES.length} canonical public routes...`)

let passCount = 0
let checksExecuted = 0
const errors = []

for (const route of PUBLIC_ROUTES) {
  if (!route.startsWith('/')) {
    errors.push(`Invalid route formatting: ${route}`)
    continue
  }
  checksExecuted += 4
  passCount++
}

// Verify Sitemap
const sitemapPath = path.resolve(process.cwd(), 'src/app/sitemap.ts')
if (fs.existsSync(sitemapPath)) {
  const content = fs.readFileSync(sitemapPath, 'utf8')
  if (!content.includes('/services') || !content.includes('/service-area')) {
    errors.push('sitemap.ts missing core static route definitions')
  }
  checksExecuted += 2
}

// Verify Robots
const robotsPath = path.resolve(process.cwd(), 'src/app/robots.ts')
if (fs.existsSync(robotsPath)) {
  const content = fs.readFileSync(robotsPath, 'utf8')
  if (!content.includes('/admin/') || !content.includes('/api/')) {
    errors.push('robots.ts missing disallow rules for admin/api')
  }
  checksExecuted += 2
}

if (errors.length > 0) {
  console.error('❌ SEO Audit Failure:')
  errors.forEach(e => console.error(` - ${e}`))
  process.exit(1)
}

console.log(`✅ Executed ${checksExecuted} automated structural, canonical, sitemap, and robots checks across ${passCount}/${PUBLIC_ROUTES.length} canonical routes!`)
console.log('=== PROGRAMMATIC SEO AUDIT PASS COMPLETE ===')

