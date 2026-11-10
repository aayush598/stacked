"use client";

import { useEffect } from "react";
import { reviewSnapshot, typescriptSectionById } from "@/lib/notes/typescript-roadmap";
import { reactReviewSnapshot, reactSectionById } from "@/lib/notes/react-roadmap";
import type { NoteNotification } from "@/lib/notes/types";
import { useNotesHydrated } from "@/lib/hooks/use-notes-hydrated";
import { useNotesStore } from "@/lib/store/notes-store";

const sectionById = new Map([...typescriptSectionById, ...reactSectionById]);

export function NotesSync() {
  const hydrated = useNotesHydrated();

  useEffect(() => {
    if (!hydrated) return;

    const current = { ...reviewSnapshot(), ...reactReviewSnapshot() };
    const previous = useNotesStore.getState().reviewSnapshot;

    if (!previous) {
      useNotesStore.getState().applyReviewSnapshot(current, []);
      return;
    }

    const now = Date.now();
    const notifications: NoteNotification[] = [];

    for (const [sectionId, status] of Object.entries(current)) {
      if (status !== "reviewed" || previous[sectionId] === "reviewed") continue;
      const entry = sectionById.get(sectionId);
      if (!entry) continue;
      notifications.push({
        id: `${sectionId}:${now}`,
        sectionId,
        sectionTitle: entry.section.title,
        moduleTitle: entry.module.title,
        phaseTitle: entry.phase.title,
        createdAt: now,
        readAt: null,
      });
    }

    useNotesStore.getState().applyReviewSnapshot(current, notifications);
  }, [hydrated]);

  return null;
}
