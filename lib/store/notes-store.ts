import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { z } from "zod";
import type { NoteNotification, ReviewSnapshot } from "@/lib/notes/types";

const notificationSchema = z.object({
  id: z.string(),
  sectionId: z.string(),
  sectionTitle: z.string(),
  moduleTitle: z.string(),
  phaseTitle: z.string(),
  createdAt: z.number(),
  readAt: z.number().nullable(),
});

const persistedNotesSchema = z.object({
  readSections: z.record(z.string(), z.number()),
  reviewSnapshot: z.record(z.string(), z.enum(["draft", "reviewed"])).nullable(),
  notifications: z.array(notificationSchema),
});

type PersistedNotes = z.infer<typeof persistedNotesSchema>;

type NotesStore = PersistedNotes & {
  markRead: (sectionId: string) => void;
  markUnread: (sectionId: string) => void;
  toggleRead: (sectionId: string) => void;
  applyReviewSnapshot: (
    snapshot: ReviewSnapshot,
    notifications: NoteNotification[],
  ) => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  clearNotifications: () => void;
  resetNotes: () => void;
};

const initialState: PersistedNotes = {
  readSections: {},
  reviewSnapshot: null,
  notifications: [],
};

export const useNotesStore = create<NotesStore>()(
  persist(
    (set) => ({
      ...initialState,

      markRead: (sectionId) =>
        set((state) => ({
          readSections: { ...state.readSections, [sectionId]: Date.now() },
        })),

      markUnread: (sectionId) =>
        set((state) => {
          const next = { ...state.readSections };
          delete next[sectionId];
          return { readSections: next };
        }),

      toggleRead: (sectionId) =>
        set((state) => {
          if (state.readSections[sectionId]) {
            const next = { ...state.readSections };
            delete next[sectionId];
            return { readSections: next };
          }
          return {
            readSections: { ...state.readSections, [sectionId]: Date.now() },
          };
        }),

      applyReviewSnapshot: (snapshot, notifications) =>
        set((state) => ({
          reviewSnapshot: snapshot,
          notifications:
            notifications.length === 0
              ? state.notifications
              : [...notifications, ...state.notifications],
        })),

      markNotificationRead: (id) =>
        set((state) => ({
          notifications: state.notifications.map((notification) =>
            notification.id === id
              ? { ...notification, readAt: notification.readAt ?? Date.now() }
              : notification,
          ),
        })),

      markAllNotificationsRead: () =>
        set((state) => {
          const now = Date.now();
          return {
            notifications: state.notifications.map((notification) => ({
              ...notification,
              readAt: notification.readAt ?? now,
            })),
          };
        }),

      clearNotifications: () => set({ notifications: [] }),

      resetNotes: () => set({ ...initialState }),
    }),
    {
      name: "stacked.notes.v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (state) => ({
        readSections: state.readSections,
        reviewSnapshot: state.reviewSnapshot,
        notifications: state.notifications,
      }),
      merge: (persisted, current) => {
        const parsed = persistedNotesSchema.safeParse(persisted);
        if (!parsed.success) return current;
        return { ...current, ...parsed.data };
      },
    },
  ),
);
