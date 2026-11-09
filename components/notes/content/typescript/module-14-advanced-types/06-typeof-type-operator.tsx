import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function TypeofTypeOperatorNote() {
  return (<div>
    <NoteLead>Type-level typeof captures the TypeScript type of a value.</NoteLead>
    <NoteCode filename="typeof-type-operator.ts" code={`const config = { host: 'localhost', port: 3000 };
type Config = typeof config;
// { host: string; port: number }

function make() { return { ok: true }; }
type R = ReturnType<typeof make>;`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["typeof in type position reads a value's type.", "Useful for deriving types from implementations.", "Different from runtime JS typeof."]} />
  </div>);
}
