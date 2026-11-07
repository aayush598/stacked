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
      title: "S-tier syntax run.",
      copy: "Your pattern recognition is sharp. Keep the combo alive with a replay.",
      tone: "text-lime",
      icon: Trophy,
    };
  }
  if (percent >= 70) {
    return {
      title: "Clean run.",
      copy: "Strong signal. The notes behind the misses are your next two-minute win.",
      tone: "text-lime",
      icon: Sparkles,
    };
  }
  if (percent >= 50) {
    return {
      title: "Momentum found.",
      copy: "Half the syntax is already sticking. Replay the run and watch the score jump.",
      tone: "text-sky",
      icon: Target,
    };
  }
  return {
    title: "Data collected.",
    copy: "Every wrong answer came with notes. Read them, replay, and the patterns will click.",
    tone: "text-coral",
    icon: Sparkles,
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
      <div className="panel relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-lime/[0.09] blur-3xl" aria-hidden />
        <div className="relative px-5 py-8 text-center sm:px-10 sm:py-10">
          <div className="mx-auto grid size-16 place-items-center rounded-2xl border border-lime/20 bg-lime/[0.08] text-lime">
            <Icon className="size-7" aria-hidden />
          </div>
          <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            Run complete · {course.title} {tierMeta[session.tier].label.toLowerCase()}
          </div>
          <h1 className={cn("mt-2 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl", copy.tone)}>
            {copy.title}
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-muted">{copy.copy}</p>

          <div className="mx-auto mt-7 grid max-w-2xl grid-cols-2 gap-2.5 sm:grid-cols-4">
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
                <div key={stat.label} className="rounded-xl border border-line bg-white/[0.025] px-3 py-3">
                  <StatIcon className={cn("mx-auto size-3.5", stat.accent)} aria-hidden />
                  <div className="mt-1.5 text-xl font-semibold text-mist">{stat.value}</div>
                  <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 text-[9px] text-faint">{stat.detail}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col justify-center gap-2.5 sm:flex-row">
            <button
              type="button"
              onClick={onReplay}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-lime px-6 text-sm font-semibold text-[#111609] transition hover:bg-lime-soft"
            >
              <RotateCcw className="size-4" aria-hidden />
              Play again
            </button>
            <Link
              href={`/learn/${course.id}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 text-sm font-medium text-mist transition hover:border-line-strong hover:bg-white/[0.06]"
            >
              <MapIcon className="size-4 text-muted" aria-hidden />
              Back to {course.title} map
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 text-sm font-medium text-mist transition hover:border-line-strong hover:bg-white/[0.06]"
            >
              <Home className="size-4 text-muted" aria-hidden />
              Home
            </Link>
          </div>
        </div>

        <div className="border-t border-line px-5 py-5 sm:px-10">
          <div className="mb-3 flex items-center justify-between">
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
              Badge shelf
            </div>
            <div className="text-[10px] text-faint">{badges.length} unlocked</div>
          </div>
          <BadgeShelf earned={badges} />
        </div>

        <details className="group border-t border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm text-mist transition hover:bg-white/[0.02] sm:px-10">
            <span className="flex items-center gap-2">
              <Target className="size-4 text-muted" aria-hidden />
              Review every answer
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] text-faint">
              {correct}/{answered}
              <ArrowRight className="size-3 transition-transform group-open:rotate-90" aria-hidden />
            </span>
          </summary>
          <div className="divide-y divide-line/60 border-t border-line/60">
            {session.answers.map((answer, index) => {
              const question = questionsById.get(answer.questionId);
              return (
                <div key={`${answer.questionId}-${index}`} className="flex gap-3 px-5 py-3 sm:px-10">
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
                      <span className="text-xs font-medium text-mist">
                        {index + 1}. {question?.title ?? "Question"}
                      </span>
                      <span className="font-mono text-[9px] text-faint">
                        {question?.topicTitle}
                      </span>
                    </div>
                    {!answer.correct && question && (
                      <p className="mt-1 text-[10px] leading-4 text-faint">
                        Correct:{" "}
                        <span className="font-mono text-lime/90">{question.answerDisplay}</span>
                        {" · "}Your answer:{" "}
                        <span className="font-mono text-coral/90">{formatQuestionAnswer(question, answer.answer)}</span>
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 font-mono text-[9px] text-lime/80">
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
