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
  image: '/images/service-mobile-patrol.webp',
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

export default function MobilePatrollingClient() {
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
              <a href="tel:+64221993486" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded transition-all duration-200">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white" ref={detailRef}>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div className="flex-1" initial="hidden" animate={detailInView ? 'visible' : 'hidden'} variants={fadeLeft}>
              <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">Service Overview</p>
              <h2 className="text-3xl font-extrabold text-[#0a1628] mb-5">{data.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-8">{data.description}</p>
              <h3 className="font-bold text-[#0a1628] mb-4">What&apos;s Included</h3>
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

      <section className="py-12 lg:py-16 bg-[#f8f9fa]" ref={benefitsRef}>
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

      {/* Route Planning & Evaluation Guidance */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-[#f8f9fa] border border-gray-200 rounded-2xl p-8">
              <span className="text-[#1e40af] text-xs font-extrabold tracking-widest uppercase mb-2 block">
                OPERATIONAL PLANNING
              </span>
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-4">
                Planning an Effective Mobile Patrol Route
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Mobile patrol efficiency relies on structured site assessments and unpredictable timing patterns. Key planning elements include:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1e40af] font-bold">•</span>
                  <span><strong>Perimeter Boundary Verification:</strong> Physical hand-checks of boundary fencing, vehicle gates, and rear emergency doors across <Link href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Te Rapa and Frankton</Link> industrial parks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1e40af] font-bold">•</span>
                  <span><strong>Vulnerable Point Inspections:</strong> Unlit loading bays, high-value tool sheds on <Link href="/services/construction-site-security" className="text-[#1e40af] font-semibold underline">construction developments</Link>, and subterranean car park gates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1e40af] font-bold">•</span>
                  <span><strong>Nightly Lock-Up &amp; Alarm Arming:</strong> Securing main entry doors, verifying window latches, arming master alarms, and conducting closing staff escorts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1e40af] font-bold">•</span>
                  <span><strong>GPS-Verified Checkpoints:</strong> Time-stamped electronic scan keys installed at perimeter gates to provide verified proof of attendance.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0a1628] text-white rounded-2xl p-8">
              <span className="text-[#3b82f6] text-xs font-extrabold tracking-widest uppercase mb-2 block">
                SERVICE FITMENT
              </span>
              <h2 className="text-2xl font-extrabold text-white mb-4">
                When Mobile Patrols May Be Considered
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Mobile vehicle security patrols deliver high-impact physical deterrence for properties that do not require full-time stationed guarding:
              </p>
              <ul className="space-y-3.5 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3b82f6] font-bold">1.</span>
                  <span><strong>Periodic Site Checks:</strong> Properties needing 2–5 randomized inspections per night to disrupt trespasser reconnaissance. Read our <Link href="/blog/mobile-patrols-future-nz-security" className="text-[#3b82f6] font-semibold underline">Mobile Patrol Insights</Link> for details.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3b82f6] font-bold">2.</span>
                  <span><strong>Multi-Building Commercial Parks:</strong> Suburban business parks across <Link href="/service-area/auckland" className="text-[#3b82f6] font-semibold underline">Auckland</Link> and <Link href="/service-area/wellington" className="text-[#3b82f6] font-semibold underline">Wellington</Link> with multiple entry gates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3b82f6] font-bold">3.</span>
                  <span><strong>Integrated Alarm Verification:</strong> Immediate vehicle dispatch when intruder alarms trigger at our 24/7 central <Link href="/services/alarm-monitoring" className="text-[#3b82f6] font-semibold underline">monitoring station</Link>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3b82f6] font-bold">4.</span>
                  <span><strong>Cost-Conscious Risk Management:</strong> Achieving professional physical security coverage at a predictable, budget-friendly flat monthly rate.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Operational Scope & Patrol Planning Breakdown */}
          <div className="mt-16 bg-[#f8f9fa] border border-gray-200 rounded-2xl p-8">
            <div className="max-w-3xl mb-8">
              <span className="text-[#1e40af] text-xs font-extrabold tracking-widest uppercase mb-2 block">
                PATROL EXECUTION
              </span>
              <h2 className="text-2xl font-extrabold text-[#0a1628]">
                What a Mobile Patrol Check Can Cover
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                During a physical site visit, patrol officers perform structured inspections across high-risk points to verify building security:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-gray-700 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <strong className="text-[#0a1628] font-bold text-sm block mb-1">Perimeter &amp; Gates</strong>
                <p className="leading-relaxed">Physical hand-checks of boundary fencing, lock latches, vehicle slide gates, and unlit storage yard boundaries.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <strong className="text-[#0a1628] font-bold text-sm block mb-1">Doors &amp; Exits</strong>
                <p className="leading-relaxed">Verifying ground-floor glass entry doors, emergency panic bars, and loading dock roller shutters are latched.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <strong className="text-[#0a1628] font-bold text-sm block mb-1">Lighting &amp; Visibility</strong>
                <p className="leading-relaxed">Checking entry canopy LEDs, identifying dark security blind spots, and reporting non-functional security floodlights.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <strong className="text-[#0a1628] font-bold text-sm block mb-1">Condition Anomalies</strong>
                <p className="leading-relaxed">Identifying water leaks, unlatched windows, forced entry signs, or suspicious vehicle activity around property perimeters.</p>
              </div>
            </div>

            <div className="bg-[#0a1628] text-white rounded-xl p-6">
              <h3 className="font-bold text-white text-sm mb-3">Key Factors for Planning Mobile Patrol Route Coverage</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-300">
                <div>
                  <strong className="text-[#3b82f6] block mb-1">1. Property Size &amp; Buildings</strong>
                  <span>Number of detached warehouses, external sheds, or perimeter gates requiring individual checkpoint scans.</span>
                </div>
                <div>
                  <strong className="text-[#3b82f6] block mb-1">2. Vulnerable Access Points</strong>
                  <span>Unlit rear loading bays, ground-floor glass facades, and high-value tool vaults on civil sites.</span>
                </div>
                <div>
                  <strong className="text-[#3b82f6] block mb-1">3. Inspection Frequency</strong>
                  <span>Determining whether site risk warrants 1, 3, or 5 randomized checks per evening shift.</span>
                </div>
              </div>
            </div>
          </div>
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

      {/* Service Alternatives & Decision Guidance */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[#1e40af] text-xs font-extrabold tracking-widest uppercase mb-2 block">
              SERVICE COMPARISON
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
              When to Consider Alternative Security Services
            </h2>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Mobile patrols deliver highly flexible, multi-site perimeter coverage. Depending on your facility risk profile, combining or transitioning to dedicated static guarding or alarm monitoring may be recommended.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 hover:border-[#1e40af]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#1e40af]/10 flex items-center justify-center text-[#1e40af] font-bold">
                  🛡️
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1628] text-base">Static Security Guarding</h3>
                  <p className="text-xs text-gray-500">For high-traffic or high-value premises</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                If your site requires continuous access management, active visitor log-in, or permanent physical presence, dedicated <Link href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guard services</Link> provide uninterrupted on-site intervention.
              </p>
              <Link href="/services/static-guard" className="text-xs font-bold text-[#1e40af] hover:underline flex items-center gap-1">
                Explore Static Guards →
              </Link>
            </div>

            <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 hover:border-[#1e40af]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#1e40af]/10 flex items-center justify-center text-[#1e40af] font-bold">
                  🔔
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1628] text-base">Alarm & Monitoring</h3>
                  <p className="text-xs text-gray-500">For instant automated signal dispatch</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Combine your mobile patrols with continuous <Link href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">alarm monitoring services</Link> so patrol units are dispatched immediately when sensors detect unauthorized entry.
              </p>
              <Link href="/services/alarm-monitoring" className="text-xs font-bold text-[#1e40af] hover:underline flex items-center gap-1">
                Explore Alarm Monitoring →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
              Mobile Patrol Security FAQs
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Answers to common questions regarding mobile vehicle security patrols and lock-up services in New Zealand.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-[#0a1628] text-base mb-2">How do GPS-tracked mobile patrols verify property visits?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our mobile security patrol vehicles are equipped with real-time GPS tracking and electronic checkpoint verification, providing clients with logged timestamps, arrival/departure records, and digital incident reports.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-[#0a1628] text-base mb-2">What happens during a mobile security lock-up service?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our mobile patrol officer arrives at your designated closing time, conducts a thorough perimeter scan, checks all entry doors and exterior windows, arms master security alarms, and ensures no unauthorized personnel remain on site.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-[#0a1628] text-base mb-2">What should a business prepare before requesting a mobile patrol proposal?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Provide details on your property boundaries, key access gates, preferred patrol frequency, lock-up timeframes, and specific high-risk inspection points (such as storage yards or rear emergency exits).
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-[#0a1628] text-base mb-2">What factors influence mobile patrol service pricing?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mobile patrol costs depend on the number of nightly checks required, property size, geographic location, and whether unlock/lock-up services or staff escort duties are included. Contact Atlas Security for a customized mobile patrol plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal SILO Links Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-[#0a1628]">Mobile Patrol Locations:</span>
              <Link href="/service-area/auckland" className="hover:text-[#1e40af] underline">Auckland Patrols</Link> |
              <Link href="/service-area/hamilton" className="hover:text-[#1e40af] underline">Hamilton Patrols</Link> |
              <Link href="/service-area/wellington" className="hover:text-[#1e40af] underline">Wellington Patrols</Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/blog/mobile-patrols-future-nz-security" className="hover:text-[#1e40af] underline">Mobile Patrol Guide</Link>
              <span>|</span>
              <Link href="/services/alarm-monitoring" className="hover:text-[#1e40af] font-semibold underline">Alarm Monitoring & Dispatch →</Link>
            </div>
          </div>
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
            <a href="tel:+64221993486" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded transition-colors duration-200">
              +64 22 199 3486
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
