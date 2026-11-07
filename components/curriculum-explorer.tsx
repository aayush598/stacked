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
  Database,
  Download,
  FileCode2,
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
  Sparkles,
  TestTube2,
  Trophy,
  Wrench,
} from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import { curriculumStats, reactCurriculum } from "@/lib/content/react-curriculum";
import {
  allQuestions,
  getPlayableTier,
  questionCountsByTier,
  questionsByTopic,
  questionsByTierAndTopic,
} from "@/lib/content/questions";
import type { Tier } from "@/lib/content/schema";
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
};

const ACCENTS = {
  lime: {
    text: "text-lime",
    bg: "bg-lime/10",
    border: "border-lime/20",
    bar: "bg-lime",
  },
  coral: {
    text: "text-coral",
    bg: "bg-coral/10",
    border: "border-coral/20",
    bar: "bg-coral",
  },
  sky: {
    text: "text-sky",
    bg: "bg-sky/10",
    border: "border-sky/20",
    bar: "bg-sky",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/10",
    border: "border-violet/20",
    bar: "bg-violet",
  },
} as const;

const TIERS: { id: Tier | "all"; label: string; hint: string }[] = [
  { id: "all", label: "All tiers", hint: "Everything planned" },
  { id: "easy", label: "Easy", hint: "Syntax recognition" },
  { id: "medium", label: "Medium", hint: "Read snippets" },
  { id: "hard", label: "Hard", hint: "Build solutions" },
  { id: "complex", label: "Complex", hint: "Manual coding" },
];

export function CurriculumExplorer() {
  const hydrated = useHydrated();
  const answers = useProgressStore((state) => state.answers);
  const [query, setQuery] = useState("");
  const [onlyLive, setOnlyLive] = useState(false);
  const [tier, setTier] = useState<Tier | "all">("all");
  const deferredQuery = useDeferredValue(query);
  const [openModules, setOpenModules] = useState<Set<string>>(
    () => new Set(["foundations", "jsx", "components"]),
  );

  const filteredModules = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();
    return reactCurriculum
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
              ? questionsByTopic[topic.id] ?? []
              : questionsByTierAndTopic[tier][topic.id] ?? [];
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
  }, [deferredQuery, onlyLive, tier]);

  const searching = Boolean(deferredQuery.trim());
  const liveTotal = allQuestions.length;
  const clearedTotal = hydrated
    ? allQuestions.filter((question) => answers[question.id]?.correct).length
    : 0;
  const plannedTotal = curriculumStats.topics * 12;

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
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl rise">
            <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
              <Link href="/" className="transition hover:text-mist">
                Home
              </Link>
              <span>/</span>
              <span className="text-lime">React</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-mist sm:text-5xl">
              The entire React map.
              <span className="block text-muted">Nothing skipped.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-[15px]">
              Every module, every small syntax rule, every pattern — organised from first
              render to complex architecture. All four tiers are live, with notes and a
              diagram attached to every question.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row lg:flex-col">
            <Link
              href="/play/react/easy"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-lime px-5 text-sm font-semibold text-[#111609] transition hover:bg-lime-soft"
            >
              <Play className="size-4 fill-current" aria-hidden />
              Start a run
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <div className="rounded-full border border-line bg-white/[0.03] px-4 py-2 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              {liveTotal} live · {plannedTotal.toLocaleString()} target
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {[
            { label: "Modules", value: curriculumStats.modules, accent: "lime" as const },
            { label: "Topics", value: curriculumStats.topics, accent: "sky" as const },
            {
              label: "Questions live",
              value: liveTotal,
              accent: "coral" as const,
            },
            {
              label: "Cleared",
              value: hydrated ? `${clearedTotal}/${liveTotal}` : "—",
              accent: "violet" as const,
            },
          ].map((stat) => {
            const colors = ACCENTS[stat.accent];
            return (
              <div key={stat.label} className="panel-tight px-4 py-3.5">
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                  {stat.label}
                </div>
                <div className={cn("mt-1 text-xl font-semibold", colors.text)}>
                  {stat.value}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              tier: "Easy",
              copy: "Recognise every syntax pattern. Drops of learning, minutes long.",
              status: `${questionCountsByTier.easy} live`,
              accent: "lime" as const,
              icon: Sparkles,
            },
            {
              tier: "Medium",
              copy: "Read short snippets and predict what happens.",
              status: `${questionCountsByTier.medium} live`,
              accent: "sky" as const,
              icon: FileCode2,
            },
            {
              tier: "Hard",
              copy: "Build code under realistic constraints.",
              status: `${questionCountsByTier.hard} live`,
              accent: "coral" as const,
              icon: Brain,
            },
            {
              tier: "Complex",
              copy: "Write entire features and architecture from scratch.",
              status: `${questionCountsByTier.complex} live`,
              accent: "violet" as const,
              icon: Trophy,
            },
          ].map((item) => {
            const Icon = item.icon;
            const colors = ACCENTS[item.accent];
            return (
              <div key={item.tier} className="panel-tight flex gap-3 px-4 py-3.5">
                <span className={cn("grid size-8 shrink-0 place-items-center rounded-lg", colors.bg, colors.text)}>
                  <Icon className="size-3.5" aria-hidden />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-mist">{item.tier}</span>
                    <span className={cn("font-mono text-[8px] uppercase tracking-[0.12em]", colors.text)}>
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] leading-4 text-faint">{item.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="panel overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-line px-4 py-4 sm:px-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-sm">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-faint" aria-hidden />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search topics, syntax, patterns…"
                  className="h-10 w-full rounded-xl border border-line bg-white/[0.03] pl-9 pr-3 text-sm text-mist outline-none transition placeholder:text-faint focus:border-lime/40 focus:bg-white/[0.05]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex flex-wrap gap-1 rounded-xl border border-line bg-white/[0.02] p-1">
                  {TIERS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTier(item.id)}
                      title={item.hint}
                      className={cn(
                        "rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition",
                        tier === item.id
                          ? "bg-white/[0.09] text-mist"
                          : "text-faint hover:text-mist",
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
                    "flex h-9 items-center gap-2 rounded-xl border px-3 text-[11px] font-medium transition",
                    onlyLive
                      ? "border-lime/30 bg-lime/[0.08] text-lime"
                      : "border-line bg-white/[0.02] text-muted hover:text-mist",
                  )}
                >
                  <span className={cn("size-1.5 rounded-full", onlyLive ? "bg-lime" : "bg-faint")} />
                  Live only
                </button>
                <div className="hidden items-center gap-1 sm:flex">
                  <button
                    type="button"
                    onClick={expandAll}
                    className="rounded-lg px-2.5 py-1.5 text-[11px] text-faint transition hover:bg-white/[0.04] hover:text-mist"
                  >
                    Expand all
                  </button>
                  <button
                    type="button"
                    onClick={collapseAll}
                    className="rounded-lg px-2.5 py-1.5 text-[11px] text-faint transition hover:bg-white/[0.04] hover:text-mist"
                  >
                    Collapse
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-faint">
              <span className="font-mono uppercase tracking-[0.14em]">
                {filteredModules.length} modules ·{" "}
                {filteredModules.reduce((total, entry) => total + entry.topics.length, 0)} topics
              </span>
              <span className="hidden sm:block">
                Every topic becomes a set of visual questions with notes.
              </span>
            </div>
          </div>

          <div className="divide-y divide-line/60">
            {filteredModules.map(({ module, topics }) => {
              const Icon = ICONS[module.icon] ?? Sparkles;
              const colors = ACCENTS[module.accent];
              const liveQuestions = topics.reduce(
                (total, topic) =>
                  total +
                  (tier === "all"
                    ? questionsByTopic[topic.id] ?? []
                    : questionsByTierAndTopic[tier][topic.id] ?? []
                  ).length,
                0,
              );
              const cleared = hydrated
                ? topics.reduce(
                    (total, topic) =>
                      total +
                      (tier === "all"
                        ? questionsByTopic[topic.id] ?? []
                        : questionsByTierAndTopic[tier][topic.id] ?? []
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
                    className="flex w-full items-center gap-3 px-4 py-4 text-left transition hover:bg-white/[0.02] sm:gap-4 sm:px-5"
                  >
                    <span className="w-6 shrink-0 font-mono text-[10px] text-faint">
                      {String(module.order).padStart(2, "0")}
                    </span>
                    <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", colors.bg, colors.text)}>
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-sm font-medium text-mist">{module.title}</span>
                        <span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] text-faint sm:inline">
                          {module.kicker}
                        </span>
                        {liveQuestions > 0 && (
                          <span className="rounded-full border border-lime/20 bg-lime/[0.07] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-lime">
                            {liveQuestions} live
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-faint">
                        {module.summary}
                      </span>
                    </span>
                    <span className="hidden w-28 shrink-0 sm:block">
                      <span className="mb-1 flex justify-between font-mono text-[9px] text-faint">
                        <span>{pluralize(module.topics.length, "topic")}</span>
                        {liveQuestions > 0 && <span>{cleared}/{liveQuestions}</span>}
                      </span>
                      <span className="block h-1 overflow-hidden rounded-full bg-white/[0.06]">
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
                      <div className="overflow-hidden rounded-xl border border-line bg-black/10">
                        {topics.map((topic) => {
                          const topicQuestions =
                            tier === "all"
                              ? questionsByTopic[topic.id] ?? []
                              : questionsByTierAndTopic[tier][topic.id] ?? [];
                          const playTier = getPlayableTier(
                            topic.id,
                            tier === "all" ? undefined : tier,
                          );
                          const playQuestions = playTier
                            ? questionsByTierAndTopic[playTier][topic.id] ?? []
                            : [];
                          const topicCleared = topicQuestions.filter(
                            (question) => answers[question.id]?.correct,
                          ).length;
                          const complete =
                            topicQuestions.length > 0 && topicCleared === topicQuestions.length;
                          return (
                            <div
                              key={topic.id}
                              className="group flex flex-col gap-3 border-b border-line/60 px-3.5 py-3 last:border-b-0 sm:flex-row sm:items-center"
                            >
                              <span className="mt-1 flex shrink-0 items-center gap-2 sm:mt-0">
                                {complete ? (
                                  <span className="grid size-5 place-items-center rounded-full bg-lime/15 text-lime">
                                    <Check className="size-3" aria-hidden />
                                  </span>
                                ) : (
                                  <span
                                    className={cn(
                                      "size-1.5 rounded-full",
                                      topicQuestions.length ? colors.bar : "bg-white/15",
                                    )}
                                  />
                                )}
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-[13px] font-medium text-mist">
                                    {topic.title}
                                  </span>
                                  <span className="font-mono text-[9px] text-faint/70">
                                    {topic.id}
                                  </span>
                                </div>
                                <p className="mt-0.5 text-[11px] leading-5 text-faint">
                                  {topic.blurb}
                                </p>
                              </div>

                              <div className="flex shrink-0 flex-wrap items-center gap-1">
                                {module.focus.map((focus) => (
                                  <span
                                    key={focus}
                                    className={cn(
                                      "rounded-md border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.08em]",
                                      focus === "easy"
                                        ? "border-lime/20 bg-lime/[0.05] text-lime/80"
                                        : "border-line bg-white/[0.02] text-faint",
                                    )}
                                  >
                                    {focus.slice(0, 1)}
                                  </span>
                                ))}
                              </div>

                              <div className="flex shrink-0 items-center gap-2 sm:w-36 sm:justify-end">
                                {playTier && playQuestions.length > 0 ? (
                                  <Link
                                    href={`/play/react/${playTier}?topic=${encodeURIComponent(topic.id)}`}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-lime/20 bg-lime/[0.06] px-2.5 py-1.5 text-[10px] font-medium text-lime transition hover:bg-lime/[0.12]"
                                  >
                                    <Play className="size-2.5 fill-current" aria-hidden />
                                    {complete ? "Replay" : "Play"} {playQuestions.length}
                                  </Link>
                                ) : (
                                  <span className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
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
                  className="mt-3 text-xs text-lime underline-offset-4 hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-lime/15 bg-lime/[0.04] px-5 py-5 sm:flex-row">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-lime">
              All four tiers are playable
            </div>
            <p className="mt-1 text-sm text-mist">
              {allQuestions.length} standalone questions across {curriculumStats.topics} topics,
              each with a visual and complete notes.
            </p>
          </div>
          <Link
            href="/play/react/easy"
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-lime px-5 text-xs font-semibold text-[#111609] transition hover:bg-lime-soft"
          >
            Start playing
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
