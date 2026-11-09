import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { NarrowingFlowDemo, ValidInvalidCards } from "./shared/basic-types-visuals";

export function UnknownNote() {
  return (
    <div>
      <NoteLead><InlineCode>unknown</InlineCode> is the safe version of <InlineCode>any</InlineCode> for values whose type you do not know yet. You can store anything in it, but you must narrow/check before using it.</NoteLead>
      <NoteCode filename="unknown.ts" code={`let input: unknown = JSON.parse(raw);\n\n// input.toUpperCase(); // Error\nif (typeof input === "string") {\n  input.toUpperCase(); // OK\n}\n\nfunction isUser(v: unknown): v is { id: number } {\n  return typeof v === "object" && v !== null && "id" in v && typeof (v as any).id === "number";\n}`} />
      <NarrowingFlowDemo />
      <ValidInvalidCards valid={{ code: `let v: unknown = getValue();\nif (typeof v === "number") v + 1;`, note: "Narrow, then operate." }} invalid={{ code: `let v: unknown = getValue();\nconst n: number = v; // Error`, note: "unknown cannot be assigned to specific types without proof." }} />
      <NoteCallout tone="insight">Use <InlineCode>unknown</InlineCode> at trust boundaries: JSON, API responses, user input, catch variables (<InlineCode>useUnknownInCatchVariables</InlineCode>).</NoteCallout>
      <NoteTakeaways items={["unknown accepts all values but permits almost no operations.", "Narrow with typeof, equality, in, instanceof, or type guards.", "Prefer unknown over any for untrusted data."]} />
    </div>
  );
}
