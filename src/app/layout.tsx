import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommandMenu from "@/components/layout/CommandMenu";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
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
    default: "Suraj Kumar — Thoughtful Systems & Research",
    template: "%s — Suraj Kumar",
  },
  description:
    "Thoughtful systems architecture, modular workflows, and foundational technical discovery.",
  openGraph: {
    title: "Suraj Kumar — Thoughtful Systems & Research",
    description:
      "Thoughtful systems architecture, modular workflows, and foundational technical discovery.",
    url: "https://surajkumar.space",
    siteName: "Suraj Kumar",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Kumar — Thoughtful Systems & Research",
    description:
      "Thoughtful systems architecture, modular workflows, and foundational technical discovery.",
  },
  robots: {
    index: true,
    follow: true,
  },
  /* 
    GOOGLE ADSENSE VERIFICATION
    Rationale: This is for site ownership verification ONLY.
    Real ads are NOT globally enabled or injected into premium surfaces.
    Monetization experiments remain strictly isolated in /lab/monetization-systems.
  */
  other: {
    "google-adsense-account": "ca-pub-6482506567582878",
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
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
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
        </ThemeProvider>
      </body>
    </html>
  );
}
