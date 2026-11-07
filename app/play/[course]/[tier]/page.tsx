import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { QuizPlayer } from "@/components/quiz/quiz-player";
import { getCourse } from "@/lib/content/courses";
import { tierMeta } from "@/lib/content/questions";
import {
  courseIdSchema,
  courseIdValues,
  tierSchema,
  tierValues,
} from "@/lib/content/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return courseIdValues.flatMap((course) =>
    tierValues.map((tier) => ({ course, tier })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string; tier: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const course = courseIdSchema.safeParse(resolved.course);
  const tier = tierSchema.safeParse(resolved.tier);

  if (!course.success || !tier.success) {
    return { title: "Run not found — Stacked" };
  }

  const courseData = getCourse(course.data);
  const tierData = tierMeta[tier.data];

  return {
    title: `${tierData.label} ${courseData.title} run — Stacked`,
    description: `Play a visual ${courseData.title} run with notes and a diagram attached to every question.`,
  };
}

export default async function PlayPage({
  params,
}: {
  params: Promise<{ course: string; tier: string }>;
}) {
  const resolved = await params;
  const course = courseIdSchema.safeParse(resolved.course);
  const tier = tierSchema.safeParse(resolved.tier);
  if (!course.success || !tier.success) notFound();

  return (
    <Suspense
      fallback={
        <div className="flex-1 px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="panel shimmer h-96" />
          </div>
        </div>
      }
    >
      <QuizPlayer
        key={`${course.data}-${tier.data}`}
        courseId={course.data}
        tier={tier.data}
      />
    </Suspense>
  );
}
