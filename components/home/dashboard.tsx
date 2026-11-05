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
  Lock,
  Play,
  Sparkles,
  Target,
  Timer,
  Trophy,
  Zap,
} from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { LevelRing } from "@/components/ui/level-ring";
import { curriculumStats, reactCurriculum } from "@/lib/content/react-curriculum";
import { reactEasyQuestions, reactEasyQuestionById } from "@/lib/content/react-easy-questions";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { currentStreak, useProgressStore } from "@/lib/store/progress-store";
import { cn, levelProgress, pluralize } from "@/lib/utils";

const tierCards = [
  {
    name: "Easy",
    tag: "Syntax",
    description: "Pattern recognition, tiny snippets, finish in minutes.",
    icon: Sparkles,
    accent: "lime",
    ready: true,
    count: reactEasyQuestions.length,
  },
  {
    name: "Medium",
    tag: "Read code",
    description: "Reason about small snippets and predict behavior.",
    icon: BookOpen,
    accent: "sky",
    ready: false,
    count: 0,
  },
  {
    name: "Hard",
    tag: "Build code",
    description: "Production-style challenges with real constraints.",
    icon: Brain,
    accent: "coral",
    ready: false,
    count: 0,
  },
  {
    name: "Complex",
    tag: "Write code",
    description: "Manual builds, architecture and interview-grade work.",
    icon: Trophy,
    accent: "violet",
    ready: false,
    count: 0,
  },
] as const;

const accentMap = {
  lime: {
    text: "text-lime",
    bg: "bg-lime/10",
    border: "border-lime/20",
    dot: "bg-lime",
  },
  sky: {
    text: "text-sky",
    bg: "bg-sky/10",
    border: "border-sky/20",
    dot: "bg-sky",
  },
  coral: {
    text: "text-coral",
    bg: "bg-coral/10",
    border: "border-coral/20",
    dot: "bg-coral",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/10",
    border: "border-violet/20",
    dot: "bg-violet",
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
    <div className="panel-tight flex items-center gap-3 px-4 py-3.5">
      <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", colors.bg, colors.text)}>
        <Icon className="size-4" aria-hidden />
      </span>
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
          {label}
        </div>
        <div className="truncate text-lg font-semibold leading-tight text-mist">
          {hydrated ? value : "—"}
          {hydrated && suffix ? <span className="ml-1 text-xs text-muted">{suffix}</span> : null}
        </div>
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
  const nextQuestion = reactEasyQuestions.find((question) => !answers[question.id]?.correct);
  const sample = reactEasyQuestionById.get("easy-jsx-expression");
  const resumable = activeSession?.status === "active";

  return (
    <main className="flex-1">
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div className="rise max-w-2xl">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/[0.08] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime/70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-lime" />
                </span>
                React · Easy tier live
              </span>
              <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                {reactEasyQuestions.length} syntax questions
              </span>
            </div>

            <h1 className="max-w-xl text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.045em] text-mist sm:text-6xl">
              Learn React syntax before your coffee gets{" "}
              <span className="text-gradient">cold.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted sm:text-base">
              Tiny visual missions. A note behind every question. A combo meter that makes
              syntax stick. Built for the two minutes you were going to scroll anyway.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/play/react/easy"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-lime px-6 text-sm font-semibold text-[#111609] transition hover:bg-lime-soft lime-glow"
              >
                <Play className="size-4 fill-current" aria-hidden />
                {resumable ? "Resume quick run" : "Start a quick run"}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <Link
                href="/learn/react"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 text-sm font-medium text-mist transition hover:border-line-strong hover:bg-white/[0.06]"
              >
                <Layers className="size-4 text-muted" aria-hidden />
                See the full React map
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-faint">
              {[
                ["2-min", "runs"],
                ["Notes", "on every question"],
                ["XP +", "streaks & badges"],
              ].map(([strong, rest]) => (
                <span key={strong} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime/80" aria-hidden />
                  <span className="text-mist/80">{strong}</span> {rest}
                </span>
              ))}
            </div>
          </div>

          <div className="rise relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-lime/[0.06] blur-3xl" aria-hidden />
            <div className="panel float-slow overflow-hidden p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-lg bg-lime/10 text-lime">
                    <Sparkles className="size-3.5" aria-hidden />
                  </span>
                  <div>
                    <div className="text-xs font-medium text-mist">JSX expressions</div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                      Easy · question 01
                    </div>
                  </div>
                </div>
                <span className="rounded-full border border-lime/20 bg-lime/[0.07] px-2.5 py-1 font-mono text-[10px] text-lime">
                  +10 XP
                </span>
              </div>

              <p className="mb-3 text-sm leading-6 text-muted">
                Which line renders the number <span className="text-mist">5</span> in the browser?
              </p>

              <div className="space-y-2">
                {sample?.options?.map((option, index) => {
                  const correct = option.id === sample.correctOptionId;
                  return (
                    <div
                      key={option.id}
                      className={cn(
                        "flex items-center gap-2.5 rounded-xl border px-3 py-2.5 font-mono text-[12px] transition",
                        correct
                          ? "border-lime/35 bg-lime/[0.08] text-lime-soft"
                          : "border-line bg-white/[0.02] text-muted",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-5 shrink-0 place-items-center rounded-md border text-[10px]",
                          correct
                            ? "border-lime/40 bg-lime/15 text-lime"
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

              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-line bg-white/[0.02] px-3 py-2.5">
                <div className="flex items-center gap-2 text-[11px] text-muted">
                  <BookOpen className="size-3.5 text-sky" aria-hidden />
                  Notes attached
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-coral">
                  <Flame className="size-3" aria-hidden />
                  combo x4
                </div>
              </div>
            </div>

            <div className="panel-tight float-slow absolute -bottom-5 -left-3 hidden items-center gap-2.5 px-3.5 py-2.5 backdrop-blur sm:flex" style={{ animationDelay: "800ms" }}>
              <span className="grid size-8 place-items-center rounded-xl bg-coral/10 text-coral">
                <Flame className="size-4" aria-hidden />
              </span>
              <div>
                <div className="text-[11px] font-medium text-mist">{streak || 1}-day streak</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">keep it alive</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <StatCard
            icon={Zap}
            label="Total XP"
            value={profile.xp}
            suffix={`· Lv ${level.level}`}
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
            value={`${cleared}/${reactEasyQuestions.length}`}
            suffix="easy"
            accent="violet"
            hydrated={hydrated}
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="panel relative overflow-hidden p-5 sm:p-6">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-lime/[0.07] blur-3xl" aria-hidden />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="hidden sm:block">
                  <LevelRing xp={profile.xp} size={84} />
                </div>
                <div>
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
                    {resumable ? "Run in progress" : "Continue your quest"}
                  </div>
                  <h2 className="text-xl font-semibold tracking-tight text-mist">
                    {resumable
                      ? `Resume at question ${activeSession.index + 1}`
                      : nextQuestion
                        ? nextQuestion.topicTitle
                        : "Easy tier cleared"}
                  </h2>
                  <p className="mt-1 max-w-md text-sm leading-6 text-muted">
                    {resumable
                      ? "Your session is saved in this browser. Pick up exactly where you stopped."
                      : nextQuestion
                        ? nextQuestion.title
                        : "Replay any topic to keep your combo sharp."}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/[0.07]">
                      <div
                        className="h-full rounded-full bg-lime transition-all duration-700"
                        style={{
                          width: `${Math.round((cleared / reactEasyQuestions.length) * 100)}%`,
                        }}
                      />
                    </div>
                    <span className="font-mono text-[10px] text-faint">
                      {cleared} / {reactEasyQuestions.length} cleared
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/play/react/easy"
                className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-lime/25 bg-lime/[0.08] px-5 text-sm font-medium text-lime transition hover:bg-lime/[0.14]"
              >
                {resumable ? "Resume" : "Start"}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="panel flex items-center gap-4 p-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-violet/10 text-violet">
              <Trophy className="size-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-mist">{level.rank}</span>
                <span className="font-mono text-[10px] text-faint">
                  {level.into}/{level.needed} XP
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-lime to-sky transition-all duration-700"
                  style={{ width: `${level.percent}%` }}
                />
              </div>
              <p className="mt-2 text-[11px] text-faint">
                {profile.badges.length} badges collected · best combo {profile.bestCombo}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
              Difficulty ladder
            </div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-mist">
              Four tiers. One complete React brain.
            </h2>
          </div>
          <span className="hidden text-xs text-faint sm:block">Easy is live now</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tierCards.map((tier) => {
            const colors = accentMap[tier.accent];
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={cn(
                  "panel group relative overflow-hidden p-5 transition duration-300",
                  tier.ready ? "hover:-translate-y-0.5 hover:border-line-strong" : "opacity-70",
                )}
              >
                <div className="flex items-start justify-between">
                  <span className={cn("grid size-10 place-items-center rounded-xl", colors.bg, colors.text)}>
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                  {tier.ready ? (
                    <span className="flex items-center gap-1 rounded-full border border-lime/20 bg-lime/[0.07] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-lime">
                      <span className={cn("size-1.5 rounded-full", colors.dot)} />
                      live
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 rounded-full border border-line bg-white/[0.03] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                      <Lock className="size-2.5" aria-hidden />
                      in the lab
                    </span>
                  )}
                </div>
                <h3 className="mt-4 flex items-baseline gap-2 text-lg font-semibold text-mist">
                  {tier.name}
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                    {tier.tag}
                  </span>
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-muted">{tier.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  <span className="font-mono text-[10px] text-faint">
                    {tier.ready ? pluralize(tier.count, "question") : "coming next"}
                  </span>
                  {tier.ready ? (
                    <Link
                      href="/play/react/easy"
                      className="flex items-center gap-1 text-[11px] font-medium text-lime transition group-hover:gap-1.5"
                    >
                      Play <ArrowRight className="size-3" aria-hidden />
                    </Link>
                  ) : (
                    <span className="text-[11px] text-faint">Queued</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="panel overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
                Full curriculum blueprint
              </div>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-mist">
                {curriculumStats.modules} modules · {curriculumStats.topics} topics · every React corner
              </h2>
            </div>
            <Link
              href="/learn/react"
              className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-white/[0.03] px-4 py-2 text-xs font-medium text-mist transition hover:border-line-strong hover:bg-white/[0.06]"
            >
              Open the map
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>

          <div className="grid gap-px bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
            {reactCurriculum.slice(0, 8).map((module) => {
              const liveTopics = module.topics.filter((topic) =>
                reactEasyQuestions.some((question) => question.topicId === topic.id),
              ).length;
              return (
                <Link
                  key={module.id}
                  href="/learn/react"
                  className="group bg-surface px-5 py-4 transition hover:bg-raised"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                      {String(module.order).padStart(2, "0")}
                    </span>
                    {liveTopics > 0 && (
                      <span className="rounded-full bg-lime/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-lime">
                        {liveTopics} live
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-sm font-medium text-mist">{module.title}</div>
                  <div className="mt-1 text-[11px] text-faint">
                    {pluralize(module.topics.length, "topic")}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="grid gap-px border-t border-line/60 bg-line/60 sm:grid-cols-3">
            {[
              {
                icon: Timer,
                title: "Designed for 2 minutes",
                copy: "One question, one note, one win. Stop whenever — your session is saved.",
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
                <div key={item.title} className="bg-surface px-5 py-5">
                  <Icon className="size-4 text-lime" aria-hidden />
                  <div className="mt-3 text-sm font-medium text-mist">{item.title}</div>
                  <p className="mt-1 text-[11px] leading-5 text-faint">{item.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-line/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-xs text-faint sm:flex-row sm:px-6 lg:px-8">
          <p>Stacked — learn the stack by playing it.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em]">
            React easy · pure frontend · localStorage
          </p>
        </div>
      </footer>
    </main>
  );
}
