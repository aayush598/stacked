import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function HybridTypesNote(){
  return <div>
    <NoteLead>A hybrid type is callable and also has properties. JavaScript libraries sometimes expose this shape.</NoteLead>
    <NoteCode filename="hybrid-types.ts" code={`interface Counter {\n  (): number;\n  reset(): void;\n  value: number;\n}`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Hybrid types mirror function objects with members.", "Useful for typing legacy/library APIs.", "Prefer simpler designs in new code when possible."]} />
  </div>;
}
