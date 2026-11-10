"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Eye, GitCompareArrows, Lightbulb, Play, Sparkles, Terminal, XCircle } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

export function SectionHero({ title, subtitle, chips }: { title: string; subtitle: string; chips?: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-violet/20 bg-gradient-to-br from-violet/[0.10] via-surface to-sky/[0.06] p-5 sm:p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-violet/10 blur-2xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-8 left-10 size-32 rounded-full bg-sky/10 blur-2xl animate-pulse [animation-delay:700ms]" />
      <div className="flex flex-wrap items-center gap-2 text-violet"><Sparkles className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.18em]">Bootstrap Deep Dive</p></div>
      <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-mist sm:text-2xl">{title}</h3>
      <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted">{subtitle}</p>
      {chips?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c, i) => (
            <span key={c} style={{ animationDelay: `${i * 40}ms` }} className="rounded-full border border-line bg-surface/80 px-2.5 py-1 text-[13px] text-mist backdrop-blur">{c}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function KeyPoints({ items }: { items: { label: string; detail?: string; tone?: "lime"|"sky"|"violet"|"coral" }[] }) {
  const tones = { lime: "border-lime/25 bg-lime/10 text-lime", sky: "border-sky/25 bg-sky/10 text-sky", violet: "border-violet/25 bg-violet/10 text-violet", coral: "border-coral/25 bg-coral/10 text-coral" } as const;
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((it) => (
        <div key={it.label} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-3">
          <span className={cn("mt-0.5 rounded-md border px-2 py-0.5 font-mono text-[12px] font-semibold uppercase", tones[it.tone ?? "violet"])}>{it.label}</span>
          <p className="text-[14px] leading-6 text-muted">{it.detail ?? ""}</p>
        </div>
      ))}
    </div>
  );
}

export function AnimatedFlow({ steps }: { steps: { label: string; note?: string }[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => { const t = setInterval(() => setActive((a) => (a + 1) % Math.max(1, steps.length)), 1700); return () => clearInterval(t); }, [steps.length]);
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex items-center gap-2 text-faint"><Play className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.16em]">Visual flow</p></div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <button key={s.label} type="button" onClick={() => setActive(i)} className="flex items-center gap-2">
            <span className={cn("rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-all duration-300", i === active ? "scale-[1.03] border-violet/35 bg-violet/10 text-violet shadow-sm" : i < active ? "border-sky/25 bg-sky/[0.05] text-mist" : "border-line bg-canvas text-muted hover:text-mist")}>{s.label}</span>
            {i < steps.length - 1 ? <ArrowRight className={cn("size-4 text-faint transition", i < active ? "text-violet/70" : "")} /> : null}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[15px] leading-7 text-muted">{steps[active]?.note ?? steps[active]?.label}</p>
    </div>
  );
}

export function OutputBlock({ title = "Visual output", value, preview }: { title?: string; value?: string; preview?: ReactNode }) {
  return (
    <div className="rounded-xl border border-sky/20 bg-sky/[0.04]">
      <div className="flex items-center gap-2 border-b border-sky/15 px-3.5 py-2 text-[12px] font-medium text-sky"><Terminal className="size-3.5" />{title}</div>
      <div className="space-y-3 p-3">
        {preview ? <div className="rounded-lg border border-line bg-canvas/80 p-3"><p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-faint">Rendered preview</p>{preview}</div> : null}
        {value ? <pre className="overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] leading-6 text-mist"><code>{value}</code></pre> : null}
      </div>
    </div>
  );
}

export function Tabs({ items, initial = 0 }: { items: { label: string; code?: string; filename?: string; output?: string; preview?: ReactNode; content?: ReactNode; note?: string }[]; initial?: number }) {
  const [i, setI] = useState(initial);
  const it = items[i] ?? items[0];
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex flex-wrap gap-2">
        {items.map((x, idx) => (
          <button key={x.label} type="button" onClick={() => setI(idx)} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition", idx === i ? "border-violet/30 bg-violet/10 text-violet" : "border-line bg-canvas text-muted hover:text-mist")}>{x.label}</button>
        ))}
      </div>
      <div className="mt-3 space-y-3">
        {it?.code ? <CodeBlock code={it.code} filename={it.filename ?? "example.html"} label="Code" /> : null}
        {(it?.output || it?.preview) ? <OutputBlock value={it.output} preview={it.preview} /> : null}
        {it?.content}
      </div>
      {it?.note ? <div className="mt-3 flex items-start gap-2 text-[15px] leading-7 text-muted"><Lightbulb className="mt-1 size-4 shrink-0 text-violet" /><p>{it.note}</p></div> : null}
    </div>
  );
}

function diffLineMap(oldCode: string, newCode: string) {
  const a = oldCode.replace(/\n$/, "").split("\n");
  const b = newCode.replace(/\n$/, "").split("\n");
  const left: Record<number, "remove" | "neutral"> = {};
  const right: Record<number, "add" | "neutral"> = {};
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (a[i] !== b[i]) {
      if (a[i] !== undefined) left[i + 1] = "remove";
      if (b[i] !== undefined) right[i + 1] = "add";
    }
  }
  return { left, right };
}

export function ComparePanels({
  left, right,
}: { left: { title: string; code: string; output?: string; preview?: ReactNode; note?: string }; right: { title: string; code: string; output?: string; preview?: ReactNode; note?: string } }) {
  const diffs = useMemo(() => diffLineMap(left.code, right.code), [left.code, right.code]);
  return (
    <div className="mt-5">
      <div className="mb-3 flex items-center gap-2 text-faint"><GitCompareArrows className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.16em]">Difference highlighted</p></div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-rose-400/20 bg-rose-400/[0.03] p-3">
          <div className="mb-2 flex items-center gap-2 text-rose-300"><XCircle className="size-4" /><p className="text-[14px] font-semibold">{left.title}</p></div>
          <CodeBlock code={left.code} filename="problem.html" label="Problem" diffLines={diffs.left} />
          {(left.output || left.preview) ? <div className="mt-3"><OutputBlock value={left.output} preview={left.preview} /></div> : null}
          {left.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{left.note}</p> : null}
        </div>
        <div className="rounded-xl border border-violet/20 bg-violet/[0.03] p-3">
          <div className="mb-2 flex items-center gap-2 text-violet"><CheckCircle2 className="size-4" /><p className="text-[14px] font-semibold">{right.title}</p></div>
          <CodeBlock code={right.code} filename="solution.html" label="Better" diffLines={diffs.right} />
          {(right.output || right.preview) ? <div className="mt-3"><OutputBlock value={right.output} preview={right.preview} /></div> : null}
          {right.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{right.note}</p> : null}
        </div>
      </div>
    </div>
  );
}

export function CodeCards({ items }: { items: { title: string; code: string; output?: string; preview?: ReactNode; note?: string }[] }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {items.map((it) => (
        <div key={it.title} className="rounded-xl border border-line bg-surface p-3">
          <p className="mb-2 text-[14px] font-semibold text-mist">{it.title}</p>
          <CodeBlock code={it.code} filename="example.html" label="Code" compact />
          {(it.output || it.preview) ? <div className="mt-3"><OutputBlock value={it.output} preview={it.preview} /></div> : null}
          {it.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{it.note}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function RuleGrid({ rules }: { rules: { title: string; body: string }[] }) {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {rules.map((r) => (
        <div key={r.title} className="rounded-xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-violet/20">
          <p className="flex items-center gap-2 text-[15px] font-semibold text-mist"><Eye className="size-4 text-violet" />{r.title}</p>
          <p className="mt-1 text-[15px] leading-7 text-muted">{r.body}</p>
        </div>
      ))}
    </div>
  );
}

export function SyntaxMatrix({ rows }: { rows: { label?: string; syntax: string; note: string; output?: string }[] }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-line">
      <div className="grid grid-cols-[0.8fr_1.1fr_1fr_1.2fr] bg-surface/80 text-[13px] font-semibold text-faint">
        <div className="px-3 py-2">Form</div><div className="px-3 py-2">Syntax / Class</div><div className="px-3 py-2">Output / visual result</div><div className="px-3 py-2">Quick use</div>
      </div>
      {rows.map((r, i) => (
        <div key={r.label ?? i} className="grid grid-cols-[0.8fr_1.1fr_1fr_1.2fr] border-t border-line text-[14px]">
          <div className="px-3 py-2 text-mist">{r.label ?? "—"}</div>
          <div className="px-3 py-2"><code className="rounded bg-violet/10 px-1.5 py-0.5 font-mono text-[12.5px] text-violet">{r.syntax}</code></div>
          <div className="px-3 py-2">{r.output ? <pre className="whitespace-pre-wrap rounded-md border border-sky/20 bg-sky/[0.04] p-2 font-mono text-[12px] leading-5 text-mist"><code>{r.output}</code></pre> : <span className="text-[12px] text-faint">Rendered UI: applies this class/syntax (see examples below for visual output)</span>}</div>
          <div className="px-3 py-2 text-muted">{r.note}</div>
        </div>
      ))}
    </div>
  );
}
export function Checklist({ items }: { items: string[] }) {
  const [on, setOn] = useState<boolean[]>(() => items.map(() => false));
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex items-center gap-2 text-faint"><CheckCircle2 className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.16em]">Quick checklist</p></div>
      <div className="mt-3 space-y-2">
        {items.map((it, i) => (
          <button key={it} type="button" onClick={() => setOn((prev) => prev.map((v, idx) => (idx === i ? !v : v)))} className="flex w-full items-start gap-3 rounded-lg border border-line bg-canvas/60 px-3 py-2 text-left transition hover:border-violet/20">
            <span className={cn("mt-0.5 inline-flex size-5 items-center justify-center rounded border text-[12px]", on[i] ? "border-violet/40 bg-violet/10 text-violet" : "border-line text-faint")}>{on[i] ? "✓" : ""}</span>
            <span className={cn("text-[15px] leading-7", on[i] ? "text-mist" : "text-muted")}>{it}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function Pitfall({ text }: { text: string }) {
  return <div className="mt-4 flex items-start gap-2 rounded-lg border border-coral/20 bg-coral/[0.05] p-3 text-[15px] leading-7 text-muted"><AlertTriangle className="mt-1 size-4 shrink-0 text-coral" /><p>{text}</p></div>;
}

export function VisualPreview({ title = "Rendered preview", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-line bg-canvas/80 p-3">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-faint">{title}</p>
      <div className="rounded-md border border-line bg-surface p-3">{children}</div>
    </div>
  );
}
