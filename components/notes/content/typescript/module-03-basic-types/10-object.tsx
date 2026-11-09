import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteHeading,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function ObjectNote() {
  return (
    <div>
      <NoteLead>
        TypeScript&apos;s <InlineCode>object</InlineCode> type represents non-primitive values. It includes objects,
        arrays, functions, and dates, but excludes primitives like <InlineCode>string</InlineCode> and{" "}
        <InlineCode>number</InlineCode>.
      </NoteLead>
      <NoteCode
        filename="object.ts"
        code={`let value: object;
value = {};
value = [];
value = new Date();
value = () => {};

type User = { id: number; name: string };
function processUser(user: User): void {
  console.log(user.name);
}`}
      />
      <ValidInvalidCards
        valid={{ code: "let value: object = {};", note: "object accepts non-primitive values." }}
        invalid={{ code: 'let value: object = "hello";', note: "Primitive values are not assignable to object." }}
      />
      <NoteHeading eyebrow="Be specific">object vs {} vs Object vs shape</NoteHeading>
      <NoteCallout tone="tip">
        Avoid broad <InlineCode>object</InlineCode> and uppercase <InlineCode>Object</InlineCode> for normal domain
        modeling. Prefer a structured shape like <InlineCode>{"{ id: number; name: string }"}</InlineCode> or{" "}
        <InlineCode>unknown</InlineCode> when the structure is not known.
      </NoteCallout>
      <NoteTakeaways
        items={[
          "object means non-primitive, not a specific object shape.",
          "{} means non-nullish in strict mode; it is not an empty object type.",
          "Use structured object types when you know the properties.",
        ]}
      />
    </div>
  );
}
