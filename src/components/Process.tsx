"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Cpu, LineChart, Server } from "lucide-react";

const phases = [
  {
    id: "01",
    title: "Data Ingestion & Targeting",
    desc: "We deploy advanced scraping algorithms and Meta Pixel architecture to build a hyper-targeted audience model before spending a dime.",
    icon: Target,
    metrics: ["10K+ Data Points", "Lookalike Modeling"],
    color: "var(--color-gold)",
  },
  {
    id: "02",
    title: "Algorithmic Capture",
    desc: "Traffic is routed to high-velocity conversion funnels. Dynamic copy adapts to the user's intent, maximizing the lead capture rate.",
    icon: Server,
    metrics: ["A/B/n Multivariate", "Dynamic Routing"],
    color: "var(--color-teal)",
  },
  {
    id: "03",
    title: "Autonomous Nurturing",
    desc: "AI agents take over. Inbound leads are instantly qualified via SMS/Email drips and booked directly into your sales calendar 24/7.",
    icon: Cpu,
    metrics: ["< 2min Lead Response", "Natural Language AI"],
    color: "var(--color-gold)",
  },
  {
    id: "04",
    title: "Scale & Dominate",
    desc: "Once the baseline ROAS is validated, we inject capital into the winning variants, scaling your market share exponentially.",
    icon: LineChart,
    metrics: ["Omnipresent Retargeting", "Predictive LTV"],
    color: "var(--color-teal)",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative py-32 bg-[#020507] overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[var(--color-teal)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <p className="text-[10px] font-mono text-[var(--color-teal)] uppercase tracking-[0.3em] mb-4 border border-[var(--color-teal)]/30 px-4 py-1.5 rounded-full bg-[var(--color-teal)]/10">
              System Architecture
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-teal)]">Growth Engine</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Standard agencies run "ads." We engineer a fully automated, four-stage acquisition pipeline that scales revenue predictably.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Glowing Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2 hidden md:block">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-[var(--color-teal)] via-[var(--color-gold)] to-[var(--color-teal)] shadow-[0_0_15px_rgba(39,126,149,0.5)]"
              style={{ height: useTransform(pathLength, (v) => `${v * 100}%`) }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = phase.icon;

              return (
                <div key={phase.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-[#050A0E] border-2 border-gray-800 rounded-xl -translate-x-1/2 flex items-center justify-center z-10 shadow-2xl transition-colors duration-500 hover:border-[var(--color-gold)] hidden md:flex">
                    <span className="text-xs font-mono font-bold text-gray-400">{phase.id}</span>
                    {/* Glowing dot that activates on scroll */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-gold)] opacity-0 rounded-xl"
                      style={{ opacity: useTransform(pathLength, [idx * 0.25, (idx * 0.25) + 0.1], [0, 0.2]) }}
                    />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                  >
                    <div className="cyber-glass p-8 rounded-2xl relative group hover:border-[var(--color-gold)]/40 transition-colors duration-500 overflow-hidden">
                      
                      {/* Hover Gradient Sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-black/50 border border-gray-700 flex items-center justify-center shadow-inner">
                          <Icon size={20} className="text-white" style={{ color: phase.color }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{phase.title}</h3>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {phase.desc}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {phase.metrics.map((metric, i) => (
                          <span key={i} className="px-3 py-1.5 text-[10px] font-mono text-gray-300 border border-gray-700 rounded bg-black/30">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
