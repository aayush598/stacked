import { InlineCode, NoteCallout, NoteHeading, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { SyntaxPlayground, ValidInvalidCards } from "./shared/basic-types-visuals";

export function PrimitiveTypesNote() {
  return (
    <div>
      <NoteLead>TypeScript primitives map to JavaScript primitive values: <InlineCode>string</InlineCode>, <InlineCode>number</InlineCode>, <InlineCode>boolean</InlineCode>, <InlineCode>bigint</InlineCode>, and <InlineCode>symbol</InlineCode>. They represent single immutable values (the value itself is primitive behavior), not object wrappers.</NoteLead>
      <NoteHeading eyebrow="4.1–4.5">Core primitives</NoteHeading>
      <SyntaxPlayground options={[
        { label: "string", code: `let name: string = "Alex";\nlet msg = \`Hello \${name}\`;\nname.toUpperCase();`, note: "Text data. Use primitive string, not boxed String." },
        { label: "number", code: `let n: number = 42;\nlet price = 9.99;\nlet hex = 0xff;\nlet nan: number = NaN;`, note: "All JS numbers are IEEE 754 doubles; Infinity/NaN are number." },
        { label: "boolean", code: `let ok: boolean = true;\nlet done = false;`, note: "Logical true/false only." },
        { label: "bigint", code: `let big: bigint = 9007199254740993n;\nlet b = BigInt("10");\n// 10n + 1 // Error: cannot mix bigint and number`, note: "Arbitrary precision integers. No mixing with number." },
        { label: "symbol", code: `const id: symbol = Symbol("id");\nconst key = Symbol("id");\nid === key; // false\nconst u: unique symbol = Symbol("u");`, note: "Unique identifiers; each Symbol() call is distinct." },
      ]} />
      <ValidInvalidCards valid={{ code: `let x: number = 1;\nlet y: bigint = 1n;`, note: "Each value matches its primitive type." }} invalid={{ code: `let x: number = "1";\nlet z = 1n + 1; // Error`, note: "Wrong primitive type, or illegal bigint/number mixing." }} />
      <NoteHeading eyebrow="Avoid boxed types">string vs String</NoteHeading>
      <NoteCallout tone="warning">Use lowercase primitive types: <InlineCode>string</InlineCode>, <InlineCode>number</InlineCode>, <InlineCode>boolean</InlineCode>, <InlineCode>symbol</InlineCode>, <InlineCode>bigint</InlineCode>. Uppercase <InlineCode>String/Number/Boolean/Object</InlineCode> are wrapper/object types and are rarely what you want.</NoteCallout>
      <NoteTakeaways items={["Primitives are the most common building blocks.", "number includes integers, floats, Infinity, and NaN.", "bigint is for large integers and cannot mix with number."]} />
    </div>
  );
}
