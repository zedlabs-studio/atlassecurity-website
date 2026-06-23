'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      if (res.ok) {
        router.push('/admin/dashboard')
      } else {
        setError('Invalid username or password.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1628]">
      <div className="bg-[#0d1f3c] border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-white">Admin Panel</h1>
          <p className="text-gray-400 text-sm mt-1">Atlas Security — Restricted Access</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3 mb-5">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1.5">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#1e40af] transition"
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#1e40af] hover:bg-[#1d3a9e] disabled:opacity-50 text-white font-bold py-3 rounded-lg transition mt-2"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  )
}