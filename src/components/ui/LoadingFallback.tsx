interface LoadingFallbackProps {
  className?: string;
  lines?: number;
}

export default function LoadingFallback({
  className = "",
  lines = 3,
}: LoadingFallbackProps) {
  return (
    <div
      className={`animate-pulse space-y-4 ${className}`}
      role="status"
      aria-label="Loading content"
    >
      <div className="h-6 bg-surface-tertiary rounded-md w-3/4" />
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-surface-tertiary rounded-md"
          style={{ width: `${85 - i * 15}%` }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
