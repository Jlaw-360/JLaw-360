import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

function isSafeRedirectUrl(url: string, origin: string): boolean {
  if (!url) return false
  try {
    const parsed = new URL(String(url).replace(/[\t\n\r]/g, ''), origin)
    return parsed.origin === origin && (parsed.protocol === 'http:' || parsed.protocol === 'https:')
  } catch {
    return false
  }
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/'

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options) {
            cookieStore.set({ name, value: '', ...options })
          },
        },
      }
    )
    
    // Exchange the code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Successful login, redirect to original destination or home
      const destination = isSafeRedirectUrl(next, requestUrl.origin) ? next : '/'
      return NextResponse.redirect(new URL(destination, requestUrl.origin))
    }
  }

  // Return the user to an error page or back to login with an error
  return NextResponse.redirect(new URL('/login?error=auth-callback-failed', requestUrl.origin))
}
