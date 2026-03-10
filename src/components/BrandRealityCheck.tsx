"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Activity, Loader, Crosshair, Target } from "lucide-react";

export default function BrandRealityCheck() {
  const [step, setStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [answers, setAnswers] = useState({
    industry: "",
    leadGen: "",
    speedToLead: "",
    email: ""
  });

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleProcessAndScore = () => {
    setIsProcessing(true);
    setStep(4);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(5);
    }, 2500);
  };

  // The actual questions
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(39,126,149,0.2)] border border-[var(--color-teal)]/30 bg-[#061016]">
      {/* Header Area */}
      <div className="bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-teal-dark)] p-6 border-b border-[var(--color-teal)]/50 relative overflow-hidden">
        <div className="absolute right-[-10%] top-[-50%] w-64 h-64 bg-[var(--color-gold)]/10 rounded-full blur-[50px] pointer-events-none"></div>
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Activity className="text-[var(--color-gold)] animate-pulse" />
          AI Brand Reality Check
        </h2>
        <p className="text-sm text-[var(--color-sand)] mt-2 font-medium">Find out exactly where your digital presence is leaking revenue.</p>
        
        {/* Progress Bar */}
        {step < 4 && (
          <div className="w-full h-1.5 bg-black/50 rounded-full mt-6 overflow-hidden relative">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-gold)]"
              style={{ width: `${(step / 3) * 100}%`, transition: "width 0.4s ease-in-out" }}
            ></div>
          </div>
        )}
      </div>

      {/* Interactive Body */}
      <div className="p-8 min-h-[350px] relative">
        <AnimatePresence mode="wait">
          
          {/* STEP 0: Introduction */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center py-6"
            >
              <Target className="w-16 h-16 text-[var(--color-teal)] mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl font-bold text-white mb-4">Are you losing 60% of your leads?</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">Take the 60-second Reality Check. Our diagnostic AI will analyze your digital workflow and pinpoint your immediate revenue bottlenecks.</p>
              <button 
                onClick={nextStep}
                className="neon-btn-gold px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(205,166,81,0.3)] hover:shadow-[0_0_30px_rgba(205,166,81,0.5)] transition"
              >
                Start AI Diagnostic
              </button>
            </motion.div>
          )}

          {/* STEP 1: Industry */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6">1. What is your primary industry?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Law Firm", "HVAC / Trades", "Real Estate", "Manufacturing B2B", "E-Commerce", "Other"].map((ind) => (
                  <button 
                    key={ind}
                    onClick={() => { setAnswers({...answers, industry: ind}); nextStep(); }}
                    className="p-4 border border-gray-700 bg-black/40 hover:bg-[var(--color-teal-dark)]/50 hover:border-[var(--color-teal)] text-gray-300 hover:text-white rounded-lg transition text-left font-medium"
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Lead Gen */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6">2. How are you currently getting the majority of your leads?</h3>
              <div className="flex flex-col gap-4">
                {[
                  { id: "word-of-mouth", text: "Word of Mouth / Referrals (Unpredictable)" },
                  { id: "social-organic", text: "Organic Social Media (Low Volume)" },
                  { id: "paid-ads", text: "Paid Ads - Meta/Google (Expensive)" },
                  { id: "seo", text: "SEO / Organic Traffic (Slow)" },
                ].map((option) => (
                  <button 
                    key={option.id}
                    onClick={() => { setAnswers({...answers, leadGen: option.text}); nextStep(); }}
                    className="p-4 border border-gray-700 bg-black/40 hover:bg-[var(--color-teal-dark)]/50 hover:border-[var(--color-teal)] text-gray-300 hover:text-white rounded-lg transition text-left font-medium"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Speed to Lead */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6">3. What happens when a potential client reaches out on your website at 2:00 AM?</h3>
              <div className="flex flex-col gap-4">
                {[
                  { id: "nothing", text: "They fill a form & hear nothing until the next day." },
                  { id: "auto-reply", text: "They get a generic 'we will get back to you' email." },
                  { id: "lost", text: "They leave because there's no way to get immediate answers." },
                  { id: "ai", text: "An AI Chatbot answers their questions and books them immediately into my calendar." },
                ].map((option) => (
                  <button 
                    key={option.id}
                    onClick={() => { setAnswers({...answers, speedToLead: option.text}); handleProcessAndScore(); }}
                    className="p-4 border border-gray-700 bg-black/40 hover:bg-[var(--color-teal-dark)]/50 hover:border-[var(--color-teal)] text-gray-300 hover:text-white rounded-lg transition text-left font-medium"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: Processing (Fake Loading State) */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center h-full py-10"
            >
              <Loader className="w-16 h-16 text-[var(--color-teal)] animate-spin mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2 blink">AI Processing Diagnostics...</h3>
              <p className="text-[var(--color-teal)] font-mono text-sm uppercase tracking-widest">Calculating Productivity Gap</p>
              
              <div className="w-full max-w-xs space-y-2 mt-8">
                <div className="h-1 w-full bg-gray-800 rounded overflow-hidden">
                  <div className="h-full bg-[var(--color-teal)] animate-pulse" style={{width: '70%'}}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-mono">
                  <span>Analyzing {answers.industry} competitors...</span>
                  <span>70%</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Results & Lead Capture */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border-2 border-red-500 mb-6 relative">
                 <span className="text-3xl font-black text-red-500">42</span>
                 <span className="absolute -bottom-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">/100</span>
              </div>
              
              <h3 className="text-3xl font-extrabold text-white mb-2">High Risk Detected</h3>
              <p className="text-red-400 font-medium mb-6">Your brand is suffering from a massive Productivity Gap.</p>
              
              <div className="bg-black/50 border border-gray-800 p-4 rounded-xl text-left mb-8">
                <div className="flex items-start gap-3 mb-3">
                   <Crosshair className="text-[var(--color-gold)] mt-0.5" size={18} />
                   <p className="text-sm text-gray-300 font-light">Because you rely on <strong className="text-white">"{answers.leadGen}"</strong>, your growth is capped and highly unpredictable.</p>
                </div>
                <div className="flex items-start gap-3">
                   <Crosshair className="text-[var(--color-gold)] mt-0.5" size={18} />
                   <p className="text-sm text-gray-300 font-light">Your Speed-to-Lead protocol fails after normal hours, guaranteeing that motivated 2 AM leads will bounce to an {answers.industry} competitor.</p>
                </div>
              </div>

              <div className="p-1 rounded-xl bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-gold)]">
                <div className="bg-[var(--color-navy)] rounded-lg p-6">
                  <h4 className="font-bold text-white mb-2 text-lg">Get Your Recovery Blueprint</h4>
                  <p className="text-sm text-gray-400 mb-4">Enter your email to receive a customized, step-by-step 2026 AI Growth Roadmap to automate your intake and dominate your local market.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your executive email" 
                      className="bg-black/80 border border-gray-700 rounded-lg px-4 py-3 text-sm flex-1 min-w-0 outline-none focus:border-[var(--color-teal)] transition text-white" 
                      value={answers.email}
                      onChange={(e) => setAnswers({...answers, email: e.target.value})}
                    />
                    <button className="neon-btn-gold px-6 py-3 rounded-lg font-bold text-sm shadow-[0_0_15px_rgba(205,166,81,0.2)]">
                      Send My Roadmap
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-3 flex items-center justify-center gap-1">
                    <Shield size={12} /> 100% Privacy Protected. Bill 25 Compliant.
                  </p>
                </div>
              </div>
              
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
