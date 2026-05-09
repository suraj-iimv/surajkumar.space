import type { Metadata } from "next";

interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

const siteConfig = {
  name: "Suraj Kumar",
  url: "https://surajkumar.dev",
  description:
    "Creative technologist exploring AI-powered digital experiences, automation systems, and interactive product experiments.",
};

export function generatePageMetadata(page: PageMeta): Metadata {
  const title = `${page.title} — ${siteConfig.name}`;
  const ogImage = page.ogImage || "/og-default.png";

  return {
    title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: page.type || "website",
      siteName: siteConfig.name,
      url: siteConfig.url,
      ...(page.publishedTime && { publishedTime: page.publishedTime }),
      ...(page.tags && { tags: page.tags }),
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
  };
}

export { siteConfig };
