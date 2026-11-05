export type BadgeDefinition = {
  id: string;
  name: string;
  description: string;
  accent: "lime" | "coral" | "sky" | "violet";
};

export const BADGES: BadgeDefinition[] = [
  {
    id: "first-correct",
    name: "First Light",
    description: "Answer your first question correctly.",
    accent: "lime",
  },
  {
    id: "combo-5",
    name: "On a Roll",
    description: "Build a 5-answer combo.",
    accent: "coral",
  },
  {
    id: "ten-correct",
    name: "Syntax Slinger",
    description: "Collect 10 correct answers.",
    accent: "sky",
  },
  {
    id: "perfect-run",
    name: "Flawless",
    description: "Finish a run with every answer correct.",
    accent: "violet",
  },
  {
    id: "easy-explorer",
    name: "Easy Explorer",
    description: "Answer 20 easy-tier questions.",
    accent: "lime",
  },
];

export const badgeById = new Map(BADGES.map((badge) => [badge.id, badge]));
