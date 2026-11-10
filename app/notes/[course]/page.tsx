import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Atom,
  Boxes,
  Braces,
  Clock,
  FileCode2,
  FileType,
  Layers3,
  LockKeyhole,
  Palette,
  Sparkles,
} from "lucide-react";
import {
  courses,
  getCourse,
  getCourseStats,
  isCourseId,
} from "@/lib/content/courses";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

const icons = {
  html: FileCode2,
  css: Palette,
  javascript: Braces,
  bootstrap: Boxes,
  react: Atom,
  typescript: FileType,
} as const;

const accents = {
  lime: "text-lime border-lime/20 bg-lime/[0.06]",
  sky: "text-sky border-sky/20 bg-sky/[0.06]",
  coral: "text-coral border-coral/20 bg-coral/[0.06]",
  violet: "text-violet border-violet/20 bg-violet/[0.06]",
} as const;

export function generateStaticParams() {
  return courses
    .filter((course) => course.id !== "typescript" && course.id !== "react")
    .map((course) => ({ course: course.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course: courseId } = await params;
  if (!isCourseId(courseId) || courseId === "typescript" || courseId === "react") {
    return { title: "Notes — Stacked" };
  }
  const course = getCourse(courseId);
  return {
    title: `${course.title} Notes — Coming Soon — Stacked`,
    description: `${course.summary} The ${course.title} notes library is coming soon. TypeScript and React notes are available now.`,
  };
}

export default async function ComingSoonNotesPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course: courseId } = await params;
  if (!isCourseId(courseId) || courseId === "typescript" || courseId === "react") notFound();

  const course = getCourse(courseId);
  const stats = getCourseStats(courseId);
  const Icon = icons[course.id];
  const accent = accents[course.accent];

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <Link
          href="/notes"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-faint transition hover:text-mist"
        >
          <ArrowLeft className="size-3" aria-hidden />
          Notes library
        </Link>

        <div className="mt-6 overflow-hidden rounded-xl border border-line bg-surface">
          <div className="grid-lines border-b border-line px-5 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "grid size-11 place-items-center rounded-xl border",
                      accent,
                    )}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[13px] uppercase tracking-[0.14em] text-faint">
                    Coming soon
                  </span>
                </div>
                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-mist sm:text-5xl">
                  {course.title} notes
                </h1>
                <p className="mt-3 text-lg font-medium tracking-[-0.02em] text-muted">
                  {course.tagline}
                </p>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted">
                  {course.summary} This notes library is being built with the same nested
                  phase, module and section structure, review states, read tracking and visual
                  explanations as TypeScript.
                </p>
              </div>

              <div className="w-full shrink-0 rounded-xl border border-line bg-surface p-4 sm:w-56">
                <div className="flex items-center gap-2 text-[15px] text-faint">
                  <LockKeyhole className="size-3.5" aria-hidden />
                  Not published yet
                </div>
                <div className="mt-3 space-y-2 text-[13px] text-muted">
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5">
                      <Layers3 className="size-3 text-faint" aria-hidden />
                      Modules
                    </span>
                    <span className="font-mono text-mist">{stats.modules}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="size-3 text-faint" aria-hidden />
                      Planned topics
                    </span>
                    <span className="font-mono text-mist">{stats.topics}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3 text-faint" aria-hidden />
                      Status
                    </span>
                    <span className="font-mono text-coral">In queue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-6 sm:px-8 sm:py-7">
            <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-faint">
              Planned scope
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {course.modules.slice(0, 6).map((module) => (
                <div
                  key={module.id}
                  className="rounded-lg border border-line bg-canvas/55 px-3.5 py-3"
                >
                  <p className="font-mono text-[13px] text-faint">
                    {String(module.order).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-mist">{module.title}</p>
                  <p className="mt-0.5 text-[13px] text-faint">
                    {module.topics.length} topics
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 rounded-xl border border-lime/20 bg-lime/[0.045] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[15px] font-semibold text-mist">
                  TypeScript and React notes are available now
                </p>
                <p className="mt-0.5 text-[15px] leading-5 text-muted">
                  Explore complete roadmaps with nested sections, review states, and read tracking while the rest of the library is being written.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <Link href="/notes/typescript" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-lime px-3.5 text-[15px] font-semibold text-white transition hover:bg-lime/90">TypeScript <ArrowRight className="size-3.5" aria-hidden /></Link>
                <Link href="/notes/react" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-sky/30 bg-sky/[0.08] px-3.5 text-[15px] font-semibold text-sky transition hover:bg-sky/[0.14]">React <ArrowRight className="size-3.5" aria-hidden /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
