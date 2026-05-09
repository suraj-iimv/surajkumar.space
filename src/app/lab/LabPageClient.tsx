"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiments } from "@/data/experiments";
import ExperimentCard from "@/components/lab/ExperimentCard";
import FilterBar from "@/components/lab/FilterBar";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LabPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? experiments
      : experiments.filter((e) => e.category === activeCategory);

  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="max-w-2xl mb-16 md:mb-20">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-4">
                Lab
              </h1>
              <p className="text-lg text-content-secondary leading-relaxed">
                Prototypes, unfinished experiments, AI concepts, and automation
                explorations. Not everything here is polished — that&apos;s the point.
              </p>
            </div>
          </ScrollReveal>

          {/* Filter */}
          <ScrollReveal>
            <FilterBar
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </ScrollReveal>

          {/* Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((experiment) => (
                <motion.div
                  key={experiment.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ExperimentCard experiment={experiment} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-content-tertiary text-center py-20">
              No experiments in this category yet.
            </p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
