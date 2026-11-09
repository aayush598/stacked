import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function DiscriminatedUnionsM14Note() {
  return (<div>
    <NoteLead>Discriminated unions use a shared literal tag so TypeScript can narrow variants safely.</NoteLead>
    <NoteCode filename="discriminated-unions.ts" code={`type Result =
  | { ok: true; data: string }
  | { ok: false; error: string };
function read(r: Result) { return r.ok ? r.data : r.error; }`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["A literal discriminant enables precise narrowing.", "Great for states, events, and variants.", "Combine with exhaustiveness checks."]} />
  </div>);
}
