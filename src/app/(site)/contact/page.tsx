'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const contactInfo = [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>,
      label: 'Phone', value: '+64 22 199 3486', href: 'tel:+64 221993486',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      label: 'Email', value: 'info@atlassecurity.co.nz', href: 'mailto:info@atlassecurity.co.nz',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      label: 'Location', value: 'Hamilton, New Zealand', href: null,
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      label: 'Hours', value: '24/7 — Always Available', href: null,
    },
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
              <span className="text-white">Contact</span>
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white">Get In Touch</h1>
            <p className="text-gray-300 mt-3 text-lg max-w-xl">Ready to secure your premises? Contact us for a free consultation and site assessment.</p>
            <div className="w-14 h-1 bg-[#1e40af] rounded mt-5" />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left — info */}
            <motion.div className="lg:w-80 shrink-0"
              initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-extrabold text-[#0a1628] mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">Reach out by phone, email or fill in the form — we respond within 2 hours.</p>
              </motion.div>

              <div className="space-y-5 mb-10">
                {contactInfo.map((c, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1e40af]/10 flex items-center justify-center text-[#1e40af] shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-[#0a1628] font-medium hover:text-[#1e40af] transition-colors text-sm">{c.value}</a>
                      ) : (
                        <p className="text-[#0a1628] font-medium text-sm">{c.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a variants={fadeUp}
                href="https://wa.me/6422199348" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-5 py-3.5 rounded-xl transition-colors duration-200 w-fit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            {/* Right — form */}
            <motion.div className="flex-1" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1628] mb-2">Message Sent!</h3>
                    <p className="text-gray-500">Thank you for reaching out. We'll be in touch within 2 hours.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-extrabold text-[#0a1628] mb-1">Send Us a Message</h2>
                    <p className="text-gray-400 text-sm mb-8">We respond within 2 hours during business hours.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Full Name *</label>
                        <input
                          type="text" placeholder="John Smith"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Phone Number</label>
                        <input
                          type="tel" placeholder="022 XXX XXXX"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Email Address *</label>
                      <input
                        type="email" placeholder="john@company.co.nz"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors"
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Service of Interest</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option value="Static Guard">Static Guard Services</option>
                        <option value="Mobile Patrolling">Mobile Patrolling Services</option>
                        <option value="Alarm & Monitoring">Alarm & Monitoring</option>
                        <option value="Other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div className="mb-7">
                      <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Message *</label>
                      <textarea
                        rows={5} placeholder="Tell us about your security needs, site location, and any specific requirements..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-sm mb-4">Something went wrong. Please try again or call us directly.</p>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={status === 'loading'}
                      className="w-full bg-[#1e40af] hover:bg-[#1d3a9e] disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1e40af]/30 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}