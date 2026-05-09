import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactCTA() {
  return (
    <section className="py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-content-primary mb-4">
              Let&apos;s build something together.
            </h2>
            <p className="text-content-secondary text-base md:text-lg mb-10 leading-relaxed">
              Open to collaboration, freelance projects, and conversations about
              AI, automation, and creative technology.
            </p>
            <Button href="/contact" size="large">
              Get in Touch
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
