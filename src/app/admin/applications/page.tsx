'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Application = {
  id: string; name: string; email: string; phone: string
  coverLetter: string; createdAt: string
  career: { title: string }
}

export default function AdminApplications() {
  const router = useRouter()
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  // Reply modal state
  const [replyingTo, setReplyingTo] = useState<Application | null>(null)
  const [replySubject, setReplySubject] = useState('')
  const [replyText, setReplyText] = useState('')
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [sentIds, setSentIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetch('/api/admin/applications')
      .then(r => { if (r.status === 401) { router.push('/admin/login'); return null } return r.json() })
      .then(data => { if (data) { setApplications(data); setLoading(false) } })
  }, [])

  async function remove(id: string) {
    if (!confirm('Delete this application permanently?')) return
    await fetch('/api/admin/applications', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setApplications(prev => prev.filter(a => a.id !== id))
  }

  function openReply(a: Application) {
    setReplyingTo(a)
    setReplySubject(`Re: Your Application for ${a.career.title}`)
    setReplyText(`Hi ${a.name},\n\nThank you for applying for the ${a.career.title} position at Atlas Security. `)
    setSendError('')
  }

  function closeReply() {
    setReplyingTo(null)
    setReplySubject('')
    setReplyText('')
    setSendError('')
  }

  async function sendReply() {
    if (!replyingTo || !replyText.trim() || !replySubject.trim()) return
    setSending(true)
    setSendError('')
    try {
      const res = await fetch('/api/admin/applications/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          applicationId: replyingTo.id,
          to: replyingTo.email,
          subject: replySubject,
          message: replyText,
        }),
      })
      if (!res.ok) throw new Error('failed')
      setSentIds(prev => new Set(prev).add(replyingTo.id))
      closeReply()
    } catch {
      setSendError('Failed to send. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const byRole = applications.reduce<Record<string, number>>((acc, a) => {
    acc[a.career.title] = (acc[a.career.title] || 0) + 1
    return acc
  }, {})

  return (
    <div className="px-8 py-8 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold">Job Applications</h1>
        <p className="text-gray-400 text-sm mt-1">All applications submitted through the careers page.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#0d1f3c] border border-white/10 rounded-xl px-5 py-4">
          <p className="text-2xl font-extrabold">{applications.length}</p>
          <p className="text-gray-400 text-xs mt-0.5">Total Applications</p>
        </div>
        {Object.entries(byRole).slice(0, 3).map(([title, count]) => (
          <div key={title} className="bg-[#0d1f3c] border border-white/10 rounded-xl px-5 py-4">
            <p className="text-2xl font-extrabold">{count}</p>
            <p className="text-gray-400 text-xs mt-0.5 truncate">{title}</p>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="space-y-4">{[1,2,3].map(i => <div key={i} className="bg-white/5 rounded-xl h-20 animate-pulse" />)}</div>
      ) : applications.length === 0 ? (
        <div className="text-center py-20 text-gray-600">No applications yet.</div>
      ) : (
        <div className="space-y-3">
          {applications.map(a => {
            const isOpen = expanded === a.id
            const wasSent = sentIds.has(a.id)
            return (
              <div key={a.id} className="bg-[#0d1f3c] border border-white/10 rounded-xl overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-white/5 transition"
                  onClick={() => setExpanded(isOpen ? null : a.id)}>
                  <div className="w-9 h-9 rounded-full bg-[#1e40af] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {a.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-sm">{a.name}</span>
                      <span className="text-xs border px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border-blue-500/30">{a.career.title}</span>
                      {wasSent && (
                        <span className="text-xs border px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border-green-500/30">
                          Replied
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs mt-0.5">{a.email}{a.phone && ` · ${a.phone}`}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-gray-500 text-xs hidden sm:block">
                      {new Date(a.createdAt).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </div>
                {isOpen && (
                  <div className="border-t border-white/10 px-5 py-5 bg-[#0a1628]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
                        <a href={`mailto:${a.email}`} className="text-[#1e40af] hover:underline break-all">{a.email}</a>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                        <a href={`tel:${a.phone}`} className="text-white hover:text-[#1e40af] transition">{a.phone || '—'}</a>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Applied</p>
                        <p className="text-white">{new Date(a.createdAt).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                      </div>
                    </div>
                    <div className="mb-5">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Cover Letter</p>
                      <p className="text-gray-300 text-sm leading-relaxed bg-white/5 rounded-lg px-4 py-3 border border-white/10">{a.coverLetter}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => openReply(a)}
                        className="text-xs bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-4 py-2 rounded-lg transition">
                        Reply via Email
                      </button>
                      {a.phone && (
                        <a href={`https://wa.me/64${a.phone.replace(/^0/, '').replace(/\s/g, '')}`}
                          target="_blank" rel="noopener noreferrer"
                          className="text-xs bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-semibold px-4 py-2 rounded-lg transition border border-[#25D366]/30">
                          WhatsApp
                        </a>
                      )}
                      <button onClick={() => remove(a.id)}
                        className="text-xs text-gray-500 hover:text-red-400 border border-white/10 px-4 py-2 rounded-lg transition ml-auto">
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Reply Modal */}
      {replyingTo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={closeReply}>
          <div className="bg-[#0d1f3c] border border-white/10 rounded-xl p-6 w-full max-w-lg"
            onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-white mb-1">Reply to {replyingTo.name}</h3>
            <p className="text-gray-400 text-xs mb-4">{replyingTo.email}</p>

            <label className="block text-xs text-gray-400 mb-1">Subject</label>
            <input
              value={replySubject}
              onChange={e => setReplySubject(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white mb-3 focus:outline-none focus:border-[#1e40af]"
            />

            <label className="block text-xs text-gray-400 mb-1">Message</label>
            <textarea
              rows={6}
              value={replyText}
              onChange={e => setReplyText(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white mb-3 resize-none focus:outline-none focus:border-[#1e40af]"
            />

            {sendError && <p className="text-red-400 text-xs mb-3">{sendError}</p>}

            <div className="flex justify-end gap-2">
              <button onClick={closeReply}
                className="text-xs text-gray-400 hover:text-white px-4 py-2 rounded-lg transition">
                Cancel
              </button>
              <button onClick={sendReply} disabled={sending || !replyText.trim() || !replySubject.trim()}
                className="text-xs bg-[#1e40af] hover:bg-[#1d3a9e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-4 py-2 rounded-lg transition">
                {sending ? 'Sending...' : 'Send Reply'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}