"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
    {
        title: "Services",
        links: [
            { label: "Sales Funnels", href: "#offers" },
            { label: "AI Automation", href: "#process" },
            { label: "Brand Strategy", href: "#offers" },
            { label: "Lead Generation", href: "#process" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "#about" },
            { label: "Portfolio", href: "#authority" },
            { label: "Process", href: "#process" },
            { label: "Contact", href: "#hero" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-gray-800">
            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-teal-dark via-teal to-teal-dark">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                        Ready to Build Your{" "}
                        <span className="gold-gradient-text">360° Ecosystem?</span>
                    </h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
                        Stop leaving money on the table. Book your free strategy session and
                        see how we can transform your business in 90 days.
                    </p>
                    <Link
                        href="#hero"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-black font-bold text-base rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/25"
                    >
                        Book My Free Strategy Session
                    </Link>
                </div>
            </div>

            {/* Footer Content */}
            <div className="bg-black-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <img
                                src="/logo.svg"
                                alt="JLAW 360 Marketing"
                                className="h-12 w-auto mb-4"
                            />
                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                We help Montreal businesses scale with high-converting funnels,
                                AI automation, and omnipresent marketing strategies. Your 360°
                                growth partner.
                            </p>
                            <div className="mt-6 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <MapPin size={14} className="text-gold shrink-0" />
                                    Montreal, QC, Canada
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Mail size={14} className="text-gold shrink-0" />
                                    hello@jlaw360.com
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Phone size={14} className="text-gold shrink-0" />
                                    (514) 555-0360
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        {footerLinks.map((group, i) => (
                            <div key={i}>
                                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                    {group.title}
                                </h4>
                                <ul className="space-y-3">
                                    {group.links.map((link, j) => (
                                        <li key={j}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-gray-500 hover:text-gold transition-colors duration-200"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-600">
                            © {new Date().getFullYear()} JLAW 360 Marketing. All rights
                            reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link
                                href="#"
                                className="text-xs text-gray-600 hover:text-gold transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="text-xs text-gray-600 hover:text-gold transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
