import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadMagnetModal from "@/components/LeadMagnetModal";
import ChatWidget from "@/components/ChatWidget";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JLAW 360 Marketing | Top SEO & Lead Generation Agency",
  description:
    "Stop losing leads to an invisible online presence. JLAW 360 builds the bridge between your product and your profit with high-converting funnels, SEO, and AI automation.",
  keywords: [
    "SEO agency Montreal",
    "lead generation services",
    "sales funnels",
    "AI automation for business",
    "bilingual SEO",
    "digital marketing strategy",
  ],
  openGraph: {
    title: "JLAW 360 Marketing | AI-Powered Growth Agency",
    description: "Stop losing leads to an invisible online presence. We build the bridge between your product and your profit.",
    url: "https://jlaw360.com",
    siteName: "JLAW 360",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JLAW 360 Marketing",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JLAW 360 Marketing",
    description: "AI automation and high-converting funnels.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://jlaw360.com",
  },
};

import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[var(--color-navy)] text-white`}>
        {/* JSON-LD Structured Data for Local Business / SEO Agency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "JLAW 360 Marketing",
              "image": "https://jlaw360.com/logo.png",
              "@id": "https://jlaw360.com",
              "url": "https://jlaw360.com",
              "telephone": "+15145550360",
              "email": "hello@jlaw360.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Montreal",
                "addressRegion": "QC",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.5017,
                "longitude": -73.5673
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/jlaw360",
                "https://www.facebook.com/jlaw360"
              ]
            })
          }}
        />
        <Navbar dict={dict.navigation} lang={lang} />
        {children}
        <Footer dict={dict.footer} lang={lang} />
        <LeadMagnetModal />
        <ChatWidget />
      </body>
    </html>
  );
}
