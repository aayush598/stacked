import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";

export function AnyNote() {
  return (
    <div>
      <NoteLead>
        <InlineCode>any</InlineCode> disables normal type checking for the affected value. It is an escape hatch, not a
        safe default.
      </NoteLead>
      <NoteCode
        filename="any.ts"
        code={`let value: any = 100;
value = "Hello";
value.toUpperCase();
value.someUnknownMethod();
value(); // compiler allows; runtime may fail

function processValue(value: any) {
  return value.toUpperCase();
}
processValue(100); // runtime error`}
      />
      <NoteCallout tone="warning" title="Production warning">
        Avoid <InlineCode>any</InlineCode> as a shortcut for difficult TypeScript errors. It removes safety, weakens
        APIs, and can propagate through dependent expressions.
      </NoteCallout>
      <NoteTakeaways
        items={[
          "any accepts anything and allows almost any operation.",
          "It can hide bugs that TypeScript would normally catch.",
          "Prefer unknown for untrusted or genuinely unknown data.",
        ]}
      />
    </div>
  );
}
