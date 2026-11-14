import Link from "next/link";
import { labTracks } from "@/lib/lab/tracks";

export const metadata = {
  title: "Practice Lab — Stacked",
  description: "Interactive coding labs: edit code, see live output, and master topics step by step.",
};

export default function LabIndexPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-lime">Practice</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-mist">Coding Labs</h1>
        <p className="mt-2 max-w-2xl text-[15px] leading-7 text-muted">Extensible practice space (more tracks coming). Each lab has side-by-side editable code and live visual output so you can learn by doing.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labTracks.map((t) => (
            <Link key={t.id} href={`/lab/${t.id}`} className="group flex flex-col rounded-xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-lime/30 hover:shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-mist group-hover:text-lime">{t.title}</h2>
                {t.priority ? <span className="shrink-0 rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-faint">P{t.priority}</span> : null}
              </div>
              <p className="mt-1 flex-1 text-[14px] leading-6 text-muted">{t.description}</p>
              <p className="mt-3 text-[13px] text-faint">{t.modules.length} modules · {t.examples.length} components</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
