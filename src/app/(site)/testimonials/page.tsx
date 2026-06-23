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
  visible: { transition: { staggerChildren: 0.1 } },
}

type Testimonial = { id: string; name: string; message: string; rating: number; createdAt: string }

function StarRating({ rating, interactive = false, onRate }: { rating: number; interactive?: boolean; onRate?: (r: number) => void }) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(s => (
        <button key={s} type="button"
          onClick={() => interactive && onRate?.(s)}
          onMouseEnter={() => interactive && setHover(s)}
          onMouseLeave={() => interactive && setHover(0)}
          className={interactive ? 'cursor-pointer' : 'cursor-default'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24"
            fill={(interactive ? hover || rating : rating) >= s ? '#f59e0b' : 'none'}
            stroke="#f59e0b" strokeWidth="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </button>
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ name: '', message: '', rating: 5 })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formRef = useRef(null)
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true })

  useEffect(() => {
    fetch('/api/testimonials')
      .then(r => r.json())
      .then(data => { setTestimonials(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const handleSubmit = async () => {
    if (!form.name || !form.message) return
    setSubmitStatus('loading')
    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitStatus('success')
        setForm({ name: '', message: '', rating: 5 })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }
  }

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
              <span className="text-white">Testimonials</span>
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white">Client Testimonials</h1>
            <p className="text-gray-300 mt-3 text-lg max-w-xl">Don't take our word for it — hear from the businesses we protect.</p>
            <div className="w-14 h-1 bg-[#1e40af] rounded mt-5" />
          </motion.div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-24 bg-[#f8f9fa]" ref={gridRef}>
        <div className="container mx-auto px-6 lg:px-16">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-xl p-7 h-48 animate-pulse border border-gray-100" />
              ))}
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No testimonials yet — be the first to share your experience.</p>
            </div>
          ) : (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden" animate={gridInView ? 'visible' : 'hidden'} variants={stagger}>
              {testimonials.map((t) => (
                <motion.div key={t.id} variants={fadeUp}
                  className="bg-white rounded-xl p-7 border border-gray-100 hover:border-[#1e40af]/20 hover:shadow-md transition-all duration-300">
                  <StarRating rating={t.rating} />
                  <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-5 italic">"{t.message}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-[#1e40af] flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#0a1628] text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{new Date(t.createdAt).toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' })}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Submit form */}
      <section className="py-24 bg-white" ref={formRef}>
        <div className="container mx-auto px-6 lg:px-16 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-[#0a1628]">Share Your Experience</h2>
              <p className="text-gray-500 mt-2">We'd love to hear how Atlas Security has helped your business.</p>
            </div>

            {submitStatus === 'success' ? (
              <div className="text-center py-12 bg-[#f8f9fa] rounded-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-2">Thank You!</h3>
                <p className="text-gray-500 text-sm">Your testimonial has been submitted and is pending review.</p>
              </div>
            ) : (
              <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100">
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Your Name *</label>
                  <input type="text" placeholder="John Smith"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-[#1e40af] transition-colors" />
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Your Rating *</label>
                  <StarRating rating={form.rating} interactive onRate={r => setForm({ ...form, rating: r })} />
                </div>
                <div className="mb-7">
                  <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Your Review *</label>
                  <textarea rows={4} placeholder="Tell us about your experience with Atlas Security..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors resize-none" />
                </div>
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm mb-4">Something went wrong. Please try again.</p>
                )}
                <button onClick={handleSubmit} disabled={submitStatus === 'loading'}
                  className="w-full bg-[#1e40af] hover:bg-[#1d3a9e] disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  {submitStatus === 'loading' ? 'Submitting...' : 'Submit Review'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}