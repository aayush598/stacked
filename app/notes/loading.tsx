export default function Loading() {
  return (
    <main className="flex-1 animate-in fade-in duration-150">
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="h-8 w-40 rounded bg-raised shimmer" />
        <div className="mt-3 h-12 w-full max-w-xl rounded bg-raised shimmer" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-44 rounded-xl border border-line bg-surface p-4">
              <div className="h-5 w-2/3 rounded bg-raised shimmer" />
              <div className="mt-3 h-4 w-full rounded bg-raised shimmer" />
              <div className="mt-2 h-4 w-5/6 rounded bg-raised shimmer" />
              <div className="mt-6 h-2 w-full rounded bg-raised shimmer" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
