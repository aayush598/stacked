import { findTopic, reactCurriculum } from "../react-curriculum";
import { reactEasyQuestions } from "../react-easy-questions";
import { tierValues, type Question, type Tier } from "../schema";
import { foundationsJsxQuestions } from "./01-foundations-jsx";
import { componentsPropsQuestions } from "./02-components-props";
import { stateEventsQuestions } from "./03-state-events";
import { renderingStylingQuestions } from "./04-rendering-styling";
import { effectsRefsQuestions } from "./05-effects-refs";
import { reducerHooksQuestions } from "./06-reducer-hooks";
import { performancePatternsRoutingQuestions } from "./07-performance-patterns-routing";
import { dataFormsTypescriptQuestions } from "./08-data-forms-typescript";
import { globalAdvancedReact19Questions } from "./09-global-advanced-react19";
import { a11yTestingToolingArchQuestions } from "./10-a11y-testing-tooling-arch";
import { topicCoverageQuestions } from "./11-topic-coverage";

const authoredQuestions: Question[] = [
  ...foundationsJsxQuestions,
  ...componentsPropsQuestions,
  ...stateEventsQuestions,
  ...renderingStylingQuestions,
  ...effectsRefsQuestions,
  ...reducerHooksQuestions,
  ...performancePatternsRoutingQuestions,
  ...dataFormsTypescriptQuestions,
  ...globalAdvancedReact19Questions,
  ...a11yTestingToolingArchQuestions,
  ...topicCoverageQuestions,
];

export const allQuestions: Question[] = [...reactEasyQuestions, ...authoredQuestions];

export const questionById = new Map(
  allQuestions.map((question) => [question.id, question]),
);

export const questionsByTopic = allQuestions.reduce<Record<string, Question[]>>(
  (acc, question) => {
    acc[question.topicId] = [...(acc[question.topicId] ?? []), question];
    return acc;
  },
  {},
);

export const questionsByTier = tierValues.reduce<Record<Tier, Question[]>>(
  (acc, tier) => {
    acc[tier] = allQuestions.filter((question) => question.tier === tier);
    return acc;
  },
  { easy: [], medium: [], hard: [], complex: [] },
);

export const questionsByTierAndTopic = tierValues.reduce<
  Record<Tier, Record<string, Question[]>>
>(
  (acc, tier) => {
    acc[tier] = questionsByTier[tier].reduce<Record<string, Question[]>>(
      (topicAcc, question) => {
        topicAcc[question.topicId] = [
          ...(topicAcc[question.topicId] ?? []),
          question,
        ];
        return topicAcc;
      },
      {},
    );
    return acc;
  },
  { easy: {}, medium: {}, hard: {}, complex: {} },
);

export const questionCountsByTier = tierValues.reduce<Record<Tier, number>>(
  (acc, tier) => {
    acc[tier] = questionsByTier[tier].length;
    return acc;
  },
  { easy: 0, medium: 0, hard: 0, complex: 0 },
);

export const tierMeta: Record<
  Tier,
  { label: string; tag: string; description: string }
> = {
  easy: {
    label: "Easy",
    tag: "Syntax",
    description: "Pattern recognition, tiny snippets, finish in minutes.",
  },
  medium: {
    label: "Medium",
    tag: "Read code",
    description: "Reason about small snippets and predict behavior.",
  },
  hard: {
    label: "Hard",
    tag: "Build code",
    description: "Production-style challenges with real constraints.",
  },
  complex: {
    label: "Complex",
    tag: "Architecture",
    description: "Manual builds, architecture and interview-grade work.",
  },
};

export function getQuestionsForTopic(topicId?: string | null, tier?: Tier) {
  if (!topicId) return tier ? questionsByTier[tier] : allQuestions;
  if (tier) return questionsByTierAndTopic[tier][topicId] ?? [];
  return questionsByTopic[topicId] ?? [];
}

export function getDefaultTierForTopic(topicId: string): Tier | null {
  return (
    tierValues.find(
      (tier) => (questionsByTierAndTopic[tier][topicId]?.length ?? 0) > 0,
    ) ?? null
  );
}

export function getPlayableTier(topicId: string, preferred?: Tier): Tier | null {
  if (
    preferred &&
    (questionsByTierAndTopic[preferred][topicId]?.length ?? 0) > 0
  ) {
    return preferred;
  }
  return getDefaultTierForTopic(topicId);
}

export function getTopicHref(topicId: string, preferred?: Tier) {
  const tier = getPlayableTier(topicId, preferred);
  return tier
    ? `/play/react/${tier}?topic=${encodeURIComponent(topicId)}`
    : "/learn/react";
}

const duplicateIds = allQuestions.filter(
  (question, index) =>
    allQuestions.findIndex((entry) => entry.id === question.id) !== index,
);
if (duplicateIds.length > 0) {
  throw new Error(
    `Duplicate question ids: ${duplicateIds.map((question) => question.id).join(", ")}`,
  );
}

const unknownTopics = allQuestions.filter(
  (question) => !findTopic(question.topicId),
);
if (unknownTopics.length > 0) {
  throw new Error(
    `Questions reference unknown topics: ${unknownTopics
      .map((question) => `${question.id} → ${question.topicId}`)
      .join(", ")}`,
  );
}

const uncoveredTopics = reactCurriculum.flatMap((module) =>
  module.topics.filter((topic) => !questionsByTopic[topic.id]?.length),
);
if (uncoveredTopics.length > 0) {
  throw new Error(
    `Curriculum topics without questions: ${uncoveredTopics
      .map((topic) => topic.id)
      .join(", ")}`,
  );
}
