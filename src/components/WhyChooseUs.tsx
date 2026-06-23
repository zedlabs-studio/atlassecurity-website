'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, stagger, cardVariant, viewport } from '@/lib/motion'
import { MagneticButton } from '@/components/MagneticButton'

const points = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'NZ Owned & Operated',
    desc: 'Locally owned, committed to New Zealand communities and businesses.',
    featured: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
        <path d="M16 3.5l1.5 1.5L20 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Licensed & Certified',
    desc: 'All guards hold current NZ Certificate of Approval — no exceptions.',
    featured: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" strokeLinecap="round" />
        <path d="M22 12h-2M4 12H2M12 2v2M12 20v2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Rapid Response',
    desc: 'Fast deployment and alarm response across all coverage areas.',
    featured: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round" />
        <path d="M20 3v6h-6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Tailored Solutions',
    desc: 'Security plans designed around your specific needs and budget.',
    featured: false,
  },
]

const accentStats = [
  { num: '10+',  label: 'Years active'  },
  { num: '500+', label: 'Sites secured' },
  { num: '24/7', label: 'Response'      },
]

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">

          {/* ── Left — copy + CTA ── */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeLeft}
          >
            <p className="flex items-center gap-2.5 text-[#1e40af] font-semibold text-[11px] uppercase tracking-[0.14em] mb-5">
              <span className="w-7 h-px bg-[#1e40af]" />
              Why Atlas Security
            </p>

            <h2 className="text-[36px] lg:text-[40px] font-extrabold text-[#0a1628] leading-[1.1] tracking-tight mb-5">
              New Zealand's<br />
              Trusted Security<br />
              Partner
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed max-w-95 mb-9">
              With years of experience protecting NZ businesses, we combine professional expertise
              with local knowledge to deliver security solutions you can count on — day and night.
            </p>

            <MagneticButton
              href="/about"
              className="group inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-7 py-3.5 rounded transition-colors duration-200 hover:shadow-lg hover:shadow-[#1e40af]/30"
            >
              About Us
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticButton>

            {/* Accent stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-gray-100">
              {accentStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="text-[26px] font-extrabold text-[#0a1628] tracking-tight leading-none">
                    {s.num}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.08em] text-gray-400 font-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right — feature cards ── */}
          <motion.div
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            {points.map((p) => (
              <motion.div
                key={p.title}
                variants={cardVariant}
                className={`group relative overflow-hidden rounded-xl p-6 border transition-all duration-300
                  ${p.featured
                    ? 'bg-[#0a1628] border-[#0a1628] hover:border-[#1e40af]'
                    : 'bg-[#f8f9fa] border-gray-100 hover:border-[#1e40af]/25 hover:shadow-[0_6px_24px_-6px_rgba(30,64,175,0.12)]'
                  }`}
              >
                {/* Slide-in accent line */}
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#1e40af] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-xl" />

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-all duration-300
                    ${p.featured
                      ? 'bg-[#3b5fd9]/20 text-[#93a8f4] group-hover:bg-[#3b5fd9] group-hover:text-white'
                      : 'bg-[#1e40af]/8 text-[#1e40af] group-hover:bg-[#1e40af] group-hover:text-white'
                    }`}
                >
                  {p.icon}
                </div>

                <p className={`font-bold text-sm mb-2 ${p.featured ? 'text-white' : 'text-[#0a1628]'}`}>
                  {p.title}
                </p>
                <p className={`text-xs leading-relaxed ${p.featured ? 'text-white/40' : 'text-gray-400'}`}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}