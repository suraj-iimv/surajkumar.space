"use client";

import { formatDate } from "@/lib/utils";

interface ReadingMetadataProps {
  readingTime: string;
  updatedDate?: string;
  className?: string;
}

export default function ReadingMetadata({
  readingTime,
  updatedDate,
  className = "",
}: ReadingMetadataProps) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-content-tertiary ${className}`}>
      <div className="flex items-center gap-1.5">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>{readingTime}</span>
      </div>

      {updatedDate && (
        <>
          <span className="opacity-30">•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-wider opacity-60">
              Last Editorial Refinement:
            </span>
            <time dateTime={updatedDate} className="font-medium text-content-secondary">
              {formatDate(updatedDate)}
            </time>
          </div>
        </>
      )}
    </div>
  );
}
