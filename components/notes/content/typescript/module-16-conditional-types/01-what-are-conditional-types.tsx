import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function WhatAreConditionalTypesNote(){ return (<div><NoteLead>Conditional types select one type or another based on a condition: `T extends U ? X : Y`.</NoteLead><NoteCode filename="what-are-conditional-types.ts" code={`type IsString<T> = T extends string ? true : false;
type A = IsString<'x'>; // true
type B = IsString<42>;   // false`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Conditional types are type-level if/else.", "`extends` tests assignability in the condition.", "Useful for type transformations and inference."]} /></div>); }
