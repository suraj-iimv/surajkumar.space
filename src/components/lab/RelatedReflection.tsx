import Link from "next/link";
import { Article } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface RelatedReflectionProps {
  articles: Article[];
}

export default function RelatedReflection({ articles }: RelatedReflectionProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-border">
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-content-tertiary mb-6 block">
        Related Reflection
      </span>
      
      <div className="space-y-6">
        {articles.map((article) => (
          <ScrollReveal key={article.slug}>
            <Link 
              href={`/writing/${article.slug}`}
              className="group block"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-border rounded-lg bg-surface-secondary/20 hover:bg-surface-secondary/50 transition-all duration-500">
                <div className="flex-1">
                  <time className="text-[10px] text-content-tertiary uppercase tracking-wider mb-2 block">
                    {formatDate(article.date)}
                  </time>
                  <h4 className="text-base font-medium text-content-primary mb-1">
                    {article.title}
                  </h4>
                  <p className="text-sm text-content-tertiary line-clamp-1 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="text-content-tertiary shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
