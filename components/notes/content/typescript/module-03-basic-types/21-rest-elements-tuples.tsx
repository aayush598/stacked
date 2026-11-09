import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function RestElementsTuplesNote() {
  return (
    <div>
      <NoteLead>Rest elements let tuples capture a variable number of elements, often at the end. They are powerful for typed variadic functions and fixed-prefix argument lists.</NoteLead>
      <NoteCode filename="rest-tuples.ts" code={`type StringThenNumbers = [string, ...number[]];\nconst a: StringThenNumbers = ["scores"];\nconst b: StringThenNumbers = ["scores", 1, 2, 3];\n\nfunction log(level: "info" | "error", ...args: [message: string, ...details: unknown[]]) {\n  console[level](...args);\n}`} />
      <NoteCallout tone="insight">Variadic tuple types (advanced) build on this idea. For Module 3, understand fixed parts plus a rest tail.</NoteCallout>
      <NoteTakeaways items={["Rest elements model open-ended tails.", "Combine fixed positions with ...T[] for flexible but typed structures.", "Useful for function parameter modeling."]} />
    </div>
  );
}
