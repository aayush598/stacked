import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function EqualityNarrowingNote() {
  return (<div><NoteLead>Equality checks (===, !==, ==, !=) narrow types by comparing values.</NoteLead>
      <NoteCode filename="equality.ts" code={`function f(x: string | number, y: string | boolean) {\n  if (x === y) {\n    x.toUpperCase(); // both narrowed to string\n    y.toUpperCase();\n  }\n}\n\nfunction g(v: string | null) {\n  if (v !== null) v.length; // string\n}`} />
      <NoteTakeaways items={["Equality can narrow both sides of a comparison.", "=== is preferred for predictable checks.", "== null checks both null and undefined."]} /></div>);
}
