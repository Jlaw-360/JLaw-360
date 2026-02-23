import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JLAW 360 Marketing | Build Your 360° Automated Sales Ecosystem",
  description:
    "We help Montreal businesses scale by surrounding their customers with high-converting funnels, AI automation, and omnipresent marketing.",
  keywords: [
    "digital marketing",
    "Montreal marketing agency",
    "sales funnels",
    "AI automation",
    "ClickFunnels",
    "lead generation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
