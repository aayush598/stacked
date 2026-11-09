import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";

export function SymbolNote() {
  return (
    <div>
      <NoteLead>
        <InlineCode>symbol</InlineCode> represents unique primitive identifiers. Even symbols with the same description
        are distinct values.
      </NoteLead>
      <NoteCode
        filename="symbol.ts"
        code={`const id: symbol = Symbol("id");
const anotherId: symbol = Symbol("id");
console.log(id === anotherId); // false

const USER_ID: unique symbol = Symbol("USER_ID");
type User = {
  [USER_ID]: number;
};`}
      />
      <NoteCallout tone="insight">
        <InlineCode>unique symbol</InlineCode> represents a specific symbol identity at the type level. Symbols are
        useful for unique keys, protocols, branding, and avoiding property-name collisions.
      </NoteCallout>
      <NoteTakeaways
        items={[
          "Every Symbol() call creates a distinct value.",
          "unique symbol is a type-level identity for a specific symbol constant.",
          "Well-known symbols include Symbol.iterator and Symbol.toStringTag.",
        ]}
      />
    </div>
  );
}
