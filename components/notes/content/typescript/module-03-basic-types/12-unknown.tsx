import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteHeading,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";
import { AssignabilityLadder, ValidInvalidCards } from "./shared/basic-types-visuals";

export function UnknownNote() {
  return (
    <div>
      <NoteLead>
        <InlineCode>unknown</InlineCode> represents a value whose type is not currently known. It accepts all values
        like <InlineCode>any</InlineCode>, but requires narrowing before unsafe operations.
      </NoteLead>
      <NoteCode
        filename="unknown.ts"
        code={`let value: unknown = "hello";
// value.toUpperCase(); // Error

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

function parseData(input: string): unknown {
  return JSON.parse(input);
}`}
      />
      <ValidInvalidCards
        valid={{ code: 'if (typeof value === "string") value.toUpperCase();', note: "Narrow unknown before using string-specific operations." }}
        invalid={{ code: "let name: string = value;", note: "unknown is not assignable to a specific type without narrowing or assertion." }}
      />
      <NoteHeading eyebrow="External data">Validate before trusting</NoteHeading>
      <NoteCallout tone="insight">
        Use <InlineCode>unknown</InlineCode> for JSON, API responses, form payloads, and other untrusted boundaries.
        Write a type guard or runtime validator before treating the value as a specific shape.
      </NoteCallout>
      <AssignabilityLadder />
      <NoteTakeaways
        items={[
          "unknown is the safe top type: every type can be assigned to it.",
          "You must narrow unknown before arbitrary operations.",
          "Prefer unknown over any for external or uncertain data.",
        ]}
      />
    </div>
  );
}
