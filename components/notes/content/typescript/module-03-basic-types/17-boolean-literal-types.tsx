import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function BooleanLiteralTypesNote() {
  return (
    <div>
      <NoteLead>
        Boolean literal types restrict a value to exactly <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. They become especially useful in discriminated unions.
      </NoteLead>
      <NoteCode
        filename="boolean-literals.ts"
        code={`type ApiResponse =
  | { success: true; data: string }
  | { success: false; error: string };

function handleResponse(response: ApiResponse): void {
  if (response.success) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
}`}
      />
      <NoteCallout tone="insight">
        <InlineCode>true | false</InlineCode> is equivalent to <InlineCode>boolean</InlineCode>, but a single literal
        like <InlineCode>success: true</InlineCode> can discriminate between object shapes.
      </NoteCallout>
      <NoteTakeaways items={["Boolean literals are powerful discriminants.", "Discriminated unions let TypeScript narrow object members safely.", "Use them for success/failure, enabled/disabled, and state-specific payloads."]} />
    </div>
  );
}
