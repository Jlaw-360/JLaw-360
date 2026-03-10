"use client";

import Link from "next/link";
import { ArrowRight, Terminal, Cpu, Database } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero({ lang = 'en' }: { lang?: string }) {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050A0E]"
        >
            {/* --- Futuristic Background --- */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(39,126,149,0.15)_0%,_transparent_60%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-gold)]/5 rounded-full blur-[150px] animate-pulse-glow" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
            </div>

            {/* --- Floating Tech Nodes (Parallax) --- */}
            <motion.div style={{ y: y1 }} className="absolute z-0 hidden lg:block right-[15%] top-[25%] opacity-60">
                <div className="cyber-glass p-4 rounded-xl flex items-center gap-3 animate-float">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-teal)]/20 flex items-center justify-center border border-[var(--color-teal)]/40">
                        <Terminal size={18} className="text-[var(--color-teal)]" />
                    </div>
                    <div>
                        <p className="text-[10px] text-[var(--color-teal)] uppercase tracking-widest font-bold">System Status</p>
                        <p className="text-sm font-mono text-white">AI.Agents_Active: [124]</p>
                    </div>
                </div>
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute z-0 hidden lg:block left-[15%] bottom-[30%] opacity-60">
                <div className="cyber-glass p-4 rounded-xl flex items-center gap-3 animate-float" style={{ animationDelay: "2s" }}>
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/20 flex items-center justify-center border border-[var(--color-gold)]/40">
                        <Database size={18} className="text-[var(--color-gold)]" />
                    </div>
                    <div>
                        <p className="text-[10px] text-[var(--color-gold)] uppercase tracking-widest font-bold">Data Ingestion</p>
                        <p className="text-sm font-mono text-white">LTV_Predict: +312%</p>
                    </div>
                </div>
            </motion.div>

            {/* --- Core Content --- */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
                
                {/* Tactical Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--color-teal)]/40 bg-[var(--color-teal)]/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(39,126,149,0.2)]"
                >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-gold)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-gold)]"></span>
                    </span>
                    <span className="text-xs font-mono tracking-widest text-[var(--color-teal)] uppercase">
                        Protocol 2026 Active // Montreal
                    </span>
                </motion.div>

                {/* Cinematic Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                        The Algorithmic
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] via-[#F2D780] to-[var(--color-gold)] filter drop-shadow-[0_0_15px_rgba(205,166,81,0.4)]">
                        Growth Engine.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    We don&apos;t run standard campaigns. We deploy <b className="text-white font-medium">autonomous AI systems</b> and <b className="text-[var(--color-teal)] font-medium">predictive sales funnels</b> that surround your market and capture revenue 24/7.
                </motion.p>

                {/* Tactical CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link 
                        href="https://calendly.com/your-calendly-link"
                        target="_blank"
                        className="group relative px-8 py-4 w-full sm:w-auto overflow-hidden rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[#F2D780] text-[#050A0E] font-extrabold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(205,166,81,0.5)] flex items-center justify-center gap-3"
                    >
                        <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -ml-4" />
                        Initialize Strategy <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                        href={`/${lang}/services`}
                        className="group px-8 py-4 w-full sm:w-auto border border-gray-700 text-gray-300 font-bold text-sm uppercase tracking-widest rounded-xl hover:border-[var(--color-teal)] hover:text-white hover:bg-[var(--color-teal)]/10 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        <Cpu size={18} className="text-[var(--color-teal)] group-hover:animate-pulse" />
                        View Architecture
                    </Link>
                </motion.div>

                {/* Live Data HUD */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
                >
                    {[
                        { val: "150+", label: "Funnels Deployed" },
                        { val: "$3.2M", label: "Tracked ROAS" },
                        { val: "0.02s", label: "AI Response Time" },
                        { val: "99.9%", label: "System Uptime" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl font-mono font-bold text-white tracking-tight mb-1">{stat.val}</span>
                            <span className="text-xs font-mono text-[var(--color-teal)] uppercase tracking-widest">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fading Scroll Indicator */}
            <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Scroll to Access</span>
                <motion.div
                    animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-teal)] to-transparent"
                />
            </motion.div>
        </section>
    );
}
