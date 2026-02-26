export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Mir Suhaib. Engineered with Next.js and
          Framer Motion.
        </p>
        <p className="uppercase tracking-[0.3em] text-slate-600">
          Shopian · Jammu &amp; Kashmir · India
        </p>
      </div>
    </footer>
  );
}

