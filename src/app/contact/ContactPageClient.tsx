"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

const socialLinks = [
  { href: "https://github.com/suraj-iimv", label: "GitHub", icon: "↗" },
  { href: "https://linkedin.com/in/surajkr0501", label: "LinkedIn", icon: "↗" },
  { href: "mailto:surajkr.iimv@gmail.com", label: "surajkr.iimv@gmail.com", icon: "✉" },
];

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-surface-elevated border border-border rounded-lg px-4 py-3 text-sm text-content-primary placeholder:text-content-tertiary focus:outline-none focus:border-border-hover focus:ring-1 focus:ring-border-hover transition-all duration-200";

  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="max-w-2xl mb-16 md:mb-20">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-content-primary mb-4">
                Let&apos;s work together
              </h1>
              <p className="text-lg text-content-secondary leading-relaxed">
                Open to collaboration, freelance projects, and conversations about
                AI, automation, and creative technology.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-16 md:gap-12">
            {/* Form */}
            <ScrollReveal className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-content-primary mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    aria-required="true"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-content-primary mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    aria-required="true"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-content-primary mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    aria-required="true"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className={inputClasses}
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-content-primary mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    aria-required="true"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  size="large"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>

                {/* Status messages */}
                {status === "sent" && (
                  <p className="text-sm text-status-live" role="status">
                    Message sent successfully. I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-status-experimental" role="alert">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal className="md:col-span-2" delay={0.15}>
              <div>
                <h2 className="text-sm text-content-tertiary mb-6 tracking-wide uppercase">
                  Connect
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="flex items-center justify-between py-3 border-b border-border text-sm text-content-secondary hover:text-content-primary transition-colors group"
                    >
                      <span>{link.label}</span>
                      <span className="text-content-tertiary group-hover:translate-x-0.5 transition-transform">
                        {link.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
