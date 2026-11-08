import { buildQuestion } from "../../question-builder";
import type { Tier, VisualKind } from "../../schema";

export const BOOTSTRAP_DOCS = "https://getbootstrap.com/docs/5.3";

export type BootstrapDocsSeed = {
  id: string;
  topicId: string;
  tier: Tier;
  title: string;
  prompt: string;
  options: string[];
  correct: number;
  why: string;
  source: string;
  code?: string;
  codeLanguage?: string;
  answer?: string;
  bullets?: string[];
  syntax?: string;
  pitfalls?: string[];
  memory?: string;
  visual?: [VisualKind, string, string];
  mono?: boolean;
};

export function docsQuestion(seed: BootstrapDocsSeed) {
  const source = seed.source.startsWith("http")
    ? seed.source
    : `${BOOTSTRAP_DOCS}/${seed.source.replace(/^\/+/, "")}`;

  return buildQuestion({
    id: `bootstrap.docs.${seed.id}`,
    topicId: seed.topicId,
    tier: seed.tier,
    title: seed.title,
    prompt: seed.prompt,
    code: seed.code,
    codeLanguage: seed.codeLanguage ?? "html",
    options: seed.options,
    correct: seed.correct,
    answer: seed.answer,
    why: seed.why,
    summary: seed.why,
    bullets: [
      ...(seed.bullets ?? [
        "Use the documented class names and required markup instead of recreating the pattern.",
        "Check the official example for supporting attributes, ARIA state and plugin wiring.",
      ]),
      `Official documentation: ${source}`,
    ],
    syntax: seed.syntax ?? seed.code,
    pitfalls: seed.pitfalls,
    memory: seed.memory,
    visual: seed.visual ?? ["component-tree", seed.title, seed.why],
    mono: seed.mono,
  });
}
