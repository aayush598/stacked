import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function TypeCompatibilityNote() {
  return (
    <div>
      <NoteLead>TypeScript is primarily <strong>structurally typed</strong>: compatibility is based on shape (members/types), not nominal declarations. If a value has the required structure, it is usually compatible.</NoteLead>
      <NoteCode filename="compatibility.ts" code={`type Point = { x: number; y: number };\ntype Named = { x: number; y: number; name: string };\n\nconst n: Named = { x: 1, y: 2, name: "A" };\nconst p: Point = n; // OK: has x,y\n\n// Excess property check (fresh object literal):\n// const p2: Point = { x: 1, y: 2, name: "A" }; // Error`} />
      <ValidInvalidCards valid={{ code: `function len(v: { length: number }) { return v.length; }\nlen("hi");\nlen([1,2]);`, note: "Different values are compatible because they share required shape." }} invalid={{ code: `type User = { id: number };\n// const u: User = { id: 1, extra: true }; // fresh literal excess property`, note: "Fresh object literals get extra strictness to catch typos." }} />
      <NoteCallout tone="insight">Function compatibility has special variance rules (especially with <InlineCode>strictFunctionTypes</InlineCode>). Learn the basic idea now; Module 10+/advanced variance covers details.</NoteCallout>
      <NoteTakeaways items={["Structural typing compares shapes.", "Extra properties can be compatible through an existing variable, but fresh literals may trigger excess property checks.", "Compatibility is about whether required members are safely present."]} />
    </div>
  );
}
