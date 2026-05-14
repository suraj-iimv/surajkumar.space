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
import BackLink from "@/components/ui/BackLink";
import RelatedArticles from "@/components/writing/RelatedArticles";
import EcosystemContext from "@/components/writing/EcosystemContext";

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
            <BackLink href="/writing" label="Back to Reflections" />
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

          {/* Ecosystem Context */}
          {article.ecosystemLinks && (
            <EcosystemContext links={article.ecosystemLinks} />
          )}

          {/* Footer / Related Articles */}
          <RelatedArticles currentSlug={slug} articles={getAllArticles()} />
        </div>
      </article>
    </PageTransition>
  );
}
