"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function Tabs({ items }: { items: { label: string; code: string; note?: string }[] }) {
  const [i, setI] = useState(0); const c = items[i] ?? items[0];
  return (<div className="mt-5 rounded-xl border border-line bg-surface p-4"><div className="flex flex-wrap gap-2">{items.map((it, idx) => (<button key={it.label} type="button" onClick={() => setI(idx)} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition", idx === i ? "border-sky/30 bg-sky/10 text-sky" : "border-line bg-canvas text-muted hover:text-mist")}>{it.label}</button>))}</div><pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] leading-6 text-mist"><code>{c.code}</code></pre>{c.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{c.note}</p> : null}</div>);
}
export function Flow({ steps }: { steps: string[] }) {
  return (<div className="mt-5 flex flex-wrap items-center gap-2 text-[13px]">{steps.map((s, i) => (<span key={i} className="flex items-center gap-2"><span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-mist">{s}</span>{i < steps.length - 1 ? <span className="text-faint">→</span> : null}</span>))}</div>);
}
