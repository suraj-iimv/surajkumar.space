import { generatePageMetadata } from "@/lib/metadata";
import { getAllArticles } from "@/lib/mdx";
import ArticleCard from "@/components/writing/ArticleCard";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = generatePageMetadata({
  title: "Writing",
  description:
    "Thoughts on AI, experimentation, automation, and building things.",
});

export default function WritingPage() {
  const articles = getAllArticles();

  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-4">
                Writing
              </h1>
              <p className="text-lg text-content-secondary leading-relaxed">
                Observations on AI, product thinking, experimentation, and the
                practice of building things.
              </p>
            </div>
          </ScrollReveal>

          {/* Article List */}
          <div className="divide-y divide-border">
            {articles.map((article, index) => (
              <ScrollReveal key={article.slug} delay={index * 0.08}>
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>

          {articles.length === 0 && (
            <p className="text-content-tertiary text-center py-20">
              Articles coming soon.
            </p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
