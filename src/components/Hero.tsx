"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-teal-dark" />
            <div className="absolute inset-0 dot-pattern opacity-40" />

            {/* Radial gold accent */}
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-teal/10 rounded-full blur-[100px]" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-sm font-medium text-gold">
                        Montreal&apos;s #1 360° Marketing Agency
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
                >
                    Build Your{" "}
                    <span className="gold-gradient-text">360° Automated</span>
                    <br />
                    Sales Ecosystem.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    We help Montreal businesses scale by surrounding their customers with
                    high-converting funnels, AI automation, and omnipresent marketing.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#offers"
                        className="group px-8 py-4 bg-gold text-black font-bold text-base rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 flex items-center gap-2"
                    >
                        Book My Strategy Session
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                    <Link
                        href="#process"
                        className="px-8 py-4 border border-gray-700 text-white font-medium text-base rounded-xl hover:border-gold/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
                    >
                        <Play size={16} className="text-gold" />
                        See How It Works
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { value: "150+", label: "Funnels Built" },
                        { value: "3.2M", label: "Revenue Generated" },
                        { value: "98%", label: "Client Retention" },
                        { value: "24/7", label: "AI Automation" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-3xl sm:text-4xl font-extrabold gold-gradient-text">
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-1.5">
                    <div className="w-1.5 h-2.5 bg-gold rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
