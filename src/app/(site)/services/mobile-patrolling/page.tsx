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
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

const data = {
  title: 'Mobile Patrolling Services',
  tagline: 'Proactive mobile patrols that deter crime, identify risks and respond when it matters most.',
  description: 'Our mobile patrol service provides flexible, cost-effective security coverage across multiple sites. Patrol vehicles conduct scheduled and random checks, respond to alarms, and provide a visible deterrent across a wider area than static guarding alone.',
  image: '/images/service-mobile-patrol.png',
  features: [
    'Scheduled & random patrol routes',
    'Alarm response & investigation',
    '24/7 mobile coverage',
    'GPS-tracked patrol vehicles',
    'Lock & unlock services',
    'Welfare checks',
    'Incident response & reporting',
    'Multi-site coverage',
  ],
  benefits: [
    { icon: '🚗', title: 'Wide Coverage', desc: 'One patrol vehicle can cover multiple sites, making this the most cost-effective solution for many businesses.' },
    { icon: '🎲', title: 'Unpredictable Patrols', desc: 'Random patrol timing prevents criminals from identifying patterns and planning around your security.' },
    { icon: '🔔', title: 'Alarm Response', desc: 'Our patrol officers respond to triggered alarms immediately — faster and cheaper than calling out a static guard.' },
    { icon: '📍', title: 'GPS Tracked', desc: 'Every patrol is GPS tracked so you have full visibility of when and where your sites were checked.' },
  ],
  process: [
    { step: '01', title: 'Route Planning', desc: 'We map out optimised patrol routes covering all your sites efficiently.' },
    { step: '02', title: 'Schedule Setup', desc: 'We establish scheduled patrol times combined with random visits for maximum deterrence.' },
    { step: '03', title: 'Patrol Launch', desc: 'GPS-tracked vehicles begin patrols. You receive confirmation reports after each visit.' },
    { step: '04', title: 'Monthly Review', desc: 'We review patrol data and adjust routes or frequency based on any incidents or changes.' },
  ],
}

export default function MobilePatrollingPage() {
  const detailRef = useRef(null)
  const benefitsRef = useRef(null)
  const processRef = useRef(null)
  const detailInView = useInView(detailRef, { once: true, margin: '-80px' })
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-80px' })
  const processInView = useInView(processRef, { once: true, margin: '-80px' })

  return (
    <main>
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-gray-400 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{data.title}</span>
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white max-w-2xl">{data.title}</h1>
            <p className="text-gray-300 mt-3 text-lg max-w-xl">{data.tagline}</p>
            <div className="w-14 h-1 bg-[#1e40af] rounded mt-5" />
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-7 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5">
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="tel:02219934866" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded transition-all duration-200">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white" ref={detailRef}>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div className="flex-1" initial="hidden" animate={detailInView ? 'visible' : 'hidden'} variants={fadeLeft}>
              <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">Service Overview</p>
              <h2 className="text-3xl font-extrabold text-[#0a1628] mb-5">{data.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-8">{data.description}</p>
              <h3 className="font-bold text-[#0a1628] mb-4">What's Included</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
                      <circle cx="12" cy="12" r="10" fill="#1e40af"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="flex-1" initial="hidden" animate={detailInView ? 'visible' : 'hidden'} variants={fadeRight}>
              <div className="relative h-80 lg:h-105 rounded-2xl overflow-hidden bg-[#0a1628]">
                <Image src={data.image} alt={data.title} fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8f9fa]" ref={benefitsRef}>
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div className="text-center mb-14" initial="hidden" animate={benefitsInView ? 'visible' : 'hidden'} variants={fadeUp}>
            <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">Why Choose This Service</p>
            <h2 className="text-3xl font-extrabold text-[#0a1628]">Key Benefits</h2>
            <div className="w-14 h-1 bg-[#1e40af] mx-auto mt-4 rounded" />
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" initial="hidden" animate={benefitsInView ? 'visible' : 'hidden'} variants={stagger}>
            {data.benefits.map((b, i) => (
              <motion.div key={i} variants={cardVariant} className="bg-white rounded-xl p-7 border border-gray-100 hover:border-[#1e40af]/30 hover:shadow-md transition-all duration-300 flex gap-5">
                <div className="text-3xl shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-bold text-[#0a1628] mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0a1628]" ref={processRef}>
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div className="text-center mb-14" initial="hidden" animate={processInView ? 'visible' : 'hidden'} variants={fadeUp}>
            <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl font-extrabold text-white">Our Process</h2>
            <div className="w-14 h-1 bg-[#1e40af] mx-auto mt-4 rounded" />
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" animate={processInView ? 'visible' : 'hidden'} variants={stagger}>
            {data.process.map((p, i) => (
              <motion.div key={i} variants={cardVariant}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 hover:border-[#1e40af]/40 transition-all duration-300">
                  <p className="text-[#1e40af] text-4xl font-extrabold mb-4">{p.step}</p>
                  <h3 className="text-white font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1e40af] py-14">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Ready to get started?</h2>
          <p className="text-blue-200 mb-7">Contact us today for a free site assessment and custom quote.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1e40af] font-bold px-8 py-3.5 rounded hover:bg-blue-50 transition-colors duration-200">
              Get a Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="tel:02219934866" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded transition-colors duration-200">
              022 199 3486
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}