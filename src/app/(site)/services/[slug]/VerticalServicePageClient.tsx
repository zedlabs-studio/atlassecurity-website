'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { VerticalInfo } from '@/lib/verticalData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function VerticalServicePageClient({ vertical }: { vertical: VerticalInfo }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a1628] py-20 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e40af] rounded-full filter blur-[120px] opacity-10 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-gray-400 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{vertical.name}</span>
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl leading-tight">
              {vertical.name} in New Zealand
            </h1>
            <p className="text-gray-300 mt-4 text-base lg:text-lg max-w-2xl leading-relaxed">
              {vertical.heroDescription}
            </p>
            <div className="w-14 h-1 bg-[#1e40af] rounded mt-6" />

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
              >
                Request {vertical.name} Proposal
              </Link>
              <a
                href="tel:+64221993486"
                className="border border-white/20 hover:border-white/40 text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm"
              >
                Call +64 22 199 3486
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges & Overview Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-[#1e40af] text-xs font-extrabold tracking-widest uppercase mb-2 block">
                SPECIALIZED INDUSTRY PROTECTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] mb-4">
                Tailored Security Solutions for {vertical.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                {vertical.solutionOverview}
              </p>

              <h3 className="font-bold text-[#0a1628] text-base mb-3">Key Industry Security Challenges We Address:</h3>
              <ul className="space-y-3 mb-8">
                {vertical.industryChallenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#1e40af]/10 text-[#1e40af] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    {challenge}
                  </li>
                ))}
              </ul>

              {/* Dynamic Industry-Specific Operational Breakdown */}
              {vertical.slug === 'construction-site-security' && (
                <div className="mt-8 space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
                    <h3 className="font-bold text-[#0a1628] text-base mb-3">Construction Site Security Planning &amp; Control Points</h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
                      Effective construction site security coordinates physical guarding, perimeter barriers, and after-hours inspections across critical control points:
                    </p>
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li>• <strong>Main Entrance Gates:</strong> Managing contractor sign-ins, delivery logging, and photo ID safety inductions.</li>
                      <li>• <strong>Material Staging Bays:</strong> Securing copper wiring, plumbing fittings, and timber laydown areas with illuminated LED floodlighting and <Link href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static guards</Link>.</li>
                      <li>• <strong>Plant &amp; Tool Vaults:</strong> Immobilizing heavy machinery, locking hand tools in steel job-site containers, and conducting night-time <Link href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrol checks</Link>.</li>
                    </ul>
                  </div>

                  <div className="bg-[#0a1628] text-white rounded-xl p-6">
                    <h3 className="font-bold text-white text-base mb-3">Security Controls by Construction Stage</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
                      <div>
                        <strong className="text-[#3b82f6] block mb-1">1. Site Setup &amp; Groundwork</strong>
                        <span>Boundary hoarding installation, gate locking, temporary floodlighting, and plant machinery immobilization.</span>
                      </div>
                      <div>
                        <strong className="text-[#3b82f6] block mb-1">2. Active Build &amp; Fit-Out</strong>
                        <span>Contractor sign-in logs, copper/tool vault locking, nightly <Link href="/services/static-guard" className="text-[#3b82f6] underline">static guard placement</Link>, and gate control.</span>
                      </div>
                      <div>
                        <strong className="text-[#3b82f6] block mb-1">3. Completion &amp; Handover</strong>
                        <span>Final lock-up inspections, appliance protection, and pre-occupancy <Link href="/services/mobile-patrolling" className="text-[#3b82f6] underline">mobile vehicle sweeps</Link>.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {vertical.slug === 'retail-security' && (
                <div className="mt-8 space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
                    <h3 className="font-bold text-[#0a1628] text-base mb-3">Retail Security Across the Operating Day</h3>
                    <div className="space-y-3 text-xs text-gray-700">
                      <div>
                        <strong className="text-[#0a1628] font-bold">1. Opening Phase:</strong> Staff arrival checks, store access verification, and pre-trading floor sweeps.
                      </div>
                      <div>
                        <strong className="text-[#0a1628] font-bold">2. Operating Hours:</strong> Customer-facing concierge presence, active loss prevention, high-risk display monitoring, and staff safety.
                      </div>
                      <div>
                        <strong className="text-[#0a1628] font-bold">3. Closing &amp; After Hours:</strong> Register lock-up support, staff vehicle escorts, alarm arming, and 24/7 central <Link href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">alarm monitoring</Link>.
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0a1628] text-white rounded-xl p-6">
                    <h3 className="font-bold text-white text-base mb-3">Integrated Retail Loss Prevention Components</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
                      <div>
                        <strong className="text-[#3b82f6] block mb-1">Visible Guard Presence</strong>
                        <span>Uniformed <Link href="/services/static-guard" className="text-[#3b82f6] underline">retail security guards</Link> greeting customers and deterring opportunist shoplifting.</span>
                      </div>
                      <div>
                        <strong className="text-[#3b82f6] block mb-1">Floor Procedures</strong>
                        <span>Attentive customer engagement, fitting room garment audits, and high-shrink item display locks.</span>
                      </div>
                      <div>
                        <strong className="text-[#3b82f6] block mb-1">After-Hours Technology</strong>
                        <span>CCTV motion alerts connected to 24/7 <Link href="/services/alarm-monitoring" className="text-[#3b82f6] underline">alarm monitoring</Link> for instant signal dispatch.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {vertical.slug === 'commercial-security' && (
                <div className="mt-8 space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
                    <h3 className="font-bold text-[#0a1628] text-base mb-3">Commercial Building Security by Operating Period &amp; Multi-Tenant Setup</h3>
                    <div className="space-y-3 text-xs text-gray-700">
                      <div>
                        <strong className="text-[#0a1628] font-bold">Normal Trading Hours:</strong> Front-desk lobby concierge, tenant keycard management, contractor badge issuing, and shared lobby oversight.
                      </div>
                      <div>
                        <strong className="text-[#0a1628] font-bold">Closing Phase:</strong> Floor-by-floor perimeter checks, contractor departure verification, basement garage roller door securing, and lock-up.
                      </div>
                      <div>
                        <strong className="text-[#0a1628] font-bold">After Hours:</strong> Inspection of vacant floors, server room checks, 24/7 intruder alarm monitoring, and <Link href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrol sweeps</Link>.
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0a1628] text-white rounded-xl p-6">
                    <h3 className="font-bold text-white text-base mb-3">Commercial Security by Building Zone</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
                      <div>
                        <strong className="text-[#3b82f6] block mb-1">Main Lobby &amp; Elevators</strong>
                        <span>Lobby concierge guards, visitor badge logging, and turnstile access control management.</span>
                      </div>
                      <div>
                        <strong className="text-[#3b82f6] block mb-1">Loading Docks &amp; Garages</strong>
                        <span>Basement vehicle roller gate verification, waste skip locks, and driver deliveries.</span>
                      </div>
                      <div>
                        <strong className="text-[#3b82f6] block mb-1">Vacant Floors &amp; Server Rooms</strong>
                        <span>Mechanical plant checks, server rack locks, and night-time <Link href="/services/mobile-patrolling" className="text-[#3b82f6] underline">mobile patrol sweeps</Link>.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Sidebar CTA */}
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="bg-[#0a1628] text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#1e40af] rounded-full filter blur-[60px] opacity-20 pointer-events-none" />
                <h3 className="text-xl font-extrabold mb-3">The Atlas Security Advantage</h3>
                <ul className="space-y-3.5 text-sm text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-[#1e40af] font-bold">•</span>
                    <span><strong>100% NZ COA Licensed:</strong> Fully qualified officers complying with PSPLA standards.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#1e40af] font-bold">•</span>
                    <span><strong>GPS Verification:</strong> Real-time electronic proof of patrol checks and guard sign-ins.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#1e40af] font-bold">•</span>
                    <span><strong>24/7 Rapid Response:</strong> Local dispatch center ready for incident alerts at any hour.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operational Security Delivery Process */}
      <section className="py-16 bg-[#0a1628] text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#3b82f6] text-xs font-extrabold tracking-widest uppercase mb-2 block">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How Atlas Security Delivers {vertical.name}
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Our structured 4-step security process ensures complete accountability, rapid incident escalation, and seamless service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-9 h-9 rounded-full bg-[#1e40af] text-white font-bold flex items-center justify-center text-sm mb-4">1</div>
              <h3 className="font-bold text-white text-base mb-2">Confidential Site Risk Audit</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Evaluation of site layout, access points, vulnerable assets, and high-risk hours to craft custom post orders.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-9 h-9 rounded-full bg-[#1e40af] text-white font-bold flex items-center justify-center text-sm mb-4">2</div>
              <h3 className="font-bold text-white text-base mb-2">COA Guard Deployment</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Deployment of fully licensed, background-checked guards with sector-specific post orders and emergency protocols.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-9 h-9 rounded-full bg-[#1e40af] text-white font-bold flex items-center justify-center text-sm mb-4">3</div>
              <h3 className="font-bold text-white text-base mb-2">Digital Patrol Verification</h3>
              <p className="text-gray-400 text-xs leading-relaxed">GPS patrol logging and electronic checkpoint sign-ins provide verifiable real-time proof of site presence.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-9 h-9 rounded-full bg-[#1e40af] text-white font-bold flex items-center justify-center text-sm mb-4">4</div>
              <h3 className="font-bold text-white text-base mb-2">24/7 Control Center Support</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Direct line to our 24/7 dispatch operations for immediate incident escalation, backup patrol dispatch, or emergency response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Mapping Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#1e40af] text-xs font-extrabold tracking-widest uppercase mb-2 block">
              INTEGRATED SECURITY SERVICES
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1628]">
              Core Services Supporting {vertical.name}
            </h2>
            <p className="text-gray-600 mt-3 text-sm lg:text-base">
              We combine physical static guards, mobile vehicle patrols, and electronic monitoring to deliver complete coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vertical.coreSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-7 hover:border-[#1e40af]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{solution.description}</p>
                </div>
                <Link
                  href={solution.link}
                  className="text-[#1e40af] hover:text-[#0a1628] font-bold text-sm flex items-center gap-1.5 transition-colors group"
                >
                  Learn More About {solution.title}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Answers to common questions regarding {vertical.name.toLowerCase()} in New Zealand.
            </p>
          </div>

          <div className="space-y-4">
            {vertical.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-bold text-[#0a1628] flex justify-between items-center text-sm lg:text-base hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-[#1e40af] text-xl font-normal ml-4">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SILO Links to Local Service Areas & Supporting Resources */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0a1628]">{vertical.name} Coverage:</span>
              <Link href="/service-area/auckland" className="hover:text-[#1e40af] underline">Auckland</Link> |
              <Link href="/service-area/hamilton" className="hover:text-[#1e40af] underline">Hamilton</Link> |
              <Link href="/service-area/wellington" className="hover:text-[#1e40af] underline">Wellington</Link>
            </div>
            <div className="flex items-center gap-3">
              {vertical.slug === 'construction-site-security' && (
                <Link href="/blog/construction-site-theft-prevention-nz" className="hover:text-[#1e40af] font-semibold underline">Construction Theft Guide →</Link>
              )}
              {vertical.slug === 'retail-security' && (
                <Link href="/blog/retail-loss-prevention-nz-stores" className="hover:text-[#1e40af] font-semibold underline">Retail Loss Prevention Guide →</Link>
              )}
              {vertical.slug === 'commercial-security' && (
                <Link href="/blog/commercial-building-after-hours-security-checklist" className="hover:text-[#1e40af] font-semibold underline">Commercial Security Checklist →</Link>
              )}
              <span>|</span>
              <Link href="/services" className="hover:text-[#1e40af] font-semibold underline">Explore All Security Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
