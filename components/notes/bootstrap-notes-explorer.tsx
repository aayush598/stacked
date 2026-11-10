"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, PanelLeftClose, PanelLeftOpen, Sparkles } from "lucide-react";
import { NoteReader } from "@/components/notes/note-reader";
import { NotesSidebar } from "@/components/notes/notes-sidebar";
import { ProgressBar, Skeleton } from "@/components/notes/notes-ui";
import { NotesGlobalSearch } from "@/components/notes/notes-global-search";
import { useNotesHydrated } from "@/lib/hooks/use-notes-hydrated";
import { courseStats, type NoteFilters } from "@/lib/notes/types";
import { bootstrapRoadmap, bootstrapSectionById, bootstrapSections } from "@/lib/notes/bootstrap-roadmap";
import { useNotesStore } from "@/lib/store/notes-store";
import { cn } from "@/lib/utils";

const defaultFilters: NoteFilters = { status: "all", read: "all", query: "" };
const stats = courseStats(bootstrapRoadmap);
const firstSection = bootstrapSections[0];

export function BootstrapNotesExplorer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const readerRef = useRef<HTMLDivElement>(null);
  const hydrated = useNotesHydrated();
  const readSections = useNotesStore((state) => state.readSections);
  const toggleRead = useNotesStore((state) => state.toggleRead);

  const [filters, setFilters] = useState<NoteFilters>(defaultFilters);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const requestedId = searchParams.get("section");
  const requestedEntry = requestedId ? bootstrapSectionById.get(requestedId) : undefined;
  const activeEntry = requestedEntry ?? firstSection;
  const selectedId = activeEntry.section.id;

  const matchedIds = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const ids = new Set<string>();
    for (const entry of bootstrapSections) {
      const { section, module, phase } = entry;
      if (filters.status !== "all" && section.status !== filters.status) continue;
      const read = Boolean(readSections[section.id]);
      if (filters.read === "read" && !read) continue;
      if (filters.read === "unread" && read) continue;
      if (query) {
        const haystack = [section.title, ...section.topics, module.title, phase.title].join(" ").toLowerCase();
        if (!haystack.includes(query)) continue;
      }
      ids.add(section.id);
    }
    return ids;
  }, [filters, readSections]);

  const filtersActive = filters.status !== "all" || filters.read !== "all" || filters.query.trim().length > 0;
  const readCount = hydrated ? bootstrapSections.filter(({ section }) => Boolean(readSections[section.id])).length : 0;
  const readPercent = Math.round((readCount / stats.sections) * 100);
  const position = bootstrapSections.findIndex(({ section }) => section.id === selectedId);
  const previousEntry = position > 0 ? bootstrapSections[position - 1] : undefined;
  const nextEntry = position >= 0 && position < bootstrapSections.length - 1 ? bootstrapSections[position + 1] : undefined;
  const read = Boolean(readSections[selectedId]);

  useEffect(() => {
    const entry = bootstrapSectionById.get(selectedId);
    if (!entry) return;
    document.title = `${entry.section.title} — Bootstrap Notes — Stacked`;
  }, [selectedId]);

  function selectSection(sectionId: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("section", sectionId);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    window.requestAnimationFrame(() => { readerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); });
  }

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-[90rem] px-3 pb-10 pt-6 sm:px-4 sm:pt-8 lg:px-6">
        <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <Link href="/notes" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-faint transition hover:text-mist">
              <ArrowLeft className="size-3" aria-hidden />Notes library
            </Link>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold tracking-[-0.04em] text-mist sm:text-3xl">Bootstrap Mastery</h1>
              <span className="rounded-full border border-violet/20 bg-violet/[0.06] px-2 py-0.5 font-mono text-[12px] uppercase tracking-[0.12em] text-violet">In progress</span>
            </div>
            <p className="mt-1.5 max-w-3xl text-[14px] leading-6 text-muted sm:text-[15px]">
              {stats.phases} phases · {stats.modules} modules · {stats.projects} projects · {stats.sections.toLocaleString()} nested sections. Filter, track progress, and search across all notes.
            </p>
          </div>
          <div className="w-full max-w-xs shrink-0 sm:w-56">
            <div className="flex items-center justify-between gap-2 text-[12px] text-faint">
              <span>Reading progress</span>
              {hydrated ? <span className="font-mono text-muted">{readPercent}%</span> : <Skeleton className="h-4 w-10" />}
            </div>
            {hydrated ? <ProgressBar value={readPercent} className="mt-1.5" /> : <Skeleton className="mt-1.5 h-1.5 w-full rounded-full" />}
            {hydrated ? <p className="mt-1 text-[12px] text-faint">{readCount} of {stats.sections} sections read</p> : <Skeleton className="mt-1 h-4 w-40" />}
          </div>
        </div>
        <div className="mt-3">
          <NotesGlobalSearch className="max-w-2xl" />
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <button type="button" onClick={() => setSidebarOpen((v) => !v)} className="inline-flex h-8 items-center gap-2 rounded-lg border border-line bg-surface px-2.5 text-[13px] font-medium text-mist transition hover:border-line-strong hover:bg-raised" aria-expanded={sidebarOpen} aria-controls="notes-sidebar">
            {sidebarOpen ? <PanelLeftClose className="size-3.5 text-muted" aria-hidden /> : <PanelLeftOpen className="size-3.5 text-muted" aria-hidden />}
            {sidebarOpen ? "Hide sidebar" : "Show sidebar"}
          </button>
          <div className="flex flex-wrap items-center gap-2 text-[12px] text-faint">
            {filtersActive ? <span className="rounded-full border border-violet/20 bg-violet/[0.06] px-2 py-0.5 font-medium text-violet">{matchedIds.size.toLocaleString()} matching</span> : null}
            <span className="inline-flex items-center gap-1.5"><Sparkles className="size-3 text-violet" aria-hidden />{stats.reviewed} reviewed</span>
          </div>
        </div>
        <div className={cn("mt-3 grid items-start gap-3", sidebarOpen ? "lg:grid-cols-[320px_minmax(0,1fr)]" : "grid-cols-1")}>
          {sidebarOpen ? (
            <aside id="notes-sidebar" className="lg:sticky lg:top-20">
              <NotesSidebar phases={bootstrapRoadmap.phases} selectedId={selectedId} readSections={readSections} filters={filters} matchedIds={matchedIds} hydrated={hydrated} onFiltersChange={setFilters} onClearFilters={() => setFilters(defaultFilters)} onSelect={selectSection} />
            </aside>
          ) : null}
          <div ref={readerRef} className="min-w-0 scroll-mt-24">
            <NoteReader section={activeEntry.section} module={activeEntry.module} phase={activeEntry.phase} read={read} hydrated={hydrated} position={position + 1} total={bootstrapSections.length} previous={previousEntry ? { id: previousEntry.section.id, title: previousEntry.section.title } : undefined} next={nextEntry ? { id: nextEntry.section.id, title: nextEntry.section.title } : undefined} onToggleRead={() => toggleRead(selectedId)} onNavigate={selectSection} />
          </div>
        </div>
      </section>
    </main>
  );
}
