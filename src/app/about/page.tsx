import { generatePageMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "Suraj Kumar — Creative technologist exploring AI, automation, and interaction design.",
});

const focusAreas = [
  { title: "AI Systems", description: "Building intelligent applications that understand context and nuance" },
  { title: "Automation", description: "Creating systems that work independently, elegantly, and reliably" },
  { title: "Interaction Design", description: "Designing interfaces that feel alive and purposeful" },
  { title: "Systems Thinking", description: "Understanding complexity through modular, composable architectures" },
  { title: "Experimentation", description: "Rapid prototyping and learning through building" },
  { title: "Digital Craft", description: "Pursuing quality in every pixel, animation, and interaction" },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <ScrollReveal>
            <div className="max-w-2xl mb-20">
              <p className="text-sm text-content-tertiary mb-4 tracking-wide">
                About
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-2">
                Suraj Kumar
              </h1>
              <p className="text-xl md:text-2xl text-content-secondary font-medium">
                Creative Technologist
              </p>
            </div>
          </ScrollReveal>

          {/* Story */}
          <ScrollReveal>
            <div className="max-w-2xl space-y-6 text-content-secondary text-base md:text-lg leading-relaxed mb-20">
              <p>
                I build things at the intersection of artificial intelligence,
                design, and systems thinking. My work focuses on creating digital
                experiences that feel thoughtful, alive, and quietly intelligent.
              </p>
              <p>
                I believe the best technology disappears into the experience. It
                doesn&apos;t announce itself — it simply makes things work better.
                This philosophy drives every project I take on, from AI-powered
                products to automation systems to experimental prototypes.
              </p>
              <p>
                My approach is rooted in experimentation. I maintain a personal
                lab of prototypes and unfinished ideas — not because they need
                to ship, but because building is the fastest way to understand.
                Every experiment, regardless of outcome, reveals something about
                the technology, the users, or the problem space.
              </p>
              <p>
                I&apos;m particularly drawn to problems that sit at the edge of
                what&apos;s possible — where AI meets human experience, where
                automation becomes creative, where systems become elegant. These
                are the spaces where interesting work happens.
              </p>
            </div>
          </ScrollReveal>

          {/* Focus Areas */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-sm text-content-tertiary mb-8 tracking-wide uppercase">
                Focus Areas
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {focusAreas.map((area) => (
                  <div key={area.title}>
                    <h3 className="text-base font-medium text-content-primary mb-1">
                      {area.title}
                    </h3>
                    <p className="text-sm text-content-tertiary leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="pt-10 border-t border-border">
              <h2 className="text-2xl font-semibold tracking-tight text-content-primary mb-3">
                Let&apos;s connect.
              </h2>
              <p className="text-content-secondary mb-6 max-w-lg">
                I&apos;m always interested in thoughtful conversations about
                technology, design, and building things that matter.
              </p>
              <Button href="/contact">Get in Touch</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
