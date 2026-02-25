import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0B1A22] text-white pt-24 pb-8 px-6 border-t border-gray-900 mt-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">

                {/* Brand */}
                <div className="md:col-span-1">
                    <Link href="/" className="inline-block mb-6">
                        <img src="/logo.png" alt="JLAW 360 Logo" className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition" />
                    </Link>
                    <p className="text-gray-400 text-sm mb-6 max-w-xs">
                        The Canadian Productivity Gap Solution. We deploy AI agents, bilingual SEO architecture, and automated growth systems for high-ticket industries.
                    </p>
                    <div className="text-sm font-bold text-[var(--color-gold)]">
                        Montreal • Toronto • Ottawa
                    </div>
                </div>

                {/* Niche Solutions */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Elite Niches</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="/law-firms" className="hover:text-[var(--color-teal)] transition">Law Firms & Attorneys</Link></li>
                        <li><Link href="/hvac-trades" className="hover:text-[var(--color-teal)] transition">HVAC & Residential Trades</Link></li>
                        <li><Link href="/real-estate" className="hover:text-[var(--color-teal)] transition">Real Estate & Property Mgmt</Link></li>
                        <li><Link href="/manufacturing-b2b" className="hover:text-[var(--color-teal)] transition">Manufacturing B2B</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Digital Architecture</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="hover:text-white transition cursor-pointer">Bilingual SEO & GEO</li>
                        <li className="hover:text-white transition cursor-pointer">AI Support & Dispatch Bots</li>
                        <li className="hover:text-white transition cursor-pointer">Digital Blueprint Strategy</li>
                        <li className="hover:text-white transition cursor-pointer">Performance Meta/Google Ads</li>
                        <li className="hover:text-white transition cursor-pointer">Automated CRM Integrations</li>
                    </ul>
                </div>

                {/* CTA */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Start the Transformation</h4>
                    <p className="text-sm text-gray-400 mb-6">Stop losing revenue to outdated systems. Get a visual breakdown of where your funnel is leaking.</p>
                    <button className="w-full px-6 py-3 bg-[var(--color-teal-dark)] border border-[var(--color-teal)] text-white font-bold rounded hover:bg-[var(--color-teal)] transition flex items-center justify-center gap-2">
                        Free 15-Min System Audit <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>© 2026 JLAW 360 Marketing. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy-policy" className="hover:text-white transition cursor-pointer">Privacy Policy (Bill 25 Compliant)</Link>
                    <Link href="/terms-of-service" className="hover:text-white transition cursor-pointer">Terms of Service</Link>
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <span className="text-[var(--color-gold)] font-bold group-hover:text-white transition">EN</span>
                        <span className="text-gray-700">/</span>
                        <Link href="/fr" className="text-gray-500 group-hover:text-white transition font-medium">FR</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
