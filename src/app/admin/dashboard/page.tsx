'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Stats = {
  testimonials: { pending: number; total: number }
  blogs: { drafts: number; total: number }
  contacts: { total: number }
  applications: { total: number }
  careers: { active: number; total: number }
}

const CARD_ICON_PATHS = {
  testimonials: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  blogs: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6m-6-4h6',
  contact: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  careers: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  applications: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
}

export default function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const responses = await Promise.all([
          fetch('/api/admin/testimonials'),
          fetch('/api/admin/blogs'),
          fetch('/api/admin/contact'),
          fetch('/api/admin/applications'),
          fetch('/api/admin/careers'),
        ])

        // Check for NextAuth 401 Unauthorized
        if (responses.some(r => r.status === 401)) {
          router.push('/admin/login')
          return
        }

        // Safely parse JSON. If a backend route threw an error, fallback to empty array
        const data = await Promise.all(
          responses.map(async (res) => {
            if (!res.ok) return [] 
            try {
              const json = await res.json()
              return Array.isArray(json) ? json : []
            } catch {
              return [] 
            }
          })
        )

        const [t, b, c, a, car] = data

        setStats({
          testimonials: { pending: t.filter((x: {status:string}) => x.status === 'PENDING').length, total: t.length },
          blogs: { drafts: b.filter((x: {published:boolean}) => !x.published).length, total: b.length },
          contacts: { total: c.length },
          applications: { total: a.length },
          careers: { active: car.filter((x: {isActive:boolean}) => x.isActive).length, total: car.length },
        })

      } catch (err) {
        console.error("Dashboard failed to load stats:", err)
        setStats({
          testimonials: { pending: 0, total: 0 },
          blogs: { drafts: 0, total: 0 },
          contacts: { total: 0 },
          applications: { total: 0 },
          careers: { active: 0, total: 0 },
        })
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [router])

  const cards = stats ? [
    { href: '/admin/testimonials', label: 'Testimonials',        value: stats.testimonials.total, sub: stats.testimonials.pending > 0 ? `${stats.testimonials.pending} pending review` : 'All reviewed', urgent: stats.testimonials.pending > 0, icon: CARD_ICON_PATHS.testimonials, color: 'from-blue-600/20 to-blue-600/5 border-blue-500/20' },
    { href: '/admin/blogs',        label: 'Blog Posts',          value: stats.blogs.total,        sub: stats.blogs.drafts > 0 ? `${stats.blogs.drafts} draft${stats.blogs.drafts > 1 ? 's' : ''}` : 'All published', urgent: false, icon: CARD_ICON_PATHS.blogs, color: 'from-indigo-600/20 to-indigo-600/5 border-indigo-500/20' },
    { href: '/admin/contact',      label: 'Contact Submissions', value: stats.contacts.total,     sub: 'Total enquiries', urgent: false, icon: CARD_ICON_PATHS.contact, color: 'from-purple-600/20 to-purple-600/5 border-purple-500/20' },
    { href: '/admin/careers',      label: 'Job Openings',        value: stats.careers.total,      sub: `${stats.careers.active} active`, urgent: false, icon: CARD_ICON_PATHS.careers, color: 'from-emerald-600/20 to-emerald-600/5 border-emerald-500/20' },
    { href: '/admin/applications', label: 'Applications',        value: stats.applications.total, sub: 'Total received', urgent: false, icon: CARD_ICON_PATHS.applications, color: 'from-orange-600/20 to-orange-600/5 border-orange-500/20' },
  ] : []

  return (
    <div className="px-8 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">Welcome back — here's what's happening on your site.</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1,2,3,4,5].map(i => <div key={i} className="bg-white/5 rounded-2xl h-36 animate-pulse" />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {cards.map(card => (
            <Link key={card.href} href={card.href}
              className={`bg-linear-to-br ${card.color} border rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200 group`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d={card.icon} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="text-gray-600 group-hover:text-gray-400 transition">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-3xl font-extrabold mb-1">{card.value}</p>
              <p className="text-gray-300 text-sm font-medium mb-1">{card.label}</p>
              <p className={`text-xs ${card.urgent ? 'text-yellow-400 font-semibold' : 'text-gray-500'}`}>
                {card.urgent && '● '}{card.sub}
              </p>
            </Link>
          ))}
        </div>
      )}

      <div>
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: '/admin/blogs',        icon: 'M12 4v16m8-8H4', color: 'bg-indigo-500/10 text-indigo-400', title: 'Write a Blog Post',   sub: 'Publish security tips & news' },
            { href: '/admin/careers',      icon: 'M12 4v16m8-8H4', color: 'bg-emerald-500/10 text-emerald-400', title: 'Post a Job Opening', sub: 'Add a new career listing' },
            { href: '/admin/testimonials', icon: 'M9 12l2 2 4-4M12 2a10 10 0 110 20A10 10 0 0112 2z', color: 'bg-yellow-500/10 text-yellow-400', title: 'Review Testimonials', sub: 'Approve or reject submissions' },
            { href: '/', icon: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14', color: 'bg-white/5 text-gray-400', title: 'View Live Site', sub: 'Opens atlassecurity.co.nz', external: true },
          ].map(item => (
            <Link key={item.href} href={item.href} target={item.external ? '_blank' : undefined}
              className="flex items-center gap-3 bg-[#0d1f3c] border border-white/10 rounded-xl px-5 py-4 hover:border-[#1e40af]/50 hover:bg-[#1e40af]/5 transition">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={item.icon} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}