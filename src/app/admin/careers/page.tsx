'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Career = {
  id: string; title: string; description: string
  requirements: string; applyEmail: string
  isActive: boolean; createdAt: string
  _count: { applications: number }
}

type View = 'list' | 'create' | 'edit'
const emptyForm = { title: '', description: '', requirements: '', applyEmail: '', isActive: true }

export default function AdminCareers() {
  const router = useRouter()
  const [careers, setCareers] = useState<Career[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<View>('list')
  const [editingCareer, setEditingCareer] = useState<Career | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/admin/careers')
      .then(r => { if (r.status === 401) { router.push('/admin/login'); return null } return r.json() })
      .then(data => { if (data) { setCareers(data); setLoading(false) } })
  }, [])

  function openCreate() { setForm(emptyForm); setEditingCareer(null); setError(''); setView('create') }

  function openEdit(career: Career) {
    setForm({ title: career.title, description: career.description, requirements: career.requirements, applyEmail: career.applyEmail, isActive: career.isActive })
    setEditingCareer(career); setError(''); setView('edit')
  }

  async function handleSave() {
    if (!form.title || !form.description || !form.requirements || !form.applyEmail) { setError('All fields are required.'); return }
    setSaving(true); setError('')
    if (view === 'create') {
      const res = await fetch('/api/admin/careers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { const created = await res.json(); setCareers(prev => [{ ...created, _count: { applications: 0 } }, ...prev]); setView('list') }
      else setError('Failed to create opening.')
    } else if (view === 'edit' && editingCareer) {
      const res = await fetch(`/api/admin/careers/${editingCareer.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { const updated = await res.json(); setCareers(prev => prev.map(c => c.id === updated.id ? { ...updated, _count: editingCareer._count } : c)); setView('list') }
      else setError('Failed to update opening.')
    }
    setSaving(false)
  }

  async function toggleActive(career: Career) {
    const res = await fetch(`/api/admin/careers/${career.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isActive: !career.isActive }) })
    if (res.ok) setCareers(prev => prev.map(c => c.id === career.id ? { ...c, isActive: !c.isActive } : c))
  }

  async function deleteCareer(id: string) {
    if (!confirm('Delete this opening? All applications will also be deleted.')) return
    await fetch(`/api/admin/careers/${id}`, { method: 'DELETE' })
    setCareers(prev => prev.filter(c => c.id !== id))
  }

  if (view === 'list') return (
    <div className="px-8 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold">Job Openings</h1>
          <p className="text-gray-400 text-sm mt-1">Manage active and inactive positions.</p>
        </div>
        <button onClick={openCreate} className="bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-4 py-2 rounded-lg text-sm transition">
          + New Opening
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#0d1f3c] border border-white/10 rounded-xl px-5 py-4">
          <p className="text-2xl font-extrabold">{careers.length}</p>
          <p className="text-gray-400 text-xs mt-0.5">Total Openings</p>
        </div>
        <div className="bg-[#0d1f3c] border border-white/10 rounded-xl px-5 py-4">
          <p className="text-2xl font-extrabold text-green-400">{careers.filter(c => c.isActive).length}</p>
          <p className="text-gray-400 text-xs mt-0.5">Active</p>
        </div>
        <div className="bg-[#0d1f3c] border border-white/10 rounded-xl px-5 py-4">
          <p className="text-2xl font-extrabold">{careers.reduce((sum, c) => sum + c._count.applications, 0)}</p>
          <p className="text-gray-400 text-xs mt-0.5">Total Applications</p>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">{[1,2].map(i => <div key={i} className="bg-white/5 rounded-xl h-24 animate-pulse" />)}</div>
      ) : careers.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 mb-4">No job openings yet.</p>
          <button onClick={openCreate} className="bg-[#1e40af] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1d3a9e] transition">Create your first opening</button>
        </div>
      ) : (
        <div className="space-y-4">
          {careers.map(career => (
            <div key={career.id} className="bg-[#0d1f3c] border border-white/10 rounded-xl p-5 flex items-start gap-5">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <span className="font-bold text-sm">{career.title}</span>
                  <span className={`text-xs border px-2 py-0.5 rounded-full ${career.isActive ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-gray-500/10 text-gray-400 border-gray-500/30'}`}>
                    {career.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full">
                    {career._count.applications} application{career._count.applications !== 1 ? 's' : ''}
                  </span>
                </div>
                <p className="text-gray-400 text-xs truncate mb-1">{career.description}</p>
                <p className="text-gray-600 text-xs">Apply to: {career.applyEmail}</p>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button onClick={() => openEdit(career)} className="text-xs bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg transition">Edit</button>
                <button onClick={() => toggleActive(career)}
                  className={`text-xs px-3 py-1.5 rounded-lg transition font-medium ${career.isActive ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-green-700 hover:bg-green-600 text-white'}`}>
                  {career.isActive ? 'Deactivate' : 'Activate'}
                </button>
                <button onClick={() => deleteCareer(career.id)} className="text-xs text-gray-500 hover:text-red-400 border border-white/10 px-3 py-1.5 rounded-lg transition">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="px-8 py-8 max-w-2xl">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setView('list')} className="text-gray-400 hover:text-white transition text-sm">← Back</button>
        <div>
          <h1 className="text-2xl font-extrabold">{view === 'create' ? 'New Job Opening' : 'Edit Opening'}</h1>
          <p className="text-gray-400 text-sm mt-1">{view === 'create' ? 'Add a new position to the careers page.' : 'Update this job listing.'}</p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-semibold text-gray-300 block mb-1.5">Job Title *</label>
          <input type="text" placeholder="e.g. Static Security Guard — Auckland" value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            className="w-full bg-[#0d1f3c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-300 block mb-1.5">Description *</label>
          <textarea rows={4} placeholder="Overview of the role and responsibilities..." value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            className="w-full bg-[#0d1f3c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition resize-y" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-300 block mb-1.5">Requirements *</label>
          <p className="text-gray-500 text-xs mb-2">One requirement per line — each becomes a bullet on the site.</p>
          <textarea rows={5}
            placeholder={`Valid NZ Security License\nPhysically fit and presentable\nReliable transport\nAvailable for night shifts`}
            value={form.requirements} onChange={e => setForm({ ...form, requirements: e.target.value })}
            className="w-full bg-[#0d1f3c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition resize-y font-mono" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-300 block mb-1.5">Apply Email *</label>
          <input type="email" placeholder="careers@atlassecurity.co.nz" value={form.applyEmail}
            onChange={e => setForm({ ...form, applyEmail: e.target.value })}
            className="w-full bg-[#0d1f3c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition" />
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setForm({ ...form, isActive: !form.isActive })}
            className={`relative w-11 h-6 rounded-full transition-colors ${form.isActive ? 'bg-[#1e40af]' : 'bg-white/10'}`}>
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${form.isActive ? 'left-6' : 'left-1'}`} />
          </button>
          <span className="text-sm text-gray-300">{form.isActive ? 'Visible on careers page' : 'Hidden from careers page'}</span>
        </div>
        {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">{error}</div>}
        <div className="flex gap-3 pt-2">
          <button onClick={handleSave} disabled={saving}
            className="bg-[#1e40af] hover:bg-[#1d3a9e] disabled:opacity-50 text-white font-bold px-8 py-3 rounded-lg transition">
            {saving ? 'Saving...' : view === 'create' ? 'Create Opening' : 'Save Changes'}
          </button>
          <button onClick={() => setView('list')} className="bg-white/5 hover:bg-white/10 text-gray-300 px-6 py-3 rounded-lg transition">Cancel</button>
        </div>
      </div>
    </div>
  )
}