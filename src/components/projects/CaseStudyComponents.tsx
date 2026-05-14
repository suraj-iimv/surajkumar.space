import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function CaseStudySection({ title, children, className, id }: CaseStudySectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16 border-t border-border/50 first:border-t-0 first:pt-0", className)}>
      <ScrollReveal>
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-content-tertiary mb-8">
          {title}
        </h2>
        <div className="prose max-w-none">
          {children}
        </div>
      </ScrollReveal>
    </section>
  );
}

export function TechnicalHighlight({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-lg border border-border bg-surface-secondary/30 my-8">
      <h4 className="text-sm font-medium text-content-primary mb-3 uppercase tracking-wider">
        {title}
      </h4>
      <div className="text-sm text-content-secondary leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function ArchitectureCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-8 md:p-10 rounded-2xl border border-border bg-surface-secondary/50 my-12 overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </div>
      <div className="relative z-10 prose prose-sm max-w-none">
        {children}
      </div>
    </div>
  );
}

/* Reusable Section wrappers for specific case study parts */

export function CaseStudyOverview({ children }: { children: React.ReactNode }) {
  return <CaseStudySection title="Overview" id="overview">{children}</CaseStudySection>;
}

export function CaseStudyProblem({ children }: { children: React.ReactNode }) {
  return <CaseStudySection title="Problem & Motivation" id="problem">{children}</CaseStudySection>;
}

export function CaseStudyArchitecture({ children }: { children: React.ReactNode }) {
  return <CaseStudySection title="System Architecture" id="architecture">{children}</CaseStudySection>;
}

export function CaseStudyWorkflow({ children }: { children: React.ReactNode }) {
  return <CaseStudySection title="Workflow & Process" id="workflow">{children}</CaseStudySection>;
}

export function CaseStudyDecisions({ children }: { children: React.ReactNode }) {
  return <CaseStudySection title="Technical Decisions" id="decisions">{children}</CaseStudySection>;
}

export function CaseStudyLessons({ children }: { children: React.ReactNode }) {
  return <CaseStudySection title="Lessons & Reflections" id="lessons">{children}</CaseStudySection>;
}

export function CaseStudyTradeoffs({ children }: { children: React.ReactNode }) {
  return <CaseStudySection title="Tradeoffs & Rationale" id="tradeoffs">{children}</CaseStudySection>;
}

export function CaseStudyEvolution({ children }: { children: React.ReactNode }) {
  return <CaseStudySection title="Iteration & Evolution" id="evolution">{children}</CaseStudySection>;
}

export function CaseStudyConstraints({ children }: { children: React.ReactNode }) {
  return <CaseStudySection title="Operational Constraints" id="constraints">{children}</CaseStudySection>;
}

export function CaseStudyFuture({ children }: { children: React.ReactNode }) {
  return <CaseStudySection title="Future Direction" id="future">{children}</CaseStudySection>;
}

export function ResearchFoundation({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <CaseStudySection title="Research Foundation">
      <div className="bg-surface-secondary/30 -mx-6 px-6 md:-mx-12 md:px-12 py-12 rounded-3xl border border-border/50">
        <h3 className="text-xl font-semibold text-content-primary mb-6">
          {title}
        </h3>
        <div className="prose prose-sm max-w-none text-content-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </CaseStudySection>
  );
}
