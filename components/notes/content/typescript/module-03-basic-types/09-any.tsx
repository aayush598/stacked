import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function AnyNote() {
  return (
    <div>
      <NoteLead><InlineCode>any</InlineCode> turns off type checking for that value. It can be assigned to anything and anything can be assigned to it. This is useful during migration or rare interop cases, but dangerous as a habit.</NoteLead>
      <NoteCode filename="any.ts" code={`let value: any = "hello";\nvalue = 42;\nvalue.toUpperCase();\nvalue.nonExistent(); // TypeScript allows; runtime may crash\n\nfunction legacy(input: any) { return input.x.y.z; } // unsafe`} />
      <ValidInvalidCards valid={{ code: `// Safer boundary\nfunction parse(input: string): unknown {\n  return JSON.parse(input);\n}`, note: "Use unknown for untrusted input, then narrow." }} invalid={{ code: `const data: any = JSON.parse(text);\ndata.user.name; // no checks`, note: "any silently removes safety guarantees." }} />
      <NoteCallout tone="warning" title="Avoid in production code">Prefer <InlineCode>unknown</InlineCode>, generics, unions, or proper types. Enable <InlineCode>noImplicitAny</InlineCode> so accidental any is caught.</NoteCallout>
      <NoteTakeaways items={["any is an escape hatch, not a type.", "It spreads unsafety through your code.", "Use unknown + narrowing for external data."]} />
    </div>
  );
}
