'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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
  updatedAt?: string
}

type View = 'list' | 'create' | 'edit'

const emptyForm = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  coverImage: '',
  published: false,
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function AdminBlogs() {
  const router = useRouter()
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<View>('list')
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all')

  async function loadBlogs() {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/blogs')
      if (res.status === 401) {
        router.push('/admin/login')
        return
      }
      const data = await res.json()
      if (Array.isArray(data)) {
        setBlogs(data)
      }
    } catch (err) {
      console.error('Failed to load blogs:', err)
      setError('Could not load blog posts. Please check your network or refresh.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBlogs()
  }, [])

  function openCreate() {
    setForm(emptyForm)
    setEditingBlog(null)
    setError('')
    setSuccessMsg('')
    setView('create')
  }

  function openEdit(blog: Blog) {
    setForm({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      coverImage: blog.coverImage,
      published: blog.published,
    })
    setEditingBlog(blog)
    setError('')
    setSuccessMsg('')
    setView('edit')
  }

  async function handleSave() {
    if (!form.title.trim() || !form.content.trim()) {
      setError('Title and content are required.')
      return
    }

    setSaving(true)
    setError('')
    setSuccessMsg('')

    try {
      if (view === 'create') {
        const res = await fetch('/api/admin/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        const data = await res.json()

        if (res.ok) {
          setBlogs(prev => [data, ...prev])
          setView('list')
          setSuccessMsg('Blog post created successfully!')
          setTimeout(() => setSuccessMsg(''), 4000)
        } else {
          setError(data.error || 'Failed to create post.')
        }
      } else if (view === 'edit' && editingBlog) {
        const res = await fetch(`/api/admin/blogs/${editingBlog.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        const data = await res.json()

        if (res.ok) {
          setBlogs(prev => prev.map(b => (b.id === data.id ? data : b)))
          setView('list')
          setSuccessMsg('Blog post updated successfully!')
          setTimeout(() => setSuccessMsg(''), 4000)
        } else {
          setError(data.error || 'Failed to update post.')
        }
      }
    } catch (err) {
      console.error('Save error:', err)
      setError('A network error occurred while saving.')
    } finally {
      setSaving(false)
    }
  }

  async function togglePublish(blog: Blog) {
    try {
      const res = await fetch(`/api/admin/blogs/${blog.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !blog.published }),
      })
      if (res.ok) {
        const updated = await res.json()
        setBlogs(prev => prev.map(b => (b.id === updated.id ? updated : b)))
      }
    } catch (err) {
      console.error('Toggle publish error:', err)
    }
  }

  async function deleteBlog(id: string, title: string) {
    if (!confirm(`Are you sure you want to permanently delete "${title}"?\n\nThis will remove it from the admin panel and the public website.`)) {
      return
    }

    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setBlogs(prev => prev.filter(b => b.id !== id))
        setSuccessMsg('Post deleted successfully.')
        setTimeout(() => setSuccessMsg(''), 3000)
      } else {
        alert('Failed to delete post.')
      }
    } catch (err) {
      console.error('Delete error:', err)
      alert('Error deleting post.')
    }
  }

  async function handleSyncDefaultBlogs() {
    if (!confirm('This will ensure all 10 default website blog posts are stored in the database. Any missing defaults will be added. Continue?')) {
      return
    }

    setSyncing(true)
    setError('')
    try {
      const res = await fetch('/api/admin/blogs/sync', { method: 'POST' })
      const data = await res.json()
      if (res.ok) {
        setSuccessMsg(data.message || 'Blogs synchronized successfully!')
        await loadBlogs()
        setTimeout(() => setSuccessMsg(''), 5000)
      } else {
        setError(data.error || 'Failed to sync default blogs.')
      }
    } catch (err) {
      console.error('Sync error:', err)
      setError('Network error while syncing.')
    } finally {
      setSyncing(false)
    }
  }

  // Filtered blogs
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    if (filterStatus === 'published') return matchesSearch && blog.published
    if (filterStatus === 'draft') return matchesSearch && !blog.published
    return matchesSearch
  })

  const publishedCount = blogs.filter(b => b.published).length
  const draftCount = blogs.filter(b => !b.published).length

  if (view === 'list') {
    return (
      <div className="px-8 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-white">Blog Posts</h1>
            <p className="text-gray-400 text-sm mt-1">
              Manage all articles published on your website. Changes reflect immediately live.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSyncDefaultBlogs}
              disabled={syncing}
              title="Populate/Restore all 10 standard website blogs into the database"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-medium px-3.5 py-2 rounded-lg text-sm transition flex items-center gap-2 disabled:opacity-50"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
              {syncing ? 'Syncing...' : 'Sync Default Blogs'}
            </button>
            <button
              onClick={openCreate}
              className="bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-4 py-2 rounded-lg text-sm transition shadow-sm"
            >
              + New Post
            </button>
          </div>
        </div>

        {/* Success / Error notification banner */}
        {successMsg && (
          <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg px-4 py-3 mb-5 flex items-center justify-between">
            <span>{successMsg}</span>
            <button onClick={() => setSuccessMsg('')} className="text-green-400 hover:text-white">✕</button>
          </div>
        )}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3 mb-5 flex items-center justify-between">
            <span>{error}</span>
            <button onClick={() => setError('')} className="text-red-400 hover:text-white">✕</button>
          </div>
        )}

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 bg-[#0d1f3c] border border-white/10 rounded-xl p-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search posts by title, slug, or content..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a1628] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-white text-sm outline-none focus:border-[#1e40af] transition"
            />
            <svg
              className="absolute left-3 top-2.5 text-gray-500"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 bg-[#0a1628] p-1 rounded-lg border border-white/5">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                filterStatus === 'all' ? 'bg-[#1e40af] text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              All ({blogs.length})
            </button>
            <button
              onClick={() => setFilterStatus('published')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                filterStatus === 'published' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Published ({publishedCount})
            </button>
            <button
              onClick={() => setFilterStatus('draft')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                filterStatus === 'draft' ? 'bg-amber-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Drafts ({draftCount})
            </button>
          </div>
        </div>

        {/* Blog Cards */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white/5 rounded-xl h-24 animate-pulse" />
            ))}
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-16 bg-[#0d1f3c] border border-white/10 rounded-2xl">
            <svg className="mx-auto mb-3 text-gray-500" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="8" y1="9" x2="16" y2="9" />
              <line x1="8" y1="13" x2="14" y2="13" />
            </svg>
            <p className="text-gray-400 font-medium mb-1">
              {searchQuery ? 'No posts match your search query.' : 'No blog posts found.'}
            </p>
            <p className="text-gray-500 text-xs mb-5">
              {blogs.length === 0
                ? 'Sync the default blogs from your website or create a new post to get started.'
                : 'Try clearing your search query or filter.'}
            </p>
            {blogs.length === 0 && (
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleSyncDefaultBlogs}
                  disabled={syncing}
                  className="bg-white/10 hover:bg-white/15 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
                >
                  {syncing ? 'Syncing...' : 'Load 10 Standard Blogs'}
                </button>
                <button
                  onClick={openCreate}
                  className="bg-[#1e40af] hover:bg-[#1d3a9e] text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Create New Post
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBlogs.map(blog => (
              <div
                key={blog.id}
                className="bg-[#0d1f3c] border border-white/10 hover:border-white/20 rounded-xl p-5 flex flex-col sm:flex-row items-start gap-4 transition"
              >
                {/* Cover thumbnail */}
                <div className="w-20 h-20 rounded-lg bg-[#0a1628] border border-white/10 shrink-0 overflow-hidden relative">
                  {blog.coverImage ? (
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      onError={e => {
                        // fallback on broken images
                        ;(e.target as HTMLImageElement).src = '/images/blog-commercial-building.jpg'
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">
                      No Image
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                    <h2 className="font-bold text-white text-base leading-snug">{blog.title}</h2>
                    <span
                      className={`text-xs border px-2.5 py-0.5 rounded-full font-medium ${
                        blog.published
                          ? 'bg-green-500/10 text-green-400 border-green-500/30'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      }`}
                    >
                      {blog.published ? 'Published' : 'Draft'}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs line-clamp-2 mb-2 leading-relaxed">
                    {blog.excerpt || 'No excerpt provided.'}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 flex-wrap">
                    <span className="font-mono text-gray-400">/blog/{blog.slug}</span>
                    <span>•</span>
                    <span>
                      {blog.published && blog.publishedAt
                        ? `Published ${new Date(blog.publishedAt).toLocaleDateString('en-NZ', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}`
                        : `Created ${new Date(blog.createdAt).toLocaleDateString('en-NZ', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}`}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col gap-2 shrink-0 self-end sm:self-center w-full sm:w-auto justify-end">
                  {blog.published && (
                    <Link
                      href={`/blog/${blog.slug}`}
                      target="_blank"
                      className="text-xs text-center bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 px-3 py-1.5 rounded-lg transition"
                    >
                      View Live ↗
                    </Link>
                  )}
                  <button
                    onClick={() => openEdit(blog)}
                    className="text-xs bg-white/5 hover:bg-white/10 text-gray-200 px-3 py-1.5 rounded-lg transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => togglePublish(blog)}
                    className={`text-xs px-3 py-1.5 rounded-lg transition font-medium ${
                      blog.published
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-green-700 hover:bg-green-600 text-white'
                    }`}
                  >
                    {blog.published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button
                    onClick={() => deleteBlog(blog.id, blog.title)}
                    className="text-xs text-red-400 hover:bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-lg transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Create or Edit View
  return (
    <div className="px-8 py-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setView('list')}
          className="text-gray-400 hover:text-white transition text-sm flex items-center gap-1.5"
        >
          <span>←</span> Back to posts
        </button>
        <div>
          <h1 className="text-2xl font-extrabold text-white">
            {view === 'create' ? 'New Blog Post' : 'Edit Post'}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {view === 'create'
              ? 'Write and publish a new article for your website.'
              : `Updating "${editingBlog?.title}"`}
          </p>
        </div>
      </div>

      <div className="bg-[#0d1f3c] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
        {/* Title */}
        <div>
          <label className="text-sm font-semibold text-gray-200 block mb-1.5">Title *</label>
          <input
            type="text"
            placeholder="e.g. Commercial Building After-Hours Security Checklist"
            value={form.title}
            onChange={e => {
              const newTitle = e.target.value
              if (view === 'create' && (!form.slug || form.slug === slugify(form.title))) {
                setForm({ ...form, title: newTitle, slug: slugify(newTitle) })
              } else {
                setForm({ ...form, title: newTitle })
              }
            }}
            className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition"
          />
        </div>

        {/* Slug */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-semibold text-gray-200">URL Slug *</label>
            <button
              type="button"
              onClick={() => setForm({ ...form, slug: slugify(form.title) })}
              className="text-xs text-blue-400 hover:text-blue-300"
            >
              Generate from Title
            </button>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-3 text-gray-500 text-sm font-mono">/blog/</span>
            <input
              type="text"
              placeholder="post-url-slug"
              value={form.slug}
              onChange={e => setForm({ ...form, slug: slugify(e.target.value) })}
              className="w-full bg-[#0a1628] border border-white/10 rounded-lg pl-18 pr-4 py-3 text-white text-sm font-mono outline-none focus:border-[#1e40af] transition"
            />
          </div>
          <p className="text-gray-500 text-xs mt-1">Live URL: https://www.atlassecurity.co.nz/blog/{form.slug || '...'}</p>
        </div>

        {/* Excerpt */}
        <div>
          <label className="text-sm font-semibold text-gray-200 block mb-1.5">Excerpt (Short Summary)</label>
          <textarea
            rows={3}
            placeholder="A short description that will appear on Google and in the blog cards..."
            value={form.excerpt}
            onChange={e => setForm({ ...form, excerpt: e.target.value })}
            className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition"
          />
        </div>

        {/* Cover Image */}
        <div>
          <label className="text-sm font-semibold text-gray-200 block mb-1.5">Cover Image URL</label>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="/images/blog-commercial-building.jpg or https://..."
                value={form.coverImage}
                onChange={e => setForm({ ...form, coverImage: e.target.value })}
                className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition"
              />
              <p className="text-gray-500 text-xs mt-1">Use a path like /images/blog-commercial-building.jpg or an external https link.</p>
            </div>
            {form.coverImage && (
              <div className="w-24 h-20 rounded-lg bg-[#0a1628] border border-white/10 overflow-hidden shrink-0">
                <img
                  src={form.coverImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={e => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-semibold text-gray-200">Article Content *</label>
            <span className="text-xs text-gray-400">HTML supported</span>
          </div>
          <p className="text-gray-500 text-xs mb-2">
            Use standard HTML tags: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;a href=&quot;...&quot;&gt;. H2 tags will automatically generate the Table of Contents.
          </p>
          <textarea
            rows={18}
            placeholder="<h2>Introduction</h2><p>Your article content goes here...</p>"
            value={form.content}
            onChange={e => setForm({ ...form, content: e.target.value })}
            className="w-full bg-[#0a1628] border border-white/10 rounded-lg p-4 text-white text-sm font-mono outline-none focus:border-[#1e40af] transition resize-y leading-relaxed"
          />
        </div>

        {/* Published status toggle */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setForm({ ...form, published: !form.published })}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              form.published ? 'bg-green-600' : 'bg-gray-700'
            }`}
          >
            <span
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                form.published ? 'left-7' : 'left-1'
              }`}
            />
          </button>
          <div>
            <span className="text-sm font-medium text-white">
              {form.published ? 'Publish Immediately' : 'Save as Draft'}
            </span>
            <p className="text-gray-400 text-xs">
              {form.published
                ? 'This post will be visible to all visitors on www.atlassecurity.co.nz/blog'
                : 'This post will remain hidden from the website until published'}
            </p>
          </div>
        </div>

        {/* Error notification */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        {/* Submit buttons */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="bg-[#1e40af] hover:bg-[#1d3a9e] disabled:opacity-50 text-white font-bold px-8 py-3 rounded-lg text-sm transition shadow-sm"
          >
            {saving ? 'Saving...' : view === 'create' ? 'Create & Save Post' : 'Save Changes'}
          </button>
          <button
            type="button"
            onClick={() => setView('list')}
            className="bg-white/5 hover:bg-white/10 text-gray-300 px-6 py-3 rounded-lg text-sm transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}