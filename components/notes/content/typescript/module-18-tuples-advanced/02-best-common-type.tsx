import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function BestCommonTypeNote(){ return (<div><NoteLead>When inferring array/union-like values, TypeScript finds a best common type among candidates.</NoteLead><NoteCode filename="best-common-type.ts" code={`const arr = [1, null]; // (number | null)[]
class A{} class B extends A{}
const xs = [new B(), new A()]; // A[] (common/base context)`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Best common type balances all members.", "Sometimes you need an explicit annotation for intent."]} /></div>); }
