import { CourseGrid } from "@/components/course-grid";
import { courses, totals } from "@/lib/content/courses";

export const metadata = {
  title: "Courses — Stacked",
  description: `Six visual courses across the modern frontend stack: ${totals.modules} modules, ${totals.topics} topics and four difficulty tiers.`,
};

export default function CoursesPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="max-w-3xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
            Six courses · one stack
          </div>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-mist sm:text-5xl">
            Pick the layer you want to{" "}
            <span className="text-gradient">understand next.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Move from document structure to styled layouts, browser behavior, component
            systems, typed contracts and React architecture. Every topic has a visual
            question, notes and four difficulty tiers.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5">
              {courses.length} courses
            </span>
            <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5">
              {totals.modules} modules
            </span>
            <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5">
              {totals.topics} topics
            </span>
          </div>
        </div>

        <CourseGrid className="mt-10" />
      </section>
    </main>
  );
}
