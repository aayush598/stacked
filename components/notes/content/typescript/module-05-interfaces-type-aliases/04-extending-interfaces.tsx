import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ExtendingInterfacesNote(){
  return <div>
    <NoteLead>Interfaces can extend one or more interfaces to build larger contracts from smaller ones.</NoteLead>
    <NoteCode filename="extending-interfaces.ts" code={`interface HasId { id: number; }\ninterface Timestamped { createdAt: Date; }\ninterface User extends HasId, Timestamped {\n  name: string;\n}`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["extends reuses and composes contracts.", "Multiple interface extension is supported.", "Conflicting incompatible members cause errors."]} />
  </div>;
}
