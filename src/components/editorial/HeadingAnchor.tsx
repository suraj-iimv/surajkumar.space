"use client";

import React from "react";
import Link from "next/link";

interface HeadingAnchorProps {
  id?: string;
  children: React.ReactNode;
}

export default function HeadingAnchor({ id, children }: HeadingAnchorProps) {
  if (!id) return <>{children}</>;

  return (
    <div className="group relative flex items-center">
      {children}
      <Link
        href={`#${id}`}
        className="absolute -left-6 opacity-0 group-hover:opacity-30 transition-opacity duration-200 text-content-tertiary hover:text-content-primary p-1"
        aria-label={`Link to ${id}`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </Link>
    </div>
  );
}
