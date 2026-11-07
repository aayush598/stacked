import Link from "next/link";
import {
  ArrowUpRight,
  Atom,
  Boxes,
  Braces,
  FileCode2,
  FileType,
  Palette,
} from "lucide-react";
import { courses, getCourseStats } from "@/lib/content/courses";
import { questionCountsByCourse } from "@/lib/content/questions";
import { cn, pluralize } from "@/lib/utils";

const courseIcons = {
  html: FileCode2,
  css: Palette,
  javascript: Braces,
  bootstrap: Boxes,
  react: Atom,
  typescript: FileType,
} as const;

const accentMap = {
  lime: {
    text: "text-lime",
    bg: "bg-lime/[0.06]",
    border: "border-lime/20",
  },
  sky: {
    text: "text-sky",
    bg: "bg-sky/[0.07]",
    border: "border-sky/20",
  },
  coral: {
    text: "text-coral",
    bg: "bg-coral/[0.06]",
    border: "border-coral/20",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/[0.06]",
    border: "border-violet/20",
  },
} as const;

export function CourseGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {courses.map((course) => {
        const stats = getCourseStats(course.id);
        const Icon = courseIcons[course.id];
        const colors = accentMap[course.accent];

        return (
          <Link
            key={course.id}
            href={`/learn/${course.id}`}
            className="group flex flex-col bg-surface p-5 transition-colors hover:bg-canvas"
          >
            <div className="flex items-start justify-between gap-3">
              <span
                className={cn(
                  "grid size-10 place-items-center rounded-lg border",
                  colors.bg,
                  colors.border,
                  colors.text,
                )}
              >
                <Icon className="size-4.5" aria-hidden />
              </span>
              <ArrowUpRight
                className="size-4 text-faint transition-colors group-hover:text-mist"
                aria-hidden
              />
            </div>

            <div className="mt-4 flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-mist">
                {course.title}
              </h3>
              <span className="text-[11px] text-faint">{course.kicker}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">{course.summary}</p>

            <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-4 text-[11px] text-faint">
              <span>{stats.modules} modules</span>
              <span>{pluralize(stats.topics, "topic")}</span>
              <span>{questionCountsByCourse[course.id].toLocaleString()} questions</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
