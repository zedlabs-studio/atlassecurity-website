'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
  cardVariant,
  viewport,
} from '@/lib/motion'
import Hero from '@/components/Hero'
import { MagneticButton } from '@/components/MagneticButton'
import { CoverageStrip } from '@/components/CoverageStrip'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { TestimonialsSection } from '@/components/TestimonialsSection'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, target, suffix, count])

  return <span ref={ref}>0{suffix}</span>
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <CredibilityStrip />
      <ServicesSection />
      <IndustriesSection />
      <CoverageStrip />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogTeaser />
      <CTABanner />
    </main>
  )
}

export function CredibilityStrip() {
  const stats = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Reliable',
      desc: 'Consistent security services',
      count: 50,
      suffix: '+',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Professional',
      desc: 'Licensed security experts',
      count: 100,
      suffix: '%',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: 'Trusted',
      desc: 'Building trust through results',
      count: 7,
      suffix: '+ yrs',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Always on',
      desc: 'Here when you need us',
      count: 24,
      suffix: '/7',
    },
  ]

  const badges = [
    { label: 'NZ Licensed & Certified', sub: 'Certificate of Approval' },
    { label: 'Fully Insured', sub: 'Comprehensive coverage' },
    { label: 'NZ Owned & Operated', sub: 'Local expertise' },
    { label: 'Trained Professionals', sub: 'Background checked' },
  ]

  return (
    <section className="bg-[#0a1628] border-t border-white/6">
      <div className="container mx-auto px-6 lg:px-16 py-20">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative pl-6 border-l border-white/10 first:pl-0 first:border-l-0 lg:first:pl-0"
            >
              <div className="text-[#3b5fd9] mb-3 group-hover:scale-110 transition-transform duration-300 w-fit">
                {s.icon}
              </div>
              <p className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-1">
                <Counter target={s.count} suffix={s.suffix} />
              </p>
              <p className="text-white font-semibold text-sm mb-0.5">{s.title}</p>
              <p className="text-gray-500 text-xs leading-snug">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="h-px bg-white/6 my-14" />

        <motion.div
          className="flex flex-wrap items-start gap-x-10 gap-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {badges.map((b, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-center gap-2.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3b5fd9" strokeWidth="2.5" className="shrink-0">
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="10" stroke="#3b5fd9" strokeWidth="1.4" />
              </svg>
              <div>
                <p className="text-gray-200 text-sm font-medium leading-tight">{b.label}</p>
                <p className="text-gray-500 text-xs">{b.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      image: '/images/service-static-guard.png',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      number: '01',
      title: 'STATIC GUARD SERVICES',
      desc: 'Professional on-site security personnel to protect your people, property and assets.',
      features: ['Trained & licensed guards', 'Access control & visitor management', '24/7 professional presence'],
      href: '/services/static-guard',
    },
    {
      image: '/images/service-mobile-patrol.png',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <rect x="1" y="3" width="15" height="13" rx="1" />
          <path d="M16 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      number: '02',
      title: 'MOBILE PATROLLING SERVICES',
      desc: 'Proactive patrols to deter crime, identify risks and respond when it matters most.',
      features: ['Regular mobile patrols', 'Alarm response', '24/7 monitoring'],
      href: '/services/mobile-patrolling',
    },
    {
      image: '/images/service-alarm.png',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" />
        </svg>
      ),
      number: '03',
      title: 'ALARM & MONITORING',
      desc: 'Advanced alarm systems and monitoring for complete peace of mind.',
      features: ['Intruder alarm systems', '24/7 monitoring', 'Rapid response'],
      href: '/services/alarm-monitoring',
    },
  ]

  return (
    <section className="relative bg-[#f8f9fa] py-24">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#1e40af]/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl font-extrabold text-[#0a1628] tracking-tight uppercase">Our Services</h2>
          <div className="w-14 h-1 bg-[#1e40af] mx-auto mt-4 mb-5 rounded" />
          <p className="text-gray-500 text-sm leading-relaxed">
            Three core services, one standard of care — each built around licensed, background-checked
            professionals and round-the-clock response.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(10,22,40,0.06)] border border-gray-100 group hover:shadow-xl hover:border-[#1e40af]/20 transition-[box-shadow,border-color] duration-300"
            >
              <div className="relative h-52 bg-[#0a1628] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 bg-[#1e40af]/0 group-hover:bg-[#1e40af]/10 transition-colors duration-300" />
                <p className="absolute top-4 left-4 text-white/50 font-extrabold text-2xl tracking-tight">
                  {s.number}
                </p>
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#1e40af] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
              </div>
              <div className="p-7">
                <div className="w-8 h-0.5 bg-[#1e40af] mb-3 group-hover:w-16 transition-all duration-300 rounded" />
                <h3 className="font-extrabold text-[#0a1628] text-sm tracking-wide mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
                        <circle cx="12" cy="12" r="10" fill="#1e40af" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="inline-flex items-center gap-1.5 text-[#1e40af] text-sm font-bold group/link">
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="group-hover/link:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function IndustriesSection() {
  const industries = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      title: 'Retail & Shopping',
      desc: 'Loss prevention, access control and customer safety for retail environments.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: 'Corporate & Office',
      desc: 'Professional security presence for office buildings and corporate campuses.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 20h20M4 20V10l8-6 8 6v10" />
          <path d="M10 20v-5h4v5" />
          <rect x="8" y="10" width="8" height="5" rx="1" />
        </svg>
      ),
      title: 'Construction Sites',
      desc: 'After-hours protection for equipment, materials and site access management.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: 'Healthcare',
      desc: 'Sensitive security solutions for hospitals, clinics and medical facilities.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13" rx="1" />
          <path d="M16 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: 'Warehousing & Logistics',
      desc: 'Round-the-clock protection for distribution centres and logistics hubs.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Events & Venues',
      desc: 'Crowd management and venue security for events of all sizes.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Education',
      desc: 'Safe learning environments for schools, colleges and universities.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: 'Hospitality',
      desc: 'Discreet, professional security for hotels, restaurants and entertainment venues.',
    },
  ]

  return (
    <section className="bg-[#0a1628] py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">Sector Experience</p>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">Industries We Protect</h2>
          <div className="w-14 h-1 bg-[#1e40af] mx-auto mt-4 rounded" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            From retail floors to construction sites, our security solutions are tailored to the unique challenges of
            your industry.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              className="group relative bg-white/3 hover:bg-[#1e40af]/15 border border-white/10 hover:border-[#1e40af]/50 rounded-xl p-6 cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[background-color,border-color,box-shadow] duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_24px_-8px_rgba(30,64,175,0.35)]"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#1e40af] rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-11 h-11 rounded-lg bg-[#1e40af]/15 border border-[#1e40af]/20 flex items-center justify-center text-[#3b5fd9] mb-4 group-hover:bg-[#1e40af] group-hover:text-white group-hover:scale-110 group-hover:border-[#1e40af] transition-all duration-300">
                {ind.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-2 leading-snug">{ind.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p className="text-gray-400 text-sm mb-4">Don&apos;t see your industry? We cover many more sectors.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white font-semibold px-7 py-3 rounded transition-all duration-200"
          >
            Get in touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function BlogTeaser() {
  type TeaserBlog = {
    id: string
    title: string
    slug: string
    excerpt: string
    coverImage: string
    publishedAt: string | null
  }

  const [blogs, setBlogs] = useState<TeaserBlog[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('/api/blogs')
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        setBlogs(Array.isArray(data) ? data.slice(0, 3) : [])
        setLoaded(true)
      })
      .catch(() => setLoaded(true))
  }, [])

  if (loaded && blogs.length === 0) return null

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <div>
            <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">From the Blog</p>
            <h2 className="text-4xl font-extrabold text-[#0a1628] tracking-tight uppercase">Security Insights</h2>
            <div className="w-14 h-1 bg-[#1e40af] mt-4 rounded" />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[#1e40af] text-sm font-bold group/link shrink-0"
          >
            View all posts
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover/link:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {!loaded ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl h-80 animate-pulse border border-gray-100" />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            {blogs.map((b) => (
              <motion.article key={b.id} variants={cardVariant}>
                <Link
                  href={`/blog/${b.slug}`}
                  className="block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#1e40af]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="relative h-44 bg-[#0a1628] overflow-hidden">
                    {b.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={b.coverImage}
                        alt={b.title}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500"
                        onError={(e) => {
                          ;(e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.15">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="w-8 h-0.5 bg-[#1e40af] mb-3 group-hover:w-14 transition-all duration-300 rounded" />
                    <p className="text-gray-400 text-xs mb-2">
                      {b.publishedAt
                        ? new Date(b.publishedAt).toLocaleDateString('en-NZ', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })
                        : 'Atlas Security'}
                    </p>
                    <h3 className="font-bold text-[#0a1628] leading-snug mb-3 group-hover:text-[#1e40af] transition-colors line-clamp-2">
                      {b.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{b.excerpt}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

function CTABanner() {
  return (
    <motion.section
      className="bg-[#0a1628] py-10 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="container mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full border-2 border-[#1e40af] flex items-center justify-center shrink-0 animate-pulse">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-lg">Need a security solution tailored to you?</p>
            <p className="text-gray-400 text-sm mt-0.5">Contact us today for a free consultation and site assessment.</p>
          </div>
        </div>
        <MagneticButton
          href="/contact"
          className="group inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-8 py-4 rounded whitespace-nowrap transition-colors duration-200 hover:shadow-lg hover:shadow-[#1e40af]/40"
        >
          CONTACT US TODAY
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </MagneticButton>
      </div>
    </motion.section>
  )
}