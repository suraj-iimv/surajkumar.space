import Link from "next/link";
import { experiments } from "@/data/experiments";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface RelatedExperimentProps {
  experimentId: string;
}

export default function RelatedExperiment({ experimentId }: RelatedExperimentProps) {
  const experiment = experiments.find((e) => e.id === experimentId);
  if (!experiment) return null;

  return (
    <ScrollReveal>
      <div className="my-12 p-6 rounded-lg border border-border bg-surface-secondary/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-content-tertiary mb-2 block">
              Related Lab Experiment
            </span>
            <h4 className="text-lg font-medium text-content-primary mb-1">
              {experiment.title}
            </h4>
            <p className="text-sm text-content-tertiary line-clamp-2 leading-relaxed">
              {experiment.description}
            </p>
          </div>
          
          <Link
            href={experiment.url || "/lab"}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-content-primary border border-border hover:bg-surface-primary transition-all duration-300 rounded shrink-0"
          >
            Launch Experiment
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}
