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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}
const photoVariant: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-[#0a1628] py-16 lg:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
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
  const storyRef   = useRef(null)
  const valuesRef  = useRef(null)
  const galleryRef = useRef(null)
  const teamRef    = useRef(null)

  const storyInView   = useInView(storyRef,   { once: true, margin: '-80px' })
  const valuesInView  = useInView(valuesRef,  { once: true, margin: '-80px' })
  const galleryInView = useInView(galleryRef, { once: true, margin: '-80px' })
  const teamInView    = useInView(teamRef,    { once: true, margin: '-80px' })

  const values = [
    { icon: '🛡️', title: 'Integrity',         desc: 'We operate with complete transparency and honesty in everything we do.' },
    { icon: '⚡',  title: 'Responsiveness',    desc: 'Fast, decisive action when it matters most — day or night.' },
    { icon: '🤝', title: 'Partnership',        desc: 'We build long-term relationships, not just contracts.' },
    { icon: '🏆', title: 'Excellence',         desc: 'We hold ourselves to the highest standards of professional security.' },
    { icon: '🇳🇿', title: 'Local Commitment', desc: 'NZ owned and operated — we reinvest in the communities we protect.' },
    { icon: '📋', title: 'Compliance',         desc: 'Fully licensed, insured, and compliant with all NZ security regulations.' },
  ]

  return (
    <main className="overflow-x-hidden">
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
              className="flex-1 w-full min-w-0"
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
              className="flex-1 w-full min-w-0"
              initial="hidden"
              animate={storyInView ? 'visible' : 'hidden'}
              variants={fadeRight}
            >
              <div className="relative pt-8 pb-10 px-6 sm:px-8">
                <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96">
                  <Image
                    src="/images/team/guards-car-front.jpeg"
                    alt="Atlas Security team with patrol vehicle"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Bottom-left stat */}
                <div className="absolute bottom-0 left-0 bg-[#1e40af] rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-xl">
                  <p className="text-white text-2xl sm:text-3xl font-extrabold">70+</p>
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

      {/* ── Photo Gallery ── */}
      <section className="py-16 lg:py-24 bg-white" ref={galleryRef}>
        <div className="container mx-auto px-6 lg:px-16">

          <motion.div
            className="text-center mb-10 lg:mb-14"
            initial="hidden"
            animate={galleryInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">In the Field</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Meet the Team</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Our guards are trained professionals — on patrol every night to keep your business safe.
            </p>
            <div className="w-14 h-1 bg-[#1e40af] mx-auto mt-4 rounded" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
            initial="hidden"
            animate={galleryInView ? 'visible' : 'hidden'}
            variants={stagger}
          >

            {/* Photo 1 — large feature (2 cols × 2 rows on lg) */}
            <motion.div
              variants={photoVariant}
              className="relative overflow-hidden rounded-2xl group
                         h-72 sm:h-80
                         lg:col-span-2 lg:row-span-2 lg:h-130"
            >
              <Image
                src="/images/team/guards-car-front.jpeg"
                alt="Atlas Security guards with patrol vehicle"
                fill
                className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block bg-[#1e40af] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Mobile Patrol Unit
                </span>
              </div>
            </motion.div>

            {/* Photo 2 — walking shot */}
            <motion.div
              variants={photoVariant}
              className="relative overflow-hidden rounded-2xl group h-60 lg:h-63"
            >
              <Image
                src="/images/team/guards-walking.jpeg"
                alt="Atlas Security guards on patrol"
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block bg-[#1e40af] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  On the Ground
                </span>
              </div>
            </motion.div>

            {/* Photo 3 — radio in car */}
            <motion.div
              variants={photoVariant}
              className="relative overflow-hidden rounded-2xl group h-60 lg:h-63"
            >
              <Image
                src="/images/team/guards-radio.jpeg"
                alt="Atlas Security guards in patrol vehicle with radio"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block bg-[#1e40af] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  24/7 Response
                </span>
              </div>
            </motion.div>

            {/* Photo 4 — patrol car rear (2 cols on lg) */}
            <motion.div
              variants={photoVariant}
              //className="relative overflow-hidden rounded-2xl group h-60 lg:col-span-2 lg:h-64"
              className="relative overflow-hidden rounded-2xl group h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
            >
              <Image
                src="/images/team/guards-car-rear.jpeg"
                alt="Atlas Security guards behind patrol vehicle"
                fill
                className="object-cover object-[center_60%] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block bg-[#1e40af] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Atlas Patrol Team
                </span>
              </div>
            </motion.div>

            {/* Photo 5 — portrait */}
            <motion.div
              variants={photoVariant}
              className="relative overflow-hidden rounded-2xl group h-8 0 lg:h-64"
            >
              <Image
                src="/images/team/guards-portrait.jpeg"
                alt="Atlas Security guards with radio equipment"
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block bg-[#1e40af] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Licensed Professionals
                </span>
              </div>
            </motion.div>

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
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}