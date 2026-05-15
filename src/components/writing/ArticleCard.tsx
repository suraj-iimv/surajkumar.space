"use client";

import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Tag from "@/components/ui/Tag";
import type { Article } from "@/lib/mdx";
import { motion } from "framer-motion";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={`/writing/${article.slug}`}
        className="group relative flex flex-col h-full p-6 md:p-8 rounded-2xl border border-border bg-surface-primary hover:bg-surface-secondary hover:border-border-hover transition-all duration-500 overflow-hidden"
      >
        {/* Subtle Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Meta Info */}
          <div className="flex items-center gap-2 text-[10px] text-content-tertiary mb-5 uppercase tracking-[0.15em] font-medium">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{article.readingTime}</span>
            {article.isFoundational && (
              <>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-accent/80">Foundational</span>
              </>
            )}
          </div>
          
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-content-primary group-hover:text-accent transition-colors duration-300 mb-3 tracking-tight leading-tight">
            {article.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-sm md:text-base text-content-secondary line-clamp-3 leading-relaxed mb-8 flex-grow">
            {article.excerpt}
          </p>
          
          {/* Footer: Tags & CTA */}
          <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
            <div className="flex flex-wrap gap-1.5">
              {article.tags.slice(0, 2).map((tag) => (
                <Tag key={tag} className="text-[9px] py-0.5 px-2 bg-surface-tertiary/50 border-none opacity-80">
                  {tag}
                </Tag>
              ))}
              {article.tags.length > 2 && (
                <span className="text-[9px] text-content-tertiary self-center">+{article.tags.length - 2}</span>
              )}
            </div>
            
            <div className="flex items-center gap-1.5 text-accent opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <span className="text-[11px] font-bold uppercase tracking-wider">Read</span>
              <span className="text-lg">→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
