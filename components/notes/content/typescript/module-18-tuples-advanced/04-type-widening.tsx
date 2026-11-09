import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function TypeWideningM18Note(){ return (<div><NoteLead>Widening expands literals to broader primitive types in mutable contexts.</NoteLead><NoteCode filename="type-widening.ts" code={`let x = 'hello'; // string
const y = 'hello'; // 'hello'
const o = { a: 1 }; // { a: number }`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Use const, as const, or satisfies to control widening."]} /></div>); }
