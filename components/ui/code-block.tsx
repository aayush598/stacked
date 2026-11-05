"use client";

import { Check, Copy } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const KEYWORDS = new Set([
  "const",
  "let",
  "var",
  "function",
  "return",
  "import",
  "from",
  "export",
  "default",
  "if",
  "else",
  "for",
  "of",
  "in",
  "true",
  "false",
  "null",
  "undefined",
  "new",
  "async",
  "await",
  "typeof",
  "interface",
  "type",
  "as",
]);

const TOKEN_PATTERN =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|<\/?[A-Za-z][\w.]*|\/?>|\b(?:const|let|var|function|return|import|from|export|default|if|else|for|of|in|true|false|null|undefined|new|async|await|typeof|interface|type|as)\b|\b\d+(?:\.\d+)?\b)/g;

function tokenClass(token: string) {
  if (token.startsWith("//") || token.startsWith("/*")) {
    return "text-faint italic";
  }
  if (token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) {
    return "text-lime-soft";
  }
  if (token.startsWith("<")) {
    return "text-sky";
  }
  if (token === "/>" || token === ">") {
    return "text-sky/70";
  }
  if (/^\d/.test(token)) {
    return "text-coral";
  }
  if (KEYWORDS.has(token)) {
    return "text-violet";
  }
  return "text-mist";
}

function highlightLine(line: string, lineIndex: number): ReactNode[] {
  const pieces = line.split(TOKEN_PATTERN);

  return pieces.map((piece, index) => {
    if (!piece) return null;
    const isToken = TOKEN_PATTERN.test(piece);
    TOKEN_PATTERN.lastIndex = 0;
    return (
      <span
        key={`${lineIndex}-${index}`}
        className={isToken ? tokenClass(piece) : "text-mist/90"}
      >
        {piece}
      </span>
    );
  });
}

export function CodeBlock({
  code,
  filename,
  className,
  compact = false,
  showLineNumbers = true,
  tone = "dark",
}: {
  code: string;
  filename?: string;
  className?: string;
  compact?: boolean;
  showLineNumbers?: boolean;
  tone?: "dark" | "soft";
}) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, "").split("\n");

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line",
        tone === "dark" ? "bg-[#080b11]" : "bg-white/[0.03]",
        className,
      )}
    >
      {(filename || !compact) && (
        <div className="flex items-center justify-between border-b border-line/70 px-3.5 py-2">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5" aria-hidden>
              <span className="size-2 rounded-full bg-coral/70" />
              <span className="size-2 rounded-full bg-lime/70" />
              <span className="size-2 rounded-full bg-sky/70" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              {filename ?? "tsx"}
            </span>
          </div>
          <button
            type="button"
            onClick={copy}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-medium text-faint transition hover:bg-white/5 hover:text-mist"
            aria-label="Copy code"
          >
            {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}
      <pre
        className={cn(
          "overflow-x-auto p-4 font-mono leading-relaxed",
          compact ? "text-[12px]" : "text-[13px] sm:text-sm",
        )}
      >
        <code>
          {lines.map((line, index) => (
            <span key={index} className="flex min-h-[1.4em]">
              {showLineNumbers && (
                <span className="mr-4 w-4 shrink-0 select-none text-right text-faint/60">
                  {index + 1}
                </span>
              )}
              <span className="whitespace-pre">{highlightLine(line, index)}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md border border-line bg-white/[0.04] px-1.5 py-0.5 font-mono text-[0.86em] text-lime-soft">
      {children}
    </code>
  );
}
