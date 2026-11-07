import { CurriculumExplorer } from "@/components/curriculum-explorer";
import { curriculumStats } from "@/lib/content/react-curriculum";

export const metadata = {
  title: "React curriculum map — Stacked",
  description:
    `A complete React curriculum: ${curriculumStats.modules} modules, ${curriculumStats.topics} topics and four live difficulty tiers, from JSX syntax to architecture.`,
};

export default function ReactCurriculumPage() {
  return <CurriculumExplorer />;
}
