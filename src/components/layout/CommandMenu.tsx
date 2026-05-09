"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";

interface CommandItem {
  label: string;
  href: string;
  group: string;
}

const items: CommandItem[] = [
  // Pages
  { label: "Home", href: "/", group: "Pages" },
  { label: "Projects", href: "/projects", group: "Pages" },
  { label: "Lab", href: "/lab", group: "Pages" },
  { label: "Writing", href: "/writing", group: "Pages" },
  { label: "About", href: "/about", group: "Pages" },
  { label: "Contact", href: "/contact", group: "Pages" },
  // Projects
  { label: "Hate Speech Detector", href: "/projects/hate-speech-detector", group: "Projects" },
  { label: "Mood-Based Movie Agent", href: "/projects/mood-movie-agent", group: "Projects" },
  // Writing
  { label: "Building AI Systems That Feel Human", href: "/writing/building-ai-systems-that-feel-human", group: "Writing" },
  { label: "Why Experimentation Matters", href: "/writing/why-experimentation-matters", group: "Writing" },
  { label: "Automation as Creative Practice", href: "/writing/automation-as-creative-practice", group: "Writing" },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggle = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    const handleToggle = () => toggle();
    document.addEventListener("toggle-command-menu", handleToggle);
    return () =>
      document.removeEventListener("toggle-command-menu", handleToggle);
  }, [toggle]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSelect = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Command
              className="bg-surface-elevated rounded-xl border border-border shadow-2xl overflow-hidden"
              label="Search navigation"
            >
              <Command.Input
                placeholder="Search pages, projects, articles..."
                className="w-full px-4 py-3.5 text-sm bg-transparent border-b border-border text-content-primary placeholder:text-content-tertiary outline-none"
                autoFocus
              />
              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-content-tertiary">
                  No results found.
                </Command.Empty>

                {["Pages", "Projects", "Writing"].map((group) => (
                  <Command.Group
                    key={group}
                    heading={group}
                    className="[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-content-tertiary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium"
                  >
                    {items
                      .filter((item) => item.group === group)
                      .map((item) => (
                        <Command.Item
                          key={item.href}
                          value={item.label}
                          onSelect={() => handleSelect(item.href)}
                          className="flex items-center gap-3 px-3 py-2.5 text-sm text-content-secondary rounded-lg cursor-pointer data-[selected=true]:bg-surface-secondary data-[selected=true]:text-content-primary transition-colors"
                        >
                          <span className="text-content-tertiary text-xs">→</span>
                          {item.label}
                        </Command.Item>
                      ))}
                  </Command.Group>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
