import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Terms of Service | JLAW 360 Marketing",
    description: "Terms of Service for JLAW 360 Marketing.",
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-[var(--color-navy)] pt-32 pb-20 relative px-6">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-teal)]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[var(--color-teal)] hover:text-[var(--color-gold)] transition font-semibold mb-8"
                >
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                    Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-teal)]">Service</span>
                </h1>

                <p className="text-gray-400 mb-10 text-lg border-l-2 border-[var(--color-teal)] pl-4">
                    Last Updated: February 2026.
                </p>

                <div className="prose prose-invert prose-teal max-w-none text-gray-300">
                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Agreement to Terms</h2>
                    <p className="mb-6">
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and JLAW 360 Marketing ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Intellectual Property Rights</h2>
                    <p className="mb-6">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. User Representations</h2>
                    <p className="mb-4">
                        By using the Site, you represent and warrant that:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>All registration information you submit will be true, accurate, current, and complete.</li>
                        <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                        <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                        <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                        <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Limitation of Liability</h2>
                    <p className="mb-6">
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Governing Law</h2>
                    <p className="mb-6">
                        These conditions are governed by and interpreted following the laws of Quebec, Canada, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law of your country of residence.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Contact Us</h2>
                    <p className="mb-6">
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <strong>legal@jlaw360marketing.com</strong>.
                    </p>
                </div>
            </div>
        </main>
    );
}
