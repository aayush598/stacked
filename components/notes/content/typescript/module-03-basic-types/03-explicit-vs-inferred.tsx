import { NoteCallout, NoteCode, NoteHeading, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { WideningNarrowingDemo } from "./shared/basic-types-visuals";

export function ExplicitVsInferredNote() {
  return (
    <div>
      <NoteLead>Both explicit annotations and inference are valid. The goal is not &quot;annotate everything&quot; or &quot;annotate nothing&quot; — it is to keep types safe, readable, and stable.</NoteLead>
      <NoteHeading eyebrow="Comparison">Quick guide</NoteHeading>
      <div className="mt-5 overflow-x-auto rounded-xl border border-line bg-surface"><table className="min-w-full text-left text-[13px]"><thead className="bg-canvas/60 text-faint"><tr><th className="px-4 py-3">Case</th><th className="px-4 py-3">Prefer</th><th className="px-4 py-3">Why</th></tr></thead><tbody className="text-muted"><tr className="border-t border-line"><td className="px-4 py-3">Obvious local value</td><td className="px-4 py-3 font-mono text-mist">Inferred</td><td className="px-4 py-3">Less noise</td></tr><tr className="border-t border-line"><td className="px-4 py-3">Function parameters</td><td className="px-4 py-3 font-mono text-mist">Explicit</td><td className="px-4 py-3">Defines input contract</td></tr><tr className="border-t border-line"><td className="px-4 py-3">Public/exported APIs</td><td className="px-4 py-3 font-mono text-mist">Explicit</td><td className="px-4 py-3">Stable, clear, faster declaration emit</td></tr><tr className="border-t border-line"><td className="px-4 py-3">Empty array/object</td><td className="px-4 py-3 font-mono text-mist">Explicit</td><td className="px-4 py-3">Prevents any[]/overly wide inference</td></tr><tr className="border-t border-line"><td className="px-4 py-3">Need literal not widened</td><td className="px-4 py-3 font-mono text-mist">Explicit or as const/satisfies</td><td className="px-4 py-3">Controls widening</td></tr></tbody></table></div>
      <NoteCode filename="examples.ts" code={`// Inferred: clear enough
const count = 10;

// Explicit: boundary contract
export function formatUser(id: number): string { return \`user-\${id}\`; }

// Explicit: empty container
const roles: string[] = [];

// Controlled literal
const config = { mode: "dark" } as const;`} />
      <WideningNarrowingDemo />
      <NoteCallout tone="tip">If a future reader cannot tell the intended type in under a second, an annotation or named type alias usually helps.</NoteCallout>
      <NoteTakeaways items={["Prefer inference for obvious locals; prefer explicit types for boundaries.", "Annotations can prevent unwanted widening.", "Consistency in a codebase matters more than dogma."]} />
    </div>
  );
}
