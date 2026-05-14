import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Tag from "@/components/ui/Tag";
import type { Article } from "@/lib/mdx";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="group block py-8 md:py-10"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 text-[11px] text-content-tertiary mb-3 uppercase tracking-widest">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>·</span>
            <span>{article.readingTime}</span>
            {article.isFoundational && (
              <>
                <span>·</span>
                <span className="text-accent/70 font-medium lowercase tracking-normal">Foundational</span>
              </>
            )}
          </div>
          
          <h3 className="text-xl font-medium text-content-primary group-hover:text-content-secondary transition-colors duration-300 mb-2">
            {article.title}
          </h3>
          
          <p className="text-sm text-content-tertiary line-clamp-2 leading-relaxed mb-4 max-w-2xl">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <Tag key={tag} className="text-[9px] py-0.5 px-2 opacity-60 group-hover:opacity-100 transition-opacity">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-2 text-content-tertiary shrink-0 mt-1">
          <span className="text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Read Article
          </span>
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
