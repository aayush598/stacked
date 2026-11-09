import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function XORUtil(){ return (<div><NoteLead>Exclusive-or between two object types.</NoteLead><NoteCode filename="xor.ts" code={`type XOR<A,B> = (A | B) extends object ? (Without<A,B> & B) | (Without<B,A> & A) : A | B;
type Without<A,B> = { [K in Exclude<keyof A, keyof B>]?: never };`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Disjoint config shapes."]} /></div>); }
