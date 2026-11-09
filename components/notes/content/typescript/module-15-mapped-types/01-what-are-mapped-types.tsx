import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function WhatAreMappedTypesNote(){
  return (<div><NoteLead>Mapped types create new object types by iterating over keys with [K in Keys].</NoteLead><NoteCode filename="what-are-mapped-types.ts" code={`type Flags<T> = { [K in keyof T]: boolean };
type User = { id: number; name: string };
type UserFlags = Flags<User>;`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["Mapped types transform each property systematically.", "They iterate with in over a key union.", "Built-ins like Partial/Readonly are mapped types."]} /></div>);
}
