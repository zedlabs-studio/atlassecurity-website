'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Blog = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  published: boolean
  publishedAt: string | null
  createdAt: string
}

type View = 'list' | 'create' | 'edit'
const emptyForm = { title: '', excerpt: '', content: '', coverImage: '', published: false }

export default function AdminBlogs() {
  const router = useRouter()
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<View>('list')
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/admin/blogs')
      .then(r => {
        if (r.status === 401) { router.push('/admin/login'); return null }
        return r.json()
      })
      .then(data => { if (data) { setBlogs(data); setLoading(false) } })
  }, [])

  function openCreate() { setForm(emptyForm); setEditingBlog(null); setError(''); setView('create') }

  function openEdit(blog: Blog) {
    setForm({ title: blog.title, excerpt: blog.excerpt, content: blog.content, coverImage: blog.coverImage, published: blog.published })
    setEditingBlog(blog); setError(''); setView('edit')
  }

  async function handleSave() {
    if (!form.title || !form.content) { setError('Title and content are required.'); return }
    setSaving(true); setError('')
    if (view === 'create') {
      const res = await fetch('/api/admin/blogs', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      })
      if (res.ok) { const created = await res.json(); setBlogs(prev => [created, ...prev]); setView('list') }
      else setError('Failed to create post.')
    } else if (view === 'edit' && editingBlog) {
      const res = await fetch(`/api/admin/blogs/${editingBlog.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      })
      if (res.ok) { const updated = await res.json(); setBlogs(prev => prev.map(b => b.id === updated.id ? updated : b)); setView('list') }
      else setError('Failed to update post.')
    }
    setSaving(false)
  }

  async function togglePublish(blog: Blog) {
    const res = await fetch(`/api/admin/blogs/${blog.id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...blog, published: !blog.published }),
    })
    if (res.ok) { const updated = await res.json(); setBlogs(prev => prev.map(b => b.id === updated.id ? updated : b)) }
  }

  async function deleteBlog(id: string) {
    if (!confirm('Delete this post permanently?')) return
    await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' })
    setBlogs(prev => prev.filter(b => b.id !== id))
  }

  if (view === 'list') return (
    <div className="px-8 py-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold">Blog Posts</h1>
          <p className="text-gray-400 text-sm mt-1">Create and manage your blog content.</p>
        </div>
        <button onClick={openCreate}
          className="bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-4 py-2 rounded-lg text-sm transition">
          + New Post
        </button>
      </div>

      {loading ? (
        <div className="space-y-4">{[1,2,3].map(i => <div key={i} className="bg-white/5 rounded-xl h-24 animate-pulse" />)}</div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 mb-4">No blog posts yet.</p>
          <button onClick={openCreate} className="bg-[#1e40af] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1d3a9e] transition">
            Write your first post
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-[#0d1f3c] border border-white/10 rounded-xl p-5 flex items-start gap-5">
              <div className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 shrink-0 overflow-hidden">
                {blog.coverImage && <img src={blog.coverImage} alt="" className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <span className="font-bold text-sm truncate">{blog.title}</span>
                  <span className={`text-xs border px-2 py-0.5 rounded-full ${
                    blog.published ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-gray-500/10 text-gray-400 border-gray-500/30'
                  }`}>
                    {blog.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p className="text-gray-400 text-xs truncate mb-1">{blog.excerpt}</p>
                <p className="text-gray-600 text-xs">
                  {blog.published && blog.publishedAt
                    ? `Published ${new Date(blog.publishedAt).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}`
                    : `Created ${new Date(blog.createdAt).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}`}
                </p>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button onClick={() => openEdit(blog)} className="text-xs bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg transition">Edit</button>
                <button onClick={() => togglePublish(blog)}
                  className={`text-xs px-3 py-1.5 rounded-lg transition font-medium ${blog.published ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-green-700 hover:bg-green-600 text-white'}`}>
                  {blog.published ? 'Unpublish' : 'Publish'}
                </button>
                <button onClick={() => deleteBlog(blog.id)} className="text-xs text-gray-500 hover:text-red-400 border border-white/10 px-3 py-1.5 rounded-lg transition">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="px-8 py-8 max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setView('list')} className="text-gray-400 hover:text-white transition text-sm">← Back</button>
        <div>
          <h1 className="text-2xl font-extrabold">{view === 'create' ? 'New Blog Post' : 'Edit Post'}</h1>
          <p className="text-gray-400 text-sm mt-1">{view === 'create' ? 'Write and publish a new article.' : 'Update your existing post.'}</p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-semibold text-gray-300 block mb-1.5">Title *</label>
          <input type="text" placeholder="Post title..." value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            className="w-full bg-[#0d1f3c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-300 block mb-1.5">Excerpt</label>
          <input type="text" placeholder="Short summary shown on blog listing..." value={form.excerpt}
            onChange={e => setForm({ ...form, excerpt: e.target.value })}
            className="w-full bg-[#0d1f3c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-300 block mb-1.5">Cover Image URL</label>
          <input type="text" placeholder="/images/blog/my-cover.jpg" value={form.coverImage}
            onChange={e => setForm({ ...form, coverImage: e.target.value })}
            className="w-full bg-[#0d1f3c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-300 block mb-1.5">Content *</label>
          <p className="text-gray-500 text-xs mb-2">Supports HTML — use &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;strong&gt; etc.</p>
          <textarea rows={16} placeholder="Write your blog post content here..." value={form.content}
            onChange={e => setForm({ ...form, content: e.target.value })}
            className="w-full bg-[#0d1f3c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition resize-y font-mono" />
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setForm({ ...form, published: !form.published })}
            className={`relative w-11 h-6 rounded-full transition-colors ${form.published ? 'bg-[#1e40af]' : 'bg-white/10'}`}>
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${form.published ? 'left-6' : 'left-1'}`} />
          </button>
          <span className="text-sm text-gray-300">{form.published ? 'Will be published immediately' : 'Save as draft'}</span>
        </div>
        {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">{error}</div>}
        <div className="flex gap-3 pt-2">
          <button onClick={handleSave} disabled={saving}
            className="bg-[#1e40af] hover:bg-[#1d3a9e] disabled:opacity-50 text-white font-bold px-8 py-3 rounded-lg transition">
            {saving ? 'Saving...' : view === 'create' ? 'Create Post' : 'Save Changes'}
          </button>
          <button onClick={() => setView('list')} className="bg-white/5 hover:bg-white/10 text-gray-300 px-6 py-3 rounded-lg transition">Cancel</button>
        </div>
      </div>
    </div>
  )
}