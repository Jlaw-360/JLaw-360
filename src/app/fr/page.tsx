"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, CheckCircle, Navigation, Network, BarChart, Calendar, PlayCircle, Shield, Zap, Target, Users } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export default function HomeFr() {
    const [chatStep, setChatStep] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => setChatStep(1), 1500);
        const timer2 = setTimeout(() => setChatStep(2), 3500);
        const timer3 = setTimeout(() => setChatStep(3), 5500);
        const timer4 = setTimeout(() => setChatStep(4), 7000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    return (
        <main className="min-h-screen bg-[var(--color-navy)] text-white overflow-hidden selection:bg-[var(--color-gold)] selection:text-black">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 max-w-7xl mx-auto min-h-[90vh] flex items-center">
                {/* Floating abstract vibe elements */}
                <div className="absolute top-[10%] left-[80%] w-32 h-32 rounded-full border border-[var(--color-gold)]/20 animate-float-slow hidden lg:block"></div>
                <div className="absolute top-[20%] left-[5%] w-16 h-4 bg-[var(--color-teal)]/40 rounded-full animate-wave blur-[2px] hidden lg:block"></div>
                <div className="absolute bottom-[20%] left-[50%] w-24 h-6 bg-[var(--color-gold)]/30 rounded-full animate-wave blur-[4px] hidden lg:block" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[40%] right-[10%] w-4 h-4 rounded-full bg-[var(--color-teal)] animate-pulse shadow-[0_0_20px_rgba(39,126,149,1)]"></div>
                <div className="absolute bottom-[30%] left-[20%] w-3 h-3 rounded-full bg-[var(--color-gold)] animate-pulse shadow-[0_0_20px_rgba(205,166,81,1)]" style={{ animationDelay: '1s' }}></div>

                {/* Dynamic Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-teal)] rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[var(--color-gold-muted)] rounded-full blur-[150px] opacity-10 pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white mb-8 bg-black/40 border border-gray-800 backdrop-blur-md">
                            Nous allons créer une stratégie marketing optimale basée sur les résultats
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                            Cessez de Perdre <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-teal)]">Des Prospects</span> <br />
                            En Ligne.
                        </h1>

                        <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light border-l-2 border-[var(--color-teal)] pl-4">
                            La plupart des entreprises ne sont qu'à un tunnel de vente du succès. JLAW 360 construit le pont entre votre produit et vos profits.
                        </p>

                        <div className="bg-gradient-to-r from-[#111A20] to-[#0A1116] border border-gray-800/80 rounded-2xl p-6 mb-10 max-w-xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-teal)]/10 to-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <h3 className="text-white font-bold mb-4 text-lg relative z-10">Consultation Marketing Numérique (15 min)</h3>
                            <div className="flex flex-col gap-4 relative z-10">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input type="text" placeholder="Prénom" className="bg-black/50 border border-gray-700 rounded-full px-5 py-3 text-sm flex-1 min-w-0 outline-none focus:border-[var(--color-teal)] transition text-white placeholder-gray-500" />
                                    <input type="email" placeholder="Courriel" className="bg-black/50 border border-gray-700 rounded-full px-5 py-3 text-sm flex-1 min-w-0 outline-none focus:border-[var(--color-teal)] transition text-white placeholder-gray-500" />
                                </div>
                                <button className="neon-btn-gold px-8 py-3.5 rounded-full font-bold text-sm whitespace-nowrap w-full sm:w-auto sm:self-start shadow-[0_0_20px_rgba(205,166,81,0.3)] hover:shadow-[0_0_30px_rgba(205,166,81,0.5)] transition-shadow">
                                    Demander un devis
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- AI CHATBOT DEMO UI --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="relative z-10 w-full max-w-md mx-auto lg:ml-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-teal-dark)]/20 to-transparent rounded-2xl blur-xl"></div>
                        <div className="premium-glass rounded-2xl p-6 shadow-2xl relative animate-border-glow">
                            <div className="flex items-center gap-4 border-b border-gray-800/50 pb-5 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-dark)] flex items-center justify-center shadow-lg transform transition hover:scale-110">
                                    <Bot className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">Agent IA JLAW</h3>
                                    <p className="text-xs text-[var(--color-teal)] flex items-center gap-1.5 font-medium mt-0.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse border border-green-300"></span> En Ligne
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-5 font-body text-sm mb-6 h-[260px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-800">
                                <div className="flex justify-end">
                                    <div className="bg-[#1A1A1A] text-white p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] border border-gray-800/80 shadow-md">
                                        J'ai besoin de plus de prospects pour mon entreprise locale à Montréal.
                                    </div>
                                </div>

                                {chatStep >= 1 && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                                        <div className="bg-gradient-to-br from-[var(--color-teal-dark)] to-[#113A47] text-white p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] border border-[var(--color-teal)]/30 shadow-lg">
                                            Je peux automatiser votre génération de prospects. Planifions un appel de stratégie de 15 minutes. Quel jour vous convient le mieux ?
                                        </div>
                                    </motion.div>
                                )}

                                {chatStep >= 2 && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end">
                                        <div className="bg-[#1A1A1A] text-white p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] border border-gray-800/80 shadow-md">
                                            Jeudi à 14h.
                                        </div>
                                    </motion.div>
                                )}

                                {chatStep >= 3 && (
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-start">
                                        <div className="bg-gradient-to-br from-[var(--color-teal-dark)] to-[#113A47] text-white p-4.5 rounded-2xl rounded-tl-sm max-w-[90%] border border-[var(--color-gold)]/60 w-full shadow-[0_0_15px_rgba(205,166,81,0.15)]">
                                            <div className="flex items-center gap-2 text-[var(--color-gold)] mb-2.5 font-bold">
                                                <Calendar size={18} /> Rendez-vous Confirmé
                                            </div>
                                            <p className="text-gray-100 mb-1.5 font-medium">Session Stratégique avec JLAW 360</p>
                                            <p className="text-[var(--color-sand)]/70 text-xs">Jeudi @ 14h00 EST via Zoom</p>
                                        </div>
                                    </motion.div>
                                )}

                                {chatStep === 4 && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-xs text-gray-500 mt-4 font-medium uppercase tracking-wider">
                                        — Démo Terminée —
                                    </motion.div>
                                )}
                            </div>

                            <div className="bg-black/50 rounded-xl p-2.5 flex items-center border border-gray-800/80 backdrop-blur-md">
                                <input type="text" disabled placeholder="Écrivez votre message..." className="bg-transparent flex-1 px-3 outline-none text-sm text-gray-400" />
                                <button disabled className="bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-teal-dark)] p-2.5 rounded-lg text-white shadow-md">
                                    <Navigation size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- SOCIAL PROOF STRIP --- */}
            <div className="w-full bg-black/40 border-y border-gray-800/50 py-8 overflow-hidden backdrop-blur-sm hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-gray-500 font-bold tracking-widest text-sm uppercase opacity-50">
                    <span>Approuvé par les PME Ontariennes</span>
                    <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                    <span>50+ Déploiements</span>
                    <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                    <span>Domination SEO Bilingue</span>
                    <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                    <span>Axé sur le ROI</span>
                    <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                    <span>Leaders du Marché Québecois</span>
                </div>
            </div>

            {/* --- WHY JLAW 360 --- */}
            <section id="about" className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left: The Title & Vibe Elements */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                            className="relative"
                        >
                            <h2 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight relative z-10">
                                Pourquoi l'Agence <br />
                                JLAW
                            </h2>
                            {/* Abstract wave decoration below title */}
                            <div className="w-48 h-4 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-navy)] rounded-full animate-wave mt-4"></div>

                            {/* Floating tech elements to mimic the graphic in reference */}
                            <div className="mt-12 relative w-64 h-64 mx-auto lg:mx-0">
                                <div className="absolute inset-0 bg-[var(--color-teal)] blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#111A20] to-black rounded-2xl border border-gray-700 shadow-2xl flex items-center justify-center transform -rotate-12 animate-float">
                                    <span className="text-3xl font-black text-white">UX</span>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#111A20] to-black rounded-2xl border border-gray-700 shadow-2xl flex items-center justify-center transform rotate-12 translate-x-10 translate-y-10 animate-float-slow">
                                    <span className="text-3xl font-black text-[var(--color-teal)]">UI</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: The Text Copy */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="space-y-6 text-gray-300 font-light leading-relaxed text-sm lg:text-base border-l-2 border-[var(--color-gold)]/50 pl-8 lg:pl-12"
                        >
                            <p>
                                Faites passer votre entreprise au niveau supérieur en travaillant avec des spécialistes du marketing numérique chevronnés pour créer, mettre en œuvre et optimiser votre stratégie de marketing numérique.
                            </p>
                            <p>
                                Parce que nous voulons vraiment fournir des résultats, nous sommes sélectifs quant aux clients que nous acceptons.
                            </p>
                            <p>
                                Si nous décidons de travailler ensemble, nous utiliserons notre équipe d'experts de développeurs, d'analystes de données, de spécialistes de l'optimisation des conversions et d'acheteurs médias pour faire CROÎTRE votre entreprise vers de nouveaux sommets.
                            </p>
                            <div className="pt-6">
                                <button className="neon-btn-gold px-8 py-3 rounded-full font-bold text-sm">
                                    En savoir plus sur nous
                                </button>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
            {/* --- VALUE LADDER (SERVICES) SECTION --- */}
            <section id="services" className="py-24 px-6 bg-[#081218] border-y border-gray-800/50 relative mesh-bg">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-10 relative">
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight">Services <br /> inclus</h2>
                        <div className="w-16 h-2 bg-[var(--color-teal)] rounded-full animate-wave blur-[1px]"></div>
                        <div className="absolute right-10 top-0 w-8 h-2 bg-[var(--color-gold)]/40 rounded-full animate-wave hidden md:block"></div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">

                        {/* Box 1: Strategy */}
                        <motion.div variants={fadeIn} className="flex flex-col group h-full">
                            <div className="bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] p-6 rounded-t-xl border-t border-l border-r border-[var(--color-teal)]/30 group-hover:shadow-[0_0_20px_rgba(39,126,149,0.3)] transition shrink-0">
                                <h3 className="text-2xl font-bold text-white">Stratégie & Audit</h3>
                            </div>
                            <div className="bg-[#111A20] p-6 rounded-b-xl border-b border-l border-r border-gray-800 flex-grow group-hover:border-[var(--color-teal)]/50 transition opacity-90">
                                <ul className="space-y-4 text-sm text-gray-300 font-light">
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> Audit Numérique de 15 Minutes</li>
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> Analyse de la concurrence SEO</li>
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> Architecture Complète de Tunnel</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Box 2: Automation */}
                        <motion.div variants={fadeIn} className="flex flex-col group h-full">
                            <div className="bg-gradient-to-br from-[var(--color-gold-muted)] to-gray-800 p-6 rounded-t-xl border-t border-l border-r border-[var(--color-gold)]/30 group-hover:shadow-[0_0_20px_rgba(205,166,81,0.2)] transition shrink-0">
                                <h3 className="text-2xl font-bold text-white">Automatisation IA</h3>
                            </div>
                            <div className="bg-[#111A20] p-6 rounded-b-xl border-b border-l border-r border-gray-800 flex-grow group-hover:border-[var(--color-gold)]/30 transition opacity-90">
                                <ul className="space-y-4 text-sm text-gray-300 font-light">
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0"></div> Chatbots de Génération de Prospects 24/7</li>
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0"></div> Navigateurs d'Intégration Clients</li>
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0"></div> Flux de Travail CRM Automatisés</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Box 3: Growth */}
                        <motion.div variants={fadeIn} className="flex flex-col group h-full">
                            <div className="bg-gradient-to-br from-[#1A1A1A] to-[var(--color-teal-dark)] p-6 rounded-t-xl border-t border-l border-r border-[var(--color-teal)]/30 group-hover:shadow-[0_0_20px_rgba(39,126,149,0.2)] transition shrink-0">
                                <h3 className="text-2xl font-bold text-white">Croissance Bilingue</h3>
                            </div>
                            <div className="bg-[#111A20] p-6 rounded-b-xl border-b border-l border-r border-gray-800 flex-grow group-hover:border-[var(--color-teal)]/50 transition opacity-90">
                                <ul className="space-y-4 text-sm text-gray-300 font-light">
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> SEO Entièrement Géré</li>
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> Publicités à Fort ROI</li>
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> Retenue CMO Fractionnaire</li>
                                </ul>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* --- ELITE NICHES SECTION --- */}
            <section id="niches" className="py-24 px-6 bg-[#061016] border-t border-[var(--color-teal-dark)]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-[var(--color-teal)] font-bold tracking-widest uppercase text-sm mb-3 block">Solutions Spécialisées</span>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Conçu Pour Des <br /><span className="text-[var(--color-gold)] text-glow">Niches d'Élite</span></h2>
                            <p className="text-gray-400 max-w-xl font-light">Nous déployons des architectures spécialisées pour des industries de grande valeur opérant dans les marchés canadiens les plus compétitifs.</p>
                        </div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
                        <motion.div variants={fadeIn}>
                            <Link href="/law-firms" className="block h-full glass-card p-10 rounded-2xl border border-gray-800/60 hover:border-[var(--color-teal)] transition duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(29,90,107,0.3)] bg-gradient-to-br from-[#111A20] to-black">
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-gold)] transition flex items-center justify-between">
                                    Firmes d'Avocats <ArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition duration-300 text-[var(--color-teal)]" />
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed">Navigateurs d'accueil automatisés, SEO local spécialisé pour des types de cas précis et suivi priorisant la vie privée en totale conformité avec les normes légales.</p>
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Link href="/hvac-trades" className="block h-full glass-card p-10 rounded-2xl border border-gray-800/60 hover:border-[var(--color-teal)] transition duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(29,90,107,0.3)] bg-gradient-to-br from-[#111A20] to-black">
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-gold)] transition flex items-center justify-between">
                                    CVAC & Métiers <ArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition duration-300 text-[var(--color-teal)]" />
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed">Domination hyper-locale du SEO (quartiers du Québec/Ontario), IA pour répartiteur d'urgences, et suprématie sur les classements Google Maps locaux.</p>
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Link href="/real-estate" className="block h-full glass-card p-10 rounded-2xl border border-gray-800/60 hover:border-[var(--color-teal)] transition duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(29,90,107,0.3)] bg-gradient-to-br from-[#111A20] to-black">
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-gold)] transition flex items-center justify-between">
                                    Immobilier <ArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition duration-300 text-[var(--color-teal)]" />
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed">Assistants IA intégrés au système Centris, tunnels ciblés pour acheteurs et notations prédictives de prospects pour les courtiers commerciaux/résidentiels.</p>
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Link href="/manufacturing-b2b" className="block h-full glass-card p-10 rounded-2xl border border-gray-800/60 hover:border-[var(--color-teal)] transition duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(29,90,107,0.3)] bg-gradient-to-br from-[#111A20] to-black">
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-gold)] transition flex items-center justify-between">
                                    Fabrication B2B <ArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition duration-300 text-[var(--color-teal)]" />
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed">Campagnes de Marketing Basé sur les Comptes (ABM), création de livres blancs d'autorité, automatisation LinkedIn et systèmes de persuasion à cycles longs.</p>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- HOW WE WORK (3 STEPS) --- */}
            <section className="py-24 px-6 relative bg-[var(--color-navy)] overflow-hidden">
                {/* Floating background waves */}
                <div className="absolute top-[20%] right-[-5%] w-64 h-8 bg-[var(--color-teal)]/20 rounded-full animate-wave blur-[5px] transform -rotate-12 hidden lg:block"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-96 h-12 bg-[var(--color-gold)]/10 rounded-full animate-wave blur-[10px] transform rotate-12 hidden lg:block"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Column: The Steps List */}
                        <div className="space-y-4">
                            {[
                                { num: "01", title: "Planifiez votre session de \n stratégie marketing gratuite" },
                                { num: "02", title: "Obtenez votre plan de \n stratégie marketing gratuit" },
                                { num: "03", title: "Travaillez avec nous pour développer \n votre entreprise et attirer plus de clients" }
                            ].map((item, idx) => (
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} key={idx} className="flex gap-6 items-center group bg-black/20 p-4 rounded-xl border border-transparent hover:border-gray-800 transition">
                                    <div className="text-3xl font-extrabold text-[#2F3E46] group-hover:text-[var(--color-gold)] transition duration-300 drop-shadow-lg">
                                        {item.num}
                                    </div>
                                    <p className="text-gray-300 text-sm font-medium whitespace-pre-line leading-relaxed border-l border-gray-800 pl-6 w-full">
                                        {item.title}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Column: The Header & Context */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:pl-12">
                            <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
                                3 Étapes Faciles <br />
                                <span className="text-3xl font-light text-gray-300 block mt-4">pour faire croître <br /> votre entreprise avec <br /> JLAW 360</span>
                            </h2>

                            <div className="space-y-6 text-sm text-gray-400 font-light border-l-2 border-[var(--color-teal)] pl-6">
                                <p>
                                    Faites passer votre entreprise au niveau supérieur en travaillant avec des spécialistes du marketing numérique chevronnés, pour créer, mettre en œuvre et optimiser votre stratégie de marketing numérique.
                                </p>
                                <p>
                                    Parce que nous voulons vraiment fournir des résultats, nous sommes sélectifs quant aux clients que nous acceptons.
                                </p>
                                <p>
                                    Si nous décidons de travailler ensemble, nous utiliserons notre équipe d'experts de développeurs, d'analystes de données, de spécialistes de l'optimisation des conversions et d'acheteurs médias pour faire CROÎTRE votre entreprise vers de nouveaux sommets.
                                </p>
                            </div>

                            <div className="mt-10">
                                <button className="neon-btn px-8 py-3 rounded-full font-bold text-sm text-white inline-flex">
                                    En savoir plus sur nous
                                </button>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- FOOTER CTA --- */}
            <footer className="py-32 px-6 relative overflow-hidden text-center bg-[#03090C] border-t-2 border-[var(--color-teal)]/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-full bg-[var(--color-teal)] blur-[300px] opacity-10 pointer-events-none animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-gold)] blur-[300px] opacity-5 pointer-events-none"></div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-5xl lg:text-7xl font-bold mb-8">Prêt à Combler l'<br /><span className="text-[var(--color-gold)] text-glow">Écart de Productivité ?</span></h2>
                    <p className="text-xl text-gray-300 mb-12 font-light">Cessez de concourir avec les agences traditionnelles. Collaborez avec un intégrateur de systèmes stratégiques qui trace le chemin le plus rapide vers la domination de votre marché.</p>
                    <button className="px-12 py-6 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-muted)] text-[var(--color-navy)] text-xl font-black rounded-xl hover:opacity-90 transition transform hover:-translate-y-2 shadow-[0_0_40px_rgba(205,166,81,0.5)] mx-auto flex items-center gap-3">
                        Réservez Votre Session Stratégique de 15 Min <ArrowRight size={24} />
                    </button>
                </div>
            </footer>

        </main>
    );
}
