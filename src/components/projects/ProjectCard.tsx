import Link from "next/link";
import Image from "next/image";
import Tag from "@/components/ui/Tag";
import StatusBadge from "@/components/ui/StatusBadge";
import type { Project } from "@/lib/mdx";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-500 hover:shadow-lg hover:shadow-black/[0.03] hover:border-border-hover">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <StatusBadge status={project.status} />
            <span className="text-xs text-content-tertiary">{project.year}</span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-content-primary mb-2 group-hover:text-content-primary/80 transition-colors">
            {project.title}
          </h3>
          <p className="text-content-secondary text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-5 pt-5 border-t border-border">
            {project.liveUrl && (
              <span className="text-sm text-content-secondary group-hover:text-content-primary transition-colors">
                Live Demo ↗
              </span>
            )}
            <span className="text-sm text-content-tertiary">
              Case Study →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
