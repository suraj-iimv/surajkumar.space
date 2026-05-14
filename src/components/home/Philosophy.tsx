import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Philosophy() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm text-content-tertiary mb-6 tracking-wide uppercase">
              Philosophy
            </p>
            <blockquote className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium leading-[1.3] tracking-tight text-content-primary">
              I build at the intersection of AI, design, and systems
              thinking — creating digital experiences that feel alive,
              purposeful, and quietly intelligent.
            </blockquote>
            <p className="mt-8 text-content-secondary text-base md:text-lg leading-relaxed max-w-xl">
              Every project is an experiment. Every system is a question.
              The goal isn&apos;t perfection — it&apos;s understanding.
            </p>
            <div className="mt-8">
              <a
                href="/about"
                className="text-xs uppercase tracking-widest text-content-tertiary hover:text-content-primary transition-colors duration-300 flex items-center gap-2 group"
              >
                Ecosystem Evolution
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
