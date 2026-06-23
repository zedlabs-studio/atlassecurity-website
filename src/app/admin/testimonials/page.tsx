'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Testimonial = {
  id: string
  name: string
  message: string
  rating: number
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  createdAt: string
}

type FilterTab = 'ALL' | 'PENDING' | 'APPROVED' | 'REJECTED'

const STATUS_STYLES: Record<string, string> = {
  PENDING:  'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  APPROVED: 'bg-green-500/10  text-green-400  border-green-500/30',
  REJECTED: 'bg-red-500/10   text-red-400    border-red-500/30',
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24"
          fill={rating >= s ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function AdminTestimonials() {
  const router = useRouter()
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [filter, setFilter] = useState<FilterTab>('PENDING')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/testimonials')
      .then(r => {
        if (r.status === 401) { router.push('/admin/login'); return null }
        return r.json()
      })
      .then(data => { if (data) { setTestimonials(data); setLoading(false) } })
  }, [])

  async function updateStatus(id: string, status: 'APPROVED' | 'REJECTED' | 'PENDING') {
    const prev = testimonials
    // optimistic update
    setTestimonials(p => p.map(t => t.id === id ? { ...t, status } : t))

    const res = await fetch(`/api/admin/testimonials/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })

    if (!res.ok) {
      // roll back on failure
      setTestimonials(prev)
      alert('Failed to update testimonial. Please try again.')
    }
  }


  async function remove(id: string) {
    if (!confirm('Permanently delete this testimonial?')) return
    const prev = testimonials
    setTestimonials(p => p.filter(t => t.id !== id))

    const res = await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' })
    if (!res.ok) {
      setTestimonials(prev)
      alert('Failed to delete testimonial. Please try again.')
    }
  }

  const counts = {
    ALL:      testimonials.length,
    PENDING:  testimonials.filter(t => t.status === 'PENDING').length,
    APPROVED: testimonials.filter(t => t.status === 'APPROVED').length,
    REJECTED: testimonials.filter(t => t.status === 'REJECTED').length,
  }
  const filtered = filter === 'ALL' ? testimonials : testimonials.filter(t => t.status === filter)

  return (
    <div className="px-8 py-8 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold">Testimonials</h1>
        <p className="text-gray-400 text-sm mt-1">Review and approve customer submissions.</p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(['ALL','PENDING','APPROVED','REJECTED'] as FilterTab[]).map(tab => (
          <button key={tab} onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition border ${
              filter === tab
                ? 'bg-[#1e40af] text-white border-[#1e40af]'
                : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
            }`}>
            {tab.toLowerCase()} ({counts[tab]})
          </button>
        ))}
      </div>

      {/* Pending banner */}
      {counts.PENDING > 0 && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-5 py-3 mb-6 flex items-center gap-3">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          <p className="text-yellow-300 text-sm font-medium">
            {counts.PENDING} testimonial{counts.PENDING > 1 ? 's' : ''} waiting for review
          </p>
        </div>
      )}

      {loading ? (
        <div className="space-y-4">
          {[1,2,3].map(i => <div key={i} className="bg-white/5 rounded-xl h-32 animate-pulse" />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-600">
          No {filter === 'ALL' ? '' : filter.toLowerCase()} testimonials yet.
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(t => (
            <div key={t.id} className="bg-[#0d1f3c] border border-white/10 rounded-xl p-5">
              <div className="flex items-start gap-4 justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <div className="w-8 h-8 rounded-full bg-[#1e40af] flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <span className="font-bold text-sm">{t.name}</span>
                    <Stars rating={t.rating} />
                    <span className={`text-xs border px-2 py-0.5 rounded-full ${STATUS_STYLES[t.status]}`}>
                      {t.status.toLowerCase()}
                    </span>
                    <span className="text-gray-500 text-xs ml-auto">
                      {new Date(t.createdAt).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed pl-11">"{t.message}"</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  {t.status !== 'APPROVED' && (
                    <button onClick={() => updateStatus(t.id, 'APPROVED')}
                      className="text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded-lg transition font-medium">
                      ✓ Approve
                    </button>
                  )}
                  {t.status !== 'REJECTED' && (
                    <button onClick={() => updateStatus(t.id, 'REJECTED')}
                      className="text-xs bg-red-700/80 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg transition font-medium">
                      ✕ Reject
                    </button>
                  )}
                  {t.status === 'REJECTED' && (
                    <button onClick={() => updateStatus(t.id, 'PENDING')}
                      className="text-xs bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg transition font-medium">
                      ↺ Reset
                    </button>
                  )}
                  <button onClick={() => remove(t.id)}
                    className="text-xs text-gray-500 hover:text-red-400 border border-white/10 px-3 py-1.5 rounded-lg transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}