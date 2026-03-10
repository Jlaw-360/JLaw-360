"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const offers = [
  {
    id: "Tier 1",
    title: "Digital Launchpad",
    price: "$2,500",
    priceSuffix: "one-time",
    description: "The core foundational architecture for businesses generating under $500k/yr. We build the engine; you drive the traffic.",
    features: [
      "Custom High-Converting Web App",
      "Brand Identity & Positioning",
      "ClickFunnels Sales Funnel",
      "Automated Welcome Sequence",
      "Google Local Search Foundation",
      "30-Day Technical Support",
    ],
    cta: "Deploy Architecture",
    popular: false,
    gradient: "from-gray-800 to-[#0A1116]",
    accent: "var(--color-teal)",
    icon: Zap,
    borderGlow: "group-hover:shadow-[0_0_30px_rgba(39,126,149,0.3)]",
  },
  {
    id: "Tier 2",
    title: "Scale & Dominate",
    price: "$15,000",
    priceSuffix: "/ quarter",
    description: "The autonomous growth system for scaling to 'One Comma Club'. We handle the traffic, the AI, and the conversions.",
    features: [
      "Everything in Launchpad",
      "Full AI Automation Pipeline",
      "Omnipresent Meta & Google Ads",
      "Predictive Lead Scoring (CRM)",
      "Bilingual SEO & GEO Strategy",
      "Priority Access & Bi-Weekly Syncs",
    ],
    cta: "Initialize Autopilot",
    popular: true,
    gradient: "from-[#111A20] to-[#0A1116]",
    accent: "var(--color-gold)",
    icon: ShieldCheck,
    borderGlow: "group-hover:shadow-[0_0_50px_rgba(205,166,81,0.4)]",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Offers() {
  return (
    <section id="offers" className="relative py-32 bg-[#020507] overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--color-gold)]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <p className="text-[10px] font-mono text-[var(--color-gold)] uppercase tracking-[0.3em] mb-4 border border-[var(--color-gold)]/30 px-4 py-1.5 rounded-full bg-[var(--color-gold)]/10">
              Procurement Access
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[#F2D780]">Operating Tier</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Transparent capital deployment. No retainer traps. Choose the architecture that aligns with your current revenue velocity.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative rounded-3xl p-[1px] overflow-hidden transition-all duration-700 ${offer.borderGlow}`}
              >
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.popular ? 'from-[var(--color-gold)] via-transparent to-[var(--color-teal)] animate-spin-slow' : 'from-gray-700 via-gray-900 to-gray-800'} opacity-50`} />
                
                {/* Inner Card */}
                <div className={`relative h-full bg-gradient-to-b ${offer.gradient} rounded-[23px] p-8 md:p-12 backdrop-blur-xl flex flex-col`}>
                  
                  {/* Holographic Top Glow */}
                  <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-white/5 to-transparent rounded-t-[23px] pointer-events-none" />

                  {/* Popular Badge */}
                  {offer.popular && (
                    <div className="absolute top-0 right-8 transform -translate-y-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[var(--color-gold)] blur-md opacity-50" />
                        <span className="relative bg-gradient-to-r from-[var(--color-gold)] to-[#F2D780] text-[#050A0E] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-b-lg shadow-xl">
                          Protocol Active // Recommended
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-black/50 border border-gray-700 flex items-center justify-center shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                      <Icon size={20} style={{ color: offer.accent }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-1">{offer.id}</p>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{offer.title}</h3>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tighter" style={{ color: offer.accent }}>{offer.price}</span>
                    <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{offer.priceSuffix}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-10 h-10">
                    {offer.description}
                  </p>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                      Included Architecture
                    </div>
                    <ul className="space-y-4 mb-10">
                      {offer.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check size={16} className="mt-0.5 shrink-0" style={{ color: offer.accent }} />
                          <span className="text-sm text-gray-300 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="https://calendly.com/your-calendly-link"
                    target="_blank"
                    className={`relative w-full py-4 rounded-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 ${
                      offer.popular 
                        ? "bg-gradient-to-r from-[var(--color-gold)] to-[#F2D780] text-[#050A0E] font-extrabold hover:shadow-[0_0_30px_rgba(205,166,81,0.4)]" 
                        : "border border-gray-600 bg-black/40 text-white font-bold hover:border-[var(--color-teal)] hover:bg-[var(--color-teal)]/10"
                    }`}
                  >
                    <span className="text-sm uppercase tracking-widest">{offer.cta}</span>
                    <ArrowRight size={16} className={`transition-transform duration-300 ${offer.popular ? "group-hover:translate-x-1" : ""}`} />
                  </Link>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
