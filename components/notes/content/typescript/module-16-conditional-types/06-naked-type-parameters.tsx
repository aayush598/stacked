import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function NakedTypeParametersNote(){ return (<div><NoteLead>A naked type parameter is used directly in `T extends ...` (not wrapped). Naked parameters trigger distributive behavior.</NoteLead><NoteCode filename="naked-type-parameters.ts" code={`type Box<T> = T extends any ? [T] : never;
// naked T distributes
type NoDist<T> = [T] extends [any] ? [T] : never;
// wrapped, no distribution`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Naked T: distributive.", "Wrapped `[T]`: usually non-distributive.", "This distinction is important in utility type design."]} /></div>); }
