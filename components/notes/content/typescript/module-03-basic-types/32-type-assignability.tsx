import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { AssignabilityLadder } from "./shared/basic-types-visuals";

export function TypeAssignabilityNote() {
  return (
    <div>
      <NoteLead>Assignability asks: can a source value be safely used where a target type is expected? It powers variable assignment, function arguments, return values, and generic constraints.</NoteLead>
      <AssignabilityLadder />
      <NoteCode filename="assignability.ts" code={`let s: string = "hi";\nlet u: unknown = s;     // OK (anything assignable to unknown)\n// let n: number = u;   // Error (unknown not assignable to number)\n\nlet a: any = 123;\nlet n2: number = a;     // allowed (unsafe)\n\nfunction fail(): never { throw new Error(); }\nlet v: string = fail(); // OK (never assignable to anything)`} />
      <NoteCallout tone="warning">If an assignment requires <InlineCode>as any</InlineCode> or unsafe assertions, stop and model the types better. Assignability errors are usually design feedback.</NoteCallout>
      <NoteTakeaways items={["Assignability is the practical safety rule behind TypeScript checks.", "unknown is a safe top target; never is assignable everywhere; any is unsafe.", "Narrow, refactor types, or use proper unions instead of forcing assignments."]} />
    </div>
  );
}
