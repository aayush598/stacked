"use client";

import { ArrowDown, ArrowUp, Check, GripVertical, Lightbulb } from "lucide-react";
import { useState } from "react";
import type { Question } from "@/lib/content/schema";
import { cn } from "@/lib/utils";

export function MultiSelectAnswer({
  question,
  onSubmit,
}: {
  question: Question;
  onSubmit: (answer: string) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const options = question.options ?? [];

  function toggle(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        {options.map((option, index) => {
          const isSelected = selected.includes(option.id);
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => toggle(option.id)}
              aria-pressed={isSelected}
              className={cn(
                "group flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition",
                isSelected
                  ? "border-sky/45 bg-sky/[0.07] text-mist"
                  : "border-line bg-white/[0.02] text-muted hover:border-line-strong hover:bg-white/[0.04]",
              )}
            >
              <span
                className={cn(
                  "grid size-6 shrink-0 place-items-center rounded-lg border",
                  isSelected
                    ? "border-sky/40 bg-sky/10 text-sky"
                    : "border-line bg-white/[0.03] text-faint",
                )}
              >
                {isSelected ? (
                  <Check className="size-3" aria-hidden />
                ) : (
                  String.fromCharCode(65 + index)
                )}
              </span>
              <span
                className={cn(
                  "min-w-0 flex-1 text-left text-[13px] leading-5",
                  option.mono && "whitespace-pre-wrap font-mono text-[12px] leading-5",
                )}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] text-faint">
          {selected.length} selected · choose every correct statement
        </p>
        <button
          type="button"
          onClick={() => onSubmit(JSON.stringify(selected))}
          disabled={selected.length === 0}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-lime px-5 text-xs font-semibold text-[#111609] transition hover:bg-lime-soft disabled:cursor-not-allowed disabled:opacity-40"
        >
          Check answer
          <Check className="size-3.5" aria-hidden />
        </button>
      </div>
    </div>
  );
}

export function OrderingAnswer({
  question,
  onSubmit,
}: {
  question: Question;
  onSubmit: (answer: string) => void;
}) {
  const options = question.options ?? [];
  const [order, setOrder] = useState<string[]>(() =>
    options.map((option) => option.id),
  );
  const byId = new Map(options.map((option) => [option.id, option]));

  function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= order.length) return;
    setOrder((current) => {
      const next = [...current];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  return (
    <div className="space-y-3">
      <ol className="space-y-2">
        {order.map((id, index) => {
          const option = byId.get(id);
          if (!option) return null;
          return (
            <li
              key={id}
              className="flex items-center gap-2 rounded-xl border border-line bg-white/[0.02] px-3 py-2.5"
            >
              <GripVertical className="size-4 shrink-0 text-faint" aria-hidden />
              <span className="grid size-6 shrink-0 place-items-center rounded-lg border border-line bg-white/[0.03] font-mono text-[10px] text-sky">
                {index + 1}
              </span>
              <span className="min-w-0 flex-1 text-[12px] leading-5 text-muted">
                {option.label}
              </span>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  aria-label={`Move ${option.label} up`}
                  className="grid size-7 place-items-center rounded-lg border border-line text-faint transition hover:border-line-strong hover:text-mist disabled:opacity-25"
                >
                  <ArrowUp className="size-3" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => move(index, 1)}
                  disabled={index === order.length - 1}
                  aria-label={`Move ${option.label} down`}
                  className="grid size-7 place-items-center rounded-lg border border-line text-faint transition hover:border-line-strong hover:text-mist disabled:opacity-25"
                >
                  <ArrowDown className="size-3" aria-hidden />
                </button>
              </div>
            </li>
          );
        })}
      </ol>
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-1.5 text-[10px] text-faint">
          <Lightbulb className="size-3 text-lime" aria-hidden />
          Order matters — top step happens first
        </p>
        <button
          type="button"
          onClick={() => onSubmit(JSON.stringify(order))}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-lime px-5 text-xs font-semibold text-[#111609] transition hover:bg-lime-soft"
        >
          Check order
          <Check className="size-3.5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
