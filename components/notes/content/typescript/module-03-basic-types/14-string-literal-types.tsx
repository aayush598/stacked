import { NoteCallout, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { SyntaxPlayground } from "./shared/basic-types-visuals";

export function StringLiteralTypesNote() {
  return (
    <div>
      <NoteLead>String literal types constrain values to exact strings. They are extremely common for status fields, event names, roles, routes, and discriminated unions.</NoteLead>
      <SyntaxPlayground options={[
        { label: "Union", code: `type Role = "admin" | "editor" | "viewer";\nfunction canEdit(role: Role) {\n  return role === "admin" || role === "editor";\n}`, note: "Only known roles are accepted." },
        { label: "Template literal", code: "type Event = `on${Capitalize<'click' | 'focus'>}`;\n// \"onClick\" | \"onFocus\"", note: "Template literal types can generate string combinations (advanced, preview)." },
        { label: "Discriminated union", code: `type Action =\n  | { type: "add"; id: number }\n  | { type: "remove"; id: number };`, note: "type is a string literal discriminant." },
      ]} />
      <NoteCallout tone="insight">Prefer string literal unions over plain <code className="font-mono">string</code> when the valid values are known. You get autocomplete, refactor safety, and exhaustiveness checks.</NoteCallout>
      <NoteTakeaways items={["String literals encode exact allowed text values.", "Unions of string literals are a safer alternative to many enums.", "They power discriminated unions and precise APIs."]} />
    </div>
  );
}
