"use client";

import { Suspense, useEffect, useState, type ComponentType } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Circle,
  Clock,
  FileText,
  Layers3,
  Sparkles,
} from "lucide-react";
import { RelatedNotes } from "@/components/notes/related-notes";
import { Skeleton, StatusPill } from "@/components/notes/notes-ui";
import type { NoteModule, NotePhase, NoteSection } from "@/lib/notes/types";
import { statusDescription } from "@/lib/notes/types";
import { cn } from "@/lib/utils";

type ReaderProps = {
  section: NoteSection;
  module: NoteModule;
  phase: NotePhase;
  read: boolean;
  hydrated: boolean;
  position: number;
  total: number;
  previous?: { id: string; title: string };
  next?: { id: string; title: string };
  onToggleRead: () => void;
  onNavigate: (sectionId: string) => void;
};

type ContentMap = Record<string, ComponentType>;

const loaders = {
  ts: () => import("@/components/notes/content/typescript").then((m) => m.typescriptNoteContent as ContentMap),
  react: () => import("@/components/notes/content/react").then((m) => m.reactNoteContent as ContentMap),
  bs: () => import("@/components/notes/content/bootstrap").then((m) => m.bootstrapNoteContent as ContentMap),
} as const;

function courseOf(id: string): keyof typeof loaders {
  if (id.startsWith("react-")) return "react";
  if (id.startsWith("bs-")) return "bs";
  return "ts";
}

const cache: Partial<Record<keyof typeof loaders, Promise<ContentMap>>> = {};
function loadCourse(key: keyof typeof loaders) {
  cache[key] ??= loaders[key]();
  return cache[key]!;
}

function NoteContentSkeleton() {
  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-7 w-28 rounded-full" />
        <Skeleton className="h-7 w-24 rounded-full" />
        <Skeleton className="h-7 w-32 rounded-full" />
      </div>
      <Skeleton className="h-28 w-full rounded-xl" />
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-20 w-full rounded-xl" />
      <div className="grid gap-3 sm:grid-cols-2">
        <Skeleton className="h-40 rounded-xl" />
        <Skeleton className="h-40 rounded-xl" />
      </div>
      <Skeleton className="h-56 w-full rounded-xl" />
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  );
}

function DynamicContent({ section }: { section: NoteSection }) {
  const course = courseOf(section.id);
  const [map, setMap] = useState<ContentMap | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    let alive = true;
    loadCourse(course)
      .then((m) => { if (alive) setMap(m); })
      .catch(() => { if (alive) setErr(true); });
    return () => { alive = false; };
  }, [course]);

  if (err) return <AuthoringShell section={section} />;
  if (!map) return <NoteContentSkeleton />;
  const Content = map[section.id];
  if (!Content) return <AuthoringShell section={section} />;
  return (
    <div className="animate-in fade-in slide-in-from-bottom-1 duration-300 ease-out">
      <Content />
    </div>
  );
}

function AuthoringShell({ section }: { section: NoteSection }) {
  const incomplete = section.status === "incomplete";
  return (
    <div
      className={cn(
        "mt-7 rounded-xl border border-dashed p-5 sm:p-6",
        incomplete
          ? "border-faint/35 bg-faint/[0.04]"
          : "border-line-strong bg-canvas/45",
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">
            {incomplete ? "Incomplete section" : "Content shell"}
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-[-0.025em] text-mist">
            {incomplete ? "This section is not completed yet" : "This section is ready for your notes"}
          </h2>
          <p className="mt-1.5 max-w-xl text-[15px] leading-6 text-muted">
            {incomplete
              ? "The roadmap entry exists, but the full note content, interactive visuals, and human review are still in progress. It is tagged incomplete until the section is finished."
              : "The roadmap, review state, read tracking and notifications are wired. Add the finished note component to the content registry when the writing is ready."}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[13px] text-faint">
          <FileText className="size-3" aria-hidden />
          {section.topics.length} subtopics
        </span>
      </div>

      {section.topics.length ? (
        <div className="mt-5">
          <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">Planned coverage</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {section.topics.map((topic) => (
              <span key={topic} className="rounded-full border border-line bg-surface px-2.5 py-1 text-[13px] text-muted">{topic}</span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {[
          ["Explain", "Short visual explanation with a strong mental model."],
          ["Show", "Code, diagrams, comparisons and interactive examples."],
          ["Check", "Takeaways and pitfalls that make the idea stick."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-line bg-surface px-3 py-3">
            <p className="text-[13px] font-semibold text-mist">{title}</p>
            <p className="mt-1 text-[13px] leading-5 text-faint">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NoteReader({
  section,
  module,
  phase,
  read,
  hydrated,
  position,
  total,
  previous,
  next,
  onToggleRead,
  onNavigate,
}: ReaderProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="border-b border-line bg-canvas/45 px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-faint sm:text-[13px]">
          <span className="font-mono uppercase tracking-[0.14em]">Phase {String(phase.number).padStart(2, "0")}</span>
          <span aria-hidden>/</span>
          <span>{phase.title}</span>
          <span aria-hidden>/</span>
          <span>{module.kind === "project" ? "Project" : "Module"} {module.number}</span>
          <span aria-hidden>/</span>
          <span>{module.title}</span>
        </div>

        <div className="mt-2.5 flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-mist sm:text-2xl lg:text-[1.8rem]">{section.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <StatusPill status={section.status} compact />
              <span className="inline-flex items-center gap-1.5 text-[12px] text-faint sm:text-[13px]"><Clock className="size-3" aria-hidden />{section.minutes} min read</span>
              <span className="inline-flex items-center gap-1.5 text-[12px] text-faint sm:text-[13px]"><Layers3 className="size-3" aria-hidden />Section {position} of {total}</span>
              {hydrated ? (
                <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[12px] font-medium sm:text-[13px]", read ? "border-success/25 bg-success/[0.07] text-success" : "border-line bg-canvas text-faint")}>
                  {read ? <Check className="size-2.5" aria-hidden /> : <Circle className="size-2.5" aria-hidden />}
                  {read ? "Read" : "Unread"}
                </span>
              ) : (
                <Skeleton className="h-6 w-20 rounded-full" />
              )}
            </div>
          </div>

          {hydrated ? (
            <button type="button" onClick={onToggleRead} className={cn("inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-lg border px-3 text-[13px] font-semibold transition sm:h-9", read ? "border-success/25 bg-success/[0.07] text-success hover:bg-success/[0.11]" : "border-line bg-surface text-mist hover:border-line-strong hover:bg-raised")}>
              {read ? <Check className="size-3.5" aria-hidden /> : <Circle className="size-3.5" aria-hidden />}
              {read ? "Mark unread" : "Mark read"}
            </button>
          ) : (
            <Skeleton className="h-9 w-28 rounded-lg" />
          )}
        </div>

        <div className="mt-2.5 flex items-start gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-[12px] leading-5 text-muted sm:text-[13px]">
          <Sparkles className="mt-0.5 size-3.5 shrink-0 text-lime" aria-hidden />
          <span>{statusDescription(section.status)}</span>
        </div>
      </div>

      <div className="px-4 py-4 sm:px-5 sm:py-6">
        <Suspense fallback={<NoteContentSkeleton />}>
          <DynamicContent key={section.id} section={section} />
        </Suspense>

        <RelatedNotes sectionId={section.id} />

        <div className="mt-8 border-t border-line pt-5">
          <div className="rounded-xl border border-line bg-canvas/60 p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-2.5">
                <BookOpen className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                <div>
                  <p className="text-[15px] font-semibold text-mist">{read ? "You have covered this section" : "Finished this section?"}</p>
                  <p className="mt-0.5 text-[13px] leading-5 text-faint">{read ? "Your progress is saved locally. You can mark it unread at any time." : "Mark it as read to update your progress across phases and modules."}</p>
                </div>
              </div>
              <button type="button" onClick={onToggleRead} className={cn("inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg px-4 text-[15px] font-semibold transition", read ? "border border-success/25 bg-success/[0.07] text-success hover:bg-success/[0.11]" : "bg-lime text-white hover:bg-lime/90")}>
                {read ? <Check className="size-4" aria-hidden /> : <Circle className="size-4" aria-hidden />}
                {read ? "Marked as read" : "Mark as read"}
              </button>
            </div>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {previous ? (
              <button type="button" onClick={() => onNavigate(previous.id)} className="group flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2.5 text-left transition hover:border-line-strong hover:bg-raised">
                <ArrowLeft className="size-3.5 shrink-0 text-faint transition group-hover:-translate-x-0.5 group-hover:text-mist" aria-hidden />
                <span className="min-w-0">
                  <span className="block text-[13px] uppercase tracking-[0.12em] text-faint">Previous</span>
                  <span className="block truncate text-[13px] font-medium text-mist">{previous.title}</span>
                </span>
              </button>
            ) : <span />}
            {next ? (
              <button type="button" onClick={() => onNavigate(next.id)} className="group flex items-center justify-end gap-2 rounded-lg border border-line bg-surface px-3 py-2.5 text-right transition hover:border-line-strong hover:bg-raised">
                <span className="min-w-0">
                  <span className="block text-[13px] uppercase tracking-[0.12em] text-faint">Next</span>
                  <span className="block truncate text-[13px] font-medium text-mist">{next.title}</span>
                </span>
                <ArrowRight className="size-3.5 shrink-0 text-faint transition group-hover:translate-x-0.5 group-hover:text-mist" aria-hidden />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
