'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Choose Us', href: '/#why-choose-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Sits transparent over the hero image and only picks up a glass/blur
 * background once the page scrolls — so on load it reads as part of the
 * photo, not a UI bar stacked on top of it.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a1628]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
          : 'bg-linear-to-b from-black/40 via-black/10 to-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-20">
        <Link href="/" className="text-white font-extrabold text-xl tracking-tight">
          ATLAS <span className="text-[#3b5fd9]">SECURITY</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-gray-200 hover:text-white text-sm font-medium tracking-wide transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#3b5fd9] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:02219934866"
            className="flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z" />
            </svg>
            022 199 3486
          </a>
          <Link
            href="/contact"
            className="relative overflow-hidden bg-[#1e40af] hover:bg-[#2747c4] text-white text-sm font-bold px-6 py-3 rounded-md transition-colors duration-200 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
          >
            GET A FREE QUOTE
          </Link>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0a1628]/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 hover:text-white text-sm font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#1e40af] text-white text-sm font-bold px-5 py-3 rounded-md text-center"
                onClick={() => setOpen(false)}
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}