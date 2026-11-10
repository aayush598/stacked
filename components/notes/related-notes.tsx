"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Link2 } from "lucide-react";
import { findRelatedNotes } from "@/lib/notes/search";
import { cn } from "@/lib/utils";

export function RelatedNotes({ sectionId }: { sectionId: string }) {
  const related = useMemo(() => findRelatedNotes(sectionId, 8), [sectionId]);
  if (related.length === 0) return null;

  return (
    <section className="mt-10 border-t border-line pt-6">
      <div className="flex items-center gap-2">
        <Link2 className="size-4 text-lime" aria-hidden />
        <h2 className="text-lg font-semibold tracking-[-0.02em] text-mist">Related topics in other sections</h2>
      </div>
      <p className="mt-1.5 text-[15px] leading-6 text-muted">
        This topic also appears or connects to concepts explained elsewhere. Jump to these sections to understand it in more depth.
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {related.map((item) => (
          <Link
            key={item.section.id}
            href={item.href}
            className="group flex items-start gap-3 rounded-lg border border-line bg-surface px-3 py-3 transition hover:border-line-strong hover:bg-raised/60"
          >
            <span className={cn("mt-0.5 rounded-full border px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.1em]", item.course === "react" ? "border-sky/20 bg-sky/[0.06] text-sky" : item.course === "bootstrap" ? "border-violet/20 bg-violet/[0.06] text-violet" : "border-lime/20 bg-lime/[0.06] text-lime")}>
              {item.course === "react" ? "React" : item.course === "bootstrap" ? "BS" : "TS"}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[14px] font-medium text-mist">{item.section.title}</span>
              <span className="mt-0.5 block truncate text-[12px] text-faint">{item.phase.title} · {item.module.title}</span>
              {item.section.topics.length ? <span className="mt-0.5 block truncate text-[12px] text-muted">Covers: {item.section.topics.slice(0, 3).join(", ")}</span> : null}
            </span>
            <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-faint transition group-hover:text-mist" aria-hidden />
          </Link>
        ))}
      </div>
    </section>
  );
}
