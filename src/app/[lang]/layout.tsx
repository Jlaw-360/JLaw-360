import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadMagnetModal from "@/components/LeadMagnetModal";
import ChatWidget from "@/components/ChatWidget";
import "../globals.css";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  
  return {
    title: dict.seo?.home_title || "JLAW 360 Marketing",
    description: dict.seo?.home_desc || "Stop losing leads to an invisible online presence.",
    keywords: dict.seo?.keywords || ["SEO agency Montreal"],
    openGraph: {
      title: dict.seo?.home_title,
      description: dict.seo?.home_desc,
      url: `https://app.jlaw360marketing.com/${lang}`,
      siteName: "JLAW 360",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "JLAW 360 Marketing",
        },
      ],
      locale: lang === "fr" ? "fr_CA" : "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo?.home_title,
      description: dict.seo?.home_desc,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://app.jlaw360marketing.com/${lang}`,
      languages: {
        'en': `https://app.jlaw360marketing.com/en`,
        'fr': `https://app.jlaw360marketing.com/fr`,
      },
    },
  };
}

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
        <Navbar dict={dict.navigation} lang={lang as Locale} />
        {children}
        <Footer dict={dict.footer} lang={lang as Locale} />
        <LeadMagnetModal />
        <ChatWidget />
      </body>
    </html>
  );
}
