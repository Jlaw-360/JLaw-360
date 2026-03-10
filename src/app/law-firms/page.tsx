import { ArrowRight, FileText, CheckCircle, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "JLAW 360 | AI Growth Partner for Montreal Law Firms",
    description: "Stop relying on chaotic referrals. JLAW 360 deploys automated intake systems and hyper-local SEO clusters to dominate personal injury and family law markets in Quebec.",
};

export default function LawFirms() {
    return (
        <main className="min-h-screen bg-[var(--color-navy)] text-white pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">

                {/* Breadcrumb */}
                <div className="text-sm text-[var(--color-teal)] mb-8 flex items-center gap-2 font-bold tracking-widest uppercase">
                    <Link href="/">Home</Link> <ArrowRight size={14} /> Law Firms
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    The <span className="text-[var(--color-gold)]">Digital Blueprint</span> <br />for Elite Canadian Law Firms
                </h1>

                <p className="text-xl text-gray-300 mb-12">
                    What most agencies get wrong: they sell you &quot;traffic.&quot; We engineer closed-loop <span className="text-[var(--color-teal)] font-bold">Client Intake Systems</span> that qualify, schedule, and secure high-retainer clients 24/7.
                </p>

                {/* The Pain & The Pivot */}
                <section className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 mb-16">
                    <h2 className="text-2xl font-bold mb-4">The Productivity Gap in Legal</h2>
                    <p className="text-gray-400 mb-6">Senior partners waste an average of 14 hours per month on unqualified consultations. Your website acts as a static brochure instead of an asynchronous paralegal.</p>
                    <div className="flex gap-4">
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded w-1/2">
                            <span className="block text-red-400 font-bold mb-1">Old Way</span>
                            <span className="text-sm text-gray-300">Missed calls after 5 PM. Low-value leads consuming billable hours. Generic local search ranks.</span>
                        </div>
                        <div className="bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/20 p-4 rounded w-1/2">
                            <span className="block text-[var(--color-teal)] font-bold mb-1">JLAW 360 Way</span>
                            <span className="text-sm text-gray-300">AI Intake Navigator qualifies cases globally. Immediate CRM sync. Dominant bilingual SEO cluster.</span>
                        </div>
                    </div>
                </section>

                {/* --- Visual Connection --- */}
                <section className="mb-16 rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(205,166,81,0.15)] relative h-[300px] lg:h-[400px] group">
                   <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                     <span className="text-[var(--color-gold)] font-bold tracking-widest uppercase border border-[var(--color-gold)] px-6 py-2 rounded-full backdrop-blur-sm bg-black/50">Next-Gen Legal Tech</span>
                   </div>
                   <Image 
                      src="/images/law_firm.png" 
                      alt="Luxury Legal Technology Interface" 
                      fill
                      className="object-cover transform scale-100 group-hover:scale-105 transition duration-700"
                      priority
                   />
                </section>

                {/* How We Do It */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Our Legal Growth Architecture</h2>

                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <FileText className="text-[var(--color-teal)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Bilingual SEO & GEO</h3>
                                <p className="text-gray-400 text-sm"><span className="text-gray-400">&quot;We dominate our market now.&quot;</span> Localized searches in Montreal (Plateau, Downtown) and Ontario. We build content that answers specific legal queries in both English and French to capture the hyper-local market.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <ShieldAlert className="text-[var(--color-gold)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Bill 25 Compliant AI Intake Navigator</h3>
                                <span className="text-gray-400 italic font-mono text-sm block mt-2">&quot;Case evaluation complete. High value prospect.&quot;</span>
                                <p>&quot;JLAW 360 completely transformed our acquisition pipeline. We stopped relying on referrals and now have a predictable stream of high-value injury cases coming in every single month.&quot;</p>
                                <p className="text-gray-400 text-sm">Our AI chatbots are custom-trained to ask 3-4 qualifying questions (e.g., &quot;When did the injury occur?&quot;) following strict Quebec/Canadian privacy regulations before scheduling a consultation.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <CheckCircle className="text-[var(--color-teal)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Authority Building Lead Magnets</h3>
                                <p className="text-gray-400 text-sm">We convert cold traffic into email subscribers by deploying high-value whitepapers (e.g., &quot;The 2026 Guide to Corporate Incorporation in QC&quot;) pushing them into an automated nurture sequence.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-br from-[var(--color-teal-dark)] to-[#0c1e26] p-10 rounded-2xl text-center border border-[var(--color-teal)]">
                    <h2 className="text-3xl font-bold mb-4">Reclaim Your Billable Hours</h2>
                    <p className="mb-8 text-gray-300">Let us audit your firm&apos;s current digital footprint and identify exactly where you are losing high-ticket cases to modernized competitors.</p>
                    <button className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded hover:opacity-90 transition transform hover:scale-105 shadow-[0_0_20px_rgba(205,166,81,0.3)] w-full sm:w-auto">
                        Get Your Free AI Systems Audit
                    </button>
                </section>
            </div>
        </main>
    );
}
