import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";
import { getMDXComponents } from "@/components/projects/MDXComponents";
import Tag from "@/components/ui/Tag";
import StatusBadge from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BackLink from "@/components/ui/BackLink";

import EcosystemContext from "@/components/writing/EcosystemContext";
import ReadingProgress from "@/components/editorial/ReadingProgress";
import ReadingMetadata from "@/components/editorial/ReadingMetadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return generatePageMetadata({
    title: project.title,
    description: project.description,
    ogImage: project.image,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <PageTransition>
      <ReadingProgress />
      <article className="pt-32 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back link */}
          <ScrollReveal>
            <BackLink href="/projects" label="Back to Projects" />
          </ScrollReveal>

          {/* Hero */}
          <ScrollReveal>
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <StatusBadge status={project.status} />
                <ReadingMetadata 
                  readingTime={project.readingTime}
                  updatedDate={project.updatedDate}
                />
                <span className="text-sm text-content-tertiary">
                  {project.year}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-content-primary mb-4">
                {project.title}
              </h1>

              <p className="text-lg md:text-xl text-content-secondary leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    size="default"
                  >
                    {project.type === "external"
                      ? "Launch App ↗"
                      : "Live Demo ↗"}
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="ghost"
                    size="default"
                  >
                    GitHub
                  </Button>
                )}
              </div>
            </header>
          </ScrollReveal>

          {/* Project Image */}
          <ScrollReveal>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-surface-secondary border border-border mb-16">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </ScrollReveal>

          {/* MDX Content */}
          <ScrollReveal>
            <div className="prose max-w-none">
              <MDXRemote
                source={project.content}
                components={getMDXComponents()}
              />
            </div>
          </ScrollReveal>

          {/* Ecosystem Context */}
          {project.ecosystemLinks && (
            <EcosystemContext links={project.ecosystemLinks} />
          )}
        </div>
      </article>
    </PageTransition>
  );
}
