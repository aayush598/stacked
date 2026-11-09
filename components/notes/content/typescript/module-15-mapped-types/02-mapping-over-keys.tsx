import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function MappingOverKeysNote(){
  return (<div><NoteLead>Use K in keyof T or a union of keys to control which properties are mapped.</NoteLead><NoteCode filename="mapping-over-keys.ts" code={`type Copy<T> = { [K in keyof T]: T[K] };`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["in iterates over each key in a union.", "Map over keyof T for all properties.", "Map over a subset union for selected properties."]} /></div>);
}
