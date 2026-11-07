import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CurriculumExplorer } from "@/components/curriculum-explorer";
import { courseIdValues, courseIdSchema } from "@/lib/content/schema";
import { getCourse, getCourseStats } from "@/lib/content/courses";

export const dynamicParams = false;

export function generateStaticParams() {
  return courseIdValues.map((course) => ({ course }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}): Promise<Metadata> {
  const parsed = courseIdSchema.safeParse((await params).course);
  if (!parsed.success) return { title: "Curriculum not found — Stacked" };
  const course = getCourse(parsed.data);
  const stats = getCourseStats(parsed.data);

  return {
    title: `${course.title} curriculum map — Stacked`,
    description: `${course.description} ${stats.modules} modules, ${stats.topics} topics and four live difficulty tiers.`,
  };
}

export default async function CurriculumPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const parsed = courseIdSchema.safeParse((await params).course);
  if (!parsed.success) notFound();

  return <CurriculumExplorer courseId={parsed.data} />;
}
