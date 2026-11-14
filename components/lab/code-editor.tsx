"use client";

import { useMemo } from "react";
import { diffLines } from "@/lib/lab/diff";
import { cn } from "@/lib/utils";

export function CodeEditor({
  value,
  onChange,
  original,
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  original: string;
  className?: string;
}) {
  const marks = useMemo(() => diffLines(original, value), [original, value]);
  const lines = value.split("\n");
  const changed = value !== original;

  return (
    <div className={cn("relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-lg border border-[#263029] bg-[#0c1110]", className)}>
      <div className="flex min-h-0 flex-1 overflow-auto font-mono text-[13px] leading-6">
        <div className="sticky left-0 z-10 select-none border-r border-white/10 bg-[#0c1110] py-3 pl-2 pr-2 text-right text-[#55615a]">
          {lines.map((_, i) => {
            const m = marks[i] ?? "same";
            return (
              <div key={i} className={cn("px-1.5", m === "add" && "bg-emerald-500/10 text-emerald-400", m === "change" && "bg-amber-500/10 text-amber-400")}>
                {i + 1}
              </div>
            );
          })}
        </div>
        <div className="relative min-w-0 flex-1">
          <div aria-hidden className="pointer-events-none absolute inset-0 py-3 pl-3 pr-3">
            {lines.map((_, i) => {
              const m = marks[i] ?? "same";
              return <div key={i} className={cn("h-6 rounded-[2px]", m === "add" && "bg-emerald-500/[0.07]", m === "change" && "bg-amber-500/[0.06]")} />;
            })}
          </div>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            spellCheck={false}
            wrap="off"
            className="relative z-[1] h-full w-full resize-none bg-transparent py-3 pl-3 pr-3 text-slate-100 caret-white outline-none"
            style={{ minHeight: Math.max(320, lines.length * 24 + 24), tabSize: 2 }}
          />
        </div>
      </div>
      <div className="border-t border-white/10 px-3 py-1.5 text-[11px] text-[#9aa59f] flex items-center justify-between gap-2">
        <span>Editable code · live preview updates on change</span>
        {changed ? <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-300/90">diff highlighted (subtle)</span> : <span className="text-[#55615a]">original</span>}
      </div>
    </div>
  );
}
