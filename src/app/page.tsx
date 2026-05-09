import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Philosophy from "@/components/home/Philosophy";
import LabPreview from "@/components/home/LabPreview";
import WritingPreview from "@/components/home/WritingPreview";
import ContactCTA from "@/components/home/ContactCTA";
import { getFeaturedProjects, getAllArticles } from "@/lib/mdx";

export default function Home() {
  const projects = getFeaturedProjects();
  const articles = getAllArticles();

  return (
    <>
      <Hero />
      <FeaturedProjects projects={projects} />
      <Philosophy />
      <LabPreview />
      <WritingPreview articles={articles} />
      <ContactCTA />
    </>
  );
}
