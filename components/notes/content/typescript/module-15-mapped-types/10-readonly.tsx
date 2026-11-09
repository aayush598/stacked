import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ReadonlyNote(){
  return (<div><NoteLead>Readonly&lt;T&gt; makes all properties readonly.</NoteLead><NoteCode filename="readonly.ts" code={`type User = { id: number };
type R = Readonly<User>;`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["Prevents reassignment of properties.", "Shallow by default."]} /></div>);
}
