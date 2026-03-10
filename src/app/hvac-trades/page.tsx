import { ArrowRight, MapPin, Zap, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "JLAW 360 | Digital Growth for Canadian HVAC & Trades",
    description: "Dominate local searches in Montreal and Ontario. We deploy autonomous dispatch bots and hyper-local SEO so you capture emergency calls before your competitors.",
};

export default function HVACTrades() {
    return (
        <main className="min-h-screen bg-[var(--color-navy)] text-white pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">

                {/* Breadcrumb */}
                <div className="text-sm text-[var(--color-teal)] mb-8 flex items-center gap-2 font-bold tracking-widest uppercase">
                    <Link href="/">Home</Link> <ArrowRight size={14} /> HVAC & Trades
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    The <span className="text-[var(--color-gold)]">Digital Blueprint</span> <br />for Local Trade Leaders
                </h1>

                <p className="text-xl text-gray-300 mb-12">
                    What most agencies get wrong: they sell you &quot;branding.&quot; We engineer <span className="text-[var(--color-teal)] font-bold">Speed-to-Lead Dispatch Systems</span> that ensure you are the only option when a furnace breaks at 2 AM in Montreal.
                </p>

                {/* The Pain & The Pivot */}
                <section className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 mb-16">
                    <h2 className="text-2xl font-bold mb-4">The Productivity Gap in Home Services</h2>
                    <p className="text-gray-400 mb-6">78% of emergency jobs go to the company that responds first. If your website doesn&apos;t instantly book and qualify the lead, you lose the job to a competitor.</p>
                    <div className="flex gap-4">
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded w-1/2">
                            <span className="block text-red-400 font-bold mb-1">Old Way</span>
                            <span className="text-sm text-gray-300">&quot;Free Estimate&quot; form that goes to an unmonitored inbox. Invisible on Google Maps for neighboring towns.</span>
                        </div>
                        <div className="bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/20 p-4 rounded w-1/2">
                            <span className="block text-[var(--color-teal)] font-bold mb-1">JLAW 360 Way</span>
                            <span className="text-sm text-gray-300">AI Dispatch Bot books the truck immediately. Top 3 Map Pack rankings across 15+ local micro-markets.</span>
                        </div>
                    </div>
                </section>

                {/* --- Visual Connection --- */}
                <section className="mb-16 rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(39,126,149,0.15)] relative h-[300px] lg:h-[400px] group">
                   <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                     <span className="text-[var(--color-teal)] font-bold tracking-widest uppercase border border-[var(--color-teal)] px-6 py-2 rounded-full backdrop-blur-sm bg-black/50">Smart Dispatch Tech</span>
                   </div>
                   <Image 
                      src="/images/hvac.png" 
                      alt="Autonomous HVAC Dispatch AI" 
                      fill
                      className="object-cover transform scale-100 group-hover:scale-105 transition duration-700"
                      priority
                   />
                </section>

                {/* How We Do It */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Our HVAC & Trades Architecture</h2>

                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <MapPin className="text-[var(--color-teal)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Neighborhood-Level SEO (GEO)</h3>
                                <p className="text-gray-400 text-sm">We don&apos;t just target &quot;Montreal&quot;. We dominate micro-markets: Plateau Mont-Royal, NDG, Westmount, and across Ontario (Mississauga, Oakville). We build English & French programmatic pages for every service in every postal code.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <Zap className="text-[var(--color-gold)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Automated Emergency AI Dispatch</h3>
                                <p className="text-gray-400 text-sm">Our AI chatbot lives on your site. Visitor: &quot;My furnace stopped working in NDG.&quot; AI: &quot;Is it making noise? I can book a technician within 2 hours.&quot; It captures the lead before they can click back to Google.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0 border border-gray-800">
                                <PhoneCall className="text-[var(--color-teal)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Performance Local Ads Integration</h3>
                                <p className="text-gray-400 text-sm">We manage Google Local Service Ads (LSA) and targeted Meta campaigns to guarantee phone calls during high-season (winter deep freezes, summer heat waves).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-br from-[var(--color-teal-dark)] to-[#0c1e26] p-10 rounded-2xl text-center border border-[var(--color-teal)]">
                    <h2 className="text-3xl font-bold mb-4">Own Your Local Market</h2>
                    <p className="mb-8 text-gray-300">Get a free AI Growth Roadmap to see the exact neighborhoods where your competitors are stealing your service calls.</p>
                    <button className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded hover:opacity-90 transition transform hover:scale-105 shadow-[0_0_20px_rgba(205,166,81,0.3)] w-full sm:w-auto">
                        Get Your Free AI Systems Audit
                    </button>
                </section>
            </div>
        </main>
    );
}
