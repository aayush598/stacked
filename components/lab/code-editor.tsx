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

  return (
    <div className={cn("relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-lg border border-[#263029] bg-[#0c1110]", className)}>
      <div className="flex min-h-0 flex-1 overflow-auto font-mono text-[13px] leading-6">
        <div className="sticky left-0 z-20 select-none border-r border-white/10 bg-[#0c1110] py-3 pl-2 pr-2 text-right text-[#55615a]">
          {lines.map((_, i) => {
            const m = marks[i] ?? "same";
            return (
              <div key={i} className={cn("h-6 px-1.5", m === "add" && "bg-emerald-500/10 text-emerald-400", m === "change" && "bg-amber-500/10 text-amber-400")}>
                {i + 1}
              </div>
            );
          })}
        </div>
        <div className="relative min-w-0 flex-1">
          <pre
            aria-hidden
            className="pointer-events-none m-0 min-h-full whitespace-pre py-3 pl-3 pr-3"
            style={{ minHeight: Math.max(320, lines.length * 24 + 24) }}
          >
            <code>
              {lines.map((line, i) => {
                const m = marks[i] ?? "same";
                return (
                  <div key={i} className={cn("h-6 min-w-full w-max pr-4 rounded-[2px]", m === "add" && "bg-emerald-500/[0.07]", m === "change" && "bg-amber-500/[0.06]")}>
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
            className="absolute inset-0 z-[1] h-full w-full resize-none overflow-hidden bg-transparent py-3 pl-3 pr-3 font-mono text-[13px] leading-6 text-transparent caret-white outline-none selection:bg-sky-500/30"
            style={{ minHeight: Math.max(320, lines.length * 24 + 24), tabSize: 2, WebkitTextFillColor: "transparent" }}
          />
        </div>
      </div>
      <div className="border-t border-white/10 px-3 py-1.5 text-[11px] text-[#9aa59f] flex items-center justify-between gap-2">
        <span>Editable code · syntax highlighted · live preview updates</span>
        {changed ? <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-300/90">your changes highlighted (subtle)</span> : <span className="text-[#55615a]">original</span>}
      </div>
    </div>
  );
}
