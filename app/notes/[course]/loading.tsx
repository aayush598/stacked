export default function Loading() {
  return (
    <main className="flex-1 animate-in fade-in duration-150">
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="h-10 w-64 rounded bg-raised shimmer" />
        <div className="mt-4 h-5 w-full max-w-lg rounded bg-raised shimmer" />
        <div className="mt-10 h-40 rounded-xl border border-line bg-surface shimmer" />
      </section>
    </main>
  );
}
