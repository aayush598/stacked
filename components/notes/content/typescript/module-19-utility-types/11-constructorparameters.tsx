import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ConstructorParametersUtil(){ return (<div><NoteLead>Gets constructor parameter tuple.</NoteLead><NoteCode filename="constructorparameters.ts" code={`class C { constructor(a:number){} }
type T = ConstructorParameters<typeof C>; // [number]`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Factory typing."]} /></div>); }
