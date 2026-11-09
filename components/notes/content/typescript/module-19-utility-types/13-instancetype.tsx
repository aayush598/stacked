import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function InstanceTypeUtil(){ return (<div><NoteLead>Gets instance type from constructor.</NoteLead><NoteCode filename="instancetype.ts" code={`class C {}
type T = InstanceType<typeof C>; // C`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Factory returns."]} /></div>); }
