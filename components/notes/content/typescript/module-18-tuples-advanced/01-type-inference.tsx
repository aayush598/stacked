import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function TypeInferenceM18Note(){ return (<div><NoteLead>Inference determines types when you do not annotate them explicitly, using initializers and context.</NoteLead><NoteCode filename="type-inference.ts" code={`let n = 1; // number
const s = 'hi'; // 'hi'
[1, 'a'].map(x => x);`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Inference reduces noise while preserving safety."]} /></div>); }
