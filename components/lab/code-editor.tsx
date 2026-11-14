"use client";

import { useMemo } from "react";
import { diffLines } from "@/lib/lab/diff";
import { highlightLine } from "@/components/ui/code-block";
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
  const minHeight = Math.max(320, lines.length * 24 + 24);

  return (
    <div className={cn("relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-lg border border-[#263029] bg-[#0c1110]", className)}>
      <div className="flex min-h-0 flex-1 overflow-auto">
        <div className="sticky left-0 z-20 shrink-0 select-none border-r border-white/10 bg-[#0c1110] py-3 pl-2 pr-2 text-right font-mono text-[13px] leading-6 text-[#55615a]">
          {lines.map((_, i) => {
            const m = marks[i] ?? "same";
            return (
              <div key={i} className={cn("h-6 px-1.5", m === "add" && "bg-emerald-500/10 text-emerald-400", m === "change" && "bg-amber-500/10 text-amber-400")}>
                {i + 1}
              </div>
            );
          })}
        </div>
        <div className="relative min-h-full min-w-0 flex-1">
          <div className="grid min-h-full w-max min-w-full" style={{ minHeight }}>
            <pre
              aria-hidden
              className="pointer-events-none col-start-1 row-start-1 m-0 whitespace-pre py-3 pl-3 pr-6 font-mono text-[13px] leading-6 text-slate-100 [tab-size:2]"
            >
              <code className="block">
                {lines.map((line, i) => {
                  const m = marks[i] ?? "same";
                  return (
                    <div key={i} className={cn("h-6 min-w-full rounded-[2px]", m === "add" && "bg-emerald-500/[0.07]", m === "change" && "bg-amber-500/[0.06]")}>
                      {line.length ? highlightLine(line, i) : <span>&nbsp;</span>}
                    </div>
                  );
                })}
              </code>
            </pre>
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              spellCheck={false}
              wrap="off"
              className="col-start-1 row-start-1 z-[1] h-full w-full resize-none overflow-hidden whitespace-pre bg-transparent py-3 pl-3 pr-6 font-mono text-[13px] leading-6 text-transparent caret-white outline-none selection:bg-sky-500/30 [tab-size:2] [WebkitTextFillColor:transparent]"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-white/10 px-3 py-1.5 text-[11px] text-[#9aa59f]">
        <span>Editable code · syntax highlighted · live preview updates</span>
        {changed ? <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-300/90">your changes highlighted (subtle)</span> : <span className="text-[#55615a]">original</span>}
      </div>
    </div>
  );
}
