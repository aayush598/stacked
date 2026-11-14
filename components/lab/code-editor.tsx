"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { diffLines } from "@/lib/lab/diff";
import { highlightLine } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

const FONT_FAMILY =
  'var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
const FONT_SIZE = 13;
const LINE_HEIGHT = 24;
const PAD_Y = 12;
const PAD_LEFT = 44;
const PAD_RIGHT = 24;
const TAB = "  ";

const sharedTextStyle = {
  fontFamily: FONT_FAMILY,
  fontSize: `${FONT_SIZE}px`,
  lineHeight: `${LINE_HEIGHT}px`,
  tabSize: 2,
  whiteSpace: "pre",
  boxSizing: "border-box",
  border: 0,
  margin: 0,
  padding: `${PAD_Y}px ${PAD_RIGHT}px ${PAD_Y}px ${PAD_LEFT}px`,
} as const;

function lineStartOf(value: string, index: number) {
  return value.lastIndexOf("\n", index - 1) + 1;
}

function lineEndOf(value: string, index: number) {
  const next = value.indexOf("\n", index);
  return next === -1 ? value.length : next;
}

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
  const lines = useMemo(() => value.split("\n"), [value]);
  const changed = value !== original;
  const preRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const pendingSelection = useRef<[number, number] | null>(null);

  const syncScroll = useCallback(() => {
    const textarea = textareaRef.current;
    const pre = preRef.current;
    if (!textarea || !pre) return;
    if (pre.scrollTop !== textarea.scrollTop) pre.scrollTop = textarea.scrollTop;
    if (pre.scrollLeft !== textarea.scrollLeft) pre.scrollLeft = textarea.scrollLeft;
  }, []);

  useEffect(() => {
    const selection = pendingSelection.current;
    const textarea = textareaRef.current;
    if (selection && textarea) {
      const max = textarea.value.length;
      const start = Math.max(0, Math.min(selection[0], max));
      const end = Math.max(0, Math.min(selection[1], max));
      textarea.setSelectionRange(start, end);
      pendingSelection.current = null;
    }
    syncScroll();
  }, [value, syncScroll]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.scrollTop = 0;
    textarea.scrollLeft = 0;
    syncScroll();
  }, [original, syncScroll]);

  useEffect(() => {
    const onResize = () => syncScroll();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [syncScroll]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.nativeEvent.isComposing) return;
    const textarea = event.currentTarget;

    if (event.key === "Tab") {
      event.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      if (start === end && !event.shiftKey) {
        pendingSelection.current = [start + TAB.length, start + TAB.length];
        onChange(value.slice(0, start) + TAB + value.slice(end));
        return;
      }

      const blockStart = lineStartOf(value, start);
      const blockEnd = lineEndOf(value, end);
      const block = value.slice(blockStart, blockEnd);
      const blockLines = block.split("\n");

      if (event.shiftKey) {
        let removedFirst = 0;
        let removedTotal = 0;
        const outdented = blockLines.map((line, index) => {
          const removed = (line.match(/^ {1,2}/) ?? [""])[0].length;
          if (index === 0) removedFirst = removed;
          removedTotal += removed;
          return line.slice(removed);
        });
        if (removedTotal === 0) return;
        pendingSelection.current = [
          Math.max(blockStart, start - removedFirst),
          Math.max(blockStart, end - removedTotal),
        ];
        onChange(value.slice(0, blockStart) + outdented.join("\n") + value.slice(blockEnd));
        return;
      }

      pendingSelection.current = [
        start + TAB.length,
        end + TAB.length * blockLines.length,
      ];
      onChange(value.slice(0, blockStart) + blockLines.map((line) => TAB + line).join("\n") + value.slice(blockEnd));
      return;
    }

    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const lineStart = lineStartOf(value, start);
      const line = value.slice(lineStart, start);
      const baseIndent = (line.match(/^[ \t]*/) ?? [""])[0];
      const opensBlock = /[{([:]$/.test(line.trimEnd());
      const closesBlock = /^[ \t]*[})\]]/.test(value.slice(end));
      const indent = baseIndent + (opensBlock ? TAB : "");

      if (opensBlock && closesBlock && start === end) {
        const insert = `\n${indent}\n${baseIndent}`;
        pendingSelection.current = [start + 1 + indent.length, start + 1 + indent.length];
        onChange(value.slice(0, start) + insert + value.slice(end));
      } else {
        const insert = `\n${indent}`;
        pendingSelection.current = [start + insert.length, start + insert.length];
        onChange(value.slice(0, start) + insert + value.slice(end));
      }
    }
  }

  return (
    <div className={cn("relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-lg border border-[#263029] bg-[#0c1110]", className)}>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <pre
          ref={preRef}
          aria-hidden
          style={{
            ...sharedTextStyle,
            padding: `${PAD_Y}px 0`,
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            color: "#e2e8f0",
            pointerEvents: "none",
          }}
        >
          <code style={{ display: "block", minWidth: "100%", paddingRight: PAD_RIGHT }}>
            {lines.map((line, index) => {
              const mark = marks[index] ?? "same";
              return (
                <div
                  key={index}
                  style={{
                    width: "max-content",
                    minWidth: "100%",
                    whiteSpace: "pre",
                    background:
                      mark === "add"
                        ? "rgba(16,185,129,0.07)"
                        : mark === "change"
                          ? "rgba(245,158,11,0.06)"
                          : undefined,
                  }}
                >
                  <span
                    style={{
                      position: "sticky",
                      left: 0,
                      display: "inline-block",
                      width: PAD_LEFT,
                      paddingRight: 10,
                      textAlign: "right",
                      userSelect: "none",
                      background: "#0c1110",
                      color:
                        mark === "add" ? "#34d399" : mark === "change" ? "#fbbf24" : "#55615a",
                    }}
                  >
                    {index + 1}
                  </span>
                  {line.length ? highlightLine(line, index) : "\u00a0"}
                </div>
              );
            })}
          </code>
        </pre>
        <textarea
          ref={textareaRef}
          aria-label="Code editor"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onScroll={syncScroll}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          wrap="off"
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          className="lab-editor-scroll absolute inset-0 h-full w-full resize-none overflow-auto bg-transparent outline-none"
          style={{
            ...sharedTextStyle,
            background: "transparent",
            color: "transparent",
            caretColor: "#f8fafc",
            WebkitTextFillColor: "transparent",
          }}
        />
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-white/10 px-3 py-1.5 text-[11px] text-[#9aa59f]">
        <span>Editable code · Tab indents · live preview updates</span>
        {changed ? (
          <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-300/90">your changes highlighted (subtle)</span>
        ) : (
          <span className="text-[#55615a]">original</span>
        )}
      </div>
    </div>
  );
}
