import { generatePageMetadata } from "@/lib/metadata";
import { getAllArticles } from "@/lib/mdx";
import ArticleCard from "@/components/writing/ArticleCard";
import FeaturedReflection from "@/components/writing/FeaturedReflection";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = generatePageMetadata({
  title: "Writing",
  description:
    "Observations and foundational logic regarding systems architecture, modular design, and technical evolution.",
});

export default function WritingPage() {
  const allArticles = getAllArticles();
  
  // Define featured article
  const featuredSlug = "why-i-built-my-website-around-a-lab-ecosystem";
  const featuredArticle = allArticles.find(a => a.slug === featuredSlug) || allArticles[0];
  
  // Filter remaining articles
  const remainingArticles = allArticles.filter(a => a.slug !== featuredArticle?.slug);

  // Define thematic groups
  const groups = [
    {
      title: "Systems & Architecture",
      tags: ["Architecture", "Systems", "Scalability", "Engineering"],
    },
    {
      title: "AI & Workflows",
      tags: ["AI", "Workflow", "Automation", "Iteration"],
    },
    {
      title: "Design & Interfaces",
      tags: ["Design", "UX", "Interfaces", "UI"],
    },
    {
      title: "Experimentation & Philosophy",
      tags: ["Experimentation", "Lab", "Philosophy", "Ecosystem"],
    },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-20">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-4">
                Reflections
              </h1>
              <p className="text-lg text-content-secondary leading-relaxed max-w-2xl">
                Observations on AI, product thinking, experimentation, and the
                practice of building systems that evolve.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Section */}
          {featuredArticle && (
            <FeaturedReflection article={featuredArticle} />
          )}

          {/* Thematic Groups */}
          <div className="space-y-24 mt-32">
            {groups.map((group) => {
              const groupArticles = remainingArticles.filter((article) =>
                article.tags.some((tag) => group.tags.includes(tag))
              );

              if (groupArticles.length === 0) return null;

              return (
                <section key={group.title}>
                  <ScrollReveal>
                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-content-tertiary mb-8 border-b border-border pb-4">
                      {group.title}
                    </h2>
                  </ScrollReveal>
                  
                  <div className="divide-y divide-border/50">
                    {groupArticles.map((article, index) => (
                      <ScrollReveal key={article.slug} delay={index * 0.05}>
                        <ArticleCard article={article} />
                      </ScrollReveal>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Miscellaneous / All Articles fallback if not in any group */}
            {remainingArticles.length > 0 && (
              <section>
                <ScrollReveal>
                  <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-content-tertiary mb-8 border-b border-border pb-4">
                    Other Reflections
                  </h2>
                </ScrollReveal>
                
                <div className="divide-y divide-border/50">
                  {remainingArticles
                    .filter(a => !groups.some(g => a.tags.some(t => g.tags.includes(t))))
                    .map((article, index) => (
                      <ScrollReveal key={article.slug} delay={index * 0.05}>
                        <ArticleCard article={article} />
                      </ScrollReveal>
                    ))}
                </div>
              </section>
            )}
          </div>

          {allArticles.length === 0 && (
            <p className="text-content-tertiary text-center py-20">
              Articles coming soon.
            </p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
