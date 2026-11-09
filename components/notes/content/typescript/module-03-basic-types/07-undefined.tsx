import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";

export function UndefinedNote() {
  return (
    <div>
      <NoteLead>
        <InlineCode>undefined</InlineCode> represents an uninitialized or missing value. It commonly appears with
        optional properties, optional parameters, and functions that may not return a value.
      </NoteLead>
      <NoteCode
        filename="undefined.ts"
        code={`let username: string | undefined;
let age: number | undefined = undefined;

type User = {
  name: string;
  age?: number; // optional
};

function greet(name?: string): void {
  console.log(name ?? "Guest");
}

function findUser(id: number): string | undefined {
  return id === 1 ? "Alex" : undefined;
}`}
      />
      <NoteCallout tone="warning" title="exactOptionalPropertyTypes">
        With <InlineCode>exactOptionalPropertyTypes: true</InlineCode>, an optional property does not automatically
        permit explicitly assigning <InlineCode>undefined</InlineCode>. Use <InlineCode>age?: number | undefined</InlineCode>
        {" "}when you want that.
      </NoteCallout>
      <NoteTakeaways
        items={[
          "undefined usually means missing or uninitialized.",
          "Optional properties and parameters include undefined in their effective type.",
          "Use a consistent convention for null versus undefined in your project.",
        ]}
      />
    </div>
  );
}
