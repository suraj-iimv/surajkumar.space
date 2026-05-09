"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import { ease } from "@/lib/animations";

function DotGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const translateX = useTransform(mouseX, [0, 1], [-8, 8]);
  const translateY = useTransform(mouseY, [0, 1], [-8, 8]);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      aria-hidden="true"
    >
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="absolute inset-0"
      >
        <svg
          width="100%"
          height="100%"
          className="opacity-[0.08]"
        >
          <defs>
            <pattern
              id="dot-grid"
              x="0"
              y="0"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] flex items-center pt-16">
      {/* Interactive dot grid */}
      {!shouldReduceMotion && <DotGrid />}

      <div className="relative max-w-6xl mx-auto px-6 w-full py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="text-sm text-content-tertiary mb-6 tracking-wide"
          >
            Suraj Kumar — Creative Technologist
          </motion.p>

          {/* Headline */}
          <AnimatedText
            text="Building thoughtful AI-powered digital experiences."
            className="text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.1] tracking-tight text-content-primary"
            delay={0.2}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.8 }}
            className="mt-6 text-lg md:text-xl text-content-secondary max-w-xl leading-relaxed"
          >
            Exploring AI systems, automation, interaction design, and digital
            experimentation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/projects" size="large">
              View Projects
            </Button>
            <Button href="/lab" variant="ghost" size="large">
              Explore Lab
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
