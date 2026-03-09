import { updateSession } from './utils/supabase/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n/config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  // match locale
  const locales: string[] = [...i18n.locales]
  try {
    return matchLocale(languages, locales, i18n.defaultLocale)
  } catch (e) {
    return i18n.defaultLocale
  }
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /services
    // The new URL is now /fr/services
    const newUrl = new URL(
      `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
      request.url
    )
    // Maintain search params
    newUrl.search = request.nextUrl.search
    
    // Create a rewrite/redirect response
    const redirectResponse = NextResponse.redirect(newUrl)
    
    // Still need to update Supabase session even when redirecting
    // We can just rely on the next request to update the session, 
    // or we can pass the redirected request through updateSession if needed.
    return redirectResponse
  }

  // If locale is present, proceed with Supabase auth checks
  return await updateSession(request)
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
