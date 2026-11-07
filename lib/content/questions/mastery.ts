import type { CurriculumModule } from "../curriculum-types";
import {
  questionSchema,
  type CourseId,
  type Question,
  type Tier,
  type VisualKind,
} from "../schema";

type Variant = {
  suffix: string;
  tier: Tier;
  title: string;
  prompt: (topicTitle: string, description: string) => string;
  correct: (topicTitle: string, description: string) => string;
  why: (topicTitle: string, description: string) => string;
};

const VARIANTS: Variant[] = [
  {
    suffix: "recognize",
    tier: "easy",
    title: "Recognition",
    prompt: (title) => `Which statement best describes ${title}?`,
    correct: (_title, description) => description,
    why: (title, description) =>
      `${title} is about this rule: ${description} Recognizing the rule is the first step before applying it in real code.`,
  },
  {
    suffix: "practice",
    tier: "medium",
    title: "Practice check",
    prompt: (title) => `Select the two practices that best support ${title}.`,
    correct: (_title, description) => description,
    why: (title, description) =>
      `A correct approach follows ${title}'s core rule — ${description} — and verifies it with a focused test instead of guessing.`,
  },
  {
    suffix: "review",
    tier: "hard",
    title: "Code review",
    prompt: (title) =>
      `A pull request touches ${title}. Which review concern is most on point?`,
    correct: (_title, description) => description,
    why: (title, description) =>
      `The review should check whether the change follows ${title}: ${description} The other options are generic or unsafe shortcuts.`,
  },
  {
    suffix: "production",
    tier: "complex",
    title: "Production plan",
    prompt: (title) =>
      `You are taking ${title} into production. Which plan is strongest?`,
    correct: (_title, description) =>
      `Apply the rule — ${description} — then test and measure the result`,
    why: (title) =>
      `Production quality comes from applying ${title} deliberately, then validating behavior and performance rather than trusting a pattern blindly.`,
  },
  {
    suffix: "repair",
    tier: "hard",
    title: "Repair the failure",
    prompt: (title) =>
      `A regression appears around ${title}. What is the best first response?`,
    correct: (title) =>
      `Reproduce the failure, then apply the smallest change consistent with ${title}`,
    why: () =>
      "Start from a reproducible failure. A small, rule-consistent fix is easier to test and less likely to introduce unrelated regressions than a broad rewrite.",
  },
  {
    suffix: "explain",
    tier: "complex",
    title: "Explain the decision",
    prompt: (title) =>
      `An interviewer asks you to justify your approach to ${title}. Which answer is strongest?`,
    correct: (_title, description) =>
      `It follows the underlying rule: ${description}`,
    why: (title, description) =>
      `A strong interview answer connects the implementation to the underlying rule — ${description} — and can then discuss trade-offs and verification.`,
  },
  {
    suffix: "lesson",
    tier: "easy",
    title: "Teach it back",
    prompt: (title) =>
      `You are explaining ${title} to a teammate. Which statement should anchor the lesson?`,
    correct: (_title, description) => description,
    why: (title, description) =>
      `A useful explanation starts with the rule behind ${title}, not a memorized snippet: ${description}`,
  },
  {
    suffix: "apply",
    tier: "medium",
    title: "Apply it",
    prompt: (title) =>
      `Which action best applies ${title} in a real project?`,
    correct: (_title, description) =>
      `Follow the rule — ${description} — and verify the result`,
    why: (title, description) =>
      `Application means using ${title} as described — ${description} — then checking the behavior instead of assuming it worked.`,
  },
  {
    suffix: "debug",
    tier: "hard",
    title: "Debugging step",
    prompt: (title) =>
      `A bug is suspected around ${title}. Which diagnostic step is most useful?`,
    correct: (_title, description) =>
      `Reproduce the behavior and compare it against the rule: ${description}`,
    why: (title, description) =>
      `Debugging should test the actual behavior against the expected rule for ${title}: ${description} That beats guessing or rewriting blindly.`,
  },
];

const DISTRACTORS = [
  "It only matters for server-rendered pages and can be ignored in client code.",
  "It is purely stylistic and has no effect on correctness or performance.",
  "The browser handles it automatically, so code never needs to consider it.",
  "The safest response is to rewrite the whole feature without measuring the problem.",
  "It is solved permanently by wrapping the app in a global error boundary.",
  "It can be skipped whenever the change looks small.",
  "Memoizing every value removes the need to understand this behavior.",
  "Adding a timeout or retry loop is always the correct fix.",
  "Only framework internals need to care; application code can ignore it.",
  "The newest syntax is always safer than the established approach.",
  "A single happy-path test is enough evidence.",
  "Tooling will catch every misuse automatically.",
  "Performance and correctness are unrelated concerns.",
  "Documentation can replace understanding the actual behavior.",
  "It only applies to legacy browsers.",
  "The first solution that compiles is production-ready.",
];

const DEFAULT_VISUAL: Record<CourseId, VisualKind> = {
  html: "markup-tree",
  css: "box-model",
  javascript: "scope-chain",
  bootstrap: "bootstrap-grid",
  react: "component-tree",
  typescript: "type-contract",
};

function pickDistractors(seed: number, count: number) {
  return Array.from({ length: count }, (_, index) => {
    return DISTRACTORS[(seed + index * 3) % DISTRACTORS.length];
  });
}

function withCorrectPosition(
  correct: string,
  seed: number,
  count = 4,
): { options: string[]; correctIndex: number } {
  const options = pickDistractors(seed, count - 1);
  const correctIndex = seed % count;
  options.splice(correctIndex, 0, correct);
  return { options, correctIndex };
}

function baseNotes(
  source: Question | undefined,
  title: string,
  description: string,
) {
  return {
    summary: source?.notes.summary ?? description,
    bullets:
      source?.notes.bullets ??
      [
        description,
        "Verify the behavior with a focused test.",
        "Check the relevant edge case before shipping.",
      ],
    syntax: source?.notes.syntax,
    pitfalls:
      source?.notes.pitfalls ??
      [
        "Treating the pattern as a silver bullet without measuring the actual problem.",
        "Skipping a focused test for the edge case the pattern is meant to protect.",
      ],
    memory: source?.notes.memory ?? title,
  };
}

function visualFor(
  source: Question | undefined,
  courseId: CourseId,
  title: string,
): { kind: VisualKind; title: string; caption: string } {
  return {
    kind: source?.visual.kind ?? DEFAULT_VISUAL[courseId],
    title: `${title} mastery`,
    caption: `Connect ${title.toLowerCase()} to the behavior it protects.`,
  };
}

function makeChoiceQuestion(
  variant: Variant,
  courseId: CourseId,
  topicId: string,
  topicTitle: string,
  description: string,
  source: Question | undefined,
  seed: number,
): Question {
  const prefix = courseId === "react" ? "mastery" : `${courseId}-mastery`;
  const correct = variant.correct(topicTitle, description);
  const { options, correctIndex } = withCorrectPosition(correct, seed);
  const optionObjects = options.map((label, index) => ({
    id: String.fromCharCode(97 + index),
    label,
    mono: false,
  }));
  const correctOptionId = String.fromCharCode(97 + correctIndex);

  return questionSchema.parse({
    id: `${prefix}-${topicId}-${variant.suffix}`,
    topicId,
    topicTitle,
    tier: variant.tier,
    type: "mcq",
    title: `${topicTitle} · ${variant.title}`,
    prompt: variant.prompt(topicTitle, description),
    options: optionObjects,
    correctOptionId,
    answerDisplay: correct,
    explanation: variant.why(topicTitle, description),
    notes: baseNotes(source, topicTitle, description),
    visual: visualFor(source, courseId, topicTitle),
    xp:
      variant.tier === "easy"
        ? 10
        : variant.tier === "medium"
          ? 15
          : variant.tier === "hard"
            ? 20
            : 25,
  });
}

function makeMultiSelectQuestion(
  courseId: CourseId,
  topicId: string,
  topicTitle: string,
  description: string,
  source: Question | undefined,
  seed: number,
): Question {
  const prefix = courseId === "react" ? "mastery" : `${courseId}-mastery`;
  const correctLabels = [
    description,
    "Verify the behavior with a focused test and check the edge case.",
  ];
  const wrongLabels = pickDistractors(seed, 2);
  const entries = [
    { label: correctLabels[0], correct: true },
    { label: correctLabels[1], correct: true },
    { label: wrongLabels[0], correct: false },
    { label: wrongLabels[1], correct: false },
  ];
  const offset = seed % entries.length;
  const rotated = [...entries.slice(offset), ...entries.slice(0, offset)];
  const options = rotated.map((entry, index) => ({
    id: String.fromCharCode(97 + index),
    label: entry.label,
    mono: false,
  }));
  const correctOptionIds = rotated.flatMap((entry, index) =>
    entry.correct ? [String.fromCharCode(97 + index)] : [],
  );

  return questionSchema.parse({
    id: `${prefix}-${topicId}-practice`,
    topicId,
    topicTitle,
    tier: "medium",
    type: "multi-select",
    title: `${topicTitle} · Practice check`,
    prompt: `Select the two practices that best support ${topicTitle}.`,
    options,
    correctOptionIds,
    answerDisplay: correctLabels.join(" · "),
    explanation: `Follow the core rule for ${topicTitle} — ${description} — and pair it with a focused verification step. The other options skip evidence or rely on unsafe shortcuts.`,
    notes: baseNotes(source, topicTitle, description),
    visual: visualFor(source, courseId, topicTitle),
    xp: 15,
  });
}

function makeOrderingQuestion(
  courseId: CourseId,
  topicId: string,
  topicTitle: string,
  description: string,
  source: Question | undefined,
  seed: number,
): Question {
  const prefix = courseId === "react" ? "mastery" : `${courseId}-mastery`;
  const steps = [
    "Reproduce the current behavior and capture the failing case.",
    `Apply the rule for ${topicTitle}: ${description}`,
    "Verify the edge case with a focused test and check performance.",
    "Document the decision and remove any stale workaround.",
  ];
  const displayOrder = steps.map(
    (_, index) => (index + seed) % steps.length,
  );
  const options = displayOrder.map((stepIndex, index) => ({
    id: String.fromCharCode(97 + index),
    label: steps[stepIndex],
    mono: false,
  }));
  const idByStep = new Map(
    displayOrder.map((stepIndex, index) => [
      stepIndex,
      String.fromCharCode(97 + index),
    ]),
  );
  const correctOrderIds = steps.map((_, index) => idByStep.get(index) as string);

  return questionSchema.parse({
    id: `${prefix}-${topicId}-production`,
    topicId,
    topicTitle,
    tier: "complex",
    type: "ordering",
    title: `${topicTitle} · Production plan`,
    prompt: `Place the steps for safely applying ${topicTitle} in order.`,
    options,
    correctOrderIds,
    answerDisplay: steps
      .map((step, index) => `${index + 1}. ${step}`)
      .join("  "),
    explanation:
      "Reproduce first, apply the topic's rule, verify with evidence, then document and clean up. That order prevents guesswork and keeps the change reviewable.",
    notes: baseNotes(source, topicTitle, description),
    visual: visualFor(source, courseId, topicTitle),
    xp: 25,
  });
}

export function generateMasteryQuestions({
  courseId,
  modules,
  existing,
}: {
  courseId: CourseId;
  modules: CurriculumModule[];
  existing: Question[];
}): Question[] {
  const byTopic = new Map<string, Question>();
  for (const question of existing) {
    if (!byTopic.has(question.topicId)) byTopic.set(question.topicId, question);
  }

  const variants = courseId === "react" ? VARIANTS.slice(0, 6) : VARIANTS;
  const generated: Question[] = [];

  modules.forEach((module) => {
    module.topics.forEach((topic, topicIndex) => {
      const source = byTopic.get(topic.id);
      const description = topic.blurb.endsWith(".")
        ? topic.blurb
        : `${topic.blurb}.`;
      const seed = module.order * 11 + topicIndex * 3;

      variants.forEach((variant, variantIndex) => {
        if (variant.suffix === "practice") {
          generated.push(
            makeMultiSelectQuestion(
              courseId,
              topic.id,
              topic.title,
              description,
              source,
              seed + variantIndex,
            ),
          );
          return;
        }

        if (variant.suffix === "production") {
          generated.push(
            makeOrderingQuestion(
              courseId,
              topic.id,
              topic.title,
              description,
              source,
              seed + variantIndex,
            ),
          );
          return;
        }

        generated.push(
          makeChoiceQuestion(
            variant,
            courseId,
            topic.id,
            topic.title,
            description,
            source,
            seed + variantIndex,
          ),
        );
      });
    });
  });

  return generated;
}
