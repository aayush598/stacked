import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function OptionalTupleElementsNote(){
  return <div>
    <NoteLead>Optional tuple members allow variable length while keeping position meaning.</NoteLead>
    <NoteCode filename="optional-tuple-elements.ts" code={`type Row = [id: number, note?: string];\nconst a: Row = [1];\nconst b: Row = [1, "ok"];`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Optional elements affect tuple length.", "They may be undefined when accessed.", "Required elements cannot follow optional ones."]} />
  </div>;
}
