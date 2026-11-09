import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ReadonlyArraysNote(){
  return <div>
    <NoteLead>Readonly arrays prevent mutation through the typed view.</NoteLead>
    <NoteCode filename="readonly-arrays.ts" code={`const ids: readonly number[] = [1, 2];\n// ids.push(3); // Error\nconst copy = [...ids, 3];`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Use readonly T[]/ReadonlyArray<T> for read-only contracts.", "Prefer immutable updates (spread, map, filter).", "as const creates readonly literal tuples/arrays."]} />
  </div>;
}
