import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function NamedTuplesNote(){
  return <div>
    <NoteLead>Tuple labels make positions self-documenting.</NoteLead>
    <NoteCode filename="named-tuples.ts" code={`type Entry = [key: string, value: number];\nconst e: Entry = ["count", 2];`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Labels improve editor hints.", "They do not create named runtime properties.", "Object types may still be clearer."]} />
  </div>;
}
