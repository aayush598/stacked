import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Question } from "@/lib/content/schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const XP_PER_LEVEL = 120;

export const LEVEL_RANKS = [
  "Curious",
  "Tinkerer",
  "Builder",
  "Debugger",
  "Architect",
  "React Ranger",
  "Render Wizard",
] as const;

export function levelFromXp(xp: number) {
  return Math.floor(Math.max(0, xp) / XP_PER_LEVEL) + 1;
}

export function levelProgress(xp: number) {
  const safeXp = Math.max(0, xp);
  const level = levelFromXp(safeXp);
  const base = (level - 1) * XP_PER_LEVEL;
  const into = safeXp - base;
  return {
    level,
    into,
    needed: XP_PER_LEVEL,
    percent: Math.min(100, Math.round((into / XP_PER_LEVEL) * 100)),
    rank: LEVEL_RANKS[Math.min(level - 1, LEVEL_RANKS.length - 1)],
  };
}

export function todayKey(date = new Date()) {
  return date.toLocaleDateString("en-CA");
}

export function yesterdayKey(date = new Date()) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() - 1);
  return copy.toLocaleDateString("en-CA");
}

export function normalizeAnswer(value: string) {
  return value.trim().toLowerCase().replace(/^`|`$/g, "");
}

export function isAnswerCorrect(input: string, accepted: string[]) {
  const normalized = normalizeAnswer(input);
  return accepted.some((answer) => normalizeAnswer(answer) === normalized);
}

function parseIdList(value: string) {
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) && parsed.every((item) => typeof item === "string")
      ? parsed
      : null;
  } catch {
    return null;
  }
}

export function isQuestionAnswerCorrect(question: Question, answer: string) {
  if (question.type === "fill-blank") {
    return isAnswerCorrect(answer, question.acceptedAnswers ?? []);
  }

  if (question.type === "multi-select") {
    const selected = parseIdList(answer);
    if (!selected) return false;
    const expected = [...(question.correctOptionIds ?? [])].sort();
    return (
      selected.length === expected.length &&
      [...selected].sort().every((id, index) => id === expected[index])
    );
  }

  if (question.type === "ordering") {
    const order = parseIdList(answer);
    if (!order) return false;
    const expected = question.correctOrderIds ?? [];
    return (
      order.length === expected.length &&
      order.every((id, index) => id === expected[index])
    );
  }

  return answer === question.correctOptionId;
}

export function formatQuestionAnswer(question: Question, answer: string) {
  if (question.type === "multi-select") {
    const selected = parseIdList(answer) ?? [];
    return selected
      .map((id) => question.options?.find((option) => option.id === id)?.label ?? id)
      .join(" · ");
  }

  if (question.type === "ordering") {
    const order = parseIdList(answer) ?? [];
    return order
      .map(
        (id, index) =>
          `${index + 1}. ${
            question.options?.find((option) => option.id === id)?.label ?? id
          }`,
      )
      .join("  ");
  }

  if (question.type === "fill-blank") return answer;

  return (
    question.options?.find((option) => option.id === answer)?.label ?? answer
  );
}

export function formatCompact(value: number) {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(value);
}

export function pluralize(value: number, singular: string, plural = `${singular}s`) {
  return `${value} ${value === 1 ? singular : plural}`;
}

export function dayLabel(timestamp?: number) {
  if (!timestamp) return "Not started";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(timestamp));
}
