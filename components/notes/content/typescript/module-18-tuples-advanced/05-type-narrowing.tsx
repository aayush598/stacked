import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function TypeNarrowingM18Note(){ return (<div><NoteLead>Narrowing refines unions through control flow and guards.</NoteLead><NoteCode filename="type-narrowing.ts" code={`function f(v: string | number) {
  return typeof v === 'string' ? v.toUpperCase() : v.toFixed();
}`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Narrowing is essential for safe union handling."]} /></div>); }
