import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ExtendsKeywordNote(){ return (<div><NoteLead>In conditional types, `extends` means assignable to / satisfies constraint.</NoteLead><NoteCode filename="extends-keyword.ts" code={`type ToArray<T> = T extends any[] ? T : T[];
type A = ToArray<string>;   // string[]
type B = ToArray<number[]>; // number[]`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["`extends` checks compatibility, not class inheritance here.", "The condition drives type selection."]} /></div>); }
