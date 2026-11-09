import { Suspense } from "react";
import { TypeScriptNotesExplorer } from "@/components/notes/typescript-notes-explorer";
import { courseStats } from "@/lib/notes/types";
import { typescriptRoadmap } from "@/lib/notes/typescript-roadmap";

const stats = courseStats(typescriptRoadmap);

export const metadata = {
  title: "TypeScript Mastery Notes — Stacked",
  description: `A complete visual TypeScript roadmap: ${stats.phases} phases, ${stats.modules} modules, ${stats.projects} projects and ${stats.sections} nested sections with review filters and read progress.`,
};

function NotesFallback() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="h-8 w-48 rounded bg-raised shimmer" />
        <div className="mt-3 h-12 w-full max-w-lg rounded bg-raised shimmer" />
        <div className="mt-8 grid gap-4 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div className="h-[32rem] rounded-xl border border-line bg-surface shimmer" />
          <div className="h-[32rem] rounded-xl border border-line bg-surface shimmer" />
        </div>
      </section>
    </main>
  );
}

export default function TypeScriptNotesPage() {
  return (
    <Suspense fallback={<NotesFallback />}>
      <TypeScriptNotesExplorer />
    </Suspense>
  );
}
