import { generatePageMetadata } from "@/lib/metadata";
import { getAllProjects } from "@/lib/mdx";
import ProjectCard from "@/components/projects/ProjectCard";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "Implementations exploring modular architecture and the practical application of intelligent systems.",
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="max-w-2xl mb-16 md:mb-20">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-4">
                Projects
              </h1>
              <p className="text-lg text-content-secondary leading-relaxed">
                A collection of digital product experiments — exploring AI systems,
                automation tools, and interactive experiences.
              </p>
            </div>
          </ScrollReveal>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          {projects.length === 0 && (
            <p className="text-content-tertiary text-center py-20">
              Projects coming soon.
            </p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
