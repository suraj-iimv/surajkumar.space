import Link from "next/link";
import { Article } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface RelatedArticlesProps {
  currentSlug: string;
  articles: Article[];
}

export default function RelatedArticles({ currentSlug, articles }: RelatedArticlesProps) {
  const currentArticle = articles.find((a) => a.slug === currentSlug);
  if (!currentArticle) return null;

  const related = articles
    .filter((a) => a.slug !== currentSlug && a.published)
    .map((a) => {
      const sharedTags = a.tags.filter((tag) => currentArticle.tags.includes(tag));
      return { ...a, score: sharedTags.length };
    })
    .filter((a) => a.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-24 pt-16 border-t border-border">
      <ScrollReveal>
        <h2 className="text-sm font-medium uppercase tracking-widest text-content-tertiary mb-10">
          Related Articles
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {related.map((article) => (
          <ScrollReveal key={article.slug}>
            <Link 
              href={`/writing/${article.slug}`}
              className="group block"
            >
              <div className="flex flex-col h-full">
                <time className="text-xs text-content-tertiary mb-3 uppercase tracking-wider">
                  {formatDate(article.date)}
                </time>
                <h3 className="text-lg font-medium text-content-primary group-hover:text-content-secondary transition-colors leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-sm text-content-tertiary line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
