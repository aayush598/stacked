import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function RequiredNote(){
  return (<div><NoteLead>Required&lt;T&gt; removes optional modifiers from all properties.</NoteLead><NoteCode filename="required.ts" code={`type User = { id?: number; name?: string };
type StrictUser = Required<User>;`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["Makes optional properties mandatory.", "Shallow by default."]} /></div>);
}
