import { login, signup } from './actions'
import { ArrowLeft, Lock } from 'lucide-react'
import Link from 'next/link'
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'

export default async function LoginPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  
  return (
    <div className="min-h-screen bg-[#020507] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[var(--color-teal)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Back Button */}
      <Link href={`/${lang}`} className="absolute top-8 left-8 text-gray-400 hover:text-white flex items-center gap-2 transition-colors z-20">
        <ArrowLeft size={20} />
        <span className="text-sm font-semibold uppercase tracking-widest font-mono">{dict.login?.return || "Return"}</span>
      </Link>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="cyber-glass rounded-2xl p-8 sm:p-10 shadow-2xl animate-fade-in-up border border-gray-800">
          
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-teal)]/20 to-black border border-[var(--color-teal)]/40 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(39,126,149,0.2)]">
               <Lock size={28} className="text-[var(--color-gold)]" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">{dict.login?.title || "Client Portal Access"}</h1>
            <p className="text-gray-400 text-sm mt-2 text-center">{dict.login?.desc || "Enter your clearance credentials to view your live data dashboard."}</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-[#277E95]">{dict.login?.email_label || "Email Authorization"}</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                placeholder={dict.login?.email_placeholder || "executive@company.com"}
                className="w-full bg-black/50 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-all font-mono text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-xs font-mono uppercase tracking-widest text-[#277E95]">{dict.login?.pass_label || "Secure Passkey"}</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                placeholder={dict.login?.pass_placeholder || "••••••••••••"}
                className="w-full bg-black/50 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-all font-mono text-sm tracking-widest"
              />
            </div>

            <div className="pt-4 space-y-4">
              <button 
                formAction={login} 
                className="w-full bg-gradient-to-r from-[var(--color-gold)] to-[#F2D780] hover:scale-[1.02] text-[#050A0E] font-bold py-3 rounded-lg flex justify-center items-center transition-transform uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(205,166,81,0.3)]"
              >
                {dict.login?.btn_login || "Initialize Session"}
              </button>
              
              <button 
                formAction={signup} 
                className="w-full bg-transparent border border-gray-600 text-gray-300 font-bold py-3 hover:border-[var(--color-teal)] hover:text-white rounded-lg flex justify-center items-center transition-colors uppercase tracking-widest text-sm"
              >
                {dict.login?.btn_signup || "Request Authorization"}
              </button>
            </div>
          </form>

        </div>

        {/* Tactical Footer */}
        <div className="mt-8 text-center flex flex-col items-center gap-2">
           <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-teal)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-teal)]"></span>
           </span>
           <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">{dict.login?.secure || "Secure Connection Established"}</p>
        </div>
      </div>
    </div>
  )
}
