"use client";

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface LabSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function LabSection({ title, children, className = "" }: LabSectionProps) {
  return (
    <ScrollReveal>
      <div className={`border-t border-border/50 pt-16 pb-16 ${className}`}>
        <h2 className="text-xs uppercase tracking-[0.3em] text-content-tertiary mb-10 font-normal">
          {title}
        </h2>
        <div className="prose max-w-none">
          {children}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function ExperimentOverview({ why, children }: { why: string; children: React.ReactNode }) {
  return (
    <div className="space-y-12">
      <div className="p-8 rounded-2xl bg-surface-secondary border border-border">
        <h3 className="text-xs uppercase tracking-[0.2em] text-content-tertiary mb-4 font-normal">
          Why This Exists
        </h3>
        <p className="text-lg text-content-secondary leading-relaxed font-medium italic">
          "{why}"
        </p>
      </div>
      <div className="prose max-w-2xl">
        {children}
      </div>
    </div>
  );
}

export function SystemNotes({ children }: { children: React.ReactNode }) {
  return <LabSection title="System Notes">{children}</LabSection>;
}

export function IterationNotes({ children }: { children: React.ReactNode }) {
  return <LabSection title="Iteration Notes">{children}</LabSection>;
}

export function FrictionNotes({ children }: { children: React.ReactNode }) {
  return (
    <LabSection title="Friction Notes" className="bg-surface-secondary/30 -mx-6 px-6 md:-mx-12 md:px-12 rounded-3xl">
      <div className="grid md:grid-cols-2 gap-12">
        {children}
      </div>
    </LabSection>
  );
}

export function FrictionPoint({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-base font-semibold text-content-primary mb-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
        {title}
      </h4>
      <div className="text-sm text-content-secondary leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function EcosystemImpact({ children }: { children: React.ReactNode }) {
  return <LabSection title="Ecosystem Impact">{children}</LabSection>;
}
