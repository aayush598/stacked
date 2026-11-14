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

/* ---------- Bootstrap class -> visual preview (approximate, for fast scanning) ---------- */
const spacingScale: Record<string, string> = { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "1rem", "4": "1.5rem", "5": "3rem", "auto": "auto" };
const theme: Record<string, { bg: string; fg: string; border: string }> = {
  primary: { bg: "#0d6efd", fg: "#fff", border: "#0d6efd" },
  secondary: { bg: "#6c757d", fg: "#fff", border: "#6c757d" },
  success: { bg: "#198754", fg: "#fff", border: "#198754" },
  danger: { bg: "#dc3545", fg: "#fff", border: "#dc3545" },
  warning: { bg: "#ffc107", fg: "#212529", border: "#ffc107" },
  info: { bg: "#0dcaf0", fg: "#212529", border: "#0dcaf0" },
  light: { bg: "#f8f9fa", fg: "#212529", border: "#dee2e6" },
  dark: { bg: "#212529", fg: "#fff", border: "#212529" },
  white: { bg: "#ffffff", fg: "#212529", border: "#dee2e6" },
  body: { bg: "#ffffff", fg: "#212529", border: "#dee2e6" },
  transparent: { bg: "transparent", fg: "#212529", border: "transparent" },
};

function extractClasses(code?: string): string[] {
  if (!code) return [];
  const out: string[] = [];
  const re = /class(?:Name)?="([^"]+)"/g;
  let m;
  while ((m = re.exec(code))) out.push(...m[1].split(/\s+/).filter(Boolean));
  return Array.from(new Set(out));
}

function spacingDemo(cls: string) {
  const m = cls.match(/^(m|p)([trblsexy]?)-(\d|auto)$/);
  if (!m) return null;
  const [, type, side, val] = m;
  const v = spacingScale[val] ?? val;
  const label = `${cls} → ${type === "m" ? "margin" : "padding"} ${side || "all"} = ${v}`;
  if (type === "p") {
    return (
      <div key={cls} className="rounded border border-line bg-canvas/70 p-1">
        <div className="rounded border border-dashed border-sky/40 bg-sky/10 text-[11px] text-sky" style={{ padding: v === "auto" ? 8 : v }}>
          <div className="rounded bg-surface px-2 py-1 text-mist">content</div>
        </div>
        <p className="mt-1 font-mono text-[11px] text-faint">{label}</p>
      </div>
    );
  }
  return (
    <div key={cls} className="rounded border border-line bg-canvas/70 p-1">
      <div className="rounded bg-sky/10 p-1">
        <div className="rounded border border-sky/40 bg-surface px-2 py-1 text-[11px] text-mist" style={{ margin: v === "auto" ? "0 auto" : v, width: v === "auto" ? "max-content" : undefined }}>box</div>
      </div>
      <p className="mt-1 font-mono text-[11px] text-faint">{label}</p>
    </div>
  );
}

function visualForClass(cls: string): ReactNode | null {
  const sp = spacingDemo(cls);
  if (sp) return sp;
  const btn = cls.match(/^btn(?:-(outline))?-([a-z]+)$/);
  if (btn) {
    const [, outline, color] = btn;
    const t = theme[color] || theme.secondary;
    return (
      <div key={cls} className="flex items-center gap-2">
        <span className="rounded-md px-3 py-1.5 text-[12px] font-medium" style={outline ? { color: t.bg, border: `1px solid ${t.bg}`, background: "transparent" } : { background: t.bg, color: t.fg, border: `1px solid ${t.border}` }}>{color}</span>
        <code className="font-mono text-[11px] text-violet">{cls}</code>
      </div>
    );
  }
  if (cls === "btn") return <div key={cls}><code className="font-mono text-[11px] text-violet">{cls}</code><span className="ml-2 text-[11px] text-faint">(base button)</span></div>;
  const text = cls.match(/^text-(primary|secondary|success|danger|warning|info|light|dark|white|body|muted|start|center|end)$/);
  if (text) {
    const v = text[1];
    const c = theme[v]?.bg;
    if (c) return <div key={cls} className="flex items-center gap-2"><span style={{ color: c }} className="text-[13px] font-semibold">Sample text</span><code className="font-mono text-[11px] text-violet">{cls}</code></div>;
    return <div key={cls} className="flex items-center gap-2"><span className="text-[13px]" style={{ textAlign: v === "start" ? "left" : v === "center" ? "center" : "right", display: "block", width: 120 }}>{v}</span><code className="font-mono text-[11px] text-violet">{cls}</code></div>;
  }
  const bg = cls.match(/^bg-(primary|secondary|success|danger|warning|info|light|dark|white|body|transparent)(?:-subtle)?$/);
  if (bg) {
    const t = theme[bg[1]] || theme.light;
    return <div key={cls} className="flex items-center gap-2"><span className="rounded px-2 py-1 text-[12px]" style={{ background: t.bg, color: t.fg, border: "1px solid rgba(0,0,0,.1)" }}>background</span><code className="font-mono text-[11px] text-violet">{cls}</code></div>;
  }
  if (/^d-(flex|inline-flex|grid|block|inline|inline-block|none)$/.test(cls)) {
    const kind = cls.replace("d-","");
    return <div key={cls} className="flex items-center gap-2"><span className="rounded border border-sky/30 bg-sky/10 px-2 py-0.5 text-[11px] text-sky">display: {kind}</span><code className="font-mono text-[11px] text-violet">{cls}</code></div>;
  }
  if (/^justify-content-/.test(cls) || /^align-items-/.test(cls) || /^align-self-/.test(cls)) {
    return <div key={cls} className="flex items-center gap-2"><span className="rounded border border-line px-2 py-0.5 text-[11px] text-mist">{cls.split("-").slice(0,2).join("-")}: {cls.split("-").slice(2).join("-")}</span><code className="font-mono text-[11px] text-violet">{cls}</code></div>;
  }
  const col = cls.match(/^col(?:-(sm|md|lg|xl|xxl))?(?:-(\d+|auto))?$/);
  if (col) {
    const span = col[2] ? (col[2] === "auto" ? "auto" : `${col[2]}/12`) : "equal";
    return <div key={cls} className="flex items-center gap-2"><div className="h-4 rounded bg-violet/30" style={{ width: col[2] && col[2]!=="auto" ? `${(Number(col[2])/12)*100}%` : 48 }} /><span className="text-[11px] text-faint">width {span}</span><code className="font-mono text-[11px] text-violet">{cls}</code></div>;
  }
  if (/^container/.test(cls)) return <div key={cls} className="flex items-center gap-2"><div className="h-4 w-24 rounded border border-dashed border-violet/40 bg-violet/10" /><code className="font-mono text-[11px] text-violet">{cls}</code><span className="text-[11px] text-faint">centered wrapper</span></div>;
  if (/^(border|rounded|shadow)/.test(cls)) return <div key={cls} className="flex items-center gap-2"><span className="inline-block size-6 rounded bg-surface" style={{ border: cls.startsWith("border") ? "2px solid #6c757d" : "1px solid #dee2e6", borderRadius: cls.includes("circle") ? 999 : cls.includes("pill") ? 999 : cls.includes("rounded") ? 8 : 2, boxShadow: cls.startsWith("shadow") ? "0 .5rem 1rem rgba(0,0,0,.15)" : undefined }} /><code className="font-mono text-[11px] text-violet">{cls}</code></div>;
  if (/^(fw-|fst-|fs-|lh-|text-decoration)/.test(cls)) return <div key={cls}><code className="font-mono text-[11px] text-violet">{cls}</code><span className="ml-2 text-[12px] text-mist" style={{ fontWeight: cls.includes("bold")?700:cls.includes("semibold")?600:undefined, fontStyle: cls.includes("italic")?"italic":undefined, textDecoration: cls.includes("underline")?"underline":cls.includes("line-through")?"line-through":undefined }}>text style</span></div>;
  if (/^(w-|h-|mw-|mh-|vw-|vh-)/.test(cls)) return <div key={cls} className="flex items-center gap-2"><span className="rounded border border-line bg-canvas px-2 py-0.5 text-[11px] text-mist">size util</span><code className="font-mono text-[11px] text-violet">{cls}</code></div>;
  if (/^(gap-|g-|gx-|gy-|row|flex-|order-|align-content)/.test(cls)) return <div key={cls} className="flex items-center gap-2"><span className="rounded border border-sky/30 bg-sky/10 px-2 py-0.5 text-[11px] text-sky">layout/flex/grid</span><code className="font-mono text-[11px] text-violet">{cls}</code></div>;
  if (/^(alert|badge|card|nav|navbar|modal|dropdown|list-group|table|form-|input-|btn-group|progress|spinner|toast|breadcrumb|pagination|accordion|carousel|offcanvas|placeholder)/.test(cls)) return <div key={cls} className="flex items-center gap-2"><span className="rounded border border-violet/30 bg-violet/10 px-2 py-0.5 text-[11px] text-violet">component</span><code className="font-mono text-[11px] text-violet">{cls}</code></div>;
  return null;
}

export function BootstrapPreview({ code, title = "Class → visual output" }: { code?: string; title?: string }) {
  const classes = useMemo(() => extractClasses(code), [code]);
  const visuals = useMemo(() => {
    const nodes = classes.map((c) => visualForClass(c)).filter(Boolean) as ReactNode[];
    return nodes;
  }, [classes]);
  if (!classes.length) return null;
  const shown = visuals.slice(0, 8);
  const rest = classes.filter((c) => !visualForClass(c)).slice(0, 10);
  return (
    <div className="mt-3 rounded-xl border border-violet/20 bg-violet/[0.03] p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-violet">{title}</p>
        <span className="text-[11px] text-faint">scan class → see effect</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {classes.slice(0, 14).map((c) => (
          <code key={c} className="rounded-md border border-violet/25 bg-violet/10 px-2 py-0.5 font-mono text-[12px] font-semibold text-violet">{c}</code>
        ))}
      </div>
      {shown.length ? <div className="mt-3 grid gap-2 sm:grid-cols-2">{shown}</div> : null}
      {rest.length ? <p className="mt-2 text-[12px] text-faint">Other classes: <span className="font-mono text-mist">{rest.join(", ")}</span></p> : null}
      {!shown.length ? <p className="mt-2 text-[13px] text-muted">These classes apply Bootstrap styling/behavior as named (see rendered result in code context).</p> : null}
    </div>
  );
}

export function OutputBlock({ title = "Visual output", value, preview, code }: { title?: string; value?: string; preview?: ReactNode; code?: string }) {
  const auto = !preview ? <BootstrapPreview code={code} /> : null;
  return (
    <div className="rounded-xl border border-sky/20 bg-sky/[0.04]">
      <div className="flex items-center gap-2 border-b border-sky/15 px-3.5 py-2 text-[12px] font-medium text-sky"><Terminal className="size-3.5" />{title}</div>
      <div className="space-y-3 p-3">
        {preview ? <div className="rounded-lg border border-line bg-canvas/80 p-3"><p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-faint">Rendered preview</p>{preview}</div> : null}
        {auto}
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
        {(it?.output || it?.preview || it?.code) ? <OutputBlock value={it?.output} preview={it?.preview} code={it?.code} /> : null}
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
          {(left.output || left.preview || left.code) ? <div className="mt-3"><OutputBlock value={left.output} preview={left.preview} code={left.code} /></div> : null}
          {left.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{left.note}</p> : null}
        </div>
        <div className="rounded-xl border border-violet/20 bg-violet/[0.03] p-3">
          <div className="mb-2 flex items-center gap-2 text-violet"><CheckCircle2 className="size-4" /><p className="text-[14px] font-semibold">{right.title}</p></div>
          <CodeBlock code={right.code} filename="solution.html" label="Better" diffLines={diffs.right} />
          {(right.output || right.preview || right.code) ? <div className="mt-3"><OutputBlock value={right.output} preview={right.preview} code={right.code} /></div> : null}
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
          {(it.output || it.preview || it.code) ? <div className="mt-3"><OutputBlock value={it.output} preview={it.preview} code={it.code} /></div> : null}
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
      {rows.map((r, i) => {
        const preview = visualForClass(r.syntax?.trim().split(/\s+/)[0] || "");
        return (
          <div key={r.label ?? i} className="grid grid-cols-[0.8fr_1.1fr_1fr_1.2fr] border-t border-line text-[14px]">
            <div className="px-3 py-2 text-mist">{r.label ?? "—"}</div>
            <div className="px-3 py-2"><code className="rounded bg-violet/10 px-1.5 py-0.5 font-mono text-[12.5px] text-violet">{r.syntax}</code></div>
            <div className="px-3 py-2">{preview ? <div className="rounded-md border border-sky/20 bg-sky/[0.04] p-2">{preview}</div> : r.output ? <pre className="whitespace-pre-wrap rounded-md border border-sky/20 bg-sky/[0.04] p-2 font-mono text-[12px] leading-5 text-mist"><code>{r.output}</code></pre> : <span className="text-[12px] text-faint">Applies this class → visual effect shown in examples below</span>}</div>
            <div className="px-3 py-2 text-muted">{r.note}</div>
          </div>
        );
      })}
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



const quickSets: Record<string, string[]> = {
  spacing: ["m-0","m-1","m-2","m-3","m-4","m-5","mt-3","mb-3","ms-3","me-3","mx-auto","my-3","p-0","p-1","p-2","p-3","p-4","p-5","px-3","py-3","pt-3","pb-3","gap-3"],
  buttons: ["btn","btn-primary","btn-secondary","btn-success","btn-danger","btn-warning","btn-info","btn-light","btn-dark","btn-outline-primary","btn-outline-secondary","btn-lg","btn-sm"],
  colors: ["text-primary","text-secondary","text-success","text-danger","text-warning","text-info","text-dark","text-muted","bg-primary","bg-success","bg-warning","bg-danger","bg-light","bg-dark","bg-info"],
  grid: ["container","row","col","col-6","col-4","col-3","col-12","col-sm-6","col-md-4","col-lg-3"],
  flex: ["d-flex","d-inline-flex","d-grid","d-none","d-block","justify-content-start","justify-content-center","justify-content-between","align-items-start","align-items-center","flex-column","flex-row","gap-2"],
  typography: ["fw-bold","fw-semibold","fw-normal","fst-italic","text-start","text-center","text-end","fs-1","fs-4","text-decoration-underline"],
  borders: ["border","border-0","border-primary","rounded","rounded-pill","shadow","shadow-sm","shadow-lg"],
  forms: ["form-control","form-label","form-select","form-check-input","form-check-label","input-group","is-valid","is-invalid"],
  components: ["card","alert alert-primary","badge text-bg-success","nav","navbar","dropdown-menu","list-group","table","progress","spinner-border"],
};

export function ClassGallery({ title = "Classname → visual output (fast scan)", classes, set }: { title?: string; classes?: string[]; set?: keyof typeof quickSets }) {
  const list = classes ?? (set ? quickSets[set] : []);
  if (!list?.length) return null;
  return <ClassVisualGrid classes={list} title={title + " — 1 class = 1 visual"} />;
}


function fallbackVisual(cls: string): ReactNode {
  // generic but concrete: show a sample element "affected" by this class
  const label = cls.replace(/^(btn|text|bg|border|rounded|shadow|d|flex|justify|align|m|p|g|col|row|container|form|input|nav|alert|badge|card|table|list|dropdown|modal|offcanvas|accordion|toast|progress|spinner|breadcrumb|pagination|fs|fw|fst|lh|w|h|position|top|start|end|bottom|z|opacity|overflow|float|object|gap|order|pe|ps|pt|pb|px|py|ms|me|mt|mb|mx|my)-?/, (m)=>m) ? cls : cls;
  return (
    <div className="flex items-center gap-2">
      <div className="min-w-[72px] rounded border border-line bg-canvas px-2 py-1 text-center">
        <span className="inline-block rounded bg-violet/15 px-1.5 py-0.5 text-[10px] text-violet">.{cls}</span>
      </div>
      <div className="flex-1">
        <div className="rounded border border-dashed border-violet/30 bg-surface px-2 py-1 text-[11px] text-mist">
          Element with <span className="font-mono text-violet">{cls}</span> → Bootstrap applies this class’s styles/behavior
        </div>
      </div>
    </div>
  );
}

export function ClassVisualGrid({ classes, title = "Every class → one visual output" }: { classes: string[]; title?: string }) {
  const uniq = Array.from(new Set(classes.filter(Boolean)));
  if (!uniq.length) return null;
  return (
    <div className="mt-5 rounded-xl border border-violet/20 bg-violet/[0.03] p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[14px] font-semibold text-mist">{title}</p>
        <span className="rounded-full border border-violet/20 bg-violet/10 px-2 py-0.5 text-[12px] font-medium text-violet">{uniq.length} classes · 1 visual each</span>
      </div>
      <p className="mt-1 text-[13px] text-faint">Scan quickly: each row shows <span className="font-mono text-mist">classname</span> and its visual effect/output.</p>
      <div className="mt-3 space-y-2">
        {uniq.map((c) => (
          <div key={c} className="rounded-lg border border-line bg-surface p-2.5">
            <div className="mb-1 flex items-center gap-2">
              <code className="rounded bg-violet/10 px-2 py-0.5 font-mono text-[13px] font-semibold text-violet">.{c}</code>
              <span className="text-[12px] text-faint">→ visual output</span>
            </div>
            <div className="text-[13px]">{visualForClass(c) ?? fallbackVisual(c)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

