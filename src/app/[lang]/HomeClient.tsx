"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BarChart, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Aurora from "@/components/Aurora";

// Import new interactive funnel components
import ROICalculator from "@/components/funnels/ROICalculator";
import StrategyGenerator from "@/components/funnels/StrategyGenerator";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function HomeClient({ dict, lang }: { dict: any, lang: string }) {
  return (
    <main className="min-h-screen bg-[var(--color-navy)] text-white overflow-hidden selection:bg-[var(--color-gold)] selection:text-black">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 w-full min-h-[90vh] flex items-center border-b border-gray-900/50">
        
        {/* Full WebGL Aurora Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60 mix-blend-screen">
          <Aurora 
            colorStops={['#0E4D55', '#D4AF37', '#03090C']}
            amplitude={1.2}
            blend={0.5}
            speed={0.7}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="z-10 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white mb-8 bg-black/40 border border-gray-800 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse"></span>
              Interactive Growth Platform for Service Businesses
            </div>

            <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Turn Your Service Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-teal)]">Into a Lead Machine</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              See How Much Revenue Your Business Is Losing Without a Proper Lead Generation System. Stop guessing and start dominating your local market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#calculator" className="neon-btn-gold px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(205,166,81,0.3)] hover:shadow-[0_0_40px_rgba(205,166,81,0.5)] transition-shadow inline-flex items-center justify-center gap-2">
                <BarChart size={20} /> Calculate Lost Revenue
              </Link>
              <Link href="#strategy-generator" className="px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto border border-[var(--color-teal)] text-[var(--color-teal)] hover:bg-[var(--color-teal)] hover:text-white transition inline-flex items-center justify-center gap-2">
                Generate Growth Strategy <TrendingUp size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- INDUSTRY SELECTOR --- */}
      <section className="py-24 px-6 bg-[#061016] border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[var(--color-teal)] font-bold tracking-widest uppercase text-sm mb-3 block">Specialized Solutions</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">Engineered For <span className="text-[var(--color-gold)] text-glow">Elite Niches</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { path: "/roofing", title: "Roofing Companies", desc: "Storm chasing & organic local SEO dominance." },
              { path: "/hvac", title: "HVAC Companies", desc: "Emergency calls & automated dispatch routing." },
              { path: "/dental", title: "Dental Clinics", desc: "High-ticket implants & Invisalign patient funnels." },
              { path: "/landscaping", title: "Landscaping", desc: "Commercial contracts & luxury residential builds." }
            ].map((industry, i) => (
              <a key={i} href={industry.path} className="glass-card p-8 rounded-2xl border border-gray-800/60 hover:border-[var(--color-gold)] transition duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] bg-gradient-to-br from-[#111A20] to-black block text-left">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-gold)] transition flex items-center justify-between">
                  {industry.title} <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition duration-300" />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{industry.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE ROI CALCULATOR --- */}
      <ROICalculator />

      {/* --- WHAT THEY DO WRONG (PAIN POINTS) --- */}
      <section className="py-24 px-6 bg-[#03090C] border-y border-[var(--color-teal-dark)] relative overflow-hidden">
        {/* Diagonal accents */}
        <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-[var(--color-teal)]/5 transform rotate-12 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Your Competitors Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Stealing Your Jobs</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Most service businesses rely on word-of-mouth or outdated directory sites. Here is exactly where your lead funnel is leaking money right now.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* The Problems List */}
            <div className="space-y-6">
              {[
                { title: "No Conversion Optimized Website", desc: "Your site looks like a brochure instead of a 24/7 sales rep." },
                { title: "Zero Keyword Dominance", desc: "You aren't ranking for 'Emergency [Service] Near Me' when people need you most." },
                { title: "Slow Lead Response Time", desc: "If you don't call a web lead within 5 minutes, close rates drop by 80%. You have no automation." },
                { title: "Relying on Shared Lead Providers", desc: "Paying Angi/HomeAdvisor for a lead that gets sold to 5 other competitors." }
              ].map((problem, i) => (
                <div key={i} className="flex gap-4 p-6 bg-black/40 border border-gray-800 rounded-2xl group hover:border-red-500/50 transition">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold shrink-0">0{i+1}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                    <p className="text-gray-400 text-sm">{problem.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The Solution Image / Graphic */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden glass-card border border-[var(--color-teal)]/30 group">
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] to-transparent z-10"></div>
               <div className="absolute bottom-10 left-10 right-10 z-20">
                 <h3 className="text-3xl font-extrabold mb-4">We Fix The Leaks.</h3>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-lg"><CheckCircle className="text-[var(--color-gold)]" /> Custom Landing Page Funnels</li>
                   <li className="flex items-center gap-3 text-lg"><CheckCircle className="text-[var(--color-gold)]" /> Instant AI SMS & Email Follow-Ups</li>
                   <li className="flex items-center gap-3 text-lg"><CheckCircle className="text-[var(--color-gold)]" /> Exclusive High-Intent Leads</li>
                 </ul>
               </div>
               <Image 
                 src="/images/hero_dashboard.png" 
                 alt="Dashboard showing fixed lead flow" 
                 fill
                 className="object-cover opacity-50 group-hover:scale-105 transition duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      {/* --- STRATEGY GENERATOR FORM --- */}
      <StrategyGenerator />

      {/* --- FOOTER CTA --- */}
      <footer className="py-32 px-6 relative overflow-hidden text-center bg-[#010304] border-t-2 border-[var(--color-gold)]/20">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">Ready to Dominate <br /><span className="text-[var(--color-gold)] text-glow">Your Local Market?</span></h2>
          <p className="text-xl text-gray-300 mb-12 font-light">Stop competing on price. Partner with a strategic growth agency that builds predictable lead generation systems.</p>
          <button className="px-12 py-6 bg-[var(--color-gold)] text-black text-xl font-black rounded-xl hover:bg-white transition transform hover:-translate-y-2 shadow-[0_0_40px_rgba(205,166,81,0.5)] mx-auto flex items-center gap-3">
            Book Your Free Strategy Call
          </button>
        </div>
      </footer>

    </main>
  );
}
