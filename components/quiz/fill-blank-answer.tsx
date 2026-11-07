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
          className="mb-1.5 block text-xs font-medium text-muted"
        >
          Your answer
        </label>
        <div className="relative">
          <input
            id="fill-answer"
            type="text"
            disabled={disabled}
            placeholder="Type the missing code..."
            className="h-12 w-full rounded-lg border border-line bg-canvas px-4 pr-12 font-mono text-sm text-mist outline-none transition placeholder:font-sans placeholder:text-faint focus:border-lime/50 focus:bg-surface disabled:opacity-60"
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
          Case-insensitive. Whitespace is ignored at the edges.
        </p>
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-lime px-5 text-xs font-semibold text-white transition hover:bg-lime/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Check answer
          <ArrowRight className="size-3.5" aria-hidden />
        </button>
      </div>
    </form>
  );
}
