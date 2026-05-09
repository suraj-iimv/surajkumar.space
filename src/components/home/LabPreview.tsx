import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusBadge from "@/components/ui/StatusBadge";
import Tag from "@/components/ui/Tag";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiments } from "@/data/experiments";

export default function LabPreview() {
  const preview = experiments.slice(0, 3);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Lab"
            subtitle="Prototypes, experiments, and unfinished ideas."
            viewAllHref="/lab"
            viewAllLabel="Explore all"
          />
        </ScrollReveal>

        {/* Asymmetric arrangement */}
        <div className="grid md:grid-cols-3 gap-6">
          {preview.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.1}>
              <Link
                href={exp.url || "/lab"}
                className="group block p-6 rounded-xl border border-border bg-surface-elevated hover:border-border-hover transition-all duration-400 hover:shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <StatusBadge status={exp.status} />
                </div>
                <h3 className="text-base font-medium text-content-primary mb-2 group-hover:text-content-primary/80 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm text-content-tertiary leading-relaxed mb-4 line-clamp-2">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.slice(0, 2).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
