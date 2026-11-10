export default function Loading() {
  return (
    <main className="flex-1 animate-in fade-in duration-150">
      <section className="mx-auto w-full max-w-[90rem] px-3 pb-10 pt-6 sm:px-4 sm:pt-8 lg:px-6">
        <div className="h-4 w-28 rounded bg-raised shimmer" />
        <div className="mt-3 h-9 w-72 rounded bg-raised shimmer" />
        <div className="mt-2 h-5 w-full max-w-2xl rounded bg-raised shimmer" />
        <div className="mt-6 grid gap-3 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="h-[70vh] rounded-xl border border-line bg-surface shimmer" />
          <div className="h-[70vh] rounded-xl border border-line bg-surface p-5">
            <div className="h-5 w-40 rounded bg-raised shimmer" />
            <div className="mt-4 h-10 w-3/4 rounded bg-raised shimmer" />
            <div className="mt-6 space-y-3">
              <div className="h-24 rounded-xl bg-raised shimmer" />
              <div className="h-40 rounded-xl bg-raised shimmer" />
              <div className="h-56 rounded-xl bg-raised shimmer" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
