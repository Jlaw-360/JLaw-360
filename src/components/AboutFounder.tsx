"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutFounder() {
    return (
        <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
            <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left: Image Placeholder */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-gold/20 gold-glow">
                                <div className="w-full h-full bg-gradient-to-br from-teal-dark via-teal to-teal-light flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-4xl font-black gold-gradient-text">
                                                W
                                            </span>
                                        </div>
                                        <p className="text-white/80 text-sm font-medium">
                                            Walkens
                                        </p>
                                        <p className="text-white/50 text-xs mt-1">
                                            Founder & Strategist
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -right-4 sm:-right-8 glass-card rounded-xl px-4 py-3 border border-gold/20"
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles size={16} className="text-gold" />
                                    <div>
                                        <p className="text-xs font-bold text-white">5+ Years</p>
                                        <p className="text-[10px] text-gray-500">Digital Marketing</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Bio */}
                    <div>
                        <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                            About the Founder
                        </span>
                        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
                            Meet{" "}
                            <span className="gold-gradient-text">Walkens</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                I founded JLAW 360 Marketing to bridge the gap between basic
                                websites and real revenue. Too many businesses invest in a
                                beautiful website that doesn&apos;t generate leads — and I knew
                                there had to be a better way.
                            </p>
                            <p>
                                With deep expertise in ClickFunnels, GoHighLevel, AI automation,
                                and omnipresent marketing strategies, I&apos;ve helped dozens of
                                businesses turn their online presence into a 24/7 sales machine.
                            </p>
                            <p className="text-white font-medium italic border-l-2 border-gold pl-4">
                                &quot;We don&apos;t just build sites; we build ecosystems that
                                work while you sleep.&quot;
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {[
                                "Sales Funnels",
                                "AI Automation",
                                "ClickFunnels",
                                "GoHighLevel",
                                "Meta Ads",
                                "SEO",
                                "Email Marketing",
                                "Brand Strategy",
                            ].map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-700 text-gray-400 hover:border-gold/30 hover:text-gold transition-all duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="#hero"
                            className="group inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gold text-black font-bold text-sm rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                        >
                            Let&apos;s Build Your Ecosystem
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
