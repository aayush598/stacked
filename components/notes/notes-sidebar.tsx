"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  Circle,
  FilterX,
  Search,
  X,
} from "lucide-react";
import { ProgressBar } from "@/components/notes/notes-ui";
import type { NoteFilters, NoteModule, NotePhase } from "@/lib/notes/types";
import { typescriptSectionById } from "@/lib/notes/typescript-roadmap";
import { cn, pluralize } from "@/lib/utils";

type SidebarProps = {
  phases: NotePhase[];
  selectedId: string;
  readSections: Record<string, number>;
  filters: NoteFilters;
  matchedIds: Set<string>;
  hydrated: boolean;
  onFiltersChange: (filters: NoteFilters) => void;
  onClearFilters: () => void;
  onSelect: (sectionId: string) => void;
};

function moduleReadCount(module: NoteModule, readSections: Record<string, number>) {
  return module.sections.filter((section) => readSections[section.id]).length;
}

export function NotesSidebar({
  phases,
  selectedId,
  readSections,
  filters,
  matchedIds,
  hydrated,
  onFiltersChange,
  onClearFilters,
  onSelect,
}: SidebarProps) {
  const [openPhases, setOpenPhases] = useState<Set<string>>(
    () => new Set(phases[0] ? [phases[0].id] : []),
  );
  const [openModules, setOpenModules] = useState<Set<string>>(new Set());

  const filtersActive =
    filters.status !== "all" || filters.read !== "all" || filters.query.trim().length > 0;

  const totals = useMemo(() => {
    const sections = phases.flatMap((phase) =>
      phase.modules.flatMap((module) => module.sections),
    );
    const read = sections.filter((section) => readSections[section.id]).length;
    const reviewed = sections.filter((section) => section.status === "reviewed").length;
    return { sections: sections.length, read, reviewed };
  }, [phases, readSections]);

  const readPercent = Math.round((totals.read / totals.sections) * 100);
  const visiblePhases = useMemo(() => {
    return phases
      .map((phase) => ({
        phase,
        modules: phase.modules
          .map((module) => ({
            module,
            sections: module.sections.filter((section) => matchedIds.has(section.id)),
          }))
          .filter((entry) => entry.sections.length > 0),
      }))
      .filter((entry) => entry.modules.length > 0);
  }, [phases, matchedIds]);

  function togglePhase(id: string) {
    setOpenPhases((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleModule(id: string) {
    setOpenModules((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function sectionIsOpen(phase: NotePhase, module: NoteModule) {
    const selected = typescriptSectionById.get(selectedId);
    return (
      filtersActive ||
      openPhases.has(phase.id) ||
      selected?.phase.id === phase.id
    ) && (filtersActive || openModules.has(module.id) || selected?.module.id === module.id);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="border-b border-line p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">
              Reading progress
            </p>
            <p className="mt-1 text-[15px] font-semibold text-mist">
              {hydrated ? `${totals.read} of ${totals.sections} read` : "Loading progress"}
            </p>
          </div>
          <span className="font-mono text-[15px] text-muted">
            {hydrated ? `${readPercent}%` : "—"}
          </span>
        </div>
        <ProgressBar value={hydrated ? readPercent : 0} className="mt-3" />
        <div className="mt-2.5 flex items-center justify-between gap-2 text-[13px] text-faint">
          <span>{totals.reviewed} human reviewed</span>
          <span>{pluralize(totals.sections - totals.reviewed, "draft")}</span>
        </div>
      </div>

      <div className="border-b border-line p-3.5">
        <label className="relative block">
          <Search
            className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-faint"
            aria-hidden
          />
          <input
            value={filters.query}
            onChange={(event) =>
              onFiltersChange({ ...filters, query: event.target.value })
            }
            placeholder={`Search ${totals.sections} sections`}
            className="h-9 w-full rounded-lg border border-line bg-canvas/60 pl-8 pr-8 text-[15px] text-mist outline-none transition placeholder:text-faint focus:border-line-strong focus:bg-surface"
          />
          {filters.query ? (
            <button
              type="button"
              onClick={() => onFiltersChange({ ...filters, query: "" })}
              className="absolute right-2 top-1/2 grid size-5 -translate-y-1/2 place-items-center rounded text-faint transition hover:bg-raised hover:text-mist"
              aria-label="Clear search"
            >
              <X className="size-3" aria-hidden />
            </button>
          ) : null}
        </label>

        <div className="mt-3 space-y-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                ["all", "All"],
                ["draft", "Needs review"],
                ["reviewed", "Reviewed"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => onFiltersChange({ ...filters, status: value })}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[13px] font-medium transition",
                  filters.status === value
                    ? "border-mist bg-mist text-canvas"
                    : "border-line bg-surface text-muted hover:border-line-strong hover:text-mist",
                )}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                ["all", "All read states"],
                ["unread", "Unread"],
                ["read", "Read"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => onFiltersChange({ ...filters, read: value })}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[13px] font-medium transition",
                  filters.read === value
                    ? "border-lime/30 bg-lime/[0.08] text-lime"
                    : "border-line bg-surface text-muted hover:border-line-strong hover:text-mist",
                )}
              >
                {label}
              </button>
            ))}
            {filtersActive ? (
              <button
                type="button"
                onClick={onClearFilters}
                className="inline-flex items-center gap-1 rounded-full px-1.5 py-1 text-[13px] font-medium text-faint transition hover:text-mist"
              >
                <FilterX className="size-3" aria-hidden />
                Reset
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="max-h-[calc(100vh-17rem)] overflow-y-auto p-2">
        {visiblePhases.length === 0 ? (
          <div className="px-3 py-10 text-center">
            <p className="text-[15px] font-medium text-mist">No sections match</p>
            <p className="mt-1 text-[15px] leading-5 text-faint">
              Try a broader search or reset the filters.
            </p>
            <button
              type="button"
              onClick={onClearFilters}
              className="mt-3 rounded-lg border border-line px-3 py-1.5 text-[13px] font-medium text-mist transition hover:bg-raised"
            >
              Clear filters
            </button>
          </div>
        ) : (
          visiblePhases.map(({ phase, modules }) => {
            const phaseOpen =
              filtersActive ||
              openPhases.has(phase.id) ||
              typescriptSectionById.get(selectedId)?.phase.id === phase.id;
            return (
              <div key={phase.id} className="mb-1.5">
                <button
                  type="button"
                  onClick={() => togglePhase(phase.id)}
                  className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left transition hover:bg-raised/70"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-md border border-line bg-canvas font-mono text-[13px] text-faint">
                    {String(phase.number).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[15px] font-semibold text-mist">
                      {phase.title}
                    </span>
                    <span className="block truncate text-[13px] text-faint">
                      {phase.subtitle}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-3.5 shrink-0 text-faint transition-transform",
                      phaseOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>

                {phaseOpen ? (
                  <div className="ml-3 border-l border-line pl-2">
                    {modules.map(({ module, sections }) => {
                      const moduleOpen = sectionIsOpen(phase, module);
                      const moduleRead = moduleReadCount(module, readSections);
                      return (
                        <div key={module.id} className="mt-1">
                          <button
                            type="button"
                            onClick={() => toggleModule(module.id)}
                            className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left transition hover:bg-raised/60"
                          >
                            <span className="font-mono text-[13px] text-faint">
                              {module.number}
                            </span>
                            <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-mist">
                              {module.title}
                            </span>
                            <span className="shrink-0 font-mono text-[13px] text-faint">
                              {moduleRead}/{module.sections.length}
                            </span>
                            <ChevronDown
                              className={cn(
                                "size-3 shrink-0 text-faint transition-transform",
                                moduleOpen && "rotate-180",
                              )}
                              aria-hidden
                            />
                          </button>

                          {moduleOpen ? (
                            <div className="mt-0.5 space-y-0.5">
                              {sections.map((section) => {
                                const active = selectedId === section.id;
                                const read = Boolean(readSections[section.id]);
                                return (
                                  <button
                                    key={section.id}
                                    type="button"
                                    onClick={() => onSelect(section.id)}
                                    className={cn(
                                      "group flex w-full items-start gap-2 rounded-md px-2 py-1.5 text-left transition",
                                      active
                                        ? "bg-lime/[0.075] text-mist"
                                        : "text-muted hover:bg-raised/60 hover:text-mist",
                                    )}
                                  >
                                    {read ? (
                                      <Check
                                        className="mt-0.5 size-3 shrink-0 text-success"
                                        aria-hidden
                                      />
                                    ) : (
                                      <Circle
                                        className="mt-0.5 size-3 shrink-0 text-line-strong"
                                        aria-hidden
                                      />
                                    )}
                                    <span className="min-w-0 flex-1">
                                      <span
                                        className={cn(
                                          "block text-[13px] leading-4",
                                          active ? "font-medium" : "font-normal",
                                        )}
                                      >
                                        {section.title}
                                      </span>
                                      {section.topics.length > 0 ? (
                                        <span className="mt-0.5 block truncate text-[13px] text-faint">
                                          {section.topics.length} subtopics
                                        </span>
                                      ) : null}
                                    </span>
                                    <span
                                      className={cn(
                                        "mt-1 size-1.5 shrink-0 rounded-full",
                                        section.status === "reviewed"
                                          ? "bg-success"
                                          : "bg-coral/70",
                                      )}
                                      title={
                                        section.status === "reviewed"
                                          ? "Human reviewed"
                                          : "Needs review"
                                      }
                                    />
                                  </button>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })
        )}
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-line px-3.5 py-2.5 text-[13px] text-faint">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-success" />
          Reviewed
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-coral/70" />
          Needs review
        </span>
        <span className="hidden items-center gap-1.5 sm:flex">
          <Check className="size-3 text-success" />
          Read
        </span>
      </div>
    </div>
  );
}
