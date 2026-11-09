import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function FilteringKeysNote(){
  return (<div><NoteLead>Filter keys by remapping unwanted keys to never.</NoteLead><NoteCode filename="filtering-keys.ts" code={`type OnlyStrings<T> = { [K in keyof T as T[K] extends string ? K : never]: T[K] };`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["as never removes a key from the result.", "Combine with conditional types to filter by value type."]} /></div>);
}
