import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function NumericEnumsNote() {
  return (
    <div>
      <NoteLead>Numeric enums assign numbers to members. If you omit values, TypeScript auto-increments from 0. Numeric enums also create reverse mappings in emitted JavaScript.</NoteLead>
      <NoteCode filename="numeric-enums.ts" code={`enum Status {\n  Pending,   // 0\n  Approved,  // 1\n  Rejected,  // 2\n}\n\nconst s = Status.Approved; // 1\nStatus[1]; // "Approved" (reverse mapping)\n\nenum Http {\n  Ok = 200,\n  NotFound = 404,\n}`} />
      <NoteCallout tone="warning">Reverse mappings and auto-increment can surprise people. Prefer explicit values, or use string enums/literal unions when numeric behavior is not needed.</NoteCallout>
      <NoteTakeaways items={["Numeric enums can auto-increment.", "They emit reverse mappings (except in some forms like const enums).", "Be explicit if numeric values matter."]} />
    </div>
  );
}
