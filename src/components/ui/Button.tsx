"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "default" | "small" | "large";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-content-primary/50 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-content-primary text-surface-primary hover:bg-content-primary/85 active:scale-[0.98]",
    ghost:
      "bg-transparent text-content-primary border border-border hover:border-border-hover hover:bg-surface-secondary active:scale-[0.98]",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-2.5 text-sm",
    large: "px-8 py-3 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
