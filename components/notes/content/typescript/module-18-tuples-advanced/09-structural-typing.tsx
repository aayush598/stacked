import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function StructuralTypingNote(){ return (<div><NoteLead>TypeScript compatibility is mostly structural: shape matters more than declared name.</NoteLead><NoteCode filename="structural-typing.ts" code={`type A = { id: number };
type B = { id: number };
const a: A = { id: 1 };
const b: B = a; // OK`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Same shape => compatible in many cases.", "Different from nominal typing in languages like Java/C# nominal classes."]} /></div>); }
