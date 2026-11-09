import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function RecordNote(){
  return (<div><NoteLead>Record&lt;K,V&gt; builds an object type with keys K and values V.</NoteLead><NoteCode filename="record.ts" code={`type Role = 'admin' | 'user';
type Flags = Record<Role, boolean>;`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["Great for finite key unions.", "Use for dictionaries and lookup tables."]} /></div>);
}
