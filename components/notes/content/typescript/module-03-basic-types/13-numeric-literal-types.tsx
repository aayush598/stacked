import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function NumericLiteralTypesNote() {
  return (
    <div>
      <NoteLead>Numeric literal types restrict a value to specific numbers. They are great for HTTP status codes, retry counts, dice sides, pagination sizes, or any fixed numeric domain.</NoteLead>
      <NoteCode filename="numeric-literals.ts" code={`type HttpOk = 200 | 201 | 204;\nlet status: HttpOk = 200;\n// status = 500; // Error\n\ntype Dice = 1 | 2 | 3 | 4 | 5 | 6;\nfunction roll(): Dice { return 4; }\n\nconst retries = 3 as const; // type 3`} />
      <ValidInvalidCards valid={{ code: `type Port = 80 | 443 | 3000;\nconst p: Port = 443;`, note: "Allowed numeric member." }} invalid={{ code: `type Port = 80 | 443 | 3000;\nconst p: Port = 8080;`, note: "8080 is a number, but not in the union." }} />
      <NoteCallout tone="tip">Remember widening: <InlineCode>let n = 1</InlineCode> is usually <InlineCode>number</InlineCode>; <InlineCode>const n = 1</InlineCode> or <InlineCode>as const</InlineCode> keeps the literal <InlineCode>1</InlineCode>.</NoteCallout>
      <NoteTakeaways items={["Numeric literals model fixed numeric choices.", "They catch invalid numbers at compile time.", "Use with unions for readable domain constraints."]} />
    </div>
  );
}
