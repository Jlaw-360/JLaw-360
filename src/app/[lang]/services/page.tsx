import { Code2, Zap, BarChart3, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export const metadata = {
  title: "Services - JLAW 360 Marketing",
  description: "Découvrez notre écosystème de croissance automatisé à 360°.",
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const icons = [
    <Users className="w-8 h-8 text-[var(--color-gold)] mb-6" />,
    <BarChart3 className="w-8 h-8 text-[var(--color-teal)] mb-6" />,
    <Zap className="w-8 h-8 text-[var(--color-gold)] mb-6" />,
    <Code2 className="w-8 h-8 text-[var(--color-teal)] mb-6" />
  ]

  const services = dict.services.services_list.map((service: any, index: number) => ({
    ...service,
    icon: icons[index]
  }))

  return (
    <div className="pt-32 pb-24 min-h-screen">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-[var(--color-teal)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-[var(--color-gold)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/30 text-[var(--color-teal)] text-sm font-semibold mb-6 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[var(--color-teal)] animate-pulse" />
            {dict.services.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {dict.services.title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[#F2D780]">{dict.services.title_highlight}</span>
          </h1>
          <p className="text-xl text-gray-400">
            {dict.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="cyber-glass p-10 rounded-3xl border border-gray-800 hover:border-[var(--color-teal)] transition-all duration-500 group relative overflow-hidden">
               {/* Hover Glow */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              
               {service.icon}
               <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--color-teal)] transition-colors">{service.title}</h3>
               <p className="text-gray-400 mb-8 leading-relaxed">
                 {service.description}
               </p>
               
               <div className="space-y-3">
                 {service.features.map((feature: string, i: number) => (
                   <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                     <CheckCircle size={16} className="text-[var(--color-teal)]" />
                     {feature}
                   </div>
                 ))}
               </div>
            </div>
          ))}
        </div>

        {/* Tactical CTA */}
        <div className="cyber-glass p-12 text-center rounded-3xl border border-[var(--color-gold)]/30 relative overflow-hidden max-w-5xl mx-auto">
           <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)]/80 to-[var(--color-teal-dark)]/80 z-0" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-left">
               <h2 className="text-3xl font-black tracking-tight text-white mb-2">{dict.services.cta_title}</h2>
               <p className="text-gray-300 text-lg">{dict.services.cta_subtitle}</p>
             </div>
             <Link href={`/${lang}/#contact`} className="group px-8 py-4 bg-[var(--color-gold)] hover:bg-[#F2D780] text-black font-bold text-lg rounded-xl transition-all shadow-[0_0_30px_rgba(212,182,115,0.4)] hover:shadow-[0_0_50px_rgba(212,182,115,0.6)] hover:scale-105 flex items-center gap-2 whitespace-nowrap">
               {dict.services.cta_btn} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
        </div>

      </div>
    </div>
  )
}
