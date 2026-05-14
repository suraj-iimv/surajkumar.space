"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BackLinkProps {
  href: string;
  label: string;
}

export default function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm text-content-tertiary hover:text-content-primary transition-colors duration-300"
    >
      <span className="transition-transform duration-300 group-hover:-translate-x-1">
        ←
      </span>
      {label}
    </Link>
  );
}
