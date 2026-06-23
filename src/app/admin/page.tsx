import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function AdminRoot() {
  const cookieStore = await cookies()
  const isAuth = cookieStore.get('admin_session')?.value === 'authenticated'

  if (isAuth) redirect('/admin/dashboard')
  else redirect('/admin/login')
}