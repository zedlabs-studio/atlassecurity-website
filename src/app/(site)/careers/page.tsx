'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

type Career = {
  id: string
  title: string
  description: string
  requirements: string
  applyEmail: string
}

type AppForm = { name: string; email: string; phone: string; coverLetter: string }
type AppStatus = 'idle' | 'loading' | 'success' | 'error'

function ApplicationForm({ career, onClose }: { career: Career; onClose: () => void }) {
  const [form, setForm] = useState<AppForm>({ name: '', email: '', phone: '', coverLetter: '' })
  const [status, setStatus] = useState<AppStatus>('idle')

  async function handleSubmit() {
    if (!form.name || !form.email || !form.coverLetter) return
    setStatus('loading')
    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ careerId: career.id, ...form }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h4 className="font-bold text-[#0a1628] mb-1">Application Submitted!</h4>
        <p className="text-gray-500 text-sm">We'll review your application and be in touch soon.</p>
      </div>
    )
  }

  return (
    <div className="mt-5 border-t border-gray-200 pt-6">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-bold text-[#0a1628]">Apply for {career.title}</h4>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">Full Name *</label>
          <input type="text" placeholder="John Smith"
            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">Email Address *</label>
          <input type="email" placeholder="john@email.com"
            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors bg-white"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">Phone Number</label>
        <input type="tel" placeholder="022 XXX XXXX"
          value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors bg-white"
        />
      </div>

      <div className="mb-5">
        <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">
          Why do you want this role? *
        </label>
        <textarea rows={4}
          placeholder="Tell us about your experience, skills, and why you'd be a great fit for Atlas Security..."
          value={form.coverLetter} onChange={e => setForm({ ...form, coverLetter: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors resize-none bg-white"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm mb-4">Something went wrong. Please try again.</p>
      )}

      <button onClick={handleSubmit} disabled={status === 'loading'}
        className="w-full bg-[#1e40af] hover:bg-[#1d3a9e] disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2">
        {status === 'loading' ? 'Submitting...' : 'Submit Application'}
        {status !== 'loading' && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        )}
      </button>
    </div>
  )
}

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [applying, setApplying] = useState<string | null>(null)
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true })

  useEffect(() => {
    fetch('/api/careers')
      .then(r => r.json())
      .then(data => { setCareers(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const perks = [
    { icon: '💰', title: 'Competitive Pay',  desc: 'Market-rate wages with regular reviews.' },
    { icon: '📈', title: 'Career Growth',    desc: 'Clear pathways from guard to team leader and beyond.' },
    { icon: '🎓', title: 'Paid Training',    desc: 'Full training and licensing support provided.' },
    { icon: '🕐', title: 'Flexible Shifts',  desc: 'Full-time, part-time and casual options available.' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-gray-400 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Careers</span>
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white">Join Our Team</h1>
            <p className="text-gray-300 mt-3 text-lg max-w-xl">Build a rewarding career in security with one of New Zealand's fastest-growing security companies.</p>
            <div className="w-14 h-1 bg-[#1e40af] rounded mt-5" />
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-[#f8f9fa] border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }} className="text-center p-5">
                <div className="text-3xl mb-3">{p.icon}</div>
                <p className="font-bold text-[#0a1628] text-sm mb-1">{p.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-24 bg-white" ref={listRef}>
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <motion.div className="text-center mb-12"
            initial="hidden" animate={listInView ? 'visible' : 'hidden'} variants={fadeUp}>
            <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">Open Positions</p>
            <h2 className="text-3xl font-extrabold text-[#0a1628]">Current Opportunities</h2>
            <div className="w-14 h-1 bg-[#1e40af] mx-auto mt-4 rounded" />
          </motion.div>

          {loading ? (
            <div className="space-y-4">
              {[1,2].map(i => <div key={i} className="h-24 bg-gray-100 rounded-xl animate-pulse" />)}
            </div>
          ) : careers.length === 0 ? (
            <div className="text-center py-16 bg-[#f8f9fa] rounded-2xl">
              <p className="text-gray-500 mb-2">No openings right now — check back soon.</p>
              <p className="text-gray-400 text-sm">
                Or send your CV to{' '}
                <a href="mailto:info@atlassecurity.co.nz" className="text-[#1e40af] hover:underline">
                  info@atlassecurity.co.nz
                </a>
              </p>
            </div>
          ) : (
            <motion.div className="space-y-4"
              initial="hidden" animate={listInView ? 'visible' : 'hidden'} variants={stagger}>
              {careers.map(c => (
                <motion.div key={c.id} variants={fadeUp}
                  className="bg-[#f8f9fa] border border-gray-200 hover:border-[#1e40af]/40 rounded-xl overflow-hidden transition-all duration-300">

                  {/* Title row */}
                  <button className="w-full text-left px-7 py-5 flex items-center justify-between"
                    onClick={() => {
                      const opening = expanded === c.id ? null : c.id
                      setExpanded(opening)
                      if (!opening) setApplying(null)
                    }}>
                    <div>
                      <h3 className="font-bold text-[#0a1628]">{c.title}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">Full-time · New Zealand</p>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2"
                      className={`shrink-0 transition-transform duration-200 ${expanded === c.id ? 'rotate-180' : ''}`}>
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>

                  {/* Expanded content */}
                  {expanded === c.id && (
                    <div className="px-7 pb-7 border-t border-gray-200">
                      <p className="text-gray-600 text-sm leading-relaxed mt-5 mb-5">{c.description}</p>

                      <h4 className="font-bold text-[#0a1628] text-sm mb-3">Requirements</h4>
                      <ul className="space-y-2 mb-7">
                        {c.requirements.split('\n').filter(Boolean).map((r, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                              <circle cx="12" cy="12" r="10" fill="#1e40af"/>
                              <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {r}
                          </li>
                        ))}
                      </ul>

                      {/* Toggle between Apply button and form */}
                      {applying === c.id ? (
                        <ApplicationForm career={c} onClose={() => setApplying(null)} />
                      ) : (
                        <button onClick={() => setApplying(c.id)}
                          className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded transition-all duration-200 hover:-translate-y-0.5">
                          Apply Now
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </button>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}