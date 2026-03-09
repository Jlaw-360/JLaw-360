import { ArrowRight, Home, Crosshair, BarChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "JLAW 360 | Real Estate AI & Marketing Systems",
    description: "Stop cold calling. JLAW 360 deploys MLS-integrated AI assistants and high-converting seller funnels for elite Canadian Real Estate professionals.",
};

export default function RealEstate() {
    return (
        <main className="min-h-screen bg-[var(--color-navy)] text-white pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">

                {/* Breadcrumb */}
                <div className="text-sm text-[var(--color-teal)] mb-8 flex items-center gap-2 font-bold tracking-widest uppercase">
                    <Link href="/">Home</Link> <ArrowRight size={14} /> Real Estate
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    The <span className="text-[var(--color-gold)]">Digital Blueprint</span> <br />for Elite Real Estate Teams
                </h1>

                <p className="text-xl text-gray-300 mb-12">
                    What most agencies get wrong: they sell you standard "leads." We engineer <span className="text-[var(--color-teal)] font-bold">Predictive Acquisition Systems</span> that qualify buyers and automate seller appointments while you are out showing homes.
                </p>

                {/* The Pain & The Pivot */}
                <section className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 mb-16">
                    <h2 className="text-2xl font-bold mb-4">The Productivity Gap in Real Estate</h2>
                    <p className="text-gray-400 mb-6">Top producers cap out because they spend 60% of their time chasing unqualified Zillow/Realtor.ca leads instead of closing. Your time is too valuable for manual follow-up.</p>
                    <div className="flex gap-4">
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded w-1/2">
                            <span className="block text-red-400 font-bold mb-1">Old Way</span>
                            <span className="text-sm text-gray-300">Buying shared leads. Calling 100 people to find 1 real buyer. Generic newsletter blasts.</span>
                        </div>
                        <div className="bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/20 p-4 rounded w-1/2">
                            <span className="block text-[var(--color-teal)] font-bold mb-1">JLAW 360 Way</span>
                            <span className="text-sm text-gray-300">AI Assistant qualifies intent. Seller funnels capture listings dynamically. Automated multi-channel follow-up.</span>
                        </div>
                    </div>
                </section>

                {/* --- Visual Connection --- */}
                <section className="mb-16 rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(39,126,149,0.15)] relative h-[300px] lg:h-[400px] group">
                   <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                     <span className="text-[var(--color-teal)] font-bold tracking-widest uppercase border border-[var(--color-teal)] px-6 py-2 rounded-full backdrop-blur-sm bg-black/50">Predictive PropTech</span>
                   </div>
                   <Image 
                      src="/images/real_estate.png" 
                      alt="Predictive Real Estate AI Blueprint" 
                      fill
                      className="object-cover transform scale-100 group-hover:scale-105 transition duration-700"
                      priority
                   />
                </section>

                {/* How We Do It */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Our Real Estate Growth Architecture</h2>

                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <Home className="text-[var(--color-teal)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">MLS-Integrated AI Assistants</h3>
                                <p className="text-gray-400 text-sm">We deploy an AI agent on your site that can answer specific questions about your active listings, pull MLS data natively, and book property tours directly into your calendar without human intervention.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <Crosshair className="text-[var(--color-gold)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Targeted Seller Funnels</h3>
                                <p className="text-gray-400 text-sm">We stop you from chasing buyers and instead attract sellers. We build high-converting "Home Valuation" funnels paired with localized Meta and Google ad campaigns to capture high-intent listings in specific Toronto or Montreal neighborhoods.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <BarChart className="text-[var(--color-teal)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Predictive Lead Scoring & Automation</h3>
                                <p className="text-gray-400 text-sm">Every contact is tracked and scored. Our systems know when a lead is "hot" (e.g., they just viewed a listing 3 times), triggering custom SMS automations to speed up your response time.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-br from-[var(--color-teal-dark)] to-[#0c1e26] p-10 rounded-2xl text-center border border-[var(--color-teal)]">
                    <h2 className="text-3xl font-bold mb-4">Automate Your Pipeline</h2>
                    <p className="mb-8 text-gray-300">See exactly how our AI agents handle real estate inquiries and convert them into scheduled showings.</p>
                    <button className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded hover:opacity-90 transition transform hover:scale-105 shadow-[0_0_20px_rgba(205,166,81,0.3)] w-full sm:w-auto">
                        Get Your Free AI Systems Audit
                    </button>
                </section>
            </div>
        </main>
    );
}
