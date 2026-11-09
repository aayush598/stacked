"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ListFilter, Sparkles } from "lucide-react";
import { NoteReader } from "@/components/notes/note-reader";
import { NotesSidebar } from "@/components/notes/notes-sidebar";
import { ProgressBar } from "@/components/notes/notes-ui";
import { useNotesHydrated } from "@/lib/hooks/use-notes-hydrated";
import { courseStats, type NoteFilters } from "@/lib/notes/types";
import {
  typescriptRoadmap,
  typescriptSectionById,
  typescriptSections,
} from "@/lib/notes/typescript-roadmap";
import { useNotesStore } from "@/lib/store/notes-store";
import { cn } from "@/lib/utils";

const defaultFilters: NoteFilters = {
  status: "all",
  read: "all",
  query: "",
};

const stats = courseStats(typescriptRoadmap);
const firstSection = typescriptSections[0];

export function TypeScriptNotesExplorer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const readerRef = useRef<HTMLDivElement>(null);
  const hydrated = useNotesHydrated();
  const readSections = useNotesStore((state) => state.readSections);
  const toggleRead = useNotesStore((state) => state.toggleRead);

  const [filters, setFilters] = useState<NoteFilters>(defaultFilters);
  const [showToc, setShowToc] = useState(false);

  const requestedId = searchParams.get("section");
  const requestedEntry = requestedId ? typescriptSectionById.get(requestedId) : undefined;
  const activeEntry = requestedEntry ?? firstSection;
  const selectedId = activeEntry.section.id;

  const matchedIds = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const ids = new Set<string>();

    for (const entry of typescriptSections) {
      const { section, module, phase } = entry;
      if (filters.status !== "all" && section.status !== filters.status) continue;
      const read = Boolean(readSections[section.id]);
      if (filters.read === "read" && !read) continue;
      if (filters.read === "unread" && read) continue;

      if (query) {
        const haystack = [
          section.title,
          ...section.topics,
          module.title,
          phase.title,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(query)) continue;
      }

      ids.add(section.id);
    }

    return ids;
  }, [filters, readSections]);

  const filtersActive =
    filters.status !== "all" || filters.read !== "all" || filters.query.trim().length > 0;

  const readCount = hydrated
    ? typescriptSections.filter(({ section }) => Boolean(readSections[section.id])).length
    : 0;
  const readPercent = Math.round((readCount / stats.sections) * 100);

  const position = typescriptSections.findIndex(({ section }) => section.id === selectedId);
  const previousEntry = position > 0 ? typescriptSections[position - 1] : undefined;
  const nextEntry =
    position >= 0 && position < typescriptSections.length - 1
      ? typescriptSections[position + 1]
      : undefined;

  const read = Boolean(readSections[selectedId]);

  useEffect(() => {
    const entry = typescriptSectionById.get(selectedId);
    if (!entry) return;
    document.title = `${entry.section.title} — TypeScript Notes — Stacked`;
  }, [selectedId]);

  function selectSection(sectionId: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("section", sectionId);
    setShowToc(false);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    window.requestAnimationFrame(() => {
      readerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/notes"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-faint transition hover:text-mist"
            >
              <ArrowLeft className="size-3" aria-hidden />
              Notes library
            </Link>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-semibold tracking-[-0.045em] text-mist sm:text-4xl">
                TypeScript Mastery
              </h1>
              <span className="rounded-full border border-lime/20 bg-lime/[0.06] px-2 py-0.5 font-mono text-[13px] uppercase tracking-[0.12em] text-lime">
                In progress
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-[15px] leading-6 text-muted">
              {stats.phases} phases · {stats.modules} modules · {stats.projects} projects ·{" "}
              {stats.sections.toLocaleString()} nested sections. Filter by review state, track
              what you have read, and catch new human-reviewed notes.
            </p>
          </div>

          <div className="w-full max-w-xs shrink-0 sm:w-64">
            <div className="flex items-center justify-between gap-2 text-[13px] text-faint">
              <span>Reading progress</span>
              <span className="font-mono text-muted">{hydrated ? `${readPercent}%` : "—"}</span>
            </div>
            <ProgressBar value={hydrated ? readPercent : 0} className="mt-2" />
            <p className="mt-1.5 text-[13px] text-faint">
              {hydrated ? `${readCount} of ${stats.sections} sections read` : "Loading local progress"}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setShowToc((current) => !current)}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-[15px] font-medium text-mist transition hover:border-line-strong hover:bg-raised lg:hidden"
          >
            <ListFilter className="size-3.5 text-muted" aria-hidden />
            {showToc ? "Hide contents" : "Contents & filters"}
          </button>
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-faint">
            {filtersActive ? (
              <span className="rounded-full border border-lime/20 bg-lime/[0.06] px-2 py-1 font-medium text-lime">
                {matchedIds.size.toLocaleString()} matching sections
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="size-3 text-lime" aria-hidden />
              {stats.reviewed} human reviewed
            </span>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
          <aside
            className={cn(
              "lg:sticky lg:top-20 lg:block",
              showToc ? "block" : "hidden",
            )}
          >
            <NotesSidebar
              phases={typescriptRoadmap.phases}
              selectedId={selectedId}
              readSections={readSections}
              filters={filters}
              matchedIds={matchedIds}
              hydrated={hydrated}
              onFiltersChange={setFilters}
              onClearFilters={() => setFilters(defaultFilters)}
              onSelect={selectSection}
            />
          </aside>

          <div ref={readerRef} className="min-w-0 scroll-mt-24">
            <NoteReader
              section={activeEntry.section}
              module={activeEntry.module}
              phase={activeEntry.phase}
              read={read}
              hydrated={hydrated}
              position={position + 1}
              total={typescriptSections.length}
              previous={
                previousEntry
                  ? { id: previousEntry.section.id, title: previousEntry.section.title }
                  : undefined
              }
              next={
                nextEntry
                  ? { id: nextEntry.section.id, title: nextEntry.section.title }
                  : undefined
              }
              onToggleRead={() => toggleRead(selectedId)}
              onNavigate={selectSection}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
