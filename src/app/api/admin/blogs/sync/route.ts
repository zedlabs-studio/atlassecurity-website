import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { syncMockBlogsToDatabase } from '@/lib/blogService'

async function isAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value === 'authenticated'
}

export async function POST() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await syncMockBlogsToDatabase()
    if (!result.success) {
      return NextResponse.json({ error: result.error || 'Failed to sync blogs' }, { status: 500 })
    }

    try {
      revalidatePath('/blog')
      revalidatePath('/sitemap.xml')
    } catch (revalErr) {
      console.warn('Revalidation notice:', revalErr)
    }

    return NextResponse.json({
      success: true,
      message: `Successfully synchronized ${result.count} blog posts.`,
      count: result.count,
    })
  } catch (err) {
    console.error('Sync blogs error:', err)
    return NextResponse.json({ error: 'Failed to sync blogs' }, { status: 500 })
  }
}
