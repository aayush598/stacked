import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { EnumCompareVisual } from "./shared/basic-types-visuals";

export function EnumAlternativesNote() {
  return (
    <div>
      <NoteLead>Many TypeScript codebases prefer enum alternatives: string literal unions for pure type-level constraints, or <code className="font-mono">as const</code> objects when you also need runtime values.</NoteLead>
      <EnumCompareVisual />
      <NoteCode filename="alternatives.ts" code={`// 1) Literal union\ntype Status = "idle" | "loading" | "error";\n\n// 2) as const object + derived union\nconst STATUS = {\n  Idle: "idle",\n  Loading: "loading",\n  Error: "error",\n} as const;\ntype Status2 = typeof STATUS[keyof typeof STATUS];`} />
      <NoteCallout tone="tip">Use literal unions when values are only used as types/contracts. Use an <code className="font-mono">as const</code> object when you need runtime iteration, mapping, or a single source of truth for values.</NoteCallout>
      <NoteTakeaways items={["Literal unions erase completely and are very ergonomic.", "as const objects provide runtime values + precise types.", "Choose based on runtime needs and project conventions."]} />
    </div>
  );
}
