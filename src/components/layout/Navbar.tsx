"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/lab", label: "Lab" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      // Use a microtask to avoid synchronous setState in effect
      queueMicrotask(() => setMobileOpen(false));
    }
  }, [pathname]);

  // CMD+K handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.dispatchEvent(new CustomEvent("toggle-command-menu"));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-surface-primary/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-content-primary font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity duration-300"
          >
            SURAJ KUMAR
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-sm transition-all duration-300 ${pathname === link.href
                  ? "text-content-primary font-medium"
                  : "text-content-tertiary hover:text-content-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* CMD+K Trigger */}
            <button
              onClick={() =>
                document.dispatchEvent(new CustomEvent("toggle-command-menu"))
              }
              className="hidden lg:flex items-center gap-1.5 text-xs text-content-tertiary bg-surface-secondary hover:bg-surface-tertiary px-2.5 py-1.5 rounded-md border border-border transition-all duration-200"
              aria-label="Open command menu"
            >
              <kbd className="font-sans">⌘K</kbd>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span
                animate={
                  mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
                className="block h-[1.5px] bg-content-primary origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] bg-content-primary"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -4.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
                className="block h-[1.5px] bg-content-primary origin-center"
              />
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        links={navLinks}
        pathname={pathname}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
