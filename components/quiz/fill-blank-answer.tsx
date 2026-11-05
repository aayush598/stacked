"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CornerDownLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const fillSchema = z.object({
  answer: z.string().trim().min(1, "Type an answer before checking."),
});

type FillValues = z.infer<typeof fillSchema>;

export function FillBlankAnswer({
  onSubmit,
  disabled,
}: {
  onSubmit: (answer: string) => void;
  disabled?: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FillValues>({
    resolver: zodResolver(fillSchema),
    defaultValues: { answer: "" },
    mode: "onSubmit",
  });

  return (
    <form
      onSubmit={handleSubmit(({ answer }) => onSubmit(answer))}
      className="space-y-3"
      autoComplete="off"
    >
      <div>
        <label
          htmlFor="fill-answer"
          className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.16em] text-faint"
        >
          Your answer
        </label>
        <div className="relative">
          <input
            id="fill-answer"
            type="text"
            disabled={disabled}
            placeholder="Type the missing code…"
            className="h-12 w-full rounded-xl border border-line bg-black/30 px-4 pr-12 font-mono text-sm text-mist outline-none transition placeholder:font-sans placeholder:text-faint focus:border-lime/45 focus:bg-black/40 disabled:opacity-60"
            {...register("answer")}
          />
          <CornerDownLeft
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-faint"
            aria-hidden
          />
        </div>
        {errors.answer && (
          <p className="mt-1.5 text-[11px] text-coral">{errors.answer.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] text-faint">
          Case-insensitive · whitespace is ignored at the edges
        </p>
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-lime px-5 text-xs font-semibold text-[#111609] transition hover:bg-lime-soft disabled:cursor-not-allowed disabled:opacity-60"
        >
          Check answer
          <ArrowRight className="size-3.5" aria-hidden />
        </button>
      </div>
    </form>
  );
}
