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
import { cn, isAnswerCorrect } from "@/lib/utils";

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

  function submitChoice() {
    if (!question || answered || !selected) return;
    const gained = recordAnswer({
      question,
      answer: selected,
      correct: selected === question.correctOptionId,
    });
    if (gained > 0) setXpBurst({ questionId: question.id, amount: gained });
  }

  function submitFill(value: string) {
    if (!question || answered) return;
    const gained = recordAnswer({
      question,
      answer: value,
      correct: isAnswerCorrect(value, question.acceptedAnswers ?? []),
    });
    if (gained > 0) setXpBurst({ questionId: question.id, amount: gained });
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
        <div className="panel mx-auto max-w-xl p-8 text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-lime/10 text-lime">
            <Sparkles className="size-5" aria-hidden />
          </div>
          <h1 className="mt-4 text-xl font-semibold text-mist">This run is warming up.</h1>
          <p className="mt-2 text-sm leading-6 text-muted">
            There are no playable questions for this topic yet. The full curriculum map shows
            what is live and what is queued next.
          </p>
          <Link
            href={`/learn/${courseId}`}
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-lime px-5 text-xs font-semibold text-[#111609] transition hover:bg-lime-soft"
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
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/learn/${courseId}`}
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs text-faint transition hover:bg-white/[0.04] hover:text-mist"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Exit run
          </Link>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-[11px] text-muted">
              <Target className="size-3 text-sky" aria-hidden />
              <span className="font-mono text-mist">
                {currentNumber}/{total}
              </span>
              <span className="hidden sm:inline">questions</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-coral/20 bg-coral/[0.06] px-3 py-1.5 font-mono text-[11px] text-coral">
              <Flame className="size-3" aria-hidden />
              x{session.combo}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-lime/20 bg-lime/[0.06] px-3 py-1.5 font-mono text-[11px] text-lime">
              <Zap className="size-3" aria-hidden />
              {session.xpEarned} XP
            </span>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-lime to-sky transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
            {progress}%
          </span>
        </div>

        <div className="grid items-start gap-4 lg:grid-cols-[1.45fr_0.85fr]">
          <div className="min-w-0 space-y-4">
            <div className="panel relative min-w-0 overflow-hidden p-5 sm:p-6">
              {visibleXpBurst !== null && (
                <div className="pop absolute right-5 top-4 z-10 rounded-full border border-lime/30 bg-lime px-3 py-1 font-mono text-[10px] font-semibold text-[#111609] shadow-lg">
                  +{visibleXpBurst} XP
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2 pr-16">
                <span className="rounded-full border border-sky/20 bg-sky/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-sky">
                  {question.topicTitle}
                </span>
                <span className="rounded-full border border-lime/20 bg-lime/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-lime">
                  {tierMeta[tier].label} · {tierMeta[tier].tag.toLowerCase()}
                </span>
                <span className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                  +{question.xp} XP
                </span>
              </div>

              <h1 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-mist sm:text-2xl">
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
                        <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                          Your answer
                        </div>
                        <div className="rounded-xl border border-line bg-black/30 px-4 py-3 font-mono text-sm text-mist">
                          {answer?.answer}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <FillBlankAnswer
                      key={question.id}
                      onSubmit={submitFill}
                      disabled={answered}
                    />
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
                            "group flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition",
                            !answered &&
                              isSelected &&
                              "border-sky/45 bg-sky/[0.07] text-mist",
                            !answered &&
                              !isSelected &&
                              "border-line bg-white/[0.02] text-muted hover:border-line-strong hover:bg-white/[0.04]",
                            answered &&
                              isCorrectOption &&
                              "border-lime/35 bg-lime/[0.07] text-lime-soft",
                            answered &&
                              !isCorrectOption &&
                              isSubmitted &&
                              "border-coral/35 bg-coral/[0.06] text-coral",
                            answered &&
                              !isCorrectOption &&
                              !isSubmitted &&
                              "border-line bg-white/[0.01] text-faint opacity-55",
                          )}
                        >
                          <span
                            className={cn(
                              "grid size-6 shrink-0 place-items-center rounded-lg border text-[10px] font-medium",
                              !answered &&
                                isSelected &&
                                "border-sky/40 bg-sky/10 text-sky",
                              !answered &&
                                !isSelected &&
                                "border-line bg-white/[0.03] text-faint",
                              answered &&
                                isCorrectOption &&
                                "border-lime/40 bg-lime/15 text-lime",
                              answered &&
                                !isCorrectOption &&
                                isSubmitted &&
                                "border-coral/40 bg-coral/15 text-coral",
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
                      "mt-4 rounded-xl border p-3.5",
                      answer.correct
                        ? "border-lime/20 bg-lime/[0.04]"
                        : "border-coral/20 bg-coral/[0.04]",
                    )}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          answer.correct ? "bg-lime/15 text-lime" : "bg-coral/15 text-coral",
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
                              answer.correct ? "text-lime" : "text-coral",
                            )}
                          >
                            {answer.correct ? "Correct" : "Not quite"}
                          </span>
                          {answer.correct && (
                            <span className="rounded-full border border-lime/20 bg-lime/[0.08] px-2 py-0.5 font-mono text-[9px] text-lime">
                              +{answer.xpEarned} XP
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[11px] leading-5 text-muted">
                          {question.explanation}
                        </p>
                        {!answer.correct && (
                          <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] text-faint">
                            <Lightbulb className="size-3 text-lime" aria-hidden />
                            Correct answer:
                            <span className="rounded-md border border-lime/20 bg-lime/[0.05] px-1.5 py-0.5 font-mono text-lime">
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
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-lime px-5 text-xs font-semibold text-[#111609] transition hover:bg-lime-soft"
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
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-lime px-5 text-xs font-semibold text-[#111609] transition hover:bg-lime-soft disabled:cursor-not-allowed disabled:opacity-40"
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
        <div className="mb-4 flex items-center justify-between">
          <div className="shimmer h-6 w-20 rounded-full" />
          <div className="shimmer h-6 w-40 rounded-full" />
        </div>
        <div className="shimmer mb-6 h-1.5 w-full rounded-full" />
        <div className="grid gap-4 lg:grid-cols-[1.45fr_0.85fr]">
          <div className="panel space-y-4 p-6">
            <div className="shimmer h-5 w-36 rounded-full" />
            <div className="shimmer h-8 w-2/3 rounded-lg" />
            <div className="shimmer h-4 w-full rounded" />
            <div className="shimmer h-24 w-full rounded-xl" />
            <div className="shimmer h-44 w-full rounded-xl" />
          </div>
          <div className="panel hidden h-96 p-5 lg:block">
            <div className="shimmer h-full w-full rounded-xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
