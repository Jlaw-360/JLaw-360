import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[var(--color-navy)] text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
