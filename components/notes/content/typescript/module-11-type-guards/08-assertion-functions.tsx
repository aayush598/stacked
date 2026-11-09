import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function AssertionFunctionsNote() {
  return (<div><NoteLead>Assertion functions throw if a condition is not met and narrow the type for the rest of the scope using <code>asserts</code>.</NoteLead>
      <NoteCode filename="asserts.ts" code={`function assertString(v: unknown): asserts v is string {\n  if (typeof v !== "string") throw new Error("Not a string");\n}\n\nfunction process(v: unknown) {\n  assertString(v);\n  v.toUpperCase(); // string after assertion\n}`} />
      <NoteTakeaways items={["Assertion functions narrow by throwing on invalid input.", "Use asserts value is Type in the return type.", "Good for fail-fast validation patterns."]} /></div>);
}
