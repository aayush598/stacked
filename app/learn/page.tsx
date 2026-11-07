import { CourseGrid } from "@/components/course-grid";
import { courses, totals } from "@/lib/content/courses";

export const metadata = {
  title: "Courses — Stacked",
  description: `Six visual courses across the modern frontend stack: ${totals.modules} modules, ${totals.topics} topics and four difficulty tiers.`,
};

export default function CoursesPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-lime">Curriculum</p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-mist sm:text-5xl">
            Six layers. One complete frontend stack.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Move from document structure to styled layouts, browser behavior, component systems,
            typed contracts and React architecture. Every topic has visual questions, notes and
            four difficulty tiers.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 border-y border-line py-3 text-sm text-muted">
            <span>
              <strong className="font-semibold text-mist">{courses.length}</strong> courses
            </span>
            <span>
              <strong className="font-semibold text-mist">{totals.modules}</strong> modules
            </span>
            <span>
              <strong className="font-semibold text-mist">{totals.topics}</strong> topics
            </span>
            <span>
              <strong className="font-semibold text-mist">4</strong> tiers each
            </span>
          </div>
        </div>

        <CourseGrid className="mt-10" />
      </section>
    </main>
  );
}
