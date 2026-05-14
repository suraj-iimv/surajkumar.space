import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommandMenu from "@/components/layout/CommandMenu";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Suraj Kumar — Creative Technologist",
    template: "%s — Suraj Kumar",
  },
  description:
    "Creative technologist exploring AI-powered digital experiences, automation systems, and interactive product experiments.",
  openGraph: {
    title: "Suraj Kumar — Creative Technologist",
    description:
      "Exploring AI systems, automation, interaction design, and digital experimentation.",
    url: "https://surajkumar.dev",
    siteName: "Suraj Kumar",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Kumar — Creative Technologist",
    description:
      "Exploring AI systems, automation, interaction design, and digital experimentation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-surface-primary text-content-primary antialiased">
        {/* Skip Navigation */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        <Navbar />
        <CommandMenu />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <Analytics />

        {/* 
          GOOGLE ADSENSE VERIFICATION
          Rationale: This is for site ownership verification ONLY.
          Monetization experiments remain strictly isolated in /lab/ads.
          Real ads are NOT globally enabled or injected into premium surfaces.
        */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6482506567582878"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
