"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, CheckCircle } from "lucide-react";

export default function LeadMagnetModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("leadModalDismissed")) return;

    // Trigger after 8 seconds
    const timer = setTimeout(() => setIsOpen(true), 8000);

    // Also trigger on 60% scroll depth
    const handleScroll = () => {
      const scrollDepth = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollDepth > 0.6 && !sessionStorage.getItem("leadModalDismissed")) {
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("leadModalDismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    // In production, connect to your CRM / email list here
    console.log("Lead captured:", { name, email });
    setSubmitted(true);
    sessionStorage.setItem("leadModalDismissed", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-md bg-gradient-to-br from-[#0D1F27] to-[#07131A] border border-[var(--color-gold)]/30 rounded-2xl shadow-[0_0_60px_rgba(205,166,81,0.15)] overflow-hidden">

              {/* Gold top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[var(--color-teal)] via-[var(--color-gold)] to-[var(--color-teal)]" />

              {/* Close button */}
              <button
                onClick={handleDismiss}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                {!submitted ? (
                  <>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[var(--color-gold)]/20 flex items-center justify-center shrink-0">
                        <Gift size={22} className="text-[var(--color-gold)]" />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--color-gold)] font-bold uppercase tracking-widest mb-0.5">Free Download</p>
                        <h2 className="text-xl font-extrabold text-white leading-tight">The 360° Marketing Checklist</h2>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Get the exact checklist we use to audit and scale SMB marketing systems — completely free.
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-7">
                      {[
                        "12-point funnel audit framework",
                        "AI automation quick-start guide",
                        "Montreal market SEO cheat sheet",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="First Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[var(--color-gold)] transition"
                      />
                      <input
                        type="email"
                        placeholder="Business Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[var(--color-gold)] transition"
                      />
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-gradient-to-r from-[var(--color-gold)] to-[#B8960C] text-black font-extrabold rounded-xl text-sm hover:opacity-90 transition shadow-[0_0_20px_rgba(205,166,81,0.3)]"
                      >
                        Send Me the Free Checklist →
                      </button>
                    </form>
                    <p className="text-center text-xs text-gray-600 mt-3">No spam. Unsubscribe anytime.</p>
                  </>
                ) : (
                  /* Success State */
                  <div className="text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-teal)]/20 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-[var(--color-teal)]" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-white mb-3">You&apos;re in, {name}!</h2>
                    <p className="text-gray-400 text-sm">
                      Check your inbox — your free 360° Marketing Checklist is on its way.
                    </p>
                    <button
                      onClick={handleDismiss}
                      className="mt-6 px-6 py-2.5 border border-gray-700 rounded-xl text-sm text-gray-400 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
