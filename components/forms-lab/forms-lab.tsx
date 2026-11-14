"use client";

import { useMemo, useState, useTransition } from "react";
import { Search, PanelLeftClose, PanelLeftOpen, Code2, Eye } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";
import { formExamples, formModules } from "./catalog";

export function FormsLab() {
  const [activeId, setActiveId] = useState(formExamples[0].id);
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [view, setView] = useState<"split" | "visual" | "code">("split");
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return formExamples;
    return formExamples.filter((e) =>
      [e.title, e.module, e.what, e.id].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  const active = formExamples.find((e) => e.id === activeId) ?? formExamples[0];
  const ActiveComp = active.Component;

  function select(id: string) {
    if (id === activeId) return;
    startTransition(() => setActiveId(id));
  }

  const byModule = useMemo(() => {
    return formModules
      .map((m) => ({ module: m, items: filtered.filter((e) => e.module === m) }))
      .filter((g) => g.items.length);
  }, [filtered]);

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-[96rem] px-3 pb-10 pt-5 sm:px-4 lg:px-6">
        <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-lime">Assessment Prep</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-mist sm:text-3xl">Forms Lab — React · TypeScript · Bootstrap</h1>
            <p className="mt-1.5 max-w-3xl text-[14px] leading-6 text-muted">Learn by seeing: <strong>component visual output</strong> and <strong>complete code</strong> side by side. Switch components fast and practice writing forms for your assessment.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-lg border border-line bg-surface p-0.5 text-[13px]">
              {(["split","visual","code"] as const).map((v) => (
                <button key={v} onClick={() => setView(v)} className={cn("rounded-md px-2.5 py-1.5 capitalize transition", view===v?"bg-mist text-canvas":"text-muted hover:text-mist")}>
                  {v === "split" ? "Side by side" : v === "visual" ? "Visual" : "Code"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <button type="button" onClick={() => setSidebarOpen(v=>!v)} className="inline-flex h-8 items-center gap-2 rounded-lg border border-line bg-surface px-2.5 text-[13px] font-medium text-mist hover:bg-raised" aria-expanded={sidebarOpen}>
            {sidebarOpen ? <PanelLeftClose className="size-3.5" /> : <PanelLeftOpen className="size-3.5" />}
            {sidebarOpen ? "Hide list" : "Show components"}
          </button>
          <span className="text-[12px] text-faint">{filtered.length} components</span>
        </div>

        <div className={cn("mt-3 grid items-start gap-3", sidebarOpen ? "lg:grid-cols-[320px_minmax(0,1fr)]" : "grid-cols-1")}> 
          {sidebarOpen ? (
            <aside className="overflow-hidden rounded-xl border border-line bg-surface lg:sticky lg:top-20">
              <div className="border-b border-line p-3">
                <label className="relative block">
                  <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-faint" />
                  <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search components..." className="h-9 w-full rounded-lg border border-line bg-canvas/60 pl-8 pr-3 text-[14px] text-mist outline-none focus:border-line-strong" />
                </label>
              </div>
              <div className="max-h-[calc(100vh-16rem)] overflow-y-auto p-2">
                {byModule.map(({ module, items }) => (
                  <div key={module} className="mb-3">
                    <p className="px-2 pb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{module}</p>
                    <div className="space-y-1">
                      {items.map((e) => (
                        <button key={e.id} onClick={() => select(e.id)} className={cn("w-full rounded-lg border px-2.5 py-2 text-left transition", e.id===activeId?"border-lime/30 bg-lime/[0.08]":"border-transparent hover:border-line hover:bg-raised/60")}>
                          <p className={cn("text-[13px] font-medium leading-5", e.id===activeId?"text-mist":"text-muted")}>{e.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                {byModule.length===0 ? <p className="p-4 text-center text-[14px] text-faint">No components match.</p> : null}
              </div>
            </aside>
          ) : null}

          <div className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <div className="border-b border-line bg-canvas/40 px-4 py-3 sm:px-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{active.module}</p>
                <h2 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-mist">{active.title}</h2>
                <p className="mt-1 text-[14px] leading-6 text-muted">{active.what}</p>
              </div>
              <div className={cn("grid gap-0", view==="split"?"lg:grid-cols-2": "grid-cols-1")}>
                {(view==="split" || view==="visual") ? (
                  <div className={cn("p-4 sm:p-5", view==="split" && "border-b border-line lg:border-b-0 lg:border-r")}>
                    <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-mist"><Eye className="size-4 text-sky" />Visual output (interactive)</div>
                    <div className={cn("rounded-xl border border-line bg-canvas/50 p-3 sm:p-4", isPending && "opacity-60")}> 
                      {isPending ? (
                        <div className="space-y-3 animate-pulse"><div className="h-8 w-1/2 rounded bg-raised"/><div className="h-10 w-full rounded bg-raised"/><div className="h-10 w-full rounded bg-raised"/><div className="h-10 w-28 rounded bg-raised"/></div>
                      ) : (
                        <ActiveComp />
                      )}
                    </div>
                  </div>
                ) : null}
                {(view==="split" || view==="code") ? (
                  <div className="p-4 sm:p-5">
                    <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-mist"><Code2 className="size-4 text-violet" />Complete code</div>
                    <CodeBlock code={active.code} filename={`${active.id}.tsx`} label="React + TS + Bootstrap" />
                  </div>
                ) : null}
              </div>
            </div>
            <p className="mt-3 text-[12px] text-faint">Tip: use <strong>Side by side</strong> on laptop, switch to <strong>Visual</strong> or <strong>Code</strong> on mobile for fastest scanning. Bootstrap 5 styles load in this section for realistic output.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
