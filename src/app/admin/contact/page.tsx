'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Submission = {
  id: string; name: string; phone: string; email: string
  service: string; message: string; createdAt: string
}

const SERVICE_COLORS: Record<string, string> = {
  'Static Guard':       'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Mobile Patrolling':  'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'Alarm & Monitoring': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  'Other':              'bg-gray-500/10 text-gray-400 border-gray-500/30',
}

export default function AdminContact() {
  const router = useRouter()
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  // Reply modal state
  const [replyingTo, setReplyingTo] = useState<Submission | null>(null)
  const [replySubject, setReplySubject] = useState('')
  const [replyText, setReplyText] = useState('')
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [sentIds, setSentIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetch('/api/admin/contact')
      .then(r => { if (r.status === 401) { router.push('/admin/login'); return null } return r.json() })
      .then(data => { if (data) { setSubmissions(data); setLoading(false) } })
  }, [])

  async function remove(id: string) {
    if (!confirm('Delete this submission permanently?')) return
    await fetch('/api/admin/contact', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setSubmissions(prev => prev.filter(s => s.id !== id))
  }

  function openReply(s: Submission) {
    setReplyingTo(s)
    setReplySubject(`Re: Your Atlas Security Enquiry`)
    setReplyText(`Hi ${s.name},\n\nThanks for reaching out to Atlas Security. `)
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
      const res = await fetch('/api/admin/contact/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submissionId: replyingTo.id,
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

  return (
    <div className="px-8 py-8 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold">Contact Submissions</h1>
        <p className="text-gray-400 text-sm mt-1">Enquiries submitted via the contact form.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total',             value: submissions.length },
          { label: 'Static Guard',      value: submissions.filter(s => s.service === 'Static Guard').length },
          { label: 'Mobile Patrolling', value: submissions.filter(s => s.service === 'Mobile Patrolling').length },
          { label: 'Other / General',   value: submissions.filter(s => !s.service || s.service === 'Other').length },
        ].map(stat => (
          <div key={stat.label} className="bg-[#0d1f3c] border border-white/10 rounded-xl px-5 py-4">
            <p className="text-2xl font-extrabold">{stat.value}</p>
            <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="space-y-4">{[1,2,3].map(i => <div key={i} className="bg-white/5 rounded-xl h-28 animate-pulse" />)}</div>
      ) : submissions.length === 0 ? (
        <div className="text-center py-20 text-gray-600">No submissions yet.</div>
      ) : (
        <div className="space-y-3">
          {submissions.map(s => {
            const isOpen = expanded === s.id
            const serviceColor = SERVICE_COLORS[s.service] || SERVICE_COLORS['Other']
            const wasSent = sentIds.has(s.id)
            return (
              <div key={s.id} className="bg-[#0d1f3c] border border-white/10 rounded-xl overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-white/5 transition"
                  onClick={() => setExpanded(isOpen ? null : s.id)}>
                  <div className="w-9 h-9 rounded-full bg-[#1e40af] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {s.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-sm">{s.name}</span>
                      {s.service && <span className={`text-xs border px-2 py-0.5 rounded-full ${serviceColor}`}>{s.service}</span>}
                      {wasSent && (
                        <span className="text-xs border px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border-green-500/30">
                          Replied
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs mt-0.5 truncate">{s.email}{s.phone && ` · ${s.phone}`}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-gray-500 text-xs hidden sm:block">
                      {new Date(s.createdAt).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}
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
                        <a href={`mailto:${s.email}`} className="text-[#1e40af] hover:underline break-all">{s.email}</a>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                        <a href={`tel:${s.phone}`} className="text-white hover:text-[#1e40af] transition">{s.phone || '—'}</a>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Submitted</p>
                        <p className="text-white">{new Date(s.createdAt).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                      </div>
                    </div>
                    <div className="mb-5">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Message</p>
                      <p className="text-gray-300 text-sm leading-relaxed bg-white/5 rounded-lg px-4 py-3 border border-white/10">{s.message}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => openReply(s)}
                        className="text-xs bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-4 py-2 rounded-lg transition">
                        Reply via Email
                      </button>
                      {s.phone && (
                        <a href={`https://wa.me/64${s.phone.replace(/^0/, '').replace(/\s/g, '')}`}
                          target="_blank" rel="noopener noreferrer"
                          className="text-xs bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-semibold px-4 py-2 rounded-lg transition border border-[#25D366]/30">
                          WhatsApp
                        </a>
                      )}
                      <button onClick={() => remove(s.id)}
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