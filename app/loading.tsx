export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-2 border-primary border-t-transparent shadow-glow-soft" />
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Calibrating systems…
        </p>
      </div>
    </div>
  );
}

