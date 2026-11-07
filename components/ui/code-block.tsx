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
    return "text-[#7f8c84] italic";
  }
  if (token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) {
    return "text-[#a8bcff]";
  }
  if (token.startsWith("<")) {
    return "text-[#8fd8c0]";
  }
  if (token === "/>" || token === ">") {
    return "text-[#6fae9c]";
  }
  if (/^\d/.test(token)) {
    return "text-[#f0a58f]";
  }
  if (KEYWORDS.has(token)) {
    return "text-[#c9b8ff]";
  }
  return "text-[#e8ede8]";
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
        className={isToken ? tokenClass(piece) : "text-[#e8ede8]/90"}
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
        "group relative overflow-hidden rounded-lg border border-[#263029]",
        tone === "dark" ? "bg-[#101512]" : "bg-[#151b17]",
        className,
      )}
    >
      {(filename || !compact) && (
        <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2">
          <div className="flex items-center gap-2.5">
            <span className="flex gap-1.5" aria-hidden>
              <span className="size-2 rounded-full bg-[#d9685e]" />
              <span className="size-2 rounded-full bg-[#d6b45e]" />
              <span className="size-2 rounded-full bg-[#6ea88a]" />
            </span>
            <span className="font-mono text-[10px] text-[#9aa59f]">
              {filename ?? "tsx"}
            </span>
          </div>
          <button
            type="button"
            onClick={copy}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-medium text-[#9aa59f] transition hover:bg-white/10 hover:text-white"
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
                <span className="mr-4 w-4 shrink-0 select-none text-right text-[#5f6a63]">
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
    <code className="rounded border border-line bg-raised px-1.5 py-0.5 font-mono text-[0.86em] text-mist">
      {children}
    </code>
  );
}
