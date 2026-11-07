import type { Tier } from "./schema";

export type CurriculumTopic = {
  id: string;
  title: string;
  blurb: string;
};

export type CurriculumModule = {
  id: string;
  order: number;
  title: string;
  kicker: string;
  summary: string;
  icon: string;
  accent: "lime" | "coral" | "sky" | "violet";
  focus: Tier[];
  topics: CurriculumTopic[];
};

export type CurriculumStats = {
  modules: number;
  topics: number;
};

export function topic(
  id: string,
  title: string,
  blurb: string,
): CurriculumTopic {
  return { id, title, blurb };
}

export function curriculumStats(modules: CurriculumModule[]): CurriculumStats {
  return {
    modules: modules.length,
    topics: modules.reduce((total, module) => total + module.topics.length, 0),
  };
}
