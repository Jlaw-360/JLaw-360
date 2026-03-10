import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Footer({ lang, dict }: { lang: Locale; dict: Record<string, any> }) {
    return (
        <footer className="bg-[#0B1A22] text-white pt-24 pb-8 px-6 border-t border-gray-900 mt-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">

                {/* Brand */}
                <div className="md:col-span-1">
                    <Link href={`/${lang}`} className="inline-block mb-6 relative w-32 h-14">
                        <Image src="/logo.png" alt="JLAW 360 Logo" fill className="object-contain opacity-90 hover:opacity-100 transition" sizes="128px" />
                    </Link>
                    <p className="text-gray-400 text-sm mb-6 max-w-xs">
                        {dict.description}
                    </p>
                    <div className="text-sm font-bold text-[var(--color-gold)]">
                        {dict.locations}
                    </div>
                </div>

                {/* Niche Solutions */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white tracking-wide">{dict.niches_title}</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href={`/${lang}/law-firms`} className="hover:text-[var(--color-teal)] transition">Law Firms & Attorneys</Link></li>
                        <li><Link href={`/${lang}/hvac-trades`} className="hover:text-[var(--color-teal)] transition">HVAC & Residential Trades</Link></li>
                        <li><Link href={`/${lang}/real-estate`} className="hover:text-[var(--color-teal)] transition">Real Estate & Property Mgmt</Link></li>
                        <li><Link href={`/${lang}/manufacturing-b2b`} className="hover:text-[var(--color-teal)] transition">Manufacturing B2B</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white tracking-wide">{dict.services_title}</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href={`/${lang}/services`} className="hover:text-white transition cursor-pointer">Bilingual SEO & GEO</Link></li>
                        <li><Link href={`/${lang}/services`} className="hover:text-white transition cursor-pointer">AI Support & Dispatch Bots</Link></li>
                        <li><Link href={`/${lang}/services`} className="hover:text-white transition cursor-pointer">Digital Blueprint Strategy</Link></li>
                        <li><Link href={`/${lang}/services`} className="hover:text-white transition cursor-pointer">Performance Meta/Google Ads</Link></li>
                        <li><Link href={`/${lang}/services`} className="hover:text-white transition cursor-pointer">Automated CRM Integrations</Link></li>
                        <li><Link href={`/${lang}/about`} className="hover:text-[var(--color-gold)] font-bold transition cursor-pointer">À Propos du Fondateur</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white tracking-wide">{dict.cta_title}</h4>
                    <p className="text-sm text-gray-400 mb-6">{dict.cta_desc}</p>
                    <button className="w-full px-6 py-3 bg-[var(--color-teal-dark)] border border-[var(--color-teal)] text-white font-bold rounded hover:bg-[var(--color-teal)] transition flex items-center justify-center gap-2">
                        {dict.cta_btn} <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>{dict.copyright}</p>
                <div className="flex gap-6">
                    <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition cursor-pointer">Privacy Policy (Bill 25 Compliant)</Link>
                    <Link href={`/${lang}/terms-of-service`} className="hover:text-white transition cursor-pointer">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
