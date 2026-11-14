"use client";

import { useMemo, useRef } from "react";
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
  const preRef = useRef<HTMLPreElement>(null);

  function syncScroll(el: HTMLTextAreaElement) {
    const pre = preRef.current;
    if (!pre) return;
    pre.scrollTop = el.scrollTop;
    pre.scrollLeft = el.scrollLeft;
  }

  return (
    <div className={cn("relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-lg border border-[#263029] bg-[#0c1110]", className)}>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <pre
          ref={preRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 m-0 overflow-hidden whitespace-pre py-3 pl-[44px] pr-6 font-mono text-[13px] leading-6 text-slate-100 [tab-size:2]"
        >
          <code className="block">
            {lines.map((line, i) => {
              const m = marks[i] ?? "same";
              return (
                <div
                  key={i}
                  className={cn(
                    "min-w-full whitespace-pre",
                    m === "add" && "bg-emerald-500/[0.07]",
                    m === "change" && "bg-amber-500/[0.06]"
                  )}
                >
                  <span
                    className={cn(
                      "sticky left-0 -ml-[44px] mr-3 inline-block w-8 select-none bg-[#0c1110] pr-1 text-right text-[#55615a]",
                      m === "add" && "text-emerald-400",
                      m === "change" && "text-amber-400"
                    )}
                  >
                    {i + 1}
                  </span>
                  {line.length ? highlightLine(line, i) : "\u00a0"}
                </div>
              );
            })}
          </code>
        </pre>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onScroll={(e) => syncScroll(e.currentTarget)}
          spellCheck={false}
          wrap="off"
          autoCapitalize="off"
          autoCorrect="off"
          className="absolute inset-0 h-full w-full resize-none overflow-auto whitespace-pre bg-transparent py-3 pl-[44px] pr-6 font-mono text-[13px] leading-6 text-transparent caret-white outline-none selection:bg-sky-500/30 [tab-size:2] [WebkitTextFillColor:transparent]"
        />
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-white/10 px-3 py-1.5 text-[11px] text-[#9aa59f]">
        <span>Editable code · syntax highlighted · live preview updates</span>
        {changed ? (
          <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-300/90">your changes highlighted (subtle)</span>
        ) : (
          <span className="text-[#55615a]">original</span>
        )}
      </div>
    </div>
  );
}
