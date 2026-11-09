import { NoteCallout, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { SyntaxPlayground } from "./shared/basic-types-visuals";

export function OptionalTupleElementsNote() {
  return (
    <div>
      <NoteLead>Tuple elements can be optional with <code className="font-mono">?</code>. Optional elements must come after required elements and affect the allowed tuple length.</NoteLead>
      <SyntaxPlayground options={[
        { label: "Optional tail", code: `type UserRow = [id: number, name: string, nickname?: string];\nconst a: UserRow = [1, "Alex"];\nconst b: UserRow = [2, "Sam", "Sammy"];`, note: "Length can be 2 or 3." },
        { label: "Type effect", code: `type T = [string, number?];\n// length: 1 | 2\n// T[1] is number | undefined when accessed safely`, note: "Optional position may be missing." },
      ]} />
      <NoteCallout tone="warning">A required element cannot follow an optional element in standard tuple syntax.</NoteCallout>
      <NoteTakeaways items={["Optional tuple elements model variable but position-aware tails.", "They change allowed length and access types.", "For complex optional data, named object types may be clearer."]} />
    </div>
  );
}
