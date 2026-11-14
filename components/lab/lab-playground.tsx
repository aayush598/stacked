"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, RotateCcw, Search, List, Code2, Eye } from "lucide-react";
import type { LabExample } from "@/lib/lab/types";
import { CodeEditor } from "./code-editor";
import { LivePreview } from "./live-preview";
import { cn } from "@/lib/utils";

export function LabPlayground({ examples, trackTitle, modules }: { examples: LabExample[]; trackTitle: string; modules: string[] }) {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(examples[0]?.id ?? "");
  const [code, setCode] = useState("");
  const [full, setFull] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const [mobileView, setMobileView] = useState<"split" | "code" | "visual">("split");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return examples;
    return examples.filter(e => [e.title, e.module, e.summary, e.tags?.join(" ")].join(" ").toLowerCase().includes(q));
  }, [examples, query]);

  const activeIndex = Math.max(0, filtered.findIndex(e => e.id === activeId));
  const active = filtered[activeIndex] ?? filtered[0] ?? examples[0];

  useEffect(() => {
    if (!active) return;
    const id = requestAnimationFrame(() => setCode(active.code));
    return () => cancelAnimationFrame(id);
  }, [active]);

  useEffect(() => {
    if (!full) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setFull(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [full]);

  function go(delta: number) {
    const i = activeIndex + delta;
    if (i >= 0 && i < filtered.length) setActiveId(filtered[i].id);
  }

  const byModule = modules.map(m => ({ module: m, items: filtered.filter(e => e.module === m) })).filter(g => g.items.length);
  const changed = active ? code !== active.code : false;

  const workspace = (
    <div className={cn("grid h-full min-h-0 gap-3", mobileView === "split" ? "lg:grid-cols-2" : "grid-cols-1")}>
      {(mobileView !== "visual") && (
        <div className="min-h-[360px] lg:min-h-0 lg:h-full flex flex-col">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[13px] font-semibold text-mist"><Code2 className="size-4 text-violet" />Code editor {changed && <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[11px] font-medium text-amber-600">edited (changes highlighted)</span>}</div>
            <button onClick={() => active && setCode(active.code)} className="inline-flex items-center gap-1 rounded border border-line px-2 py-1 text-[12px] text-muted hover:text-mist"><RotateCcw className="size-3" />Reset</button>
          </div>
          <div className="flex-1 min-h-0">
            <CodeEditor value={code} onChange={setCode} original={active?.code ?? ""} className="h-full" />
          </div>
        </div>
      )}
      {(mobileView !== "code") && (
        <div className="min-h-[360px] lg:min-h-0 lg:h-full flex flex-col">
          <div className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-mist"><Eye className="size-4 text-sky" />Visual output (live)</div>
          <div className="flex-1 min-h-0"><LivePreview code={code} /></div>
        </div>
      )}
    </div>
  );

  const header = (
    <div className="flex flex-col gap-2 border-b border-line bg-surface px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => go(-1)} disabled={activeIndex <= 0} className="rounded-md border border-line p-1.5 disabled:opacity-40 hover:bg-raised"><ChevronLeft className="size-4" /></button>
          <select value={active?.id ?? ""} onChange={e => setActiveId(e.target.value)} className="min-w-0 max-w-full flex-1 rounded-md border border-line bg-canvas px-2 py-1.5 text-[13px] font-medium text-mist sm:max-w-xl">
            {filtered.map(e => <option key={e.id} value={e.id}>{e.module} — {e.title}</option>)}
          </select>
          <button onClick={() => go(1)} disabled={activeIndex >= filtered.length - 1} className="rounded-md border border-line p-1.5 disabled:opacity-40 hover:bg-raised"><ChevronRight className="size-4" /></button>
          <span className="text-[12px] text-faint whitespace-nowrap">{activeIndex + 1}/{filtered.length || 0}</span>
        </div>
        {active && <p className="mt-1 text-[13px] leading-5 text-muted">{active.module}: <span className="font-medium text-mist">{active.title}</span> — {active.summary}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-lg border border-line p-0.5 text-[12px] lg:hidden">
          {(["split","code","visual"] as const).map(v => (
            <button key={v} onClick={() => setMobileView(v)} className={cn("rounded px-2 py-1 capitalize", mobileView===v?"bg-mist text-canvas":"text-muted")}>{v}</button>
          ))}
        </div>
        <button onClick={() => setSidebar(s=>!s)} className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1.5 text-[12px] hover:bg-raised"><List className="size-3.5" />List</button>
        <button onClick={() => setFull(f=>!f)} className="inline-flex items-center gap-1 rounded-md border border-line bg-mist px-2.5 py-1.5 text-[12px] font-semibold text-canvas hover:bg-lime">{full ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}{full ? "Exit" : "Fullscreen"}</button>
      </div>
    </div>
  );

  const list = sidebar && (
    <aside className={cn("overflow-hidden rounded-xl border border-line bg-surface", full ? "w-72 shrink-0 hidden xl:block" : "lg:sticky lg:top-20")}>
      <div className="border-b border-line p-2">
        <div className="relative"><Search className="pointer-events-none absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-faint" /><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search..." className="h-8 w-full rounded-md border border-line bg-canvas pl-7 pr-2 text-[13px]" /></div>
      </div>
      <div className="max-h-[60vh] xl:max-h-[calc(100vh-10rem)] overflow-y-auto p-2">
        {byModule.map(({module, items}) => (
          <div key={module} className="mb-2">
            <p className="px-2 pb-1 font-mono text-[10px] uppercase tracking-wider text-faint">{module}</p>
            {items.map(e => (
              <button key={e.id} onClick={() => setActiveId(e.id)} className={cn("w-full rounded-md px-2 py-1.5 text-left text-[12px] leading-4", e.id===active?.id?"bg-lime/10 text-mist font-medium":"text-muted hover:bg-raised")}>{e.title}</button>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );

  if (full) {
    return (
      <div className="fixed inset-0 z-[80] flex flex-col bg-canvas">
        {header}
        <div className="flex min-h-0 flex-1 gap-3 p-3">
          {list}
          <div className="min-h-0 min-w-0 flex-1">{workspace}</div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-[96rem] px-3 pb-10 pt-5 sm:px-4 lg:px-6">
        <div className="mb-3 border-b border-line pb-3">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-lime">Assessment Prep Lab</p>
          <h1 className="text-2xl font-semibold tracking-[-0.04em] text-mist">{trackTitle}</h1>
          <p className="mt-1 max-w-3xl text-[14px] text-muted">Side-by-side code & live visual output. Edit code to see changes instantly (subtle diff highlighting). Use Fullscreen for fixed two-pane editor view. Switch via Next/Prev or dropdown.</p>
        </div>
        <div className={cn("grid items-start gap-3", sidebar ? "lg:grid-cols-[300px_minmax(0,1fr)]" : "grid-cols-1")}>
          {sidebar ? <div className="order-2 lg:order-1">{list}</div> : null}
          <div className="order-1 lg:order-2 min-w-0 overflow-hidden rounded-xl border border-line bg-surface">
            {header}
            <div className="p-3 sm:p-4 lg:h-[72vh]">{workspace}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
