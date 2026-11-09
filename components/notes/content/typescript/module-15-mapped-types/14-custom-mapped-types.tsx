import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function CustomMappedTypesNote(){
  return (<div><NoteLead>Custom mapped types combine keyof, modifiers, key remapping, and conditional types for project-specific needs.</NoteLead><NoteCode filename="custom-mapped-types.ts" code={`type WithNulls<T> = { [K in keyof T]: T[K] | null };`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["Start from the key set, then transform value types.", "Keep custom utilities readable and tested."]} /></div>);
}
