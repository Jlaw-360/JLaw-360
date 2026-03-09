import { Target, Award, ShieldCheck, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export const metadata = {
  title: "About - JLAW 360 Marketing",
  description: "L'intelligence artificielle au service de votre domination locale et internationale.",
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return (
    <div className="pt-32 pb-24 min-h-screen">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[var(--color-teal)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/30 text-[var(--color-teal)] text-sm font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[var(--color-teal)] animate-pulse" />
              {dict.about.badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              {dict.about.title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[#F2D780]">{dict.about.title_highlight}</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              {dict.about.description_1}
              <br/><br/>
              {dict.about.description_2}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Link href={`/${lang}/services`} className="px-8 py-4 bg-gradient-to-r from-[#0E4D55] to-[#277E95] text-white font-bold text-center rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(39,126,149,0.3)]">
                 {dict.about.cta_primary}
               </Link>
               <Link href={`/${lang}/#contact`} className="px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-bold text-center rounded-xl hover:border-[var(--color-gold)] hover:text-white transition-all">
                 {dict.about.cta_secondary}
               </Link>
            </div>
          </div>
          
          <div className="flex-1 relative w-full aspect-square max-w-md mx-auto">
            {/* Holographic Element Simulating Tech/About */}
            <div className="absolute inset-0 cyber-glass rounded-[2rem] border border-[var(--color-gold)]/20 shadow-[0_0_50px_rgba(212,182,115,0.15)] flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-full h-full bg-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <h2 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-navy)] mb-2 opacity-80">
                 5+
               </h2>
               <p className="text-xl font-mono text-[var(--color-teal)] uppercase tracking-widest text-center">
                 {dict.about.years_exp_1} <br/> {dict.about.years_exp_2}
               </p>
            </div>
          </div>
        </div>

        {/* The Methodology / Pillars */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{dict.about.difference_title} <span className="text-[var(--color-teal)]">{dict.about.difference_highlight}</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{dict.about.difference_desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pb-10">
          {[
            {
              title: dict.about.pillars[0].title,
              description: dict.about.pillars[0].description,
              icon: <Target className="w-10 h-10 text-[var(--color-gold)] mb-4" />
            },
            {
              title: dict.about.pillars[1].title,
              description: dict.about.pillars[1].description,
              icon: <ShieldCheck className="w-10 h-10 text-[var(--color-teal)] mb-4" />
            },
            {
              title: dict.about.pillars[2].title,
              description: dict.about.pillars[2].description,
              icon: <Award className="w-10 h-10 text-[var(--color-gold)] mb-4" />
            }
          ].map((pillar, idx) => (
             <div key={idx} className="cyber-glass p-8 rounded-2xl border border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
               <div className="flex justify-center">{pillar.icon}</div>
               <h3 className="text-xl font-bold mb-3 text-white">{pillar.title}</h3>
               <p className="text-gray-400 text-sm">{pillar.description}</p>
             </div>
          ))}
        </div>

      </div>
    </div>
  )
}
