interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-medium text-content-tertiary bg-surface-secondary rounded-md ${className}`}
    >
      {children}
    </span>
  );
}
