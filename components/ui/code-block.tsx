"use client";

import { Check, Copy, Minus, Plus } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const KEYWORDS = new Set([
  "const","let","var","function","return","import","from","export","default","if","else","for","of","in",
  "true","false","null","undefined","new","async","await","typeof","interface","type","as","class","extends",
  "implements","public","private","protected","readonly","static","abstract","enum","namespace","module",
  "declare","keyof","infer","extends","never","unknown","any","void","switch","case","break","continue",
  "try","catch","finally","throw","while","do","yield","this","super","get","set","satisfies",
]);

const TYPES = new Set(["string","number","boolean","bigint","symbol","object","Record","Partial","Required","Readonly","Pick","Omit","Array","Promise","Map","Set","Date","RegExp","Error"]);

const TOKEN_PATTERN =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|<\/?[A-Za-z][\w.-]*|\/?>|\b\d+(?:\.\d+)?n?\b|\b[A-Z][A-Za-z0-9_]*\b|\b(?:const|let|var|function|return|import|from|export|default|if|else|for|of|in|true|false|null|undefined|new|async|await|typeof|interface|type|as|class|extends|implements|public|private|protected|readonly|static|abstract|enum|namespace|module|declare|keyof|infer|never|unknown|any|void|switch|case|break|continue|try|catch|finally|throw|while|do|yield|this|super|get|set|satisfies)\b)/g;

function tokenClass(token: string) {
  if (token.startsWith("//") || token.startsWith("/*")) return "text-slate-400/80 italic";
  if (token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) return "text-emerald-300";
  if (token.startsWith("<") || token === "/>" || token === ">") return "text-sky-300";
  if (/^\d/.test(token)) return "text-orange-300";
  if (KEYWORDS.has(token)) return "text-violet-300 font-medium";
  if (TYPES.has(token) || /^[A-Z]/.test(token)) return "text-cyan-200";
  return "text-slate-100";
}

function highlightLine(line: string, lineIndex: number): ReactNode[] {
  const pieces = line.split(TOKEN_PATTERN);
  return pieces.map((piece, index) => {
    if (!piece) return null;
    TOKEN_PATTERN.lastIndex = 0;
    const isToken = TOKEN_PATTERN.test(piece);
    TOKEN_PATTERN.lastIndex = 0;
    return <span key={`${lineIndex}-${index}`} className={isToken ? tokenClass(piece) : "text-slate-100"}>{piece}</span>;
  });
}

export type DiffKind = "add" | "remove" | "neutral";

export function CodeBlock({
  code,
  filename,
  className,
  compact = false,
  showLineNumbers = true,
  tone = "dark",
  label,
  diffLines,
  highlightLines,
}: {
  code: string;
  filename?: string;
  className?: string;
  compact?: boolean;
  showLineNumbers?: boolean;
  tone?: "dark" | "soft";
  label?: ReactNode;
  diffLines?: Record<number, DiffKind>; // 1-based
  highlightLines?: number[]; // 1-based
}) {
  const [copied, setCopied] = useState(false);
  const lines = useMemo(() => code.replace(/\n$/, "").split("\n"), [code]);
  const highlightSet = useMemo(() => new Set(highlightLines ?? []), [highlightLines]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch { setCopied(false); }
  }

  return (
    <div className={cn("group relative overflow-hidden rounded-xl border border-[#263029] shadow-sm", tone === "dark" ? "bg-[#0c1110]" : "bg-[#121816]", className)}>
      <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="flex gap-1.5 shrink-0" aria-hidden>
            <span className="size-2 rounded-full bg-[#d9685e]" />
            <span className="size-2 rounded-full bg-[#d6b45e]" />
            <span className="size-2 rounded-full bg-[#6ea88a]" />
          </span>
          <span className="truncate font-mono text-[12px] text-[#9aa59f]">{filename ?? "example.ts"}</span>
          {label ? <span className="ml-1 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-200">{label}</span> : null}
        </div>
        <button type="button" onClick={copy} className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[12px] font-medium text-[#9aa59f] transition hover:bg-white/10 hover:text-white" aria-label="Copy code">
          {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className={cn("overflow-x-auto p-4 font-mono leading-7", compact ? "text-[13px]" : "text-[13.5px] sm:text-[14px]")}>
        <code>
          {lines.map((line, index) => {
            const ln = index + 1;
            const diff = diffLines?.[ln];
            return (
              <span key={index} className={cn("flex min-h-[1.7em] rounded-sm px-1 -mx-1", diff === "add" && "bg-emerald-500/12", diff === "remove" && "bg-rose-500/12", highlightSet.has(ln) && !diff && "bg-sky-500/10")}>
                {showLineNumbers && <span className="mr-3 w-5 shrink-0 select-none text-right text-[#56615a]">{ln}</span>}
                {diff ? <span className={cn("mr-2 w-4 shrink-0 select-none text-center", diff === "add" ? "text-emerald-400" : diff === "remove" ? "text-rose-400" : "text-transparent")}>{diff === "add" ? <Plus className="inline size-3" /> : diff === "remove" ? <Minus className="inline size-3" /> : ""}</span> : null}
                <span className="whitespace-pre">{highlightLine(line, index)}</span>
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
}

export function InlineCode({ children }: { children: ReactNode }) {
  return <code className="rounded-md border border-lime/20 bg-lime/[0.07] px-1.5 py-0.5 font-mono text-[0.86em] text-mist">{children}</code>;
}
