export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative grid h-8 w-8 place-items-center rounded-lg bg-[var(--ink)] text-primary">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20h18" />
          <path d="M5 20V9l7-5 7 5v11" />
          <path d="M10 20v-6h4v6" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary" />
      </div>
      <span className="font-display text-lg font-bold tracking-tight text-[var(--ink)]">
        Obra<span className="text-primary">Labs</span>
      </span>
    </div>
  );
}
