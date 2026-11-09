import { CheckCircle2, CircleDashed } from "lucide-react";
import { cn } from "@/lib/utils";
import { statusLabel, type ReviewStatus } from "@/lib/notes/types";

export function StatusPill({
  status,
  compact = false,
}: {
  status: ReviewStatus;
  compact?: boolean;
}) {
  const reviewed = status === "reviewed";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium",
        compact ? "px-2 py-0.5 text-[13px]" : "px-2.5 py-1 text-[13px]",
        reviewed
          ? "border-success/25 bg-success/[0.07] text-success"
          : "border-coral/20 bg-coral/[0.055] text-coral",
      )}
    >
      {reviewed ? (
        <CheckCircle2 className={compact ? "size-2.5" : "size-3"} aria-hidden />
      ) : (
        <CircleDashed className={compact ? "size-2.5" : "size-3"} aria-hidden />
      )}
      {statusLabel(status)}
    </span>
  );
}

export function ProgressBar({
  value,
  className,
  tone = "lime",
}: {
  value: number;
  className?: string;
  tone?: "lime" | "success" | "coral";
}) {
  const colors = {
    lime: "bg-lime",
    success: "bg-success",
    coral: "bg-coral",
  } as const;
  return (
    <div className={cn("h-1.5 overflow-hidden rounded-full bg-line", className)}>
      <div
        className={cn("h-full rounded-full transition-[width] duration-500", colors[tone])}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export function NotesStat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface px-4 py-3.5">
      <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">
        {label}
      </p>
      <p className="mt-1 text-xl font-semibold tracking-[-0.03em] text-mist">{value}</p>
      {hint ? <p className="mt-0.5 text-[13px] text-faint">{hint}</p> : null}
    </div>
  );
}
