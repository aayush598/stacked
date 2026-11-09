import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function TuplesNote(){
  return <div>
    <NoteLead>Tuples model fixed-length, position-specific data.</NoteLead>
    <NoteCode filename="tuples.ts" code={`const pair: [string, number] = ["age", 30];\nconst [label, value] = pair;`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Each index has its own type.", "Good for small structured values.", "Use objects when names improve clarity."]} />
  </div>;
}
