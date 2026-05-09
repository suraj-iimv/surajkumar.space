import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";
import { getMDXComponents } from "@/components/projects/MDXComponents";
import { formatDate } from "@/lib/utils";
import Tag from "@/components/ui/Tag";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    type: "article",
    publishedTime: article.date,
    tags: article.tags,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <PageTransition>
      <article className="pt-32 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <ScrollReveal>
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 text-sm text-content-tertiary hover:text-content-primary transition-colors mb-10"
            >
              ← Back to Writing
            </Link>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal>
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-content-primary mb-4">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-content-tertiary mb-6">
                <time dateTime={article.date}>
                  {formatDate(article.date)}
                </time>
                <span>·</span>
                <span>{article.readingTime}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </header>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal>
            <div className="prose max-w-none">
              <MDXRemote
                source={article.content}
                components={getMDXComponents()}
              />
            </div>
          </ScrollReveal>
        </div>
      </article>
    </PageTransition>
  );
}
