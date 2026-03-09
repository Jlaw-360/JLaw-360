"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, CheckCircle, Navigation, Network, BarChart, Calendar, PlayCircle, Shield, Zap, Target, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

export default function Home() {
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
              We are going to create a result driven optimal marketing strategy
            </div>

            <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Stop Losing Leads <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-teal)]">to an Invisible</span> <br />
              Online Presence.
            </h1>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light border-l-2 border-[var(--color-teal)] pl-4">
              Most businesses are one funnel away from a breakthrough. JLAW 360 builds the bridge between your product and your profit.
            </p>

            <div className="bg-gradient-to-r from-[#111A20] to-[#0A1116] border border-gray-800/80 rounded-2xl p-6 mb-10 max-w-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-teal)]/10 to-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <h2 className="text-white font-bold mb-4 text-lg relative z-10">Free 15 minute Digital Marketing Consultation</h2>
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" placeholder="First Name" className="bg-black/50 border border-gray-700 rounded-full px-5 py-3 text-sm flex-1 min-w-0 outline-none focus:border-[var(--color-teal)] transition text-white placeholder-gray-500" />
                  <input type="email" placeholder="Email" className="bg-black/50 border border-gray-700 rounded-full px-5 py-3 text-sm flex-1 min-w-0 outline-none focus:border-[var(--color-teal)] transition text-white placeholder-gray-500" />
                </div>
                <button aria-label="Request a free digital marketing quote" className="neon-btn-gold px-8 py-3.5 rounded-full font-bold text-sm whitespace-nowrap w-full sm:w-auto sm:self-start shadow-[0_0_20px_rgba(205,166,81,0.3)] hover:shadow-[0_0_30px_rgba(205,166,81,0.5)] transition-shadow">
                  Request a Quote
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
                  <h2 className="font-bold text-white text-lg">JLAW AI Agent</h2>
                  <p className="text-xs text-[var(--color-teal)] flex items-center gap-1.5 font-medium mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse border border-green-300"></span> Online
                  </p>
                </div>
              </div>

              <div className="space-y-5 font-body text-sm mb-6 h-[260px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-800">
                <div className="flex justify-end">
                  <div className="bg-[#1A1A1A] text-white p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] border border-gray-800/80 shadow-md">
                    I need more leads for my local business in Montreal.
                  </div>
                </div>

                {chatStep >= 1 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                    <div className="bg-gradient-to-br from-[var(--color-teal-dark)] to-[#113A47] text-white p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] border border-[var(--color-teal)]/30 shadow-lg">
                      I can automate your lead generation. Let's schedule a 15-minute strategy call to review your funnel. What day works for you?
                    </div>
                  </motion.div>
                )}

                {chatStep >= 2 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end">
                    <div className="bg-[#1A1A1A] text-white p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] border border-gray-800/80 shadow-md">
                      Thursday at 2 PM.
                    </div>
                  </motion.div>
                )}

                {chatStep >= 3 && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-start">
                    <div className="bg-gradient-to-br from-[var(--color-teal-dark)] to-[#113A47] text-white p-4.5 rounded-2xl rounded-tl-sm max-w-[90%] border border-[var(--color-gold)]/60 w-full shadow-[0_0_15px_rgba(205,166,81,0.15)]">
                      <div className="flex items-center gap-2 text-[var(--color-gold)] mb-2.5 font-bold">
                        <Calendar size={18} /> Appointment Confirmed
                      </div>
                      <p className="text-gray-100 mb-1.5 font-medium">Strategy Session w/ JLAW 360</p>
                      <p className="text-[var(--color-sand)]/70 text-xs">Thursday @ 2:00 PM EST via Zoom</p>
                    </div>
                  </motion.div>
                )}

                {chatStep === 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-xs text-gray-500 mt-4 font-medium uppercase tracking-wider">
                    — Demo Complete —
                  </motion.div>
                )}
              </div>

              <div className="bg-black/50 rounded-xl p-2.5 flex items-center border border-gray-800/80 backdrop-blur-md">
                <input type="text" disabled placeholder="Type your message..." className="bg-transparent flex-1 px-3 outline-none text-sm text-gray-400" />
                <button aria-label="Send message to AI bot" disabled className="bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-teal-dark)] p-2.5 rounded-lg text-white shadow-md">
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
          <span>Trusted By Ontario SMEs</span>
          <span className="w-2 h-2 rounded-full bg-gray-700"></span>
          <span>50+ Deployments</span>
          <span className="w-2 h-2 rounded-full bg-gray-700"></span>
          <span>Bilingual SEO Dominance</span>
          <span className="w-2 h-2 rounded-full bg-gray-700"></span>
          <span>ROI Focused</span>
          <span className="w-2 h-2 rounded-full bg-gray-700"></span>
          <span>Quebec Market Leaders</span>
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
                Why JLAW <br />
                Agency
              </h2>
              {/* Abstract wave decoration below title */}
              <div className="w-48 h-4 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-navy)] rounded-full animate-wave mt-4"></div>

              {/* Implemented the luxury AI dashboard image to hook the user */}
              <div className="mt-12 relative w-full h-[300px] lg:h-[400px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(39,126,149,0.3)] group border border-gray-800">
                <div className="absolute inset-0 bg-[var(--color-teal)]/20 mix-blend-overlay z-10 pointer-events-none transition duration-500 group-hover:bg-transparent"></div>
                <Image 
                  src="/images/hero_dashboard.png" 
                  alt="JLAW 360 Digital Transformation Dashboard" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
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
                Take your business to the next level by working with seasoned digital marketing specialists, to create, implement and optimize your digital marketing strategy.
              </p>
              <p>
                Because we truly want to provide results we are selective in the clients we take on.
              </p>
              <p>
                If we decide to work together we will use our superstar team of developers, data analysts, conversion optimization specialists and media buyers to GROW your business to new heights.
              </p>
              <div className="pt-6">
                <button className="neon-btn-gold px-8 py-3 rounded-full font-bold text-sm">
                  Learn More About Us
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
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight">Services <br /> include</h2>
            <div className="w-16 h-2 bg-[var(--color-teal)] rounded-full animate-wave blur-[1px]"></div>
            <div className="absolute right-10 top-0 w-8 h-2 bg-[var(--color-gold)]/40 rounded-full animate-wave hidden md:block"></div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">

            {/* Box 1: Strategy */}
            <motion.div variants={fadeIn} className="flex flex-col group h-full">
              <div className="bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] p-6 rounded-t-xl border-t border-l border-r border-[var(--color-teal)]/30 group-hover:shadow-[0_0_20px_rgba(39,126,149,0.3)] transition shrink-0">
                <h3 className="text-2xl font-bold text-white">Strategy & Audit</h3>
              </div>
              <div className="bg-[#111A20] p-6 rounded-b-xl border-b border-l border-r border-gray-800 flex-grow group-hover:border-[var(--color-teal)]/50 transition opacity-90">
                <ul className="space-y-4 text-sm text-gray-300 font-light">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> 15-Minute Digital Audit</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> SEO Competitor Analysis</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> Full Funnel Architecture</li>
                </ul>
              </div>
            </motion.div>

            {/* Box 2: Automation */}
            <motion.div variants={fadeIn} className="flex flex-col group h-full">
              <div className="bg-gradient-to-br from-[var(--color-gold-muted)] to-gray-800 p-6 rounded-t-xl border-t border-l border-r border-[var(--color-gold)]/30 group-hover:shadow-[0_0_20px_rgba(205,166,81,0.2)] transition shrink-0">
                <h3 className="text-2xl font-bold text-white">AI Automation</h3>
              </div>
              <div className="bg-[#111A20] p-6 rounded-b-xl border-b border-l border-r border-gray-800 flex-grow group-hover:border-[var(--color-gold)]/30 transition opacity-90">
                <ul className="space-y-4 text-sm text-gray-300 font-light">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0"></div> 24/7 Lead Gen Chatbots</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0"></div> Client Intake Navigators</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0"></div> Automated CRM Workflows</li>
                </ul>
              </div>
            </motion.div>

            {/* Box 3: Growth */}
            <motion.div variants={fadeIn} className="flex flex-col group h-full">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[var(--color-teal-dark)] p-6 rounded-t-xl border-t border-l border-r border-[var(--color-teal)]/30 group-hover:shadow-[0_0_20px_rgba(39,126,149,0.2)] transition shrink-0">
                <h3 className="text-2xl font-bold text-white">Bilingual Growth</h3>
              </div>
              <div className="bg-[#111A20] p-6 rounded-b-xl border-b border-l border-r border-gray-800 flex-grow group-hover:border-[var(--color-teal)]/50 transition opacity-90">
                <ul className="space-y-4 text-sm text-gray-300 font-light">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> Fully Managed SEO</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> High-ROI Paid Ads</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-1.5 shrink-0"></div> Fractional CMO Retainer</li>
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
              <span className="text-[var(--color-teal)] font-bold tracking-widest uppercase text-sm mb-3 block">Specialized Solutions</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Engineered For <br /><span className="text-[var(--color-gold)] text-glow">Elite Niches</span></h2>
              <p className="text-gray-400 max-w-xl font-light">We deploy specialized architectures for high-ticket industries operating in highly competitive Canadian markets.</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn}>
              <Link href="/law-firms" className="block h-full glass-card p-10 rounded-2xl border border-gray-800/60 hover:border-[var(--color-teal)] transition duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(29,90,107,0.3)] bg-gradient-to-br from-[#111A20] to-black">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-gold)] transition flex items-center justify-between">
                  Law Firms <ArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition duration-300 text-[var(--color-teal)]" />
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">Automated intake navigators, specialized local SEO for specific case types, and privacy-first tracking that adheres to strict legal marketing compliance.</p>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link href="/hvac-trades" className="block h-full glass-card p-10 rounded-2xl border border-gray-800/60 hover:border-[var(--color-teal)] transition duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(29,90,107,0.3)] bg-gradient-to-br from-[#111A20] to-black">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-gold)] transition flex items-center justify-between">
                  HVAC & Trades <ArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition duration-300 text-[var(--color-teal)]" />
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">Hyper-local SEO dominance (Montreal & Ontario neighborhoods), automated emergency dispatch bots, and Google Business map ranking dominance.</p>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link href="/real-estate" className="block h-full glass-card p-10 rounded-2xl border border-gray-800/60 hover:border-[var(--color-teal)] transition duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(29,90,107,0.3)] bg-gradient-to-br from-[#111A20] to-black">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-gold)] transition flex items-center justify-between">
                  Real Estate <ArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition duration-300 text-[var(--color-teal)]" />
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">MLS-integrated AI assistants, targeted property buyer funnels, and predictive lead scoring for commercial and luxury residential brokers.</p>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link href="/manufacturing-b2b" className="block h-full glass-card p-10 rounded-2xl border border-gray-800/60 hover:border-[var(--color-teal)] transition duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(29,90,107,0.3)] bg-gradient-to-br from-[#111A20] to-black">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-gold)] transition flex items-center justify-between">
                  Manufacturing B2B <ArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition duration-300 text-[var(--color-teal)]" />
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">Account-Based Marketing (ABM) campaigns, authority whitepaper creation, LinkedIn automation, and long-cycle digital persuasion systems.</p>
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
                { num: "01", title: "Schedule your complimentary \n Marketing Strategy Session" },
                { num: "02", title: "Get your Free marketing \n Strategy plan" },
                { num: "03", title: "Work with us to grow your business \n and get more customers" }
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
                3 Easy steps <br />
                <span className="text-3xl font-light text-gray-300 block mt-4">to grow your <br /> business with <br /> JLAW 360</span>
              </h2>

              <div className="space-y-6 text-sm text-gray-400 font-light border-l-2 border-[var(--color-teal)] pl-6">
                <p>
                  Take your business to the next level by working with seasoned digital marketing specialists, to create, implement and optimize your digital marketing strategy.
                </p>
                <p>
                  Because we truly want to provide results we are selective in the clients we take on.
                </p>
                <p>
                  If we decide to work together we will use our superstar team of developers, data analysts, conversion optimization specialists and media buyers to GROW your business to new heights.
                </p>
              </div>

              <div className="mt-10">
                <button className="neon-btn px-8 py-3 rounded-full font-bold text-sm text-white inline-flex">
                  Learn More About Us
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
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">Ready to Close the <br /><span className="text-[var(--color-gold)] text-glow">Productivity Gap?</span></h2>
          <p className="text-xl text-gray-300 mb-12 font-light">Stop competing with legacy agencies. Partner with a strategic systems integrator mapping the fastest path to market dominance.</p>
          <button className="px-12 py-6 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-muted)] text-[var(--color-navy)] text-xl font-black rounded-xl hover:opacity-90 transition transform hover:-translate-y-2 shadow-[0_0_40px_rgba(205,166,81,0.5)] mx-auto flex items-center gap-3">
            Book Your 15-Min Strategy Session <ArrowRight size={24} />
          </button>
        </div>
      </footer>

    </main>
  );
}
