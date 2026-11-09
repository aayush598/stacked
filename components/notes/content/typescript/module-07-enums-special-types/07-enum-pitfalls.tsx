import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function EnumPitfallsNote(){
  return <div>
    <NoteLead>Enums have trade-offs: runtime output, nominal-ish confusion in some cases, tree-shaking/build concerns, and API compatibility decisions.</NoteLead>
    <NoteCode filename="enum-pitfalls.ts" code={`// Pitfalls to watch:\n// 1. emitted JS size/runtime object\n// 2. const enum build constraints\n// 3. numeric reverse mappings\n// 4. public API lock-in`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Understand emitted JavaScript before choosing enums.", "Prefer string literal unions for many simple cases.", "Use enums intentionally, not by default."]} />
  </div>;
}
