import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteHeading,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function NullNote() {
  return (
    <div>
      <NoteLead>
        <InlineCode>null</InlineCode> represents an intentional absence of a value. With{" "}
        <InlineCode>strictNullChecks: true</InlineCode>, it is a distinct type that must be allowed explicitly.
      </NoteLead>
      <NoteCode
        filename="null.ts"
        code={`let username: string | null = null;
username = "Alex";
username = null;

function printUsername(username: string | null): void {
  if (username !== null) {
    console.log(username.toUpperCase());
  }
}

const displayName = username ?? "Guest";`}
      />
      <ValidInvalidCards
        valid={{ code: "let username: string | null = null;", note: "A union explicitly allows null." }}
        invalid={{ code: "let username: string = null;", note: "In strict mode, null is not assignable to string." }}
      />
      <NoteHeading eyebrow="Nullish coalescing">?? keeps real values</NoteHeading>
      <NoteCallout tone="tip">
        <InlineCode>??</InlineCode> falls back only for <InlineCode>null</InlineCode> or{" "}
        <InlineCode>undefined</InlineCode>. It preserves <InlineCode>0</InlineCode>, <InlineCode>false</InlineCode>, and{" "}
        <InlineCode>&quot;&quot;</InlineCode>.
      </NoteCallout>
      <NoteTakeaways
        items={[
          "Use null for an intentional empty/absent domain value.",
          "Allow null explicitly with a union in strict TypeScript.",
          "Narrow nullable values before accessing properties.",
        ]}
      />
    </div>
  );
}
