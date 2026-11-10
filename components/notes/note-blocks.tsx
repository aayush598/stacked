import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Eye, Lightbulb, Sparkles, Terminal, Zap } from "lucide-react";
import { CodeBlock, InlineCode } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

export { InlineCode };

export function NoteLead({ children }: { children: ReactNode }) {
  return <p className="text-[1.1rem] leading-8 text-muted sm:text-[1.2rem] sm:leading-9">{children}</p>;
}

export function NoteHeading({ children, eyebrow }: { children: ReactNode; eyebrow?: string }) {
  return (
    <div className="mt-10 border-t border-line pt-7">
      {eyebrow ? <p className="mb-2 font-mono text-[13px] uppercase tracking-[0.18em] text-faint">{eyebrow}</p> : null}
      <h2 className="text-xl font-semibold tracking-[-0.025em] text-mist sm:text-2xl">{children}</h2>
    </div>
  );
}

export function NoteText({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-base leading-7 text-muted">{children}</p>;
}

export function Highlight({ children }: { children: ReactNode }) {
  return <mark className="rounded bg-lime/15 px-1 py-0.5 text-mist ring-1 ring-inset ring-lime/20">{children}</mark>;
}

export function KeyChips({ items }: { items: { label: string; tone?: "lime"|"sky"|"violet"|"coral" }[] }) {
  const tones = {
    lime: "border-lime/25 bg-lime/10 text-lime",
    sky: "border-sky/25 bg-sky/10 text-sky",
    violet: "border-violet/25 bg-violet/10 text-violet",
    coral: "border-coral/25 bg-coral/10 text-coral",
  } as const;
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((it) => (
        <span key={it.label} className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[13px] font-medium", tones[it.tone ?? "lime"])}>
          <Zap className="size-3" aria-hidden />{it.label}
        </span>
      ))}
    </div>
  );
}

export function NoteList({ items, ordered = false }: { items: ReactNode[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={cn("mt-4 space-y-2.5 text-base leading-7 text-muted", ordered ? "list-decimal pl-5" : "list-none")}>
      {items.map((item, index) => (
        <li key={index} className={cn(!ordered && "flex gap-2.5")}>
          {!ordered ? <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-success" aria-hidden /> : null}
          <span>{item}</span>
        </li>
      ))}
    </Tag>
  );
}

const calloutTone = {
  tip: { icon: Lightbulb, label: "Memory hook", className: "border-lime/20 bg-lime/[0.045]", iconClass: "text-lime" },
  insight: { icon: Sparkles, label: "Why it matters", className: "border-violet/20 bg-violet/[0.045]", iconClass: "text-violet" },
  warning: { icon: AlertTriangle, label: "Watch out", className: "border-coral/20 bg-coral/[0.045]", iconClass: "text-coral" },
} as const;

export function NoteCallout({ tone = "tip", title, children }: { tone?: keyof typeof calloutTone; title?: string; children: ReactNode }) {
  const config = calloutTone[tone];
  const Icon = config.icon;
  return (
    <aside className={cn("mt-6 rounded-xl border px-4 py-4 sm:px-5", config.className)}>
      <div className="flex items-center gap-2">
        <Icon className={cn("size-4", config.iconClass)} aria-hidden />
        <p className="text-[15px] font-semibold uppercase tracking-[0.12em] text-mist">{title ?? config.label}</p>
      </div>
      <div className="mt-2 text-[15px] leading-6 text-muted">{children}</div>
    </aside>
  );
}

export function NoteCode({ code, filename, compact = false }: { code: string; filename?: string; compact?: boolean }) {
  return <div className="mt-5"><CodeBlock code={code} filename={filename} compact={compact} /></div>;
}

export function NoteOutput({ title = "Output / Result", code, children }: { title?: string; code?: string; children?: ReactNode }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-sky/20 bg-sky/[0.04]">
      <div className="flex items-center gap-2 border-b border-sky/15 px-3.5 py-2 text-[12px] font-medium text-sky">
        <Terminal className="size-3.5" aria-hidden />
        {title}
      </div>
      {code ? <pre className="overflow-x-auto p-3 font-mono text-[13px] leading-6 text-mist"><code>{code}</code></pre> : null}
      {children ? <div className="p-3">{children}</div> : null}
    </div>
  );
}

export function NoteTakeaways({ items }: { items: ReactNode[] }) {
  return (
    <div className="mt-8 rounded-xl border border-line bg-raised/60 p-4 sm:p-5">
      <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-faint">Keep this</p>
      <ul className="mt-3 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2.5 text-[15px] leading-6 text-mist">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-mist font-mono text-[13px] text-canvas">{index + 1}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NoteCardGrid({ items }: { items: Array<{ title: string; body: ReactNode; accent?: "lime" | "sky" | "coral" | "violet" }>; }) {
  const accents = { lime: "text-lime bg-lime/[0.06] border-lime/20", sky: "text-sky bg-sky/[0.06] border-sky/20", coral: "text-coral bg-coral/[0.06] border-coral/20", violet: "text-violet bg-violet/[0.06] border-violet/20" } as const;
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => {
        const accent = accents[item.accent ?? "lime"];
        return (
          <div key={index} className="rounded-xl border border-line bg-surface p-4">
            <span className={cn("grid size-7 place-items-center rounded-md border font-mono text-[13px]", accent)}>{String(index + 1).padStart(2, "0")}</span>
            <p className="mt-3 text-[15px] font-semibold text-mist">{item.title}</p>
            <div className="mt-1.5 text-[15px] leading-6 text-muted">{item.body}</div>
          </div>
        );
      })}
    </div>
  );
}

export function CodeWithOutput({
  title,
  code,
  output,
  note,
  preview,
}: {
  title?: string;
  code: string;
  output?: string;
  preview?: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-line bg-surface">
      {title ? <div className="border-b border-line px-4 py-2 text-[14px] font-semibold text-mist">{title}</div> : null}
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-line md:border-b-0 md:border-r">
          <div className="flex items-center gap-2 border-b border-line px-3.5 py-2 text-[12px] font-medium text-faint">
            <CodeBlock code="" filename="code" />
          </div>
          <CodeBlock code={code} filename="example" showLineNumbers compact className="rounded-none border-0" />
        </div>
        <div>
          <div className="flex items-center gap-2 border-b border-line px-3.5 py-2 text-[12px] font-medium text-sky">
            <Eye className="size-3.5" aria-hidden />
            Output / Rendered result
          </div>
          {preview ? (
            <div className="p-3">
              <div className="rounded-lg border border-line bg-canvas/70 p-3">{preview}</div>
            </div>
          ) : null}
          {output ? (
            <pre className="overflow-x-auto p-3 font-mono text-[13px] leading-6 text-mist"><code>{output}</code></pre>
          ) : null}
          {!preview && !output ? <div className="p-3 text-[13px] text-faint">No output shown.</div> : null}
        </div>
      </div>
      {note ? <div className="border-t border-line px-4 py-2 text-[14px] text-muted">{note}</div> : null}
    </div>
  );
}

export function TableWithOutput({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: Array<{ pattern: string; exampleCode?: string; outputPreview?: ReactNode; outputText?: string; notes: string }>;
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-line">
      {caption ? <div className="border-b border-line bg-surface/80 px-4 py-2 text-[14px] font-semibold text-mist">{caption}</div> : null}
      <table className="w-full min-w-[880px] text-left text-[14px]">
        <thead className="bg-surface/80 text-[13px] text-faint">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-3 py-2 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row, i) => (
            <tr key={i} className="align-top">
              <td className="px-3 py-3 font-mono text-[12.5px] text-violet">{row.pattern}</td>
              <td className="px-3 py-3">
                {row.exampleCode ? (
                  <pre className="overflow-x-auto rounded-lg border border-line bg-canvas/80 p-2 font-mono text-[12.5px] leading-5 text-mist"><code>{row.exampleCode}</code></pre>
                ) : (
                  <span className="text-faint">—</span>
                )}
              </td>
              <td className="px-3 py-3">
                {row.outputPreview ? (
                  <div className="rounded-lg border border-sky/20 bg-sky/[0.04] p-2">
                    <p className="mb-1 font-mono text-[11px] uppercase tracking-wide text-sky">Rendered output</p>
                    {row.outputPreview}
                  </div>
                ) : row.outputText ? (
                  <pre className="overflow-x-auto rounded-lg border border-sky/20 bg-sky/[0.04] p-2 font-mono text-[12.5px] leading-5 text-mist"><code>{row.outputText}</code></pre>
                ) : (
                  <span className="text-faint">—</span>
                )}
              </td>
              <td className="px-3 py-3 text-muted">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
