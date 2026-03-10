"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Target, Building2, MapPin, DollarSign, Magnet, Calendar } from "lucide-react";

type SetupData = {
  industry: string;
  city: string;
  revenue: string;
  leadSource: string;
  goal: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StrategyGenerator({ dict }: { dict: Record<string, any> }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<SetupData>({
    industry: "", city: "", revenue: "", leadSource: "", goal: ""
  });

  const updateData = (field: keyof SetupData, value: string) => setData(prev => ({ ...prev, [field]: value }));

  // Fallback
  const d = dict || {
    landing: { title_1: "Stop Guessing.", title_2: "Get Your", title_3: "Custom Growth Blueprint.", sub: "Answer 5 quick questions about...", btn: "Generate My Growth Strategy" },
    steps: { step: "Step", of: "of 5", back: "Back", continue: "Continue", analyzing: "Analyzing {industry} Market in {city}...", analyzing_sub: "Compiling...", start_over: "Start Over" },
    q1: { title: "What is your primary industry?", options: ["Roofing", "HVAC", "Dental", "Landscaping", "Other Home Service"] },
    q2: { title: "What city are you targeting?", placeholder: "e.g. Toronto, ON" },
    q3: { title: "What's your current monthly revenue?", options: ["Under $10k/mo", "$10k - $50k/mo", "$50k - $150k/mo", "$150k+/mo"] },
    q4: { title: "Where do most of your leads come from today?", options: ["Referrals (Word of Mouth)", "Buying Shared Leads (Angi/HomeAdvisor)", "Google Ads", "Organic/SEO", "Social Media"] },
    q5: { title: "What is your main goal for the next 12 months?", options: ["Get more consistent leads", "Increase quality of jobs (high-ticket)", "Automate my sales process", "Scale to the next revenue tier"] },
    result: { badge: "Ready for Implementation", title: "Your Custom Digital Blueprint", desc_start: "Based on your goal to ", desc_mid: ", here is the exact architecture we recommend for your ", desc_end: " business in ", proj: "Projected Result", s1: { title: "1. Conversion-Optimized Funnel", desc: "...", res: "+120% Conversion Rate" }, s2: { title: "2. High-Intent Google Ads", desc: "...", res: "15 - 30 High-Quality Leads/mo" }, s3: { title: "3. Local SEO Dominance", desc: "...", res: "+40% Organic Call Volume" }, s4: { title: "4. AI Follow-Up Automation", desc: "...", res: "Double Your Close Rate" }, cta: { title: "Want us to build this for you?", desc: "Let's get on a 15-minute call...", btn: "Book Strategy Call" } }
  };

  const industries = d.q1.options;
  const revenues = d.q3.options;
  const leadSources = d.q4.options;
  const goals = d.q5.options;

  const currentStepData = () => {
    switch (step) {
      case 1:
        return {
          title: d.q1.title,
          icon: <Building2 className="text-[var(--color-gold)] mb-4" size={32} />,
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((ind: string) => (
                <button
                  key={ind}
                  onClick={() => { updateData('industry', ind); setStep(2); }}
                  className={`p-4 rounded-xl border text-left font-medium transition-all ${data.industry === ind ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-white' : 'border-gray-800 bg-black/40 text-gray-300 hover:border-[var(--color-teal)] hover:bg-[var(--color-teal)]/10'}`}
                >
                  {ind}
                </button>
              ))}
            </div>
          )
        };
      case 2:
        return {
          title: d.q2.title,
          icon: <MapPin className="text-[var(--color-gold)] mb-4" size={32} />,
          content: (
            <div className="space-y-4">
              <input type="text" placeholder={d.q2.placeholder} value={data.city} onChange={(e) => updateData('city', e.target.value)} onKeyDown={(e) => e.key === 'Enter' && data.city && setStep(3)} className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-gold)] text-lg transition" autoFocus />
              <button onClick={() => setStep(3)} disabled={!data.city} className="w-full neon-btn-gold py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed">{d.steps.continue}</button>
            </div>
          )
        };
      case 3:
        return {
          title: d.q3.title,
          icon: <DollarSign className="text-[var(--color-gold)] mb-4" size={32} />,
          content: (
            <div className="grid grid-cols-1 gap-4">
              {revenues.map((rev: string) => (
                <button key={rev} onClick={() => { updateData('revenue', rev); setStep(4); }} className={`p-4 rounded-xl border text-left font-medium transition-all ${data.revenue === rev ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-white' : 'border-gray-800 bg-black/40 text-gray-300 hover:border-[var(--color-teal)] hover:bg-[var(--color-teal)]/10'}`}>{rev}</button>
              ))}
            </div>
          )
        };
      case 4:
        return {
          title: d.q4.title,
          icon: <Magnet className="text-[var(--color-gold)] mb-4" size={32} />,
          content: (
            <div className="grid grid-cols-1 gap-3">
              {leadSources.map((src: string) => (
                <button key={src} onClick={() => { updateData('leadSource', src); setStep(5); }} className={`p-4 rounded-xl border text-left font-medium transition-all ${data.leadSource === src ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-white' : 'border-gray-800 bg-black/40 text-gray-300 hover:border-[var(--color-teal)] hover:bg-[var(--color-teal)]/10'}`}>{src}</button>
              ))}
            </div>
          )
        };
      case 5:
        return {
          title: d.q5.title,
          icon: <Target className="text-[var(--color-gold)] mb-4" size={32} />,
          content: (
            <div className="grid grid-cols-1 gap-3">
              {goals.map((goal: string) => (
                <button key={goal} onClick={() => { updateData('goal', goal); setStep(6); setTimeout(() => setStep(7), 2500); }} className={`p-4 rounded-xl border text-left font-medium transition-all ${data.goal === goal ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-white' : 'border-gray-800 bg-black/40 text-gray-300 hover:border-[var(--color-teal)] hover:bg-[var(--color-teal)]/10'}`}>{goal}</button>
              ))}
            </div>
          )
        };
      default: return null;
    }
  };

  return (
    <section id="strategy-generator" className="py-24 px-6 relative bg-[#03090C] border-y border-gray-800/50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {step === 0 && (
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              {d.landing.title_1} <br/> {d.landing.title_2} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">{d.landing.title_3}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">{d.landing.sub}</p>
            <button onClick={() => setStep(1)} className="px-10 py-5 bg-[var(--color-teal)] text-white text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(14,77,85,0.6)] hover:shadow-[0_0_40px_rgba(14,77,85,0.8)] transition transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
              {d.landing.btn} <ArrowRight />
            </button>
          </div>
        )}

        {step > 0 && step < 6 && (
          <div className="glass-card p-8 lg:p-12 rounded-3xl border border-gray-800 shadow-2xl bg-[#081218] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-900">
              <div className="h-full bg-[var(--color-gold)] transition-all duration-500 ease-out" style={{ width: `${(step / 5) * 100}%` }} />
            </div>

            <div className="mb-8">
              <button onClick={() => setStep(Math.max(0, step - 1))} className="text-gray-500 hover:text-white flex items-center gap-2 text-sm transition mb-6">
                <ArrowLeft size={16} /> {d.steps.back}
              </button>
              
              <AnimatePresence mode="popLayout">
                <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  {currentStepData()?.icon}
                  <h3 className="text-3xl font-bold mb-8">{currentStepData()?.title}</h3>
                  {currentStepData()?.content}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="text-center text-sm font-light text-gray-500 mt-8">
              {d.steps.step} {step} {d.steps.of}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 border-4 border-[var(--color-teal)]/20 border-t-[var(--color-gold)] rounded-full animate-spin mx-auto mb-8" />
            <h3 className="text-3xl font-bold mb-4 animate-pulse">
              {d.steps.analyzing.replace("{industry}", data.industry).replace("{city}", data.city || "...")}
            </h3>
            <p className="text-gray-400">{d.steps.analyzing_sub}</p>
          </div>
        )}

        {step === 7 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0A1116] border border-[var(--color-teal)]/40 rounded-3xl p-6 lg:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-[var(--color-teal)] text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-3xl uppercase tracking-widest">{d.result.badge}</div>
            
            <div className="mb-10 border-b border-gray-800 pb-8">
              <h3 className="text-4xl font-extrabold mb-4">{d.result.title}</h3>
              <p className="text-gray-400 text-lg">
                {d.result.desc_start}<span className="text-white font-medium">{data.goal.toLowerCase()}</span>{d.result.desc_mid}{data.industry}{d.result.desc_end}{data.city}.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {[
                { s: d.result.s1 }, { s: d.result.s2 }, { s: d.result.s3 }, { s: d.result.s4 }
              ].map(({ s }, i) => (
                <div key={i} className="p-6 bg-black/40 border border-gray-800 rounded-2xl">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="text-[var(--color-teal)]" size={20} /> {s.title}
                      </h4>
                      <p className="text-gray-400 text-sm max-w-xl">
                        {s.desc.replace("{city}", data.city).replace("{industry}", data.industry)}
                      </p>
                    </div>
                    <div className="bg-[#111A20] px-4 py-3 rounded-xl border border-gray-800 text-right min-w-[200px]">
                      <div className="text-xs text-gray-500 uppercase font-bold mb-1">{d.result.proj}</div>
                      <div className="text-[var(--color-teal)] font-bold text-lg">{s.res}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[var(--color-navy)] to-black border border-[var(--color-gold)] p-8 rounded-2xl text-center">
              <h4 className="text-2xl font-bold mb-3">{d.result.cta.title}</h4>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {d.result.cta.desc.replace("{industry}", data.industry)}
              </p>
              <a 
                href="https://calendly.com/your-calendly-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn-gold px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-transform hover:scale-105"
              >
                <Calendar /> {d.result.cta.btn}
              </a>
            </div>
            
            <button onClick={() => { setStep(0); setData({industry:"", city:"", revenue:"", leadSource:"", goal:""}) }} className="mt-6 text-gray-500 text-sm hover:text-white mx-auto block">
              {d.steps.start_over}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
