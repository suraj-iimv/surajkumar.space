interface StatusBadgeProps {
  status: "live" | "experimental" | "in-progress" | "archived" | "active" | "concept";
}

const statusConfig: Record<string, { color: string; label: string }> = {
  live: { color: "bg-status-live", label: "Live" },
  active: { color: "bg-status-live", label: "Active" },
  experimental: { color: "bg-status-experimental", label: "Experimental" },
  "in-progress": { color: "bg-status-progress", label: "In Progress" },
  concept: { color: "bg-status-progress", label: "Concept" },
  archived: { color: "bg-status-archived", label: "Archived" },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.archived;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-content-tertiary">
      <span
        className={`w-1.5 h-1.5 rounded-full ${config.color}`}
        aria-hidden="true"
      />
      {config.label}
    </span>
  );
}
