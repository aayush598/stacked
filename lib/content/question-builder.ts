import { findTopic } from "./react-curriculum";
import {
  questionSchema,
  type Question,
  type Tier,
  type VisualKind,
} from "./schema";

type BaseSeed = {
  id: string;
  topicId: string;
  tier: Tier;
  title: string;
  prompt: string;
  code?: string;
  codeLanguage?: string;
  answer?: string;
  why: string;
  summary: string;
  bullets: string[];
  syntax?: string;
  pitfalls?: string[];
  memory?: string;
  visual: [VisualKind, string, string];
  xp?: number;
};

export type ChoiceSeed = BaseSeed & {
  type?: "mcq" | "code-output";
  options: string[];
  correct: number;
  mono?: boolean;
};

export type FillSeed = BaseSeed & {
  type: "fill-blank";
  accepted: string[];
};

const DEFAULT_XP: Record<Tier, number> = {
  easy: 10,
  medium: 15,
  hard: 20,
  complex: 25,
};

export function buildQuestion(seed: ChoiceSeed | FillSeed): Question {
  const topic = findTopic(seed.topicId);
  const options =
    "options" in seed
      ? seed.options.map((label, index) => ({
          id: String.fromCharCode(97 + index),
          label,
          mono: seed.mono ?? true,
        }))
      : undefined;
  const correctOptionId =
    "options" in seed ? String.fromCharCode(97 + seed.correct) : undefined;
  const acceptedAnswers = "accepted" in seed ? seed.accepted : undefined;

  return questionSchema.parse({
    id: seed.id,
    topicId: seed.topicId,
    topicTitle: topic?.topic.title ?? seed.topicId,
    tier: seed.tier,
    type: seed.type ?? "mcq",
    title: seed.title,
    prompt: seed.prompt,
    code: seed.code,
    codeLanguage: seed.codeLanguage ?? "jsx",
    options,
    correctOptionId,
    acceptedAnswers,
    answerDisplay:
      seed.answer ??
      (correctOptionId
        ? options?.find((option) => option.id === correctOptionId)?.label
        : acceptedAnswers?.[0]) ??
      seed.title,
    explanation: seed.why,
    notes: {
      summary: seed.summary,
      bullets: seed.bullets,
      syntax: seed.syntax,
      pitfalls: seed.pitfalls,
      memory: seed.memory,
    },
    visual: {
      kind: seed.visual[0],
      title: seed.visual[1],
      caption: seed.visual[2],
    },
    xp: seed.xp ?? DEFAULT_XP[seed.tier],
  });
}
