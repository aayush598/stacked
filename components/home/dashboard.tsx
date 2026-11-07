"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  CheckCircle2,
  Flame,
  Layers,
  Play,
  Sparkles,
  Target,
  Timer,
  Trophy,
  Zap,
} from "lucide-react";
import { CourseGrid } from "@/components/course-grid";
import { LevelRing } from "@/components/ui/level-ring";
import { courses, getCourse, totals } from "@/lib/content/courses";
import {
  allQuestions,
  getTopicHref,
  questionById,
  questionCountsByTier,
} from "@/lib/content/questions";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { currentStreak, useProgressStore } from "@/lib/store/progress-store";
import { cn, levelProgress, pluralize } from "@/lib/utils";

const tierCards = [
  {
    name: "Easy",
    tag: "Syntax",
    description: "Recognise patterns and finish a run in a few minutes.",
    icon: Sparkles,
    accent: "lime",
    count: questionCountsByTier.easy,
  },
  {
    name: "Medium",
    tag: "Read code",
    description: "Reason through short snippets and predict behavior.",
    icon: BookOpen,
    accent: "sky",
    count: questionCountsByTier.medium,
  },
  {
    name: "Hard",
    tag: "Build",
    description: "Work through production-style constraints and edge cases.",
    icon: Brain,
    accent: "coral",
    count: questionCountsByTier.hard,
  },
  {
    name: "Complex",
    tag: "Write code",
    description: "Manual builds, architecture and interview-grade work.",
    icon: Trophy,
    accent: "violet",
    count: questionCountsByTier.complex,
  },
] as const;

const accentMap = {
  lime: {
    text: "text-lime",
    bg: "bg-lime/[0.07]",
    border: "border-lime/20",
  },
  sky: {
    text: "text-sky",
    bg: "bg-sky/[0.08]",
    border: "border-sky/20",
  },
  coral: {
    text: "text-coral",
    bg: "bg-coral/[0.07]",
    border: "border-coral/20",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/[0.07]",
    border: "border-violet/20",
  },
} as const;

function StatCard({
  icon: Icon,
  label,
  value,
  suffix,
  accent,
  hydrated,
}: {
  icon: typeof Zap;
  label: string;
  value: number | string;
  suffix?: string;
  accent: "lime" | "coral" | "sky" | "violet";
  hydrated: boolean;
}) {
  const colors = accentMap[accent];
  return (
    <div className="px-4 py-4 sm:px-5">
      <div className="flex items-center gap-1.5 text-xs text-faint">
        <Icon className={cn("size-3.5", colors.text)} aria-hidden />
        {label}
      </div>
      <div className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-mist">
        {hydrated ? value : "—"}
        {hydrated && suffix ? (
          <span className="ml-1.5 text-xs font-normal text-faint">{suffix}</span>
        ) : null}
      </div>
    </div>
  );
}

export function Dashboard() {
  const hydrated = useHydrated();
  const profile = useProgressStore((state) => state.profile);
  const answers = useProgressStore((state) => state.answers);
  const activeSession = useProgressStore((state) => state.activeSession);

  const cleared = Object.values(answers).filter((answer) => answer.correct).length;
  const accuracy =
    profile.totalAnswered > 0
      ? Math.round((profile.totalCorrect / profile.totalAnswered) * 100)
      : 0;
  const level = levelProgress(profile.xp);
  const streak = hydrated ? currentStreak(profile) : 0;
  const nextQuestion = allQuestions.find((question) => !answers[question.id]?.correct);
  const nextCourse = nextQuestion ? getCourse(nextQuestion.courseId) : null;
  const activeCourse = activeSession ? getCourse(activeSession.courseId) : null;
  const sample = questionById.get("html.document.skeleton");
  const resumable = activeSession?.status === "active";
  const playHref = activeSession
    ? `/play/${activeSession.courseId}/${activeSession.tier}${
        activeSession.topicId
          ? `?topic=${encodeURIComponent(activeSession.topicId)}`
          : ""
      }`
    : nextQuestion
      ? getTopicHref(nextQuestion.topicId)
      : "/play/html/easy";

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-lime">
              Six courses. Four tiers. One complete stack.
            </p>
            <h1 className="mt-4 max-w-2xl text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.05em] text-mist sm:text-6xl">
              Learn the frontend stack, one layer at a time.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              Build real confidence across HTML, CSS, JavaScript, Bootstrap, React and
              TypeScript. {allQuestions.length.toLocaleString()} visual questions, concise
              notes and code review on every answer.
            </p>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href={playHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-lime px-5 text-sm font-semibold text-white transition hover:bg-lime/90"
              >
                <Play className="size-4 fill-current" aria-hidden />
                {resumable ? "Resume your run" : "Start a quick run"}
              </Link>
              <Link
                href="/learn"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 text-sm font-medium text-mist transition hover:border-line-strong hover:bg-raised"
              >
                <Layers className="size-4 text-muted" aria-hidden />
                Browse the curriculum
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs text-faint">
              {[
                ["6", "full courses"],
                ["Notes", "on every question"],
                ["XP +", "streaks and badges"],
              ].map(([strong, rest]) => (
                <span key={strong} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime" aria-hidden />
                  <span className="font-medium text-muted">{strong}</span> {rest}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-medium text-mist">Daily run</span>
                  <span className="text-faint">HTML / Easy</span>
                </div>
                <span className="text-xs text-faint">{sample?.xp ?? 10} XP</span>
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-xs font-medium text-lime">
                  {sample?.topicTitle ?? "HTML foundations"} / question 01
                </p>
                <p className="mt-2 text-[15px] font-medium leading-6 text-mist">
                  {sample?.prompt ?? "Which three elements form the skeleton of an HTML document?"}
                </p>

                <div className="mt-4 space-y-2">
                  {sample?.options?.map((option, index) => {
                    const correct = option.id === sample.correctOptionId;
                    return (
                      <div
                        key={option.id}
                        className={cn(
                          "flex items-center gap-2.5 rounded-lg border px-3 py-2.5 font-mono text-[12px]",
                          correct
                            ? "border-success/30 bg-success/[0.055] text-mist"
                            : "border-line bg-canvas/60 text-muted",
                        )}
                      >
                        <span
                          className={cn(
                            "grid size-5 shrink-0 place-items-center rounded border text-[10px]",
                            correct
                              ? "border-success/30 bg-success/10 text-success"
                              : "border-line text-faint",
                          )}
                        >
                          {correct ? <Check className="size-3" /> : String.fromCharCode(65 + index)}
                        </span>
                        {option.label}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3 text-[11px]">
                  <span className="flex items-center gap-1.5 text-muted">
                    <BookOpen className="size-3.5 text-sky" aria-hidden />
                    Notes and diagram included
                  </span>
                  <span className="flex items-center gap-1.5 text-coral">
                    <Flame className="size-3.5" aria-hidden />
                    combo x4
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-3 px-1 text-xs leading-5 text-faint">
              A real question from the HTML bank. Every answer opens a short note, a visual and a
              memory hook.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-line border-y border-line sm:grid-cols-4 sm:divide-y-0">
          <StatCard
            icon={Zap}
            label="Total XP"
            value={profile.xp}
            suffix={`Level ${level.level}`}
            accent="lime"
            hydrated={hydrated}
          />
          <StatCard
            icon={Flame}
            label="Streak"
            value={streak}
            suffix={streak === 1 ? "day" : "days"}
            accent="coral"
            hydrated={hydrated}
          />
          <StatCard
            icon={Target}
            label="Accuracy"
            value={`${accuracy}%`}
            suffix={profile.totalAnswered ? `${profile.totalAnswered} answers` : "not started"}
            accent="sky"
            hydrated={hydrated}
          />
          <StatCard
            icon={CheckCircle2}
            label="Cleared"
            value={`${cleared}/${allQuestions.length}`}
            suffix="all tiers"
            accent="violet"
            hydrated={hydrated}
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1fr_22rem]">
          <div className="rounded-xl border border-line bg-surface p-5 sm:p-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="hidden sm:block">
                  <LevelRing xp={profile.xp} size={82} />
                </div>
                <div>
                  <p className="text-xs font-medium text-lime">
                    {resumable ? "Run in progress" : "Continue your quest"}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold tracking-[-0.02em] text-mist">
                    {resumable
                      ? `Resume ${activeCourse?.title} at question ${activeSession.index + 1}`
                      : nextQuestion
                        ? `${nextCourse?.title} / ${nextQuestion.topicTitle}`
                        : "Everything cleared"}
                  </h2>
                  <p className="mt-1 max-w-md text-sm leading-6 text-muted">
                    {resumable
                      ? "Your session is saved in this browser. Pick up exactly where you stopped."
                      : nextQuestion
                        ? nextQuestion.title
                        : "Replay any topic to keep your patterns sharp."}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-1.5 w-40 overflow-hidden rounded-full bg-raised">
                      <div
                        className="h-full rounded-full bg-lime transition-all duration-700"
                        style={{
                          width: `${Math.round((cleared / allQuestions.length) * 100)}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-faint">
                      {cleared} / {allQuestions.length} cleared
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href={playHref}
                className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-line-strong px-4 text-sm font-medium text-mist transition hover:bg-raised"
              >
                {resumable ? "Resume" : "Start"}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-surface p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-violet/[0.07] text-violet">
                <Trophy className="size-4.5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-mist">{level.rank}</span>
                  <span className="text-xs text-faint">
                    {level.into}/{level.needed} XP
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-raised">
                  <div
                    className="h-full rounded-full bg-violet transition-all duration-700"
                    style={{ width: `${level.percent}%` }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 border-t border-line pt-3 text-xs leading-5 text-faint">
              {profile.badges.length} badges collected. Best combo {profile.bestCombo}.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-lime">Course tracks</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-mist sm:text-3xl">
              Six layers. One complete frontend stack.
            </h2>
          </div>
          <Link
            href="/learn"
            className="hidden items-center gap-1.5 text-sm font-medium text-muted transition hover:text-mist sm:inline-flex"
          >
            View all courses
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
        <CourseGrid />
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium text-lime">Difficulty ladder</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-mist sm:text-3xl">
              Start where you are. Go as deep as you need.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
              Each course has four playable tiers, from syntax recognition to full manual builds.
              The tier changes the thinking, not the curriculum.
            </p>
            <Link
              href="/learn"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-mist transition hover:text-lime"
            >
              Choose a course
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>

          <div className="border-t border-line">
            {tierCards.map((tier, index) => {
              const colors = accentMap[tier.accent];
              const Icon = tier.icon;
              return (
                <div
                  key={tier.name}
                  className="grid grid-cols-[2rem_1fr_auto] items-start gap-3 border-b border-line py-4 sm:grid-cols-[2rem_1fr_9rem_auto] sm:items-center sm:gap-4"
                >
                  <span className="pt-0.5 text-xs tabular-nums text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border",
                        colors.bg,
                        colors.border,
                        colors.text,
                      )}
                    >
                      <Icon className="size-3.5" aria-hidden />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <h3 className="text-sm font-semibold text-mist">{tier.name}</h3>
                        <span className="text-[11px] text-faint">{tier.tag}</span>
                      </div>
                      <p className="mt-1 max-w-md text-xs leading-5 text-muted">
                        {tier.description}
                      </p>
                    </div>
                  </div>
                  <span className="hidden text-xs text-faint sm:block">
                    {pluralize(tier.count, "question")}
                  </span>
                  <Link
                    href="/learn"
                    className="mt-1 text-xs font-medium text-muted transition hover:text-lime sm:mt-0"
                  >
                    Open
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            {
              icon: Timer,
              title: "Designed for two minutes",
              copy: "One question, one note, one win. Stop whenever. Your session is saved.",
            },
            {
              icon: BookOpen,
              title: "Notes behind every answer",
              copy: "Syntax, pitfalls and a memory hook, so a wrong answer still teaches.",
            },
            {
              icon: Zap,
              title: "Progress that follows you",
              copy: "XP, streak, combos and badges stored locally in your browser.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <Icon className="size-4 text-lime" aria-hidden />
                <div className="mt-3 text-sm font-medium text-mist">{item.title}</div>
                <p className="mt-1 max-w-xs text-xs leading-5 text-muted">{item.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium text-lime">The whole stack</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-mist">
              {courses.length} courses, {totals.modules} modules, {totals.topics} topics.
            </h2>
          </div>
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-muted transition hover:text-mist sm:self-auto"
          >
            Explore the catalog
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 px-4 py-8 text-xs text-faint sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>Stacked. Learn the stack by playing it.</p>
          <p>HTML, CSS, JavaScript, Bootstrap, React, TypeScript</p>
        </div>
      </footer>
    </main>
  );
}
