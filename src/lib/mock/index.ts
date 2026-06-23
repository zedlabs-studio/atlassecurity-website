// lib/mock/index.ts
import type { Blog, Testimonial, Career } from '@/types'

export const mockBlogs: Blog[] = [
  {
    id: '1',
    title: 'Top 5 Security Tips for NZ Businesses',
    slug: 'top-5-security-tips-nz-businesses',
    excerpt: 'Learn how to protect your business with these essential security practices used by professionals across New Zealand.',
    content: '<p>Security is not a one-time investment — it is an ongoing commitment...</p><p>Here are the top five practices every NZ business should adopt.</p>',
    coverImage: '/images/blog/security-tips.jpg',
    published: true,
    publishedAt: '2026-06-01T00:00:00Z',
    createdAt: '2026-06-01T00:00:00Z',
    updatedAt: '2026-06-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Why Mobile Patrols Are the Future of NZ Security',
    slug: 'mobile-patrols-future-nz-security',
    excerpt: 'Static guards are just one layer. Discover why leading NZ businesses are switching to mobile patrol solutions.',
    content: '<p>Mobile patrols provide flexible, cost-effective coverage across multiple sites...</p>',
    coverImage: '/images/blog/mobile-patrol.jpg',
    published: true,
    publishedAt: '2026-05-20T00:00:00Z',
    createdAt: '2026-05-20T00:00:00Z',
    updatedAt: '2026-05-20T00:00:00Z',
  },
  {
    id: '3',
    title: 'Atlas Security Expands to Wellington Region',
    slug: 'atlas-security-expands-wellington',
    excerpt: 'We are proud to announce our coverage now extends across the Wellington region, serving more NZ businesses.',
    content: '<p>Atlas Security NZ is excited to announce the expansion of our service area...</p>',
    coverImage: '/images/blog/wellington.jpg',
    published: true,
    publishedAt: '2026-05-10T00:00:00Z',
    createdAt: '2026-05-10T00:00:00Z',
    updatedAt: '2026-05-10T00:00:00Z',
  },
]

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'James Whitfield',
    message: 'Atlas Security has been protecting our Auckland warehouse for over a year. Professional, reliable, and always responsive. Could not ask for better service.',
    rating: 5,
    status: 'APPROVED',
    createdAt: '2026-05-15T00:00:00Z',
  },
  {
    id: '2',
    name: 'Sarah Thompson',
    message: 'The mobile patrol team is excellent. We have had zero incidents since switching to Atlas. Highly recommend to any NZ business owner.',
    rating: 5,
    status: 'APPROVED',
    createdAt: '2026-04-28T00:00:00Z',
  },
  {
    id: '3',
    name: 'Raj Patel',
    message: 'Very professional team. They responded within minutes when our alarm triggered at 2am. That kind of dedication is rare.',
    rating: 5,
    status: 'APPROVED',
    createdAt: '2026-04-10T00:00:00Z',
  },
]

export const mockCareers: Career[] = [
  {
    id: '1',
    title: 'Static Security Guard — Auckland',
    description: 'We are looking for reliable, professional security guards to join our Auckland team on a full-time basis. You will be stationed at commercial premises and responsible for the safety of people and property.',
    requirements: 'Current NZ Certificate of Approval (COA)\nMinimum 1 year security experience\nExcellent communication skills\nAbility to work night shifts',
    applyEmail: 'info@atlassecurity.co.nz',
    isActive: true,
    createdAt: '2026-06-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Mobile Patrol Officer — Wellington',
    description: 'Join our Wellington mobile patrol team. You will conduct scheduled and random patrols across multiple client sites, respond to alarms, and submit detailed incident reports.',
    requirements: 'Current NZ COA\nClean full NZ drivers licence\nPhysically fit and alert\nExperience with patrol vehicles preferred',
    applyEmail: 'info@atlassecurity.co.nz',
    isActive: true,
    createdAt: '2026-05-25T00:00:00Z',
  },
]