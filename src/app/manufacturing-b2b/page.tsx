import { ArrowRight, Factory, LineChart, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "JLAW 360 | B2B & Manufacturing Digital Transformation",
    description: "Secure high-value B2B contracts. JLAW 360 deploys Account-Based Marketing (ABM) and content architectures for Canadian industrial sectors.",
};

export default function ManufacturingB2B() {
    return (
        <main className="min-h-screen bg-[var(--color-navy)] text-white pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">

                {/* Breadcrumb */}
                <div className="text-sm text-[var(--color-teal)] mb-8 flex items-center gap-2 font-bold tracking-widest uppercase">
                    <Link href="/">Home</Link> <ArrowRight size={14} /> Manufacturing & B2B
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    The <span className="text-[var(--color-gold)]">Digital Blueprint</span> <br />for Industrial B2B Giants
                </h1>

                <p className="text-xl text-gray-300 mb-12">
                    What most agencies get wrong: they apply B2C tactics to complex sales cycles. We engineer <span className="text-[var(--color-teal)] font-bold">Long-Cycle Persuasion Systems</span> designed specifically for 6-12 month B2B procurement processes.
                </p>

                {/* The Pain & The Pivot */}
                <section className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 mb-16">
                    <h2 className="text-2xl font-bold mb-4">The Productivity Gap in B2B Manufacturing</h2>
                    <p className="text-gray-400 mb-6">Your sales team is wasting time educating unqualified prospects. Procurement officers demand deep technical authority before they ever pick up the phone, yet your digital presence looks like a digital brochure from 2015.</p>
                    <div className="flex gap-4">
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded w-1/2">
                            <span className="block text-red-400 font-bold mb-1">Old Way</span>
                            <span className="text-sm text-gray-300">Relying solely on trade shows. PDF spec sheets hidden on slow websites. Zero tracking of procurement behavior.</span>
                        </div>
                        <div className="bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/20 p-4 rounded w-1/2">
                            <span className="block text-[var(--color-teal)] font-bold mb-1">JLAW 360 Way</span>
                            <span className="text-sm text-gray-300">Targeted LinkedIn ABM campaigns. High-converting technical whitepapers. Automated lead scoring.</span>
                        </div>
                    </div>
                </section>

                {/* --- Visual Connection --- */}
                <section className="mb-16 rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(205,166,81,0.15)] relative h-[300px] lg:h-[400px] group">
                   <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                     <span className="text-[var(--color-gold)] font-bold tracking-widest uppercase border border-[var(--color-gold)] px-6 py-2 rounded-full backdrop-blur-sm bg-black/50">Supply Chain OS</span>
                   </div>
                   <Image 
                      src="/images/manufacturing.png" 
                      alt="Industrial Digital Transformation OS" 
                      fill
                      className="object-cover transform scale-100 group-hover:scale-105 transition duration-700"
                      priority
                   />
                </section>

                {/* How We Do It */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Our B2B Growth Architecture</h2>

                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <Factory className="text-[var(--color-teal)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Account-Based Marketing (ABM)</h3>
                                <p className="text-gray-400 text-sm">We don&apos;t cast wide nets. We build hyper-targeted campaigns (LinkedIn & programmatic) aimed directly at the procurement officers and decision-makers within specific Canadian manufacturing tier lists.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <BookOpen className="text-[var(--color-gold)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Digital Asset Creation</h3>
                                <p className="text-gray-400 text-sm">We establish absolute authority by architecting premium lead magnets: in-depth industry whitepapers, technical capability guides, and bilingual knowledge hubs that answer complex engineering queries.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <LineChart className="text-[var(--color-teal)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Predictive Pipeline Automation</h3>
                                <p className="text-gray-400 text-sm">We deploy smart CRM integrations that track when a corporate user reads a case study, watched a demo, or downloads a spec sheet, alerting your sales team at the exact moment intent is highest.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-br from-[var(--color-teal-dark)] to-[#0c1e26] p-10 rounded-2xl text-center border border-[var(--color-teal)]">
                    <h2 className="text-3xl font-bold mb-4">Modernize Your Procurement Pipeline</h2>
                    <p className="mb-8 text-gray-300">Discover how top industrial players are using AI and ABM to shorten sales cycles by up to 30%.</p>
                    <button className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded hover:opacity-90 transition transform hover:scale-105 shadow-[0_0_20px_rgba(205,166,81,0.3)] w-full sm:w-auto">
                        Get Your Free AI Systems Audit
                    </button>
                </section>
            </div>
        </main>
    );
}
