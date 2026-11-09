"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function CodeTabs({ items }: { items: { label: string; code: string; note?: string }[] }) {
  const [i, setI] = useState(0); const c = items[i] ?? items[0];
  return (<div className="mt-5 rounded-xl border border-line bg-surface p-4"><div className="flex flex-wrap gap-2">{items.map((it, idx) => (<button key={it.label} type="button" onClick={() => setI(idx)} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition", idx === i ? "border-lime/30 bg-lime/10 text-lime" : "border-line bg-canvas text-muted hover:text-mist")}>{it.label}</button>))}</div><pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] leading-6 text-mist"><code>{c.code}</code></pre>{c.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{c.note}</p> : null}</div>);
}
export function Compare({ a, b }: { a: { t: string; c: string }; b: { t: string; c: string } }) {
  return (<div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-lime/20 bg-lime/[0.03] p-4"><p className="text-[15px] font-semibold text-mist">{a.t}</p><pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] text-mist"><code>{a.c}</code></pre></div><div className="rounded-xl border border-sky/20 bg-sky/[0.03] p-4"><p className="text-[15px] font-semibold text-mist">{b.t}</p><pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] text-mist"><code>{b.c}</code></pre></div></div>);
}
