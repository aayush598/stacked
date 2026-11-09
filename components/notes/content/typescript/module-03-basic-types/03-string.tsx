import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function StringNote() {
  return (
    <div>
      <NoteLead>
        The <InlineCode>string</InlineCode> type represents textual data. Single quotes, double quotes, and template
        literals all produce strings.
      </NoteLead>
      <NoteCode
        filename="string.ts"
        code={`let firstName: string = "Alex";
let lastName: string = 'Smith';
let message: string = \`Hello \${firstName}\`;

const name: string = "TypeScript";
name.length;
name.toUpperCase();
name.includes("Script");
name.slice(0, 4);`}
      />
      <ValidInvalidCards
        valid={{ code: 'let role: "admin" | "editor" = "admin";', note: "Use literal unions when only certain strings are allowed." }}
        invalid={{ code: "let username: string = 100;", note: "Numbers are not assignable to string." }}
      />
      <NoteCallout tone="tip">
        Prefer the primitive <InlineCode>string</InlineCode> type over the boxed object type{" "}
        <InlineCode>String</InlineCode>. Use string literal unions for fixed domain values.
      </NoteCallout>
      <NoteTakeaways
        items={[
          "Use string for textual data and template literals.",
          "Avoid the boxed String object type in ordinary application code.",
          "Use string literal unions when a value must be one of a fixed set of strings.",
        ]}
      />
    </div>
  );
}
