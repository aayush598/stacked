import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function PartialNote(){
  return (<div><NoteLead>Partial&lt;T&gt; makes all properties optional.</NoteLead><NoteCode filename="partial.ts" code={`type User = { id: number; name: string };
type Patch = Partial<User>;`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["Useful for update/patch payloads.", "Shallow by default."]} /></div>);
}
