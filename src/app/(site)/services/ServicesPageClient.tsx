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
    image: '/images/service-static-guard.webp',
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
    image: '/images/service-mobile-patrol.webp',
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
    image: '/images/service-alarm.webp',
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

export default function ServicesPageClient() {
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

      {/* Specialized Industry Security Services */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-[#3b82f6] font-semibold text-sm uppercase tracking-widest mb-3">Industry Solutions</p>
            <h2 className="text-3xl font-extrabold text-white">Specialized Industry Security Services</h2>
            <p className="text-gray-400 mt-3 text-base max-w-2xl mx-auto">
              Tailored commercial security operational models built for the specific risks, access challenges, and compliance requirements of key sectors.
            </p>
            <div className="w-14 h-1 bg-[#1e40af] mx-auto mt-4 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1e293b] border border-gray-800 rounded-xl p-8 flex flex-col justify-between hover:border-[#1e40af] transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1e40af]/20 flex items-center justify-center text-[#3b82f6] mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 22h20M6 18v-7M10 18v-11M14 18v-15M18 18v-4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3b82f6] transition-colors">Construction Site Security</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Comprehensive site protection, asset monitoring, plant equipment tracking, and mobile security patrols for active and after-hours development projects.
                </p>
              </div>
              <Link href="/services/construction-site-security" className="inline-flex items-center gap-2 text-[#3b82f6] font-bold text-sm hover:underline">
                Explore Construction Security
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="bg-[#1e293b] border border-gray-800 rounded-xl p-8 flex flex-col justify-between hover:border-[#1e40af] transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1e40af]/20 flex items-center justify-center text-[#3b82f6] mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3b82f6] transition-colors">Retail Security Services</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Uniformed retail security officers, loss prevention guards, anti-shoplifting presence, and emergency conflict resolution for retail outlets and centers.
                </p>
              </div>
              <Link href="/services/retail-security" className="inline-flex items-center gap-2 text-[#3b82f6] font-bold text-sm hover:underline">
                Explore Retail Security
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="bg-[#1e293b] border border-gray-800 rounded-xl p-8 flex flex-col justify-between hover:border-[#1e40af] transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1e40af]/20 flex items-center justify-center text-[#3b82f6] mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                    <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3b82f6] transition-colors">Commercial & Corporate Security</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Concierge guards, commercial building protection, tenant access control, and 24/7 facility patrols for commercial property owners and corporate offices.
                </p>
              </div>
              <Link href="/services/commercial-security" className="inline-flex items-center gap-2 text-[#3b82f6] font-bold text-sm hover:underline">
                Explore Commercial Security
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Regional & Educational Context Bridge */}
          <div className="mt-12 pt-8 border-t border-gray-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-400">
            <div>
              <span className="text-white font-bold block mb-1">Regional Service Coverage:</span>
              <p className="leading-relaxed">
                We deliver tailored security guard and mobile patrol operations across <Link href="/service-area/auckland" className="text-[#3b82f6] hover:underline font-semibold">Auckland</Link>, <Link href="/service-area/hamilton" className="text-[#3b82f6] hover:underline font-semibold">Hamilton &amp; Waikato</Link>, and <Link href="/service-area/wellington" className="text-[#3b82f6] hover:underline font-semibold">Wellington</Link>. View our <Link href="/service-area" className="text-gray-300 hover:text-white underline">full list of 16+ serviced locations</Link>.
              </p>
            </div>
            <div>
              <span className="text-white font-bold block mb-1">Buyer Security Resources:</span>
              <p className="leading-relaxed">
                Compare operational choices in our <Link href="/blog/static-guards-vs-mobile-patrols-nz" className="text-[#3b82f6] hover:underline font-semibold">Static Guards vs Mobile Patrols Guide</Link> or review our <Link href="/blog/how-to-choose-coa-licensed-security-guard-nz" className="text-[#3b82f6] hover:underline font-semibold">COA Licensing &amp; Compliance Checklist</Link> before selecting a provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Requirement Selection Framework */}
      <section className="py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#1e40af] text-xs font-extrabold tracking-widest uppercase mb-2 block">
              SERVICE SELECTION FRAMEWORK
            </span>
            <h2 className="text-3xl font-extrabold text-[#0a1628]">
              Start With Your Site&apos;s Primary Security Requirement
            </h2>
            <p className="text-gray-600 mt-3 text-sm lg:text-base">
              Match your operational requirements to the appropriate physical security model:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs hover:border-[#1e40af]/30 transition-all">
              <span className="text-xs font-extrabold text-[#1e40af] uppercase tracking-wider block mb-2">IF YOUR SITE REQUIRES</span>
              <h3 className="font-bold text-[#0a1628] text-lg mb-2">Continuous Physical Presence</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                On-site lobby concierge, contractor sign-ins, or dedicated front gate control during active or after-hours shifts.
              </p>
              <Link href="/services/static-guard" className="text-xs font-bold text-[#1e40af] hover:underline flex items-center gap-1">
                Select Static Guarding →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs hover:border-[#1e40af]/30 transition-all">
              <span className="text-xs font-extrabold text-[#1e40af] uppercase tracking-wider block mb-2">IF YOUR SITE REQUIRES</span>
              <h3 className="font-bold text-[#0a1628] text-lg mb-2">Periodic Physical Checks</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                Randomized perimeter vehicle checks, nightly lock-ups, exterior door inspections, and staff escorts across large premises.
              </p>
              <Link href="/services/mobile-patrolling" className="text-xs font-bold text-[#1e40af] hover:underline flex items-center gap-1">
                Select Mobile Patrols →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs hover:border-[#1e40af]/30 transition-all">
              <span className="text-xs font-extrabold text-[#1e40af] uppercase tracking-wider block mb-2">IF YOUR SITE REQUIRES</span>
              <h3 className="font-bold text-[#0a1628] text-lg mb-2">Automated Event Detection</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                Round-the-clock central signal monitoring connected to building intruder sensors with rapid guard dispatch upon activation.
              </p>
              <Link href="/services/alarm-monitoring" className="text-xs font-bold text-[#1e40af] hover:underline flex items-center gap-1">
                Select Alarm Monitoring →
              </Link>
            </div>
          </div>

          <div className="bg-[#0a1628] text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-extrabold mb-4 text-white text-center">Questions to Consider When Comparing Security Services</h3>
            <p className="text-gray-300 text-xs text-center mb-6 max-w-2xl mx-auto">
              Evaluating your operational risk profile before selecting a physical or electronic security model helps ensure maximum protection efficiency:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300">
              <div className="flex gap-2.5">
                <span className="text-[#3b82f6] font-bold">•</span>
                <span><strong>Continuous Physical Presence:</strong> Does your site require an on-site <Link href="/services/static-guard" className="text-[#3b82f6] underline">static guard</Link> for uninterrupted access control and immediate incident intervention?</span>
              </div>
              <div className="flex gap-2.5">
                <span className="text-[#3b82f6] font-bold">•</span>
                <span><strong>Defined Access &amp; Concierge:</strong> Are contractor sign-in logs, visitor badge management, or lobby concierge protocols needed during trading shifts?</span>
              </div>
              <div className="flex gap-2.5">
                <span className="text-[#3b82f6] font-bold">•</span>
                <span><strong>Periodic Perimeter Verification:</strong> Would randomized night-time checks by <Link href="/services/mobile-patrolling" className="text-[#3b82f6] underline">mobile patrol vehicles</Link> adequately secure your boundary gates and exterior doors?</span>
              </div>
              <div className="flex gap-2.5">
                <span className="text-[#3b82f6] font-bold">•</span>
                <span><strong>Multi-Building Complexities:</strong> Are there multiple detached facilities or storage yards across <Link href="/service-area/auckland" className="text-[#3b82f6] underline">Auckland</Link>, <Link href="/service-area/hamilton" className="text-[#3b82f6] underline">Hamilton</Link>, or <Link href="/service-area/wellington" className="text-[#3b82f6] underline">Wellington</Link> that require vehicle-based coverage?</span>
              </div>
              <div className="flex gap-2.5">
                <span className="text-[#3b82f6] font-bold">•</span>
                <span><strong>Electronic Sensor Integration:</strong> Is an intruder alarm or CCTV system installed that requires 24/7 <Link href="/services/alarm-monitoring" className="text-[#3b82f6] underline">alarm monitoring</Link> and rapid mobile guard dispatch?</span>
              </div>
              <div className="flex gap-2.5">
                <span className="text-[#3b82f6] font-bold">•</span>
                <span><strong>Escalation &amp; Keyholder Preparedness:</strong> Who holds building post orders, keyholder contacts, and access lock-box codes when an after-hours incident occurs?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Security Ecosystem Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[#1e40af] text-xs font-extrabold tracking-widest uppercase mb-2 block">
              INTEGRATED PROTECTION MODEL
            </span>
            <h2 className="text-3xl font-extrabold text-[#0a1628]">
              How Security Services Can Work Together
            </h2>
            <p className="text-gray-600 mt-3 text-sm lg:text-base leading-relaxed">
              Different site types and property footprints present distinct risk profiles. Rather than relying on a single measure, many commercial facilities benefit from matching specific security tiers to different operational periods:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6">
              <span className="text-xs font-extrabold text-[#1e40af] uppercase tracking-wider block mb-2">TIER 1 — ON-SITE PRESENCE</span>
              <h3 className="font-bold text-[#0a1628] text-lg mb-2">Static Guarding Operations</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Stationed <Link href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</Link> deliver unbroken physical deterrence, manage contractor sign-ins, operate entrance gates, and provide immediate incident intervention during active operational shifts.
              </p>
            </div>

            <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6">
              <span className="text-xs font-extrabold text-[#1e40af] uppercase tracking-wider block mb-2">TIER 2 — PERIODIC INSPECTION</span>
              <h3 className="font-bold text-[#0a1628] text-lg mb-2">Mobile Patrol Sweeps</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                GPS-tracked <Link href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrol vehicles</Link> conduct randomized perimeter checks, inspect exterior fire doors, perform evening lock-ups, and verify boundary fencing across large or multi-site footprints.
              </p>
            </div>

            <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6">
              <span className="text-xs font-extrabold text-[#1e40af] uppercase tracking-wider block mb-2">TIER 3 — ELECTRONIC DETECTION</span>
              <h3 className="font-bold text-[#0a1628] text-lg mb-2">Alarm &amp; Signal Monitoring</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Automated intruder sensors and 24/7 central <Link href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">alarm monitoring</Link> provide continuous signal oversight, triggering immediate keyholder notification and mobile guard dispatch when an intrusion occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Model Comparison & Selection Matrix */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#1e40af] text-xs font-extrabold tracking-widest uppercase mb-2 block">
              SERVICE SELECTION GUIDE
            </span>
            <h2 className="text-3xl font-extrabold text-[#0a1628]">
              Comparing Security Operational Models
            </h2>
            <p className="text-gray-600 mt-3 text-sm lg:text-base">
              Which Atlas Security model best aligns with your property risk profile, operational budget, and site requirements?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-[#f8f9fa] rounded-2xl overflow-hidden border border-gray-200">
              <thead>
                <tr className="bg-[#0a1628] text-white text-xs uppercase tracking-wider">
                  <th className="p-4 lg:p-5 font-bold">Security Model</th>
                  <th className="p-4 lg:p-5 font-bold">Best Suited For</th>
                  <th className="p-4 lg:p-5 font-bold">Primary Operational Focus</th>
                  <th className="p-4 lg:p-5 font-bold">Key Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                <tr className="hover:bg-white transition-colors">
                  <td className="p-4 lg:p-5 font-bold text-[#0a1628]">
                    <Link href="/services/static-guard" className="hover:text-[#1e40af] underline">Static Guarding</Link>
                  </td>
                  <td className="p-4 lg:p-5">High-traffic corporate lobbies, retail malls, high-value civil construction sites</td>
                  <td className="p-4 lg:p-5">Continuous physical deterrence, visitor access control, contractor logging</td>
                  <td className="p-4 lg:p-5 font-semibold text-[#1e40af]">Immediate on-site incident intervention</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="p-4 lg:p-5 font-bold text-[#0a1628]">
                    <Link href="/services/mobile-patrolling" className="hover:text-[#1e40af] underline">Mobile Patrols</Link>
                  </td>
                  <td className="p-4 lg:p-5">Multi-building industrial parks, commercial yards, suburban business centers</td>
                  <td className="p-4 lg:p-5">Randomized perimeter inspections, night lock-ups, welfare checks</td>
                  <td className="p-4 lg:p-5 font-semibold text-[#1e40af]">Cost-effective multi-site coverage</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="p-4 lg:p-5 font-bold text-[#0a1628]">
                    <Link href="/services/alarm-monitoring" className="hover:text-[#1e40af] underline">Alarm & Monitoring</Link>
                  </td>
                  <td className="p-4 lg:p-5">Commercial office towers, warehouses, retail stores, vacant properties</td>
                  <td className="p-4 lg:p-5">24/7 central signal oversight, remote CCTV verification, guard dispatch</td>
                  <td className="p-4 lg:p-5 font-semibold text-[#1e40af]">Round-the-clock automated threat detection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Core Security Services */}
      <div ref={servicesRef}>
        {services.map((service, index) => (
          <ServiceRow
            key={service.href}
            service={service}
            isEven={index % 2 === 0}
            inView={servicesInView}
            index={index}
          />
        ))}
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
              Talk to our team — we&apos;ll assess your site and recommend the best security solution for your needs and budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1e40af] font-bold px-8 py-3.5 rounded hover:bg-blue-50 transition-colors duration-200">
                Get a Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href="tel:+64221993486"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded transition-colors duration-200">
                +64 22 199 3486
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
