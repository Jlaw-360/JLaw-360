"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, BarChart, Target, Building2, MapPin, DollarSign, Magnet, Calendar } from "lucide-react";

type SetupData = {
  industry: string;
  city: string;
  revenue: string;
  leadSource: string;
  goal: string;
};

const industries = ["Roofing", "HVAC", "Dental", "Landscaping", "Other Home Service"];
const revenues = ["Under $10k/mo", "$10k - $50k/mo", "$50k - $150k/mo", "$150k+/mo"];
const leadSources = ["Referrals (Word of Mouth)", "Buying Shared Leads (Angi/HomeAdvisor)", "Google Ads", "Organic/SEO", "Social Media"];
const goals = ["Get more consistent leads", "Increase quality of jobs (high-ticket)", "Automate my sales process", "Scale to the next revenue tier"];

export default function StrategyGenerator() {
  const [step, setStep] = useState(0); // 0 is landing, 1-5 questions, 6 generating, 7 results
  const [data, setData] = useState<SetupData>({
    industry: "",
    city: "",
    revenue: "",
    leadSource: "",
    goal: ""
  });

  const updateData = (field: keyof SetupData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const currentStepData = () => {
    switch (step) {
      case 1:
        return {
          title: "What is your primary industry?",
          icon: <Building2 className="text-[var(--color-gold)] mb-4" size={32} />,
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map(ind => (
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
          title: "What city are you targeting?",
          icon: <MapPin className="text-[var(--color-gold)] mb-4" size={32} />,
          content: (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="e.g. Toronto, ON"
                value={data.city}
                onChange={(e) => updateData('city', e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && data.city && setStep(3)}
                className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-gold)] text-lg transition"
                autoFocus
              />
              <button
                onClick={() => setStep(3)}
                disabled={!data.city}
                className="w-full neon-btn-gold py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )
        };
      case 3:
        return {
          title: "What's your current monthly revenue?",
          icon: <DollarSign className="text-[var(--color-gold)] mb-4" size={32} />,
          content: (
            <div className="grid grid-cols-1 gap-4">
              {revenues.map(rev => (
                <button
                  key={rev}
                  onClick={() => { updateData('revenue', rev); setStep(4); }}
                  className={`p-4 rounded-xl border text-left font-medium transition-all ${data.revenue === rev ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-white' : 'border-gray-800 bg-black/40 text-gray-300 hover:border-[var(--color-teal)] hover:bg-[var(--color-teal)]/10'}`}
                >
                  {rev}
                </button>
              ))}
            </div>
          )
        };
      case 4:
        return {
          title: "Where do most of your leads come from today?",
          icon: <Magnet className="text-[var(--color-gold)] mb-4" size={32} />,
          content: (
            <div className="grid grid-cols-1 gap-3">
              {leadSources.map(src => (
                <button
                  key={src}
                  onClick={() => { updateData('leadSource', src); setStep(5); }}
                  className={`p-4 rounded-xl border text-left font-medium transition-all ${data.leadSource === src ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-white' : 'border-gray-800 bg-black/40 text-gray-300 hover:border-[var(--color-teal)] hover:bg-[var(--color-teal)]/10'}`}
                >
                  {src}
                </button>
              ))}
            </div>
          )
        };
      case 5:
        return {
          title: "What is your main goal for the next 12 months?",
          icon: <Target className="text-[var(--color-gold)] mb-4" size={32} />,
          content: (
            <div className="grid grid-cols-1 gap-3">
              {goals.map(goal => (
                <button
                  key={goal}
                  onClick={() => { 
                    updateData('goal', goal); 
                    setStep(6);
                    setTimeout(() => setStep(7), 2500); // Simulate generation
                  }}
                  className={`p-4 rounded-xl border text-left font-medium transition-all ${data.goal === goal ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-white' : 'border-gray-800 bg-black/40 text-gray-300 hover:border-[var(--color-teal)] hover:bg-[var(--color-teal)]/10'}`}
                >
                  {goal}
                </button>
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
              Stop Guessing. <br/> Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">Custom Growth Blueprint.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
              Answer 5 quick questions about your business and we'll instantly generate the exact digital marketing architecture you need to dominate your market.
            </p>
            <button 
              onClick={() => setStep(1)}
              className="px-10 py-5 bg-[var(--color-teal)] text-white text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(14,77,85,0.6)] hover:shadow-[0_0_40px_rgba(14,77,85,0.8)] transition transform hover:-translate-y-1 flex items-center gap-3 mx-auto"
            >
              Generate My Growth Strategy <ArrowRight />
            </button>
          </div>
        )}

        {step > 0 && step < 6 && (
          <div className="glass-card p-8 lg:p-12 rounded-3xl border border-gray-800 shadow-2xl bg-[#081218] relative overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-900">
              <div 
                className="h-full bg-[var(--color-gold)] transition-all duration-500 ease-out"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>

            <div className="mb-8">
              <button 
                onClick={() => setStep(Math.max(0, step - 1))}
                className="text-gray-500 hover:text-white flex items-center gap-2 text-sm transition mb-6"
              >
                <ArrowLeft size={16} /> Back
              </button>
              
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStepData()?.icon}
                  <h3 className="text-3xl font-bold mb-8">{currentStepData()?.title}</h3>
                  {currentStepData()?.content}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="text-center text-sm font-light text-gray-500 mt-8">
              Step {step} of 5
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 border-4 border-[var(--color-teal)]/20 border-t-[var(--color-gold)] rounded-full animate-spin mx-auto mb-8" />
            <h3 className="text-3xl font-bold mb-4 animate-pulse">Analyzing {data.industry} Market in {data.city}...</h3>
            <p className="text-gray-400">Compiling your Digital Blueprint based on current revenue and goals.</p>
          </div>
        )}

        {step === 7 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0A1116] border border-[var(--color-teal)]/40 rounded-3xl p-6 lg:p-10 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 bg-[var(--color-teal)] text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-3xl uppercase tracking-widest">
              Ready for Implementation
            </div>
            
            <div className="mb-10 border-b border-gray-800 pb-8">
              <h3 className="text-4xl font-extrabold mb-4">Your Custom Digital Blueprint</h3>
              <p className="text-gray-400 text-lg">
                Based on your goal to <span className="text-white font-medium">{data.goal.toLowerCase()}</span>, here is the exact architecture we recommend for your {data.industry} business in {data.city}.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {/* Strategy 1: Funnel & Conversion */}
              <div className="p-6 bg-black/40 border border-gray-800 rounded-2xl">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="text-[var(--color-teal)]" size={20} /> 1. Conversion-Optimized Funnel
                    </h4>
                    <p className="text-gray-400 text-sm max-w-xl">
                      Replace your standard website with a direct-response landing page designed specifically to convert {data.city} traffic into booked appointments.
                    </p>
                  </div>
                  <div className="bg-[#111A20] px-4 py-3 rounded-xl border border-gray-800 text-right min-w-[200px]">
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Projected Result</div>
                    <div className="text-[var(--color-teal)] font-bold text-lg">+120% Conversion Rate</div>
                  </div>
                </div>
              </div>

              {/* Strategy 2: Google Ads */}
              <div className="p-6 bg-black/40 border border-gray-800 rounded-2xl">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="text-[var(--color-teal)]" size={20} /> 2. High-Intent Google Ads
                    </h4>
                    <p className="text-gray-400 text-sm max-w-xl">
                      Capture high-intent searches like "{data.industry} near me in {data.city}" with aggressive local ad campaigns targeting immediate needs.
                    </p>
                  </div>
                  <div className="bg-[#111A20] px-4 py-3 rounded-xl border border-gray-800 text-right min-w-[200px]">
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Projected Result</div>
                    <div className="text-[var(--color-teal)] font-bold text-lg">15 - 30 High-Quality Leads/mo</div>
                  </div>
                </div>
              </div>

              {/* Strategy 3: Local SEO & GMB */}
              <div className="p-6 bg-black/40 border border-gray-800 rounded-2xl">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="text-[var(--color-teal)]" size={20} /> 3. Local SEO Dominance
                    </h4>
                    <p className="text-gray-400 text-sm max-w-xl">
                      Optimize your Google Business Profile to rank in the "Map Pack" for organic searches, capturing free traffic from competitors.
                    </p>
                  </div>
                  <div className="bg-[#111A20] px-4 py-3 rounded-xl border border-gray-800 text-right min-w-[200px]">
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Projected Result</div>
                    <div className="text-[var(--color-teal)] font-bold text-lg">+40% Organic Call Volume</div>
                  </div>
                </div>
              </div>

              {/* Strategy 4: Automation */}
              <div className="p-6 bg-black/40 border border-gray-800 rounded-2xl">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="text-[var(--color-teal)]" size={20} /> 4. AI Follow-Up Automation
                    </h4>
                    <p className="text-gray-400 text-sm max-w-xl">
                      Implement immediate SMS and email follow-ups for every new lead, ensuring 0 leads fall through the cracks due to slow responses.
                    </p>
                  </div>
                  <div className="bg-[#111A20] px-4 py-3 rounded-xl border border-gray-800 text-right min-w-[200px]">
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Projected Result</div>
                    <div className="text-[var(--color-teal)] font-bold text-lg">Double Your Close Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[var(--color-navy)] to-black border border-[var(--color-gold)] p-8 rounded-2xl text-center">
              <h4 className="text-2xl font-bold mb-3">Want us to build this for you?</h4>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Let's get on a 15-minute call to discuss how we can implement this exact architecture into your {data.industry} business.
              </p>
              <button className="neon-btn-gold px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3">
                <Calendar /> Book Strategy Call
              </button>
            </div>
            
            <button 
              onClick={() => { setStep(0); setData({industry:"", city:"", revenue:"", leadSource:"", goal:""}) }}
              className="mt-6 text-gray-500 text-sm hover:text-white mx-auto block"
            >
              Start Over
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
