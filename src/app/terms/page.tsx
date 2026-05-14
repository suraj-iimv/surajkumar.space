import { generatePageMetadata } from "@/lib/metadata";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BackLink from "@/components/ui/BackLink";

export const metadata = generatePageMetadata({
  title: "Terms",
  description:
    "Standards and observations regarding the use of this research-driven digital environment.",
});

export default function TermsPage() {
  const lastUpdated = "May 15, 2026";

  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-40">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-10">
              <BackLink href="/" label="Back to Home" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mb-16 md:mb-24">
              <p className="text-xs uppercase tracking-[0.2em] text-content-tertiary mb-6">
                Standards
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xs text-content-tertiary font-mono">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose mb-16 md:mb-24">
              <p className="text-lg text-content-secondary leading-relaxed italic">
                This ecosystem is an evolving platform. Our philosophy is rooted in continuous experimentation, where systems, interfaces, and workflows are refined in real-time. By interacting with this site, you acknowledge that you are entering a living environment designed for discovery and technical growth.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose">
              <section className="mb-12">
                <h3>Introduction</h3>
                <p>
                  These Terms & Conditions govern your use of the website and all associated services, content, and experimental features. This platform is provided as-is, reflecting the current state of our architectural evolution.
                </p>
              </section>

              <section className="mb-12">
                <h3>Use of the Website</h3>
                <p>
                  You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the platform. We reserve the right to modify or restrict access to any part of the ecosystem at any time without notice.
                </p>
              </section>

              <section className="mb-12">
                <h3>Intellectual Property</h3>
                <p>
                  All content, design systems, design tokens, and technical implementations found on this site are the intellectual property of Suraj Kumar, unless otherwise stated. You may not reproduce, distribute, or commercially exploit any part of this ecosystem without explicit permission.
                </p>
              </section>

              <section className="mb-12 border-l-2 border-border/30 pl-6 py-2 bg-surface-secondary/30 rounded-r-lg">
                <h3>Experimentation & Lab Disclaimer</h3>
                <p>
                  A significant portion of this platform serves as a Lab for prototyping and research. You acknowledge that experimental systems, prototypes, AI-assisted workflows, and evolving infrastructure may occasionally contain incomplete functionality, temporary instability, or changing behavior. 
                </p>
                <p>
                  These "Lab" features are provided for demonstration and research purposes only, and we make no guarantees regarding their reliability or continued availability.
                </p>
              </section>

              <section className="mb-12 mt-12">
                <h3>Future Integrations</h3>
                <p>
                  As the ecosystem matures, future integrations may include monetization systems, advanced analytics services, experimental tooling, and AI-assisted infrastructure. Your continued use of the platform constitutes acceptance of these evolving capabilities and the technical standards they require.
                </p>
              </section>

              <section className="mb-12">
                <h3>External Links</h3>
                <p>
                  This website may contain links to external surfaces, third-party projects, or experimental repositories. We are not responsible for the content, privacy practices, or reliability of any external platforms linked from within our ecosystem.
                </p>
              </section>

              <section className="mb-12">
                <h3>Limitation of Liability</h3>
                <p>
                  To the fullest extent permitted by law, Suraj Kumar shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this platform, its experimental features, or any content provided herein.
                </p>
              </section>

              <section className="mb-12">
                <h3>Contact Information</h3>
                <p>
                  For inquiries regarding these terms or the operational standards of the ecosystem, please use the <a href="/contact">contact infrastructure</a>.
                </p>
              </section>

              <section className="mb-12 pt-12 border-t border-border">
                <h3>Future Changes</h3>
                <p>
                  These terms are subject to change as the platform evolves. Any modifications will be reflected on this page with an updated timestamp. Continued use of the site following such changes constitutes your acceptance of the revised terms.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
