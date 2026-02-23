"use client";

import { motion } from "framer-motion";
import { Target, Cpu, Globe } from "lucide-react";

const phases = [
    {
        icon: Target,
        phase: "Phase 1",
        title: "Capture",
        description:
            "High-converting landing pages and sales funnels that turn visitors into leads. We design every touchpoint to maximize conversions.",
        features: [
            "Custom landing pages",
            "Lead capture forms",
            "A/B split testing",
            "ClickFunnels mastery",
        ],
    },
    {
        icon: Cpu,
        phase: "Phase 2",
        title: "Automate",
        description:
            "AI-driven follow-ups, email sequences, and CRM systems that nurture leads 24/7 — so you never miss a sale.",
        features: [
            "AI chatbot integration",
            "Email & SMS sequences",
            "CRM pipeline setup",
            "GoHighLevel automation",
        ],
    },
    {
        icon: Globe,
        phase: "Phase 3",
        title: "Dominate",
        description:
            "Omnipresent ads, SEO, and social media strategies so your brand is seen everywhere your customers look.",
        features: [
            "Meta & Google Ads",
            "SEO optimization",
            "Social media strategy",
            "Retargeting campaigns",
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const },
    },
};

export default function Process() {
    return (
        <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                        Our 360° Methodology
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                        Three Phases to{" "}
                        <span className="gold-gradient-text">Total Market Domination</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
                        Our proven framework surrounds your customers at every touchpoint,
                        turning strangers into loyal, paying clients.
                    </p>
                </motion.div>

                {/* Phase Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {phases.map((phase, index) => {
                        const Icon = phase.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative glass-card rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/5"
                            >
                                {/* Phase Number */}
                                <div className="absolute top-6 right-6 text-6xl font-black text-white/[0.03] select-none">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-teal/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                                    <Icon
                                        size={28}
                                        className="text-teal group-hover:text-gold transition-colors duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                                    {phase.phase}
                                </span>
                                <h3 className="text-2xl font-bold mt-2 mb-3">{phase.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {phase.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {phase.features.map((f, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2 text-sm text-gray-300"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Connection Line (Desktop) */}
                <div className="hidden md:flex justify-center mt-12">
                    <div className="flex items-center gap-0">
                        {[1, 2, 3].map((step, i) => (
                            <div key={i} className="flex items-center">
                                <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center text-gold text-sm font-bold">
                                    {step}
                                </div>
                                {i < 2 && (
                                    <div className="w-24 lg:w-40 h-0.5 bg-gradient-to-r from-gold/60 to-gold/20" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
