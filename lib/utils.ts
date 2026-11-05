import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
