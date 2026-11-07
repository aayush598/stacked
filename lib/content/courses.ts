import { bootstrapCurriculum } from "./curricula/bootstrap-curriculum";
import { cssCurriculum } from "./curricula/css-curriculum";
import { htmlCurriculum } from "./curricula/html-curriculum";
import { javascriptCurriculum } from "./curricula/javascript-curriculum";
import { typescriptCurriculum } from "./curricula/typescript-curriculum";
import {
  curriculumStats,
  type CurriculumModule,
  type CurriculumStats,
} from "./curriculum-types";
import { reactCurriculum } from "./react-curriculum";
import { courseIdValues, type CourseId } from "./schema";

export type Course = {
  id: CourseId;
  title: string;
  kicker: string;
  tagline: string;
  summary: string;
  description: string;
  icon: string;
  accent: "lime" | "coral" | "sky" | "violet";
  modules: CurriculumModule[];
};

export const courseCurriculum: Record<CourseId, CurriculumModule[]> = {
  html: htmlCurriculum,
  css: cssCurriculum,
  javascript: javascriptCurriculum,
  bootstrap: bootstrapCurriculum,
  react: reactCurriculum,
  typescript: typescriptCurriculum,
};

export const courses: Course[] = [
  {
    id: "html",
    title: "HTML",
    kicker: "Structure",
    tagline: "Markup that means something",
    summary: "Document structure, semantic elements, forms and accessible content.",
    description:
      "Learn how the browser reads a document, choose semantic elements with confidence and build forms that work for keyboard and assistive-technology users.",
    icon: "FileCode2",
    accent: "coral",
    modules: htmlCurriculum,
  },
  {
    id: "css",
    title: "CSS",
    kicker: "Style",
    tagline: "Layout with fewer surprises",
    summary: "Cascade, box model, Flexbox, Grid, motion and modern responsive CSS.",
    description:
      "Understand why styles win, build robust layouts with Flexbox and Grid and use modern CSS features without collecting specificity hacks.",
    icon: "Palette",
    accent: "sky",
    modules: cssCurriculum,
  },
  {
    id: "javascript",
    title: "JavaScript",
    kicker: "Behavior",
    tagline: "The language behind the interface",
    summary: "Values, scope, closures, the DOM, events, async flows and modules.",
    description:
      "Build a durable mental model of JavaScript: how values move, how scope works, how the browser dispatches events and how asynchronous code is ordered.",
    icon: "Braces",
    accent: "lime",
    modules: javascriptCurriculum,
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    kicker: "System",
    tagline: "Ship consistent interfaces faster",
    summary: "Grid, breakpoints, utilities, components and plugin fundamentals.",
    description:
      "Use Bootstrap deliberately: compose the grid and utilities, build accessible components and customize the system instead of fighting its defaults.",
    icon: "Boxes",
    accent: "violet",
    modules: bootstrapCurriculum,
  },
  {
    id: "react",
    title: "React",
    kicker: "UI",
    tagline: "Compose interfaces from state",
    summary: "JSX, components, hooks, routing, data, performance and architecture.",
    description:
      "The complete React path: from the first component to state architecture, effects, routing, data fetching, testing and production performance.",
    icon: "Atom",
    accent: "lime",
    modules: reactCurriculum,
  },
  {
    id: "typescript",
    title: "TypeScript",
    kicker: "Safety",
    tagline: "Types that pull their weight",
    summary: "Inference, unions, generics, narrowing and typed React patterns.",
    description:
      "Move beyond annotations: model impossible states out of existence, write reusable generics and understand the type system well enough to trust it.",
    icon: "FileType",
    accent: "violet",
    modules: typescriptCurriculum,
  },
];

export const courseById = new Map<CourseId, Course>(
  courses.map((course) => [course.id, course]),
);

export function getCourse(courseId: CourseId): Course {
  const course = courseById.get(courseId);
  if (!course) throw new Error(`Unknown course: ${courseId}`);
  return course;
}

export function getCourseStats(courseId: CourseId): CurriculumStats {
  return curriculumStats(getCourse(courseId).modules);
}

export const totals = courses.reduce(
  (acc, course) => {
    const stats = curriculumStats(course.modules);
    return {
      modules: acc.modules + stats.modules,
      topics: acc.topics + stats.topics,
    };
  },
  { modules: 0, topics: 0 },
);

export type TopicLocation = {
  course: Course;
  module: CurriculumModule;
  topic: CurriculumModule["topics"][number];
};

const topicIndex = new Map<string, TopicLocation>();
const duplicateTopicIds: string[] = [];

for (const course of courses) {
  for (const topicModule of course.modules) {
    for (const topic of topicModule.topics) {
      if (topicIndex.has(topic.id)) duplicateTopicIds.push(topic.id);
      topicIndex.set(topic.id, { course, module: topicModule, topic });
    }
  }
}

if (duplicateTopicIds.length > 0) {
  throw new Error(`Duplicate topic ids: ${duplicateTopicIds.join(", ")}`);
}

export function findTopic(topicId: string): TopicLocation | null {
  return topicIndex.get(topicId) ?? null;
}

export function isCourseId(value: string): value is CourseId {
  return (courseIdValues as readonly string[]).includes(value);
}
