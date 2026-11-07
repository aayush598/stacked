import { Suspense } from "react";
import { notFound } from "next/navigation";
import { QuizPlayer } from "@/components/quiz/quiz-player";
import { tierMeta } from "@/lib/content/questions";
import { tierSchema, tierValues } from "@/lib/content/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return tierValues.map((tier) => ({ tier }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const parsed = tierSchema.safeParse((await params).tier);
  const label = parsed.success ? tierMeta[parsed.data].label : "React";

  return {
    title: `${label} React run — Stacked`,
    description:
      "Play a visual React run with notes and a diagram attached to every question.",
  };
}

export default async function ReactPlayPage({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const parsed = tierSchema.safeParse((await params).tier);
  if (!parsed.success) notFound();

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
      <QuizPlayer key={parsed.data} tier={parsed.data} />
    </Suspense>
  );
}
