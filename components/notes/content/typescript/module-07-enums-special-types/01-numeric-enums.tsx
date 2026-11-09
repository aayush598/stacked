import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function NumericEnumsNote(){
  return <div>
    <NoteLead>Numeric enums assign numbers to members and can auto-increment. Emitted JS includes reverse mappings.</NoteLead>
    <NoteCode filename="numeric-enums.ts" code={`enum Status { Pending, Approved, Rejected }\nStatus.Pending; // 0\nStatus[0]; // "Pending"`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Auto-increment starts at 0 unless set.", "Reverse mapping exists in normal numeric enums.", "Explicit values are clearer for persisted/external numbers."]} />
  </div>;
}
