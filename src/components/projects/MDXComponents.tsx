import Link from "next/link";
import RelatedExperiment from "@/components/writing/RelatedExperiment";
import RelatedReflection from "@/components/lab/RelatedReflection";
import EcosystemContext from "@/components/writing/EcosystemContext";
import * as CaseStudy from "@/components/projects/CaseStudyComponents";

/* Custom MDX components for rendering project and article content */
export function getMDXComponents() {
  return {
    RelatedExperiment,
    RelatedReflection,
    EcosystemContext,
    ...CaseStudy,
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className="text-2xl font-semibold tracking-tight text-content-primary mt-12 mb-4"
        {...props}
      />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className="text-xl font-medium tracking-tight text-content-primary mt-8 mb-3"
        {...props}
      />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className="text-content-secondary leading-relaxed mb-5"
        {...props}
      />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className="text-content-secondary leading-relaxed mb-5 pl-5 space-y-2 list-disc"
        {...props}
      />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className="text-content-secondary leading-relaxed mb-5 pl-5 space-y-2 list-decimal"
        {...props}
      />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
      <li className="text-content-secondary" {...props} />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
      <strong className="font-semibold text-content-primary" {...props} />
    ),
    a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#");
      const className = "text-content-primary underline underline-offset-3 decoration-border hover:decoration-content-primary transition-colors";

      if (isInternal) {
        return <Link href={href || "#"} className={className} {...(props as any)} />;
      }

      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    },
    code: (props: React.HTMLAttributes<HTMLElement>) => (
      <code
        className="font-mono text-[0.9em] px-1.5 py-0.5 bg-surface-secondary rounded"
        {...props}
      />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className="bg-surface-secondary border border-border rounded-lg p-5 overflow-x-auto mb-6 text-sm"
        {...props}
      />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className="border-l-2 border-border pl-4 my-6 text-content-tertiary italic"
        {...props}
      />
    ),
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={typeof props.src === "string" ? props.src : ""}
        alt={props.alt || ""}
        className="rounded-lg my-8 w-full"
        loading="lazy"
      />
    ),
    hr: () => <hr className="border-border my-10" />,
  };
}
