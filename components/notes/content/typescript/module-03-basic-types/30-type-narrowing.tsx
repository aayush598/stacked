import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { NarrowingFlowDemo } from "./shared/basic-types-visuals";

export function TypeNarrowingNote() {
  return (
    <div>
      <NoteLead>Narrowing is how TypeScript refines a broader type to a more specific type based on checks. It is the runtime-logic mirror of compile-time safety.</NoteLead>
      <NarrowingFlowDemo />
      <NoteCode filename="narrowing.ts" code={`function print(v: string | number | null) {
  if (v == null) return;                 // null/undefined removed
  if (typeof v === "string") {
    v.toUpperCase();                     // string
  } else {
    v.toFixed(2);                        // number
  }
}

// instanceof
if (err instanceof Error) err.message;

// discriminated union
type R = { ok: true; data: string } | { ok: false; error: string };
function read(r: R) { return r.ok ? r.data : r.error; }`} />
      <NoteCallout tone="tip">Narrowing depends on control flow. Checks in callbacks may not always narrow outer variables because TypeScript cannot assume the variable was not reassigned.</NoteCallout>
      <NoteTakeaways items={["Narrowing turns unions into usable specific types.", "Common tools: typeof, equality, truthiness, in, instanceof, discriminants, predicates.", "Good narrowing reduces assertions and runtime errors."]} />
    </div>
  );
}
