import Link from "next/link";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = "View all",
}: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between mb-12 md:mb-16">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-content-primary">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-content-tertiary text-base max-w-lg">
            {subtitle}
          </p>
        )}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-sm text-content-tertiary hover:text-content-primary transition-colors duration-300 flex items-center gap-1.5 shrink-0"
        >
          {viewAllLabel}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </Link>
      )}
    </div>
  );
}
