// prisma/seed.ts
// Run with: npx tsx prisma/seed.ts

import { PrismaClient } from '../src/generated/prisma/client'
import { mockBlogs } from '../src/lib/mock'

const prisma = new PrismaClient({} as any)

async function main() {
  console.log('Seeding database...')  

  // Seed all 10 blogs from mock data
  for (const b of mockBlogs) {
    await prisma.blog.upsert({
      where: { slug: b.slug },
      update: {
        title: b.title,
        excerpt: b.excerpt,
        content: b.content,
        coverImage: b.coverImage,
        published: b.published ?? true,
      },
      create: {
        id: b.id,
        title: b.title,
        slug: b.slug,
        excerpt: b.excerpt || '',
        content: b.content || '',
        coverImage: b.coverImage || '/images/blog-commercial-building.jpg',
        published: b.published ?? true,
        publishedAt: b.publishedAt ? new Date(b.publishedAt) : new Date(b.createdAt),
        createdAt: b.createdAt ? new Date(b.createdAt) : new Date(),
        updatedAt: b.updatedAt ? new Date(b.updatedAt) : new Date(),
      },
    })
  }

  // Seed careers
  await prisma.career.createMany({
    skipDuplicates: true,
    data: [
      {
        title: 'Static Security Guard — Auckland',
        description: 'We are looking for reliable, professional security guards to join our Auckland team on a full-time basis. You will be stationed at commercial premises and responsible for the safety of people and property.',
        requirements: 'Current NZ Certificate of Approval (COA)\nMinimum 1 year security experience\nExcellent communication skills\nAbility to work night shifts\nPhysically fit and alert',
        applyEmail: 'info@atlassecurity.co.nz',
        isActive: true,
      },
      {
        title: 'Mobile Patrol Officer — Wellington',
        description: 'Join our Wellington mobile patrol team. You will conduct scheduled and random patrols across multiple client sites, respond to alarms, and submit detailed incident reports.',
        requirements: 'Current NZ COA\nClean full NZ drivers licence\nPhysically fit and alert\nExperience with patrol vehicles preferred\nAvailable for overnight shifts',
        applyEmail: 'info@atlassecurity.co.nz',
        isActive: true,
      },
    ],
  })

  // Seed testimonials
  await prisma.testimonial.createMany({
    skipDuplicates: true,
    data: [
      { name: 'James Whitfield', message: 'Atlas Security has been protecting our Auckland warehouse for over a year. Professional, reliable, and always responsive. Could not ask for better service.', rating: 5, status: 'APPROVED' },
      { name: 'Sarah Thompson', message: 'The mobile patrol team is excellent. We have had zero incidents since switching to Atlas. Highly recommend to any NZ business owner.', rating: 5, status: 'APPROVED' },
      { name: 'Raj Patel', message: 'Very professional team. They responded within minutes when our alarm triggered at 2am. That kind of dedication is rare.', rating: 5, status: 'APPROVED' },
    ],
  })

  console.log('Seeding complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())