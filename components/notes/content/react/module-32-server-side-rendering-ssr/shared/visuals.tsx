"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ArrowRight, Check, CheckCircle2, Code2, Eye, EyeOff, GitCompareArrows, Layers, Lightbulb, MousePointerClick, Play, RefreshCcw, Sparkles, Split, Terminal, ToggleLeft, ToggleRight, Wand2, X, XCircle } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

export function SectionHero({ title, subtitle, chips }: { title: string; subtitle: string; chips?: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-sky/20 bg-gradient-to-br from-sky/[0.10] via-surface to-lime/[0.06] p-5 sm:p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-sky/10 blur-2xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-8 left-10 size-32 rounded-full bg-lime/10 blur-2xl animate-pulse [animation-delay:700ms]" />
      <div className="flex flex-wrap items-center gap-2 text-sky"><Sparkles className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.18em]">React Deep Dive</p></div>
      <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-mist sm:text-2xl">{title}</h3>
      <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted">{subtitle}</p>
      {chips?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c, i) => (
            <span key={c} style={{ animationDelay: `${i * 50}ms` }} className="rounded-full border border-line bg-surface/80 px-2.5 py-1 text-[13px] text-mist backdrop-blur transition hover:-translate-y-0.5 hover:border-sky/30 hover:bg-sky/[0.06]">
              {c}
            </span>
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
          <span className={cn("mt-0.5 rounded-md border px-2 py-0.5 font-mono text-[12px] font-semibold uppercase", tones[it.tone ?? "sky"])}>{it.label}</span>
          <p className="text-[14px] leading-6 text-muted">{it.detail ?? ""}</p>
        </div>
      ))}
    </div>
  );
}

export function AnimatedFlow({ steps }: { steps: { label: string; note?: string }[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => { if(!steps.length) return; const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 1800); return () => clearInterval(t); }, [steps.length]);
  if(!steps.length) return null;
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex items-center gap-2 text-faint"><Play className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.16em]">Concept flow</p></div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <button key={s.label} type="button" onClick={() => setActive(i)} className="flex items-center gap-2">
            <span className={cn("rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-all duration-300", i === active ? "scale-[1.03] border-sky/35 bg-sky/10 text-sky shadow-sm" : i < active ? "border-lime/25 bg-lime/[0.05] text-mist" : "border-line bg-canvas text-muted hover:text-mist")}>{s.label}</span>
            {i < steps.length - 1 ? <ArrowRight className={cn("size-3.5 transition-all duration-300", i < active ? "translate-x-0.5 text-sky" : "text-faint")} aria-hidden /> : null}
          </button>
        ))}
      </div>
      <div key={active} className="mt-3 min-h-[3.25rem] rounded-lg border border-line bg-canvas/70 p-3 text-[15px] leading-6 text-muted">
        <span className="inline-flex items-center gap-1.5 font-medium text-mist"><Sparkles className="size-3.5 text-sky" aria-hidden />{steps[active]?.label}</span>
        <span className="ml-1">{steps[active]?.note ?? "Follow the steps to build a clear mental model."}</span>
      </div>
    </div>
  );
}

export function OutputBlock({ title = "Output", value, preview }: { title?: string; value?: ReactNode; preview?: ReactNode }) {
  return (
    <div className="rounded-xl border border-sky/20 bg-sky/[0.04]">
      <div className="flex items-center gap-2 border-b border-sky/15 px-3.5 py-2 text-[12px] font-medium text-sky"><Terminal className="size-3.5" />{title}</div>
      <div className="space-y-3 p-3">
        {preview ? <div className="rounded-lg border border-line bg-canvas/80 p-3"><p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-faint">Visual output</p>{preview}</div> : null}
        {value != null ? <pre className="overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] leading-6 text-mist"><code>{typeof value === 'string' ? value : String(value)}</code></pre> : null}
      </div>
    </div>
  );
}

type TabItem = { label: string; code: string; output?: string; preview?: ReactNode; note?: string; filename?: string };

export function Tabs({ items }: { items: TabItem[] }) {
  const [i, setI] = useState(0);
  const it = items[i] ?? items[0];
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex flex-wrap gap-2">
        {items.map((x, idx) => (
          <button key={x.label} type="button" onClick={() => setI(idx)} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition-all duration-200", idx === i ? "border-sky/30 bg-sky/10 text-sky shadow-sm" : "border-line bg-canvas text-muted hover:-translate-y-0.5 hover:border-line-strong hover:text-mist")}>{x.label}</button>
        ))}
      </div>
      <div key={i} className="mt-3 space-y-3">
        <CodeBlock code={it?.code ?? ""} filename={it?.filename ?? "example.tsx"} label="Code" />
        {(it?.output || it?.preview) ? <OutputBlock value={it?.output} preview={it?.preview} /> : null}
      </div>
      {it?.note ? <div className="mt-3 flex items-start gap-2 text-[15px] leading-7 text-muted"><Lightbulb className="mt-1 size-4 shrink-0 text-sky" /><p>{it.note}</p></div> : null}
    </div>
  );
}

function diffLineMap(oldCode: string, newCode: string) {
  const a = (oldCode || "").replace(/\n$/, "").split("\n");
  const b = (newCode || "").replace(/\n$/, "").split("\n");
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

type Panel = { title: string; code: string; tone?: "bad" | "good" | "neutral"; note?: string; output?: string; preview?: ReactNode };

export function ComparePanels({ left, right }: { left: Panel; right: Panel }) {
  const diffs = useMemo(() => diffLineMap(left.code, right.code), [left.code, right.code]);
  const side = (p: Panel, which: 'l'|'r') => {
    const good = p.tone === "good";
    const bad = p.tone === "bad";
    return (
      <div className={cn("rounded-xl border p-3", good ? "border-lime/20 bg-lime/[0.03]" : bad ? "border-rose-400/20 bg-rose-400/[0.03]" : "border-sky/20 bg-sky/[0.03]")}>
        <div className={cn("mb-2 flex items-center gap-2", good ? "text-lime" : bad ? "text-rose-300" : "text-sky")}>{good ? <CheckCircle2 className="size-4" /> : bad ? <XCircle className="size-4" /> : <GitCompareArrows className="size-4" />}<p className="text-[14px] font-semibold">{p.title}</p></div>
        <CodeBlock code={p.code} filename={good ? "better.tsx" : bad ? "problem.tsx" : "compare.tsx"} label={good ? "Better" : bad ? "Problem" : "Compare"} diffLines={which==='l'?diffs.left:diffs.right} />
        {(p.output || p.preview) ? <div className="mt-3"><OutputBlock title={good ? "Output" : "Result"} value={p.output} preview={p.preview} /></div> : null}
        {p.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{p.note}</p> : null}
      </div>
    );
  };
  return (
    <div className="mt-5">
      <div className="mb-3 flex items-center gap-2 text-faint"><GitCompareArrows className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.16em]">Difference highlighted</p></div>
      <div className="grid gap-4 md:grid-cols-2">{side(left,'l')}{side(right,'r')}</div>
    </div>
  );
}

export function RuleGrid({ rules }: { rules: { title: string; body: string; icon?: ReactNode }[] }) {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {rules.map((r) => (
        <div key={r.title} className="group rounded-xl border border-line bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/25 hover:shadow-sm">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-md border border-sky/20 bg-sky/[0.07] text-sky transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{r.icon ?? <Layers className="size-3.5" aria-hidden />}</span>
            <p className="text-[15px] font-semibold text-mist">{r.title}</p>
          </div>
          <p className="mt-2 text-[15px] leading-6 text-muted">{r.body}</p>
        </div>
      ))}
    </div>
  );
}

export function SyntaxMatrix({ rows }: { rows: { syntax: string; example: string; note: string; valid?: boolean; output?: string }[] }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-line bg-surface">
      <div className="grid grid-cols-[0.9fr_1.1fr_1fr_1.2fr] gap-px bg-line text-[13px]">
        <div className="bg-raised/70 px-3 py-2 font-semibold text-mist">Syntax / Pattern</div>
        <div className="bg-raised/70 px-3 py-2 font-semibold text-mist">Example</div>
        <div className="bg-raised/70 px-3 py-2 font-semibold text-mist">Output / what happens</div>
        <div className="bg-raised/70 px-3 py-2 font-semibold text-mist">Notes</div>
      </div>
      <div className="divide-y divide-line">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[0.9fr_1.1fr_1fr_1.2fr] gap-px bg-line transition-colors hover:bg-sky/10">
            <div className="bg-surface px-3 py-2.5 font-mono text-[12px] text-mist flex items-start gap-1.5">{r.valid === false ? <X className="mt-0.5 size-3.5 shrink-0 text-coral" /> : r.valid === true ? <Check className="mt-0.5 size-3.5 shrink-0 text-success" /> : null}<span>{r.syntax}</span></div>
            <div className="bg-surface px-3 py-2.5 font-mono text-[12px] text-muted whitespace-pre-wrap">{r.example}</div>
            <div className="bg-surface px-3 py-2.5">{r.output ? <pre className="whitespace-pre-wrap rounded-md border border-sky/20 bg-sky/[0.04] p-2 font-mono text-[12px] leading-5 text-mist"><code>{r.output}</code></pre> : <span className="text-[12px] text-faint">See example → result depends on data/props above</span>}</div>
            <div className="bg-surface px-3 py-2.5 text-[13px] leading-5 text-muted">{r.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export function JSXTransformDemo({ jsx, classic, automatic }: { jsx: string; classic: string; automatic: string }) {
  const [mode, setMode] = useState<"jsx" | "classic" | "auto">("jsx");
  const code = mode === "jsx" ? jsx : mode === "classic" ? classic : automatic;
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">JSX compilation pipeline</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {([
          ["jsx", "JSX source", <Code2 key="c" className="size-3.5" />],
          ["classic", "Classic runtime", <Layers key="l" className="size-3.5" />],
          ["auto", "Automatic runtime", <Wand2 key="a" className="size-3.5" />],
        ] as const).map(([v, label, icon]) => (
          <button key={v} type="button" onClick={() => setMode(v)} className={cn("inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[13px] transition-all", mode === v ? "border-sky/30 bg-sky/10 text-sky shadow-sm" : "border-line bg-canvas text-muted hover:text-mist")}>{icon}{label}</button>
        ))}
      </div>
      <div key={mode} className="mt-3"><CodeBlock code={code} filename={mode==='jsx'?'App.tsx':'output.js'} label={mode==='jsx'?'Code':'Transformed output'} /></div>
      <p className="mt-2 text-[15px] leading-6 text-muted">Browsers don&apos;t understand JSX directly — build tools transform it into JavaScript that React can work with.</p>
    </div>
  );
}

export function ExpressionPlayground() {
  const [name, setName] = useState("Aayush");
  const [count, setCount] = useState(2);
  const total = count * 499;
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Interactive expression preview (code → visual output)</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="text-[13px] text-muted">Name<input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 h-9 w-full rounded-lg border border-line bg-canvas px-3 text-[14px] text-mist outline-none transition focus:border-sky/40 focus:ring-2 focus:ring-sky/10" /></label>
        <label className="text-[13px] text-muted">Quantity: <span className="font-mono text-mist">{count}</span><input type="range" min={1} max={10} value={count} onChange={(e) => setCount(Number(e.target.value))} className="mt-2 w-full accent-sky" /></label>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <CodeBlock code={`<h1>Hello, {name}</h1>\n<p>Total: {count * 499}</p>\n\n// values:\nname = "${name}"\ncount = ${count}`} filename="snippet.tsx" label="Code" />
        <div className="rounded-xl border border-sky/20 bg-sky/[0.04] p-3"><p className="font-mono text-[12px] text-sky">Visual output</p><div className="mt-2 rounded-lg border border-line bg-canvas/80 p-4"><p className="text-lg font-semibold text-mist">Hello, {name || "—"}</p><p className="mt-1 text-[15px] text-muted">Total: ₹{total.toLocaleString("en-IN")}</p></div></div>
      </div>
      <p className="mt-2 text-[13px] text-faint">Curly braces evaluate expressions and insert values into the UI.</p>
    </div>
  );
}

export function RenderValueMatrix() {
  const [vals, setVals] = useState({ zero: true, empty: false, bool: false, nil: true, str: true });
  const items = [
    { k: "str", label: '"Hi" / 42', render: "Renders text", visible: true },
    { k: "zero", label: "0", render: "Renders 0 (visible)", visible: true },
    { k: "empty", label: '""', render: "Empty text", visible: false },
    { k: "bool", label: "true / false", render: "Nothing rendered", visible: false },
    { k: "nil", label: "null / undefined", render: "Nothing rendered", visible: false },
  ] as const;
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">What renders as a child? (code → visual output)</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <button key={it.k} type="button" onClick={() => setVals((v) => ({ ...v, [it.k]: !v[it.k as keyof typeof v] }))} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition-all", vals[it.k as keyof typeof vals] ? "border-sky/30 bg-sky/10 text-sky" : "border-line bg-canvas text-muted hover:text-mist")}>{it.label}</button>
        ))}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.filter((it) => vals[it.k as keyof typeof vals]).map((it) => (
          <div key={it.k} className="rounded-lg border border-line bg-canvas/70 px-3 py-2.5">
            <div className="flex items-center justify-between"><span className="font-mono text-[13px] text-mist">{it.label}</span>{it.visible ? <span className="inline-flex items-center gap-1 text-[12px] text-success"><Eye className="size-3" />visible</span> : <span className="inline-flex items-center gap-1 text-[12px] text-faint"><EyeOff className="size-3" />no output</span>}</div>
            <p className="mt-1 text-[14px] text-muted">{it.render}</p>
            <div className="mt-2 rounded border border-line bg-surface px-2 py-1 text-[13px] text-mist">Output: {it.k==='str'?'Hi':it.k==='zero'?'0':it.k==='empty'?'(empty)':it.k==='bool'?'(nothing)': '(nothing)'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ConditionalPlayground() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Conditional rendering (code → visual output)</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => setLoggedIn((v) => !v)} className={cn("inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[13px] transition", loggedIn ? "border-success/30 bg-success/10 text-success" : "border-line bg-canvas text-muted")}>{loggedIn ? <ToggleRight className="size-4" /> : <ToggleLeft className="size-4" />}isLoggedIn: {String(loggedIn)}</button>
        <button type="button" onClick={() => setCount((c) => (c === 0 ? 3 : 0))} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition", count > 0 ? "border-sky/30 bg-sky/10 text-sky" : "border-coral/30 bg-coral/10 text-coral")}>notifications: {count}</button>
        <button type="button" onClick={() => setName((n) => (n ? "" : "Asha"))} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition", name ? "border-lime/30 bg-lime/10 text-lime" : "border-line bg-canvas text-muted")}>username: {name ? `"${name}"` : '""'}</button>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg border border-line bg-canvas/70 p-3"><p className="font-mono text-[12px] text-faint">Ternary</p><p className="mt-1 text-[15px] font-medium text-mist">{loggedIn ? "Welcome back" : "Please login"}</p></div>
        <div className={cn("rounded-lg border p-3", count > 0 ? "border-sky/25 bg-sky/[0.05]" : "border-coral/25 bg-coral/[0.04]")}>
          <p className="font-mono text-[12px] text-faint">{"count && <Badge/>"} vs {"count > 0 && <Badge/>"}</p>
          <p className="mt-1 text-[14px] text-muted">Naive output: <span className="font-mono text-mist">{String(count && "badge")}</span></p>
          <p className="text-[14px] text-muted">Safe output: <span className="font-mono text-mist">{String(count > 0 && "badge")}</span></p>
        </div>
        <div className="rounded-lg border border-line bg-canvas/70 p-3 sm:col-span-2"><p className="font-mono text-[12px] text-faint">{"|| vs ??"}</p><p className="mt-1 text-[14px] text-muted">username || &quot;Guest&quot; → <span className="font-mono text-mist">{name || "Guest"}</span> · username ?? &quot;Guest&quot; → <span className="font-mono text-mist">{name === "" ? `"" (kept)` : name || "(nullish→Guest)"}</span></p></div>
      </div>
    </div>
  );
}

export function KeyVisualizer() {
  const [items, setItems] = useState([{ id: 1, name: "Asha" }, { id: 2, name: "Ravi" }, { id: 3, name: "Mina" }]);
  const addFront = () => setItems((cur) => [{ id: Date.now() % 10000, name: "New" }, ...cur]);
  const shuffle = () => setItems((cur) => [...cur].sort(() => Math.random() - 0.5));
  const remove = (id: number) => setItems((cur) => cur.filter((x) => x.id !== id));
  const reset = () => setItems([{ id: 1, name: "Asha" }, { id: 2, name: "Ravi" }, { id: 3, name: "Mina" }]);
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Keys & identity (visual output)</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={addFront} className="rounded-lg border border-sky/30 bg-sky/10 px-3 py-1.5 text-[13px] text-sky">Insert at start</button>
        <button type="button" onClick={shuffle} className="rounded-lg border border-line bg-canvas px-3 py-1.5 text-[13px] text-mist">Reorder</button>
        <button type="button" onClick={reset} className="inline-flex items-center gap-1 rounded-lg border border-line bg-canvas px-3 py-1.5 text-[13px] text-muted"><RefreshCcw className="size-3" />Reset</button>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {items.map((it, i) => (
          <div key={it.id} className="rounded-lg border border-line bg-canvas/70 p-3 transition-all hover:border-sky/25">
            <div className="flex items-center justify-between"><p className="font-mono text-[12px] text-faint">index: {i}</p><button type="button" onClick={() => remove(it.id)} className="text-[12px] text-faint hover:text-coral">remove</button></div>
            <p className="mt-0.5 font-mono text-[12px] text-sky">key: {it.id}</p>
            <p className="mt-1 text-[15px] font-medium text-mist">{it.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NestingDepthMeter({ depth = 4 }: { depth?: number }) {
  const [level, setLevel] = useState(Math.min(depth, 4));
  const labels = ["Flat & clear", "Acceptable", "Getting deep", "Hard to maintain", "Refactor now"];
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Nesting depth signal</p>
      <input type="range" min={0} max={4} value={level} onChange={(e) => setLevel(Number(e.target.value))} className="mt-3 w-full accent-sky" />
      <div className="mt-3 flex gap-1.5">{Array.from({ length: 5 }).map((_, i) => (<div key={i} className={cn("h-2 flex-1 rounded-full transition-all", i <= level ? (level <= 1 ? "bg-success" : level === 2 ? "bg-sky" : level === 3 ? "bg-coral/70" : "bg-coral") : "bg-line")} />))}</div>
      <p className={cn("mt-2 text-[15px] font-medium", level <= 1 ? "text-success" : level === 2 ? "text-sky" : "text-coral")}>{labels[level]}</p>
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  const [done, setDone] = useState<Record<number, boolean>>({});
  const count = Object.values(done).filter(Boolean).length;
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex items-center justify-between"><p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Quick self-check</p><span className="text-[13px] text-faint">{count}/{items.length}</span></div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((it, i) => (
          <button key={it} type="button" onClick={() => setDone((d) => ({ ...d, [i]: !d[i] }))} className={cn("flex items-start gap-2 rounded-lg border px-3 py-2 text-left text-[14px] transition-all", done[i] ? "border-success/25 bg-success/[0.05] text-mist" : "border-line bg-canvas/60 text-muted hover:border-line-strong")}>
            <span className={cn("mt-0.5 grid size-4 shrink-0 place-items-center rounded border", done[i] ? "border-success/40 bg-success/15 text-success" : "border-line text-transparent")}><Check className="size-3" /></span>
            <span>{it}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function StylePlayground() {
  const [size, setSize] = useState(18);
  const [rounded, setRounded] = useState(true);
  const [accent, setAccent] = useState(true);
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Style object (code → visual output)</p>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-muted">
        <label className="flex items-center gap-2">fontSize <input type="range" min={12} max={28} value={size} onChange={(e) => setSize(+e.target.value)} className="w-28 accent-sky" /><span className="font-mono text-mist">{size}</span></label>
        <button type="button" onClick={() => setRounded((v) => !v)} className={cn("rounded-lg border px-2.5 py-1", rounded ? "border-sky/30 bg-sky/10 text-sky" : "border-line bg-canvas")}>borderRadius</button>
        <button type="button" onClick={() => setAccent((v) => !v)} className={cn("rounded-lg border px-2.5 py-1", accent ? "border-lime/30 bg-lime/10 text-lime" : "border-line bg-canvas")}>accent</button>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <CodeBlock code={`style={{\n  fontSize: ${size},\n  borderRadius: ${rounded ? 12 : 0},\n  color: "${accent ? "#2149e8" : "#111714"}"\n}}`} filename="style.tsx" label="Code" />
        <div className="rounded-xl border border-sky/20 bg-sky/[0.04] p-3"><p className="font-mono text-[12px] text-sky">Visual output</p><div className="mt-2 grid place-items-center rounded-lg border border-line bg-canvas/70 p-4"><span style={{ fontSize: size, borderRadius: rounded ? 12 : 0, color: accent ? "#2149e8" : "#111714", padding: "6px 10px", border: "1px solid var(--color-line)" }} className="font-semibold">Live preview</span></div></div>
      </div>
    </div>
  );
}

export function SpreadOrderDemo() {
  const [after, setAfter] = useState(true);
  const base = { disabled: true, className: "base" };
  const finalDisabled = after ? false : base.disabled;
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Spread order (last wins)</p>
      <button type="button" onClick={() => setAfter((v) => !v)} className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-sky/30 bg-sky/10 px-3 py-1.5 text-[13px] text-sky"><Split className="size-3.5" />{after ? "Explicit prop AFTER spread" : "Explicit prop BEFORE spread"}</button>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <CodeBlock code={after ? `<button {...base} disabled={false} />` : `<button disabled={false} {...base} />`} filename="spread.tsx" label="Code" />
        <div className={cn("rounded-xl border p-3", finalDisabled ? "border-coral/25 bg-coral/[0.05]" : "border-success/25 bg-success/[0.05]")}><p className="font-mono text-[12px] text-faint">Visual output</p><p className="mt-2 text-[14px] text-muted">Final <span className="font-mono">disabled</span>: <span className={cn("font-mono font-semibold", finalDisabled ? "text-coral" : "text-success")}>{String(finalDisabled)}</span></p></div>
      </div>
    </div>
  );
}

export function EventFlowDemo() {
  const [log, setLog] = useState<string[]>([]);
  const push = (m: string) => setLog((l) => [m, ...l].slice(0, 4));
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Event bubbling (visual output)</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div onClick={() => push("Parent clicked")} className="cursor-pointer rounded-xl border border-sky/25 bg-sky/[0.05] p-4 text-center transition hover:bg-sky/[0.08]">
          <p className="text-[13px] text-sky">Parent (onClick)</p>
          <button type="button" onClick={(e) => { e.stopPropagation(); push("Child clicked (propagation stopped)"); }} className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] text-mist hover:border-coral/30 hover:text-coral"><MousePointerClick className="size-3.5" />Child: stop</button>
          <button type="button" onClick={() => push("Child clicked (bubbles)")} className="ml-2 mt-2 inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] text-mist">Child: bubble</button>
        </div>
        <div className="rounded-lg border border-line bg-canvas/70 p-3">
          <p className="text-[13px] font-medium text-mist">Output log</p>
          <div className="mt-2 space-y-1.5">{log.length ? log.map((l, i) => <p key={i} className="rounded-md border border-line bg-surface px-2 py-1 text-[13px] text-muted">{l}</p>) : <p className="text-[13px] text-faint">Click buttons to observe propagation.</p>}</div>
        </div>
      </div>
    </div>
  );
}

export function ChildTypesDemo() {
  const [show, setShow] = useState({ str: true, num: true, el: true, arr: false, nil: false });
  const toggles = [["str","string"],["num","number"],["el","element"],["arr","array"],["nil","null/bool"]] as const;
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Children types (visual output)</p>
      <div className="mt-3 flex flex-wrap gap-2">{toggles.map(([k,l]) => <button key={k} type="button" onClick={() => setShow(s => ({...s,[k]: !s[k as keyof typeof s]}))} className={cn("rounded-lg border px-2.5 py-1 text-[13px] transition", show[k as keyof typeof show] ? "border-sky/30 bg-sky/10 text-sky" : "border-line bg-canvas text-muted")}>{l}</button>)}</div>
      <div className="mt-3 rounded-lg border border-dashed border-line bg-canvas/70 p-4 text-[15px] text-mist min-h-[3rem]">
        {show.str && <span>Hello </span>}
        {show.num && <span className="font-mono text-sky">42 </span>}
        {show.el && <strong className="text-lime">[element] </strong>}
        {show.arr && <span>{["A","·","B"]} </span>}
        {show.nil && <span>{null}{false}{true}{undefined}</span>}
        {!show.str && !show.num && !show.el && !show.arr && <span className="text-faint">(empty / non-visible children)</span>}
      </div>
    </div>
  );
}

export function Flow({ steps }: { steps: string[] }) {
  return <AnimatedFlow steps={steps.map((s) => ({ label: s }))} />;
}
