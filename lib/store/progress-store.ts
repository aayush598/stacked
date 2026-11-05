import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { z } from "zod";
import type { Question, Tier } from "@/lib/content/schema";
import { todayKey, yesterdayKey } from "@/lib/utils";

const answerRecordSchema = z.object({
  correct: z.boolean(),
  attempts: z.number().int().nonnegative(),
  lastAnswer: z.string(),
  answeredAt: z.number(),
  correctAt: z.number().nullable(),
});

const sessionAnswerSchema = z.object({
  questionId: z.string(),
  answer: z.string(),
  correct: z.boolean(),
  xpEarned: z.number().int().nonnegative(),
  answeredAt: z.number(),
});

const playSessionSchema = z.object({
  id: z.string(),
  courseId: z.literal("react"),
  tier: z.enum(["easy", "medium", "hard", "complex"]),
  topicId: z.string().nullable(),
  questionIds: z.array(z.string()),
  index: z.number().int().nonnegative(),
  answers: z.array(sessionAnswerSchema),
  combo: z.number().int().nonnegative(),
  maxCombo: z.number().int().nonnegative(),
  xpEarned: z.number().int().nonnegative(),
  startedAt: z.number(),
  updatedAt: z.number(),
  status: z.enum(["active", "complete"]),
});

const profileSchema = z.object({
  xp: z.number().int().nonnegative(),
  streakDays: z.number().int().nonnegative(),
  lastActiveDate: z.string().nullable(),
  totalAnswered: z.number().int().nonnegative(),
  totalCorrect: z.number().int().nonnegative(),
  bestCombo: z.number().int().nonnegative(),
  badges: z.array(z.string()),
});

const settingsSchema = z.object({
  sound: z.boolean(),
});

const persistedStateSchema = z.object({
  profile: profileSchema,
  answers: z.record(z.string(), answerRecordSchema),
  completedSessions: z.number().int().nonnegative(),
  activeSession: playSessionSchema.nullable(),
  settings: settingsSchema,
});

export type Profile = z.infer<typeof profileSchema>;
export type AnswerRecord = z.infer<typeof answerRecordSchema>;
export type SessionAnswer = z.infer<typeof sessionAnswerSchema>;
export type PlaySession = z.infer<typeof playSessionSchema>;
export type Settings = z.infer<typeof settingsSchema>;
type PersistedState = z.infer<typeof persistedStateSchema>;

type StartSessionInput = {
  tier: Tier;
  topicId?: string | null;
  questionIds: string[];
};

type Store = PersistedState & {
  startSession: (input: StartSessionInput) => void;
  recordAnswer: (input: {
    question: Question;
    answer: string;
    correct: boolean;
  }) => number;
  advanceSession: () => void;
  finishSession: () => void;
  discardSession: () => void;
  toggleSound: () => void;
  resetProgress: () => void;
};

const defaultProfile: Profile = {
  xp: 0,
  streakDays: 0,
  lastActiveDate: null,
  totalAnswered: 0,
  totalCorrect: 0,
  bestCombo: 0,
  badges: [],
};

const defaultSettings: Settings = {
  sound: false,
};

const initialState: PersistedState = {
  profile: defaultProfile,
  answers: {},
  completedSessions: 0,
  activeSession: null,
  settings: defaultSettings,
};

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function currentStreak(profile: Profile) {
  if (!profile.lastActiveDate) return 0;
  const today = todayKey();
  if (profile.lastActiveDate === today) return profile.streakDays;
  if (profile.lastActiveDate === yesterdayKey()) return profile.streakDays;
  return 0;
}

function nextStreak(profile: Profile) {
  const today = todayKey();
  if (profile.lastActiveDate === today) {
    return { streakDays: profile.streakDays, lastActiveDate: today };
  }
  if (profile.lastActiveDate === yesterdayKey()) {
    return { streakDays: profile.streakDays + 1, lastActiveDate: today };
  }
  return { streakDays: 1, lastActiveDate: today };
}

function addBadge(badges: string[], badge: string) {
  return badges.includes(badge) ? badges : [...badges, badge];
}

export const useProgressStore = create<Store>()(
  persist(
    (set, get) => ({
      ...initialState,

      startSession: ({ tier, topicId = null, questionIds }) => {
        const now = Date.now();
        set({
          activeSession: {
            id: createId(),
            courseId: "react",
            tier,
            topicId,
            questionIds,
            index: 0,
            answers: [],
            combo: 0,
            maxCombo: 0,
            xpEarned: 0,
            startedAt: now,
            updatedAt: now,
            status: "active",
          },
        });
      },

      recordAnswer: ({ question, answer, correct }) => {
        const state = get();
        const previous = state.answers[question.id];
        const xpAwarded = correct ? (previous?.correct ? 2 : question.xp) : 0;
        const now = Date.now();
        const streak = nextStreak(state.profile);

        let nextCorrect = state.profile.totalCorrect + (correct ? 1 : 0);
        let totalAnswered = state.profile.totalAnswered + 1;
        let sessionCombo = state.activeSession?.combo ?? 0;
        const session = state.activeSession;

        if (session) {
          const alreadyAnswered = session.answers.some(
            (item) => item.questionId === question.id,
          );
          if (!alreadyAnswered) {
            sessionCombo = correct ? sessionCombo + 1 : 0;
          }
        }

        let badges = state.profile.badges;
        if (correct) badges = addBadge(badges, "first-correct");
        if (sessionCombo >= 5) badges = addBadge(badges, "combo-5");
        if (nextCorrect >= 10) badges = addBadge(badges, "ten-correct");
        if (!badges.includes("easy-explorer") && question.tier === "easy" && totalAnswered >= 20) {
          badges = addBadge(badges, "easy-explorer");
        }

        const nextSession = session
          ? (() => {
              const alreadyAnswered = session.answers.some(
                (item) => item.questionId === question.id,
              );
              return {
                ...session,
                answers: alreadyAnswered
                  ? session.answers
                  : [
                      ...session.answers,
                      {
                        questionId: question.id,
                        answer,
                        correct,
                        xpEarned: xpAwarded,
                        answeredAt: now,
                      },
                    ],
                combo: sessionCombo,
                maxCombo: Math.max(session.maxCombo, sessionCombo),
                xpEarned: session.xpEarned + xpAwarded,
                updatedAt: now,
              };
            })()
          : null;

        set({
          profile: {
            ...state.profile,
            xp: state.profile.xp + xpAwarded,
            totalAnswered,
            totalCorrect: nextCorrect,
            bestCombo: Math.max(state.profile.bestCombo, sessionCombo),
            badges,
            ...streak,
          },
          answers: {
            ...state.answers,
            [question.id]: {
              correct: previous?.correct || correct,
              attempts: (previous?.attempts ?? 0) + 1,
              lastAnswer: answer,
              answeredAt: now,
              correctAt: correct ? (previous?.correctAt ?? now) : (previous?.correctAt ?? null),
            },
          },
          activeSession: nextSession,
        });

        return xpAwarded;
      },

      advanceSession: () => {
        const session = get().activeSession;
        if (!session || session.status !== "active") return;
        const nextIndex = Math.min(session.index + 1, session.questionIds.length);
        const isLast = nextIndex >= session.questionIds.length;
        set({
          activeSession: {
            ...session,
            index: nextIndex,
            updatedAt: Date.now(),
          },
        });
        if (isLast) get().finishSession();
      },

      finishSession: () => {
        const session = get().activeSession;
        if (!session) return;
        const wasComplete = session.status === "complete";
        const allCorrect =
          session.answers.length > 0 &&
          session.answers.length === session.questionIds.length &&
          session.answers.every((answer) => answer.correct);

        set((state) => ({
          completedSessions: state.completedSessions + (wasComplete ? 0 : 1),
          activeSession: {
            ...session,
            status: "complete",
            index: session.questionIds.length,
            updatedAt: Date.now(),
          },
          profile: allCorrect
            ? {
                ...state.profile,
                badges: addBadge(state.profile.badges, "perfect-run"),
              }
            : state.profile,
        }));
      },

      discardSession: () => set({ activeSession: null }),

      toggleSound: () =>
        set((state) => ({
          settings: { ...state.settings, sound: !state.settings.sound },
        })),

      resetProgress: () => set({ ...initialState }),
    }),
    {
      name: "stacked.react.progress.v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (state) => ({
        profile: state.profile,
        answers: state.answers,
        completedSessions: state.completedSessions,
        activeSession: state.activeSession,
        settings: state.settings,
      }),
      merge: (persisted, current) => {
        const parsed = persistedStateSchema.safeParse(persisted);
        if (!parsed.success) return current;
        return { ...current, ...parsed.data };
      },
    },
  ),
);
