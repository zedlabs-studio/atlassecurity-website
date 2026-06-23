'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const services = [
  {
    title: 'Static Guard Services',
    tagline: 'Professional on-site security personnel protecting your people, property and assets.',
    image: '/images/service-static-guard.png',
    href: '/services/static-guard',
    features: [
      'Trained & licensed guards (NZ COA certified)',
      'Access control & visitor management',
      '24/7 professional presence',
      'Incident reporting & documentation',
      'Emergency response coordination',
      'Key holding services',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    stat: { value: '24/7', label: 'On-site presence' },
  },
  {
    title: 'Mobile Patrolling Services',
    tagline: 'Proactive mobile patrols that deter crime, identify risks and respond when it matters most.',
    image: '/images/service-mobile-patrol.png',
    href: '/services/mobile-patrolling',
    features: [
      'Scheduled & random patrol routes',
      'Alarm response & investigation',
      '24/7 mobile coverage',
      'GPS-tracked patrol vehicles',
      'Lock & unlock services',
      'Multi-site coverage',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    stat: { value: 'GPS', label: 'Tracked patrols' },
  },
  {
    title: 'Alarm & Monitoring',
    tagline: 'Advanced alarm systems and 24/7 monitoring for complete peace of mind.',
    image: '/images/service-alarm.png',
    href: '/services/alarm-monitoring',
    features: [
      'Intruder alarm installation & monitoring',
      '24/7 CCTV surveillance',
      'Rapid alarm response dispatch',
      'Remote monitoring centre',
      'Smoke & fire alarm integration',
      'Real-time alert notifications',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M23 7l-7 5 7 5V7z"/>
        <rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    stat: { value: '< 5min', label: 'Avg. response time' },
  },
]

const whyPoints = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'NZ Licensed & Certified',
    desc: 'All guards hold a current Certificate of Approval under the Private Security Personnel and Private Investigators Act.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: '24/7 Availability',
    desc: 'Our operations centre never closes. Day or night, weekends or public holidays — we\'re always ready to respond.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Tailored to Your Needs',
    desc: 'We don\'t do one-size-fits-all. Every security plan is custom designed around your site, risks and budget.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'NZ Owned & Operated',
    desc: 'A proudly New Zealand company with deep local knowledge and a genuine commitment to keeping Kiwi businesses safe.',
  },
]

export default function ServicesPage() {
  const servicesRef = useRef(null)
  const whyRef = useRef(null)
  const ctaRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: '-60px' })
  const whyInView = useInView(whyRef, { once: true, margin: '-60px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-gray-400 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Services</span>
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white">Our Services</h1>
            <p className="text-gray-300 mt-3 text-lg max-w-xl">
              Professional security solutions tailored to protect your business, people and assets across New Zealand.
            </p>
            <div className="w-14 h-1 bg-[#1e40af] rounded mt-5" />
          </motion.div>
        </div>
      </section>

      {/* Services — alternating layout */}
      <div ref={servicesRef}>
        {services.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <ServiceRow
              key={service.href}
              service={service}
              isEven={isEven}
              inView={servicesInView}
              index={index}
            />
          )
        })}
      </div>

      {/* Why Atlas */}
      <section className="py-24 bg-[#0a1628]" ref={whyRef}>
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div className="text-center mb-14"
            initial="hidden" animate={whyInView ? 'visible' : 'hidden'} variants={fadeUp}>
            <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">Why Atlas Security</p>
            <h2 className="text-3xl font-extrabold text-white">Built on Trust. Backed by Experience.</h2>
            <div className="w-14 h-1 bg-[#1e40af] mx-auto mt-4 rounded" />
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden" animate={whyInView ? 'visible' : 'hidden'} variants={stagger}>
            {whyPoints.map((p, i) => (
              <motion.div key={i} variants={cardVariant}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#1e40af]/40 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#1e40af]/20 flex items-center justify-center text-[#1e40af] mb-4">
                  {p.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e40af] py-14" ref={ctaRef}>
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <motion.div initial="hidden" animate={ctaInView ? 'visible' : 'hidden'} variants={fadeUp}>
            <h2 className="text-2xl font-extrabold text-white mb-3">Not sure which service is right for you?</h2>
            <p className="text-blue-200 mb-7 max-w-lg mx-auto">
              Talk to our team — we'll assess your site and recommend the best security solution for your needs and budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1e40af] font-bold px-8 py-3.5 rounded hover:bg-blue-50 transition-colors duration-200">
                Get a Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href="tel:02219934866"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded transition-colors duration-200">
                022 199 3486
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function ServiceRow({
  service,
  isEven,
  inView,
  index,
}: {
  service: typeof services[0]
  isEven: boolean
  inView: boolean
  index: number
}) {
  const bg = isEven ? 'bg-white' : 'bg-[#f8f9fa]'

  return (
    <section className={`py-24 ${bg}`}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>

          {/* Text side */}
          <motion.div className="flex-1"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={isEven ? fadeLeft : fadeRight}
            transition={{ delay: index * 0.05 }}>

            {/* Number */}
            <p className="text-[#1e40af]/20 text-8xl font-extrabold leading-none mb-2 select-none">
              0{index + 1}
            </p>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#1e40af] flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest">
                {index === 0 ? 'Static Security' : index === 1 ? 'Mobile Patrol' : 'Technology'}
              </p>
            </div>

            <h2 className="text-3xl font-extrabold text-[#0a1628] mb-3">{service.title}</h2>
            <p className="text-gray-500 leading-relaxed mb-6">{service.tagline}</p>

            {/* Stat pill */}
            <div className="inline-flex items-center gap-2 bg-[#1e40af]/10 border border-[#1e40af]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#1e40af] font-extrabold text-sm">{service.stat.value}</span>
              <span className="text-gray-500 text-xs">{service.stat.label}</span>
            </div>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
                    <circle cx="12" cy="12" r="10" fill="#1e40af"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link href={service.href}
              className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-7 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1e40af]/30 group">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>

          {/* Image side */}
          <motion.div className="flex-1 w-full"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={isEven ? fadeRight : fadeLeft}
            transition={{ delay: index * 0.05 }}>
            <div className="relative h-80 lg:h-115 rounded-2xl overflow-hidden bg-[#0a1628] group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/60 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1e40af] flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-tight">{service.title}</p>
                  <p className="text-gray-300 text-xs">{service.stat.value} · {service.stat.label}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}