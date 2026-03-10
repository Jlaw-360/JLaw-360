"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, TrendingUp, Users, DollarSign, Target } from "lucide-react";

export default function ROICalculator({ dict }: { dict?: any }) {
  const [visitors, setVisitors] = useState<number>(1000);
  const [conversionRate, setConversionRate] = useState<number>(3);
  const [closeRate, setCloseRate] = useState<number>(20);
  const [jobValue, setJobValue] = useState<number>(5000);

  // Math
  const leads = Math.round(visitors * (conversionRate / 100));
  const customers = Math.round(leads * (closeRate / 100));
  const monthlyRevenue = customers * jobValue;
  const annualRevenue = monthlyRevenue * 12;

  // JLAW System Projection
  const projConversionRate = Math.min(conversionRate * 2.5, 15);
  const projCloseRate = Math.min(closeRate * 1.5, 60);
  const projLeads = Math.round(visitors * (projConversionRate / 100));
  const projCustomers = Math.round(projLeads * (projCloseRate / 100));
  const projMonthlyRevenue = projCustomers * jobValue;
  const projAnnualRevenue = projMonthlyRevenue * 12;

  const additionalAnnualRevenue = projAnnualRevenue - annualRevenue;

  // Ensure fallback text if dict isn't provided (e.g. from industry page directly without refactor yet)
  const d = dict || {
    badge: "Interactive ROI Calculator",
    title_1: "See How Much Revenue You're",
    title_2: "Losing",
    sub: "Enter your current numbers below to see what happens when you install a proper Lead Generation System.",
    labels: {
      visitors: "Monthly Website Visitors",
      convRate: "Website Conversion Rate",
      closeRate: "Lead Close Rate",
      jobValue: "Average Job Value"
    },
    currentSys: {
      title: "Your Current System",
      leads: "Monthly Leads",
      clients: "New Clients",
      clients_per_mo: " /mo",
      monthlyRev: "Monthly Revenue:"
    },
    jlawSys: {
      badge: "JLAW 360 System",
      title: "With Optimized Funnel",
      leads: "Monthly Leads",
      clients: "New Clients",
      clients_per_mo: " /mo",
      monthlyRev: "Monthly Revenue:"
    },
    reveal: {
      text1: "By fixing your leaky funnel, you could generate an additional",
      text2: "In Missed Revenue Per Year",
      btn: "Fix My Lead Flow"
    }
  };

  return (
    <section id="calculator" className="py-24 px-6 relative overflow-hidden bg-[var(--color-navy)]">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-teal)]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-gold)]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm mb-3 block flex items-center justify-center gap-2">
            <Calculator size={16} /> {d.badge}
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            {d.title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">{d.title_2}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            {d.sub}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-5 space-y-8 glass-card p-8 rounded-3xl border border-gray-800 shadow-2xl bg-black/40">
            <div className="space-y-6">
              
              {/* Variable 1 */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                    <Users size={16} className="text-[var(--color-teal)]" /> {d.labels.visitors}
                  </label>
                  <span className="text-white font-mono bg-gray-900 px-3 py-1 rounded-lg text-sm border border-gray-700">{visitors.toLocaleString()}</span>
                </div>
                <input type="range" min="100" max="50000" step="100" value={visitors} onChange={(e) => setVisitors(Number(e.target.value))} className="w-full accent-[var(--color-teal)]" />
              </div>

              {/* Variable 2 */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                    <Target size={16} className="text-[var(--color-teal)]" /> {d.labels.convRate}
                  </label>
                  <span className="text-white font-mono bg-gray-900 px-3 py-1 rounded-lg text-sm border border-gray-700">{conversionRate}%</span>
                </div>
                <input type="range" min="0.5" max="15" step="0.5" value={conversionRate} onChange={(e) => setConversionRate(Number(e.target.value))} className="w-full accent-[var(--color-teal)]" />
              </div>

              {/* Variable 3 */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                    <TrendingUp size={16} className="text-[var(--color-teal)]" /> {d.labels.closeRate}
                  </label>
                  <span className="text-white font-mono bg-gray-900 px-3 py-1 rounded-lg text-sm border border-gray-700">{closeRate}%</span>
                </div>
                <input type="range" min="5" max="100" step="1" value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))} className="w-full accent-[var(--color-teal)]" />
              </div>

              {/* Variable 4 */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                    <DollarSign size={16} className="text-[var(--color-teal)]" /> {d.labels.jobValue}
                  </label>
                  <span className="text-[var(--color-gold)] font-mono bg-gray-900 px-3 py-1 rounded-lg text-sm border border-[var(--color-gold)]/30">${jobValue.toLocaleString()}</span>
                </div>
                <input type="range" min="500" max="50000" step="500" value={jobValue} onChange={(e) => setJobValue(Number(e.target.value))} className="w-full accent-[var(--color-gold)]" />
              </div>
            </div>
          </div>

          {/* Right: The Math & Output */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Current Status */}
              <div className="bg-[#111A20] p-6 rounded-2xl border border-gray-800">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">{d.currentSys.title}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{d.currentSys.leads}</span>
                    <span className="text-white font-bold">{leads}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{d.currentSys.clients}</span>
                    <span className="text-white font-bold">{customers}{d.currentSys.clients_per_mo}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex justify-between items-end">
                      <span className="text-gray-400 text-sm">{d.currentSys.monthlyRev}</span>
                      <span className="text-2xl font-bold text-white">${monthlyRevenue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* JLAW System */}
              <div className="bg-gradient-to-br from-[#0E4D55]/20 to-black p-6 rounded-2xl border border-[var(--color-teal)]/50 shadow-[0_0_30px_rgba(14,77,85,0.2)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[var(--color-teal)] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">{d.jlawSys.badge}</div>
                <h3 className="text-sm font-bold text-[var(--color-teal)] uppercase tracking-wider mb-4">{d.jlawSys.title}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{d.jlawSys.leads} <span className="text-xs text-[var(--color-teal)] ml-1">(↑ {projConversionRate}%)</span></span>
                    <span className="text-white font-bold">{projLeads}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{d.jlawSys.clients} <span className="text-xs text-[var(--color-teal)] ml-1">(↑ {projCloseRate}%)</span></span>
                    <span className="text-white font-bold">{projCustomers}{d.jlawSys.clients_per_mo}</span>
                  </div>
                  <div className="pt-4 border-t border-[var(--color-teal)]/30">
                    <div className="flex justify-between items-end">
                      <span className="text-[var(--color-teal)] text-sm font-bold">{d.jlawSys.monthlyRev}</span>
                      <span className="text-2xl font-bold text-white">${projMonthlyRevenue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Big Reveal */}
            <motion.div 
              key={additionalAnnualRevenue}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-r from-[var(--color-gold-muted)]/20 to-black border border-[var(--color-gold)]/50 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(212,175,55,0.15)]"
            >
              <p className="text-gray-300 mb-2 font-medium">{d.reveal.text1}</p>
              <div className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200 py-2">
                ${additionalAnnualRevenue.toLocaleString()}
              </div>
              <p className="text-gray-400 mt-2 tracking-wide uppercase text-sm font-bold">{d.reveal.text2}</p>
              
              <button className="mt-8 neon-btn-gold px-8 py-4 rounded-full font-bold text-sm w-full sm:w-auto inline-flex items-center justify-center gap-3">
                {d.reveal.btn} <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
