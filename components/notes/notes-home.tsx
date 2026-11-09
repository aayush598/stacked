"use client";

import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BookMarked,
  Boxes,
  Braces,
  CheckCircle2,
  CircleDashed,
  FileCode2,
  FileType,
  GitBranch,
  LockKeyhole,
  Palette,
  Sparkles,
} from "lucide-react";
import { NotesNotifications } from "@/components/notes/notes-notifications";
import { NotesStat, ProgressBar, StatusPill } from "@/components/notes/notes-ui";
import { courses, getCourseStats } from "@/lib/content/courses";
import { useNotesHydrated } from "@/lib/hooks/use-notes-hydrated";
import { courseStats } from "@/lib/notes/types";
import { typescriptRoadmap, typescriptSections } from "@/lib/notes/typescript-roadmap";
import { useNotesStore } from "@/lib/store/notes-store";
import { cn, pluralize } from "@/lib/utils";

const stats = courseStats(typescriptRoadmap);

const stackIcons = {
  html: FileCode2,
  css: Palette,
  javascript: Braces,
  bootstrap: Boxes,
  react: Atom,
  typescript: FileType,
} as const;

const stackAccents = {
  lime: "text-lime border-lime/20 bg-lime/[0.06]",
  sky: "text-sky border-sky/20 bg-sky/[0.06]",
  coral: "text-coral border-coral/20 bg-coral/[0.06]",
  violet: "text-violet border-violet/20 bg-violet/[0.06]",
} as const;

export function NotesHome() {
  const hydrated = useNotesHydrated();
  const readSections = useNotesStore((state) => state.readSections);
  const readCount = hydrated
    ? typescriptSections.filter(({ section }) => Boolean(readSections[section.id])).length
    : 0;
  const readPercent = Math.round((readCount / stats.sections) * 100);
  const reviewedPercent = Math.round((stats.reviewed / stats.sections) * 100);

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-lime/20 bg-lime/[0.06] px-2.5 py-1 text-[13px] font-medium text-lime">
                Notes library
              </span>
              <span className="text-[13px] text-faint">TypeScript first</span>
            </div>
            <h1 className="mt-4 text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.055em] text-mist sm:text-6xl">
              Read the stack.
              <br />
              <span className="text-lime">Not just the syntax.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              A visual, deeply structured notes system built for understanding. Start with the
              complete TypeScript roadmap: {stats.phases} phases, {stats.modules} modules,{" "}
              {stats.projects} projects and {stats.sections} nested sections.
            </p>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="/notes/typescript"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-lime px-5 text-[15px] font-semibold text-white transition hover:bg-lime/90"
              >
                Open TypeScript notes
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="#notifications"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 text-[15px] font-medium text-mist transition hover:border-line-strong hover:bg-raised"
              >
                <Sparkles className="size-4 text-muted" aria-hidden />
                Review updates
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-faint">
              {[
                [stats.sections.toLocaleString(), "nested sections"],
                ["2", "review states"],
                ["Local", "read progress"],
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
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <div className="flex items-center gap-2">
                  <FileCode2 className="size-4 text-lime" aria-hidden />
                  <span className="text-[15px] font-semibold text-mist">TypeScript Mastery</span>
                </div>
                <StatusPill status="reviewed" compact />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">
                      Your reading progress
                    </p>
                    <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-mist">
                      {hydrated ? `${readPercent}%` : "—"}
                    </p>
                  </div>
                  <p className="text-right text-[13px] leading-5 text-faint">
                    {hydrated ? readCount.toLocaleString() : "—"} of{" "}
                    {stats.sections.toLocaleString()}
                    <br />
                    sections marked read
                  </p>
                </div>
                <ProgressBar value={hydrated ? readPercent : 0} className="mt-4" />
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-line bg-canvas/70 px-3 py-2.5">
                    <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">
                      Reviewed
                    </p>
                    <p className="mt-1 text-[15px] font-semibold text-mist">
                      {stats.reviewed} / {stats.sections}
                    </p>
                    <ProgressBar value={reviewedPercent} tone="success" className="mt-2" />
                  </div>
                  <div className="rounded-lg border border-line bg-canvas/70 px-3 py-2.5">
                    <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">
                      Est. reading
                    </p>
                    <p className="mt-1 text-[15px] font-semibold text-mist">
                      {Math.round(stats.minutes / 60)}h {stats.minutes % 60}m
                    </p>
                    <p className="mt-2 text-[13px] text-faint">across every section</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-line bg-canvas/60 px-4 py-3">
                <p className="text-[13px] leading-5 text-faint">
                  Every section ends with a mark-as-read action. Progress is stored in this
                  browser, so it follows you between visits on this device.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <NotesStat label="Phases" value={stats.phases} hint="foundations to projects" />
          <NotesStat label="Modules" value={stats.modules} hint="core TypeScript path" />
          <NotesStat label="Projects" value={stats.projects} hint="build to learn" />
          <NotesStat label="Sections" value={stats.sections.toLocaleString()} hint="nested topics" />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <Link
            href="/notes/typescript"
            className="group overflow-hidden rounded-xl border border-line bg-surface transition hover:border-line-strong"
          >
            <div className="grid-lines flex items-start justify-between gap-4 border-b border-line p-5 sm:p-6">
              <div>
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-lime">
                  Available now
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-mist">
                  TypeScript Mastery
                </h2>
                <p className="mt-2 max-w-lg text-[15px] leading-6 text-muted">
                  From your first annotation to generics, conditional types, production
                  architecture and seven capstone projects.
                </p>
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-lime/20 bg-lime/[0.07] text-lime">
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </div>
            <div className="grid gap-px bg-line sm:grid-cols-3">
              {typescriptRoadmap.phases.slice(0, 3).map((phase) => (
                <div key={phase.id} className="bg-surface px-4 py-3.5">
                  <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">
                    Phase {String(phase.number).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[15px] font-medium text-mist">{phase.title}</p>
                  <p className="mt-0.5 text-[13px] text-faint">{phase.subtitle}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-4 py-3 text-[13px] text-faint">
              <span>{pluralize(stats.sections, "section")} ready for notes</span>
              <span className="font-medium text-lime group-hover:underline">
                Open the roadmap
              </span>
            </div>
          </Link>

          <div className="rounded-xl border border-line bg-surface p-5 sm:p-6">
            <p className="text-[15px] font-medium text-lime">How this works</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-mist">
              Built for trust, not just reading
            </h2>
            <div className="mt-5 space-y-4">
              {[
                {
                  icon: CircleDashed,
                  title: "Two honest review states",
                  body: "Filter sections that still need a human review or jump straight to fully reviewed notes.",
                  color: "text-coral",
                },
                {
                  icon: BookMarked,
                  title: "Read tracking that sticks",
                  body: "Mark each section as read. Progress is saved locally and shown across phases and modules.",
                  color: "text-lime",
                },
                {
                  icon: GitBranch,
                  title: "Status-change notifications",
                  body: "When a section becomes human reviewed, it is highlighted against your last stored snapshot.",
                  color: "text-violet",
                },
                {
                  icon: LockKeyhole,
                  title: "No account required",
                  body: "Everything stays in localStorage. First visit starts with a clean, quiet notification state.",
                  color: "text-sky",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3">
                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-raised">
                      <Icon className={cn("size-4", item.color)} aria-hidden />
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-mist">{item.title}</p>
                      <p className="mt-0.5 text-[15px] leading-5 text-muted">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <NotesNotifications compact />
        </div>

        <div className="mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[15px] font-medium text-lime">Notes library</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-mist">
                The full stack, one library
              </h2>
              <p className="mt-1.5 max-w-2xl text-[15px] leading-6 text-muted">
                TypeScript is available now. HTML, CSS, Bootstrap, JavaScript and React are
                queued with the same visual notes system.
              </p>
            </div>
            <p className="text-[15px] text-faint">More stacks are coming soon</p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {courses
              .filter((course) => course.id !== "typescript")
              .map((course) => {
                const Icon = stackIcons[course.id];
                const courseStatsValue = getCourseStats(course.id);
                const accent = stackAccents[course.accent];
                return (
                  <Link
                    key={course.id}
                    href={`/notes/${course.id}`}
                    className="group flex flex-col rounded-xl border border-line bg-surface p-4 transition hover:border-line-strong hover:bg-canvas/50"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={cn(
                          "grid size-8 place-items-center rounded-lg border",
                          accent,
                        )}
                      >
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <span className="rounded-full border border-line bg-canvas px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                        Coming soon
                      </span>
                    </div>
                    <p className="mt-3 text-[15px] font-semibold text-mist">{course.title}</p>
                    <p className="mt-0.5 text-[13px] text-faint">
                      {course.kicker} · {courseStatsValue.modules} modules
                    </p>
                    <p className="mt-2 line-clamp-3 text-[13px] leading-5 text-muted">
                      {course.summary}
                    </p>
                    <span className="mt-auto flex items-center gap-1 pt-3 text-[13px] font-medium text-lime">
                      Preview scope
                      <ArrowRight
                        className="size-3 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}
