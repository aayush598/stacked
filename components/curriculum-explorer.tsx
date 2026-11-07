"use client";

import Link from "next/link";
import {
  Accessibility,
  ArrowLeftRight,
  ArrowRight,
  Atom,
  Boxes,
  Brain,
  Braces,
  Cable,
  Check,
  ChevronDown,
  ClipboardCheck,
  Code2,
  Cpu,
  Database,
  Download,
  FileCode2,
  FileType,
  FlaskConical,
  Focus,
  Gauge,
  Layers,
  type LucideIcon,
  MousePointerClick,
  Network,
  Orbit,
  Palette,
  Play,
  Puzzle,
  RefreshCw,
  Route,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Trophy,
  Wrench,
} from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import { getCourse, getCourseStats } from "@/lib/content/courses";
import {
  getPlayableTier,
  questionCountsByCourseTier,
  questionsByCourse,
  questionsByCourseTopic,
  questionsByCourseTierTopic,
} from "@/lib/content/questions";
import type { CourseId, Tier } from "@/lib/content/schema";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { useProgressStore } from "@/lib/store/progress-store";
import { cn, pluralize } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Braces,
  Boxes,
  ArrowLeftRight,
  Orbit,
  MousePointerClick,
  Layers,
  Palette,
  RefreshCw,
  Focus,
  Share2,
  Cable,
  Gauge,
  Puzzle,
  Route,
  Download,
  ClipboardCheck,
  FileCode2,
  Database,
  Atom,
  FlaskConical,
  Accessibility,
  TestTube2,
  Wrench,
  Network,
  Trophy,
  FileType,
  Cpu,
  ShieldCheck,
  Code2,
  Play,
  Search,
};

const ACCENTS = {
  lime: {
    text: "text-lime",
    bg: "bg-lime/[0.06]",
    border: "border-lime/20",
    bar: "bg-lime",
  },
  coral: {
    text: "text-coral",
    bg: "bg-coral/[0.06]",
    border: "border-coral/20",
    bar: "bg-coral",
  },
  sky: {
    text: "text-sky",
    bg: "bg-sky/[0.07]",
    border: "border-sky/20",
    bar: "bg-sky",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/[0.06]",
    border: "border-violet/20",
    bar: "bg-violet",
  },
} as const;

const TIERS: { id: Tier | "all"; label: string; hint: string }[] = [
  { id: "all", label: "All", hint: "Everything planned" },
  { id: "easy", label: "Easy", hint: "Syntax recognition" },
  { id: "medium", label: "Medium", hint: "Read snippets" },
  { id: "hard", label: "Hard", hint: "Build solutions" },
  { id: "complex", label: "Complex", hint: "Manual coding" },
];

export function CurriculumExplorer({ courseId }: { courseId: CourseId }) {
  const course = getCourse(courseId);
  const courseStats = getCourseStats(courseId);
  const courseQuestions = questionsByCourse[courseId];
  const courseTierCounts = questionCountsByCourseTier[courseId];
  const modules = course.modules;
  const byTopic = questionsByCourseTopic[courseId];
  const byTierTopic = questionsByCourseTierTopic[courseId];
  const hydrated = useHydrated();
  const answers = useProgressStore((state) => state.answers);
  const [query, setQuery] = useState("");
  const [onlyLive, setOnlyLive] = useState(false);
  const [tier, setTier] = useState<Tier | "all">("all");
  const deferredQuery = useDeferredValue(query);
  const [openModules, setOpenModules] = useState<Set<string>>(
    () => new Set(modules.slice(0, 2).map((module) => module.id)),
  );

  const filteredModules = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();
    return modules
      .filter((module) => tier === "all" || module.focus.includes(tier))
      .map((module) => {
        const moduleMatches =
          !needle ||
          module.title.toLowerCase().includes(needle) ||
          module.summary.toLowerCase().includes(needle) ||
          module.kicker.toLowerCase().includes(needle);
        const topics = module.topics.filter((topic) => {
          const topicQuestions =
            tier === "all"
              ? byTopic[topic.id] ?? []
              : byTierTopic[tier][topic.id] ?? [];
          const live = topicQuestions.length > 0;
          if (onlyLive && !live) return false;
          if (tier !== "all" && !live) return false;
          if (moduleMatches) return true;
          return (
            topic.title.toLowerCase().includes(needle) ||
            topic.blurb.toLowerCase().includes(needle) ||
            topic.id.toLowerCase().includes(needle)
          );
        });
        return { module, topics };
      })
      .filter((entry) => entry.topics.length > 0);
  }, [byTierTopic, byTopic, deferredQuery, modules, onlyLive, tier]);

  const searching = Boolean(deferredQuery.trim());
  const liveTotal = courseQuestions.length;
  const clearedTotal = hydrated
    ? courseQuestions.filter((question) => answers[question.id]?.correct).length
    : 0;

  function toggleModule(id: string) {
    setOpenModules((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function expandAll() {
    setOpenModules(new Set(filteredModules.map((entry) => entry.module.id)));
  }

  function collapseAll() {
    setOpenModules(new Set());
  }

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-4 pb-9 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-faint">
          <Link href="/" className="transition hover:text-mist">
            Home
          </Link>
          <span>/</span>
          <Link href="/learn" className="transition hover:text-mist">
            Courses
          </Link>
          <span>/</span>
          <span className="text-mist">{course.title}</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-lime">{course.kicker}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-mist sm:text-5xl">
              The entire {course.title} curriculum.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              {course.description} Every topic has notes, a diagram and four playable difficulty
              tiers.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
            <Link
              href={`/play/${courseId}/easy`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-lime px-5 text-sm font-semibold text-white transition hover:bg-lime/90"
            >
              <Play className="size-4 fill-current" aria-hidden />
              Start a run
            </Link>
            <span className="inline-flex h-11 items-center justify-center rounded-lg border border-line bg-surface px-4 text-xs text-muted">
              {liveTotal.toLocaleString()} live questions
            </span>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-2 divide-x divide-y divide-line border-y border-line sm:grid-cols-4 sm:divide-y-0">
          {[
            { label: "Modules", value: courseStats.modules },
            { label: "Topics", value: courseStats.topics },
            { label: "Questions live", value: liveTotal.toLocaleString() },
            {
              label: "Cleared",
              value: hydrated ? `${clearedTotal}/${liveTotal}` : "—",
            },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-4 sm:px-5">
              <div className="text-xs text-faint">{stat.label}</div>
              <div className="mt-1 text-xl font-semibold tracking-[-0.02em] text-mist">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              tier: "Easy",
              copy: "Recognise syntax patterns in short, focused questions.",
              status: `${courseTierCounts.easy} live`,
              accent: "lime" as const,
              icon: Sparkles,
            },
            {
              tier: "Medium",
              copy: "Read snippets and predict what the browser or React will do.",
              status: `${courseTierCounts.medium} live`,
              accent: "sky" as const,
              icon: FileCode2,
            },
            {
              tier: "Hard",
              copy: "Build solutions under realistic production constraints.",
              status: `${courseTierCounts.hard} live`,
              accent: "coral" as const,
              icon: Brain,
            },
            {
              tier: "Complex",
              copy: "Write complete features and reason about architecture.",
              status: `${courseTierCounts.complex} live`,
              accent: "violet" as const,
              icon: Trophy,
            },
          ].map((item) => {
            const Icon = item.icon;
            const colors = ACCENTS[item.accent];
            return (
              <div key={item.tier} className="bg-surface p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className={cn("grid size-8 place-items-center rounded-lg border", colors.bg, colors.border, colors.text)}>
                    <Icon className="size-3.5" aria-hidden />
                  </span>
                  <span className="text-[11px] text-faint">{item.status}</span>
                </div>
                <div className="mt-3 text-sm font-medium text-mist">{item.tier}</div>
                <p className="mt-1 text-xs leading-5 text-muted">{item.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-line bg-surface">
          <div className="border-b border-line p-4 sm:p-5">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div className="relative w-full xl:max-w-md">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-faint" aria-hidden />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={`Search ${course.title} topics, syntax or patterns`}
                  className="h-10 w-full rounded-lg border border-line bg-canvas pl-9 pr-3 text-sm text-mist outline-none transition placeholder:text-faint focus:border-lime/50 focus:bg-surface"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex flex-wrap gap-1 rounded-lg border border-line bg-canvas p-1">
                  {TIERS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTier(item.id)}
                      title={item.hint}
                      className={cn(
                        "rounded-md px-2.5 py-1.5 text-[11px] font-medium transition",
                        tier === item.id
                          ? "bg-mist text-canvas"
                          : "text-muted hover:text-mist",
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setOnlyLive((value) => !value)}
                  className={cn(
                    "flex h-9 items-center gap-2 rounded-lg border px-3 text-[11px] font-medium transition",
                    onlyLive
                      ? "border-lime/30 bg-lime/[0.06] text-lime"
                      : "border-line bg-surface text-muted hover:text-mist",
                  )}
                >
                  <span className={cn("size-1.5 rounded-full", onlyLive ? "bg-lime" : "bg-faint")} />
                  Live only
                </button>
                <div className="hidden items-center gap-1 sm:flex">
                  <button
                    type="button"
                    onClick={expandAll}
                    className="rounded-md px-2.5 py-1.5 text-[11px] text-muted transition hover:bg-raised hover:text-mist"
                  >
                    Expand all
                  </button>
                  <button
                    type="button"
                    onClick={collapseAll}
                    className="rounded-md px-2.5 py-1.5 text-[11px] text-muted transition hover:bg-raised hover:text-mist"
                  >
                    Collapse
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-1 text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between">
              <span>
                {filteredModules.length} modules /{" "}
                {filteredModules.reduce((total, entry) => total + entry.topics.length, 0)} topics
              </span>
              <span className="hidden sm:block">
                Every topic becomes a set of visual questions with notes.
              </span>
            </div>
          </div>

          <div className="divide-y divide-line">
            {filteredModules.map(({ module, topics }) => {
              const Icon = ICONS[module.icon] ?? Sparkles;
              const colors = ACCENTS[module.accent];
              const liveQuestions = topics.reduce(
                (total, topic) =>
                  total +
                  (tier === "all"
                    ? byTopic[topic.id] ?? []
                    : byTierTopic[tier][topic.id] ?? []
                  ).length,
                0,
              );
              const cleared = hydrated
                ? topics.reduce(
                    (total, topic) =>
                      total +
                      (tier === "all"
                        ? byTopic[topic.id] ?? []
                        : byTierTopic[tier][topic.id] ?? []
                      ).filter((question) => answers[question.id]?.correct).length,
                    0,
                  )
                : 0;
              const isOpen = searching || openModules.has(module.id);

              return (
                <div key={module.id}>
                  <button
                    type="button"
                    onClick={() => toggleModule(module.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3 px-4 py-4 text-left transition hover:bg-canvas/70 sm:gap-4 sm:px-5"
                  >
                    <span className="w-6 shrink-0 text-xs tabular-nums text-faint">
                      {String(module.order).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-lg border",
                        colors.bg,
                        colors.border,
                        colors.text,
                      )}
                    >
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-sm font-medium text-mist">{module.title}</span>
                        <span className="hidden text-[11px] text-faint sm:inline">
                          {module.kicker}
                        </span>
                        {liveQuestions > 0 && (
                          <span className="text-[11px] text-lime">{liveQuestions} live</span>
                        )}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-faint">
                        {module.summary}
                      </span>
                    </span>
                    <span className="hidden w-28 shrink-0 sm:block">
                      <span className="mb-1 flex justify-between text-[10px] text-faint">
                        <span>{pluralize(module.topics.length, "topic")}</span>
                        {liveQuestions > 0 && <span>{cleared}/{liveQuestions}</span>}
                      </span>
                      <span className="block h-1 overflow-hidden rounded-full bg-raised">
                        <span
                          className={cn("block h-full rounded-full transition-all", colors.bar)}
                          style={{
                            width: liveQuestions
                              ? `${Math.round((cleared / liveQuestions) * 100)}%`
                              : "0%",
                          }}
                        />
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 text-faint transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5">
                      <div className="overflow-hidden rounded-lg border border-line bg-canvas/45">
                        {topics.map((topic) => {
                          const topicQuestions =
                            tier === "all"
                              ? byTopic[topic.id] ?? []
                              : byTierTopic[tier][topic.id] ?? [];
                          const playTier = getPlayableTier(
                            topic.id,
                            tier === "all" ? undefined : tier,
                            courseId,
                          );
                          const playQuestions = playTier
                            ? byTierTopic[playTier][topic.id] ?? []
                            : [];
                          const topicCleared = topicQuestions.filter(
                            (question) => answers[question.id]?.correct,
                          ).length;
                          const complete =
                            topicQuestions.length > 0 && topicCleared === topicQuestions.length;
                          return (
                            <div
                              key={topic.id}
                              className="flex flex-col gap-3 border-b border-line px-3.5 py-3 last:border-b-0 sm:flex-row sm:items-center"
                            >
                              <span className="mt-1 flex shrink-0 items-center gap-2 sm:mt-0">
                                {complete ? (
                                  <span className="grid size-5 place-items-center rounded-full bg-success/10 text-success">
                                    <Check className="size-3" aria-hidden />
                                  </span>
                                ) : (
                                  <span
                                    className={cn(
                                      "size-1.5 rounded-full",
                                      topicQuestions.length ? colors.bar : "bg-line-strong",
                                    )}
                                  />
                                )}
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-[13px] font-medium text-mist">
                                    {topic.title}
                                  </span>
                                  <span className="font-mono text-[9px] text-faint/80">
                                    {topic.id}
                                  </span>
                                </div>
                                <p className="mt-0.5 text-[11px] leading-5 text-muted">
                                  {topic.blurb}
                                </p>
                              </div>

                              <div className="flex shrink-0 flex-wrap items-center gap-1">
                                {module.focus.map((focus) => (
                                  <span
                                    key={focus}
                                    className={cn(
                                      "rounded border px-1.5 py-0.5 text-[9px] uppercase tracking-[0.08em]",
                                      focus === "easy"
                                        ? "border-lime/20 bg-lime/[0.04] text-lime"
                                        : "border-line bg-surface text-faint",
                                    )}
                                  >
                                    {focus.slice(0, 1)}
                                  </span>
                                ))}
                              </div>

                              <div className="flex shrink-0 items-center gap-2 sm:w-36 sm:justify-end">
                                {playTier && playQuestions.length > 0 ? (
                                  <Link
                                    href={`/play/${courseId}/${playTier}?topic=${encodeURIComponent(topic.id)}`}
                                    className="inline-flex items-center gap-1.5 rounded-md border border-line-strong bg-surface px-2.5 py-1.5 text-[10px] font-medium text-mist transition hover:border-lime/35 hover:text-lime"
                                  >
                                    <Play className="size-2.5 fill-current" aria-hidden />
                                    {complete ? "Replay" : "Play"} {playQuestions.length}
                                  </Link>
                                ) : (
                                  <span className="rounded-md border border-line bg-surface px-2.5 py-1.5 text-[10px] text-faint">
                                    queued
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredModules.length === 0 && (
              <div className="px-6 py-16 text-center">
                <Search className="mx-auto size-5 text-faint" aria-hidden />
                <p className="mt-3 text-sm text-mist">No topics match that filter.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setOnlyLive(false);
                    setTier("all");
                  }}
                  className="mt-3 text-xs font-medium text-lime hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-line bg-surface px-5 py-5 sm:flex-row sm:items-center">
          <div>
            <div className="text-sm font-medium text-mist">All four tiers are playable.</div>
            <p className="mt-1 text-xs leading-5 text-muted">
              {liveTotal.toLocaleString()} standalone questions across {courseStats.topics} topics,
              each with a visual and complete notes.
            </p>
          </div>
          <Link
            href={`/play/${courseId}/easy`}
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-lime px-5 text-xs font-semibold text-white transition hover:bg-lime/90"
          >
            Start playing
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
