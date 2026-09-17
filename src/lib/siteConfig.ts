export const siteConfig = {
  name: 'Atlas Security NZ',
  legalName: 'Atlas Security New Zealand',
  domain: 'https://www.atlassecurity.co.nz',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.atlassecurity.co.nz',
  description:
    'Atlas Security NZ provides top-tier professional static guard, mobile patrol, and alarm monitoring security services across New Zealand.',
  phone: '+64 22 199 3486',
  email: 'info@atlassecurity.co.nz',
  address: {
    streetAddress: '100 Queen Street',
    addressLocality: 'Auckland',
    addressRegion: 'Auckland',
    postalCode: '1010',
    addressCountry: 'NZ',
  },
  geo: {
    latitude: -36.848461,
    longitude: 174.763336,
  },
  openingHours: 'Mo-Su 00:00-24:00',
  social: {
    facebook: 'https://facebook.com/atlassecuritynz',
    linkedin: 'https://linkedin.com/company/atlassecuritynz',
  },
  defaultOgImage: 'https://www.atlassecurity.co.nz/images/hero-car-swift.webp',
}

export function constructMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
}) {
  const url = `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
  const ogImage = image || siteConfig.defaultOgImage

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_NZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
