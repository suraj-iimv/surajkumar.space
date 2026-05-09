"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/experiments";

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterBar({
  activeCategory,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter experiments">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onCategoryChange(cat.key)}
          role="tab"
          aria-selected={activeCategory === cat.key}
          className={`relative px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
            activeCategory === cat.key
              ? "text-content-primary"
              : "text-content-tertiary hover:text-content-secondary"
          }`}
        >
          {activeCategory === cat.key && (
            <motion.div
              layoutId="filter-active"
              className="absolute inset-0 bg-surface-secondary border border-border rounded-full"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
