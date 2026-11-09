import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function FunctionOverloadsNote() {
  return (<div><NoteLead>Overloads provide multiple call signatures for one function implementation. Callers see the overloads; the implementation must handle all cases.</NoteLead>
      <NoteCode filename="overloads.ts" code={`function parse(input: string): object;\nfunction parse(input: string, reviver: (k: string, v: unknown) => unknown): object;\nfunction parse(input: string, reviver?: (k: string, v: unknown) => unknown): object {\n  return JSON.parse(input, reviver as any);\n}`} />
      <NoteTakeaways items={["Overloads define multiple public call shapes.", "The implementation signature is not directly callable by consumers.", "Use unions first; overloads when return types depend on input patterns."]} /></div>);
}
