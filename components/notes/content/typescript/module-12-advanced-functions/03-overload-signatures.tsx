import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function OverloadSignaturesNote() {
  return (<div><NoteLead>Overload signatures are the public call forms TypeScript shows to callers. They must be compatible with the implementation.</NoteLead>
      <NoteCode filename="overload-sigs.ts" code={`function makeDate(ts: number): Date;\nfunction makeDate(y: number, m: number, d: number): Date;\nfunction makeDate(a: number, b?: number, c?: number): Date {\n  return b !== undefined && c !== undefined ? new Date(a,b-1,c) : new Date(a);\n}`} />
      <NoteTakeaways items={["List overloads from most specific to most general.", "Callers pick from overload signatures.", "Implementation must accept all overload cases."]} /></div>);
}
