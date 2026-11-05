import { Suspense } from "react";
import { QuizPlayer } from "@/components/quiz/quiz-player";

export const metadata = {
  title: "React easy run — Stacked",
  description:
    "Play a short visual React syntax run with notes attached to every question.",
};

export default function ReactEasyPlayPage() {
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
      <QuizPlayer />
    </Suspense>
  );
}
