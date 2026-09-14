'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LocationInfo } from '@/lib/locationData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function CityServiceAreaClient({ location }: { location: LocationInfo }) {
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
              <Link href="/service-area" className="hover:text-white transition-colors">Service Areas</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{location.name}</span>
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl leading-tight">
              Security Guard & Patrol Services in {location.name}
            </h1>
            <p className="text-gray-300 mt-4 text-base lg:text-lg max-w-2xl leading-relaxed">
              {location.heroDescription}
            </p>
            <div className="w-14 h-1 bg-[#1e40af] rounded mt-6" />

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
              >
                Request Free {location.name} Quote
              </Link>
              <a
                href="tel:0800285277"
                className="border border-white/20 hover:border-white/40 text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm"
              >
                Call 0800 285 277
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Overview Section */}
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
                LOCAL SECURITY COVERAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] mb-4">
                Tailored Security Guarding & Patrols for {location.name} Premises
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                {location.overview}
              </p>

              <h3 className="font-bold text-[#0a1628] text-base mb-3">Key Suburbs & Sectors Covered in {location.name}:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {location.keySuburbs.map((suburb, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <svg className="w-4 h-4 text-[#1e40af] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {suburb}
                  </li>
                ))}
              </ul>

              <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-[#0a1628] text-sm">Need security for a property in {location.name}?</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Contact our 24/7 team for a customized site evaluation.</p>
                </div>
                <Link
                  href="/contact"
                  className="bg-[#0a1628] hover:bg-[#1e40af] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  Get Consultation
                </Link>
              </div>
            </motion.div>

            {/* Sidebar Cards */}
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="bg-[#0a1628] text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#1e40af] rounded-full filter blur-[60px] opacity-20 pointer-events-none" />
                <h3 className="text-xl font-extrabold mb-3">Why Choose Atlas Security in {location.name}?</h3>
                <ul className="space-y-3.5 text-sm text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-[#1e40af] font-bold">•</span>
                    <span><strong>100% NZ COA Licensed:</strong> Fully qualified officers complying with PSPLA guidelines.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#1e40af] font-bold">•</span>
                    <span><strong>GPS Patrol Verification:</strong> Real-time electronic proof of attendance and site checks.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#1e40af] font-bold">•</span>
                    <span><strong>24/7 Rapid Response:</strong> Local dispatch center ready for alarm triggers at any hour.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Provided Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#1e40af] text-xs font-extrabold tracking-widest uppercase mb-2 block">
              OUR SERVICES IN {location.name.toUpperCase()}
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1628]">
              Comprehensive Protection Solutions
            </h2>
            <p className="text-gray-600 mt-3 text-sm lg:text-base">
              Explore our core security services available across {location.name} and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {location.servicesProvided.map((service, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-7 hover:border-[#1e40af]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                </div>
                <Link
                  href={service.link}
                  className="text-[#1e40af] hover:text-[#0a1628] font-bold text-sm flex items-center gap-1.5 transition-colors group"
                >
                  Learn More About {service.title}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with FAQ Schema Support */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
              Frequently Asked Questions in {location.name}
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Answers to common questions about our security operations in {location.name}.
            </p>
          </div>

          <div className="space-y-4">
            {location.faqs.map((faq, index) => (
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

      {/* Internal Navigation Silo */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0a1628]">Other Service Areas:</span>
              <Link href="/service-area/auckland" className="hover:text-[#1e40af] underline">Auckland</Link> |
              <Link href="/service-area/hamilton" className="hover:text-[#1e40af] underline">Hamilton</Link> |
              <Link href="/service-area/wellington" className="hover:text-[#1e40af] underline">Wellington</Link>
            </div>
            <div>
              <Link href="/service-area" className="hover:text-[#1e40af] font-semibold underline">View All 16+ Cities Covered →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
