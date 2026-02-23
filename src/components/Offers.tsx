"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const offers = [
    {
        icon: Rocket,
        tag: "Path A",
        title: "The Digital Launchpad",
        price: "$2,500",
        priceSuffix: "one-time",
        description:
            "Perfect for new businesses needing a professional 360° digital foundation to start generating leads and revenue.",
        features: [
            "Custom high-converting website",
            "Brand identity & logo design",
            "Sales funnel (ClickFunnels)",
            "Email welcome sequence",
            "Google Business setup",
            "Social media profiles",
            "Lead magnet creation",
            "30-day support",
        ],
        cta: "Launch My Business",
        popular: false,
        borderColor: "border-teal/20 hover:border-teal/50",
        iconBg: "bg-teal/20",
        iconColor: "text-teal",
    },
    {
        icon: TrendingUp,
        tag: "Path B",
        title: "The Scale & Dominate Suite",
        price: "$15,000",
        priceSuffix: "quarterly",
        description:
            "For established businesses ready to automate their entire sales process and reach 'One Comma Club' level revenue.",
        features: [
            "Everything in Launchpad",
            "Full AI automation system",
            "Omnipresent ad campaigns",
            "Advanced sales funnels",
            "CRM & pipeline automation",
            "SEO & content strategy",
            "Monthly analytics reports",
            "Dedicated strategy sessions",
            "Priority 24/7 support",
        ],
        cta: "Dominate My Market",
        popular: true,
        borderColor: "border-gold/30 hover:border-gold/60",
        iconBg: "bg-gold/20",
        iconColor: "text-gold",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const } },
};

export default function Offers() {
    return (
        <section id="offers" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/40" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                        Choose Your Path
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold">
                        Two Paths to{" "}
                        <span className="gold-gradient-text">Explosive Growth</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
                        Whether you&apos;re just starting out or ready to scale, we have the
                        perfect package to transform your business.
                    </p>
                </motion.div>

                {/* Offer Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {offers.map((offer, index) => {
                        const Icon = offer.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className={`relative glass-card rounded-2xl p-8 lg:p-10 border ${offer.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${offer.popular ? "hover:shadow-gold/10" : "hover:shadow-teal/10"
                                    }`}
                            >
                                {/* Popular Badge */}
                                {offer.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gold text-black text-xs font-bold uppercase tracking-wider rounded-full">
                                        Most Popular
                                    </div>
                                )}

                                {/* Icon + Tag */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className={`w-12 h-12 rounded-xl ${offer.iconBg} flex items-center justify-center`}
                                    >
                                        <Icon size={24} className={offer.iconColor} />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        {offer.tag}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                                    {offer.title}
                                </h3>

                                {/* Price */}
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-4xl sm:text-5xl font-extrabold gold-gradient-text">
                                        {offer.price}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {offer.priceSuffix}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    {offer.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {offer.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <Check
                                                size={16}
                                                className={`shrink-0 mt-0.5 ${offer.popular ? "text-gold" : "text-teal"
                                                    }`}
                                            />
                                            <span className="text-gray-300">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href="#hero"
                                    className={`group flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-base transition-all duration-300 ${offer.popular
                                        ? "bg-gold text-black hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                                        : "border-2 border-teal text-teal hover:bg-teal hover:text-white"
                                        }`}
                                >
                                    {offer.cta}
                                    <ArrowRight
                                        size={16}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
