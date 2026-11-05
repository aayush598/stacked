import { AlertTriangle, BookOpen, Lightbulb, Sparkles } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import type { Question } from "@/lib/content/schema";
import { cn } from "@/lib/utils";

export function NotesPanel({
  question,
  className,
}: {
  question: Question;
  className?: string;
}) {
  const { notes } = question;

  return (
    <aside className={cn("panel overflow-hidden", className)}>
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg bg-sky/10 text-sky">
            <BookOpen className="size-3.5" aria-hidden />
          </span>
          <div>
            <div className="text-xs font-medium text-mist">Question notes</div>
            <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
              read if you want the full picture
            </div>
          </div>
        </div>
        <span className="rounded-full border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-faint">
          {question.topicTitle}
        </span>
      </div>

      <div className="space-y-4 p-4">
        <p className="text-[13px] leading-6 text-mist/90">{notes.summary}</p>

        <div>
          <div className="mb-2 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
            <Sparkles className="size-3 text-lime" aria-hidden />
            Key points
          </div>
          <ul className="space-y-2">
            {notes.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2 text-[11px] leading-5 text-muted">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-lime/80" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {notes.syntax && (
          <div>
            <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              Syntax
            </div>
            <CodeBlock
              code={notes.syntax}
              compact
              showLineNumbers={false}
              tone="soft"
              className="rounded-xl"
            />
          </div>
        )}

        {notes.pitfalls && notes.pitfalls.length > 0 && (
          <div className="rounded-xl border border-coral/15 bg-coral/[0.03] p-3">
            <div className="mb-2 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-coral/80">
              <AlertTriangle className="size-3" aria-hidden />
              Watch out
            </div>
            <ul className="space-y-1.5">
              {notes.pitfalls.map((pitfall) => (
                <li key={pitfall} className="flex gap-2 text-[10px] leading-5 text-muted">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-coral/70" />
                  <span>{pitfall}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {notes.memory && (
          <div className="flex items-start gap-2 rounded-xl border border-lime/15 bg-lime/[0.04] px-3 py-2.5">
            <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-lime" aria-hidden />
            <div>
              <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-lime/70">
                Memory hook
              </div>
              <div className="mt-0.5 text-[11px] leading-5 text-mist">{notes.memory}</div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
