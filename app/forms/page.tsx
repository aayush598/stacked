import { Suspense } from "react";
import { FormsLab } from "@/components/forms-lab/forms-lab";

export const metadata = {
  title: "React + TypeScript + Bootstrap Forms Lab — Stacked",
  description:
    "Practice React, TypeScript, and Bootstrap forms with side-by-side component code and live visual output. Module 1 fundamentals and form-building examples for assessment prep.",
};

function Fallback() {
  return (
    <main className="flex-1 animate-in fade-in duration-150">
      <section className="mx-auto w-full max-w-[96rem] px-3 pb-10 pt-6 sm:px-4 lg:px-6">
        <div className="h-8 w-64 rounded bg-raised shimmer" />
        <div className="mt-3 h-12 w-full max-w-2xl rounded bg-raised shimmer" />
        <div className="mt-6 grid gap-3 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="h-[70vh] rounded-xl border border-line bg-surface shimmer" />
          <div className="h-[70vh] rounded-xl border border-line bg-surface shimmer" />
        </div>
      </section>
    </main>
  );
}

export default function FormsPage() {
  return (
    <Suspense fallback={<Fallback />}>
      <FormsLab />
    </Suspense>
  );
}
