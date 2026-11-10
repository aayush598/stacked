import { reactSections } from "@/lib/notes/react-roadmap";
import { typescriptSections } from "@/lib/notes/typescript-roadmap";
import type { NoteModule, NotePhase, NoteSection } from "@/lib/notes/types";

export type NoteCourseId = "typescript" | "react";

export type IndexedNote = {
  section: NoteSection;
  module: NoteModule;
  phase: NotePhase;
  course: NoteCourseId;
  href: string;
  haystack: string;
  tokens: Set<string>;
};

function courseOf(id: string): NoteCourseId {
  return id.startsWith("react-") ? "react" : "typescript";
}

function hrefFor(id: string) {
  const course = courseOf(id);
  return `/notes/${course}?section=${encodeURIComponent(id)}`;
}

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string) {
  return new Set(
    normalize(text)
      .split(" ")
      .map((t) => t.trim())
      .filter((t) => t.length > 2),
  );
}

function buildIndex(entries: { section: NoteSection; module: NoteModule; phase: NotePhase }[], course: NoteCourseId): IndexedNote[] {
  return entries.map((e) => {
    const haystack = normalize([e.section.title, ...e.section.topics, e.module.title, e.phase.title].join(" "));
    return {
      ...e,
      course,
      href: hrefFor(e.section.id),
      haystack,
      tokens: new Set(haystack.split(" ").filter((t) => t.length > 2)),
    };
  });
}

export const allNotesIndex: IndexedNote[] = [
  ...buildIndex(typescriptSections, "typescript"),
  ...buildIndex(reactSections, "react"),
];

export const noteIndexById = new Map(allNotesIndex.map((n) => [n.section.id, n]));

export function searchAllNotes(query: string, limit = 20): IndexedNote[] {
  const q = normalize(query);
  if (!q) return [];
  const terms = q.split(" ").filter(Boolean);
  const scored: Array<{ note: IndexedNote; score: number }> = [];
  for (const note of allNotesIndex) {
    let score = 0;
    let ok = true;
    for (const term of terms) {
      if (!note.haystack.includes(term)) { ok = false; break; }
      score += note.section.title.toLowerCase().includes(term) ? 5 : 1;
      score += note.section.topics.some((t) => t.toLowerCase().includes(term)) ? 3 : 0;
      score += note.module.title.toLowerCase().includes(term) ? 2 : 0;
    }
    if (ok) scored.push({ note, score });
  }
  scored.sort((a, b) => b.score - a.score || a.note.section.title.localeCompare(b.note.section.title));
  return scored.slice(0, limit).map((s) => s.note);
}

export function findRelatedNotes(sectionId: string, limit = 8): IndexedNote[] {
  const current = noteIndexById.get(sectionId);
  if (!current) return [];
  const baseText = [current.section.title, ...current.section.topics, current.module.title].join(" ");
  const base = tokenize(baseText);
  if (base.size === 0) return [];
  const scored: Array<{ note: IndexedNote; score: number }> = [];
  for (const note of allNotesIndex) {
    if (note.section.id === sectionId) continue;
    let overlap = 0;
    for (const t of base) if (note.tokens.has(t)) overlap++;
    // boost strong title/topic phrase overlap
    const curTitle = normalize(current.section.title);
    if (curTitle.length > 8 && note.haystack.includes(curTitle)) overlap += 6;
    for (const topic of current.section.topics) {
      const nt = normalize(topic);
      if (nt.length > 3 && note.haystack.includes(nt)) overlap += 2;
    }
    if (overlap >= 2) scored.push({ note, score: overlap + (note.course === current.course ? 1 : 0) });
  }
  scored.sort((a, b) => b.score - a.score || a.note.section.title.localeCompare(b.note.section.title));
  return scored.slice(0, limit).map((s) => s.note);
}
