import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function BuiltInMappedTypesNote(){
  return (<div><NoteLead>TypeScript ships built-in mapped/utility types like Partial, Required, Readonly, Pick, Omit, and Record.</NoteLead><NoteCode filename="built-in-mapped-types.ts" code={`type P = Partial<{ a: number }>;
type R = Required<{ a?: number }>;
type RO = Readonly<{ a: number }>;`} /><NoteCallout tone="tip">Read mapped types as: for each key K in a key set, produce a property.</NoteCallout><NoteTakeaways items={["Learn built-ins before custom implementations.", "They encode common object transformations."]} /></div>);
}
