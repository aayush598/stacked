import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function ImplementationSignaturesNote() {
  return (<div><NoteLead>The implementation signature is the actual function body signature. It must be broad enough to cover all overloads but is hidden from callers.</NoteLead>
      <NoteCode filename="impl.ts" code={`function len(x: string): number;\nfunction len(x: any[]): number;\nfunction len(x: string | any[]): number { // implementation\n  return x.length;\n}`} />
      <NoteCallout tone="warning">You cannot call the implementation signature directly from outside if overloads exist; callers use overload signatures.</NoteCallout>
      <NoteTakeaways items={["Implementation covers all overload behaviors.", "Keep it compatible with every overload.", "It is not part of the public call surface."]} /></div>);
}
