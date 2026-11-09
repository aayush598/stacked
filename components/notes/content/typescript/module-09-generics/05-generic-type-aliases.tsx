import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function GenericTypeAliasesNote() {
  return (
    <div>
      <NoteLead>Type aliases can be generic, creating reusable type templates for unions, objects, tuples, and function types.</NoteLead>
      <NoteCode filename="generic-alias.ts" code={`type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

type Nullable<T> = T | null;
type Maybe<T> = T | undefined;

const r: Result<string> = { ok: true, value: "done" };`} />
      <NoteTakeaways items={["Generic type aliases work like templates for any type expression.", "Default type parameters (E = Error) simplify common cases.", "Useful for Result, Maybe, Nullable patterns."]} />
    </div>
  );
}
