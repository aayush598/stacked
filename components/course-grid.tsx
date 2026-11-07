import Link from "next/link";
import {
  ArrowRight,
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
    bg: "bg-lime/10",
    border: "border-lime/20",
    gradient: "from-lime/30",
  },
  sky: {
    text: "text-sky",
    bg: "bg-sky/10",
    border: "border-sky/20",
    gradient: "from-sky/30",
  },
  coral: {
    text: "text-coral",
    bg: "bg-coral/10",
    border: "border-coral/20",
    gradient: "from-coral/30",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/10",
    border: "border-violet/20",
    gradient: "from-violet/30",
  },
} as const;

export function CourseGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {courses.map((course) => {
        const stats = getCourseStats(course.id);
        const Icon = courseIcons[course.id];
        const colors = accentMap[course.accent];

        return (
          <Link
            key={course.id}
            href={`/learn/${course.id}`}
            className="panel group relative overflow-hidden p-5 transition duration-300 hover:-translate-y-0.5 hover:border-line-strong"
          >
            <div
              className={cn(
                "absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent",
                colors.gradient,
              )}
              aria-hidden
            />
            <div className="flex items-start justify-between gap-3">
              <span
                className={cn(
                  "grid size-10 place-items-center rounded-xl",
                  colors.bg,
                  colors.text,
                )}
              >
                <Icon className="size-4.5" aria-hidden />
              </span>
              <span className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                {questionCountsByCourse[course.id]} questions
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <h3 className="text-lg font-semibold text-mist">{course.title}</h3>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                {course.kicker}
              </span>
            </div>
            <p className={cn("mt-1 text-xs font-medium", colors.text)}>{course.tagline}</p>
            <p className="mt-2 text-xs leading-5 text-muted">{course.summary}</p>

            <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
              <span className="font-mono text-[10px] text-faint">
                {stats.modules} modules · {pluralize(stats.topics, "topic")} · 4 tiers
              </span>
              <span
                className={cn(
                  "flex items-center gap-1 text-[11px] font-medium transition group-hover:gap-1.5",
                  colors.text,
                )}
              >
                Open
                <ArrowRight className="size-3" aria-hidden />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
