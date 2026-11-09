import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function TypeofGuardNote() {
  return (<div><NoteLead>The <code>typeof</code> guard narrows primitives: string, number, boolean, bigint, symbol, undefined, function.</NoteLead>
      <NoteCode filename="typeof.ts" code={`function format(v: string | number | boolean) {\n  if (typeof v === "string") return v.trim();\n  if (typeof v === "number") return v.toFixed(2);\n  return v ? "yes" : "no";\n}`} />
      <NoteCallout tone="warning"><code>typeof null === "object"</code> in JavaScript. Handle null explicitly.</NoteCallout>
      <NoteTakeaways items={["typeof works well for primitive narrowing.", "It has runtime behavior — know JS typeof quirks.", "Combine with null checks when needed."]} /></div>);
}
