import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/lib/mdx";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 gap-2 md:gap-8"
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium text-content-primary group-hover:text-content-secondary transition-colors duration-300">
          {article.title}
        </h3>
        <p className="mt-1 text-sm text-content-tertiary line-clamp-1">
          {article.excerpt}
        </p>
      </div>
      <div className="flex items-center gap-4 text-sm text-content-tertiary shrink-0">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        <span>{article.readingTime}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
