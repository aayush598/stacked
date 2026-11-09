export const REVIEW_STATUSES = ["draft", "reviewed"] as const;

export type ReviewStatus = (typeof REVIEW_STATUSES)[number];

export type StatusFilter = "all" | ReviewStatus;
export type ReadFilter = "all" | "read" | "unread";

export type NoteFilters = {
  status: StatusFilter;
  read: ReadFilter;
  query: string;
};

export type NoteSection = {
  id: string;
  title: string;
  topics: string[];
  status: ReviewStatus;
  minutes: number;
};

export type NoteModule = {
  id: string;
  number: string;
  title: string;
  summary: string;
  kind: "module" | "project";
  sections: NoteSection[];
};

export type NotePhase = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  summary: string;
  modules: NoteModule[];
};

export type NoteCourse = {
  id: string;
  title: string;
  shortTitle: string;
  kicker: string;
  description: string;
  accent: "lime" | "sky" | "coral" | "violet";
  phases: NotePhase[];
};

export type NoteNotification = {
  id: string;
  sectionId: string;
  sectionTitle: string;
  moduleTitle: string;
  phaseTitle: string;
  createdAt: number;
  readAt: number | null;
};

export type ReviewSnapshot = Record<string, ReviewStatus>;

export type NoteStats = {
  phases: number;
  modules: number;
  projects: number;
  sections: number;
  reviewed: number;
  minutes: number;
};

export function statusLabel(status: ReviewStatus) {
  return status === "reviewed" ? "Human reviewed" : "Needs review";
}

export function statusDescription(status: ReviewStatus) {
  return status === "reviewed"
    ? "Final human touch and review added."
    : "Content is in place, final human review is pending.";
}

export function moduleStats(module: NoteModule) {
  const sections = module.sections.length;
  const reviewed = module.sections.filter((section) => section.status === "reviewed").length;
  return {
    sections,
    reviewed,
    percent: sections === 0 ? 0 : Math.round((reviewed / sections) * 100),
  };
}

export function phaseStats(phase: NotePhase) {
  const modules = phase.modules.length;
  const sections = phase.modules.reduce((total, module) => total + module.sections.length, 0);
  const reviewed = phase.modules.reduce(
    (total, module) =>
      total + module.sections.filter((section) => section.status === "reviewed").length,
    0,
  );
  return {
    modules,
    sections,
    reviewed,
    percent: sections === 0 ? 0 : Math.round((reviewed / sections) * 100),
  };
}

export function courseStats(course: NoteCourse): NoteStats {
  const modules = course.phases.flatMap((phase) => phase.modules);
  const sections = modules.flatMap((module) => module.sections);
  return {
    phases: course.phases.length,
    modules: modules.filter((module) => module.kind === "module").length,
    projects: modules.filter((module) => module.kind === "project").length,
    sections: sections.length,
    reviewed: sections.filter((section) => section.status === "reviewed").length,
    minutes: sections.reduce((total, section) => total + section.minutes, 0),
  };
}
