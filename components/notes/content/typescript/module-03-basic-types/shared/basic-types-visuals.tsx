"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Module3HeroVisual() {
  return (
    <div className="relative mt-6 overflow-hidden rounded-xl border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4 sm:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,255,0,0.08),transparent_26%),radial-gradient(circle_at_85%_20%,rgba(116,179,255,0.08),transparent_24%)]" />
      <div className="relative grid gap-3 md:grid-cols-[1.15fr_.85fr]">
        <div className="rounded-lg border border-line bg-canvas/75 p-4">
          <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Module 3 flow</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px] text-muted">
            {["Annotate", "Infer", "Model", "Widen/Narrow", "Assign safely"].map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-mist animate-[fadeIn_220ms_ease-out_both]" style={{ animationDelay: `${i * 50}ms` }}>{step}</span>
                {i < 4 ? <span className="text-faint">→</span> : null}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[15px] leading-8 text-muted">Every section answers: <strong className="text-mist">what is it?</strong> syntax, valid/invalid example, compiler behavior, when to use, and what to avoid.</p>
        </div>
        <div className="rounded-lg border border-line bg-canvas/75 p-4">
          <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Coverage</p>
          <div className="mt-3 space-y-2 text-[13px]">
            {[["Annotations/Inference", 3], ["Primitives/Special", 8], ["Literals/Collections", 11], ["Enums/Safety rules", 10]].map(([label, n]) => (
              <div key={String(label)} className="flex items-center gap-2">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-line"><div className="h-full rounded-full bg-lime/80" style={{ width: `${Number(n) * 3.1}%` }} /></div>
                <span className="w-36 text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TypePipeline({ steps }: { steps: { label: string; detail: string; tone: "lime" | "sky" | "violet" | "coral" }[] }) {
  const tone = { lime: "border-lime/25 bg-lime/[0.05] text-lime", sky: "border-sky/25 bg-sky/[0.05] text-sky", violet: "border-violet/25 bg-violet/[0.05] text-violet", coral: "border-coral/25 bg-coral/[0.05] text-coral" } as const;
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, i) => (
        <div key={step.label} className={cn("rounded-xl border p-4 transition-transform hover:-translate-y-0.5", tone[step.tone])} style={{ animation: `pop 260ms ${i * 45}ms both` }}>
          <p className="font-mono text-[13px] uppercase tracking-[0.14em]">{step.label}</p>
          <p className="mt-2 text-[15px] leading-7 text-mist/90">{step.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function ValidInvalidCards({ valid, invalid }: { valid: { code: string; note: string }; invalid: { code: string; note: string } }) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-success/25 bg-success/[0.04] p-4 transition hover:border-success/35">
        <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-success">Valid</p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 text-[13px] leading-6 text-mist"><code>{valid.code}</code></pre>
        <p className="mt-2 text-[15px] leading-7 text-muted">{valid.note}</p>
      </div>
      <div className="rounded-xl border border-danger/25 bg-danger/[0.04] p-4 transition hover:border-danger/35">
        <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-danger">Invalid / risky</p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 text-[13px] leading-6 text-mist"><code>{invalid.code}</code></pre>
        <p className="mt-2 text-[15px] leading-7 text-muted">{invalid.note}</p>
      </div>
    </div>
  );
}

export function WideningNarrowingDemo() {
  const [mode, setMode] = useState<"let" | "const" | "asconst">("let");
  const result = mode === "let" ? { value: 'let status = "success"', type: "string (widened)", detail: "Mutable binding: TypeScript usually widens the literal." } : mode === "const" ? { value: 'const status = "success"', type: '"success" (literal)', detail: "Immutable binding: the exact primitive literal is preserved." } : { value: 'const role = { type: "admin" } as const', type: '{ readonly type: "admin" }', detail: "as const prevents object/array widening deeply." };
  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap gap-2">{([{ id: "let", label: "let" }, { id: "const", label: "const" }, { id: "asconst", label: "as const" }] as const).map((o) => <button key={o.id} type="button" onClick={() => setMode(o.id)} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition", mode === o.id ? "border-lime/30 bg-lime/10 text-lime" : "border-line bg-canvas text-muted hover:text-mist")}>{o.label}</button>)}</div>
      <pre className="mt-4 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] text-mist"><code>{result.value}</code></pre>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 text-[15px]"><div className="rounded-lg border border-line bg-canvas/60 p-3"><p className="text-[13px] text-faint">Inferred type</p><p className="mt-1 font-mono text-mist">{result.type}</p></div><div className="rounded-lg border border-line bg-canvas/60 p-3"><p className="text-[13px] text-faint">Why</p><p className="mt-1 text-muted">{result.detail}</p></div></div>
    </div>
  );
}

export function AssignabilityLadder() {
  const [source, setSource] = useState<"literal" | "number" | "unknown" | "never" | "any">("literal");
  const targets = [
    { label: "string", ok: source === "literal" || source === "never" || source === "any" },
    { label: "number", ok: source === "number" || source === "never" || source === "any" },
    { label: "unknown", ok: true },
    { label: "any", ok: true },
    { label: "never", ok: source === "never" },
  ];
  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-[15px] font-semibold text-mist">Assignability explorer</p><select value={source} onChange={(e) => setSource(e.target.value as typeof source)} className="h-9 rounded-lg border border-line bg-canvas px-3 text-[13px] text-mist outline-none"><option value="literal">&quot;hello&quot;</option><option value="number">number</option><option value="unknown">unknown</option><option value="any">any</option><option value="never">never</option></select></div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">{targets.map((t) => <div key={t.label} className={cn("rounded-lg border p-3 transition-all", t.ok ? "border-success/25 bg-success/[0.05]" : "border-danger/20 bg-danger/[0.04]")}><p className="font-mono text-[13px] text-mist">→ {t.label}</p><p className={cn("mt-1 text-[13px]", t.ok ? "text-success" : "text-danger")}>{t.ok ? "assignable" : "blocked"}</p></div>)}</div>
    </div>
  );
}

export function AnimatedMeter({ value, label }: { value: number; label: string }) {
  const [width, setWidth] = useState(0);
  useEffect(() => { const id = requestAnimationFrame(() => setWidth(Math.max(0, Math.min(100, value)))); return () => cancelAnimationFrame(id); }, [value]);
  return <div className="mt-4"><div className="flex items-center justify-between text-[13px] text-faint"><span>{label}</span><span className="font-mono text-mist">{value}%</span></div><div className="mt-1.5 h-2 overflow-hidden rounded-full bg-line"><div className="h-full rounded-full bg-lime transition-[width] duration-700 ease-out" style={{ width: `${width}%` }} /></div></div>;
}

export function SyntaxPlayground({ options, initial = 0, title = "Syntax variations" }: { options: { label: string; code: string; note: string }[]; initial?: number; title?: string }) {
  const [active, setActive] = useState(initial);
  const current = options[active] ?? options[0];
  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5">
      <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">{options.map((o, i) => <button key={o.label} type="button" onClick={() => setActive(i)} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition", i === active ? "border-lime/30 bg-lime/10 text-lime" : "border-line bg-canvas text-muted hover:text-mist")}>{o.label}</button>)}</div>
      <pre className="mt-4 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] leading-6 text-mist"><code>{current.code}</code></pre>
      <p className="mt-2 text-[15px] leading-7 text-muted">{current.note}</p>
    </div>
  );
}

export function NarrowingFlowDemo() {
  const [kind, setKind] = useState<"typeof" | "truthiness" | "equality" | "in">("typeof");
  const map = {
    typeof: { input: "value: string | number", check: 'if (typeof value === "string")', narrowed: "value is string here", else: "value is number here" },
    truthiness: { input: "name: string | null", check: "if (name)", narrowed: "name is string (truthy) here", else: "name is null or empty string in else branch" },
    equality: { input: "id: number | null", check: "if (id !== null)", narrowed: "id is number here", else: "id is null here" },
    in: { input: 'pet: { bark(): void } | { meow(): void }', check: 'if ("bark" in pet)', narrowed: "pet has bark()", else: "pet has meow()" },
  } as const;
  const r = map[kind];
  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap gap-2">{(["typeof", "truthiness", "equality", "in"] as const).map((k) => <button key={k} type="button" onClick={() => setKind(k)} className={cn("rounded-lg border px-3 py-1.5 font-mono text-[13px] transition", kind === k ? "border-sky/30 bg-sky/10 text-sky" : "border-line bg-canvas text-muted")}>{k}</button>)}</div>
      <div className="mt-4 grid gap-3 md:grid-cols-3 text-[13px]">
        <div className="rounded-lg border border-line bg-canvas/60 p-3"><p className="text-faint">Input</p><p className="mt-1 font-mono text-mist">{r.input}</p></div>
        <div className="rounded-lg border border-sky/20 bg-sky/[0.04] p-3"><p className="text-sky">Check</p><p className="mt-1 font-mono text-mist">{r.check}</p></div>
        <div className="rounded-lg border border-success/20 bg-success/[0.04] p-3"><p className="text-success">Narrowed</p><p className="mt-1 text-mist">{r.narrowed}</p><p className="mt-1 text-muted">{r.else}</p></div>
      </div>
    </div>
  );
}

export function ArrayTupleMockup() {
  return (
    <div className="mt-6 grid gap-4 lg:grid-cols-2">
      <div className="rounded-xl border border-line bg-surface p-4"><p className="font-mono text-[13px] text-faint">Array (same kind, flexible length)</p><div className="mt-3 flex flex-wrap gap-2">{[10, 20, 30, 40].map((n, i) => <div key={n} className="rounded-lg border border-lime/20 bg-lime/[0.05] px-3 py-2 text-center animate-[pop_220ms_ease-out_both]" style={{ animationDelay: `${i * 35}ms` }}><p className="font-mono text-[11px] text-faint">[{i}]</p><p className="font-mono text-mist">{n}</p></div>)}<div className="rounded-lg border border-dashed border-line px-3 py-2 text-[13px] text-faint">+ more</div></div></div>
      <div className="rounded-xl border border-line bg-surface p-4"><p className="font-mono text-[13px] text-faint">Tuple (fixed positions, specific meaning)</p><div className="mt-3 flex flex-wrap gap-2">{[{ l: "id", v: "7" }, { l: "name", v: '"Alex"' }, { l: "active", v: "true" }].map((c, i) => <div key={c.l} className="rounded-lg border border-sky/20 bg-sky/[0.05] px-3 py-2 animate-[pop_220ms_ease-out_both]" style={{ animationDelay: `${i * 35}ms` }}><p className="font-mono text-[11px] text-sky">{c.l}</p><p className="font-mono text-mist">{c.v}</p></div>)}</div></div>
    </div>
  );
}

export function EnumCompareVisual() {
  const [tab, setTab] = useState<"enum" | "union" | "const">("union");
  const code = {
    enum: `enum Status { Pending = "pending", Done = "done" }\nconst s: Status = Status.Pending; // runtime object exists`,
    union: `type Status = "pending" | "done";\nconst s: Status = "pending"; // erased at runtime`,
    const: `const STATUS = { Pending: "pending", Done: "done" } as const;\ntype Status = typeof STATUS[keyof typeof STATUS];`,
  } as const;
  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap gap-2">
        {(["enum", "union", "const"] as const).map((t) => (
          <button key={t} type="button" onClick={() => setTab(t)} className={cn("rounded-lg border px-3 py-1.5 text-[13px]", tab === t ? "border-violet/30 bg-violet/10 text-violet" : "border-line bg-canvas text-muted")}>
            {t === "const" ? "as const object" : t}
          </button>
        ))}
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] text-mist"><code>{code[tab]}</code></pre>
    </div>
  );
}

