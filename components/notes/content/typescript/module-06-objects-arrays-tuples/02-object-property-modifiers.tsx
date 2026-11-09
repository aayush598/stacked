import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ObjectPropertyModifiersNote(){
  return <div>
    <NoteLead>Property modifiers change mutability and requiredness: readonly prevents reassignment, optional allows omission, and strict settings affect excess/optional behavior.</NoteLead>
    <NoteCode filename="object-property-modifiers.ts" code={`type Config = {\n  readonly id: string;\n  retries?: number;\n};\nconst c: Config = { id: "a" };\n// c.id = "b"; // Error`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["readonly protects property assignment.", "? marks an optional property.", "Exact optional behavior depends on compiler options."]} />
  </div>;
}
