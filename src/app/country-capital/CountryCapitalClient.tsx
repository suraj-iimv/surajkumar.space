"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Status = "idle" | "loading" | "success" | "error";

export default function CountryCapitalClient() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  // Use a flexible state to support future payload extensions
  const [result, setResult] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const trimmedQuery = query.trim();
    if (!trimmedQuery || status === "loading") return;

    setStatus("loading");
    setErrorMessage("");
    setResult(null);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!baseUrl) throw new Error("API base URL is not configured.");

      const res = await fetch(`${baseUrl}/capital?country=${encodeURIComponent(trimmedQuery)}`);
      
      if (!res.ok) {
        // Parse the error if possible, but handle gracefully
        throw new Error("Unable to locate information for this entry. Please refine your search.");
      }

      const data = await res.json();
      setResult(data);
      setStatus("success");
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-surface-elevated border border-border rounded-lg px-4 py-3 md:py-4 text-base md:text-lg text-content-primary placeholder:text-content-tertiary focus:outline-none focus:border-border-hover focus:ring-1 focus:ring-border-hover transition-all duration-200";

  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-32 min-h-screen">
        <div className="max-w-2xl mx-auto px-6">
          
          <ScrollReveal>
            <div className="mb-12 md:mb-16 text-center">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-content-primary mb-4">
                Country Capital AI
              </h1>
              <p className="text-base md:text-lg text-content-secondary leading-relaxed max-w-lg mx-auto">
                A lightweight AI-assisted knowledge system. Enter a country to retrieve its capital via our modular backend architecture.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-4 mb-16">
              <div className="flex-grow">
                <label htmlFor="country" className="sr-only">Country Name</label>
                <input
                  id="country"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className={inputClasses}
                  placeholder="e.g. Japan, France, Brazil..."
                  autoComplete="off"
                  disabled={status === "loading"}
                />
              </div>
              <div className="sm:w-auto w-full">
                <Button
                  type="submit"
                  size="large"
                  disabled={status === "loading" || !query.trim()}
                  className="w-full sm:w-auto h-full"
                >
                  {status === "loading" ? "Analyzing..." : "Search"}
                </Button>
              </div>
            </form>
          </ScrollReveal>

          <div className="min-h-[200px] relative">
            <AnimatePresence mode="wait">
              {status === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <p className="text-content-tertiary text-lg animate-pulse tracking-wide font-light">
                    Retrieving context...
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-surface-elevated border border-border rounded-2xl p-8 text-center"
                >
                  <p className="text-status-experimental font-medium mb-2">Notice</p>
                  <p className="text-content-secondary">{errorMessage}</p>
                </motion.div>
              )}

              {status === "success" && result && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-surface-elevated/50 backdrop-blur-sm border border-border rounded-3xl p-10 md:p-16 text-center shadow-sm"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <p className="text-sm md:text-base text-content-tertiary tracking-widest uppercase mb-4 md:mb-6 font-medium">
                      Capital City
                    </p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-content-primary mb-2">
                      {/* Assuming the API returns something like { "capital": "Tokyo" } or { "country": "Japan", "capital": "Tokyo" } */}
                      {result.capital || result.result || JSON.stringify(result)}
                    </h2>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
}
