import Link from "next/link";
import {
  ArrowRight,
  Check,
  Flame,
  Home,
  Map as MapIcon,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { BadgeShelf } from "@/components/badges";
import { getCourse } from "@/lib/content/courses";
import { tierMeta } from "@/lib/content/questions";
import type { PlaySession } from "@/lib/store/progress-store";
import type { Question } from "@/lib/content/schema";
import { cn, formatQuestionAnswer, levelProgress } from "@/lib/utils";

function scoreCopy(percent: number) {
  if (percent >= 90) {
    return {
      title: "Sharp run.",
      copy: "Your pattern recognition is strong. Replay it once more to lock the details in.",
      icon: Trophy,
      tint: "text-lime",
      bg: "bg-lime/[0.06]",
      border: "border-lime/20",
    };
  }
  if (percent >= 70) {
    return {
      title: "Clean run.",
      copy: "Strong signal. The notes behind the misses are your next two-minute win.",
      icon: Sparkles,
      tint: "text-success",
      bg: "bg-success/[0.06]",
      border: "border-success/20",
    };
  }
  if (percent >= 50) {
    return {
      title: "Momentum found.",
      copy: "Half the syntax is already sticking. Replay the run and watch the score move.",
      icon: Target,
      tint: "text-sky",
      bg: "bg-sky/[0.06]",
      border: "border-sky/20",
    };
  }
  return {
    title: "Data collected.",
    copy: "Every wrong answer came with notes. Read them, replay, and the patterns will click.",
    icon: Sparkles,
    tint: "text-coral",
    bg: "bg-coral/[0.06]",
    border: "border-coral/20",
  };
}

export function QuizResults({
  session,
  questions,
  badges,
  totalXp,
  onReplay,
}: {
  session: PlaySession;
  questions: Question[];
  badges: string[];
  totalXp: number;
  onReplay: () => void;
}) {
  const course = getCourse(session.courseId);
  const answered = session.answers.length;
  const correct = session.answers.filter((answer) => answer.correct).length;
  const percent = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const copy = scoreCopy(percent);
  const Icon = copy.icon;
  const level = levelProgress(totalXp);
  const questionsById = new Map(questions.map((question) => [question.id, question]));

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        <div className="px-5 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-5 border-b border-line pb-7 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-xs text-faint">
                {course.title} / {tierMeta[session.tier].label}
              </div>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-mist sm:text-4xl">
                {copy.title}
              </h1>
              <p className="mt-2 max-w-lg text-sm leading-6 text-muted">{copy.copy}</p>
            </div>
            <span
              className={cn(
                "grid size-14 shrink-0 place-items-center rounded-lg border",
                copy.bg,
                copy.border,
                copy.tint,
              )}
            >
              <Icon className="size-6" aria-hidden />
            </span>
          </div>

          <div className="mt-7 grid grid-cols-2 divide-x divide-y divide-line border-y border-line sm:grid-cols-4 sm:divide-y-0">
            {[
              {
                icon: Target,
                label: "Score",
                value: `${percent}%`,
                detail: `${correct}/${answered} correct`,
                accent: "text-lime",
              },
              {
                icon: Zap,
                label: "XP earned",
                value: `+${session.xpEarned}`,
                detail: `total ${totalXp} XP`,
                accent: "text-sky",
              },
              {
                icon: Flame,
                label: "Best combo",
                value: `x${session.maxCombo}`,
                detail: "in this run",
                accent: "text-coral",
              },
              {
                icon: Sparkles,
                label: "Level",
                value: `${level.level}`,
                detail: level.rank,
                accent: "text-violet",
              },
            ].map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="px-3 py-4 sm:px-4">
                  <StatIcon className={cn("size-3.5", stat.accent)} aria-hidden />
                  <div className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-mist">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-faint">{stat.label}</div>
                  <div className="mt-0.5 text-[10px] text-faint">{stat.detail}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <button
              type="button"
              onClick={onReplay}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-lime px-5 text-sm font-semibold text-white transition hover:bg-lime/90"
            >
              <RotateCcw className="size-4" aria-hidden />
              Play again
            </button>
            <Link
              href={`/learn/${course.id}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 text-sm font-medium text-mist transition hover:border-line-strong hover:bg-raised"
            >
              <MapIcon className="size-4 text-muted" aria-hidden />
              Back to {course.title}
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 text-sm font-medium text-mist transition hover:border-line-strong hover:bg-raised"
            >
              <Home className="size-4 text-muted" aria-hidden />
              Home
            </Link>
          </div>
        </div>

        <div className="border-t border-line px-5 py-5 sm:px-10">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-xs font-medium text-muted">Badge shelf</div>
            <div className="text-[10px] text-faint">{badges.length} unlocked</div>
          </div>
          <BadgeShelf earned={badges} />
        </div>

        <details className="group border-t border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm text-mist transition hover:bg-canvas/70 sm:px-10">
            <span className="flex items-center gap-2">
              <Target className="size-4 text-muted" aria-hidden />
              Review every answer
            </span>
            <span className="flex items-center gap-2 text-[10px] text-faint">
              {correct}/{answered}
              <ArrowRight className="size-3 transition-transform group-open:rotate-90" aria-hidden />
            </span>
          </summary>
          <div className="divide-y divide-line border-t border-line">
            {session.answers.map((answer, index) => {
              const question = questionsById.get(answer.questionId);
              return (
                <div key={`${answer.questionId}-${index}`} className="flex gap-3 px-5 py-3 sm:px-10">
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
                      <span className="text-xs font-medium text-mist">
                        {index + 1}. {question?.title ?? "Question"}
                      </span>
                      <span className="text-[10px] text-faint">{question?.topicTitle}</span>
                    </div>
                    {!answer.correct && question && (
                      <p className="mt-1 text-[10px] leading-4 text-faint">
                        Correct:{" "}
                        <span className="font-mono text-success">{question.answerDisplay}</span>
                        {" / "}Your answer:{" "}
                        <span className="font-mono text-coral">
                          {formatQuestionAnswer(question, answer.answer)}
                        </span>
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 font-mono text-[9px] text-faint">
                    +{answer.xpEarned} XP
                  </span>
                </div>
              );
            })}
          </div>
        </details>
      </div>
    </div>
  );
}
