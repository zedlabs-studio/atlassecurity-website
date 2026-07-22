'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, stagger, cardVariant, viewport } from '@/lib/motion'

const testimonials = [
  {
    name: 'Matthew',
    role: 'Emergency Housing Manager',
    location: 'Hamilton',
    rating: 5,
    message:
      'Atlas Security has been protecting our Emergency Housing for over 6 month. Professional, reliable, and always responsive. Could not ask for better service.',
  },
  {
    name: 'Sarah Thompson',
    role: 'Retail Owner',
    location: 'Cambridge',
    rating: 5,
    message:
      'The mobile patrol team is excellent. We have had zero incidents since switching to Atlas. Highly recommend to any NZ business owner.',
  },
  {
    name: 'Rachel Parker',
    role: 'Property Manager',
    location: 'Cambridge',
    rating: 5,
    message:
      'Very professional team. They responded within minutes when our alarm triggered at 2am. That kind of dedication is rare.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? '#f59e0b' : 'none'}
          stroke="#f59e0b"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="relative bg-[#0a1628] py-24 overflow-hidden">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Large faint quote mark behind section */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-8 left-1/2 -translate-x-1/2
                   text-[260px] font-black leading-none text-white/2.5"
      >
        &ldquo;
      </span>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p className="text-[#3b5fd9] font-semibold text-[11px] uppercase tracking-[0.14em] mb-3">
            Client Feedback
          </p>
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <div className="w-14 h-0.75 bg-[#1e40af] mx-auto rounded" />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="group relative flex flex-col bg-white/4 hover:bg-white/[0.07]
                         border border-white/10 hover:border-[#1e40af]/50
                         rounded-2xl p-7 transition-all duration-300
                         hover:shadow-[0_8px_32px_-8px_rgba(30,64,175,0.3)]"
            >
              {/* Top accent line on hover */}
              <span className="absolute top-0 left-6 right-6 h-0.5 bg-[#1e40af] rounded-b
                               scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              {/* Rating */}
              <div className="mb-5">
                <Stars count={t.rating} />
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-[1.8] flex-1 mb-7">
                &ldquo;{t.message}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-white/8 mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e40af] flex items-center justify-center
                                text-white font-bold text-sm shrink-0 ring-2 ring-[#1e40af]/30">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm leading-tight">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.role}, {t.location}</p>
                </div>
                {/* Verified badge */}
                <div className="flex items-center gap-1 bg-[#1e40af]/15 border border-[#1e40af]/25
                                px-2.5 py-1 rounded-full shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3b5fd9" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#3b5fd9] text-[10px] font-semibold">Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall rating summary */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6
                     mt-12 pt-10 border-t border-white/8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4">
            <span className="text-5xl font-extrabold text-white tracking-tight">5.0</span>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 text-xs">Average rating from all clients</p>
            </div>
          </div>

          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-[#1e40af]
                       text-white hover:text-[#3b5fd9] font-semibold px-6 py-3 rounded-lg
                       transition-all duration-200 text-sm group/btn"
          >
            Read More Reviews
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover/btn:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}