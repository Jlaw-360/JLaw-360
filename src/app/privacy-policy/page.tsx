import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | JLAW 360 Marketing",
    description: "Privacy Policy for JLAW 360 Marketing, compliant with Quebec Law 25 (Bill 25).",
};

export default function PrivacyPolicy() {
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
                    Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-teal)]">Policy</span>
                </h1>

                <p className="text-gray-400 mb-10 text-lg border-l-2 border-[var(--color-teal)] pl-4">
                    Last Updated: February 2026. This policy is fully compliant with Quebec&apos;s Law 25 (formerly Bill 25).
                </p>

                <div className="prose prose-invert prose-teal max-w-none text-gray-300">
                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Introduction</h2>
                    <p className="mb-6">
                    This privacy policy (&quot;Policy&quot;) describes how JLAW 360 Marketing (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares personal information of users of this website. By using the site, you consent to the data practices described in this statement. This policy complies with Quebec&apos;s Law 25 regarding the protection of personal information.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. The Information We Collect</h2>
                    <p className="mb-4">
                        We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us. This may include your name, email address, phone number, and business details. We also automatically collect certain information when you visit the site, such as your IP address and browsing activities.
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Names and contact information (email, phone number).</li>
                        <li>Business details (website URL, company name, marketing goals).</li>
                        <li>Analytics data (IP addresses, browser types, usage patterns) collected via cookies.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. How We Use Your Information</h2>
                    <p className="mb-4">We act as a &quot;data processor&quot; for the information you provide about your clients, and a &quot;data controller&quot; for the information you provide about your own business. We comply with all applicable privacy laws. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>To provide, operate, and maintain our website.</li>
                        <li>To improve, personalize, and expand our website.</li>
                        <li>To understand and analyze how you use our website.</li>
                        <li>To develop new products, services, features, and functionality.</li>
                        <li>To communicate with you, either directly or through one of our partners.</li>
                        <li>For marketing and promotional purposes (with your explicit consent where required).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Law 25 Compliance (Quebec)</h2>
                    <p className="mb-4">
                        In strict compliance with Law 25, JLAW 360 Marketing guarantees the following rights to residents of Quebec:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Clear Consent:</strong> We obtain explicit, clear consent before collecting any personal data.</li>
                        <li><strong>Data Protection Officer:</strong> We have designated a person responsible for the protection of personal information.</li>
                        <li><strong>Right to be Forgotten:</strong> You have the right to request the deletion of your personal data from our systems.</li>
                        <li><strong>Data Portability:</strong> You have the right to request a copy of your computerized personal information.</li>
                        <li><strong>Breach Notification:</strong> In the event of a confidentiality incident involving a risk of serious injury, we will notify the Commission d&apos;accès à l&apos;information (CAI) and the persons concerned.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Contact Us</h2>
                    <p className="mb-4">In accordance with Quebec&apos;s Law 25, we have appointed a Privacy Officer responsible for ensuring compliance with this legislation. If you have any questions or concerns about our privacy practices or wish to exercise your rights regarding your personal information, please contact our Privacy Officer at <a href="mailto:privacy@jlaw360marketing.com" className="text-[var(--color-teal)] hover:underline">privacy@jlaw360marketing.com</a>.</p>
                </div>
            </div>
        </main>
    );
}
