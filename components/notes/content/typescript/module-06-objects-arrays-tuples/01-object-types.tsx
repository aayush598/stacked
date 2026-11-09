import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ObjectTypesNote(){
  return <div>
    <NoteLead>Object types describe property names and value types. They are the foundation for modeling records, config, entities, and API payloads.</NoteLead>
    <NoteCode filename="object-types.ts" code={`type User = {\n  id: number;\n  name: string;\n};\nconst u: User = { id: 1, name: "Alex" };`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Object types define required/optional/readonly members.", "Use named types for reuse.", "Structural typing checks shape compatibility."]} />
  </div>;
}
