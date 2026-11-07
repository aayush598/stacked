"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Flame,
  Lightbulb,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { FillBlankAnswer } from "@/components/quiz/fill-blank-answer";
import { MultiSelectAnswer, OrderingAnswer } from "@/components/quiz/multi-answer";
import { NotesPanel } from "@/components/quiz/notes-panel";
import { QuestionVisual } from "@/components/quiz/question-visual";
import { QuizResults } from "@/components/quiz/quiz-results";
import { getCourse } from "@/lib/content/courses";
import {
  getQuestionsForCourse,
  questionById,
  tierMeta,
  type CourseQuestion,
} from "@/lib/content/questions";
import type { CourseId, Tier } from "@/lib/content/schema";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { useProgressStore } from "@/lib/store/progress-store";
import { cn, formatQuestionAnswer, isQuestionAnswerCorrect } from "@/lib/utils";

export function QuizPlayer({
  courseId,
  tier,
}: {
  courseId: CourseId;
  tier: Tier;
}) {
  const course = getCourse(courseId);
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || null;

  const hydrated = useHydrated();
  const session = useProgressStore((state) => state.activeSession);
  const profile = useProgressStore((state) => state.profile);
  const startSession = useProgressStore((state) => state.startSession);
  const recordAnswer = useProgressStore((state) => state.recordAnswer);
  const advanceSession = useProgressStore((state) => state.advanceSession);

  const startedRef = useRef(false);
  const [selection, setSelection] = useState<{ questionId: string; optionId: string | null }>({
    questionId: "",
    optionId: null,
  });
  const [xpBurst, setXpBurst] = useState<{ questionId: string; amount: number } | null>(
    null,
  );
  const [completedHere, setCompletedHere] = useState(false);

  const filteredQuestions = useMemo(
    () => getQuestionsForCourse(courseId, topic, tier),
    [courseId, topic, tier],
  );
  const filteredIds = useMemo(
    () => filteredQuestions.map((question) => question.id),
    [filteredQuestions],
  );

  useEffect(() => {
    if (!hydrated || startedRef.current) return;
    startedRef.current = true;
    const existing = useProgressStore.getState().activeSession;
    const matches =
      existing &&
      existing.courseId === courseId &&
      existing.tier === tier &&
      existing.status === "active" &&
      (existing.topicId ?? null) === topic;
    const hasQuestions = Boolean(
      existing?.questionIds.some((id) => questionById.has(id)),
    );

    if (!matches || !hasQuestions) {
      startSession({
        courseId,
        tier,
        topicId: topic,
        questionIds: filteredIds,
      });
    }
  }, [courseId, hydrated, tier, topic, filteredIds, startSession]);

  const sessionQuestions = useMemo(() => {
    if (!session) return [];
    return session.questionIds
      .map((id) => questionById.get(id))
      .filter((question): question is CourseQuestion => Boolean(question));
  }, [session]);

  const question = sessionQuestions[session?.index ?? 0];
  const answer = question
    ? session?.answers.find((item) => item.questionId === question.id)
    : undefined;
  const answered = Boolean(answer);
  const selected =
    question && selection.questionId === question.id ? selection.optionId : null;
  const visibleXpBurst =
    question && xpBurst?.questionId === question.id ? xpBurst.amount : null;

  useEffect(() => {
    if (xpBurst === null) return;
    const timer = window.setTimeout(() => setXpBurst(null), 1300);
    return () => window.clearTimeout(timer);
  }, [xpBurst]);

  function submitAnswer(value: string) {
    if (!question || answered) return;
    const gained = recordAnswer({
      question,
      answer: value,
      correct: isQuestionAnswerCorrect(question, value),
    });
    if (gained > 0) setXpBurst({ questionId: question.id, amount: gained });
  }

  function submitChoice() {
    if (!selected) return;
    submitAnswer(selected);
  }

  function handleNext() {
    if (!session) return;
    if (session.index >= sessionQuestions.length - 1) {
      setCompletedHere(true);
    }
    advanceSession();
  }

  function replay() {
    setSelection({ questionId: "", optionId: null });
    setXpBurst(null);
    setCompletedHere(false);
    startSession({
      courseId,
      tier,
      topicId: session?.topicId ?? null,
      questionIds: sessionQuestions.map((item) => item.id),
    });
  }

  if (!hydrated) {
    return <QuizSkeleton />;
  }

  if (!session) {
    return <QuizSkeleton />;
  }

  if (session.status === "complete" && !completedHere) {
    return <QuizSkeleton />;
  }

  if (session.status === "complete") {
    return (
      <QuizResults
        session={session}
        questions={sessionQuestions}
        badges={profile.badges}
        totalXp={profile.xp}
        onReplay={replay}
      />
    );
  }

  if (!question) {
    return (
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-xl rounded-xl border border-line bg-surface p-8 text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-lg bg-lime/[0.06] text-lime">
            <Sparkles className="size-5" aria-hidden />
          </div>
          <h1 className="mt-4 text-xl font-semibold text-mist">This run is warming up.</h1>
          <p className="mt-2 text-sm leading-6 text-muted">
            There are no playable questions for this topic yet. The curriculum map shows what is
            live and what is queued next.
          </p>
          <Link
            href={`/learn/${courseId}`}
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-lime px-5 text-xs font-semibold text-white transition hover:bg-lime/90"
          >
            Back to the {course.title} map
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    );
  }

  const total = sessionQuestions.length;
  const currentNumber = Math.min(session.index + 1, total);
  const isLast = session.index >= total - 1;
  const progress = Math.round(((session.index + (answered ? 1 : 0)) / total) * 100);

  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
          <Link
            href={`/learn/${courseId}`}
            className="inline-flex items-center gap-1.5 rounded-md px-1 py-1 text-xs font-medium text-muted transition hover:text-mist"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Exit run
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
            <span className="hidden sm:inline">
              {course.title} / {tierMeta[tier].label}
            </span>
            <span className="flex items-center gap-1.5">
              <Target className="size-3.5 text-sky" aria-hidden />
              <span className="font-mono text-mist">
                {currentNumber}/{total}
              </span>
              questions
            </span>
            <span className="flex items-center gap-1.5">
              <Flame className="size-3.5 text-coral" aria-hidden />
              <span className="font-mono text-mist">x{session.combo}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="size-3.5 text-lime" aria-hidden />
              <span className="font-mono text-mist">{session.xpEarned} XP</span>
            </span>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-raised">
            <div
              className="h-full rounded-full bg-lime transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] tabular-nums text-faint">{progress}%</span>
        </div>

        <div className="grid items-start gap-4 lg:grid-cols-[1.45fr_0.85fr]">
          <div className="min-w-0 space-y-4">
            <div className="relative min-w-0 overflow-hidden rounded-xl border border-line bg-surface p-5 sm:p-6">
              {visibleXpBurst !== null && (
                <div className="pop absolute right-5 top-4 z-10 rounded-md bg-lime px-2.5 py-1 font-mono text-[10px] font-semibold text-white">
                  +{visibleXpBurst} XP
                </div>
              )}

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pr-16 text-xs">
                <span className="font-medium text-lime">{question.topicTitle}</span>
                <span className="text-faint">
                  {tierMeta[tier].label} / +{question.xp} XP
                </span>
              </div>

              <h1 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-mist sm:text-2xl">
                {question.title}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{question.prompt}</p>

              {question.code && (
                <div className="mt-4">
                  <CodeBlock
                    code={question.code}
                    filename={codeFileName(question.codeLanguage)}
                  />
                </div>
              )}

              <div className="mt-4">
                <QuestionVisual question={question} />
              </div>

              <div className="mt-5 border-t border-line pt-5">
                {question.type === "fill-blank" ? (
                  answered ? (
                    <div className="space-y-3">
                      <div>
                        <div className="mb-1.5 text-xs font-medium text-muted">
                          Your answer
                        </div>
                        <div className="rounded-lg border border-line bg-canvas px-4 py-3 font-mono text-sm text-mist">
                          {answer?.answer}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <FillBlankAnswer
                      key={question.id}
                      onSubmit={submitAnswer}
                      disabled={answered}
                    />
                  )
                ) : question.type === "multi-select" ? (
                  answered ? (
                    <SubmittedAnswer question={question} answer={answer?.answer} />
                  ) : (
                    <MultiSelectAnswer question={question} onSubmit={submitAnswer} />
                  )
                ) : question.type === "ordering" ? (
                  answered ? (
                    <SubmittedAnswer question={question} answer={answer?.answer} />
                  ) : (
                    <OrderingAnswer question={question} onSubmit={submitAnswer} />
                  )
                ) : (
                  <div className="space-y-2">
                    {question.options?.map((option, index) => {
                      const isCorrectOption = option.id === question.correctOptionId;
                      const isSelected = selected === option.id;
                      const isSubmitted = answer?.answer === option.id;

                      return (
                        <button
                          key={option.id}
                          type="button"
                          disabled={answered}
                          onClick={() => setSelection({ questionId: question.id, optionId: option.id })}
                          className={cn(
                            "group flex w-full items-center gap-3 rounded-lg border px-3.5 py-3 text-left transition",
                            !answered &&
                              isSelected &&
                              "border-lime/50 bg-lime/[0.045] text-mist",
                            !answered &&
                              !isSelected &&
                              "border-line bg-surface text-muted hover:border-line-strong hover:bg-canvas",
                            answered &&
                              isCorrectOption &&
                              "border-success/35 bg-success/[0.055] text-mist",
                            answered &&
                              !isCorrectOption &&
                              isSubmitted &&
                              "border-coral/35 bg-coral/[0.05] text-mist",
                            answered &&
                              !isCorrectOption &&
                              !isSubmitted &&
                              "border-line bg-canvas/50 text-faint opacity-60",
                          )}
                        >
                          <span
                            className={cn(
                              "grid size-6 shrink-0 place-items-center rounded border text-[10px] font-medium",
                              !answered &&
                                isSelected &&
                                "border-lime/40 bg-lime/10 text-lime",
                              !answered &&
                                !isSelected &&
                                "border-line bg-canvas text-faint",
                              answered &&
                                isCorrectOption &&
                                "border-success/35 bg-success/10 text-success",
                              answered &&
                                !isCorrectOption &&
                                isSubmitted &&
                                "border-coral/35 bg-coral/10 text-coral",
                              answered &&
                                !isCorrectOption &&
                                !isSubmitted &&
                                "border-line text-faint",
                            )}
                          >
                            {answered && isCorrectOption ? (
                              <Check className="size-3" aria-hidden />
                            ) : answered && isSubmitted ? (
                              <X className="size-3" aria-hidden />
                            ) : (
                              String.fromCharCode(65 + index)
                            )}
                          </span>
                          <span
                            className={cn(
                              "min-w-0 flex-1 text-left text-[13px] leading-5",
                              option.mono && "whitespace-pre-wrap font-mono text-[12px] leading-5",
                            )}
                          >
                            {option.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {answer && (
                  <div
                    className={cn(
                      "mt-4 rounded-lg border p-3.5",
                      answer.correct
                        ? "border-success/20 bg-success/[0.035]"
                        : "border-coral/20 bg-coral/[0.035]",
                    )}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          answer.correct ? "bg-success/10 text-success" : "bg-coral/10 text-coral",
                        )}
                      >
                        {answer.correct ? (
                          <Check className="size-3" aria-hidden />
                        ) : (
                          <X className="size-3" aria-hidden />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={cn(
                              "text-sm font-medium",
                              answer.correct ? "text-success" : "text-coral",
                            )}
                          >
                            {answer.correct ? "Correct" : "Not quite"}
                          </span>
                          {answer.correct && (
                            <span className="rounded border border-success/20 bg-success/[0.06] px-1.5 py-0.5 font-mono text-[9px] text-success">
                              +{answer.xpEarned} XP
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs leading-5 text-muted">
                          {question.explanation}
                        </p>
                        {!answer.correct && (
                          <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] text-faint">
                            <Lightbulb className="size-3 text-success" aria-hidden />
                            Correct answer:
                            <span className="rounded border border-success/20 bg-success/[0.05] px-1.5 py-0.5 font-mono text-success">
                              {question.answerDisplay}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex flex-col gap-2 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
                  {answered ? (
                    <>
                      <p className="flex items-center gap-1.5 text-[10px] text-faint">
                        <Sparkles className="size-3 text-lime" aria-hidden />
                        The full note is beside this question.
                      </p>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-lime px-5 text-xs font-semibold text-white transition hover:bg-lime/90"
                      >
                        {isLast ? "See results" : "Next question"}
                        <ArrowRight className="size-3.5" aria-hidden />
                      </button>
                    </>
                  ) : question.type === "fill-blank" ? (
                    <p className="flex items-center gap-1.5 text-[10px] text-faint">
                      <Lightbulb className="size-3 text-lime" aria-hidden />
                      Type the missing code, then check your answer.
                    </p>
                  ) : question.type === "multi-select" ? (
                    <p className="flex items-center gap-1.5 text-[10px] text-faint">
                      <Lightbulb className="size-3 text-lime" aria-hidden />
                      Select every correct statement, then check your answer.
                    </p>
                  ) : question.type === "ordering" ? (
                    <p className="flex items-center gap-1.5 text-[10px] text-faint">
                      <Lightbulb className="size-3 text-lime" aria-hidden />
                      Reorder the steps, then check your sequence.
                    </p>
                  ) : (
                    <>
                      <p className="flex items-center gap-1.5 text-[10px] text-faint">
                        <Lightbulb className="size-3 text-lime" aria-hidden />
                        Pick one answer, then check it.
                      </p>
                      <button
                        type="button"
                        onClick={submitChoice}
                        disabled={!selected}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-lime px-5 text-xs font-semibold text-white transition hover:bg-lime/90 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Check answer
                        <ArrowRight className="size-3.5" aria-hidden />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <NotesPanel question={question} className="lg:hidden" />
          </div>

          <NotesPanel question={question} className="sticky top-24 hidden lg:block" />
        </div>
      </div>
    </main>
  );
}

function SubmittedAnswer({
  question,
  answer,
}: {
  question: CourseQuestion;
  answer?: string;
}) {
  return (
    <div>
      <div className="mb-1.5 text-xs font-medium text-muted">Your answer</div>
      <div className="rounded-lg border border-line bg-canvas px-4 py-3 font-mono text-sm leading-6 text-mist">
        {formatQuestionAnswer(question, answer ?? "")}
      </div>
    </div>
  );
}

function codeFileName(language: string | undefined) {
  switch (language) {
    case "jsx":
      return "App.tsx";
    case "tsx":
      return "App.tsx";
    case "html":
      return "index.html";
    case "css":
      return "styles.css";
    case "javascript":
      return "app.js";
    case "typescript":
      return "app.ts";
    case "bash":
      return "terminal";
    default:
      return undefined;
  }
}

function QuizSkeleton() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between border-b border-line pb-4">
          <div className="shimmer h-5 w-20 rounded" />
          <div className="shimmer h-5 w-40 rounded" />
        </div>
        <div className="shimmer mb-6 h-1 w-full rounded-full" />
        <div className="grid gap-4 lg:grid-cols-[1.45fr_0.85fr]">
          <div className="rounded-xl border border-line bg-surface p-6">
            <div className="shimmer h-4 w-36 rounded" />
            <div className="shimmer mt-4 h-8 w-2/3 rounded" />
            <div className="shimmer mt-3 h-4 w-full rounded" />
            <div className="shimmer mt-5 h-24 w-full rounded-lg" />
            <div className="shimmer mt-4 h-44 w-full rounded-lg" />
          </div>
          <div className="hidden h-96 rounded-xl border border-line bg-surface p-5 lg:block">
            <div className="shimmer h-full w-full rounded-lg" />
          </div>
        </div>
      </div>
    </main>
  );
}
