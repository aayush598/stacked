import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function UnionTypesNote(){
  return <div>
    <NoteLead>Union types allow a value to be one of several types. Access only members safe for all branches until narrowed.</NoteLead>
    <NoteCode filename="union-types.ts" code={`type Id = string | number;\ntype Result = { ok: true; data: string } | { ok: false; error: string };`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["| means one of these types.", "Narrow before using branch-specific members.", "Discriminated unions are a powerful pattern."]} />
  </div>;
}
