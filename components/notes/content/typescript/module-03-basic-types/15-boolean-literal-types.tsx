import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function BooleanLiteralTypesNote() {
  return (
    <div>
      <NoteLead>Boolean literal types are <InlineCode>true</InlineCode> and <InlineCode>false</InlineCode> as separate types. Together <InlineCode>true | false</InlineCode> is equivalent to <InlineCode>boolean</InlineCode>, but individually they are useful as discriminants.</NoteLead>
      <NoteCode filename="boolean-literals.ts" code={`type Success = { ok: true; data: string };\ntype Failure = { ok: false; error: string };\ntype Result = Success | Failure;\n\nfunction handle(r: Result) {\n  if (r.ok) {\n    r.data; // Success\n  } else {\n    r.error; // Failure\n  }\n}`} />
      <NoteCallout tone="tip">Use boolean literals when <InlineCode>true</InlineCode> and <InlineCode>false</InlineCode> carry different object shapes. This is cleaner than checking a separate status string in simple success/failure cases.</NoteCallout>
      <NoteTakeaways items={["true and false can be used as literal types.", "They enable precise narrowing in discriminated unions.", "boolean = true | false."]} />
    </div>
  );
}
