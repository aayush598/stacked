import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function FunctionConstraintsNote() {
  return (<div><NoteLead>Constraints on generic function parameters ensure the function can safely perform operations on its inputs.</NoteLead>
      <NoteCode filename="constraints.ts" code={`function longest<T extends { length: number }>(a: T, b: T): T {\n  return a.length >= b.length ? a : b;\n}\nlongest("ab", "abc");\nlongest([1], [1,2]);`} />
      <NoteTakeaways items={["Constraints guarantee required capabilities.", "Return T (not just the constraint type) to preserve specifics.", "Use the smallest useful constraint."]} /></div>);
}
