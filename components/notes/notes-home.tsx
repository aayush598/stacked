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
} from "lucide-react";
import { NotesNotifications } from "@/components/notes/notes-notifications";
import { NotesGlobalSearch } from "@/components/notes/notes-global-search";
import { NotesStat, ProgressBar, Skeleton, StatusPill } from "@/components/notes/notes-ui";
import { courses, getCourseStats } from "@/lib/content/courses";
import { useNotesHydrated } from "@/lib/hooks/use-notes-hydrated";
import { courseStats } from "@/lib/notes/types";
import { typescriptRoadmap, typescriptSections } from "@/lib/notes/typescript-roadmap";
import { reactRoadmap, reactSections } from "@/lib/notes/react-roadmap";
import { useNotesStore } from "@/lib/store/notes-store";
import { cn } from "@/lib/utils";

const tsStats = courseStats(typescriptRoadmap);
const reactStats = courseStats(reactRoadmap);

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
  const tsReadCount = hydrated ? typescriptSections.filter(({ section }) => Boolean(readSections[section.id])).length : 0;
  const tsReadPercent = Math.round((tsReadCount / tsStats.sections) * 100);
  const reactReadCount = hydrated ? reactSections.filter(({ section }) => Boolean(readSections[section.id])).length : 0;

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-lime/20 bg-lime/[0.06] px-2.5 py-1 text-[13px] font-medium text-lime">
                Notes library
              </span>
              <span className="text-[13px] text-faint">TypeScript & React available</span>
            </div>
            <h1 className="mt-4 text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.055em] text-mist sm:text-6xl">
              Read the stack.
              <br />
              <span className="text-lime">Not just the syntax.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              Visual, deeply structured notes built for understanding. Explore complete roadmaps: TypeScript ({tsStats.sections.toLocaleString()} sections) and React ({reactStats.sections.toLocaleString()} sections), all marked incomplete and ready to learn/review.
            </p>
            <div className="mt-8 max-w-2xl">
              <NotesGlobalSearch placeholder="Search all TypeScript & React notes…" />
            </div>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
              <Link href="/notes/typescript" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-lime px-5 text-[15px] font-semibold text-white transition hover:bg-lime/90">
                TypeScript notes <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/notes/react" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-sky/25 bg-sky/[0.08] px-5 text-[15px] font-semibold text-sky transition hover:bg-sky/[0.14]">
                React notes <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-faint">
              {[
                [(tsStats.sections + reactStats.sections).toLocaleString(), "nested sections"],
                ["3", "review states"],
                ["Local", "read progress"],
              ].map(([strong, rest]) => (
                <span key={String(strong)+String(rest)} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime" aria-hidden />
                  <span className="font-medium text-muted">{strong}</span> {rest}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-lg gap-3 lg:max-w-none">
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <div className="flex items-center gap-2"><FileType className="size-4 text-lime" aria-hidden /><span className="text-[15px] font-semibold text-mist">TypeScript Mastery</span></div>
                <StatusPill status="incomplete" compact />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Reading progress</p>
                    {hydrated ? <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-mist">{tsReadPercent}%</p> : <Skeleton className="mt-1 h-9 w-20" />}
                  </div>
                  <div className="text-right text-[13px] leading-5 text-faint">
                    {hydrated ? <p>{tsReadCount.toLocaleString()} of {tsStats.sections.toLocaleString()}<br />sections read</p> : <div className="flex flex-col items-end gap-1.5"><Skeleton className="h-3.5 w-24" /><Skeleton className="h-3.5 w-20" /></div>}
                  </div>
                </div>
                {hydrated ? <ProgressBar value={tsReadPercent} className="mt-4" /> : <Skeleton className="mt-4 h-1.5 w-full rounded-full" />}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[13px]"><div className="rounded-lg border border-line bg-canvas/70 px-3 py-2"><p className="text-faint">Sections</p><p className="mt-0.5 font-semibold text-mist">{tsStats.sections.toLocaleString()}</p></div><div className="rounded-lg border border-line bg-canvas/70 px-3 py-2"><p className="text-faint">Modules/Projects</p><p className="mt-0.5 font-semibold text-mist">{tsStats.modules} / {tsStats.projects}</p></div></div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <div className="flex items-center gap-2"><Atom className="size-4 text-sky" aria-hidden /><span className="text-[15px] font-semibold text-mist">React Mastery</span></div>
                <StatusPill status="incomplete" compact />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">Reading progress</p>
                    {hydrated ? <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-mist">{Math.round((reactReadCount / reactStats.sections) * 100)}%</p> : <Skeleton className="mt-1 h-9 w-20" />}
                  </div>
                  <div className="text-right text-[13px] leading-5 text-faint">
                    {hydrated ? <p>{reactReadCount.toLocaleString()} of {reactStats.sections.toLocaleString()}<br />sections read</p> : <div className="flex flex-col items-end gap-1.5"><Skeleton className="h-3.5 w-24" /><Skeleton className="h-3.5 w-20" /></div>}
                  </div>
                </div>
                {hydrated ? <ProgressBar value={Math.round((reactReadCount / reactStats.sections) * 100)} className="mt-4" /> : <Skeleton className="mt-4 h-1.5 w-full rounded-full" />}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[13px]"><div className="rounded-lg border border-line bg-canvas/70 px-3 py-2"><p className="text-faint">Sections</p><p className="mt-0.5 font-semibold text-mist">{reactStats.sections.toLocaleString()}</p></div><div className="rounded-lg border border-line bg-canvas/70 px-3 py-2"><p className="text-faint">Modules/Projects</p><p className="mt-0.5 font-semibold text-mist">{reactStats.modules} / {reactStats.projects}</p></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <NotesStat label="TypeScript sections" value={tsStats.sections.toLocaleString()} hint={`${tsStats.phases} phases · ${tsStats.modules} modules`} />
          <NotesStat label="React sections" value={reactStats.sections.toLocaleString()} hint={`${reactStats.phases} phases · ${reactStats.modules} modules`} />
          <NotesStat label="Projects" value={tsStats.projects + reactStats.projects} hint="TypeScript + React" />
          <NotesStat label="Status" value="Incomplete" hint="all sections ready to author/review" />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Link href="/notes/typescript" className="group overflow-hidden rounded-xl border border-line bg-surface transition hover:border-line-strong">
            <div className="grid-lines flex items-start justify-between gap-4 border-b border-line p-5 sm:p-6">
              <div>
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-lime">Available now · Incomplete</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-mist">TypeScript Mastery</h2>
                <p className="mt-2 max-w-lg text-[15px] leading-6 text-muted">{tsStats.phases} phases · {tsStats.modules} modules · {tsStats.projects} projects · {tsStats.sections.toLocaleString()} sections, all tagged incomplete.</p>
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-lime/20 bg-lime/[0.07] text-lime"><ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden /></span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-[13px] text-faint"><span>Full roadmap in order</span><span className="font-medium text-lime group-hover:underline">Open TypeScript</span></div>
          </Link>
          <Link href="/notes/react" className="group overflow-hidden rounded-xl border border-line bg-surface transition hover:border-line-strong">
            <div className="grid-lines flex items-start justify-between gap-4 border-b border-line p-5 sm:p-6">
              <div>
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-sky">Available now · Incomplete</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-mist">React Mastery</h2>
                <p className="mt-2 max-w-lg text-[15px] leading-6 text-muted">{reactStats.phases} phases · {reactStats.modules} modules · {reactStats.projects} projects · {reactStats.sections.toLocaleString()} sections, all tagged incomplete.</p>
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-sky/20 bg-sky/[0.07] text-sky"><ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden /></span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-[13px] text-faint"><span>Complete TOC covered</span><span className="font-medium text-sky group-hover:underline">Open React</span></div>
          </Link>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr]">
          <div className="rounded-xl border border-line bg-surface p-5 sm:p-6">
            <p className="text-[15px] font-medium text-lime">How this works</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-mist">
              Built for trust, not just reading
            </h2>
            <div className="mt-5 space-y-4">
              {[
                {
                  icon: CircleDashed,
                  title: "Three review states",
                  body: "Filter by incomplete, needs review, or human reviewed so progress and quality are always visible.",
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
                TypeScript and React are available now. HTML, CSS, Bootstrap and JavaScript are queued with the same visual notes system.
              </p>
            </div>
            <p className="text-[15px] text-faint">More stacks are coming soon</p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {courses
              .filter((course) => course.id !== "typescript" && course.id !== "react")
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
