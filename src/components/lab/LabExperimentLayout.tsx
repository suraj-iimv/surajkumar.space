"use client";

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PageTransition from '@/components/layout/PageTransition';
import RelatedReflection from '@/components/lab/RelatedReflection';
import BackLink from '@/components/ui/BackLink';
import { Article } from '@/lib/mdx';

interface LabExperimentLayoutProps {
  title: string;
  description: string;
  status: 'Active Exploration' | 'System Refinement' | 'UX Validation' | 'Flagship Exploration';
  children: React.ReactNode;
  relatedArticles?: Article[];
}

export default function LabExperimentLayout({
  title,
  description,
  status,
  children,
  relatedArticles,
}: LabExperimentLayoutProps) {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-10">
              <BackLink href="/lab" label="Back to Lab" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-surface-tertiary text-content-tertiary border border-border">
                  Lab Experiment
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-accent/5 text-accent border border-accent/10">
                  {status}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-6">
                {title}
              </h1>
              
              <p className="text-lg text-content-secondary leading-relaxed">
                {description}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {children}
          </div>

          <RelatedReflection articles={relatedArticles || []} />
        </div>
      </div>
    </PageTransition>
  );
}
