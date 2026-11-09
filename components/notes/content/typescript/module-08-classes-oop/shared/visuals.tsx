"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CodeTabs({ items }: { items: { label: string; code: string; note?: string }[] }) {
  const [i, setI] = useState(0);
  const c = items[i] ?? items[0];
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex flex-wrap gap-2">{items.map((it, idx) => (
        <button key={it.label} type="button" onClick={() => setI(idx)}
          className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition", idx === i ? "border-lime/30 bg-lime/10 text-lime" : "border-line bg-canvas text-muted hover:text-mist")}>
          {it.label}
        </button>
      ))}</div>
      <pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] leading-6 text-mist"><code>{c.code}</code></pre>
      {c.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{c.note}</p> : null}
    </div>
  );
}

export function ComparePanel({ left, right }: { left: { title: string; code: string; tone?: string }; right: { title: string; code: string; tone?: string } }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-lime/20 bg-lime/[0.03] p-4">
        <p className="text-[15px] font-semibold text-mist">{left.title}</p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] text-mist"><code>{left.code}</code></pre>
      </div>
      <div className="rounded-xl border border-sky/20 bg-sky/[0.03] p-4">
        <p className="text-[15px] font-semibold text-mist">{right.title}</p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] text-mist"><code>{right.code}</code></pre>
      </div>
    </div>
  );
}

export function FlowSteps({ steps }: { steps: { label: string; detail?: string }[] }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="rounded-md border border-line bg-surface px-2.5 py-1 text-[13px] animate-[fadeIn_180ms_ease-out_both]" style={{ animationDelay: (i * 40) + "ms" }}>
            <span className="font-mono text-mist">{s.label}</span>
            {s.detail ? <span className="ml-1.5 text-faint">{s.detail}</span> : null}
          </span>
          {i < steps.length - 1 ? <span className="text-faint">→</span> : null}
        </span>
      ))}
    </div>
  );
}

export function PitfallCards({ items }: { items: { bad: string; good: string; why: string }[] }) {
  return (
    <div className="mt-5 space-y-3">
      {items.map((it, i) => (
        <div key={i} className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-danger/20 bg-danger/[0.03] p-3"><p className="font-mono text-[12px] text-danger">Avoid</p><pre className="mt-1 overflow-x-auto font-mono text-[13px] text-mist"><code>{it.bad}</code></pre></div>
          <div className="rounded-lg border border-success/20 bg-success/[0.03] p-3"><p className="font-mono text-[12px] text-success">Prefer</p><pre className="mt-1 overflow-x-auto font-mono text-[13px] text-mist"><code>{it.good}</code></pre><p className="mt-1 text-[13px] text-muted">{it.why}</p></div>
        </div>
      ))}
    </div>
  );
}
