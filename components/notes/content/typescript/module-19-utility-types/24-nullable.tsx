import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function NullableUtil(){ return (<div><NoteLead>Custom: add null to type/properties as needed.</NoteLead><NoteCode filename="nullable.ts" code={`type Nullable<T> = T | null;
type NullableProps<T> = { [K in keyof T]: T[K] | null };`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Optional DB/API fields."]} /></div>); }
