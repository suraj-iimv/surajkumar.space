import { generatePageMetadata } from "@/lib/metadata";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BackLink from "@/components/ui/BackLink";

export const metadata = generatePageMetadata({
  title: "Privacy",
  description:
    "Privacy observations and data practices for a calm, performance-aware digital environment.",
});

export default function PrivacyPage() {
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
                Commitments
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-6">
                Privacy Policy
              </h1>
              <p className="text-xs text-content-tertiary font-mono">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose mb-16 md:mb-24">
              <p className="text-lg text-content-secondary leading-relaxed italic">
                This ecosystem is built on a foundation of clarity and restraint. That philosophy extends to how data is handled. This policy outlines our commitment to transparency, ensuring that as the platform evolves, your privacy remains a primary architectural consideration.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose">
              <section className="mb-12">
                <h3>Information Collection</h3>
                <p>
                  We believe in minimal data collection. Most of this ecosystem is accessible without providing any personal information. We only collect data that is strictly necessary for providing specific services or improving the overall user experience.
                </p>
              </section>

              <section className="mb-12">
                <h3>Analytics & Usage Data</h3>
                <p>
                  To understand how visitors interact with the site and to optimize performance, we use lightweight analytics services (such as Vercel Analytics). These tools collect non-identifiable information like page views, device types, and approximate geographic location. This data is used exclusively to refine the ecosystem's architecture and content strategy.
                </p>
              </section>

              <section className="mb-12">
                <h3>Cookies</h3>
                <p>
                  We use cookies to ensure the site functions correctly and to remember your preferences. These are small text files stored on your device that help us provide a seamless and stable experience. You can manage or disable cookies through your browser settings, though some features of the site may rely on them.
                </p>
              </section>

              <section className="mb-12">
                <h3>Advertising & Monetization</h3>
                <p>
                  This platform includes a dedicated Lab for researching monetization systems. Future integrations—including Google AdSense—may use cookies or similar technologies to personalize content, measure advertising performance, and ensure ecosystem sustainability. 
                </p>
                <p>
                  These third-party providers may collect information about your visits to this and other websites to provide relevant advertisements. We prioritize providers that respect user choice and maintain high standards for data privacy.
                </p>
              </section>

              <section className="mb-12">
                <h3>Third-Party Services</h3>
                <p>
                  We leverage trusted third-party providers for hosting (Vercel), analytics, and experimental features. Each of these services maintains its own privacy policy and data handling standards. We only partner with providers that align with our commitment to security and transparency.
                </p>
              </section>

              <section className="mb-12">
                <h3>Data Protection</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse. Our systems are designed with security-first principles to ensure the integrity of the ecosystem.
                </p>
              </section>

              <section className="mb-12">
                <h3>Contact Information</h3>
                <p>
                  If you have any questions about this policy or our data practices, please reach out via the <a href="/contact">contact page</a>.
                </p>
              </section>

              <section className="mb-12 pt-12 border-t border-border">
                <h3>Future Updates</h3>
                <p>
                  As the ecosystem evolves and new experiments are introduced, this policy may be updated. We encourage you to review this page periodically to stay informed about our commitment to your privacy.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
