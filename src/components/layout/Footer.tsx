import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/surajkumar", label: "GitHub" },
  { href: "https://linkedin.com/in/surajkumar", label: "LinkedIn" },
  { href: "mailto:hello@surajkumar.dev", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-border mt-auto"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-content-tertiary">
          © {new Date().getFullYear()} Suraj Kumar
        </p>
        <nav aria-label="Social links" className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-sm text-content-tertiary hover:text-content-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
