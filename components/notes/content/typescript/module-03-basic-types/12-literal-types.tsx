import { InlineCode, NoteCallout, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { SyntaxPlayground, ValidInvalidCards } from "./shared/basic-types-visuals";

export function LiteralTypesNote() {
  return (
    <div>
      <NoteLead>A literal type allows an exact value, not just a broad primitive category. <InlineCode>&quot;success&quot;</InlineCode> is a type that contains only that string; <InlineCode>42</InlineCode> and <InlineCode>true</InlineCode> work the same way for numbers and booleans.</NoteLead>
      <SyntaxPlayground options={[
        { label: "String literal", code: `let direction: "left" | "right";\ndirection = "left";\n// direction = "up"; // Error`, note: "Unions of literals model fixed choices." },
        { label: "as const", code: `const req = {\n  url: "/api",\n  method: "GET",\n} as const;\n// method is "GET", not string`, note: "Preserves literal values deeply." },
        { label: "Discriminant", code: `type Result =\n  | { ok: true; data: string }\n  | { ok: false; error: string };`, note: "Literal properties help TypeScript narrow unions." },
      ]} />
      <ValidInvalidCards valid={{ code: `type Mode = "light" | "dark";\nconst mode: Mode = "dark";`, note: "Value is one of the allowed literals." }} invalid={{ code: `type Mode = "light" | "dark";\nconst mode: Mode = "blue";`, note: "blue is a string but not an allowed literal." }} />
      <NoteCallout tone="insight">Literal types are one of TypeScript&apos;s most practical features: they model domain states precisely and make illegal states unrepresentable.</NoteCallout>
      <NoteTakeaways items={["Literals represent exact values as types.", "Combine with unions for fixed sets.", "as const preserves literals in objects/arrays."]} />
    </div>
  );
}
