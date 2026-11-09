"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Module3HeroVisual() {
  const nodes = [
    { label: "Annotate", x: "12%", y: "28%", tone: "lime" },
    { label: "Infer", x: "36%", y: "18%", tone: "sky" },
    { label: "Narrow", x: "62%", y: "26%", tone: "violet" },
    { label: "Assign", x: "84%", y: "44%", tone: "coral" },
  ] as const;

  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl border border-line bg-[radial-gradient(circle_at_top,_rgba(33,73,232,0.12),_transparent_38%),linear-gradient(180deg,_#fbfcf9,_#f2f5f0)] p-4 sm:p-6">
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(17,23,20,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,23,20,0.05)_1px,transparent_1px)] [background-size:22px_22px]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 260" aria-hidden>
        <defs>
          <linearGradient id="m3line" x1="0" x2="1">
            <stop offset="0%" stopColor="#2149e8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6a4bd4" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <path
          d="M110 95 C 220 70, 300 65, 390 78 S 560 92, 675 128"
          fill="none"
          stroke="url(#m3line)"
          strokeWidth="3"
          strokeDasharray="8 8"
        >
          <animate attributeName="stroke-dashoffset" from="120" to="0" dur="10s" repeatCount="indefinite" />
        </path>
      </svg>
      <div className="relative grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Module 3 map</p>
          <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-mist sm:text-2xl">
            Basic types are the grammar of safe TypeScript
          </h3>
          <p className="mt-2 max-w-xl text-[15px] leading-7 text-muted">
            You annotate intent, let TypeScript infer obvious facts, narrow values when they could be many things,
            and rely on assignability to keep contracts honest.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-surface/90 p-3 shadow-[0_10px_30px_-24px_rgba(17,23,20,0.5)]">
          <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">Compiler mindset</p>
          <ul className="mt-2 space-y-2 text-[13px] text-muted">
            <li className="rounded-lg border border-line bg-canvas/70 px-3 py-2">Types describe values before runtime.</li>
            <li className="rounded-lg border border-line bg-canvas/70 px-3 py-2">Literals can widen unless you constrain them.</li>
            <li className="rounded-lg border border-line bg-canvas/70 px-3 py-2">Checks narrow unions into usable types.</li>
          </ul>
        </div>
      </div>
      <div className="relative mt-5 h-28 sm:h-24">
        {nodes.map((node, index) => (
          <div
            key={node.label}
            className={cn(
              "absolute -translate-x-1/2 rounded-full border px-3 py-1.5 text-[13px] font-semibold shadow-sm backdrop-blur-sm",
              node.tone === "lime" && "border-lime/25 bg-lime/[0.09] text-lime",
              node.tone === "sky" && "border-sky/25 bg-sky/[0.09] text-sky",
              node.tone === "violet" && "border-violet/25 bg-violet/[0.09] text-violet",
              node.tone === "coral" && "border-coral/25 bg-coral/[0.09] text-coral",
            )}
            style={{ left: node.x, top: node.y, animation: `pop 420ms ${index * 90}ms both` }}
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TypePipeline({
  steps,
}: {
  steps: { label: string; detail: string; tone?: "lime" | "sky" | "violet" | "coral" | "neutral" }[];
}) {
  return (
    <div className="mt-6 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <div
          key={step.label}
          className={cn(
            "group rounded-xl border bg-surface p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-24px_rgba(17,23,20,0.55)]",
            step.tone === "lime" && "border-lime/20",
            step.tone === "sky" && "border-sky/20",
            step.tone === "violet" && "border-violet/20",
            step.tone === "coral" && "border-coral/20",
            (!step.tone || step.tone === "neutral") && "border-line",
          )}
          style={{ animation: `pop 360ms ${index * 70}ms both` }}
        >
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">
              Step {index + 1}
            </p>
            <span
              className={cn(
                "size-2 rounded-full",
                step.tone === "lime" && "bg-lime",
                step.tone === "sky" && "bg-sky",
                step.tone === "violet" && "bg-violet",
                step.tone === "coral" && "bg-coral",
                (!step.tone || step.tone === "neutral") && "bg-faint/60",
              )}
            />
          </div>
          <p className="mt-2 text-[15px] font-semibold text-mist">{step.label}</p>
          <p className="mt-1 text-[13px] leading-5 text-muted">{step.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function ValidInvalidCards({
  valid,
  invalid,
}: {
  valid: { code: string; note: string };
  invalid: { code: string; note: string };
}) {
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-success/25 bg-success/[0.045] p-4">
        <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-success">Valid</p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-success/15 bg-surface/90 p-3 font-mono text-[13px] leading-6 text-mist">
          <code>{valid.code}</code>
        </pre>
        <p className="mt-2 text-[13px] leading-5 text-muted">{valid.note}</p>
      </div>
      <div className="rounded-xl border border-coral/25 bg-coral/[0.045] p-4">
        <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-coral">Invalid</p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-coral/15 bg-surface/90 p-3 font-mono text-[13px] leading-6 text-mist">
          <code>{invalid.code}</code>
        </pre>
        <p className="mt-2 text-[13px] leading-5 text-muted">{invalid.note}</p>
      </div>
    </div>
  );
}

export function WideningNarrowingDemo() {
  const [mode, setMode] = useState<"let" | "const">("let");
  const [narrow, setNarrow] = useState(false);

  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">Interactive</p>
          <p className="mt-1 text-[15px] font-semibold text-mist">Widening and narrowing</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setMode("let")}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-[13px] font-medium transition",
              mode === "let" ? "border-lime/35 bg-lime/[0.08] text-mist" : "border-line bg-canvas text-muted",
            )}
          >
            let
          </button>
          <button
            type="button"
            onClick={() => setMode("const")}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-[13px] font-medium transition",
              mode === "const" ? "border-lime/35 bg-lime/[0.08] text-mist" : "border-line bg-canvas text-muted",
            )}
          >
            const
          </button>
          <button
            type="button"
            onClick={() => setNarrow((v) => !v)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-[13px] font-medium transition",
              narrow ? "border-violet/35 bg-violet/[0.08] text-mist" : "border-line bg-canvas text-muted",
            )}
          >
            {narrow ? "narrowed" : "union"}
          </button>
        </div>
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="rounded-xl border border-line bg-canvas/60 p-4">
          <p className="font-mono text-[13px] text-faint">Source</p>
          <pre className="mt-2 font-mono text-[13px] leading-6 text-mist">
            <code>{`${mode} status = "active";`}</code>
          </pre>
        </div>
        <div className="hidden justify-center lg:flex">
          <div className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[13px] text-faint">→</div>
        </div>
        <div className="rounded-xl border border-lime/20 bg-lime/[0.04] p-4">
          <p className="font-mono text-[13px] text-faint">Inferred type</p>
          <p className="mt-2 font-mono text-[15px] font-semibold text-mist">
            {mode === "const" ? '"active"' : narrow ? '"active" (after check)' : "string"}
          </p>
          <p className="mt-1 text-[13px] leading-5 text-muted">
            {mode === "const"
              ? "A const binding preserves the literal because it cannot be reassigned."
              : narrow
                ? "A control-flow check narrows a wider type to a specific member."
                : "A let binding widens to a broader type because reassignment is possible."}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AssignabilityLadder() {
  const [source, setSource] = useState<"literal" | "number" | "unknown" | "never">("literal");
  const targets = [
    { label: "string", accepts: source === "literal" || source === "never" },
    { label: "number", accepts: source === "number" || source === "never" },
    { label: "unknown", accepts: true },
    { label: "never", accepts: source === "never" },
  ];
  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">Interactive</p>
          <p className="mt-1 text-[15px] font-semibold text-mist">Assignability explorer</p>
        </div>
        <select
          value={source}
          onChange={(e) => setSource(e.target.value as typeof source)}
          className="h-9 rounded-lg border border-line bg-canvas px-3 text-[13px] text-mist outline-none focus:border-line-strong"
          aria-label="Source type"
        >
          <option value="literal">&quot;hello&quot; (literal)</option>
          <option value="number">number</option>
          <option value="unknown">unknown</option>
          <option value="never">never</option>
        </select>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {targets.map((target) => (
          <div
            key={target.label}
            className={cn(
              "rounded-xl border p-3 transition",
              target.accepts ? "border-success/25 bg-success/[0.045]" : "border-coral/25 bg-coral/[0.045]",
            )}
          >
            <p className="font-mono text-[13px] text-faint">to {target.label}</p>
            <p className={cn("mt-1 text-[15px] font-semibold", target.accepts ? "text-success" : "text-coral")}>
              {target.accepts ? "Assignable" : "Not assignable"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AnimatedMeter({ value, label }: { value: number; label: string }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const id = requestAnimationFrame(() => setWidth(Math.max(0, Math.min(100, value))));
    return () => cancelAnimationFrame(id);
  }, [value]);
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-[13px] text-faint">
        <span>{label}</span>
        <span className="font-mono text-mist">{value}%</span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-lime transition-[width] duration-700 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function ModuleSequenceCards() {
  const groups = [
    { title: "Annotations & inference", items: ["Type annotations", "Inference", "Explicit vs inferred", "Widening"], tone: "border-lime/20 bg-lime/[0.03]" },
    { title: "Primitive & special types", items: ["Primitives", "null/undefined", "void/never", "any/unknown/object"], tone: "border-sky/20 bg-sky/[0.03]" },
    { title: "Literal modeling", items: ["String literals", "Numeric literals", "Boolean literals", "Discriminants"], tone: "border-violet/20 bg-violet/[0.03]" },
    { title: "Safety system", items: ["Narrowing", "Compatibility", "Assignability", "Best practices"], tone: "border-coral/20 bg-coral/[0.03]" },
  ];
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {groups.map((group, index) => (
        <div key={group.title} className={cn("rounded-xl border p-4", group.tone)} style={{ animation: `pop 360ms ${index * 70}ms both` }}>
          <p className="text-[15px] font-semibold text-mist">{group.title}</p>
          <ul className="mt-2 space-y-1.5 text-[13px] text-muted">
            {group.items.map((item) => (
              <li key={item} className="flex items-center gap-2"><span className="size-1 rounded-full bg-current opacity-50" />{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function PracticeChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const items = [
    "Create typed variables for name, age, salary, and active status.",
    "Write a nullable email and an optional parameter.",
    "Narrow an unknown value with typeof and a type guard.",
    "Create string and numeric literal unions.",
    "Explain widening, narrowing, compatibility, and assignability.",
  ];
  const completed = items.filter((item) => done[item]).length;
  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">Interactive practice</p>
          <p className="mt-1 text-[15px] font-semibold text-mist">Quick self-check</p>
        </div>
        <span className="font-mono text-[13px] text-muted">{completed}/{items.length}</span>
      </div>
      <AnimatedMeter value={Math.round((completed / items.length) * 100)} label="Completion" />
      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <button key={item} type="button" onClick={() => setDone((d) => ({ ...d, [item]: !d[item] }))} className={cn("flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left text-[13px] transition", done[item] ? "border-success/25 bg-success/[0.05] text-mist" : "border-line bg-canvas/50 text-muted hover:border-line-strong")}> 
            <span className={cn("mt-0.5 grid size-4 shrink-0 place-items-center rounded border text-[11px]", done[item] ? "border-success bg-success text-white" : "border-line bg-surface")}>{done[item] ? "✓" : ""}</span>
            <span>{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
