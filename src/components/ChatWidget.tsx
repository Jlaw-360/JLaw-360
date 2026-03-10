"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, ArrowRight } from "lucide-react";

type Message = {
  role: "bot" | "user";
  text: string;
  cta?: { label: string; href: string };
};

// JLAW 360 smart response tree
function getBotReply(input: string): Message {
  const msg = input.toLowerCase();

  if (msg.match(/price|cost|how much|pricing|package|plan/)) {
    return {
      role: "bot",
      text: "We have two main packages:\n\n🚀 Digital Launchpad — $2,500 (one-time): Perfect for new businesses needing a complete digital foundation.\n\n📈 Scale & Dominate Suite — $15,000/qtr: Full AI automation + omnipresent ads for established businesses ready to scale.",
      cta: { label: "Book a Free Strategy Call", href: "https://calendly.com/your-calendly-link" },
    };
  }

  if (msg.match(/funnel|sales funnel|clickfunnel|landing page/)) {
    return {
      role: "bot",
      text: "We design high-converting sales funnels using ClickFunnels and GoHighLevel — optimized for your specific audience and offer. Every funnel is A/B tested for maximum ROI.",
      cta: { label: "See Our Process", href: "/en/services" },
    };
  }

  if (msg.match(/seo|search engine|rank|google|organic|keyword/)) {
    return {
      role: "bot",
      text: "We specialize in bilingual SEO for Montreal and Ontario businesses. That means ranking in both English and French markets — which most agencies can't do. Our SEO packages include full audit, content strategy, and ongoing optimization.",
      cta: { label: "Book a Free SEO Audit", href: "https://calendly.com/your-calendly-link" },
    };
  }

  if (msg.match(/ai|automation|chatbot|crm|workflow|automate/)) {
    return {
      role: "bot",
      text: "Our AI systems run 24/7 — qualifying leads, booking appointments, and nurturing prospects while you sleep. We build custom GoHighLevel workflows and AI chatbots tailored to your business.",
    };
  }

  if (msg.match(/ads|paid|meta|facebook|instagram|google ads|ppc/)) {
    return {
      role: "bot",
      text: "We run high-ROI Meta and Google Ads campaigns for Canadian SMBs, with detailed monthly reporting. Every dollar tracked. We only take on ad clients when we're confident we can deliver 3x+ ROAS.",
    };
  }

  if (msg.match(/book|schedule|call|meeting|appointment|calendar|consult/)) {
    return {
      role: "bot",
      text: "Absolutely! Book your free 15-minute strategy session directly — no obligation, just a focused conversation about your growth goals.",
      cta: { label: "Book My Free Session", href: "https://calendly.com/your-calendly-link" },
    };
  }

  if (msg.match(/montreal|canada|ontario|quebec|toronto|bilingual/)) {
    return {
      role: "bot",
      text: "We primarily serve businesses in Montreal, Toronto, and across Quebec and Ontario — in both English and French. Our bilingual SEO approach gives local clients a huge competitive edge.",
    };
  }

  if (msg.match(/law|lawyer|legal|attorney|firm/)) {
    return {
      role: "bot",
      text: "We have a specialized package for law firms: automated intake navigators, local SEO for specific practice areas, and privacy-compliant tracking — all built to the standards of legal marketing ethics.",
      cta: { label: "Law Firm Services", href: "/law-firms" },
    };
  }

  if (msg.match(/hvac|plumb|electri|trade|contractor/)) {
    return {
      role: "bot",
      text: "For trades and HVAC businesses, we dominate Google Maps rankings at the neighborhood level and set up emergency dispatch automation bots — so you never miss a lead, even at 2 AM.",
      cta: { label: "Trades Services", href: "/hvac-trades" },
    };
  }

  if (msg.match(/real estate|realtor|broker|property|mls/)) {
    return {
      role: "bot",
      text: "We build MLS-integrated AI assistants, buyer/seller funnels, and predictive lead scoring systems for real estate brokers targeting luxury and commercial markets in Canada.",
      cta: { label: "Real Estate Services", href: "/real-estate" },
    };
  }

  if (msg.match(/hello|hi|hey|start|help|what can you|who are/)) {
    return {
      role: "bot",
      text: "Hi there! 👋 I'm the JLAW 360 AI assistant. I can help with questions about our services, pricing, SEO, funnels, or AI automation — or book you a free strategy call. What do you need?",
    };
  }

  // Fallback
  return {
    role: "bot",
    text: "Great question! For anything specific, I'd recommend booking a free 15-minute strategy session with Walkens. He'll give you a personalized growth plan — absolutely free.",
    cta: { label: "Book Your Free Call", href: "https://calendly.com/your-calendly-link" },
  };
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: "bot",
    text: "Hi! 👋 I'm the JLAW 360 AI — ask me about our services, pricing, or book a free strategy session.",
  },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    const botReply = getBotReply(trimmed);

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate typing delay
    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 700);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="chatbox"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-[340px] sm:w-[380px] bg-gradient-to-br from-[#0D1F27] to-[#07131A] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[var(--color-teal-dark)] to-[#07131A] border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-dark)] flex items-center justify-center shadow">
                    <Bot size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">JLAW AI Agent</p>
                    <p className="text-[10px] text-[var(--color-teal)] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Online
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="text-gray-500 hover:text-white transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="h-72 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-800">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] space-y-2`}>
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                          msg.role === "user"
                            ? "bg-[#1A1A1A] text-white rounded-tr-sm border border-gray-800"
                            : "bg-gradient-to-br from-[var(--color-teal-dark)] to-[#113A47] text-white rounded-tl-sm border border-[var(--color-teal)]/30"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.cta && (
                        <a
                          href={msg.cta.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-gold)] hover:underline pl-1"
                        >
                          {msg.cta.label} <ArrowRight size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Suggested Chips */}
              {messages.length <= 1 && (
                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {["Pricing", "Book a call", "SEO services", "AI Automation"].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => {
                        setInput(chip);
                        setTimeout(() => {
                          const botReply = getBotReply(chip);
                          setMessages((prev) => [
                            ...prev,
                            { role: "user", text: chip },
                          ]);
                          setTimeout(() => setMessages((prev) => [...prev, botReply]), 700);
                        }, 0);
                        setInput("");
                      }}
                      className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-gray-400 hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 bg-black/50 border border-gray-700 rounded-xl px-3 py-2 focus-within:border-[var(--color-teal)] transition">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Ask about our services..."
                    className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-500"
                  />
                  <button
                    onClick={handleSend}
                    aria-label="Send message"
                    className="w-8 h-8 rounded-lg bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-teal-dark)] flex items-center justify-center text-white hover:opacity-90 transition shrink-0"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle AI chat assistant"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-dark)] flex items-center justify-center shadow-[0_0_30px_rgba(39,126,149,0.5)] text-white relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Bot size={22} />
              </motion.span>
            )}
          </AnimatePresence>
          {/* Notification dot */}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[var(--color-gold)] rounded-full border-2 border-[#07131A] animate-pulse" />
          )}
        </motion.button>
      </div>
    </>
  );
}
