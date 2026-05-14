import { generatePageMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getArticleBySlug } from "@/lib/mdx";
import ArticleCard from "@/components/writing/ArticleCard";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "Technical reflections on systems thinking, modular workflows, and the practice of building calm digital environments.",
});

const systemFoundations = [
  {
    category: "Architecture",
    foundations: [
      { title: "Modular Logic", description: "The principle of building composable systems designed for long-term evolution." },
      { title: "Architectural Reversibility", description: "Prioritizing flexible foundations that allow for low-cost course correction." },
      { title: "Cognitive Respect", description: "Reasoning for technical environments that minimize noise and maximize focus." },
    ]
  },
  {
    category: "Operations",
    foundations: [
      { title: "Agentic Collaboration", description: "The philosophy of treating AI agents as high-fidelity technical collaborators." },
      { title: "Automated Discovery", description: "Logic-driven pipelines for technical research, synthesis, and evolution." },
      { title: "Intentional Iteration", description: "The principle of continuous refinement across design and operational standards." },
    ]
  }
];

export default function AboutPage() {
  const featuredEssays = [
    "why-i-built-my-website-around-a-lab-ecosystem",
    "why-reversible-architecture-matters-in-early-systems",
    "how-ai-native-development-changes-product-iteration"
  ].map(slug => getArticleBySlug(slug)).filter((a): a is any => a !== null);

  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-40">
        <div className="max-w-4xl mx-auto px-6">
          {/* Cinematic Hero */}
          <ScrollReveal>
            <div className="max-w-3xl mb-24 md:mb-32">
              <p className="text-sm text-content-tertiary mb-6 tracking-[0.2em] uppercase">
                Foundation
              </p>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-content-primary mb-6">
                Suraj Kumar
              </h1>
              <p className="text-xl md:text-2xl text-content-secondary font-medium leading-relaxed max-w-2xl">
                Building an ecosystem of thoughtful systems, modular experiments, and calm digital experiences.
              </p>
            </div>
          </ScrollReveal>

          {/* Narrative: Origin & Evolution */}
          <ScrollReveal>
            <div className="mb-24 md:mb-32">
              <div className="prose">
                <h2 className="text-sm uppercase tracking-widest text-content-tertiary mb-8 font-normal">
                  Evolution
                </h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-content-primary mb-6">
                  The Logic of Systems
                </h3>
                <p>
                  My work has transitioned from building isolated projects to architecting living, operational ecosystems. This evolution was driven by a fundamental curiosity: how can we build digital environments that are modular enough to evolve, yet stable enough to remain calm?
                </p>
                <p>
                  This site is the outcome of that transition. It has matured from a traditional portfolio into a unified platform for <Link href="/projects">technical storytelling</Link>, <Link href="/lab">prototyping</Link>, and <Link href="/writing">foundational discovery</Link>. By moving toward a shared infrastructure of design tokens and operational standards, I can iterate on complex ideas with a speed that doesn&apos;t compromise system integrity.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Narrative: Philosophy (Architecture of Calm) */}
          <ScrollReveal>
            <div className="mb-24 md:mb-32">
              <div className="prose">
                <h2 className="text-sm uppercase tracking-widest text-content-tertiary mb-8 font-normal">
                  Philosophy
                </h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-content-primary mb-6">
                  The Architecture of Cognitive Respect
                </h3>
                <p>
                  I believe the most premium digital experience is one that respects the user&apos;s attention. In an era of discovery overload, <strong>Calm Luxury</strong> is not merely an aesthetic choice; it is an operational requirement for deep work and meaningful interaction.
                </p>
                <p>
                  This philosophy manifests as a commitment to <strong>Cognitive Load Reduction</strong>. Whether through minimal visual noise, zero layout shifts, or restrained typographic rhythm, the goal is to create interfaces that disappear, leaving only the clarity of the core intent. It is the practice of designing for focus rather than distraction.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Narrative: Reversibility (New Pillar) */}
          <ScrollReveal>
            <div className="mb-24 md:mb-32">
              <div className="prose">
                <h2 className="text-sm uppercase tracking-widest text-content-tertiary mb-8 font-normal">
                  Architecture
                </h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-content-primary mb-6">
                  Designing for Reversibility
                </h3>
                <p>
                  In a rapidly evolving technical landscape, the most expensive mistake is building for irreversibility. My approach is rooted in the principle of <strong>Low-Cost Course Correction</strong>.
                </p>
                <p>
                  By prioritizing modularity and decoupled logic—particularly in our <Link href="/projects/country-capital-ai">API-first systems</Link>—I ensure that experiments can be swapped, model providers can be pivoted, and interfaces can be refined without foundational restructuring. This modularity is our primary insurance policy against technical debt and AI volatility.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Narrative: Operations */}
          <ScrollReveal>
            <div className="mb-24 md:mb-32">
              <div className="prose">
                <h2 className="text-sm uppercase tracking-widest text-content-tertiary mb-8 font-normal">
                  Operations
                </h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-content-primary mb-6">
                  AI-Native Collaboration
                </h3>
                <p>
                  I treat intelligent agents as collaborators within a high-fidelity execution process. My workflow is built on <strong>intelligent workflows</strong>—leveraging a sequence of refined interactions (validated through our <Link href="/lab/content-pipeline-agent">Content Pipeline</Link> exploration) to handle the heavy lifting of technical synthesis while maintaining strict human-in-the-loop oversight.
                </p>
                <p>
                  This approach is grounded in <strong>Semantic Validation</strong>. By implementing strict data contracts and validation layers (such as our <Link href="/projects/hate-speech-detector">moderation systems</Link>), we ensure that non-deterministic AI outputs consistently align with human-defined intent. The result is a high-throughput creative cycle that remains deeply stable.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Narrative: Experimentation */}
          <ScrollReveal>
            <div className="mb-24 md:mb-32">
              <div className="prose">
                <h2 className="text-sm uppercase tracking-widest text-content-tertiary mb-8 font-normal">
                  Experimentation
                </h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-content-primary mb-6">
                  The Laboratory Mindset
                </h3>
                <p>
                  The <Link href="/lab">Laboratory</Link> is where we test hypotheses about monetization, interaction design, and automated pipelines. By embracing <strong>Intentional Incompleteness</strong>, we allow our systems to evolve naturally alongside the technology. Every prototype is a hypothesis being tested, refined, and eventually integrated into the broader ecosystem foundations.
                </p>
                <p>
                  These experiments feed directly back into our core projects, ensuring that every architectural decision is validated by real-world friction. It is a continuous loop of learning, refinement, and ecosystem evolution.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Narrative: Future */}
          <ScrollReveal>
            <div className="mb-24 md:mb-32 border-b border-border pb-24 md:pb-32">
              <div className="prose">
                <h2 className="text-sm uppercase tracking-widest text-content-tertiary mb-8 font-normal">
                  Future
                </h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-content-primary mb-6">
                  The Long-Term Arc
                </h3>
                <p>
                  The direction of this platform is one of continuous operational refinement. I am building a unified framework of design tokens, agentic workflows, and editorial standards that scales horizontally across every project I undertake.
                </p>
                <p>
                  The goal is to move beyond "building things" and toward "building systems"—creating a scalable foundation where every new experiment enriches our collective understanding of how intelligent, calm digital experiences should function.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Systems Inventory (Capabilities) */}
          <ScrollReveal>
            <div className="mb-32 md:mb-48">
              <h2 className="text-sm text-content-tertiary mb-12 tracking-widest uppercase font-normal text-center">
                Foundations
              </h2>
              <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                {systemFoundations.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-content-tertiary mb-8 border-b border-border pb-4">
                      {group.category}
                    </h3>
                    <div className="space-y-12">
                      {group.foundations.map((cap) => (
                        <div key={cap.title}>
                          <h4 className="text-lg font-medium text-content-primary mb-2">
                            {cap.title}
                          </h4>
                          <p className="text-content-secondary leading-relaxed max-w-sm">
                            {cap.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Further Reflections (Ecosystem Continuity) */}
          <ScrollReveal>
            <div className="mb-32 pt-24 border-t border-border">
              <div className="flex items-end justify-between mb-12 md:mb-16">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-content-primary">
                    Further Reflections
                  </h2>
                  <p className="mt-2 text-content-tertiary text-base max-w-lg">
                    Foundational essays on systems thinking, architecture, and the evolution of this lab.
                  </p>
                </div>
                <Link
                  href="/writing"
                  className="text-sm text-content-tertiary hover:text-content-primary transition-colors duration-300 flex items-center gap-1.5 shrink-0"
                >
                  View all reflections
                  <span>→</span>
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredEssays.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Final CTA */}
          <ScrollReveal>
            <div className="pt-20 border-t border-border text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-content-primary mb-6">
                Let&apos;s explore the boundaries.
              </h2>
              <p className="text-lg text-content-secondary mb-10 max-w-lg mx-auto leading-relaxed">
                I am always interested in thoughtful conversations about systems, architecture, and the future of human-agent collaboration.
              </p>
              <Button href="/contact" size="lg">Get in Touch</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
