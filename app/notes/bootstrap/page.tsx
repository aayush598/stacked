import { Suspense } from "react";
import { BootstrapNotesExplorer } from "@/components/notes/bootstrap-notes-explorer";
import { courseStats } from "@/lib/notes/types";
import { bootstrapRoadmap } from "@/lib/notes/bootstrap-roadmap";

const stats = courseStats(bootstrapRoadmap);

export const metadata = {
  title: "Bootstrap Mastery Notes — Stacked",
  description: `A complete visual Bootstrap roadmap: ${stats.phases} phases, ${stats.modules} modules, ${stats.projects} projects and ${stats.sections} nested sections with review filters and read progress.`,
};

function NotesFallback() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-[90rem] px-3 pb-10 pt-6 sm:px-4 sm:pt-8 lg:px-6">
        <div className="h-8 w-48 rounded bg-raised shimmer" />
        <div className="mt-3 h-12 w-full max-w-lg rounded bg-raised shimmer" />
        <div className="mt-8 grid gap-3 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="h-[32rem] rounded-xl border border-line bg-surface shimmer" />
          <div className="h-[32rem] rounded-xl border border-line bg-surface shimmer" />
        </div>
      </section>
    </main>
  );
}

export default function BootstrapNotesPage() {
  return (
    <Suspense fallback={<NotesFallback />}>
      <BootstrapNotesExplorer />
    </Suspense>
  );
}
