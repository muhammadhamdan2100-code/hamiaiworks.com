/** Shown automatically by Next.js during route-level data/content loading. */
export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-2 border-line" />
          <div className="absolute inset-0 rounded-full border-2 border-t-accent-violet border-r-accent-cyan animate-spin" />
        </div>
        <span className="font-mono text-xs text-ink-faint">Loading…</span>
      </div>
    </div>
  );
}
