import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/lib/mdx";

interface WritingPreviewProps {
  articles: Article[];
}

export default function WritingPreview({ articles }: WritingPreviewProps) {
  const preview = articles.slice(0, 3);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Writing"
            subtitle="Thoughts on AI, experimentation, and building things."
            viewAllHref="/writing"
          />
        </ScrollReveal>

        {/* Editorial vertical list */}
        <div className="space-y-0 divide-y divide-border">
          {preview.map((article, index) => (
            <ScrollReveal key={article.slug} delay={index * 0.1}>
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
                  <time dateTime={article.date}>
                    {formatDate(article.date)}
                  </time>
                  <span>{article.readingTime}</span>
                  <span className="text-content-tertiary transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
