import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/suraj-iimv", label: "GitHub" },
  { href: "https://linkedin.com/in/surajkr0501", label: "LinkedIn" },
  { href: "mailto:surajkr.iimv@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-border mt-auto"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="text-sm text-content-tertiary">
            © {new Date().getFullYear()} Suraj Kumar
          </p>
          <nav aria-label="Legal" className="flex items-center gap-4 border-l border-border/50 pl-4 sm:pl-8 ml-0 sm:ml-0">
            <Link
              href="/privacy"
              className="text-xs text-content-tertiary hover:text-content-primary transition-colors duration-normal ease-out-expo"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-content-tertiary hover:text-content-primary transition-colors duration-normal ease-out-expo"
            >
              Terms
            </Link>
          </nav>
        </div>
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
              className="text-sm text-content-tertiary hover:text-content-primary transition-colors duration-normal ease-out-expo"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
