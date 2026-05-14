import Link from "next/link";
import { Article } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tag from "@/components/ui/Tag";

interface FeaturedReflectionProps {
  article: Article;
}

export default function FeaturedReflection({ article }: FeaturedReflectionProps) {
  return (
    <section className="mb-20">
      <ScrollReveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-content-tertiary mb-6 block">
          Featured Reflection
        </span>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <Link 
          href={`/writing/${article.slug}`}
          className="group block"
        >
          <div className="border border-border rounded-lg p-8 md:p-10 bg-surface-secondary/50 hover:bg-surface-secondary transition-colors duration-500">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-sm text-content-tertiary mb-4">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span>·</span>
                <span>{article.readingTime}</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-content-primary mb-4 group-hover:text-content-secondary transition-colors duration-300">
                {article.title}
              </h2>
              
              <p className="text-content-secondary leading-relaxed mb-6 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {article.tags.slice(0, 3).map((tag) => (
                  <Tag key={tag} className="bg-surface-primary/50 border-border/50 text-[10px] uppercase tracking-wider">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </ScrollReveal>
    </section>
  );
}
