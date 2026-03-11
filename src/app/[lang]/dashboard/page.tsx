import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '../login/actions'
import { LogOut } from 'lucide-react'
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'
import DashboardClient from './DashboardClient'

export default async function DashboardPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const supabase = await createClient()

  // Verify Auth on the Server
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect(`/${lang}/login`)
  }

  // Fetch translation dictionary
  const dict = await getDictionary(lang as Locale);

  // Fetch all leads from the Supabase database
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  const typedLeads = leads || [];

  return (
    <div className="min-h-screen bg-[#020507] text-white">
      {/* Top Navbar */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--color-teal)] animate-pulse" />
            <span className="font-bold tracking-widest uppercase text-sm">JLAW 360 <span className="text-[var(--color-gold)]">{dict.dashboard?.portal || "Portal"}</span></span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-xs font-mono text-gray-400 hidden sm:block">
              {dict.dashboard?.auth_id || "Connected Auth ID:"} <span className="text-[var(--color-teal)]">{user.email}</span>
            </div>
            <form action={logout}>
              <input type="hidden" name="lang" value={lang} />
              <button className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[var(--color-gold)] transition-colors flex items-center gap-2">
                {dict.dashboard?.terminate || "Terminate Session"}
                <LogOut size={16} />
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        
        {/* Abstract Accents */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-gold)]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-teal)]/5 blur-[120px] rounded-full pointer-events-none" />

        <DashboardClient leads={typedLeads} dict={dict} />

      </main>
    </div>
  )
}
