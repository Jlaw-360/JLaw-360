import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '../login/actions'
import { LogOut, Activity, Users, Database } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Verify Auth on the Server
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-[#020507] text-white">
      {/* Top Navbar */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--color-teal)] animate-pulse" />
            <span className="font-bold tracking-widest uppercase text-sm">JLAW 360 <span className="text-[var(--color-gold)]">Portal</span></span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-xs font-mono text-gray-400 hidden sm:block">
              Connected Auth ID: <span className="text-[var(--color-teal)]">{user.email}</span>
            </div>
            <form action={logout}>
              <button className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[var(--color-gold)] transition-colors flex items-center gap-2">
                Terminate Session
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

        <div className="mb-10 relative z-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Welcome Back.</h1>
          <p className="text-gray-400 font-light">Your algorithmic growth engine is running.</p>
        </div>

        {/* Live Data Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          {/* Module 1 */}
          <div className="cyber-glass p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-gray-500">Active Funnels</span>
              <Database size={18} className="text-[var(--color-teal)]" />
            </div>
            <div className="text-4xl font-black mb-1">3</div>
            <div className="text-xs font-mono text-[var(--color-gold)]">+1 Deployed Today</div>
          </div>

          {/* Module 2 */}
          <div className="cyber-glass p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-gray-500">Captured Leads</span>
              <Users size={18} className="text-[var(--color-gold)]" />
            </div>
            <div className="text-4xl font-black mb-1">1,204</div>
            <div className="text-xs font-mono text-[var(--color-teal)]">+18% vs Last Week</div>
          </div>

          {/* Module 3 */}
          <div className="cyber-glass p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-gray-500">System Status</span>
              <Activity size={18} className="text-[var(--color-teal)]" />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-mono font-bold">Online & Routing</span>
            </div>
          </div>
          
        </div>

        {/* Database Notice */}
        <div className="mt-12 p-6 rounded-xl bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/30 backdrop-blur-md relative z-10">
          <p className="text-sm font-mono text-[var(--color-teal)]">
             &gt; Connect your dynamic Supabase database tables here to pipe real-time pipeline data to the client dashboard.
          </p>
        </div>

      </main>
    </div>
  )
}
