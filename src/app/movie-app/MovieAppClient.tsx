"use client";

import { useState, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Status = "idle" | "loading" | "success" | "error";

interface MovieData {
  title: string;
  release_year: string;
  director: string;
  cast: string[];
  ratings: string;
  plot: string;
  similar_movies: string[];
}

export default function MovieAppClient() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<MovieData | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const trimmedQuery = query.trim();
    if (!trimmedQuery || status === "loading") return;

    setStatus("loading");
    setErrorMessage("");
    // Note: intentionally NOT clearing `result` to preserve previous search during load

    try {
      const baseUrl = process.env.NEXT_PUBLIC_MOVIE_API_URL;
      if (!baseUrl) throw new Error("API base URL is not configured.");

      const res = await fetch(`${baseUrl}/api/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: trimmedQuery }),
      });
      
      const data = await res.json();
      
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to locate cinematic records for this entry.");
      }

      setResult(data.data);
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
        <div className="max-w-3xl mx-auto px-6">
          
          <ScrollReveal>
            <div className="mb-12 md:mb-16 text-center">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-content-primary mb-4">
                Cinematic Explorer
              </h1>
              <p className="text-base md:text-lg text-content-secondary leading-relaxed max-w-lg mx-auto">
                A premium AI curation engine. Enter a film title to retrieve its architectural metadata and related structural recommendations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-4 mb-16">
              <div className="flex-grow">
                <label htmlFor="movie" className="sr-only">Film Title</label>
                <input
                  id="movie"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className={inputClasses}
                  placeholder="e.g. Inception, The Matrix, Parasite..."
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
                  {status === "loading" ? "Analyzing..." : "Explore"}
                </Button>
              </div>
            </form>
          </ScrollReveal>

          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {status === "idle" && !result && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center justify-center pt-12 pb-24 text-center border border-dashed border-border rounded-3xl bg-surface-base/30"
                >
                  <p className="text-content-tertiary text-lg font-light tracking-wide max-w-md">
                    Awaiting cinematic inquiry. The database is primed for exploration.
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

              {/* Render result even if loading next, but add subtle opacity when loading */}
              {result && status !== "error" && (
                <motion.div
                  key="result-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: status === "loading" ? 0.6 : 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-16"
                >
                  {/* Primary Movie Display */}
                  <div className="bg-surface-elevated/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                      <div>
                        <p className="text-sm text-content-tertiary tracking-widest uppercase mb-2 font-medium">
                          Primary Result
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-2">
                          {result.title}
                        </h2>
                        <p className="text-lg text-content-secondary font-light">
                          {result.release_year} <span className="mx-2 opacity-50">•</span> Directed by {result.director}
                        </p>
                      </div>
                      <div className="text-left md:text-right">
                        <span className="inline-block px-4 py-2 bg-surface-base border border-border rounded-full text-content-primary font-medium tracking-wide">
                          {result.ratings}
                        </span>
                      </div>
                    </div>

                    <div className="w-full h-px bg-border my-8"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <p className="text-sm text-content-tertiary tracking-widest uppercase mb-3 font-medium">Synopsis</p>
                        <p className="text-content-secondary leading-relaxed text-lg">
                          {result.plot}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-content-tertiary tracking-widest uppercase mb-3 font-medium">Key Cast</p>
                        <ul className="space-y-2">
                          {result.cast.map((actor, idx) => (
                            <li key={idx} className="text-content-secondary">
                              {actor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Cards */}
                  {result.similar_movies && result.similar_movies.length > 0 && (
                    <div className="pt-8">
                      <div className="mb-8 flex items-center justify-between">
                        <h3 className="text-sm md:text-base text-content-secondary tracking-widest uppercase font-medium">
                          Related Cinematic Explorations
                        </h3>
                        <div className="h-px bg-border flex-grow ml-6"></div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {result.similar_movies.map((movie, idx) => (
                          <div 
                            key={idx} 
                            className="group relative flex flex-col bg-surface-elevated/30 border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-border-hover hover:bg-surface-elevated"
                          >
                            {/* Reserved Media Space: Maintains aspect ratio for future imagery */}
                            <div className="w-full aspect-[16/9] bg-surface-base border-b border-border flex items-center justify-center overflow-hidden">
                              <span className="text-content-tertiary text-xs tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                                No Poster Available
                              </span>
                            </div>
                            
                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow justify-between">
                              <h4 className="text-lg font-medium text-content-primary line-clamp-2">
                                {movie}
                              </h4>
                              {/* Placeholder for future tags/genres */}
                              <div className="mt-4 pt-4 border-t border-border border-dashed opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs text-content-tertiary tracking-wider uppercase">
                                  Explore match
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Loader indicator if preserving result */}
            <AnimatePresence>
              {status === "loading" && result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-surface-elevated border border-border shadow-xl rounded-full px-6 py-3 flex items-center space-x-3 z-50"
                >
                  <div className="w-2 h-2 rounded-full bg-content-primary animate-pulse"></div>
                  <span className="text-sm text-content-primary tracking-wide font-medium">
                    Analyzing cinematic database...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
}
