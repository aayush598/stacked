import { NoteCallout, NoteCode, NoteHeading, NoteLead, NoteList, NoteTakeaways } from "@/components/notes/note-blocks";
import { SyntaxPlayground, ValidInvalidCards } from "./shared/basic-types-visuals";

export function TypeInferenceNote() {
  return (
    <div>
      <NoteLead>Type inference means TypeScript figures out types for you from code. It keeps code short while still static: once inferred, the type is checked like an explicit annotation.</NoteLead>
      <NoteCode filename="inference.ts" code={`let username = "Alex";   // string
let age = 25;            // number
let isActive = true;     // boolean
const status = "active"; // literal "active"

function add(a: number, b: number) { return a + b; } // returns number
const nums = [1, 2, 3]; // number[]
const mixed = [1, "two"]; // (string | number)[]`} />
      <SyntaxPlayground title="Inference kinds" options={[
        { label: "Initialization", code: `let count = 0; // number\ncount = 5;`, note: "The right-hand side gives TypeScript enough information." },
        { label: "Contextual", code: `const names = ["A", "B"];\nnames.map(name => name.toUpperCase());\n// name inferred as string`, note: "The surrounding API (map) tells TypeScript what name should be." },
        { label: "Best common type", code: `const values = [1, null, 3];\n// (number | null)[]\nconst pets = [new Dog(), new Cat()];`, note: "TypeScript picks a type compatible with all members." },
        { label: "Function return", code: `function flag(n: number) {\n  if (n > 0) return true;\n  return false;\n} // boolean`, note: "All return paths are combined into one return type." },
      ]} />
      <ValidInvalidCards valid={{ code: `let age = 25;\nage = 26;`, note: "Inferred type is still enforced." }} invalid={{ code: `let age = 25;\nage = "26"; // Error`, note: "Inference does not mean dynamic typing." }} />
      <NoteHeading eyebrow="Inference limits">When it is not enough</NoteHeading>
      <NoteList items={["Empty arrays/objects often infer too broadly.", "Public library boundaries should usually have explicit signatures.", "Sometimes you need a narrower type than TypeScript would widen to.", "Complex generic code can produce unclear inferred types; annotate for readability."]} />
      <NoteCallout tone="insight">Use inference by default for obvious locals; use annotations for contracts, boundaries, and cases where the inferred type would be misleading.</NoteCallout>
      <NoteTakeaways items={["Inference is static, not dynamic.", "Initialization and context are the main inference sources.", "Prefer clear code: inferred when obvious, explicit when important."]} />
    </div>
  );
}
