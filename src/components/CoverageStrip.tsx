'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/motion'

const regions = [
  { name: 'Hamilton',     type: 'Metro' },
  { name: 'Cambridge',    type: 'City'  },
  { name: 'Te Awamutu',   type: 'City'  },
  { name: 'Huntly',       type: 'Town'  },
  { name: 'Ngaruawahia',  type: 'Town'  },
  { name: 'Morrinsville', type: 'Town'  },
]

const stats = [
  { num: '6+',   label: 'Towns'    },
  { num: '24/7', label: 'Response' },
  { num: 'NZ',   label: 'Licensed' },
]

function NZSilhouette() {
  return (
    <svg
      width="110"
      height="170"
      viewBox="0 0 110 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M72 4 C78 8 86 18 88 30 C90 42 84 52 80 60 C76 68 70 74 68 82
           C66 90 70 96 68 104 C66 112 58 120 50 124 C42 128 34 126 28 120
           C22 114 20 104 22 96 C24 88 32 84 36 76 C40 68 38 58 42 50
           C46 42 56 38 60 30 C64 22 66 12 72 4Z"
        fill="white"
      />
      <path
        d="M30 132 C36 136 44 144 48 154 C50 160 46 165 40 163
           C34 161 28 154 26 147 C24 140 26 130 30 132Z"
        fill="white"
      />
    </svg>
  )
}

export function CoverageStrip() {
  return (
    <section className="bg-[#f8f9fa] border-y border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-90">

        {/* ── Left panel ── */}
        <motion.div
          className="relative bg-[#0a1628] overflow-hidden flex flex-col justify-between px-8 py-12 lg:px-14 lg:py-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -right-4 top-1/2 -translate-y-1/2
                       text-[200px] lg:text-[220px] font-black leading-none tracking-[-8px]
                       text-white/3"
          >
            NZ
          </span>

          <div className="relative z-10">
            <p className="text-[#3b5fd9] font-semibold text-[11px] uppercase tracking-[0.14em] mb-3">
              Service Coverage
            </p>
            <h2 className="text-[32px] lg:text-[36px] font-extrabold text-white leading-[1.12] tracking-tight">
              Waikato<br />
              <span className="text-[#3b5fd9]">Security</span><br />
              Coverage
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-70">
              Serving Hamilton and the wider Waikato region — licensed security
              professionals covering every major town and district.
            </p>
          </div>

          <div className="relative z-10 mt-10 flex items-center gap-6">
            <Link
              href="/service-area"
              className="inline-flex items-center gap-2 border border-[#3b5fd9]/60
                         text-white text-sm font-bold px-5 py-2.5 rounded
                         hover:bg-[#3b5fd9]/20 transition-colors duration-200"
            >
              Check your area
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="absolute bottom-6 right-8 opacity-[0.12] pointer-events-none">
            <NZSilhouette />
          </div>
        </motion.div>

        {/* ── Right panel ── */}
        <motion.div
          className="bg-[#f8f9fa] flex flex-col justify-center px-8 py-12 lg:px-14 lg:py-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <div className="mb-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-1">
              Waikato Region
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6">
            {regions.map((r) => (
              <div
                key={r.name}
                className="flex items-center gap-2.5 py-2.5 border-b border-gray-100 last:border-b-0"
              >
                <span className="w-1.75 h-1.75 rounded-full bg-[#1e40af] shrink-0" />
                <span className="text-[13px] font-semibold text-[#0a1628] leading-none">
                  {r.name}
                </span>
                <span className="ml-auto text-[11px] text-gray-400 font-medium">
                  {r.type}
                </span>
              </div>
            ))}
          </div>

          <motion.div
            className="flex gap-8 mt-8 pt-6 border-t border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="flex flex-col gap-0.5">
                <span className="text-[22px] font-extrabold text-[#0a1628] tracking-tight leading-none">
                  {s.num}
                </span>
                <span className="text-[11px] uppercase tracking-[0.08em] text-gray-400 font-medium">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}