import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function HeterogeneousEnumsNote(){
  return <div>
    <NoteLead>Heterogeneous enums mix numbers and strings. They are allowed but rarely recommended.</NoteLead>
    <NoteCode filename="heterogeneous-enums.ts" code={`enum Odd { No = 0, Yes = "YES" }`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Legal TypeScript, poor clarity in most domains.", "Prefer consistent enum value types.", "Usually replace with a better model."]} />
  </div>;
}
