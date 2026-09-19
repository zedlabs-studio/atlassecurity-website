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
  title: 'Static Guard Services',
  tagline: 'Professional, licensed security guard services from a trusted security company — on-site security personnel to protect your people, property and assets.',
  description: 'As a leading security company, our static guard services deliver dedicated, professional security personnel stationed at your premises for reliable site security. Whether you need a single security guard or a full security guards service team, our trained, NZ COA-certified officers maintain a visible, professional presence — managing access control and responding swiftly to incidents, day and night. It\'s one of our most requested security services for businesses across the region.',
  image: '/images/service-static-guard.webp',
  features: [
    'Trained & licensed security guards (NZ COA certified)',
    'Access control & visitor management',
    '24/7 professional security presence',
    'Regular security patrols',
    'Incident reporting & documentation',
    'Emergency response coordination',
    'CCTV monitoring support',
    'Key holding services',
    'Alarm response',
  ],
  benefits: [
    { icon: '👁️', title: 'Visible Deterrent', desc: 'A uniformed security guard presence significantly reduces the risk of theft, vandalism and unauthorised access to your site.' },
    { icon: '⚡', title: 'Immediate Response', desc: 'On-site security guards respond to incidents in real time — no waiting for a patrol vehicle to arrive.' },
    { icon: '📋', title: 'Detailed Reporting', desc: 'Every shift ends with a comprehensive security guard report, so you always know exactly what happened on your premises.' },
    { icon: '🤝', title: 'Customer Service', desc: 'Our trained security guards represent your brand professionally when greeting visitors and managing access control.' },
  ],
  process: [
    { step: '01', title: 'Site Assessment', desc: 'We visit your premises to carry out a thorough site security assessment, understanding your needs, risks and layout.' },
    { step: '02', title: 'Custom Plan', desc: 'We design a security plan tailored to your specific requirements and budget.' },
    { step: '03', title: 'Guard Deployment', desc: 'We assign and brief dedicated, trained security guards matched to your site requirements.' },
    { step: '04', title: 'Ongoing Review', desc: 'Regular reviews ensure your security guard services keep pace with your changing needs.' },
  ],
}

export default function StaticGuardClient() {
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

      <section className="py-24 bg-white" ref={detailRef}>
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

      {/* Operational Requirements & Deployment Guidance */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-[#f8f9fa] border border-gray-200 rounded-2xl p-8">
              <span className="text-[#1e40af] text-xs font-extrabold tracking-widest uppercase mb-2 block">
                SITE EVALUATION CRITERIA
              </span>
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-4">
                Site Requirements Influencing Static Security Deployment
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Static security guarding is most effective when site parameters require dedicated, unbroken physical oversight. Key operational factors include:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1e40af] font-bold">•</span>
                  <span><strong>Access Point Complexity:</strong> Multiple visitor turnstiles, loading dock gates, or contractor entry points that require active credential verification and <Link href="/blog/how-to-choose-coa-licensed-security-guard-nz" className="text-[#1e40af] font-semibold underline">COA-licensed guard standards</Link>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1e40af] font-bold">•</span>
                  <span><strong>High Visitor &amp; Tenant Volume:</strong> Lobbies in <Link href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland CBD</Link> or <Link href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington CBD</Link> office towers requiring concierge etiquette and badge logging.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1e40af] font-bold">•</span>
                  <span><strong>High-Value Laydown Areas:</strong> Civil work sites and <Link href="/services/construction-site-security" className="text-[#1e40af] font-semibold underline">construction developments</Link> storing uninstalled copper, equipment, or machinery overnight.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1e40af] font-bold">•</span>
                  <span><strong>Customer-Facing Loss Prevention:</strong> Busy <Link href="/services/retail-security" className="text-[#1e40af] font-semibold underline">retail store locations</Link> needing visible anti-shoplifting deterrence and staff closing escorts.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0a1628] text-white rounded-2xl p-8">
              <span className="text-[#3b82f6] text-xs font-extrabold tracking-widest uppercase mb-2 block">
                DEPLOYMENT PREPARATION
              </span>
              <h2 className="text-2xl font-extrabold text-white mb-4">
                What a Business Should Define Before Deployment
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                To ensure a seamless transition and effective security guard handover, property managers should establish clear operational post orders:
              </p>
              <ul className="space-y-3.5 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3b82f6] font-bold">1.</span>
                  <span><strong>Guard Scope &amp; Responsibilities:</strong> Clarify whether the officer handles lobby concierge duties, contractor badge issuing, or physical perimeter patrols.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3b82f6] font-bold">2.</span>
                  <span><strong>Access Rules &amp; Keyholder Logs:</strong> Define after-hours entry permissions, authorized tenant lists, and contractor sign-in registers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3b82f6] font-bold">3.</span>
                  <span><strong>Incident Escalation Matrix:</strong> Specify exact contact protocols for building managers, emergency services, and our 24/7 central dispatch.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3b82f6] font-bold">4.</span>
                  <span><strong>Shift Handover Procedures:</strong> Establish digital reporting expectations and shift handover logs between day and night personnel.</span>
                </li>
              </ul>
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
              While dedicated static guards provide the highest level of continuous physical deterrence and instant incident intervention, alternative or integrated models may better fit specific operational budgets or multi-site footprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 hover:border-[#1e40af]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#1e40af]/10 flex items-center justify-center text-[#1e40af] font-bold">
                  🚗
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1628] text-base">Mobile Patrol Security</h3>
                  <p className="text-xs text-gray-500">For multi-site or periodic perimeter checks</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                If your site does not require constant 24/7 guard placement, randomized <Link href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrol services</Link> offer cost-effective scheduled lock-ups, exterior inspections, and rapid alarm verification.
              </p>
              <Link href="/services/mobile-patrolling" className="text-xs font-bold text-[#1e40af] hover:underline flex items-center gap-1">
                Explore Mobile Patrols →
              </Link>
            </div>

            <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 hover:border-[#1e40af]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#1e40af]/10 flex items-center justify-center text-[#1e40af] font-bold">
                  🔔
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1628] text-base">Alarm & Monitoring</h3>
                  <p className="text-xs text-gray-500">For 24/7 automated threat detection</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                For premises needing automated intruder detection during closed hours, <Link href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">alarm monitoring services</Link> provide round-the-clock sensor oversight backed by rapid mobile guard response.
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
              Static Security Guard FAQs
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Common questions regarding our on-site static security guard deployments across New Zealand.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-[#0a1628] text-base mb-2">What industries do your static security guards protect?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We deploy static security guards across commercial office towers, industrial distribution yards, civil construction sites, retail shopping centers, and private event venues throughout Auckland, Hamilton, and Wellington.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-[#0a1628] text-base mb-2">Are all Atlas Security guards licensed in New Zealand?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yes, 100% of our static security guards hold active Certificates of Approval (COA) issued under the Private Security Personnel and Private Investigators Act 2010.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-[#0a1628] text-base mb-2">What information should a business provide when requesting static guard deployment?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To tailor your guard deployment effectively, specify your operating hours, key site access points, parking/gatehouse requirements, shift handover expectations, and whether concierge or contractor management duties are required.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-[#0a1628] text-base mb-2">What pricing factors determine static guard service costs?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Static security guarding costs depend on shift length, weekly coverage hours, site complexity, access control duties required, and whether specialized concierge or event duties are needed. Contact our team for a site-specific risk audit and transparent proposal.
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
              <span className="font-bold text-[#0a1628]">Static Guarding Hubs:</span>
              <Link href="/service-area/auckland" className="hover:text-[#1e40af] underline">Auckland Static Guards</Link> |
              <Link href="/service-area/hamilton" className="hover:text-[#1e40af] underline">Hamilton Static Guards</Link> |
              <Link href="/service-area/wellington" className="hover:text-[#1e40af] underline">Wellington Guards</Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/blog/static-guards-vs-mobile-patrols-nz" className="hover:text-[#1e40af] underline">Static vs Mobile Patrol Guide</Link>
              <span>|</span>
              <Link href="/services/commercial-security" className="hover:text-[#1e40af] font-semibold underline">Commercial Security →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e40af] py-14">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Ready to get started?</h2>
          <p className="text-blue-200 mb-7">Contact us today for a free security site assessment and custom quote.</p>
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
