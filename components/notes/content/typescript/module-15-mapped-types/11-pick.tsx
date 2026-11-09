import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function PickNote(){
  return (<div><NoteLead>Pick&lt;T,K&gt; selects a subset of properties from T.</NoteLead><NoteCode filename="pick.ts" code={`type User = { id: number; name: string; email: string };
type Public = Pick<User, 'id' | 'name'>;`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["Use for DTO/view models.", "K must extend keyof T."]} /></div>);
}
