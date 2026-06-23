'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

type Blog = {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  publishedAt: string | null
}

function BlogCard({ b }: { b: Blog }) {
  return (
    <motion.article variants={cardVariant}>
      <Link
        href={`/blog/${b.slug}`}
        className="block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#1e40af]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
      >
        <div className="relative h-48 bg-[#0a1628] overflow-hidden">
          {b.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={b.coverImage}
              alt={b.title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.15">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          <div className="absolute top-4 left-4 bg-[#1e40af] text-white text-xs font-semibold px-3 py-1 rounded-full">
            Security
          </div>
        </div>

        <div className="p-6">
          <div className="w-8 h-0.5 bg-[#1e40af] mb-3 group-hover:w-14 transition-all duration-300 rounded" />
          <p className="text-gray-400 text-xs mb-2">
            {b.publishedAt
              ? new Date(b.publishedAt).toLocaleDateString('en-NZ', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              : 'Atlas Security'}
          </p>
          <h2 className="font-bold text-[#0a1628] leading-snug mb-3 group-hover:text-[#1e40af] transition-colors line-clamp-2">
            {b.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{b.excerpt}</p>
          <span className="inline-flex items-center gap-1.5 text-[#1e40af] text-sm font-bold group-hover:gap-3 transition-all duration-200">
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true })

  useEffect(() => {
    fetch('/api/blogs')
      .then(r => {
        if (!r.ok) throw new Error('Failed')
        return r.json()
      })
      .then(data => {
        setBlogs(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <main>
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Blog</span>
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white">
              Security Insights
            </h1>
            <p className="text-gray-300 mt-3 text-lg max-w-xl">
              Tips, news and updates from the Atlas Security team.
            </p>
            <div className="w-14 h-1 bg-[#1e40af] rounded mt-5" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#f8f9fa]" ref={gridRef}>
        <div className="container mx-auto px-6 lg:px-16">
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="bg-white rounded-xl h-80 animate-pulse border border-gray-100"
                />
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                Unable to load posts. Please try again later.
              </p>
            </div>
          )}

          {!loading && !error && blogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No posts yet — check back soon.
              </p>
            </div>
          )}

          {!loading && !error && blogs.length > 0 && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
              initial="hidden"
              animate={gridInView ? 'visible' : 'hidden'}
              variants={stagger}
            >
              {blogs.map(b => (
                <BlogCard key={b.id} b={b} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}