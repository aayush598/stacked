import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function NoInferUtil(){ return (<div><NoteLead>Prevents a position from being used for inference (TS 5.4+).</NoteLead><NoteCode filename="noinfer.ts" code={`function pick<T>(x:T, y: NoInfer<T>){}
pick('a','a');`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Control inference source."]} /></div>); }
