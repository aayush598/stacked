import { z } from "zod";

export const courseIdValues = [
  "html",
  "css",
  "javascript",
  "bootstrap",
  "react",
  "typescript",
] as const;
export const courseIdSchema = z.enum(courseIdValues);
export type CourseId = z.infer<typeof courseIdSchema>;

export const tierValues = ["easy", "medium", "hard", "complex"] as const;
export const tierSchema = z.enum(tierValues);
export type Tier = z.infer<typeof tierSchema>;

export const questionTypeValues = ["mcq", "code-output", "fill-blank"] as const;
export const questionTypeSchema = z.enum(questionTypeValues);
export type QuestionType = z.infer<typeof questionTypeSchema>;

export const visualKindValues = [
  "jsx-expression",
  "attribute-map",
  "self-closing",
  "fragment-shell",
  "comment-token",
  "event-flow",
  "hook-anatomy",
  "state-cycle",
  "condition-branch",
  "list-map",
  "key-list",
  "style-object",
  "props-flow",
  "component-tree",
  "controlled-input",
  "module-map",
  "dependency-grid",
  "ref-box",
  "context-tree",
  "async-lifecycle",
  "route-tree",
  "type-contract",
  "layer-stack",
  "test-pyramid",
  "markup-tree",
  "box-model",
  "selector-map",
  "event-loop",
  "bootstrap-grid",
  "scope-chain",
  "utility-stack",
] as const;
export const visualKindSchema = z.enum(visualKindValues);
export type VisualKind = z.infer<typeof visualKindSchema>;

const optionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  mono: z.boolean().optional(),
  hint: z.string().optional(),
});

const notesSchema = z.object({
  summary: z.string().min(1),
  bullets: z.array(z.string().min(1)).min(1),
  syntax: z.string().optional(),
  pitfalls: z.array(z.string().min(1)).optional(),
  memory: z.string().optional(),
});

const visualSchema = z.object({
  kind: visualKindSchema,
  title: z.string().min(1),
  caption: z.string().min(1),
});

export const questionSchema = z
  .object({
    id: z.string().min(1),
    topicId: z.string().min(1),
    topicTitle: z.string().min(1),
    tier: tierSchema,
    type: questionTypeSchema,
    title: z.string().min(1),
    prompt: z.string().min(1),
    code: z.string().optional(),
    codeLanguage: z.string().default("jsx"),
    options: z.array(optionSchema).optional(),
    correctOptionId: z.string().optional(),
    acceptedAnswers: z.array(z.string().min(1)).optional(),
    answerDisplay: z.string().min(1),
    explanation: z.string().min(1),
    notes: notesSchema,
    visual: visualSchema,
    xp: z.number().int().positive().default(10),
  })
  .superRefine((question, ctx) => {
    if (question.type === "fill-blank") {
      if (!question.acceptedAnswers?.length) {
        ctx.addIssue({
          code: "custom",
          path: ["acceptedAnswers"],
          message: "Fill-in-the-blank questions need accepted answers.",
        });
      }
      return;
    }

    if (!question.options || question.options.length < 2) {
      ctx.addIssue({
        code: "custom",
        path: ["options"],
        message: "Choice questions need at least two options.",
      });
      return;
    }

    if (!question.correctOptionId) {
      ctx.addIssue({
        code: "custom",
        path: ["correctOptionId"],
        message: "Choice questions need a correct option.",
      });
      return;
    }

    if (!question.options.some((option) => option.id === question.correctOptionId)) {
      ctx.addIssue({
        code: "custom",
        path: ["correctOptionId"],
        message: "The correct option id must match one of the options.",
      });
    }
  });

export type Question = z.infer<typeof questionSchema>;
export type QuestionOption = z.infer<typeof optionSchema>;
