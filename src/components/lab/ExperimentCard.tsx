import Link from "next/link";
import Tag from "@/components/ui/Tag";
import StatusBadge from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";
import type { Experiment } from "@/data/experiments";

interface ExperimentCardProps {
  experiment: Experiment;
}

export default function ExperimentCard({ experiment }: ExperimentCardProps) {
  const CardContent = (
    <article className="h-full flex flex-col group p-6 rounded-xl border border-border bg-surface-elevated hover:border-border-hover hover:shadow-sm transition-all duration-400">
      <div className="flex items-center justify-between mb-4">
        <StatusBadge status={experiment.status} />
        <span className="text-xs text-content-tertiary capitalize">
          {experiment.category.replace("-", " ")}
        </span>
      </div>

      <h3 className="text-base font-medium text-content-primary mb-2 group-hover:text-content-primary/80 transition-colors">
        {experiment.title}
      </h3>

      <p className="text-sm text-content-tertiary leading-relaxed mb-6 flex-grow">
        {experiment.description}
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-1.5">
          {experiment.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {experiment.url && (
          <Button href={experiment.url} variant="ghost" size="small" className="w-full">
            Launch Experiment
          </Button>
        )}
      </div>
    </article>
  );

  if (experiment.url) {
    return (
      <Link href={experiment.url} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
