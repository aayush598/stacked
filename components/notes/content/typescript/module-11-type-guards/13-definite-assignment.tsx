import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function DefiniteAssignmentNote() {
  return (<div><NoteLead>Definite assignment analysis checks that variables/properties are assigned before use. The <code>!</code> assertion can override it when initialization is indirect.</NoteLead>
      <NoteCode filename="definite.ts" code={`let value!: number;\ninit();\nconsole.log(value); // TS assumes assigned\n\nfunction init() { value = 42; }\n// Use ! only when you are certain`} />
      <NoteTakeaways items={["TS tracks whether values are definitely assigned.", "Use definite assignment assertion carefully.", "Prefer direct initialization when possible."]} /></div>);
}
