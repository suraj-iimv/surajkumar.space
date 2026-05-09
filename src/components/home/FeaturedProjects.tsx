"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import StatusBadge from "@/components/ui/StatusBadge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Project } from "@/lib/mdx";

interface FeaturedProjectsProps {
  projects: Project[];
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isFirst = index === 0;

  return (
    <ScrollReveal delay={index * 0.15}>
      <Link href={`/projects/${project.slug}`} className="group block">
        <motion.article
          whileHover={shouldReduceMotion ? {} : { y: -4 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`relative overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-shadow duration-500 hover:shadow-lg hover:shadow-black/[0.03] ${
            isFirst ? "md:col-span-2" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`relative overflow-hidden bg-surface-secondary ${
              isFirst ? "aspect-[16/8]" : "aspect-[16/10]"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes={isFirst ? "100vw" : "50vw"}
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <StatusBadge status={project.status} />
              <span className="text-xs text-content-tertiary">
                {project.year}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-content-primary mb-2 group-hover:text-content-primary/80 transition-colors">
              {project.title}
            </h3>
            <p className="text-content-secondary text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </motion.article>
      </Link>
    </ScrollReveal>
  );
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Selected Work"
            subtitle="Digital product experiments exploring AI, automation, and interaction design."
            viewAllHref="/projects"
          />
        </ScrollReveal>

        {/* Editorial asymmetric layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
