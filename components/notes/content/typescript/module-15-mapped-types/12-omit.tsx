import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function OmitNote(){
  return (<div><NoteLead>Omit&lt;T,K&gt; removes properties K from T.</NoteLead><NoteCode filename="omit.ts" code={`type User = { id: number; password: string };
type SafeUser = Omit<User, 'password'>;`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["Useful for hiding sensitive/internal fields.", "Prefer StrictOmit in custom libs when key safety matters."]} /></div>);
}
