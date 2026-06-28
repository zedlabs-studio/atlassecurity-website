'use client'

import Link from 'next/link'
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-[#0a1628] py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e40af] rounded-full filter blur-[120px] opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-gray-400 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{title}</span>
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">{title}</h1>
          {subtitle && <p className="text-gray-300 mt-3 text-base lg:text-lg max-w-xl">{subtitle}</p>}
          <div className="w-14 h-1 bg-[#1e40af] rounded mt-5" />
        </motion.div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  const storyRef  = useRef(null)
  const valuesRef = useRef(null)
  const teamRef   = useRef(null)
  const storyInView  = useInView(storyRef,  { once: true, margin: '-80px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' })
  const teamInView   = useInView(teamRef,   { once: true, margin: '-80px' })

  const values = [
    { icon: '🛡️', title: 'Integrity',         desc: 'We operate with complete transparency and honesty in everything we do.' },
    { icon: '⚡', title: 'Responsiveness',     desc: 'Fast, decisive action when it matters most — day or night.' },
    { icon: '🤝', title: 'Partnership',        desc: 'We build long-term relationships, not just contracts.' },
    { icon: '🏆', title: 'Excellence',         desc: 'We hold ourselves to the highest standards of professional security.' },
    { icon: '🇳🇿', title: 'Local Commitment', desc: 'NZ owned and operated — we reinvest in the communities we protect.' },
    { icon: '📋', title: 'Compliance',         desc: 'Fully licensed, insured, and compliant with all NZ security regulations.' },
  ]

  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="New Zealand's trusted security partner — professional, reliable, and locally owned."
      />

      {/* ── Company Story ── */}
      <section className="py-16 lg:py-24 bg-white" ref={storyRef}>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Text */}
            <motion.div
              className="flex-1 w-full"
              initial="hidden"
              animate={storyInView ? 'visible' : 'hidden'}
              variants={fadeLeft}
            >
              <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-[#1e40af]" /> Our Story
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] mb-5 leading-tight">
                Built on Trust.<br />Driven by Purpose.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Atlas Security NZ was founded with a single mission — to provide New Zealand businesses
                and communities with security services they can genuinely rely on. We saw a gap in the
                market for a company that combined professional-grade security with a personal, responsive approach.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                As a proudly NZ owned and operated business, we understand the local landscape — the people,
                the communities, and the unique challenges that NZ businesses face. Every guard we deploy is
                locally trained, licensed, and background checked.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Today, Atlas Security protects hundreds of businesses across New Zealand, from Auckland retail
                stores to Wellington construction sites. Our growth is built on one thing: results that speak for themselves.
              </p>
            </motion.div>

            {/* Image card */}
            <motion.div
              className="flex-1 w-full"
              initial="hidden"
              animate={storyInView ? 'visible' : 'hidden'}
              variants={fadeRight}
            >
              {/* Extra padding so floating cards don't clip */}
              <div className="relative pt-8 pb-8 px-6 sm:pt-8 sm:pb-10 sm:px-8">
                <div className="bg-[#0a1628] rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                  {/* Replace with real image */}
                  <div className="text-center text-white/20">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-3">
                      <path d="M21 19v1H3v-1l2-2V11c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 4 0v.29c2.97.88 5 3.61 5 6.71v6l2 2zM12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z"/>
                    </svg>
                    <p className="text-sm">Team / Office Image</p>
                  </div>
                </div>

                {/* Bottom-left stat */}
                <div className="absolute bottom-0 left-0 bg-[#1e40af] rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-xl">
                  <p className="text-white text-2xl sm:text-3xl font-extrabold">50+</p>
                  <p className="text-blue-200 text-xs sm:text-sm">Businesses Protected</p>
                </div>

                {/* Top-right stat */}
                <div className="absolute top-0 right-0 bg-white rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-xl border border-gray-100">
                  <p className="text-[#0a1628] text-2xl sm:text-3xl font-extrabold">24/7</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Always On Call</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]" ref={valuesRef}>
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            className="text-center mb-10 lg:mb-14"
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Our Core Values</h2>
            <div className="w-14 h-1 bg-[#1e40af] mx-auto mt-4 rounded" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                className="bg-white rounded-xl p-6 lg:p-7 border border-gray-100
                           hover:border-[#1e40af]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#0a1628] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── NZ Owned Banner ── */}
      <section className="py-14 lg:py-16 bg-[#0a1628]" ref={teamRef}>
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">Proudly Local</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">NZ Owned & Operated</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 text-sm sm:text-base">
              Every dollar you spend with Atlas Security stays in New Zealand. We hire locally, train locally,
              and reinvest in the communities we protect. When you choose Atlas, you choose a company that
              genuinely cares about this country.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white
                         font-bold px-6 sm:px-8 py-3 sm:py-4 rounded text-sm sm:text-base
                         transition-all duration-200 hover:shadow-lg hover:shadow-[#1e40af]/30 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}