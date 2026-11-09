import type { ReactNode } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { CodeBlock, InlineCode } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

export { InlineCode };

export function NoteLead({ children }: { children: ReactNode }) {
  return (
    <p className="text-[1.15rem] leading-9 text-muted sm:text-xl sm:leading-9">
      {children}
    </p>
  );
}

export function NoteHeading({
  children,
  eyebrow,
}: {
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="mt-10 border-t border-line pt-7">
      {eyebrow ? (
        <p className="mb-2 font-mono text-[13px] uppercase tracking-[0.18em] text-faint">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-xl font-semibold tracking-[-0.025em] text-mist sm:text-2xl">
        {children}
      </h2>
    </div>
  );
}

export function NoteText({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-base leading-7 text-muted">{children}</p>;
}

export function NoteList({
  items,
  ordered = false,
}: {
  items: ReactNode[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={cn(
        "mt-4 space-y-2.5 text-base leading-7 text-muted",
        ordered ? "list-decimal pl-5" : "list-none",
      )}
    >
      {items.map((item, index) => (
        <li key={index} className={cn(!ordered && "flex gap-2.5")}>
          {!ordered ? (
            <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-success" aria-hidden />
          ) : null}
          <span>{item}</span>
        </li>
      ))}
    </Tag>
  );
}

const calloutTone = {
  tip: {
    icon: Lightbulb,
    label: "Memory hook",
    className: "border-lime/20 bg-lime/[0.045]",
    iconClass: "text-lime",
  },
  insight: {
    icon: Sparkles,
    label: "Why it matters",
    className: "border-violet/20 bg-violet/[0.045]",
    iconClass: "text-violet",
  },
  warning: {
    icon: AlertTriangle,
    label: "Watch out",
    className: "border-coral/20 bg-coral/[0.045]",
    iconClass: "text-coral",
  },
} as const;

export function NoteCallout({
  tone = "tip",
  title,
  children,
}: {
  tone?: keyof typeof calloutTone;
  title?: string;
  children: ReactNode;
}) {
  const config = calloutTone[tone];
  const Icon = config.icon;
  return (
    <aside className={cn("mt-6 rounded-xl border px-4 py-4 sm:px-5", config.className)}>
      <div className="flex items-center gap-2">
        <Icon className={cn("size-4", config.iconClass)} aria-hidden />
        <p className="text-[15px] font-semibold uppercase tracking-[0.12em] text-mist">
          {title ?? config.label}
        </p>
      </div>
      <div className="mt-2 text-[15px] leading-6 text-muted">{children}</div>
    </aside>
  );
}

export function NoteCode({
  code,
  filename,
  compact = false,
}: {
  code: string;
  filename?: string;
  compact?: boolean;
}) {
  return (
    <div className="mt-5">
      <CodeBlock code={code} filename={filename} compact={compact} />
    </div>
  );
}

export function NoteTakeaways({ items }: { items: ReactNode[] }) {
  return (
    <div className="mt-8 rounded-xl border border-line bg-raised/60 p-4 sm:p-5">
      <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-faint">
        Keep this
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2.5 text-[15px] leading-6 text-mist">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-mist font-mono text-[13px] text-canvas">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NoteCardGrid({
  items,
}: {
  items: Array<{ title: string; body: ReactNode; accent?: "lime" | "sky" | "coral" | "violet" }>;
}) {
  const accents = {
    lime: "text-lime bg-lime/[0.06] border-lime/20",
    sky: "text-sky bg-sky/[0.06] border-sky/20",
    coral: "text-coral bg-coral/[0.06] border-coral/20",
    violet: "text-violet bg-violet/[0.06] border-violet/20",
  } as const;

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => {
        const accent = accents[item.accent ?? "lime"];
        return (
          <div key={index} className="rounded-xl border border-line bg-surface p-4">
            <span
              className={cn(
                "grid size-7 place-items-center rounded-md border font-mono text-[13px]",
                accent,
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-[15px] font-semibold text-mist">{item.title}</p>
            <div className="mt-1.5 text-[15px] leading-6 text-muted">{item.body}</div>
          </div>
        );
      })}
    </div>
  );
}
