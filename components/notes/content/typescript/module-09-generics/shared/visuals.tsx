"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHero({ title, subtitle, chips }: { title: string; subtitle: string; chips?: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-lime/20 bg-gradient-to-br from-lime/[0.10] via-surface to-sky/[0.06] p-5 sm:p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-lime/10 blur-2xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-8 left-10 size-32 rounded-full bg-sky/10 blur-2xl animate-pulse [animation-delay:700ms]" />
      <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-lime">TypeScript Deep Dive</p>
      <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-mist sm:text-2xl">{title}</h3>
      <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted">{subtitle}</p>
      {chips?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c, i) => (
            <span key={c} style={{ animationDelay: `${i * 50}ms` }} className="rounded-full border border-line bg-surface/80 px-2.5 py-1 text-[13px] text-mist backdrop-blur transition hover:-translate-y-0.5 hover:border-lime/30 hover:bg-lime/[0.06]">
              {c}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function AnimatedFlow({ steps }: { steps: { label: string; note?: string }[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => { const t = setInterval(() => setActive((a) => (a + 1) % Math.max(1, steps.length)), 1800); return () => clearInterval(t); }, [steps.length]);
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Concept flow</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <button key={s.label} type="button" onClick={() => setActive(i)} className="flex items-center gap-2">
            <span className={cn("rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-all duration-300", i === active ? "scale-[1.03] border-lime/35 bg-lime/10 text-lime shadow-sm" : i < active ? "border-sky/25 bg-sky/[0.05] text-mist" : "border-line bg-canvas text-muted hover:text-mist")}>{s.label}</span>
            {i < steps.length - 1 ? <span className={cn("text-faint transition", i < active ? "text-lime/60" : "")}>→</span> : null}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[15px] leading-7 text-muted transition-all">{steps[active]?.note ?? steps[active]?.label}</p>
    </div>
  );
}

export function Tabs({ items, initial = 0 }: { items: { label: string; code?: string; content?: ReactNode; note?: string }[]; initial?: number }) {
  const [i, setI] = useState(initial);
  const it = items[i] ?? items[0];
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex flex-wrap gap-2">
        {items.map((x, idx) => (
          <button key={x.label} type="button" onClick={() => setI(idx)} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition", idx === i ? "border-lime/30 bg-lime/10 text-lime" : "border-line bg-canvas text-muted hover:text-mist")}>{x.label}</button>
        ))}
      </div>
      <div className="mt-3">
        {it?.code ? <pre className="overflow-x-auto rounded-lg border border-line bg-canvas/80 p-3 font-mono text-[13px] leading-6 text-mist"><code>{it.code}</code></pre> : it?.content}
      </div>
      {it?.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{it.note}</p> : null}
    </div>
  );
}

export function ComparePanels({ left, right }: { left: { title: string; code: string; note?: string }; right: { title: string; code: string; note?: string } }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {[{ ...left, tone: "bad" as const }, { ...right, tone: "good" as const }].map((p) => (
        <div key={p.title} className={cn("rounded-xl border p-4", p.tone === "good" ? "border-lime/20 bg-lime/[0.03]" : "border-rose-400/20 bg-rose-400/[0.03]") }>
          <p className={cn("text-[14px] font-semibold", p.tone === "good" ? "text-lime" : "text-rose-300")}>{p.title}</p>
          <pre className="mt-2 overflow-x-auto rounded-lg border border-line bg-canvas/80 p-3 font-mono text-[13px] leading-6 text-mist"><code>{p.code}</code></pre>
          {p.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{p.note}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function RuleGrid({ rules }: { rules: { title: string; body: string }[] }) {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {rules.map((r, i) => (
        <div key={r.title} className="rounded-xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-lime/20" style={{ animationDelay: `${i * 40}ms` }}>
          <p className="text-[15px] font-semibold text-mist">{r.title}</p>
          <p className="mt-1 text-[15px] leading-7 text-muted">{r.body}</p>
        </div>
      ))}
    </div>
  );
}

export function SyntaxMatrix({ rows }: { rows: { label: string; syntax: string; note: string }[] }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-line">
      <div className="grid grid-cols-[1fr_1.2fr_1.4fr] bg-surface/80 text-[13px] font-semibold text-faint">
        <div className="px-3 py-2">Form</div><div className="px-3 py-2">Syntax</div><div className="px-3 py-2">Use / note</div>
      </div>
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-[1fr_1.2fr_1.4fr] border-t border-line text-[14px]">
          <div className="px-3 py-2 text-mist">{r.label}</div>
          <div className="px-3 py-2 font-mono text-[13px] text-lime/90">{r.syntax}</div>
          <div className="px-3 py-2 text-muted">{r.note}</div>
        </div>
      ))}
    </div>
  );
}

export function CodeCards({ items }: { items: { title: string; code: string; note?: string }[] }) {
  return (
    <div className="mt-5 grid gap-3 md:grid-cols-2">
      {items.map((it) => (
        <div key={it.title} className="rounded-xl border border-line bg-surface p-4">
          <p className="text-[14px] font-semibold text-mist">{it.title}</p>
          <pre className="mt-2 overflow-x-auto rounded-lg border border-line bg-canvas/80 p-3 font-mono text-[13px] leading-6 text-mist"><code>{it.code}</code></pre>
          {it.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{it.note}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  const [on, setOn] = useState<boolean[]>(() => items.map(() => false));
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Interactive checklist</p>
      <div className="mt-3 space-y-2">
        {items.map((it, i) => (
          <button key={it} type="button" onClick={() => setOn((prev) => prev.map((v, idx) => (idx === i ? !v : v)))} className="flex w-full items-start gap-3 rounded-lg border border-line bg-canvas/60 px-3 py-2 text-left transition hover:border-lime/20">
            <span className={cn("mt-0.5 inline-flex size-5 items-center justify-center rounded border text-[12px]", on[i] ? "border-lime/40 bg-lime/10 text-lime" : "border-line text-faint")}>{on[i] ? "✓" : ""}</span>
            <span className={cn("text-[15px] leading-7", on[i] ? "text-mist" : "text-muted")}>{it}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
