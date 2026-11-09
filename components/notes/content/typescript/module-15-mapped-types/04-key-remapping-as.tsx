import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function KeyRemappingAsNote(){
  return (<div><NoteLead>Key remapping with as transforms or filters keys during mapping.</NoteLead><NoteCode filename="key-remapping-as.ts" code={"type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] };"} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["as can rename mapped keys.", "Return never in remapping to filter keys out.", "Combines with template literal types."]} /></div>);
}
