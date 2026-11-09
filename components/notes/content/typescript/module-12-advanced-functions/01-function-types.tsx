import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function FunctionTypesNote() {
  return (<div><NoteLead>Function types describe callable signatures: parameter types and return type.</NoteLead>
      <NoteCode filename="fn-types.ts" code={`type Add = (a: number, b: number) => number;\nconst add: Add = (a, b) => a + b;\n\ninterface Formatter { (n: number): string }`} />
      <NoteTakeaways items={["Function types capture call contracts.", "Use type aliases or interfaces.", "Contextual typing can infer parameter types."]} /></div>);
}
