import { courses, findTopic } from "../courses";
import { reactEasyQuestions } from "../react-easy-questions";
import {
  courseIdValues,
  tierValues,
  type CourseId,
  type Question,
  type Tier,
} from "../schema";
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
import { bootstrapQuestions } from "./bootstrap-questions";
import { cssQuestions } from "./css-questions";
import { htmlQuestions } from "./html-questions";
import { javascriptQuestions } from "./javascript-questions";
import { typescriptQuestions } from "./typescript-questions";

export type CourseQuestion = Question & { courseId: CourseId };

const reactAuthoredQuestions: Question[] = [
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

const baseQuestions: Question[] = [
  ...htmlQuestions,
  ...cssQuestions,
  ...javascriptQuestions,
  ...bootstrapQuestions,
  ...reactEasyQuestions,
  ...reactAuthoredQuestions,
  ...typescriptQuestions,
];

export const allQuestions: CourseQuestion[] = baseQuestions.map((question) => {
  const location = findTopic(question.topicId);
  if (!location) {
    throw new Error(
      `Question ${question.id} references unknown topic ${question.topicId}`,
    );
  }
  return { ...question, courseId: location.course.id };
});

export const questionById = new Map(
  allQuestions.map((question) => [question.id, question]),
);

export const questionsByCourse = courseIdValues.reduce<
  Record<CourseId, CourseQuestion[]>
>(
  (acc, courseId) => {
    acc[courseId] = allQuestions.filter(
      (question) => question.courseId === courseId,
    );
    return acc;
  },
  { html: [], css: [], javascript: [], bootstrap: [], react: [], typescript: [] },
);

export const questionsByTopic = allQuestions.reduce<
  Record<string, CourseQuestion[]>
>((acc, question) => {
  acc[question.topicId] = [...(acc[question.topicId] ?? []), question];
  return acc;
}, {});

export const questionsByTier = tierValues.reduce<Record<Tier, CourseQuestion[]>>(
  (acc, tier) => {
    acc[tier] = allQuestions.filter((question) => question.tier === tier);
    return acc;
  },
  { easy: [], medium: [], hard: [], complex: [] },
);

export const questionsByCourseTier = courseIdValues.reduce<
  Record<CourseId, Record<Tier, CourseQuestion[]>>
>(
  (acc, courseId) => {
    acc[courseId] = tierValues.reduce<Record<Tier, CourseQuestion[]>>(
      (tierAcc, tier) => {
        tierAcc[tier] = questionsByCourse[courseId].filter(
          (question) => question.tier === tier,
        );
        return tierAcc;
      },
      { easy: [], medium: [], hard: [], complex: [] },
    );
    return acc;
  },
  {
    html: { easy: [], medium: [], hard: [], complex: [] },
    css: { easy: [], medium: [], hard: [], complex: [] },
    javascript: { easy: [], medium: [], hard: [], complex: [] },
    bootstrap: { easy: [], medium: [], hard: [], complex: [] },
    react: { easy: [], medium: [], hard: [], complex: [] },
    typescript: { easy: [], medium: [], hard: [], complex: [] },
  },
);

export const questionsByTierAndTopic = tierValues.reduce<
  Record<Tier, Record<string, CourseQuestion[]>>
>(
  (acc, tier) => {
    acc[tier] = questionsByTier[tier].reduce<
      Record<string, CourseQuestion[]>
    >((topicAcc, question) => {
      topicAcc[question.topicId] = [
        ...(topicAcc[question.topicId] ?? []),
        question,
      ];
      return topicAcc;
    }, {});
    return acc;
  },
  { easy: {}, medium: {}, hard: {}, complex: {} },
);

export const questionsByCourseTopic = courseIdValues.reduce<
  Record<CourseId, Record<string, CourseQuestion[]>>
>(
  (acc, courseId) => {
    acc[courseId] = questionsByCourse[courseId].reduce<
      Record<string, CourseQuestion[]>
    >((topicAcc, question) => {
      topicAcc[question.topicId] = [
        ...(topicAcc[question.topicId] ?? []),
        question,
      ];
      return topicAcc;
    }, {});
    return acc;
  },
  { html: {}, css: {}, javascript: {}, bootstrap: {}, react: {}, typescript: {} },
);

export const questionsByCourseTierTopic = courseIdValues.reduce<
  Record<CourseId, Record<Tier, Record<string, CourseQuestion[]>>>
>(
  (acc, courseId) => {
    acc[courseId] = tierValues.reduce<
      Record<Tier, Record<string, CourseQuestion[]>>
    >(
      (tierAcc, tier) => {
        tierAcc[tier] = questionsByCourseTier[courseId][tier].reduce<
          Record<string, CourseQuestion[]>
        >((topicAcc, question) => {
          topicAcc[question.topicId] = [
            ...(topicAcc[question.topicId] ?? []),
            question,
          ];
          return topicAcc;
        }, {});
        return tierAcc;
      },
      { easy: {}, medium: {}, hard: {}, complex: {} },
    );
    return acc;
  },
  {
    html: { easy: {}, medium: {}, hard: {}, complex: {} },
    css: { easy: {}, medium: {}, hard: {}, complex: {} },
    javascript: { easy: {}, medium: {}, hard: {}, complex: {} },
    bootstrap: { easy: {}, medium: {}, hard: {}, complex: {} },
    react: { easy: {}, medium: {}, hard: {}, complex: {} },
    typescript: { easy: {}, medium: {}, hard: {}, complex: {} },
  },
);

export const questionCountsByTier = tierValues.reduce<Record<Tier, number>>(
  (acc, tier) => {
    acc[tier] = questionsByTier[tier].length;
    return acc;
  },
  { easy: 0, medium: 0, hard: 0, complex: 0 },
);

export const questionCountsByCourse = courseIdValues.reduce<
  Record<CourseId, number>
>(
  (acc, courseId) => {
    acc[courseId] = questionsByCourse[courseId].length;
    return acc;
  },
  { html: 0, css: 0, javascript: 0, bootstrap: 0, react: 0, typescript: 0 },
);

export const questionCountsByCourseTier = courseIdValues.reduce<
  Record<CourseId, Record<Tier, number>>
>(
  (acc, courseId) => {
    acc[courseId] = tierValues.reduce<Record<Tier, number>>(
      (tierAcc, tier) => {
        tierAcc[tier] = questionsByCourseTier[courseId][tier].length;
        return tierAcc;
      },
      { easy: 0, medium: 0, hard: 0, complex: 0 },
    );
    return acc;
  },
  {
    html: { easy: 0, medium: 0, hard: 0, complex: 0 },
    css: { easy: 0, medium: 0, hard: 0, complex: 0 },
    javascript: { easy: 0, medium: 0, hard: 0, complex: 0 },
    bootstrap: { easy: 0, medium: 0, hard: 0, complex: 0 },
    react: { easy: 0, medium: 0, hard: 0, complex: 0 },
    typescript: { easy: 0, medium: 0, hard: 0, complex: 0 },
  },
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

export function getQuestionsForCourse(
  courseId: CourseId,
  topicId?: string | null,
  tier?: Tier,
) {
  if (!topicId) {
    return tier ? questionsByCourseTier[courseId][tier] : questionsByCourse[courseId];
  }
  if (tier) {
    return questionsByCourseTierTopic[courseId][tier][topicId] ?? [];
  }
  return questionsByCourseTopic[courseId][topicId] ?? [];
}

export function getQuestionsForTopic(topicId?: string | null, tier?: Tier) {
  if (!topicId) return tier ? questionsByTier[tier] : allQuestions;
  if (tier) return questionsByTierAndTopic[tier][topicId] ?? [];
  return questionsByTopic[topicId] ?? [];
}

export function getDefaultTierForTopic(
  topicId: string,
  courseId?: CourseId,
): Tier | null {
  const findTier = (tier: Tier) =>
    courseId
      ? (questionsByCourseTierTopic[courseId][tier][topicId]?.length ?? 0) > 0
      : (questionsByTierAndTopic[tier][topicId]?.length ?? 0) > 0;

  return tierValues.find(findTier) ?? null;
}

export function getPlayableTier(
  topicId: string,
  preferred?: Tier,
  courseId?: CourseId,
): Tier | null {
  if (preferred) {
    const hasPreferred = courseId
      ? (questionsByCourseTierTopic[courseId][preferred][topicId]?.length ?? 0) > 0
      : (questionsByTierAndTopic[preferred][topicId]?.length ?? 0) > 0;
    if (hasPreferred) return preferred;
  }
  return getDefaultTierForTopic(topicId, courseId);
}

export function getTopicHref(topicId: string, preferred?: Tier) {
  const location = findTopic(topicId);
  if (!location) return "/learn";
  const tier = getPlayableTier(topicId, preferred, location.course.id);
  return tier
    ? `/play/${location.course.id}/${tier}?topic=${encodeURIComponent(topicId)}`
    : `/learn/${location.course.id}`;
}

export function getFirstPlayableTier(courseId: CourseId, preferred?: Tier) {
  if (preferred && questionsByCourseTier[courseId][preferred].length > 0) {
    return preferred;
  }
  return (
    tierValues.find((tier) => questionsByCourseTier[courseId][tier].length > 0) ??
    null
  );
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

const uncoveredTopics = courses.flatMap((course) =>
  course.modules.flatMap((module) =>
    module.topics.filter((topic) => !questionsByTopic[topic.id]?.length),
  ),
);
if (uncoveredTopics.length > 0) {
  throw new Error(
    `Curriculum topics without questions: ${uncoveredTopics
      .map((topic) => topic.id)
      .join(", ")}`,
  );
}
