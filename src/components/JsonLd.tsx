import { siteConfig } from '@/lib/siteConfig'

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SecurityService',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.jpeg`,
    image: siteConfig.defaultOgImage,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
  }
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith('http') ? crumb.item : `${siteConfig.url}${crumb.item}`,
    })),
  }
}

export function getServiceSchema({
  name,
  description,
  serviceType,
  path,
}: {
  name: string
  description: string
  serviceType: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name,
    description,
    url: `${siteConfig.url}${path}`,
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    termsOfService: `${siteConfig.url}/terms`,
  }
}

export function getBlogPostingSchema({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  coverImage,
  authorName = 'Atlas Security Team',
}: {
  title: string
  description: string
  slug: string
  publishedAt?: string | Date
  updatedAt?: string | Date
  coverImage?: string
  authorName?: string
}) {
  const url = `${siteConfig.url}/blog/${slug}`
  const image = coverImage ? (coverImage.startsWith('http') ? coverImage : `${siteConfig.url}${coverImage}`) : siteConfig.defaultOgImage

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: url,
    image: image,
    datePublished: publishedAt ? new Date(publishedAt).toISOString() : new Date().toISOString(),
    dateModified: updatedAt ? new Date(updatedAt).toISOString() : new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: authorName,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.jpeg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}
