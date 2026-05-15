import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// ============================================
// Types
// ============================================

export interface ProjectFrontmatter {
  title: string;
  description: string;
  tags: string[];
  status: "live" | "experimental" | "archived" | "in-progress";
  type: "embedded" | "external" | "case-study";
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  video?: string;
  year: string;
  ecosystemLinks?: { title: string; href: string; label: string }[];
  updatedDate?: string;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export interface ArticleFrontmatter {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  coverImage?: string;
  published: boolean;
  relatedExperiments?: string[];
  isFoundational?: boolean;
  ecosystemLinks?: { title: string; href: string; label: string }[];
  updatedDate?: string;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

// ============================================
// Paths
// ============================================

const projectsDirectory = path.join(process.cwd(), "src/content/projects");
const writingDirectory = path.join(process.cwd(), "src/content/writing");

// ============================================
// Projects
// ============================================

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];

  const slugs = fs.readdirSync(projectsDirectory).filter((name) => {
    const fullPath = path.join(projectsDirectory, name);
    return fs.statSync(fullPath).isDirectory();
  });

  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== null)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return parseInt(b.year) - parseInt(a.year);
    });

  return projects;
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const mdxPath = path.join(projectsDirectory, slug, "index.mdx");
    if (!fs.existsSync(mdxPath)) return null;

    const fileContents = fs.readFileSync(mdxPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      ...(data as ProjectFrontmatter),
      slug,
      content,
      readingTime: stats.text,
    };
  } catch {
    return null;
  }
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

// ============================================
// Articles
// ============================================

export function getAllArticles(): Article[] {
  if (!fs.existsSync(writingDirectory)) return [];

  const files = fs
    .readdirSync(writingDirectory)
    .filter((file) => file.endsWith(".mdx"));

  const articles = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return getArticleBySlug(slug);
    })
    .filter((a): a is Article => a !== null && a.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const mdxPath = path.join(writingDirectory, `${slug}.mdx`);
    if (!fs.existsSync(mdxPath)) return null;

    const fileContents = fs.readFileSync(mdxPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      ...(data as ArticleFrontmatter),
      slug,
      content,
      readingTime: stats.text,
    };
  } catch {
    return null;
  }
}
