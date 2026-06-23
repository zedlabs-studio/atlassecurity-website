'use client'
import { usePathname } from 'next/navigation'
import AdminSidebar from '../../components/admin/AdminSidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-[#0a1628]">
        {children}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex">
      <AdminSidebar />
      <div className="flex-1 ml-56 min-h-screen">
        {children}
      </div>
    </div>
  )
}