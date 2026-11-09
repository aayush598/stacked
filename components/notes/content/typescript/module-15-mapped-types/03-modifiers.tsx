import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ModifiersNote(){
  return (<div><NoteLead>Mapped types can add/remove readonly and ? modifiers using + or -.</NoteLead><NoteCode filename="modifiers.ts" code={`type Mutable<T> = { -readonly [K in keyof T]: T[K] };
type Concrete<T> = { [K in keyof T]-?: T[K] };`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["-readonly removes readonly; -? removes optional.", "Useful for Required/Mutable utilities."]} /></div>);
}
