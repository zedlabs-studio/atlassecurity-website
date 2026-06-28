'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MagneticButton } from './MagneticButton'

const EASE = [0.16, 1, 0.3, 1] as const

/**
 * Full-bleed hero: the patrol photo IS the canvas, not a side panel.
 * A layered scrim (left-to-right dark gradient + bottom vignette + a
 * thin vertical "scan" sweep on load) keeps text legible while tying
 * the motion to the surveillance/security subject matter rather than
 * using a generic fade — this is the one deliberate risk per the brief.
 */
export default function Hero() {
  return (
    <section className="relative h-screen min-h-190 w-full overflow-hidden bg-[#05090f]">
      {/* Background photo — fills the entire hero */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car-swift.png"
          alt="Atlas Security guard on patrol"
          fill
          priority
          className="object-cover object-[65%_center]"
        />
      </div>

      {/* Scrim system — legibility without flattening the photo */}
      <div className="absolute inset-0 bg-linear-to-r from-[#05090f] via-[#05090f]/75 to-[#05090f]/25" />
      <div className="absolute inset-0 bg-linear-to-t from-[#05090f] via-[#05090f]/10 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-[#05090f]/80 via-transparent to-transparent h-48" />

      {/* Fine grid, subtle — reads as "monitored space" not decoration */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* One-time vertical scan sweep on load — a CCTV-sweep motif, thematically
          justified rather than decorative motion for its own sake */}
      <motion.div
        className="absolute inset-y-0 w-px bg-linear-to-b from-transparent via-[#3b5fd9]/70 to-transparent"
        initial={{ left: '0%', opacity: 0 }}
        animate={{ left: '100%', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.8, delay: 0.3, ease: 'easeInOut' }}
      />

      {/* Live status chip — top right, feels like an overlay HUD element */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: EASE }}
        className="absolute top-24 right-6 lg:right-16 z-20 hidden sm:flex items-center gap-2 bg-white/6 backdrop-blur-md border border-white/10 rounded-full px-4 py-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <p className="text-white/90 text-xs font-medium tracking-wide">24/7 ACTIVE MONITORING</p>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6 lg:px-16 pt-20 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="flex items-center gap-3 text-[#7b94e8] font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-6"
        >
          <span className="w-10 h-px bg-[#7b94e8]" />
          New Zealand&apos;s Trusted Security
        </motion.p>

        <h1 className="font-extrabold text-white leading-[0.95] tracking-tight text-[clamp(2.75rem,7.5vw,6.5rem)] max-w-4xl">
          <ScanLine text="YOUR SAFETY." delay={0.6} />
          <span className="block text-[#3b5fd9]">
            <ScanLine text="OUR MISSION." delay={0.85} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25, ease: EASE }}
          className="mt-7 text-gray-300 text-base sm:text-lg max-w-md leading-relaxed"
        >
          Professional, licensed, and always on. Atlas Security protects what matters most — across every region of New Zealand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <MagneticButton
            href="/services"
            className="group inline-flex items-center gap-2.5 bg-[#1e40af] hover:bg-[#2747c4] text-white font-bold text-sm tracking-wide px-9 py-4 rounded-md transition-colors duration-200 shadow-[0_0_40px_-8px_rgba(30,64,175,0.7)]"
          >
            OUR SERVICES
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </MagneticButton>

          <TrustRow />
        </motion.div>
      </div>

      {/* Scroll cue — replaces the old watch-video row, signals "more below" */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          className="w-px h-10 bg-linear-to-b from-white/60 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}

function TrustRow() {
  return (
    <motion.div className="flex items-center gap-4">
      <div className="flex -space-x-2">
        {['bg-blue-500', 'bg-blue-700', 'bg-blue-900'].map((c, i) => (
          <div key={i} className={`w-9 h-9 rounded-full ${c} border-2 border-[#05090f]`} />
        ))}
      </div>
      <p className="text-gray-300 text-sm">
        <span className="text-white font-semibold">70+</span> businesses protected
      </p>
    </motion.div>
  )
}

/**
 * Headline line that reveals via a clip-path wipe (left→right) rather than
 * a fade/translate — reads as a shutter/scan opening, echoing the CCTV
 * sweep line above instead of a generic word-stagger.
 */
function ScanLine({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
      >
        {text}
      </motion.span>
    </span>
  )
}