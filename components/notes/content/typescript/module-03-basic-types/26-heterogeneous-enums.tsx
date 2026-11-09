import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function HeterogeneousEnumsNote() {
  return (
    <div>
      <NoteLead>Heterogeneous enums mix string and numeric members. TypeScript allows them, but they are rarely a good design because the values have inconsistent semantics.</NoteLead>
      <NoteCode filename="heterogeneous-enums.ts" code={`enum Mixed {\n  No = 0,\n  Yes = "YES",\n}\n// Allowed, but confusing in most codebases.`} />
      <NoteCallout tone="warning">Avoid heterogeneous enums in normal application code. Use a consistent representation: all strings, all numbers, or a literal union/object model.</NoteCallout>
      <NoteTakeaways items={["Heterogeneous enums are legal but usually unclear.", "Consistency makes APIs easier to use and serialize.", "Prefer string enums or literal unions."]} />
    </div>
  );
}
