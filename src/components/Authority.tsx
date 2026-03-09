"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Database, Server, Zap } from "lucide-react";

const metrics = [
  { val: "24/7", label: "Model Training", icon: Database, color: "var(--color-gold)" },
  { val: "150+", label: "Funnels Deployed", icon: Server, color: "var(--color-teal)" },
  { val: "$3.2M", label: "Tracked Revenue", icon: Activity, color: "var(--color-gold)" },
  { val: "99.9%", label: "Uptime Guarentee", icon: ShieldCheck, color: "var(--color-teal)" },
];

const technologies = [
  { name: "GoHighLevel Ecosystem", level: "98%" },
  { name: "ClickFunnels Architecture", level: "95%" },
  { name: "Meta/Google Ads Algorithm", level: "92%" },
  { name: "AI Natural Language Navigators", level: "88%" },
];

export default function Authority() {
  return (
    <section id="authority" className="relative py-32 bg-[#020507] overflow-hidden">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--color-teal)]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-gold)]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        
        {/* Subtle grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="authority-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[var(--color-teal)]"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#authority-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse shadow-[0_0_10px_rgba(205,166,81,1)]" />
              <p className="text-[10px] font-mono text-[var(--color-gold)] uppercase tracking-[0.3em]">
                Live System Diagnostics
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Empirical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-gold)]">Performance Data</span>
            </h2>
          </motion.div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main KPI Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 cyber-glass rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-teal)]/5 to-transparent h-[10%] w-full animate-float-slow opacity-50" />
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800 relative z-10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity size={20} className="text-[var(--color-teal)]" />
                Global Metric Aggregation
              </h3>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest px-2 py-1 bg-black/50 rounded border border-gray-800">
                Last updated: LIVE
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="bg-[#050A0E] border border-gray-800 rounded-xl p-6 text-center hover:border-gray-600 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-gray-800/40 to-transparent flex items-start justify-end p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                       <Icon size={12} style={{ color: m.color }} />
                    </div>
                    <div className="text-3xl font-black tracking-tight mb-2" style={{ color: m.color, textShadow: `0 0 20px ${m.color}40` }}>
                      {m.val}
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Simulated Data Chart */}
            <div className="mt-8 pt-6 border-t border-gray-800 relative z-10">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-xs font-mono text-gray-400">Cumulative ROAS Trajectory</span>
                 <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)]" />
                   <span className="text-[10px] font-mono text-gray-500">Optimum Variance</span>
                 </div>
               </div>
               <div className="h-32 w-full flex items-end justify-between gap-1 sm:gap-2">
                 {[15, 22, 18, 28, 35, 32, 45, 52, 48, 65, 75, 82, 90, 100].map((height, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: "0%" }}
                     whileInView={{ height: `${height}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: i * 0.05 }}
                     className="w-full bg-gradient-to-t from-[var(--color-teal-dark)] to-[var(--color-teal)] rounded-t-sm relative group"
                   >
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-[9px] font-mono text-[var(--color-gold)] px-1 py-0.5 rounded border border-gray-800 z-20">
                       +{height}%
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Tech Stack Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 cyber-glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap size={20} className="text-[var(--color-gold)]" />
              <h3 className="text-xl font-bold text-white tracking-tight">System Integrations</h3>
            </div>

            <div className="space-y-6">
              {technologies.map((tech, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-mono text-gray-300 uppercase tracking-wide">{tech.name}</span>
                    <span className="text-[10px] font-mono text-[var(--color-gold)]">{tech.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-black rounded-full overflow-hidden border border-gray-800">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: tech.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                      className="h-full bg-gradient-to-r from-[var(--color-gold)] to-[#F2D780]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 rounded-xl bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/30 backdrop-blur-md">
              <p className="text-xs font-mono text-[var(--color-teal)] uppercase tracking-widest text-center">
                All Systems Parameterized & Monitored
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
