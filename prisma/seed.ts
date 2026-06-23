// prisma/seed.ts
// Run with: npx tsx prisma/seed.ts

import { PrismaClient } from '../src/generated/prisma/client'

const prisma = new PrismaClient({} as any)

async function main() {
  console.log('Seeding database...')  

  // Seed blogs
  await prisma.blog.createMany({
    skipDuplicates: true,
    data: [
      {
        title: 'Top 5 Security Tips for NZ Businesses',
        slug: 'top-5-security-tips-nz-businesses',
        excerpt: 'Learn how to protect your business with these essential security practices used by professionals across New Zealand.',
        content: '<h2>1. Conduct a Security Audit</h2><p>Start with a professional security assessment of your premises. Identify all entry points, blind spots in your CCTV coverage, and areas with poor lighting.</p><h2>2. Train Your Staff</h2><p>Your employees are your first line of defence. Ensure they know what to do in emergency situations, who to contact, and how to spot suspicious behaviour.</p><h2>3. Use Layered Security</h2><p>No single security measure is enough. Combine access control, CCTV monitoring, alarm systems, and physical guards for maximum protection.</p><h2>4. Review Your Security Regularly</h2><p>Security needs change as your business grows. Schedule quarterly reviews to ensure your security keeps pace with your operations.</p><h2>5. Partner with Licensed Professionals</h2><p>Always work with NZ-licensed security companies whose guards hold current Certificates of Approval. Atlas Security can help — contact us for a free assessment.</p>',
        coverImage: '/images/blog/security-tips.jpg',
        published: true,
        publishedAt: new Date('2026-06-01'),
      },
      {
        title: 'Why Mobile Patrols Are the Future of NZ Security',
        slug: 'mobile-patrols-future-nz-security',
        excerpt: 'Static guards are just one layer. Discover why leading NZ businesses are switching to mobile patrol solutions.',
        content: '<h2>The Limitations of Static Guarding</h2><p>Static guards provide excellent coverage for a single location, but they are expensive for businesses that need to protect multiple sites.</p><h2>What Makes Mobile Patrols Different</h2><p>Mobile patrol officers cover multiple sites in a single shift, conducting both scheduled and random checks. This unpredictability is itself a powerful deterrent.</p><h2>Cost Effectiveness</h2><p>For most businesses protecting 2 or more sites, mobile patrols cost significantly less than employing a static guard at each location.</p><h2>Technology Integration</h2><p>Modern mobile patrols use GPS tracking, digital reporting, and real-time communication to give you full visibility of your security coverage.</p>',
        coverImage: '/images/blog/mobile-patrol.jpg',
        published: true,
        publishedAt: new Date('2026-05-20'),
      },
      {
        title: 'Understanding NZ Security Licensing Requirements',
        slug: 'nz-security-licensing-requirements',
        excerpt: 'What every business owner needs to know about hiring licensed security personnel in New Zealand.',
        content: '<h2>The Certificate of Approval (COA)</h2><p>Every security guard working in New Zealand must hold a current Certificate of Approval issued by the Ministry of Justice. This involves background checks, training requirements, and ongoing compliance.</p><h2>Why This Matters for Your Business</h2><p>Hiring unlicensed security staff — even unknowingly — can expose your business to significant legal liability. Always verify your security provider\'s licensing status.</p><h2>How Atlas Security Complies</h2><p>Every guard we deploy holds a current NZ COA. We handle all licensing, training, and compliance so you don\'t have to worry about it.</p>',
        coverImage: '/images/blog/licensing.jpg',
        published: true,
        publishedAt: new Date('2026-05-10'),
      },
    ],
  })

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