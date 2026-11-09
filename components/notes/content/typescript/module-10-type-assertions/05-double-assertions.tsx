import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function DoubleAssertionsNote() {
  return (<div><NoteLead>Double assertions (<code>value as unknown as T</code>) force TypeScript to accept an unrelated type. This is a strong escape hatch and usually indicates a design problem.</NoteLead>
      <NoteCode filename="double.ts" code={`const value = "hello" as unknown as number; // compiles, dangerous
// TS blocks direct string -> number assertion
// double assertion bypasses that protection`} />
      <NoteCallout tone="warning">Double assertions are almost always a code smell. Fix the types or validate the data instead.</NoteCallout>
      <NoteTakeaways items={["Double assertions bypass normal type compatibility checks.", "They can hide serious type errors.", "Use only in rare, justified interop cases."]} /></div>);
}
