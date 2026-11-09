import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function MappedTypeInferenceNote(){
  return (<div><NoteLead>Mapped types can transform property types while preserving relationships.</NoteLead><NoteCode filename="mapped-type-inference.ts" code={`type Nullable<T> = { [K in keyof T]: T[K] | null };
type Asyncified<T> = { [K in keyof T]: Promise<T[K]> };`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["Each property type can be transformed independently.", "K is available while mapping."]} /></div>);
}
