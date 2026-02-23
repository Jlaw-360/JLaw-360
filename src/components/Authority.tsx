"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Users } from "lucide-react";

const toolLogos = [
    "ClickFunnels",
    "GoHighLevel",
    "Meta Ads",
    "Google Ads",
    "Zapier",
    "ChatGPT / AI",
    "Mailchimp",
    "Stripe",
];

export default function Authority() {
    return (
        <section
            id="authority"
            className="relative py-24 sm:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-teal-dark/20 to-black" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-teal/8 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                        Authority & Portfolio
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold">
                        Trusted by Brands.{" "}
                        <span className="gold-gradient-text">Proven in Results.</span>
                    </h2>
                </motion.div>

                {/* Case Study Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="glass-card rounded-2xl p-8 lg:p-12 mb-12 border border-gold/10 hover:border-gold/20 transition-all duration-500"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left: Case Study Details */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <BookOpen size={18} className="text-gold" />
                                <span className="text-xs font-semibold text-gold uppercase tracking-widest">
                                    Featured Case Study
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                "Vaincre la méchanceté humaine" — Full Book Launch Marketing
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                We designed and executed a complete digital marketing strategy
                                for Pastor Thierry Tshinkola&apos;s book launch, including
                                landing page funnels, social media campaigns, email sequences,
                                and community-driven marketing. The campaign generated
                                significant pre-orders and social engagement.
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { value: "500+", label: "Pre-orders" },
                                    { value: "12K", label: "Social Reach" },
                                    { value: "3X", label: "ROI" },
                                ].map((metric, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-2xl font-bold gold-gradient-text">
                                            {metric.value}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {metric.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Credibility Badges */}
                        <div className="space-y-6">
                            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                                    <Award size={20} className="text-gold" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">
                                        Sales Funnel Specialist
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        ClickFunnels certified with 150+ funnels built for SMBs
                                        across North America.
                                    </p>
                                </div>
                            </div>
                            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center shrink-0">
                                    <Users size={20} className="text-teal" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">
                                        Community-Driven Campaigns
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        Expertise in building organic communities and book launch
                                        marketing with real engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tools Mastery Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-8">
                        Tools & Platforms We Master
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                        {toolLogos.map((tool, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="glass-card rounded-xl py-4 px-3 text-center text-sm font-medium text-gray-400 hover:text-gold hover:border-gold/20 transition-all duration-300 cursor-default"
                            >
                                {tool}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
