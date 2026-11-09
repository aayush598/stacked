import { InlineCode, NoteCallout, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { SyntaxPlayground } from "./shared/basic-types-visuals";

export function ReadonlyArraysNote() {
  return (
    <div>
      <NoteLead>Readonly arrays express &quot;you can read, but not mutate&quot;. TypeScript prevents calls like <InlineCode>push</InlineCode>, <InlineCode>pop</InlineCode>, and index assignment.</NoteLead>
      <SyntaxPlayground options={[
        { label: "readonly T[]", code: `const nums: readonly number[] = [1, 2, 3];\nnums[0];\n// nums.push(4); // Error\n// nums[0] = 9; // Error`, note: "Common readonly array syntax." },
        { label: "ReadonlyArray<T>", code: `const names: ReadonlyArray<string> = ["A", "B"];`, note: "Generic utility form." },
        { label: "as const", code: `const dirs = ["up", "down"] as const;\n// readonly ["up", "down"]`, note: "as const makes a readonly tuple of literals." },
      ]} />
      <NoteCallout tone="insight">Readonly types are compile-time guarantees. They help API design and prevent accidental mutation, but JavaScript runtime can still mutate unless you use runtime immutability too.</NoteCallout>
      <NoteTakeaways items={["Use readonly arrays for immutable views/contracts.", "Mutation methods are blocked by the type checker.", "Accept readonly arrays in parameters when you do not mutate."]} />
    </div>
  );
}
