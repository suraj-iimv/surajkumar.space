"use client";

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PageTransition from '@/components/layout/PageTransition';

interface MonetizationExperimentLayoutProps {
  title: string;
  description: string;
  metadata?: {
    status: 'Experimental' | 'Placeholder Only' | 'UX Validation' | 'Future Integration';
    category: string;
    validated: boolean;
  };
  children: React.ReactNode;
}

/**
 * MonetizationExperimentLayout
 * 
 * DESIGN RATIONALE:
 * - Standardizes editorial hierarchy and section spacing.
 * - Supports experiment metadata to align with Lab philosophy.
 * - Preserves cinematic whitespace and ecosystem rhythm.
 */
export default function MonetizationExperimentLayout({
  title,
  description,
  metadata,
  children,
}: MonetizationExperimentLayoutProps) {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-surface-tertiary text-content-tertiary border border-border">
                  Experiment
                </span>
                {metadata && (
                  <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-accent/5 text-accent border border-accent/10">
                    {metadata.status}
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-6">
                {title}
              </h1>
              
              <p className="text-lg text-content-secondary leading-relaxed mb-8">
                {description}
              </p>

              {/* Lab Policy Disclaimer */}
              <div className="p-6 rounded-xl bg-surface-secondary border border-border">
                <p className="text-sm text-content-tertiary italic">
                  “This section explores how monetization systems interact with performance, UX, and ecosystem design. 
                  Ads are isolated within the Lab to preserve the premium experience of the broader ecosystem.”
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            {children}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
