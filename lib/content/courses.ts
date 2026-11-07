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
    summary:
      "Document structure, semantics, forms, media, accessibility and production markup.",
    description:
      "Go from the browser's document tree to semantic architecture: forms, responsive media, accessible tables and patterns, structured data, security, performance, web components and production audits.",
    icon: "FileCode2",
    accent: "coral",
    modules: htmlCurriculum,
  },
  {
    id: "css",
    title: "CSS",
    kicker: "Style",
    tagline: "Layout with fewer surprises",
    summary:
      "Cascade, layout systems, typography, color, motion, architecture and testing.",
    description:
      "Understand why styles win, build robust layouts with Flexbox and Grid, and use modern CSS for color, typography, motion, responsive components, performance and maintainable design systems.",
    icon: "Palette",
    accent: "sky",
    modules: cssCurriculum,
  },
  {
    id: "javascript",
    title: "JavaScript",
    kicker: "Behavior",
    tagline: "The language behind the interface",
    summary:
      "Runtime semantics, objects, async, browser APIs, security, testing and performance.",
    description:
      "Build a durable mental model of JavaScript: coercion, prototypes, closures, the event loop, DOM and events, networking, persistence, concurrency, security, testing and production performance.",
    icon: "Braces",
    accent: "lime",
    modules: javascriptCurriculum,
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    kicker: "System",
    tagline: "Ship consistent interfaces faster",
    summary:
      "Grid, utilities, components, plugins, theming, accessibility and migration.",
    description:
      "Use Bootstrap deliberately: compose the grid and utilities, build accessible components and forms, wire plugins, theme the system, ship less CSS and migrate versions without layout regressions.",
    icon: "Boxes",
    accent: "violet",
    modules: bootstrapCurriculum,
  },
  {
    id: "react",
    title: "React",
    kicker: "UI",
    tagline: "Compose interfaces from state",
    summary:
      "JSX, hooks, routing, performance, internals, security and interview system design.",
    description:
      "The complete React path: from the first component to state architecture, effects, routing, data fetching, testing, production performance, internals, security, coding interviews and system design.",
    icon: "Atom",
    accent: "lime",
    modules: reactCurriculum,
  },
  {
    id: "typescript",
    title: "TypeScript",
    kicker: "Safety",
    tagline: "Types that pull their weight",
    summary:
      "Type system, generics, compiler, runtime validation, React types and architecture.",
    description:
      "Move beyond annotations: model impossible states, write reusable generics, understand the compiler, validate runtime boundaries, type React and data layers, and evolve typed contracts across a codebase.",
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
