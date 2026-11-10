"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Search, X } from "lucide-react";
import { searchAllNotes } from "@/lib/notes/search";
import { cn } from "@/lib/utils";

function courseLabel(course: string) {
  if (course === "react") return "React";
  if (course === "bootstrap") return "Bootstrap";
  return "TypeScript";
}

export function NotesGlobalSearch({ className, placeholder = "Search all notes (React, TypeScript, Bootstrap)…" }: { className?: string; placeholder?: string }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => (query.trim().length < 2 ? [] : searchAllNotes(query, 12)), [query]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function updateQuery(next: string) {
    setQuery(next);
    setActive(0);
    setOpen(next.trim().length >= 2);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => (a + 1) % results.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => (a - 1 + results.length) % results.length); }
    else if (e.key === "Escape") setOpen(false);
    else if (e.key === "Enter") {
      const item = results[active];
      if (item) { window.location.href = item.href; setOpen(false); }
    }
  }

  return (
    <div ref={rootRef} className={cn("relative w-full", className)}>
      <label className="relative block">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-faint" aria-hidden />
        <input
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
          onFocus={() => { if (query.trim().length >= 2) setOpen(true); }}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="h-10 w-full rounded-lg border border-line bg-surface pl-9 pr-9 text-[15px] text-mist outline-none transition placeholder:text-faint focus:border-line-strong focus:ring-2 focus:ring-lime/10"
          aria-label="Search all notes"
        />
        {query ? (
          <button type="button" onClick={() => { setQuery(""); setActive(0); setOpen(false); }} className="absolute right-2.5 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded text-faint transition hover:bg-raised hover:text-mist" aria-label="Clear search">
            <X className="size-3.5" aria-hidden />
          </button>
        ) : null}
      </label>

      {open ? (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-line bg-surface shadow-lg">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-[14px] text-faint">No matching sections found across React and TypeScript.</div>
          ) : (
            <ul className="max-h-[24rem] overflow-y-auto py-1">
              {results.map((item, i) => (
                <li key={item.section.id}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn("flex items-start gap-3 px-3 py-2.5 transition hover:bg-raised/70", i === active && "bg-raised/70")}
                  >
                    <span className={cn("mt-0.5 grid size-7 shrink-0 place-items-center rounded-md border", item.course === "react" ? "border-sky/20 bg-sky/[0.08] text-sky" : item.course === "bootstrap" ? "border-violet/20 bg-violet/[0.08] text-violet" : "border-lime/20 bg-lime/[0.08] text-lime")}> 
                      <BookOpen className="size-3.5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="truncate text-[14px] font-medium text-mist">{item.section.title}</span>
                        <span className={cn("rounded-full border px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.1em]", item.course === "react" ? "border-sky/20 text-sky" : item.course === "bootstrap" ? "border-violet/20 text-violet" : "border-lime/20 text-lime")}>{courseLabel(item.course)}</span>
                      </span>
                      <span className="mt-0.5 block truncate text-[12px] text-faint">{item.phase.title} · {item.module.title}</span>
                      {item.section.topics.length ? <span className="mt-0.5 block truncate text-[12px] text-muted">{item.section.topics.slice(0, 4).join(" · ")}</span> : null}
                    </span>
                    <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-faint" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="border-t border-line px-3 py-2 text-[12px] text-faint">Searching across all React, TypeScript & Bootstrap sections</div>
        </div>
      ) : null}
    </div>
  );
}
