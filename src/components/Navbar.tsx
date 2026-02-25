"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "Niches", href: "#niches" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-[var(--color-navy)]/90 backdrop-blur-md border-b border-[var(--color-teal-dark)] py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img src="/logo.png" alt="JLAW 360 Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-md" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-gray-300 hover:text-[var(--color-gold)] transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-3 text-sm font-bold border border-[var(--color-teal-dark)] bg-black/40 rounded-full px-4 py-1.5 shadow-inner">
                        <Link href="/" className="text-[var(--color-gold)] hover:text-[var(--color-sand)] transition drop-shadow-[0_0_8px_rgba(205,166,81,0.5)]">EN</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/fr" className="text-gray-400 hover:text-white transition">FR</Link>
                    </div>
                    <button className="px-6 py-2.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-muted)] text-[var(--color-navy)] text-sm font-bold rounded hover:opacity-90 transition shadow-[0_0_15px_rgba(212,182,115,0.2)]">
                        Free Audit
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--color-navy)] border-b border-gray-800 py-4 px-6 flex flex-col gap-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-semibold text-white py-2 border-b border-gray-800/50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 py-2 border-b border-gray-800/50">
                        <Link href="/" className="text-xl font-bold text-[var(--color-gold)] drop-shadow-[0_0_8px_rgba(205,166,81,0.5)]">EN</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/fr" className="text-xl font-bold text-gray-400">FR</Link>
                    </div>
                    <button className="w-full mt-4 px-6 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded">
                        Get Your Free Audit
                    </button>
                </div>
            )}
        </motion.nav>
    );
}
